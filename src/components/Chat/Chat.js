import React, { useEffect, useRef } from 'react'
import { ChatBottom, ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, Loading } from "./chat.style";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import ChatInput from './ChatInput/ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Message from './Messages/Message';
import { CircularProgress } from '@material-ui/core';
function Chat() {
    const roomId = useSelector(selectRoomId);
    const chatRef = useRef(null)
    const[roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId &&
           db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp", "asc")
    );
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior : "smooth",
        });
    }, [roomId, loading])
    
    return (
        <ChatContainer>
            {roomDetails && roomMessages ? (
                 <>
                 <Header>
                     <HeaderLeft>
                         <h4>
                             <strong>#{roomDetails?.data().name}</strong>
                             <StarBorderOutlinedIcon />
                         </h4>
                         
                     </HeaderLeft>
     
                     <HeaderRight>
                         <p>
                            <InfoOutlinedIcon /> Details
                         </p>
                     </HeaderRight>
                 </Header>
     
                 <ChatMessages>
                     {roomMessages?.docs.map((doc) => {
                         const { message, timestamp, user, userImage } = doc.data();
                         return  <Message
                             key = {doc.id}
                             message = {message}
                             timestamp = {timestamp}
                             user = {user}
                             userImage = {userImage}
                             />
                         
                         
                     })}
                     <ChatBottom ref={chatRef} />
                 </ChatMessages>
                 
                 <ChatInput 
                    channelName={roomDetails?.data().name}
                   channelId={roomId}
                   chatRef = {chatRef}
                 />
                 </>
            ):
            <Loading>
                 <CircularProgress size="5rem"/>
                </Loading>
           
            }
           
        </ChatContainer>
    )
}

export default Chat


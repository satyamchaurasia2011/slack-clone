import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { auth, db } from '../../../firebase';
import { ChatInputContainer } from "./ChatInput.style";
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
function ChatInput({channelName, channelId, chatRef}) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth)
    const sendMessage = (e) => {
        e.preventDefault();
        if(!channelId)
          return false;
        
        db.collection('rooms').doc(channelId).collection("messages").add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user : user.displayName,
            userImage : 
               user.photoURL
        });
        chatRef.current.scrollIntoView({
            behavior : "smooth"
        });
        setInput("");
    }
    return (
        <ChatInputContainer>
            <form>
                <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../../features/appSlice';
import { db } from '../../../firebase';
import { SideBarOptionChannel, SideBarOptionContainer } from "./SidebarOptions.style";
function SidebarOptions({Icon, title, addChannelOption, id}) {
    const dispatch = useDispatch()
    const [click, setClick] = useState(false);
    const [channels] = useCollection(db.collection("rooms"));
    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if(channelName) {
             db.collection("rooms").add({
                name : channelName,
            });
        }
    }
    const selectChannel = () => {
        if(id) {  
            dispatch(enterRoom({
                roomId : id
            }))
            setClick(true);
        }
    }
    useEffect(() => {
      if(!click)
      {
          dispatch(enterRoom({
              roomId : channels?.docs[0].id
          }))
      }
    }, [channels])
    return (
        <SideBarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{padding : 10}} />}
            
                {Icon ? (
                  <h3>{title}</h3>
                ): (
                    <SideBarOptionChannel>
                        <span>#</span> {title}
                    </SideBarOptionChannel>
                )}
                
        </SideBarOptionContainer>
    );
}

export default SidebarOptions


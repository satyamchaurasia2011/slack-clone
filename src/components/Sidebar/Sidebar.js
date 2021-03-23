import React from 'react'
import * as bar from "./Sidebar.style";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import SidebarOptions from './SidebarOptions/SidebarOptions';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
function Sidebar() {
    const [channels] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth)
    return (
        <bar.SidebarContainer>
            <bar.SidebarHeader>
                <bar.SidebarInfo>
                    <h2>INFINITEVERSE</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </bar.SidebarInfo>
                <CreateIcon />
            </bar.SidebarHeader>

            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOptions Icon={DraftsIcon} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} title="File browser" />
            <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map((doc) => {
                    return <SidebarOptions 
                        key={doc.id}
                        id={doc.id}
                        title={doc.data().name}
                    />
                })}
        </bar.SidebarContainer>
    )
}

export default Sidebar


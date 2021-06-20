import React, { useState } from 'react'
import clsx from 'clsx';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ReorderIcon from '@material-ui/icons/Reorder';
import * as Head from "./Header.style";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Button, List, SwipeableDrawer } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';

function Header() {
    const [user] = useAuthState(auth);
    const[left, setLeft] = useState(false);

      const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setLeft(open);
      };
    return (
        <Head.HeaderContainer>
            {/* Header left */}
            <Head.HeaderLeft>
                <Head.HeaderAvatar 
                onClick = {() => auth.signOut()}
                alt = {user?.displayName}
                src = {user?.photoURL}
                />
                
            </Head.HeaderLeft>
            <Head.Bar>
            <React.Fragment key='left'>
          <Button style={{color:"white", marginLeft:"-18px"}} onClick={toggleDrawer(true)}><ReorderIcon /></Button>
          <SwipeableDrawer
          
            anchor="left"
            open={left}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
              <div
                   style={{width:"50vw"}}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    >
                    <List   style={{position:"absolute", top:"-60px", backgroundColor:"#49274b"}}>
                     <Sidebar  />
                    </List>
                
                   
                </div>
          </SwipeableDrawer>
        </React.Fragment>
           
            </Head.Bar>
            
            <AccessTimeIcon style={{marginLeft:"-20px", marginRight:"20px"}} />

          {/* Header Search */}
          <Head.HeaderSearch>
              <SearchIcon />
              <input placeholder="search" />
          </Head.HeaderSearch>

           {/* Header Right */}
           <Head.HeaderRight>
                < HelpOutlineIcon />
           </Head.HeaderRight>
        </Head.HeaderContainer>
    )
}

export default Header


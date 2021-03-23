import React from 'react'

import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import * as Head from "./Header.style";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
function Header() {
    const [user] = useAuthState(auth);
    return (
        <Head.HeaderContainer>
            {/* Header left */}
            <Head.HeaderLeft>
                <Head.HeaderAvatar 
                onClick = {() => auth.signOut()}
                alt = {user?.displayName}
                src = {user?.photoURL}
                />
                <AccessTimeIcon />
            </Head.HeaderLeft>
            

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


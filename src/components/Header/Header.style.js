import styled from 'styled-components'
import { Avatar } from "@material-ui/core";

export const HeaderSearch = styled.div`
    flex : 0.4;
    opacity : 1;
    border-radius : 6px;
    background-color : #421f44;
    text-align : center;
    display : flex;
    padding : 0 50px;
    color : gray;
    border : 1px gray solid;

    >input {
        background-color : transparent;
        color : white;
        outline : none;
        border : none;
        min-width : 30vw;
        text-align : center;
        
    }
    @media (max-width: 427px) {
            width: 10vw;
        }
        @media (max-width: 374px) {
            display: none;
        }
`;

export const HeaderContainer = styled.div`
display : flex;
position : fixed;
width : 100%;
align-items : center;
justify-content : space-between;
padding : 10px 0px;
background-color : var(--slack-color);
color : white;
@media (max-width: 767px) {
       justify-content: space-around;
    }
`;

export const Bar = styled.div`
    margin-right: 30px; 
    cursor: pointer;
    @media (min-width: 767px) {
       display: none !important;
    }
`;
export const HeaderLeft = styled.div`
    flex : 0.3;
    display : flex;
    align-items : center;
    margin-left : 20px;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const HeaderRight = styled.div`
    flex : 0.3;
    display : flex;
    align-items : flex-end;

    >.MuiSvgIcon-root {
        margin-left : auto;
        margin-right : 20px;
    }
`;

export const HeaderAvatar = styled(Avatar)`
cursor : pointer;
 
 :hover{
     opacity : 0.8;
 } 
`;


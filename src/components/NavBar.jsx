import React from 'react'
import IconButton from '@mui/material/IconButton';
import { NavLink, useLocation } from "react-router-dom"
import TemporaryDrawer from "./Drawer"

import styled from "@emotion/styled"
import { MOBILE_BREAKPOINT } from "../styles/global"

import { CloseOutlined } from '@mui/icons-material'
import MobileMenuIcon from '/menuIcon.svg'
import Logo from './Logo'
import NavigationItems from "./NavigationItems"
import { SocialLinks } from './Social'
import { APP_ROUTES, MAIN_NAV_ROUTES, USER_NAV_ROUTES } from '../routes/publicRoutes'
// import { useAuth } from '../hooks/useAuth'
import LoggedUser from './LoggedUser'
import { useAuth } from '../hooks/useAuth';



const TopBar = ({ navRoutes }) => {

  const drawerState = React.useState(false);
  const { user } = useAuth()
  const location = useLocation()
  // const { user } = useAuth()
  // const isUser = (location.pathname === '/d');

  return <OuterContainer>
      <TopContainer>
          {
            user ? 
            <UserNav drawerState={drawerState} appRoutes={APP_ROUTES} user={user}/>
            : <></>
          }
      </TopContainer>

      {/* <MobileMenu navRoutes={APP_ROUTES} drawerState={drawerState}/> */}
      
    </OuterContainer>
  };

const PublicNav = ({ navRoutes, drawerState }) => <NavBarStyle> 
  <div style={{display: 'flex', }}>
    <NavLink to='/' style={{ 
        padding: 0, 
        paddingRight: 80,
        gridArea: 'logo', 
        display: 'flex',
        alignItems: 'center',
          marginLeft: '1em' }}>
      <Logo size='150px' small='150px' margin='0' />  
    </NavLink>
  </div>

  <SocialLinks small hideOnMobile gap='8px'/>

  <MenuButton>
    <IconButton onClick={()=>drawerState[1](true)} >
      <img src={MobileMenuIcon}/>
    </IconButton>
  </MenuButton>
</NavBarStyle>;

const UserNav = ({ user, drawerState }) => <NavBarStyle> 

  <NavLink to='/' style={{ 
      padding: 0, 
      paddingRight: 80,
      gridArea: 'logo', 
      display: 'flex',
      alignItems: 'center',
        marginLeft: '1em' }}>
    <Logo size='150px' small='150px' margin='0' />  
  </NavLink>
  
  <LoggedUser user={user} appRoutes={APP_ROUTES}/>

<MenuButton>
  <IconButton onClick={()=>drawerState[1](true)} >
    <img src={MobileMenuIcon}/>
  </IconButton>
</MenuButton>
</NavBarStyle>;

const MobileMenu = ({drawerState, navRoutes}) => <TemporaryDrawer drawerState={drawerState}>
  <MobileMenuStyle>
    <MobileCloseIconStyle>
      <IconButton onClick={()=>drawerState[1](false)}>
        <CloseOutlined />
      </IconButton>
    </MobileCloseIconStyle>

    <NavigationItems column navRoutes={navRoutes} margin='5em 0 0 0' gap='2em'/>
    <div >
      <CTAStyle>
          Let's talk 
          <br/>
          <span> hello@pollinations.ai </span>
      </CTAStyle>
      <SocialLinks small gap='1em' />
    </div>
  </MobileMenuStyle>
</TemporaryDrawer>

const OuterContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`



const MobileMenuStyle = styled.div`
position: relative;
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

padding: 20px 10px 60px;
`;
const MobileCloseIconStyle = styled.div`
position: absolute;
top: 20;
right: 20;
`;
const CTAStyle = styled.p`

font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
text-align: center;

color: #FFFFFF;
padding-bottom: 0em;

span {
    color: #E9FA29;
}
`
const TopContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_BREAKPOINT}){
    padding: 0;
  }
  
`

const NavBarStyle = styled.div`
  width: 100%;
  max-width: 1440px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "logo nav social";
  align-content: center;
  gap: 1em;

  font-size: 1rem;
  .MuiTypography-colorPrimary{
    color: #fdfdfd !important;  
  }
  padding: 1% 0;
  @media (max-width: ${MOBILE_BREAKPOINT}){
    grid-template-areas: "logo nav mobilebutton social";
  }
`
const MenuButton = styled.div`
grid-area: mobilebutton;
justify-self: flex-end;
@media (min-width: ${MOBILE_BREAKPOINT}){
  display: none;
}
`
export default TopBar

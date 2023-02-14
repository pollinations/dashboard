import styled from '@emotion/styled'
import { BackGroundImage, Colors, MOBILE_BREAKPOINT } from '../../styles/global';
import { Outlet, NavLink } from 'react-router-dom';
import BgImgSrc from '/bg_hero_landing.png'

const AdminRoutes = [
  {
    id: 'usage',
    label: 'Usage',
    to: '/d/usage'
  },
  {
    id: 'billing',
    label: 'Billing',
    to: '/d/billing',
    children: [
      {
        id: 'billing_history',
        label: 'History',
        to: '/d/billing/history'
      },
      {
        id: 'billing_pref',
        label: 'Preferences',
        to: '/d/billing/preferences'
      }
    ]
  },
  {
    id: 'token',
    label: 'API Token',
    to: '/d/token'
  }
]

const NavLinkWithChildren = (route) => {

  const { to, label, children } = route;

  return <>
    <NavLink
      to={to} 
      children={label} 
      style={({isActive})=> ({ color: isActive ? Colors.lime : Colors.offwhite})}
    />
    {
      children.map( subroute => <SubRouteStyle key={subroute.to}>
        <NavLink 
          to={subroute.to} 
          children={subroute.label} 
          style={({isActive})=> ({ color: isActive ? Colors.lime : Colors.offwhite})}
        />
        </SubRouteStyle>
        )
    }
  </>
}

const SubRouteStyle = styled.div`
a{
  font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 31px;
    text-align: left;

    text-transform: capitalize;

    color: #FFFFFF;
    text-decoration: none;
    margin-left: 1em;
    :hover{
      text-decoration: underline;
    }
`

export default function AdminArea(){
    return <>
  <ContainerStyle>
    <NavStyle>
      {
        AdminRoutes.map( route => 
          !route.children ?
          <NavLink 
            key={route.to}
            to={route.to} 
            children={route.label} 
            style={({isActive})=> ({ color: isActive ? Colors.lime : Colors.offwhite})}
          />
          :
          <NavLinkWithChildren key={route.to} {...route}/>
      )}
    </NavStyle>
    <Container>
      <Outlet/>
    </Container>
  </ContainerStyle>
  <BackGroundImage
    src='/BG7.png'
    zIndex='-2'
    position='fixed'
  />
  </>
}
const NavStyle = styled.nav`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-left: 2em;
a{
  font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: left;

    text-transform: capitalize;

    color: #FFFFFF;
    text-decoration: none;
    :hover{
      text-decoration: underline;
    }
}

`
const Container = styled.div`
grid-column: 3/12;
position: relative;

background: linear-gradient(90.41deg, rgba(255, 255, 255, 0.17) 1.53%, rgba(255, 255, 255, 0.1) 98.72%);
border-radius: 4px;
border: 1px solid hsla(0,0%,100%,0);
padding: 3em ;
`;

const ContainerStyle = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: repeat(12,1fr);
gap: 2em;


// width: 100%;
height: 100%;
margin-top: 3em;
padding: 2em;




@media (max-width: ${MOBILE_BREAKPOINT}) {
  gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
`
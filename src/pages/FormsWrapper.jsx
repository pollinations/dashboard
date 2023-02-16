import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom';
import { BackGroundImage, BackGroundVideo, Colors, MOBILE_BREAKPOINT } from '../styles/global';

export default function FormsWrapper(){
    return <Style>
    <ListStyle style={{width: 300}}>
        <Outlet />
    </ListStyle>
    <BackGroundVideo
        loop
        opacity='50%'
        autoPlay
        muted 
        position='fixed'
        src='https://pollinations.ai/dreamachine/dreamachine_00.mp4'
        top='0'
        zIndex='-1' 
        alt="background-image" 
    />
  </Style>
}
const ListStyle = styled.div`
display: flex;
flex-direction: column;
gap: 3em;

form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
padding: 2em;
background: linear-gradient(90.41deg, rgba(255, 255, 255, 0.17) 1.53%, rgba(255, 255, 255, 0.1) 98.72%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.17);
backdrop-filter: blur(15px);
/* Note: backdrop-filter has minimal browser support */
background: ${Colors.background_body};
border-radius: 4px;
border: 1px solid hsla(0,0%,100%,0);
min-height: 530px;
padding: 40px 56px;
@media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    height: 100%;
}
`
const Style = styled.div`
@media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-column: 1/12;
}
grid-column: 7/12;
width: 100%;
min-height: 100vh;
padding: 0em;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Container = styled.div`
grid-column: 1/13;
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

height: 100%;
margin-top: 3em;
padding: 2em;

@media (max-width: ${MOBILE_BREAKPOINT}) {
  gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
`
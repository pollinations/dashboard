import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom';
import { BackGroundImage, MOBILE_BREAKPOINT } from '../styles/global';

export default function DashboardTemp(){
    return <ContainerStyle>
      <Container>
        <Outlet/>
      </Container>
      <BackGroundImage
      src='/BG7.png'
      zIndex='-2'
      position='fixed'/>
    </ContainerStyle>
}
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
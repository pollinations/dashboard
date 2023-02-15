import styled from '@emotion/styled'
import { Colors, MOBILE_BREAKPOINT } from "../styles/global";

export default function SimpleInfo(props){

const { body, title } = props;

return <Style>
    <ListStyle style={{width: 300}}>
        <div>
        <TitleStyle children={title}/>
        <div style={{width: '100%', height: 20}}/>
        <BodyStyle children={body}/>

        </div>
        
        <Logo src='/logo_dark.png'/>

    </ListStyle>
</Style>
}
const Logo = styled.img`
width: 150px;
// padding-top: 6em;
`

const TitleStyle = styled.h1`
font-family: 'Uncut-Sans-Variable';
line-height: 50px;
text-transform: uppercase;
color: ${Colors.offblack};
font-style: normal;
font-weight: 700;
font-size: 33px !important;
margin: 1em 0;
`
const BodyStyle = styled.p`
font-family: 'Uncut-Sans-Variable';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 30px;
margin: 0;
/* gray 1 */

color: ${Colors.gray1};
`

const ListStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
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
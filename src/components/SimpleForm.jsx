import {
    // Button,
     TextField 
} from "@mui/material";
import styled from '@emotion/styled'
import { Colors, MOBILE_BREAKPOINT } from "../styles/global";
import Button from "./Button";

export default function SimpleForm(props){

const { fields, err, title, onSubmit, extras } = props;

return <Style>
    <ListStyle style={{width: 300}}>
        <HeaderStyle>
            <h1>
                {title}
            </h1>
            <p>
                desc
            </p>
        </HeaderStyle>
        <form onSubmit={onSubmit}>
            {
                fields.map( field => 
                field.component ||
                <TextField 
                    key={field.label} 
                    {...field}
                    variant="standard" /> )
            }
            <ErrorFeedback children={err}/>
            <div>
                <Button children='Continue' type='submit' outlined/>
            </div>
        </form>
        {
            extras ? extras : <></>
        }
        <Logo src='/logo_dark.png'/>

    </ListStyle>
</Style>
}


const SuccessFeedback = styled.p`
color: lime;
`
const Logo = styled.img`
width: 150px;
// align-self: center;
padding-top: 6em;
`
const ErrorFeedback = styled.p`
max-width: 300px;
min-height: 1.5em;
color: red;
font-size: 0.9em;
`
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
const HeaderStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;

h1, h2, p {
    font-family: 'Uncut-Sans-Variable';
}
h1 {
    font-family: 'Uncut-Sans-Variable';
    line-height: 50px;
    text-transform: uppercase;
    color: ${Colors.offblack};
    font-style: normal;
    font-weight: 700;
    font-size: 33px !important;
    margin: 0;
}
p {
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    margin: 0;
    /* gray 1 */

    color: ${Colors.gray1};


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}
`

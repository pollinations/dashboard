import { TextField } from "@mui/material";
import styled from '@emotion/styled'
import { Colors } from "../styles/global";
import Button from "./Button";

export default function SimpleForm(props){

const { fields, err, title, onSubmit, extras } = props;

return <>
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
        {
            onSubmit ? 
            <div>
            <Button children='Continue' type='submit' outlined/>
            </div>
            : <></>
        }
    </form>
    {
        extras ? extras : <></>
    }
    <Logo src='/logo_dark.png'/>
</>
}

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

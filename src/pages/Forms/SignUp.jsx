import SimpleForm from "../../components/SimpleForm";
import React from "react"
import { signUpwithEmail } from '../../supabase/user';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styled from '@emotion/styled'


export default function SignUpPage(){

const [ err, setErr ] = React.useState('')
const [ success, setSuccess ] = React.useState('')
const usernameRef = React.useRef()
const passwordRef = React.useRef()
const { user } = useAuth()
const navigate = useNavigate()

async function onSubmit(e){
    e.preventDefault()
    // Clear error field
    setErr('')
    
    // handleSignIn
    let { data, error } = await signUpwithEmail({
        username: usernameRef.current.value,
        password: passwordRef.current.value
    });
    console.log(data, error)
    // Success
    if (data.user !== null) setSuccess(true)
    // Fail
    setErr(error?.message);
}
const SignUpProps = {
    title: 'Sign Up',
    onSubmit,
    fields: [ 
        { inputRef: usernameRef, label: 'Email', type: 'email' },
        { inputRef: passwordRef, label: 'Password', type: 'password' }
    ],
    err,
    success
}
if (user) return <Navigate to='/d'/>
if (success) return <SimpleInfo />
return <SimpleForm {...SignUpProps}/>
}




import { useNavigate } from 'react-router-dom';
import { Colors, MOBILE_BREAKPOINT } from "../styles/global";
import Button from './Button'

export default function SimpleInfo(props){

const navigate = useNavigate()

const { body, title } = props;

return <Style>
    <ListStyle style={{width: 300}}>
        <div>
            <TitleStyle children={title}/>
            <div style={{width: '100%', height: 20}}/>
            <BodyStyle children={body}/>
        </div>
        <div>
            <Button children='Login' outlined onClick={() => navigate('/')}/>
        </div>
        
        <Logo src='/logo_dark.png'/>

    </ListStyle>
</Style>
}


const Logo = styled.img`
width: 150px;
`

const TitleStyle = styled.h1`
font-family: 'Uncut-Sans-Variable';
line-height: 50px;
text-transform: uppercase;
color: ${Colors.offblack};
font-style: normal;
font-weight: 700;
font-size: 33px !important;
`
const BodyStyle = styled.p`
font-family: 'Uncut-Sans-Variable';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 30px;
margin: 0;
/* gray 1 */

color: ${Colors.offblack};
`

const ListStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1em;

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
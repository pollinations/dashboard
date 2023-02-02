import useLogin from '../hooks/forms/useLogin'
import SimpleForm from "../components/SimpleForm";
import { BackGroundImage } from '../styles/global';

export default function LoginPage(){

const LoginProps = useLogin()

return <>
    <SimpleForm {...LoginProps} title='SignIn'/>
    <BackGroundImage 
        position='fixed'
        src='/bg_hero_landing.png'
        top='0'
        zIndex='-1' 
        objectPosition='0 30%'
        alt="hero_bg_overlay" />
</>
}
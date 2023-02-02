import useLogin from '../hooks/forms/useLogin'
import SimpleForm from "../components/SimpleForm";
import { BackGroundImage } from '../styles/global';
import useUpdatePassword from '../hooks/forms/usePasswordReset';

export default function UpdatePassword(){

const UpdatePasswordProps = useUpdatePassword()

return <>
    <SimpleForm {...UpdatePasswordProps} title='Update Password'/>
    <BackGroundImage 
        position='fixed'
        src='/bg_hero_landing.png'
        top='0'
        zIndex='-1' 
        objectPosition='0 30%'
        alt="hero_bg_overlay" />
</>
}
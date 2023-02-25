import SimpleForm from "../../components/SimpleForm";
import { handleSocialLogin, signInWithEmail } from '../../supabase/user'
import React from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import PasswordInput from "../../components/atoms/PasswordInput";
import { useAuth } from "../../hooks/useAuth";
import { SocialLinks } from "../../components/Social";
import Button from '../../components/Button'
import sleep from 'await-sleep'
export default function SocialLoginPage(){

const [ err, setErr ] = React.useState('')
const navigate = useNavigate()
const { user,session } = useAuth()

// check if redirectTo param is present
const [params] = useSearchParams()

const redirect = params.get("redirect")

const SocialProviders = [
    {
        id: 'discord',
        label: 'Discord'
    },
    {
        id: 'google',
        label: 'Google'
    },
    {
        id: 'github',
        label: 'Github'
    }
]
async function handleLogin(e, provider){

    e.preventDefault()
    console.log(provider)

    // Clear error field
    setErr('')

    let { data, error } = await handleSocialLogin(provider, redirect);
    console.log(data, error)
    // Success
    // if (data?.user !== null) navigate('/d');
    // Fail
    // if (error) setErr(error.message);
}
const LoginProps = {
    title: 'Sign In',
    fields: SocialProviders.map( provider => ({
        component: <Button key={provider.id} children={provider.label} outlined onClick={(e) => handleLogin(e, provider.id)}/>
    })),
    err,
    // extras: <SocialLogin/>
}

if (user) { 
    // get provider
    console.log("redirect", redirect)
    if (redirect)
        window.location.href =  urlWithAuthToken(redirect, session)
    return <Navigate to='/d'/>
}


return <>
    <SimpleForm {...LoginProps} />
</>
}



const SOCIAL_LINKS = {
    discord: {
      label: 'Discord',
      icon_img: 'DiscordLogo',
      url: 'https://discord.gg/8HqSRhJVxn',
    },
    github: {
      label: 'GitHub',
      icon_img: 'GithubLogo',
      url: 'https://www.github.com/pollinations'
    },
  }

export function urlWithAuthToken(baseURL, session) {
  if (!session)
    return baseURL;
  return `${baseURL}#access_token=${session.access_token}&refresh_token=${session.refresh_token}&expires_in=${session.expires_in}&token_type=${session.token_type}&user_id=${session.user?.id}&user_email=${session.user?.email}&user_role=${session.user?.role}&user_action_link=${session.user?.action_link}`;
}

import { BackGroundVideo } from '../../styles/global';
import { Outlet } from 'react-router-dom';


export default function FormsPage(){
    return <>
    <Outlet />
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
  </>
}
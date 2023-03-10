import { Avatar, Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import styled from '@emotion/styled'

const LoggedUser = ({ user, appRoutes }) => {
    const { handleSignOut } = useAuth()
    const navigate = useNavigate()
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
 
    return <Container>
        <Avatar onClick={e => setAnchorEl(e.currentTarget)} src={user?.user_metadata?.avatar_url}/>
        <Menu  anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} style={{ marginTop: '2em' }}>

            <MenuItem onClick={() => {
                setAnchorEl(null)
                navigate("/d")
            }}> API Tokens </MenuItem>

            <MenuItem onClick={() => {
                setAnchorEl(null)
                navigate("/u")
            }}> Usage </MenuItem>
            {
                appRoutes.map( route => {
                    return <MenuItem  onClick={() => {
                        setAnchorEl(null)
                        console.log("navigate to", route.to)
                        navigate(route.to)
                    }}> <b>{route.label}</b> </MenuItem>
                
                })
            }
            <MenuItem onClick={() => {
                setAnchorEl(null)
                handleSignOut()
            }}> Logout </MenuItem>

      </Menu>
    </Container>
}

export default LoggedUser

const Container = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`
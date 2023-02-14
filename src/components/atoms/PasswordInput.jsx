import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";

export default function PasswordInput(props) {
    const [ isPasswordVisible, setPasswordVisible ] = React.useState(false)
 
    return <TextField
        variant="standard"
        type={isPasswordVisible ? 'text' : 'password'}
        InputProps={{
            endAdornment: <IconButton
                aria-label="toggle password visibility"
                onClick={() => setPasswordVisible(state => !state)}
                edge="end"
            >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        }} {...props}/>
}
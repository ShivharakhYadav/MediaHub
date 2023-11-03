import { Box, Button, Container, TextField } from "@mui/material";
import React, { ReactHTML, useState } from "react";
import { loginService } from "../../services/authServices";
import { useDispatch } from 'react-redux';
import { save_user, show_Notification } from "../../store/actions/userActions";
import { localStorageKeys } from '../../utils/constants';

function Login() {
    const dispatch = useDispatch();

    const [authCredential, setAuthCredential] = useState({
        email: "",
        password: ""
    });

    function handleChange(e: any) {
        let name = e.target.name;
        let value = e.target.value;
        setAuthCredential({ ...authCredential, [name]: value });
    }


    async function handleLogin(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const result = await loginService(authCredential);
        // console.log("handleLogin--->", result);
        if (result?.success) {
            localStorage.setItem(localStorageKeys.isAuthenticated, "true");
            
            dispatch(save_user(result.data));
            // dispatch(show_Notification())
        }
    }

    return <>
        <Container disableGutters>
            <Box>
                <TextField name="email" placeholder="email" onChange={handleChange} value={authCredential.email} />
                <TextField name="password" placeholder="password" onChange={handleChange} value={authCredential.password} />
                <Button onClick={handleLogin}>Login</Button>
            </Box>
        </Container>
    </>
}

export default Login;
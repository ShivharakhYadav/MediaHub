import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { ReactHTML, useState } from "react";
import { LoginService } from "../../services/authServices";
import { useDispatch } from 'react-redux';
import { save_user, showLoading, show_Notification } from "../../store/actions/userActions";
import { localStorageKeys } from '../../utils/constants';
import { useNavigate } from "react-router-dom";
import environment from "../../configration/environment";

function Login() {
    const navigate = useNavigate();
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
        dispatch(showLoading(true))
        const result = await LoginService(authCredential);
        // console.log("handleLogin--->", result);
        if (result?.success) {
            localStorage.setItem(localStorageKeys.mediaHub_AccessToken, result.data.accessToken);
            localStorage.setItem(localStorageKeys.mediaHub_RefreshToken, result.data.refreshToken);
            dispatch(save_user(result.data));
            dispatch(showLoading(false))
        }
    }

    return <>
        <Container disableGutters >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={5} xl={5} >
                    <Box>
                        <img src={`./assets/login-bg.jpg`} alt="bg" height="100%" width="100%" />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={5} xl={5} >

                    <Box>
                        <TextField name="email" placeholder="email" onChange={handleChange} value={authCredential.email} />
                        <TextField name="password" placeholder="password" onChange={handleChange} value={authCredential.password} />
                        <Button onClick={handleLogin}>Login</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </>
}

export default Login;
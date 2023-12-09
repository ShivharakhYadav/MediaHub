import { Box, Button, Container, Grid, Paper, TextField, Checkbox, FormControlLabel, Typography, } from "@mui/material";
import React, { ReactHTML, useState } from "react";
import { LoginService } from "../../services/authServices";
import { useDispatch } from 'react-redux';
import { save_user, showLoading, show_Notification } from "../../store/actions/userActions";
import { localStorageKeys } from '../../utils/constants';
import { useNavigate } from "react-router-dom";
import environment from "../../configration/environment";
import { useForm, Controller } from "react-hook-form";
import CustomTextField from "../../components/InputBox";
import { LoginFormTypes } from "../../interfaces/FormInterface";
import { Link } from "react-router-dom"
import { makeStyles } from "@mui/styles"

const loginFormDefault = {
    email: "",
    password: ""
}

const useStyles = makeStyles((theme: any) => ({
    link: {
        textDecoration: 'none',
        color: theme?.palette?.primary?.main,
        '&:hover': {
            textDecoration: 'none',
        },
    },
}));

function Login() {
    const classes = useStyles();

    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<LoginFormTypes>({ defaultValues: loginFormDefault })
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleLogin(data: any) {
        console.log("data-->", data);
        dispatch(showLoading(true))
        const result = await LoginService(data);
        console.log("handleLogin--->", result);
        if (result?.success) {
            localStorage.setItem(localStorageKeys.mediaHub_AccessToken, result.data.accessToken);
            localStorage.setItem(localStorageKeys.mediaHub_RefreshToken, result.data.refreshToken);
            dispatch(save_user(result.data));
        }
        dispatch(showLoading(false));
    }


    return <>
        <Container disableGutters sx={{ height: "100% !important", backgroundColor: "red", margin: "0" }}>
            <Box component={Paper} elevation={0} display="flex" justifyContent="center" alignItems="center" height="100%">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box>
                            <Box component="img" src={`./assets/login-bg.jpg`} alt="bg" height="100%" width="100%" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Box component="form" onSubmit={handleSubmit(handleLogin)}>
                            <Grid container rowGap={1} display="flex" justifyContent="center" alignItems="center"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    "& .MuiGrid-item": {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }
                                }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "*Email is Required"
                                            },
                                        }}
                                        render={({ field }) =>
                                            <CustomTextField field={field} errors={errors} />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Controller
                                        name="password"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "*Password is Required"
                                            },
                                        }}
                                        render={({ field }) =>
                                            <CustomTextField field={field} errors={errors} />
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography>Don't have account &nbsp;
                                        <Link to="/register" className={classes.link}>Register</Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={12} xl={12}>
                                    <Button type="submit" variant="contained">Submit</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>
}

export default Login;
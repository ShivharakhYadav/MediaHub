import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { ReactHTML, useState } from "react";
import { RegisterService } from "../../services/authServices";
import { useDispatch } from 'react-redux';
import { save_user, show_Notification } from "../../store/actions/userActions";
import { localStorageKeys } from '../../utils/constants';
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import CustomTextField from "../../components/CustomTextField";
import { RegisterFormTypes } from "../../interfaces/FormInterface";
import { makeStyles } from "@mui/styles";

const registerFormDefault = {
    email: "",
    password: "",
    username: ""
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

function Register() {
    const classes = useStyles();
    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<RegisterFormTypes>({ defaultValues: registerFormDefault })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleRegister(e: any) {
        // e.preventDefault();
        const result = await RegisterService(e);
        if (result?.success) {
            navigate("/");
        }
    }

    const validateSpace = (value: any) => {
        if (value.trim() === '') {
            return 'Space Not Allowed';
        }
        return true;
    };

    return <>
        {/* <Container disableGutters>
            <Box>
                <TextField name="email" placeholder="email" onChange={handleChange} value={registerData.email} />
                <TextField name="username" placeholder="username" onChange={handleChange} value={registerData.username} />
                <TextField name="password" placeholder="password" onChange={handleChange} value={registerData.password} />
                <Button onClick={handleRegister}>Register</Button>
            </Box>
        </Container> */}
        <Container disableGutters sx={{ height: "100% !important", backgroundColor: "red", margin: "0" }}>
            <Box component={Paper} elevation={0} display="flex" justifyContent="center" alignItems="center" height="100%">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box>
                            <Box component="img" src={`./assets/register-bg.jpg`} alt="bg" height="100%" width="100%" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Box component="form" onSubmit={handleSubmit(handleRegister)}>
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
                                            validate: validateSpace
                                        }}
                                        render={({ field }) =>
                                            <CustomTextField field={field} errors={errors} />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Controller
                                        name="username"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "*Username is Required"
                                            },
                                            validate: validateSpace
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
                                            validate: validateSpace
                                        }}
                                        render={({ field }) =>
                                            <CustomTextField field={field} errors={errors} />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography>Already have a account &nbsp;
                                        <Link to="/login" className={classes.link}>Login</Link>
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

export default Register;
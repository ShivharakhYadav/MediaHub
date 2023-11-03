import { Box, Button, Container, TextField } from "@mui/material";
import React, { ReactHTML, useState } from "react";
import { RegisterService } from "../../services/authServices";
import { useDispatch } from 'react-redux';
import { save_user, show_Notification } from "../../store/actions/userActions";
import { localStorageKeys } from '../../utils/constants';
import { useNavigate } from "react-router-dom";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        username: ""
    });

    function handleChange(e: any) {
        let name = e.target.name;
        let value = e.target.value;
        setRegisterData({ ...registerData, [name]: value });
    }


    async function handleRegister(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const result = await RegisterService(registerData);
        if (result?.success) {
            navigate("/");
        }
    }

    return <>
        <Container disableGutters>
            <Box>
                <TextField name="email" placeholder="email" onChange={handleChange} value={registerData.email} />
                <TextField name="username" placeholder="username" onChange={handleChange} value={registerData.username} />
                <TextField name="password" placeholder="password" onChange={handleChange} value={registerData.password} />
                <Button onClick={handleRegister}>Register</Button>
            </Box>
        </Container>
    </>
}

export default Register;
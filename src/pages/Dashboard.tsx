import { TextField, Button, Box, Toolbar, AppBar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import NewPost from "./NewPost";
import Header from "../components/Header";
import SingleUserProfile from "../components/SingleUserProfile";


function Dashboard() {
    const { control, handleSubmit } = useForm();

    const handlePostSubmit = (data: any) => {

    }

    function fileHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files)
    }
    return (
        <>
            <Header />
            {/* <SingleUserProfile /> */}
            {/* <NewPost /> */}
        </>
    )
}
export default Dashboard;
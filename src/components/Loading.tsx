import { Box, CircularProgress, Backdrop } from "@mui/material";
import { useSelector } from "react-redux";

export default function Loading() {
    const loading = useSelector((state: any) => state.loading);
    console.log("loading-->", loading)
    return <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
}
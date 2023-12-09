import { TextField, Button } from "@mui/material";

function Dashboard() {

    return (
        <>
            <h1>Dashboard</h1>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    multiple
                    hidden
                />
            </Button>
        </>
    )
}
export default Dashboard;
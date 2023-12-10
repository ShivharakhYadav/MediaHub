import { ControllerRenderProps } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import { Email } from "@mui/icons-material";

interface propTypes {
    placeholder?: string,
    field: ControllerRenderProps<any, any>;
    errors: any
}

export default function CustomTextField({ placeholder, field: { onChange, name }, errors }: propTypes) {
    return <TextField
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
        error={errors[name] ? true : false}
        helperText={errors[name] ? errors[name]?.["message"] : " "}
        label={name}
    // InputProps={{
    //     startAdornment: (
    //         <InputAdornment position="start">
    //             <Email />
    //         </InputAdornment>
    //     ),
    // }}
    />
}
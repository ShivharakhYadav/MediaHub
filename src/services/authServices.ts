import axios from "axios";
import { environment } from '../configration/configIndex';
import apiurls from "../utils/constants";

const authBaseURL = environment.baseURL + "/auth"
const authInstance = axios.create({
    baseURL: authBaseURL
});

const loginUrl = authBaseURL + apiurls.login;
authInstance.interceptors.response.use(function (config) {
    console.log("econfigrr--->", config);
    return config;
},
    function (err) {
        console.log("err--->", err);
        return err;
    }
)

export async function loginService(body: object) {
    const result = await authInstance.post(loginUrl, body);
    return result;
}

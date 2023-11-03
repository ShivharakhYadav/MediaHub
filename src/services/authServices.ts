import axios, { AxiosError, AxiosResponse } from "axios";
import { environment } from '../configration/configIndex';
import { API_URLS } from "../utils/constants";
import store from "../store/store";
import { show_Notification } from "../store/actions/userActions";
import { showErrorMessage, showSuccessMessage } from "../utils/HelperFunction";

const authBaseURL = environment.baseURL + "/auth"
const authInstance = axios.create({
    baseURL: authBaseURL
});

type responseType = {
    success: Boolean,
    data: any,
    message: string
}

const loginUrl = authBaseURL + API_URLS.login;

//Axios Request Handler
authInstance.interceptors.request.use(
    //Success
    function (config) {
        config.headers["Content-Type"] = "application/json"
        // console.log("sshsh",config)
        return config;
    }
)

//Axios Response Handler
authInstance.interceptors.response.use(
    //Success
    function (config) {
        let urls = config.config.url;
        if (urls?.includes(API_URLS.login)) {
            if (config.status == 200) {
                showSuccessMessage("LoginSuccessFully")
            }
        }
        // console.log("config-->", config, config.config.url)
        return config;
    },

    //Error
    function (err: AxiosError<responseType>) {
        let type = err.code;
        if (type == "ERR_BAD_REQUEST") {
            showErrorMessage(err.response?.data.message as string)
            return err?.response;
        }
        else {
            showErrorMessage(err.message as string)
            return err?.message;
        }
    }
)





export const loginService = async (body: any): Promise<responseType> => {
    const loginResponse = await authInstance.post(loginUrl, body);
    return loginResponse.data;
};
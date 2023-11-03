import Axios from 'axios';
import { localStorageKeys } from '../utils/constants';
import { environment } from '../configration/environment';

const userBaseURL = environment.baseURL + "/user";

const userInstance = Axios.create({
    baseURL: userBaseURL
})

userInstance.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = "application/json";
        let token = localStorage.getItem(localStorageKeys.mediaHub_AccessToken);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (err) { return err }
)

userInstance.interceptors.response.use(
    function (config) {
        // config.headers['Content-Type'] = "application/json"
        return config
    },
    function (err) { return err }
)

export const getUser = async () => {
    let url = `${userBaseURL}/user`;
    const result = await userInstance.get(url);
    return result.data;
}
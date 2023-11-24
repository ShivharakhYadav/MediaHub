import Axios, { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { API_URLS, localStorageKeys } from '../utils/constants';
import environment  from '../configration/environment';

const userBaseURL = environment.baseURL + "/user";

const userInstance = Axios.create({
    baseURL: userBaseURL
})

type resposneType = {
    success: Boolean,
    message: String,
    data: any
}


//Request
userInstance.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = "application/json";
        let token = localStorage.getItem(localStorageKeys.mediaHub_AccessToken);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        // return error
        return Promise.reject(error);
    }
)

//Response
userInstance.interceptors.response.use(
    function (config: AxiosResponse) {
        return config;
    },
    async function (error: AxiosError) {
        const originalConfig: any = error.config;
        const refreshTokenURLs = environment.baseURL + "/auth" + API_URLS.RefreshToken;

        if (error?.response?.status === 401 && !originalConfig?._retry) {
            originalConfig._retry = true;

            let token = localStorage.getItem(localStorageKeys.mediaHub_RefreshToken);
            let res = await fetch(refreshTokenURLs, {
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = await res.json()
            localStorage.setItem(localStorageKeys.mediaHub_AccessToken, result.data.accessToken);
            localStorage.setItem(localStorageKeys.mediaHub_RefreshToken, result.data.refreshToken);
            return userInstance(originalConfig);
        }
        return Promise.reject(error.response);
    }
)

export const getUser = async (id: string): Promise<resposneType> => {
    try {
        let url = `${userBaseURL}/user/${id}`;
        const result = await userInstance.get(url);
        return result?.data;
    } catch (error: any) {
        console.error("Error get user-->", error?.data);
        return error?.data;
    }
}
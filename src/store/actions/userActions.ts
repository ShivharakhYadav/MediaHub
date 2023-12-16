import providersConstant from "./actionTypes";

export const save_user = (payload: any) => ({
    type: providersConstant.SAVE_USER,
    payload: payload
})

export const show_Notification = (payload: any) => ({
    type: providersConstant.NOTIFICATION,
    payload: payload
})

export const showLoading = (payload: Boolean) => ({
    type: providersConstant.LOADING,
    payload: payload
})

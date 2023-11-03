import providersConstant from "../actions/actionTypes";

interface initialType {
    isAuthenticated: Boolean;
    user: object;
    posts: Array<object>,
    notificationMessage: string
}

type payloadType = {
    type: string;
    payload: any
}

const initialState: initialType = {
    isAuthenticated: false,
    user: {},
    posts: [],
    notificationMessage: ""
}

const userReducer = (state: initialType = initialState, { type, payload }: payloadType) => {
    // console.log("type, payload", type, payload);
    switch (type) {
        case providersConstant.SAVE_USER:
            let saveUser: initialType = { ...state, isAuthenticated: true, user: payload, notificationMessage: "Login SuccessFully" };
            return state = saveUser;

        case providersConstant.LOGOUT:
            let logoutUser: initialType = initialState;
            return state = logoutUser;

        case providersConstant.Notification:
            let message: initialType = { ...state, notificationMessage: payload };
            return state = message;

        default: return state;
    }
}

export default userReducer
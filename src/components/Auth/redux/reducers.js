import { usersConstants } from "../../../_constants";

const initialState = {
    isAuth: false,
    user: null,
    authToken: '',
    resStatus: '',
}

export const authReducer = (state = [], action) => {
    switch (action.type) {
        case usersConstants.LOGIN_SUCCESS:
            return [...state, action.payload];
        case usersConstants.LOGIN_FAILURE:
            return [...state, action.payload];
        default:
            return state;
    };
};

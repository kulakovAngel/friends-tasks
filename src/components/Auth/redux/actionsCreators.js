import { usersConstants } from "../../../_constants";
import { apiInstances } from "../../../_constants";
import axios from 'axios';

export const loginSuccess = (str) => ({
    type: usersConstants.LOGIN_SUCCESS,
    payload: str,
});

export const loginFailure = (str) => ({
    type: usersConstants.LOGIN_FAILURE,
    payload: str,
});

export const authSubmit = (login, password) => (dispatch, getState) => {
    axios
    .post(apiInstances.FRIENDS_TODOS + '/auth/login', {
        login: login,
        password: password,
    })
    .then(res => {
        dispatch(loginSuccess({
            isAuth: true,
            user: res.data,
            authToken: res.headers.authorization,
        }))
        //console.log(res);
    })
    .catch(error => {
        dispatch(loginFailure({
            isAuth: false,
            resStatus: error.response.data.message,
        }))
        //console.dir(error);
    });
};








// axios
// .post('https://friends-todos.herokuapp.com/auth/login', {
//     //данные которые нужно преобразовать в json и отправить на сервер
//     login: login,
//     password: password,
// })
// .then(res => {
//     // res - response ответ сервера на запрос
//     setAuth(res.data);
//     // res.headers.authorization - содержит токен авторизации
//     // храним токен в axios (потом перенести в redux)
//     axios.defaults.headers.common['Authorization'] = res.headers.authorization;
//     console.log(res);
// })
// .catch(error => {
//     // при неправильном логине получим 401 Unauthorized в error
//     setResStatus(error.response.data.message);
//     console.dir(error);
// });
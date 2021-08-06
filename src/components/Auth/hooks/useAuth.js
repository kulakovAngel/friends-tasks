import { useDispatch, useSelector } from 'react-redux';
import { authSubmit } from '../redux/actionsCreators';

export const useAuth = () => {
    const auth = useSelector(({auth}) => auth);
    const dispatch = useDispatch();
    return[auth, (login, password) => dispatch(authSubmit(login, password))]
}
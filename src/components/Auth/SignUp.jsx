import PropTypes from 'prop-types';
import { SInput } from '../../Styled/SInput';
import { useState } from 'react';

export function SignUp() {
    const [authData, setAuthData] = useState({
        login: '',
        password: '',
        confirmPasword: '',
    });

    const handleChangeInput = (evt) => {
        // evt.target.value;
        setAuthData({
            ...authData,
            [evt.target.name]: evt.target.value.toUpperCase(),
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <SInput type={'text'} name={'login'} onChange={handleChangeInput} value={authData.login} />
            <SInput type={'text'} name={'password'} onChange={handleChangeInput} value={authData.password} />
            <SInput type={'text'} name={'confirmPasword'} onChange={handleChangeInput} value={authData.confirmPasword} />
            <SInput type={'submit'} />
        </form>
    );
}

SignUp.propTypes = {
};
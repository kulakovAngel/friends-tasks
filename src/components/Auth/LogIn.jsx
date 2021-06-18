import PropTypes from 'prop-types';
import { useState } from 'react';

import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';
import { SInput } from '../../Styled/forms/SInput';
import { SLabel } from '../../Styled/forms/SLabel';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';

export function LogIn() {
    const [authData, setAuthData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeInput = (e) => {
        setAuthData({
            ...authData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <SWrapCol>
                <SLabel htmlFor="uname">Username</SLabel>
                <SInput id="uname" type={'text'} name={'username'} onChange={handleChangeInput} value={authData.username} />
                <SLabel htmlFor="pass">Password</SLabel>
                <SInput id="pass" type={'password'} name={'password'} onChange={handleChangeInput} value={authData.password} />
                <SSubmitButton type={'submit'}>Log In</SSubmitButton>
            </SWrapCol>
        </form>
    )
}

LogIn.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
};
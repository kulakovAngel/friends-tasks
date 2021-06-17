import PropTypes from 'prop-types';
import { useState } from 'react';

import { SLabel } from '../../Styled/forms/SLabel';
import { SInput } from '../../Styled/forms/SInput';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';

export function SignUp() {
    const [authData, setAuthData] = useState({
        username: '',
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
            <SWrapCol>
                <SLabel for="uname">Username</SLabel>
                <SInput id="uname" type={'text'} name={'username'} onChange={handleChangeInput} value={authData.username} />
                <SLabel for="pass">Password</SLabel>
                <SInput id="pass" type={'text'} name={'password'} onChange={handleChangeInput} value={authData.password} />
                <SLabel for="cpass">Confirm password</SLabel>
                <SInput id="cpass" type={'text'} name={'confirmPasword'} onChange={handleChangeInput} value={authData.confirmPasword} />
                <SSubmitButton type={'submit'}>Sign Up</SSubmitButton>
            </SWrapCol>
        </form>
    );
}

SignUp.propTypes = {
};
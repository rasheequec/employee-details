import React, { useState } from 'react';
import UserForm from '../../components/form';
import { userActions } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../helpers/history';

const Login = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading)
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const changeHandle = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const submitHandle = e => {
        e.preventDefault()
        console.log(inputs)
        dispatch(userActions.login(inputs))
    }
    const redirectTo = () => {
        history.push('signup')
    }
    return (
        <UserForm
            title="Signin as Employee"
            inputFields={[
                { type: "email", name: "email", placeholder: "Enter email", label: "Email" },
                { type: "password", name: "password", placeholder: "password", label: "Password" }
            ]}
            select={[]}
            buttonText="Login"
            changeHandle={changeHandle}
            submitHandle={submitHandle}
            isLoading={isLoading}
            redirect = "New user? register here"
            redirectTo={redirectTo}
        />
    )
}

export default Login
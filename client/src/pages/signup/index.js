import React, { useState } from 'react';
import UserForm from '../../components/form';
import { userActions } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../helpers/history';

const SignUp = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading)
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        designation: "HR"
    })

    const changeHandle = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const submitHandle = e => {
        e.preventDefault()
        if(inputs.name && inputs.email && inputs.password){
        dispatch(userActions.signup(inputs))
        }
        else{
         alert("No fields can be empty. Please fill and try again")
        }
    }
    const redirectTo = () => {
        history.push('login')
    }
    return (
        <UserForm
            title="Register as Employee"
            inputFields={[
                { type: "text", name: "name", placeholder: "Enter name", label: "Name" },
                { type: "email", name: "email", placeholder: "Enter email", label: "Email" },
                { type: "password", name: "password", placeholder: "password", label: "Password" }
            ]}
            select={[
                {
                    label: "Choose designation",
                    name: "designation",
                    options: ["HR", "Software Engineer", "Team Lead", "Project Manager"]
                }
            ]}
            buttonText="Submit"
            changeHandle={changeHandle}
            submitHandle={submitHandle}
            isLoading={isLoading}
            redirect = "Already registered? login here"
            redirectTo={redirectTo}
        />
    )
}

export default SignUp
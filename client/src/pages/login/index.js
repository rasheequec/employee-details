import React, { useState } from "react"
import UserForm from "../../components/form"

const Login = () => {
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
        />
    )
}

export default Login
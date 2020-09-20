import React from "react"
import { Button, Form, Spinner } from 'react-bootstrap';

const UserForm = ({ title, inputFields, select, buttonText, changeHandle, submitHandle, isLoading }) => {
    return (
        <div className="form">
            <Form className="form-wrap" onSubmit={submitHandle}>
                <h3>{title}</h3>
                {inputFields.map(data => {
                    return (
                        <Form.Group key={data.name}>
                            <Form.Label>{data.label}</Form.Label>
                            <Form.Control type={data.type} name={data.name} placeholder={data.placeholder} onChange={changeHandle} />
                            <Form.Text className="text-muted">
                                No fields can be empty.
                 </Form.Text>
                        </Form.Group>
                    )
                })}
                {select.map(data => {
                    return (
                        <Form.Group key={data.name}>
                            <Form.Label>{data.label}</Form.Label>
                            <Form.Control as="select" onChange={changeHandle} name={data.name}>
                                {data.options.map(opt => <option key={opt}>{opt}</option>)}
                            </Form.Control>
                        </Form.Group>
                    )
                })}
                <Button variant="primary" type="submit" style={{minWidth: '100px'}}>
                    {isLoading ?<Spinner animation="border" size="sm"/> :
                    buttonText
                    }
                </Button>
            </Form>
        </div>
    )
}

export default UserForm
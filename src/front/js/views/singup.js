import React from "react";
import useAppContext from "../store/Context";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Singup = () => {
    const { store, actions } = useAppContext();
    const { loginMail, loginPass  } = store;
    const { handleChangeLoginPass, handleChangeLoginMail, handleSingupButton } = actions;
    const navigate = useNavigate()

    const handleSingup = () => {
      handleSingupButton()
      navigate("/login")
    };


    return(
        <div className="w-50 text-center mx-auto my-5">
        <h5 className="my-5">SINGUP</h5>
        <Form>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChangeLoginMail}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChangeLoginPass}
            />
            </Form.Group>

            <Button variant="primary" onClick={handleSingup}>
                Create User
            </Button>
        </Form>
        </div>
    );
};

export default Singup;
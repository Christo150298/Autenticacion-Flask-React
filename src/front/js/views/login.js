import React from "react";
import useAppContext from "../store/Context";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useAppContext();
  const { loginMail, loginPass } = store;
  const { handleChangeLoginPass, handleChangeLoginMail, handleLoginButton } =
    actions;

  const navigate = useNavigate();

  const handleLogin = () => {
    handleLoginButton();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="w-50 text-center mx-auto my-5">
      <h5 className="my-5">LOGIN</h5>
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
        <Button variant="primary" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
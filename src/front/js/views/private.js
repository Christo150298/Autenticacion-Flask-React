import React, { useEffect } from "react";
import useAppContext from "../store/Context";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Private = () => {
  const { actions, store } = useAppContext();
  const { handlePrivateInfo,  handlePrivateData, handleLogoff } = actions;
  const { privateData } = store;
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("token")

    if(!token) navigate("/login");

    handlePrivateInfo(handlePrivateData) 
    console.log(privateData)
  },[])
  
  const handleLogout = () => {
    handleLogoff()
    navigate("/login")
  }

  

  return <div className="container text-center my-5"> {privateData?.id ? 
    <div>
        <h3>ID USUARIO : {privateData.id}</h3>
        <h5>EMAIL USUARIO: {privateData.email}</h5>
    </div> : "null"}

    <Button variant="primary" onClick={handleLogout}>
        Log Off
    </Button>
  </div>;
};

export default Private;

export const fetchLogin = async (mail, pass) => {
    localStorage.removeItem("token")
    console.log(mail, pass);
    const tempbody = {
      email: mail,
      password: pass,
    };
  
    let tempToken = "";
  
    await fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempbody),
    })
      .then((res) => res.json())
      .then((res) => (tempToken = res));
    console.log(tempToken);
    localStorage.setItem("token", JSON.stringify(tempToken));
  };
  

export const fetchPrivate = async (handleOk) => {
    const token = localStorage.getItem("token");
    const tokenBueno = JSON.parse(token) 
    const Auth = `Bearer ${tokenBueno}` ;
  
    return fetch(process.env.BACKEND_URL + "/api/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Auth,
      },
    })
      .then((res) => res.json())
      .then((res) => handleOk(res) )
      .catch((e) => (console.log(e)));
  };


export const fetchSingup = (newEmail, newPassword) => {

    let temp_body = {
        email : newEmail,
        password: newPassword,
        is_active: true
    }

    console.log(JSON.stringify(temp_body))

    return fetch(process.env.BACKEND_URL + "/api/singup",{
        method:"POST",
        headers:{
            "Content-Type": "application/JSON"
            
        },
        body: JSON.stringify(temp_body)
    });
};

  
import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
  
    const handleLogin = async () => {
      const headers = {
          'Content-Type': 'application/json',
        };
      const response = await axios.post("http://localhost:5000/login", {
          username: username,
          password: password
      }, { headers });
      const decodedToken = jwtDecode(response.data.access_token);
      setToken(decodedToken);
      console.log(decodedToken)
      setToken(response.data.access_token)
    };


  return (
    <div>
        {token&&<Navigate to="/Home" replace={true} />}
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
import React from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Header from "../parts/Header";
import "../../css/login.css";

function LoginPage() {
  const login = async (loginData) => {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  };

  const register = async (registrationData) => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  };

  return (
    <div className="body_wrapper">
      <Header />
      
      <div className="inputbox">
        <LoginForm onSubmit={login} />
      </div>

      <div className="inputbox">
        <RegisterForm onSubmit={register} />
      </div>
    </div>
  );
}

export default LoginPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const LoginScreen = ({ history }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setloading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
    } catch (error) {
      seterror(error.response.data.message);
      setloading(false);
    }
  };
  return (
    <MainScreen title="Login">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />}
      <form method="post" onSubmit={submitHandler}>
        <div className="login-container">
          <div className="email-login">
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="pass-login">
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
              name="password"
            />
          </div>
          <button type="submit">Login</button>
          <div className="already-registered">
            Don't have an Account? <a href="/register">Register</a>
          </div>
        </div>
      </form>
    </MainScreen>
  );
};

export default LoginScreen;

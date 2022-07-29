import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import MainScreen from '../../components/MainScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
const LoginScreen = ({ history }) => {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate('/mynotes');
    }
  }, [history, userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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

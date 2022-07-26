import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import Messages from "../components/Messages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!userName || !password) {
      setIsUserNameValid(false);
      setIsPasswordValid(false);
      setDisplayMessage(true);
      return;
    }

    const response = await axios.post("/login", {
      userName: userName,
      password: password,
    });

    if (response.data.errorMessage || !response.data.userAuthenticated) {
      setIsUserNameValid(false);
      setIsPasswordValid(false);
    }

    console.log("Logged in ", response);
  };

  return (
    <>
      <Title title="Log in" />
      <Input
        placeholder="Username"
        isValid={isUserNameValid}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
      />
      <Input
        placeholder="Password"
        isValid={isPasswordValid}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="password"
      />
      { displayMessage ? <Messages
        className="error"
        message="Username and/or password is incorrect"
      /> : "" }
      <Button className="" onClick={handleLogin} label="Log in" />
      <Button
        className=""
        secondary
        onClick={() => {
          navigate("/signup");
        }}
        label="Sign Up"
      />
    </>
  );
};

export default Login;

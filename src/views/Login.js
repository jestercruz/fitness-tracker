import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return (
    <>
      <Input
        placeholder="Username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
      />
      <Input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="password"
      />
      <Button
        className=""
        onClick={() => {
          console.log(userName + " " + password);
        }}
        label="Log in"
      />
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

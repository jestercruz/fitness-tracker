import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

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
      <Button className="" onClick={() => {}} label="Log in" />
      <Button className="" secondary onClick={() => {}} label="Sign Up" />
    </>
  );
};

export default Login;

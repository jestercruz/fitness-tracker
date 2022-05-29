import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);
  return (
    <>
      <Title title="Sign Up" />
      <Input
        placeholder="First Name"
        onChange={(e) => {
          setUserInfo({ ...userInfo, firstName: e.target.value });
        }}
        value={userInfo.firstName}
      />
      <Input
        placeholder="Last Name"
        onChange={(e) => {
          setUserInfo({ ...userInfo, lastName: e.target.value });
        }}
        value={userInfo.lastName}
      />
      <Input
        placeholder="Username"
        onChange={(e) => {
          setUserInfo({ ...userInfo, username: e.target.value });
        }}
        value={userInfo.username}
      />
      <Input
        placeholder="email"
        type="email"
        isValid={isValid}
        onChange={(e) => {
          setUserInfo({ ...userInfo, email: e.target.value });
          if (
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
          ) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
        }}
        value={userInfo.email}
      />
      <Input
        placeholder="Password"
        onChange={(e) => {
          setUserInfo({ ...userInfo, password: e.target.value });
        }}
        value={userInfo.password}
        type="password"
      />
      <Button
        className=""
        onClick={() => {
          console.log(userInfo);
        }}
        label="Sign Up"
      />
      <Button
        className=""
        secondary
        onClick={() => {
          navigate("/");
        }}
        label="Cancel"
      />
    </>
  );
};

export default Signup;

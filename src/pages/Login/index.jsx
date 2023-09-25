import { useState } from "react";
import { useNavigate } from "react-router-dom";
import park_flow_logo from "../../assets/images/park_flow_logo.png";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import * as S from "./styled";
import Input from "../../components/Input";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <img src={park_flow_logo} alt="Park Flow Logo" />
        <Input
          type={"email"}
          value={values.email}
          handleChange={handleChange("email")}
          hireable={false}
          typeSpan={"Email"}
        >
          <EmailIcon />
        </Input>
        <Input
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          handleChange={handleChange("password")}
          hireable={true}
          typeSpan={"Password"}
        >
          {values.showPassword ? (
            <VisibilityOff
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            />
          ) : (
            <Visibility
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            />
          )}
        </Input>

        <S.Button
          type="submit"
          disabled={
            REGEX_EMAIL.test(values.email) || values.password.length <= 6
          }
        >
          Login
        </S.Button>
      </form>
      <S.Link onClick={() => navigate("/signup")}>First time? Create an account!</S.Link>
    </S.Container>
  );
}

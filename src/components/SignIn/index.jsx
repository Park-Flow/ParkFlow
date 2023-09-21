//componente de login

import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import * as S from "./styled";

import park_flow_logo from "../../assets/images/park_flow_logo.png";
export default function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <S.Container>
      <img src={park_flow_logo} alt="Park Flow Logo" />
      <S.InputControl>
        <input
          type="email"
          autoComplete="off"
          placeholder=""
          value={values.email}
          required
          onChange={handleChange("email")}
        />
        <span>Email</span>
        <EmailIcon />
      </S.InputControl>
      <S.InputControl>
        <input
          type={values.showPassword ? "text" : "password"}
          autoComplete="off"
          placeholder=""
          value={values.password}
          required
          onChange={handleChange("password")}
        />
        <span>Senha</span>
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
        
      </S.InputControl>
    </S.Container>
  );
}

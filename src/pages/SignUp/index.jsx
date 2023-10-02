import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BadgeIcon from '@mui/icons-material/Badge';

import park_flow_logo from '../../assets/images/park_flow_logo.png';
import * as S from './styled';
import Input from '../../components/Input';

export default function SignUp() {
  const navigate = useNavigate();
  const isdesktop = window.innerWidth > 820;
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        {!isdesktop ? (
          <img src={park_flow_logo} alt="Park Flow Logo" />
        ) : (
          <span className="text-desktop">
            Sign in with an registerd account
          </span>
        )}
        <Input
          type={'text'}
          value={values.name}
          handleChange={handleChange('name')}
          hireable={false}
          typeSpan={'Name'}
        >
          <BadgeIcon />
        </Input>
        <Input
          type={'email'}
          value={values.email}
          handleChange={handleChange('email')}
          hireable={false}
          typeSpan={'Email'}
        >
          <EmailIcon />
        </Input>
        <Input
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          handleChange={handleChange('password')}
          hireable={true}
          typeSpan={'Password'}
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
        <Input
          type={values.showConfirmPassword ? 'text' : 'password'}
          value={values.confirmPassword}
          handleChange={handleChange('confirmPassword')}
          hireable={true}
          typeSpan={'Confirm Password'}
        >
          {values.showConfirmPassword ? (
            <VisibilityOff
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownPassword}
            />
          ) : (
            <Visibility
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownPassword}
            />
          )}
        </Input>

        <S.Button
          type="submit"
          disabled={
            values.password !== values.confirmPassword ||
            values.name.length < 3 ||
            !REGEX_EMAIL.test(values.email) ||
            values.password.length <= 6
          }
        >
          Create Account
        </S.Button>
        {isdesktop ? (
          <div className="divider">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>
        ) : (
          <> </>
        )}
        {!isdesktop ? (
          <S.Link onClick={() => navigate('/')}>
            Already is registered? Sign In!
          </S.Link>
        ) : (
          <div className="signup-web">
            <span> Already is registered? </span>
            <S.Button className="signup" onClick={() => navigate('/')}>
              Sign In
            </S.Button>
          </div>
        )}
      </form>
    </S.Container>
  );
}

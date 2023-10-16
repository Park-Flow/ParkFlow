import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../contexts/AlertContext';
import UserContext from '../../contexts/UserContext';
import useSignin from '../../hooks/api/useSignIn';
import park_flow_logo from '../../assets/images/park_flow_logo.png';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomizedSnackbars from '../../components/Alerts/index.jsx';

import * as S from './styled';
import Input from '../../components/Input';

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useSignin();
  const { setUserData } = useContext(UserContext);
  const { open, setOpen, message, setMessage, severity, setSeverity } =
    useContext(AlertContext);

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const isdesktop = window.innerWidth > 820;

  const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const userData = await signIn(values.email, values.password);
      setUserData(userData);
      setMessage('Login successfully!');
      setSeverity('success');
      navigate('/home');
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) setMessage('Invalid email or password');
      else setMessage('internal error');
      setSeverity('error');
    } finally {
      setOpen(true);
    }
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

        <S.Button
          type="submit"
          disabled={
            !REGEX_EMAIL.test(values.email) || values.password.length <= 6
          }
        >
          Login
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
          <S.Link onClick={() => navigate('/signup')}>
            First time? Create an account!
          </S.Link>
        ) : (
          <div className="signup-web">
            <span> First time? </span>
            <S.Button className="signup" onClick={() => navigate('/signup')}>
              Sign up
            </S.Button>
          </div>
        )}
      </form>
      {open ? (
        <CustomizedSnackbars
          open={open}
          setOpen={setOpen}
          message={message}
          severity={severity}
        />
      ) : null}
    </S.Container>
  );
}

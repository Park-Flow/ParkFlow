import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AlertContext from '../../contexts/AlertContext';
import UserContext from '../../contexts/UserContext';
import useSignup from '../../hooks/api/useSignup';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BadgeIcon from '@mui/icons-material/Badge';
import CustomizedSnackbars from '../../components/Alerts/index.jsx';

import park_flow_logo from '../../assets/images/park_flow_logo.png';
import * as S from './styled';
import Input from '../../components/Input';
import Header from '../../components/Header';

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useSignup();
  const { setUserData } = useContext(UserContext);
  const { open, setOpen, message, setMessage, severity, setSeverity } =
    useContext(AlertContext);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const userData = await signUp(
        values.name,
        values.email,
        values.password,
        values.confirmPassword,
      );
      setUserData(userData);
      setMessage('User created successfully!');
      setSeverity('success');
      navigate('/');
    } catch (err) {
      if (err.response.status === 401) setMessage('Invalid email or password');
      else if (err.response.status === 409)
        setMessage('Email is already registered in another account');
      else setMessage('internal error');
      setSeverity('error');
    } finally {
      setOpen(true);
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <form onSubmit={handleSubmit}>
          <img src={park_flow_logo} alt="Park Flow Logo" />
          <div className="text-desktop">
            <span>Sign in with an registerd account</span>
          </div>
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

          <S.Button type="submit">Create Account</S.Button>
          <div className="divider">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>
          <S.Link onClick={() => navigate('/')}>
            Already is registered? Sign In!
          </S.Link>
          <div className="signup-web">
            <span> Already is registered? </span>
            <S.Button className="signup" onClick={() => navigate('/')}>
              Sign In
            </S.Button>
          </div>
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
    </>
  );
}

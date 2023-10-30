import { useState } from 'react';
import * as S from './styled';
import park_flow_logo from '../../assets/images/park_flow_logo.png';
import PropTypes from 'prop-types';

import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export default function Header({ iscentered = false, ishome = false }) {
  const [isopen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isopen);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <S.Container $iscentered={iscentered} $ishome={ishome} $isopen={isopen}>
      <img src={park_flow_logo} alt="Park Flow Logo" />
      {ishome ? (
        <div className="profile-config">
          <div className="profile">
            <PersonIcon />
            <span> Olá, Nome </span>
          </div>
          <ExpandMoreIcon
            onClick={handleClick}
            onMouseDown={handleMouseDownPassword}
            className="toggle-svg"
          />
          <div className={`dropdown ${isopen ? 'open' : ''}`}>
            <div className="options">
              <PersonIcon />
              <span>Dados Pessoais</span>
            </div>
            <div className="options">
              <LocalAtmIcon />
              <span>Saldo: R$30,00</span>
            </div>
            <div className="options">
              <LogoutRoundedIcon />
              <span>Logout</span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </S.Container>
  );
}

Header.propTypes = {
  iscentered: PropTypes.bool,
  ishome: PropTypes.bool,
};

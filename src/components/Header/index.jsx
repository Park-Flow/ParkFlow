import * as S from './styled';
import park_flow_logo from '../../assets/images/park_flow_logo.png';

export default function Header() {
  return (
    <S.Container>
      <img src={park_flow_logo} alt="Park Flow Logo" />
    </S.Container>
  );
}

import * as S from "./styled";
import PropTypes from 'prop-types';

export default function Input({
  children,
  type,
  value,
  handleChange,
  hireable,
  typeSpan,
}) {
  return (
    <S.InputControl hireable={hireable}>
      <input
        type={type}
        autoComplete="off"
        value={value}
        placeholder=" "
        onChange={handleChange}
        required
      />
      {console.log()}
      <span>{typeSpan}</span>
      {children}
    </S.InputControl>
  );
}

Input.propTypes = {
  children: PropTypes.node, // Se 'children' for um nó React
  type: PropTypes.string.isRequired, // 'type' é uma string obrigatória
  value: PropTypes.string.isRequired, // 'value' é uma string obrigatória
  handleChange: PropTypes.func.isRequired, // 'handleChange' é uma função obrigatória
  hireable: PropTypes.bool.isRequired, // 'hireable' é um booleano obrigatório
  typeSpan: PropTypes.string.isRequired, // 'typeSpan' é uma string obrigatória
};
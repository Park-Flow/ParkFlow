import * as S from './styled';
import PropTypes from 'prop-types';

export default function Input({
  children,
  type,
  value,
  handleChange,
  hireable,
  typeSpan,
  error=false,
  disabled=false,
}) {
  return (
    <S.InputControl $hireable={hireable} $error={error}>
      <input
        type={type}
        autoComplete="off"
        value={value}
        placeholder=" "
        onChange={handleChange}
        disabled={disabled}
        required
      />
      {console.log()}
      <span>{typeSpan}</span>
      {children}
    </S.InputControl>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  hireable: PropTypes.bool.isRequired,
  typeSpan: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

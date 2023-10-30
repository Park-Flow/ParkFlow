import styled from 'styled-components';

export const InputControl = styled.div`
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 2rem;
  border-radius: 10px;
  margin-bottom: 40px;
  span {
    position: absolute;
    left: -1.125rem;
    top: -0.3125rem;
    line-height: 3.125rem;
    pointer-events: none;
    font-size: 0.8rem;
    color: #fff;
    transition: all 0.3s ease;
  }
  input {
    width: 18.75rem;
    height: 3.125rem;
    border: none;
    padding-left: 0.625rem;
    padding-right: 2.225rem;
    font-size: 1rem;
    background-color: #1111110f;
    color: #fff;
    border-bottom: ${props =>
      props.$error ? '2px solid #f63737' : '2px solid #fff'};
    transition: border-bottom 0.3s ease;
    &::placeholder {
      color: #fff;
      transition: all 0.3s ease;
    }
    &:focus {
      outline: none;
      border-bottom: ${props =>
        props.$error ? '2px solid #ff0000' : '2px solid #3c78ee'};
    }
    &:focus ~ span,
    &:valid ~ span,
    &:not(:placeholder-shown) ~ span {
      transform: translateY(-30px);
      font-size: 12px;
      color: ${props => (props.$error ? '#f63737' : '#fff')};
    }
    &:disabled {
      background-color: #11111139;
      cursor: default;
    }
  }
  svg {
    margin-left: -30px;
    position: relative;
    z-index: 1;
    right: 0.5rem;
    padding: 5px;
    width: 2rem;
    height: auto;
    &:hover {
      cursor: ${props => (props.$hireable ? 'pointer' : 'default')};
      background-color: ${props => (props.$hireable ? '#1d1f2e' : 'none')};
      border-radius: ${props => (props.$hireable ? '50%' : 'none')};
    }
  }
  @media screen and (max-height: 600px) {
    input {
      font-size: 0.7rem;
      &:focus ~ span,
      &:valid ~ span,
      &:not(:placeholder-shown) ~ span {
        transform: translateY(-30px);
        font-size: 0.65rem;
        color: #fff;
      }
    }
    span {
      font-size: 0.7rem;
    }
  }
  @media screen and (max-height: 440px) {
    margin-bottom: 20px;
    input {
      font-size: 0.6rem;
      height: 2rem;
      &:focus ~ span,
      &:valid ~ span,
      &:not(:placeholder-shown) ~ span {
        transform: translateY(-20px);
        font-size: 0.5rem;
        color: #fff;
      }
    }
    span {
      font-size: 0.6rem;
      top: -0.5rem;
    }
    svg {
      width: 1.8rem;
    }
  }
  @media screen and (min-width: 600px) {
    input {
      width: 20rem;
      padding: 0.25rem;
    }
    span {
      left: 0.15rem;
    }
    svg {
      right: -0.125rem;
    }
  }
  @media screen and (min-width: 820px) and (min-height: 650px) {
    input {
      width: 25rem;
      padding: 0.25rem;
    }
    span {
      left: 0.15rem;
    }
    svg {
      right: -0.125rem;
    }
  }
`;

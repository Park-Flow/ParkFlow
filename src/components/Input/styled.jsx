import styled from "styled-components";

export const InputControl = styled.div`
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: /*unidade de medida responsiva*/ 60%;
  height: /*unidade de medida responsiva*/ 2rem;
  border-radius: 10px;
  margin-bottom: 40px;
  span {
    position: absolute;
    left: 0px;
    top: 0;
    line-height: 50px;
    pointer-events: none;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease;
  }
  input {
    width: 18.75rem;
    height: 3.125rem;
    border: none;
    padding-left: 0.625rem;
    font-size: 1rem;
    background-color: #1111110f;
    color: #fff;
    border-bottom: 2px solid #fff;
    transition: border-bottom 0.3s ease;
    &::placeholder {
      color: #fff;
      transition: all 0.3s ease;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid #cd5008;
    }
    &:focus ~ span,
    &:valid ~ span,
    &:not(:placeholder-shown) ~ span {
      transform: translateY(-30px);
      font-size: 12px;
      color: #fff;
    }
  }
  svg {
    margin-left: -38px;
    position: relative;
    z-index: 1;
    padding: 5px;
    width: /*unidade de medida responsiva*/ 2rem;
    height: auto;
    /*caso tenha um onClick no svg, o cursor fica como pointer*/
    &:hover {
      cursor: ${(props) => (props.hireable ? "pointer" : "default")};
      background-color: ${(props) => (props.hireable ? "#cd5008" : "none")};
      border-radius: ${(props) => (props.hireable ? "50%" : "none")};
      
    }
  }
  @media (max-height: 600px) {
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
  @media (max-height: 440px) {
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
      width: /*unidade de medida responsiva*/ 1.8rem;
    }
  }
`;

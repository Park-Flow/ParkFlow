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
    width: 300px;
    height: 50px;
    border: none;
    padding-left: 10px;
    font-size: 16px;
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
`;

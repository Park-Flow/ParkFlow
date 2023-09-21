import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 50px;
    width: 30em;
    height: 20em;
  }
`;

export const InputControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 40px;
  span{
    position: absolute;
    left: 22px;
    top: 0;
    line-height: 50px;
    pointer-events: none;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease;

  }
  input {
    width: 250px;
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
    &:focus ~ span, &:valid ~ span, &:not(:placeholder-shown) ~ span {
    transform: translateY(-30px);
    font-size: 12px;
    color: #fff;
  }
  }
  svg {
    margin-left: -30px;
    position: relative; 
    z-index: 1; 
    /*caso tenha um onClick no svg, o cursor fica como pointer*/
    &::active:hover {
      cursor: pointer;
    }
  }
`;

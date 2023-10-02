import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;

  form {
    img {
    width: 20rem;
    height: auto;
  }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media(max-height: 440px) {
    form {
      img {
        width: 30vw;
        height: auto;
        margin-top: 2rem;

      }
    }
  }
`;

export const Button = styled.button`
  width:  /*unidade de medida responsiva*/ 50%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: #cd5008;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:disabled {
    background-color: #01111100;
    color: #0FFFFF00;
    cursor: not-allowed;
  }

  &:enabled:hover {
    background-color: #fff;
    color: #cd5008;
    cursor: pointer;
    transform: scale(1.05);
  }
  &:enabled:focus {
    outline: none;
    transform: scale(1.0);
  }

  &:enabled:active {
    transform: scale(0.95);
  }

  @media (max-height: 440px) {
    width:  /*unidade de medida responsiva*/ 30%;
    height: 2rem;
    font-size: 0.7rem;
  }
`;

export const Link = styled.a`
  margin-top: 2rem;
  color: #fff;
  font-size: 1rem;
  text-decoration: underline;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media (max-height: 440px) {
    font-size: 0.7rem;
  }
`;
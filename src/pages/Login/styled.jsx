import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
  transition: all 0.3s ease;

  form {
    img {
      width: 20rem;
      height: auto;
    }
    .text-desktop {
      border-left: 3.5px solid #fff;
      margin-left: -3.5rem;
      margin-top: -2rem;
      margin-bottom: 2rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      padding-left: 0.3rem;
    }
    .divider {
      margin-top: 2.5rem;
      margin-bottom: -5rem;
      margin-left: 0.5rem;
      width: 62%;
      height: 0.5rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line {
        width: 40%;
        height: 2px;
        background-color: #fff;
      }
    }
    .signup-web{
      width: 62%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size:1rem;
      font-weight: 400;


    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-height: 440px) {
    form {
      img {
        width: 30vw;
        height: auto;
        margin-top: 2rem;
      }
    }
  }
  @media (min-width: 820px) {
    margin: auto;
    height: 88vh;
    form {
      height: 73vh;
      width: 30vw;
      margin-top: -2rem;
      background-color: #11111f;
    }
  }
`;

export const Button = styled.button`
  width:  /*unidade de medida responsiva*/ 50%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: #1D1F2E;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &.signup{
    background-color: #3c78ee;
    color: #fff;
    &:enabled:hover {
    background-color: #fff;
    color: #3c78ee;
    cursor: pointer;
    transform: scale(1.01);
  }
  }

  &:disabled {
    background-color: #01111100;
    color: #0fffff00;
    cursor: not-allowed;
  }

  &:enabled:hover {
    background-color: #fff;
    color: #1d1f2e;
    cursor: pointer;
    transform: scale(1.01);
  }
  &:enabled:focus {
    outline: none;
    transform: scale(1);
  }

  &:enabled:active {
    transform: scale(0.95);
  }

  @media (max-height: 440px) {
    width:  /*unidade de medida responsiva*/ 30%;
    height: 2rem;
    font-size: 0.7rem;
  }
  @media (min-width: 820px) {
    font-weight: 400;
    width:  /*unidade de medida responsiva*/ 50%;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 0;
    background-color: #1d1f2e;
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

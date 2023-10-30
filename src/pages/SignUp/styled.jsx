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
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      flex-shrink: 2;
      display: flex;
      width: 20rem;
      height: auto;
    }
    .text-desktop {
      margin-top: 1rem;
      margin-bottom: 2rem;
      width: 60%;
      height: 2.2rem;
      display: none;
      align-items: center;
      justify-content: flex-start;
      font-size: 1rem;
      span {
        border-left: 3.5px solid #fff;
        height: 80%;
        padding-left: 0.3rem;
        display: flex;
        align-items: center;
      }
    }
    .divider {
      margin-top: 2.5rem;
      margin-bottom: -5rem;
      margin-left: 0.5rem;
      width: 62%;
      height: 0.5rem;
      margin-bottom: 2rem;
      display: none;
      justify-content: space-between;
      align-items: center;
      .line {
        width: 40%;
        height: 2px;
        background-color: #fff;
      }
    }
    .signup-web {
      margin-top: -1rem;
      width: 62%;
      display: none;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media screen and (max-height: 590px) {
    margin-top: -15vh;
    form {
      height: 100vh;
      img {
        width: 10rem;
        height: auto;
        margin-top: 2rem;
      }
    }
  }
  @media screen and (min-width: 820px) and (min-height: 650px) {
    margin: auto;
    height: 88vh;
    form {
      img {
        display: none;
      }
      .text-desktop,
      .signup-web,
      .divider {
        display: flex;
      }
      height: 78vh;
      width: 40vw;
      margin-top: -2rem;
      background-color: #11111f;
    }
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: #1d1f2e;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &.signup {
    background-color: #3c78ee;
    color: #fff;
    &:enabled:hover {
      background-color: #fff;
      color: #3c78ee;
      cursor: pointer;
      transform: scale(1.01);
    }
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

  @media screen and (max-height: 440px) {
    width: 30%;
    height: 2rem;
    font-size: 0.7rem;
  }
  @media screen and (max-height: 600px) {
    width: 30%;
    height: 2rem;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 300px) {
    height: 2.5rem;
  }
  @media screen and (min-width: 820px) and (min-height: 650px) {
    font-weight: 400;
    width: 40%;
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

  @media screen and (max-height: 600px) {
    font-size: 0.7rem;
  }
  @media (min-width: 820px) and (min-height: 600px) {
    display: none;
  }
`;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
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
      width: 62%;
      display: none;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 400;
    }
  }
  @media (max-height: 440px) {
    form {
      .text-desktop {
        display: none;
      }
      img {
        width: 30vw;
        height: auto;
        margin-top: 2rem;
      }
    }
  }
  @media (min-width: 820px) and (min-height: 600px) {
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
      height: 73vh;
      width: 30vw;
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
  &:disabled {
    background-color: #111111e;
    cursor: default;
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
    width: 30%;
    height: 2rem;
    font-size: 0.7rem;
  }
  @media (min-width: 820px) and (min-height: 600px) {
    font-weight: 400;
    width: 50%;
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

  @media (min-width: 820px) and (min-height: 600px) {
    display: none;
  }
`;

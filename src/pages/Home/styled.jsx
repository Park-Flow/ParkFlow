import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 12vh;
  @media screen and (min-width: 1100px) and (min-height: 600px) {
    flex-direction: row;
    height: 88vh;
    margin-top: 0;
    align-items: center
    justify-content: space-around;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 25rem;
  border-radius: 2rem;
  background: #292a2e;
  box-shadow: 0.3125rem 0.3125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  color: #8c8c8c;
  margin-bottom: 1.25rem;


  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    width: 50%;
    font-weight: 700;
    line-height: normal;
    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    width: 70%;

    li {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 1.275rem;

      span {
        color: #3c78ee;
      }
    }
  }

  p {
    font-size: 0.625em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    a {
      color: #3c78ee;
    }
  }
  @media screen and (min-width: 1100px) and (min-height: 600px) {
    width: 31.25rem;
    height: 29.75rem;
    margin-right: 5%;
    margin-bottom: 0;
    
  h1 {
    text-align: center;
    font-size: 2.375em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -1.25rem;
    margin-bottom: 2.5rem;
  }
  ul {

    li {
      font-size: 1.125em;
      margin-bottom: 1.875rem;
  }
  }
}
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 5rem;
  border-radius: 1.5rem;
  background: #292a2e;
  font-size: 1.5rem;
  font-weight: 700;
  color: #8c8c8c;
  margin-bottom: 1.25rem;
  box-shadow: 0.3125rem 0.3125rem 0.25rem 0 rgba(0, 0, 0, 0.25);

  &:hover {
    background: #292a2eb9;
    color: #fff;
    cursor: pointer;
  }
  &:active {
    background: #292a2e;
    color: #fff;
    scale: 0.95;
  }
  @media screen and (min-width: 1100px) and (min-height: 600px) {
    width: 31.25rem;
    height: 6.25rem;
    font-size: 2.375em;
    margin-bottom: 1.25rem;
`;

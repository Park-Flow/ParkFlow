import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 12vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.$ishome ? 'flex' : 'none')};
  align-items: center;
  justify-content: ${props => (props.$iscentered ? 'center' : 'space-between')};
  background-color: #11111f;
  img {
    width: 13rem;
    height: auto;
  }

  .profile-config {
    margin: 1rem 2rem 2rem 0;
    height: 100%;
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    span {
      height: 80%;
      padding-left: 0.3rem;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
    }
    svg {
      margin-left: 0.5rem;
      cursor: pointer;
      width: 2rem;
      height: auto;
    }
    .toggle-svg {
      transform: ${props =>
        props.$isopen ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: all 0.3s ease;
    }
    .dropdown {
      width: 13rem;
      height: 0;
      position: absolute;
      right: 2rem;
      top: 12vh;
      display: ${props => (props.$isopen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      background-color: #11111f;
      display: block;
      transition: height 0.5s ease;
      overflow: hidden;
      box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);
      .options {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 0.5rem;
        svg {
          width: 1.2rem;
          height: auto;
        }
        span {
          font-size: 1rem;
          cursor: pointer;
          margin-left: 0.5rem;
        }
      }
    }
    .dropdown.open {
      height: 10rem;
    }
  }
  @media screen and (min-width: 820px) and (min-height: 650px) {
    display: flex;
  }
`;

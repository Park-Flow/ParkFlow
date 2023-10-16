import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #11111f;
  img {
    width: 13rem;
    height: auto;
  }
  @media screen and (max-width: 819px) {
    display: none;
  }
`;

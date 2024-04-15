import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 10%;
  height: 10%;
  border: 2px solid rgb(241, 121, 0);
  border-top-color: rgb(204, 204, 204);
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;

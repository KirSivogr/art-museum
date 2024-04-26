import styled, { keyframes } from 'styled-components';
import {colors} from "@/constants/colors";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  opacity: 0.7;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 30%;
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
  border: 2px solid ${colors.secondary};
  border-top-color: ${colors.grey};
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Load = styled.div`
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;

  &:after {
    content: "";
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    border: ${colors.secondary};
    border-top-color: ${colors.white};
    animation: loader 1.2s linear infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const PageButton = styled.button<{ active: boolean }>`
  font-family: Lexend Deca, serif;
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#F17900' : '#f5f5f5')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  cursor: pointer;
  outline: none;
`;

export const ArrowButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #f5f5f5;
`;

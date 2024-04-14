import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 63px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 127px;
  width: 100%;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

export const FavoritesIcon = styled.img`
  position: relative;
  top: 5px;
  width: 15px;
  height: 19px;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FavoritesText = styled.div`
  display: flex;
  align-self: end;
  height: 20px;
  width: 120px;
  padding: 6px;
  color: white;
`;

export const Favorites = styled.div`
  display: flex;
  align-self: end;
  color: white;
  cursor: pointer;
`;

export const Home = styled.div`
  align-self: end;
  display: flex;
  color: white;
  cursor: pointer;
`;

export const Links = styled.div`
  display: flex;
  align-self: end;
  justify-content: space-between;
`;

export const HomeText = styled.div`
  display: flex;
  align-self: end;
  height: 20px;
  width: 80px;
  padding: 6px;
  color: white;
`;

export const HomeIcon = styled.img`
  width: 20px;
  height: 28px;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`;

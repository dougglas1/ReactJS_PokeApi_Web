import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgb(0, 0, 0 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;

export const Main = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
`;

import styled, { keyframes, css } from 'styled-components';

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

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    ${(props) =>
      props.error &&
      css`
        border: 2px solid red;
      `}
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading_api,
}))`
  background: white;
  border: 0;
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #ec2919;
      text-decoration: none;
    }
  }
`;

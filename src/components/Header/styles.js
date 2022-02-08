import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  background-color: #1c5476;
  height: 64px;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 6px 1px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconDiv = styled.div`
  position: absolute;
  pointer-events: none;
  height: 20px;
  left: 220px;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
`;

export const Input = styled.input`
  && {
    width: 100%;
    padding: 8px;
    padding-left: calc(1em + 24px);
    color: #000000;
    border-radius: 8px;

    @media (min-width: 960px) : {
      width: 20ch;
    }
  }
`;

export const SubmitButton = styled.button.attrs(() => ({ type: 'submit' }))`
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  margin-left: 4px;
`;

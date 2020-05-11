import styled from 'styled-components';

const ListWrap = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Form = styled.form`
  max-width: 450px;
  background: #fafafa;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #305a72;
`;

const ModalWrap = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
  box-shadow: 0px 0px 15px;
  z-index: 999;
  width: 400px;
  border-radius: 11px;
`;

const FormBtn = styled.li`
  -moz-box-shadow: inset 0px 1px 0px 0px #3985b1;
  -webkit-box-shadow: inset 0px 1px 0px 0px #3985b1;
  box-shadow: inset 0px 1px 0px 0px #3985b1;
  background-color: #216288;
  border: 1px solid #17445e;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 18px;
  text-decoration: none;
  font: 12px Arial, Helvetica, sans-serif;

  &:hover {
    background: linear-gradient(to bottom, #2d77a2 5%, #337da8 100%);
    background-color: #28739e;
  }
`;

const FormList = styled.li`
  display: block;
  margin-bottom: 10px;
  min-height: 35px;
`;

const FieldStyle = styled.input`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 8px;
  outline: none;
  border: 1px solid #b0cfe0;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: 0 0 5px #b0cfe0;
    border: 1px solid #b0cfe0;
  }
`;

export { ListWrap, Form, ModalWrap, FormBtn, FieldStyle, FormList };

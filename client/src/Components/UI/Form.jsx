import styled from 'styled-components';

const ListWrap = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 50px 50px 50px 50px;
`;

const ModalWrap = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
  box-shadow: 0px 0px 15px;
  z-index: 999;
  width: 400px;
`;
const BtnWrap = styled.li`
  display: flex;
  justify-content: space-between;
`;

export { ListWrap, Form, ModalWrap, BtnWrap };

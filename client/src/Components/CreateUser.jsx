import React, { useState } from 'react';
import styled from 'styled-components';

const CreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  if (!show) {
    return (
      <>
        <button onClick={handleOpen}>Sign Up</button>
      </>
    );
  }

  return (
    <>
      <ModalWrap>
        <button onClick={handleClose}> Close modal</button>
      </ModalWrap>
    </>
  );
};

export default CreateUser;

const ModalWrap = styled.section`
  margin-top: 50px;
  margin-left: 50px;
  height: 500px;
  width: 90vw;
  background-color: white;
  box-shadow: 5px 5px 15px;
  z-index: 999;
`;

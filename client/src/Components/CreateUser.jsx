import React, { useState } from 'react';

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
      <p>Modal stuff goes here</p>
      <button onClick={handleClose}> Close modal</button>
    </>
  );
};

export default CreateUser;

import React, { useState } from 'react';
import {
  ListWrap,
  ModalWrap,
  Form,
  FormBtn,
  FieldStyle,
  FormList,
  BtnWrap
} from './UI/index';

const EditUserModal = () => {
  const [show, setShow] = useState(false);
  const [protien, setProtien] = useState('');
  const [calorie, setCalorie] = useState('');
  const [carbs, setCarbs] = useState('');

  if (show) {
    return (
      <>
        <ModalWrap>
          <Form>
            <ListWrap>
              <FormList>
                <label htmlFor="Calories">Calories:</label>
                <FieldStyle
                  type="text"
                  name="Calories"
                  placeholder="Calorie Goal"
                  value={calorie}
                  onChange={e => setCalorie(e.target.value)}
                ></FieldStyle>
              </FormList>
              <FormList>
                <label htmlFor="Protien">Protien:</label>
                <FieldStyle
                  type="text"
                  name="Protien"
                  placeholder="Protien Goal"
                  value={protien}
                  onChange={e => setProtien(e.target.value)}
                ></FieldStyle>
              </FormList>
              <FormList>
                <label htmlFor="Carbs">Carbs:</label>
                <FieldStyle
                  type="text"
                  name="Carbs"
                  placeholder="Carbs Goal"
                  value={carbs}
                  onChange={e => setCarbs(e.target.value)}
                ></FieldStyle>
              </FormList>
            </ListWrap>
            <BtnWrap>
              <FormBtn>Submit</FormBtn>
              <FormBtn onClick={() => setShow(false)}>Cancel</FormBtn>
            </BtnWrap>
          </Form>
        </ModalWrap>
      </>
    );
  }
  return (
    <>
      <FormBtn onClick={() => setShow(true)}>Edit Profile</FormBtn>
    </>
  );
};

export default EditUserModal;

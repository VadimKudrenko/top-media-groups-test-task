// import React from 'react'
import { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function PasswordRegistrationWithConfirm() {

  const [passwordValidate, setPasswordValidate] = useState(false);
  const [passwordsFields, setPasswordsFields] = useState({
    password: '',
    confirmPassword: '',
  });
  
  useEffect(()=> {
    if(passwordsFields.confirmPassword !== passwordsFields.password) {
      setPasswordValidate(true);
    } else {
      setPasswordValidate(false);
    }
  }, [passwordsFields.confirmPassword, passwordsFields.password]);


  return (
    <Row className="mb-3 registration-form__inputs-row">
      <Form.Group className='registration-form__inputs-col' as={Col} md="6">
        <FloatingLabel
          label="Password"
          className="mb-6 registration-form__input-label registration-form__input--password"
        >
        <Form.Control 
          className='registration-form__input' 
          onChange={(e) => setPasswordsFields({...passwordsFields, password: e.target.value})} 
          value={passwordsFields.password}
          type="password" 
          placeholder="Password" 
          required />
        <Form.Control.Feedback type="invalid">Please fill in this field</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='registration-form__inputs-col' as={Col} md="6">
        <FloatingLabel
          label="Confirm password"
          className="mb-6 registration-form__input-label registration-form__input--confirm-password"
        >
        <Form.Control
          className='registration-form__input' 
          value={passwordsFields.confirmPassword}
          onChange={(e) => setPasswordsFields({...passwordsFields, confirmPassword: e.target.value})} 
          type="password" 
          placeholder="Confirm password" 
          isInvalid={passwordValidate}
          required 
        />
        <Form.Control.Feedback type="invalid">Password mismatch</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
    </Row>
  )
}

import { useState, useEffect } from 'react';
import './RegistrationForm.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import FormCheck from 'react-bootstrap/FormCheck'

import Feedback from 'react-bootstrap/esm/Feedback';

import FloatingLabelInput from './FloatingLabelInput/FloatingLabelInput'
import PhoneNumberByCountryCodeInputsGroup from './PhoneNumberByCountryCodeInputsGroup/PhoneNumberByCountryCodeInputsGroup'
import PasswordWithConfirmInputsGroup from './PasswordWithConfirmInputsGroup/PasswordRegistrationWithConfirm'
import CheckboxWithValidation from './CheckboxWithValidation/CheckboxWithValidation'

export default function RegistrationForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: any) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Row className="mb-3 registration-form__inputs-row">
        <Form.Group className='registration-form__inputs-col ' as={Col} md="6">
          <FloatingLabelInput label='First Name' invalidMessage='Please fill in this field' />
        </Form.Group>

        <Form.Group className='registration-form__inputs-col' as={Col} md="6">
          <FloatingLabelInput label='Second Name' invalidMessage='Please fill in this field' />
        </Form.Group>
      </Row>

      <Row className="mb-3 registration-form__inputs-row">
        <PhoneNumberByCountryCodeInputsGroup />
      </Row>

      <PasswordWithConfirmInputsGroup />

      <Row className="mb-3 registration-form__inputs-row">
        <Form.Group className='registration-form__inputs-col' as={Col} md="6">
          <FloatingLabelInput 
            label='Email' 
            invalidMessage='Please fill in this field by example example@gmail.com' 
            type='email'
          />
        </Form.Group>

        <Form.Group className='registration-form__inputs-col' as={Col} md="6">
          <CheckboxWithValidation />
        </Form.Group>
      </Row>
      <Button className='btn registration-form__sumbit-btn' type="submit">Sign Up</Button>
    </Form>
  );
}

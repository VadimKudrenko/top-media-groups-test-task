import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Feedback from 'react-bootstrap/esm/Feedback';
import Form from 'react-bootstrap/Form';

interface FloatingLabelInputProps {
  label: string;
  invalidMessage: string;
  type?: string;
}

export default function FloatingLabelInput({label, invalidMessage, type}:FloatingLabelInputProps) {
  return (
    <FloatingLabel
      label={label}
      className="mb-6 registration-form__input-label registration-form__input--user-name"
    >
      <Form.Control className='registration-form__input' type={type} as="input" placeholder="First Name" required />
      <Form.Control.Feedback type="invalid">{invalidMessage}</Form.Control.Feedback>
    </FloatingLabel>
  )
}

import React from 'react'
import FormCheck from 'react-bootstrap/FormCheck'
import Feedback from 'react-bootstrap/esm/Feedback';

export default function CheckboxWithValidation() {
  return (
    <FormCheck>
      <FormCheck.Input className='registration-form__checkbox' required />
      <FormCheck.Label className='registration-form__checkbox-label'>I agree to the <a className='registration-form__checkbox-label--link' href='/'>Terms & Conditions</a></FormCheck.Label>
      <Feedback className='registration-form__checkbox-label--feedback' type='invalid'>This field is required</Feedback>
    </FormCheck>
  )
}

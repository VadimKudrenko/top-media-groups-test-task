import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function PhoneNumberByCountryCodeInputsGroup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryPhoneCode, setCountryPhoneCode] = useState('+0');

  const handlePhoneNumber = (e: any) => {
    let formattedPhoneNumber;
    switch(countryPhoneCode) {
      
      case '+380':
        formattedPhoneNumber = formatPhoneNumberUA(e.target.value);
        setPhoneNumber(formattedPhoneNumber)
        break;

      case '+1':
        formattedPhoneNumber = formatPhoneNumberUS(e.target.value);
        setPhoneNumber(formattedPhoneNumber)
        break;

      case '+39': 
        formattedPhoneNumber = formatPhoneNumberIT(e.target.value);
        setPhoneNumber(formattedPhoneNumber)
        break;

      default: 
        break;
    }
  }

   // UA phone number
  // +380(##)###-##-##
  function formatPhoneNumberUA (value: any) {
    if(!value) return value
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if(phoneNumberLength < 6) {
      return `+${phoneNumber.slice(0, 5)}`
    }
    if(phoneNumberLength < 9) {
      return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5)}`;
    }
    if(phoneNumberLength < 11) {
      return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}`
    }
    return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`
  }

// US phone number
// +1(###)###-####
  function formatPhoneNumberUS (value: any) { 
    if(!value) return value
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if(phoneNumberLength < 6) {
      return `+${phoneNumber.slice(0, 6)}`
    }
    if(phoneNumberLength < 8) {
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    }
    return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 11)}`
  }

// IT phone number
// +39(###)####-###
  function formatPhoneNumberIT (value: any) { 
    if(!value) return value
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if(phoneNumberLength < 6) {
      return `+${phoneNumber.slice(0, 6)}`
    }
    if(phoneNumberLength < 10) {
      return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5)}`;
    }
    return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 9)}-${phoneNumber.slice(9, 12)}`
  }

  return (
    <>
      <Form.Group className='registration-form__inputs-col' as={Col} md="6">
        <FloatingLabel
          label="Country"
          className="mb-6 registration-form__input-label registration-form__input--location"
        >
          <Form.Select 
            onChange={e => {setPhoneNumber(e.target.value); setCountryPhoneCode(e.target.value)}} 
            as={Col} md="6" 
            aria-label="Default select example"
            className='registration-form__input'
            required
            defaultValue={""}
          >
            <option value="" disabled>Choose your country</option>
            <option value="+380">Ukraine</option>
            <option value="+1">USA</option>
            <option value="+39">Italy</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='registration-form__inputs-col' as={Col} md="6"> 
        <FloatingLabel
          label="Phone Number"
          className="mb-6 registration-form__input-label registration-form__input--phone"
        >
          <Form.Control 
            className='registration-form__input' 
            type='tel' 
            placeholder="Phone number" 
            onChange={e => handlePhoneNumber(e)}
            value={phoneNumber}
            required />
          <Form.Control.Feedback type="invalid">Please fill in this field</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
    </>
  )
}

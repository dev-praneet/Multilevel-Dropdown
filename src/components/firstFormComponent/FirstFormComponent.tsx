import styled from 'styled-components';

import InputPiece from './InputPiece';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Legend = styled.legend`
  font-size: 1.6rem;
  font-weight: 500;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 1em auto;
  padding: 0.5em 1.5em;
  font-size: 1.0em;

  &:hover {
    cursor: pointer;
  }
`;


const FirstFormComponent = () => {
    return (
        <form style={{marginTop: '2em'}}>
        <fieldset>

          <Legend>
            Contact Us Today!
          </Legend>

          <InputPiece labelName='First Name' placeholder='First Name' name='firstName' testRegex={/^[A-Za-z][A-Za-z.]*\s{0,1}[A-Za-z.]*$/} alert='Please enter a valid first name!'>
          <FontAwesomeIcon icon={faUser} className='svg-icon'/>
          </InputPiece>

          <InputPiece labelName='Last Name' placeholder='Last Name' name='lastName' testRegex={/^[A-Za-z][A-Za-z.]*\s{0,1}[A-Za-z.]*$/} alert='Please enter a valid last name!'>
          <FontAwesomeIcon icon={faUser} className='svg-icon'/>
          </InputPiece>

          <InputPiece labelName='E-Mail' placeholder='E-Mail Address' name='email' testRegex={/^[A-Za-z1-9][\w.]+@[a-z]+[.][a-z]+/} alert='Please enter a valid email!'>
          <FontAwesomeIcon icon={faEnvelope} className='svg-icon'/>
          </InputPiece>

          <InputPiece labelName='Phone #' placeholder='(845)555-1212' name='phone' testRegex={/^\(\d{3}\)\d{3}-\d{4}$/} alert='Please enter a valid phone number!'>
          <FontAwesomeIcon icon={faPhoneAlt} className='svg-icon'/>
          </InputPiece>

          <InputPiece labelName='Address' placeholder='Address' name='address' testRegex={/^\w+/} alert='Please enter a valid address!'>
          <FontAwesomeIcon icon={faHome} className='svg-icon'/>
          </InputPiece>

          <Button type='submit'>Submit</Button>

        </fieldset>
      </form>
    )
}

export default FirstFormComponent;
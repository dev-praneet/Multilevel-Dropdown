import styled from "styled-components";

// components
import TextInputSlab from "./TextInputSlab";
import RadioInputSlab from "./RadioInputSlab";
import CheckboxInputSlab from "./CheckboxInputSlab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const Legend = styled.legend`
    font-size: 1.6rem;
    font-weight: 500;
`;



const SecondFormComponent = () => {
    return (
        <form style={{marginTop: '3em',}}>
            <fieldset>
                <Legend>
                    Student Registration Form
                </Legend>

                <TextInputSlab label='First Name' name='firstName' placeholder='Prasannajeet' detail='(Max 50 Characters Allowed)' />

                <TextInputSlab label='Last Name' name='lastName' placeholder='Kadam' detail='(Max 50 Characters Allowed)' />

                <TextInputSlab label='Email Id' name='emailId' placeholder='p_jeet.kadam@email.com' detail='' />

                <TextInputSlab label='Mobile Number' name='mobileNumber' placeholder='7842xxxxxx' detail='(10 Digits Required)' />

                <RadioInputSlab name='Gender' radioInputs={['Male', 'Female']}/>

                <TextInputSlab label='City' name='city' placeholder='Latur' detail='(Max 50 Characters Allowed)' />

                <TextInputSlab label='Pin Code' name='pinCode' placeholder='875633' detail='(6 Digits Required)' />

                <TextInputSlab label='State' name='state' placeholder='Himachal Pradesh' detail='(Max 50 Characters Allowed)' />

                <TextInputSlab label='Country' name='country' placeholder='Bharat' detail='' />

                <CheckboxInputSlab name='Hobbies' checkboxInputs={['Drawing', 'Singing', 'Dancing', 'Sketching']}/>

                <CheckboxInputSlab name='Qualifications' checkboxInputs={['High School (10th)', 'Higher School (12th)', 'Graduation (Bachelors)', 'Post Graduation (Masters)', 'PhD']}/>

                <RadioInputSlab name='Course Applied For' radioInputs={['BCA (Bachelor of Computer Applications)', 'B.Com (Bachelor of Commerce)', 'B.Sc(Bachelor of Science)', 'BA (Bachelor of Arts)', 'MCA (Master of Computer Applications)', 'M.Com (Master of Commerce)', 'M.Sc (Master of Science)', 'MA (Master of Arts)']}/>

            </fieldset>
        </form>
    )
}

export default SecondFormComponent;
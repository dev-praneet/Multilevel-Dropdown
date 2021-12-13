import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{isValueOkay: Boolean}>`
    position: relative;
    margin: 1.4em 0em;

    ${
        props => !props.isValueOkay && css`
            :focus-within::after {
                content: attr(data-alert);
                position: absolute;
                color: red;
                bottom: -1.5em;
                left: 2em;
            }
        `
    }
`;

const InputRow = styled.div`
    display: flex;

    > :first-child {
        display: flex;
        background-color: hsl(0, 0%, 91%);
        width: 2em;
        height: 1.3rem;
        border: 1px solid hsl(0, 0%, 70%);
    }

    > :last-child {
        width: 100%;
    }
`;

const Label = styled.label`
    font-size: 1.3rem;
    font-weight: 400;
`;

const Input = styled.input<{isValueOkay: Boolean}>`
    height: 1.3rem;
    font-family: 'Karla', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    
    :focus {
        border: unset;
        outline: 2px solid green;
    }


    ${
        props => !props.isValueOkay && css`
            :focus {
                outline: 2px solid red;

                border: unset;
            }
        `
    }

    ::placeholder {
        font-size: 0.9rem;
    }

`;

type Props = {
    labelName: string;
    placeholder: string;
    name: string;
    testRegex: RegExp;
    alert: string;
}

const InputPiece:React.FC<Props> = (props) => {
    
    const [value, setValue] = useState<string>('');
    const [isValueOkay, setValueOkay] = useState<Boolean>(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setValueOkay(props.testRegex.test(event.target.value));
        console.log(props.testRegex.test(event.target.value));
    }

    return (
        <Container isValueOkay={isValueOkay} data-alert={props.alert}>
            <Label htmlFor={props.name}>
            {props.labelName}
            </Label>
            <br/>
            <InputRow>
                <div>{props.children}</div>
                <Input type='text' id={props.name} name={props.name} placeholder={props.placeholder} value={value} onChange={changeHandler} isValueOkay={isValueOkay}/>
            </InputRow>
        </Container>
    )
}

export default InputPiece;
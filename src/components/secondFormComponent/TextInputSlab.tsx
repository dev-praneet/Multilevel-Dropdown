import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0;

    > :last-child {
        flex-basis: 40%;
        text-align: center;
    }
`;

const Label = styled.label`
    flex-basis: 25%;
    align-self: center;
`;


const Input = styled.input`
    flex-basis: 35%;
    align-self: center;
`;

type Props = {
    name: string,
    label: string,
    detail: string,
    placeholder: string,
}

const TextInputSlab: React.FC<Props> = props => {

    const [value, setValue] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Container>
            <Label htmlFor={props.name}>{props.label}</Label>
            <Input id={props.name} type='text' value={value} name={props.name} placeholder={props.placeholder} onChange={changeHandler}></Input>
            <span>
                {props.detail}
            </span>
        </Container>
    )
}

export default TextInputSlab;
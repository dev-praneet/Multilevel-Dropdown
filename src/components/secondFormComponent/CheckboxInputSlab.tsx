import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin: 1em 0;

    > :first-child {
        flex-basis: 25%;
        flex-shrink: 0;
        align-self: center;
    }
`;

type Props = {
    name: string,
    checkboxInputs: string[]
}

const CheckboxInputSlab: React.FC<Props> = props => {
    return (
        <Container>
            <span>{props.name}</span>
            <div>
            {props.checkboxInputs.map((elem, i) => {
                return (
                    <div key={i}>
                        <input type='checkbox' id={elem} name={props.name} value={props.name}/>
                        <label htmlFor={elem}>{elem}</label>
                    </div>
                )
            })}
            </div>
        </Container>
    )
}

export default CheckboxInputSlab;
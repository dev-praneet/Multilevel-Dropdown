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

    > :last-child {
        flex-basis: 75%;
    }
`;

type Props = {
    name: string,
    radioInputs : string[],

}

const RadioInputSlab: React.FC<Props> = props => {
    return (
        <Container>
            <span>{props.name}</span>
            <div>
            {props.radioInputs.map((elem, i) => {
                return (
                    <div key={i}>
                    <input type='radio' id={elem} name={props.name} value={elem}/>
                    <label htmlFor={elem}>{elem}</label>
                    </div>
                )
            })}
            </div>


        </Container>
    )
}

export default RadioInputSlab;
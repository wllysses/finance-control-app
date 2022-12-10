import styled from "styled-components"
import { Control } from "../Control/Control"

export const Controls = () => {
    return (
        <ControlsWrapper className="container">
            <Control title="Entrada"/>
            <Control title="Saída"/>
            <Control title="Total"/>
        </ControlsWrapper>
    )
}

const ControlsWrapper = styled.div`
    margin-top: -2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
`
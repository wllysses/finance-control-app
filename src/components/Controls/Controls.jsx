import styled from "styled-components"
import { Control } from "../Control/Control"
import { DataContext } from "../../contexts/ContextData"
import { useContext, useEffect, useState } from "react"

export const Controls = () => {
    const { data } = useContext(DataContext)

    const [positive, setPositive] = useState([])
    const [negative, setNegative] = useState([])
    const [currency, setCurrency] = useState([])

    useEffect(() => {
        if(data.type == 'entrada') {
            setPositive([...positive, data.salary])
            setCurrency([...currency, data.salary])
        }
        if(data.type == 'saida') {
            setNegative([...negative, data.salary])
            setCurrency([...currency, Number('-' + data.salary)])
        }

    }, [data])

    return (
        <ControlsWrapper className="container">
            <Control title="Entrada" positive={positive}/>
            <Control title="Saída" negative={negative}/>
            <Control title="Total" total={currency}/>
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
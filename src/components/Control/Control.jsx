import styled from "styled-components"
import { BsArrowUpCircle } from 'react-icons/bs'
import { useEffect, useState } from "react"

export const Control = ({ title, positive, negative, total }) => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        if(title === 'Entrada') {
            let positive2 = positive.reduce((value, total) => {
                return value + total
            }, 0)
            setValue(positive2)
        } else if(title === 'Saída') {
            let negative2 = negative.reduce((value, total) => {
                return value + total
            }, 0)
            setValue(negative2)
        } else {
            let totalValues = total.reduce((value, total) => {
                return value + total
            }, 0)
            setValue(totalValues)
        }

    }, [positive, negative, total])

    return (
        <BoxControl>
            <div className="box-control-header">
                <h3>{title}</h3>
                <BsArrowUpCircle size={25}/>
            </div>
            <div className="box-control-body">
                <h2>R$ {value}</h2>
            </div>
        </BoxControl>
    )
}

const BoxControl = styled.div`

    max-width: 400px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 2rem;

    .box-control-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .box-control-body {
        text-align: center;
    }
`
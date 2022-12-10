import styled from "styled-components"
import { BsArrowUpCircle } from 'react-icons/bs'

export const Control = (props) => {
    return (
        <BoxControl>
            <div className="box-control-header">
                <h3>{props.title}</h3>
                <BsArrowUpCircle size={25}/>
            </div>
            <div className="box-control-body">
                <h2>R$ 1200.00</h2>
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
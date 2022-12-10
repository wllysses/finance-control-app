import styled from "styled-components"
import { TbReportMoney } from 'react-icons/tb'

export const Header = () => {
    return (
        <HeaderWrapper>
            <header>
                <div className="logoAndTitle">
                    <TbReportMoney size={70} color="white"/>
                    <h1>MyFinanceControl</h1>
                </div>
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background-color: #00D085;
    padding: 5rem 0;

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .logoAndTitle {
            display: flex;
            align-items: center;
        }

        h1 {
            font-weight: 700;
            color: white;
            font-size: 4rem;
            margin-bottom: 0;
        }
    }
`
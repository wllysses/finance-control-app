import { useState } from 'react'
import { Form } from '../components/Form/Form'
import { Controls } from '../components/Controls/Controls'
import { Header } from '../components/Header/Header'
import { SpendingList } from '../components/Spending/SpendingList'
import { DataContext } from '../contexts/ContextData'

export const Home = () => {

    const [data, setData] = useState({})

    return (
        <DataContext.Provider value={{ data, setData }}>
            <Header />
            <Controls />
            <Form />
            <SpendingList />
        </DataContext.Provider>
    )
}
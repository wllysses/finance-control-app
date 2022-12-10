import { BsFillTrashFill } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contexts/ContextData'
import { BsFillArrowUpCircleFill, BsArrowDownCircleFill } from 'react-icons/bs'

export const SpendingList = () => {

    const { data } = useContext(DataContext)
    const [info, setInfo] = useState([])

    function deleteItem(id) {
        let filtered = info.filter((transaction) => transaction.id !== id);
        setInfo(filtered)
    }

    useEffect(() => {
        Object.keys(data).length !== 0 && setInfo([...info, data])
    }, [data])

    return (
        <div className="container bg-light mt-4 rounded-2">
            <div className="table-responsive p-3">
                <table className="table table-hover text-center">
                    {
                        info.length == 0 ? 'Nenhuma operação cadastrada' :
                        <>
                            <thead>
                                <tr>
                                    <html>ID</html>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                    <th>Tipo</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.id}</td>
                                                <td>{data.description}</td>
                                                <td>{data.salary}</td>
                                                {
                                                data.type == 'entrada' ? 
                                                <td style={{color: 'green'}}>{<BsFillArrowUpCircleFill size={25}/>}</td> : 
                                                <td style={{color: 'red'}}>{<BsArrowDownCircleFill size={25}/>}</td>
                                                }
                                                <td><BsFillTrashFill style={{ cursor: 'pointer' }} onClick={() => deleteItem(data.id)}/></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </>
                    }
                </table>
            </div>
        </div>
    )
}
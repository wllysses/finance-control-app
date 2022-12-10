import { BsFillTrashFill } from 'react-icons/bs'

export const SpendingList = () => {

    return (
        <div className="container bg-light mt-4">
            <div className="table-responsive p-3">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Tipo</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Compras do mês</td>
                            <td>600</td>
                            <td>Saída</td>
                            <td><BsFillTrashFill style={{ cursor: 'pointer' }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
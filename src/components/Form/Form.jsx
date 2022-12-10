import { useState, useContext } from "react"
import { DataContext } from '../../contexts/ContextData'

export const Form = () => {

    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState(0)
    const [type, setType] = useState('')

    const { setData } = useContext(DataContext)

    let id = Math.floor(Math.random() * 1000)

    const handleData = (e) => {
        e.preventDefault()

        setData({
            id,
            description,
            salary,
            type
        })
    }

    return (
        <div className="container mt-4 p-0">
            <form onSubmit={handleData}>
                <div className="form-content bg-light p-3 rounded-2">
                    <div className="form-content-header">
                        <h3>Adicionar</h3>
                    </div>
                    <div className="form-content-body">
                        <div className="row align-items-center">
                            <div className="col">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="description" 
                                    placeholder="Descrição"
                                    onChange={(e) => setDescription((e.target.value))}
                                    required
                                    />
                                    <label htmlFor="description" className="form-label">Descrição</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="salary" 
                                    placeholder="Valor"
                                    onChange={(e) => setSalary(Number(e.target.value))}
                                    required
                                    />
                                    <label htmlFor="salary" className="form-label">Valor</label>
                                </div>
                            </div>
                            <div className="col">
                                <select 
                                className="form-select p-3"
                                onChange={(e) => setType(e.target.value)}
                                required
                                >
                                    <option selected disabled value="">Selecionar</option>
                                    <option value="entrada">Entrada</option>
                                    <option value="saida">Saída</option>
                                </select>
                            </div>
                            <div className="col">
                                <button className="btn btn-success">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
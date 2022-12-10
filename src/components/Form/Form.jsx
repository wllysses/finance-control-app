export const Form = () => {
    return (
        <div className="container mt-4 p-0">
            <div className="form-content bg-light p-3">
                <div className="form-content-header">
                    <h3>Cadastrar</h3>
                </div>
                <div className="form-content-body">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="description" placeholder="Descrição"/>
                                <label htmlFor="description" className="form-label">Descrição</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="salary" placeholder="Salário"/>
                                <label htmlFor="salary" className="form-label">Salário</label>
                            </div>
                        </div>
                        <div className="col">
                            <select className="form-select p-3">
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
        </div>
    )
}
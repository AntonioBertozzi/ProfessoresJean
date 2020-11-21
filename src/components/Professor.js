import React, { Component } from 'react';
import requisicao from '../Api'
import '../style/Geral.css'
import { Table } from 'reactstrap';

export default class Professor extends Component {
    state = {
        dados: []
    }

    //chamado imediatamente após alguma atualização ocorrer
    async componentDidMount() {
        const retorno = await requisicao.get('professores');
        this.setState({ dados: retorno.data });
    }

    render() {
        const { dados } = this.state;
        return (
            <div id="lista">

                <Table dark hover>
                    <thead id= "HeaderTable">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Nascimento</th>
                        <th>RA</th>
                        <th>Senha</th>
                    </thead>

                {dados.map(usr => (

                    <tbody>
                        <tr>
                            <th>{usr.Id}</th>
                            <td id= "NomeTabela">{usr.Nome}</td>
                            <td>{usr.Email}</td>
                            <td>{usr.Nascimento}</td>
                            <td>{usr.Ra}</td>
                            <td>{usr.Senha}</td>
                        </tr>
                    </tbody>
                    

                    //<span id={usr.Id} key={usr.Id}>
                    //    <div className="nome">Nome: {usr.Nome}</div>
                    //    <div className="email">E-Mail: {usr.Email}</div>
                    //    <div className="nascimento">Nascimento: {usr.Nascimento}</div>
                    //    <div className="ra">R.A: {usr.Ra}</div>
                    //    <div className="senha">Senha: {usr.Senha}</div>
                    //    <hr></hr>
                    //</span>
                )
                )}

                </Table>

            </div>
            
        );
    }

}
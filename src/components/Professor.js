import React, { Component } from "react";
import requisicao from "../Api";
import "../style/Geral.css";
import { Table, Button } from "reactstrap";

export default class Professor extends Component {
  state = {
    dados: [],
  };

  async componentDidMount() {
    const retorno = await requisicao.get("professores");
    this.setState({ dados: retorno.data });
  }

  render() {
    const { dados } = this.state;
    return (
      <div id="lista">
        <div id="divBotao">
          <Button id="botao" href="/cadastrar">
            Cadastrar
          </Button>
        </div>
        <Table dark striped hover responsive>
          <thead id="headerTable">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Nascimento</th>
              <th>E-Mail</th>
              <th>R.A</th>
              <th>Senha</th>
            </tr>
          </thead>

          {dados.map((usr) => (
            <tbody key={usr.Id}>
              <tr>
                <th>{usr.Id}</th>
                <td id="tableNome">{usr.Nome}</td>
                <td>{usr.Nascimento}</td>
                <td>{usr.Email}</td>
                <td>{usr.Ra}</td>
                <td>{usr.Senha}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}

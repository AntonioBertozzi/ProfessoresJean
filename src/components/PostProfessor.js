import React, { Component } from 'react';
import "../style/Geral.css";
import requisicao from "../Api";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class PostProfessor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Nome: '',
            Nascimento: '',
            Email: '',
            Ra: '',
            Senha: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        requisicao.post("professores/adicionar", this.state)
            .then(response => {
                console.log(response)
                alert('Professor cadastrado com sucesso!');
            })
            .catch(error => {
                console.log(error)
                alert('Algo deu errado, confira os campos e tente novamente!');
            })
    }

    render() {
        const { Nome, Nascimento, Email, Ra, Senha } = this.state
        return (
            <div id="postForm">
                <Form onSubmit={this.submitHandler}>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="Nome">Nome: </Label>
                                <Input type="text" name="Nome" value={Nome} onChange={this.changeHandler} placeholder="João Pedro" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="Email">E-mail: </Label>
                                <Input type="email" name="Email" value={Email} onChange={this.changeHandler} placeholder="joao@email.com" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Nascimento">Nascimento: </Label>
                                <Input type="date" name="Nascimento" value={Nascimento} onChange={this.changeHandler} />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Ra">R.A: </Label>
                                <Input type="text" name="Ra" value={Ra} onChange={this.changeHandler} placeholder="2018194059" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Senha">Senha: </Label>
                                <Input type="password" name="Senha" value={Senha} onChange={this.changeHandler} placeholder="senhasegura2020" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button id="botao" type="submit">Enviar</Button>
                </Form>
            </div>
        )
    }
}
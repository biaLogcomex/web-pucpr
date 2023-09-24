import React, { Component }  from 'react';
import { link } from 'react-router-dom';
import firebase from './firebase';

class Cadastro extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      data: "",
      dados:[]

    }
    this.criarUsuario = this.criarUsuario.bind(this);
    
  }
  async criarUsuario(){
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then(async (retorno) => {

      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        data: this.state.data
      })
      window.location.href = "./login";
    })
  }

  render(){
    return(
        <div>
          <h1> Pagina de Cadastro </h1>
          <input type="text" placeholder="Email" onChange={(e) => this.setState( {email: e.target.value}) }/>
          <br/>
          <input type="password" placeholder="Senha" onChange={(e) => this.setState( {senha: e.target.value}) }/>
          <br/>
          <input type="text" placeholder="Nome" onChange={(e) => this.setState( {nome: e.target.value}) }/>
          <br/>
          <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState( {sobrenome: e.target.value}) }/>
          <br/>
          <input type="date" placeholder="Data Nascimento" onChange={(e) => this.setState( {data: e.target.value}) }/>
          <br/>
          
          <button onClick={this.criarUsuario}>Criar Usuario</button>
          <h3>Ja possui Cadastro ?</h3>
          <button><a href='./Login'>Login</a></button>
        </div>
    )
  }
}

export default Cadastro;


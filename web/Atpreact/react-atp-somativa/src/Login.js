import React, { Component } from "react";
import { link } from "react-router-dom";
import firebase from "firebase";

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      erro: ""

    }
   this.acessar = this.acessar.bind(this);
  }
  async acessar(){
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() =>{
        window.location.href = "./principal";
      })
      .catch((error) =>{
        this.setState({ erro: "E-mail ou Senha incorreto" });
        
      })
  }

  render(){
    return(
      <div>
        <h1> Login </h1>
          <input type="text" placeholder="Email" onChange={(e) => this.setState( {email: e.target.value}) }/>
          <br/>
          <input type="password" placeholder="Senha" onChange={(e) => this.setState( {senha: e.target.value}) }/>
          <br/>
          {this.state.erro && <p style={{ color: "red" }}>{this.state.erro}</p>}
          <br/>
          <button onClick={this.acessar}>Acessar</button>
      </div>
    )
  }
}

export default Login;
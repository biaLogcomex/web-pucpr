import React, { Component } from "react";
import firebase from "./firebase";


class Principal extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      data: ""

    }
  }

  async componentDidMount(){
    await firebase.auth().onAuthStateChanged(async (usuario)=> {
      if(usuario){
        var uid = usuario.uid;

        await firebase.firestore().collection('usuario').doc(uid).get()
        .then((retorno)=>{
          this.setState({
            nome: retorno.data().nome,
            sobrenome: retorno.data().sobrenome,
            data: retorno.data().data
          })
        })
      }
    })

  }


  render(){
    return(
      <div>
          Nome: { this.state.nome} <br/>
          Sobrenome: { this.state.sobrenome} <br/>
          Data de Nascimento: { this.state.data}
      </div>
    )
  }
}

export default Principal;
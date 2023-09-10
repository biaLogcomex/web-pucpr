import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      mensagem: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      mensagem: '', // Limpa a mensagem de erro ou sucesso quando o usuário começa a digitar
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, senha } = this.state;
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  };

  render() {
    const { email, senha, mensagem } = this.state;

    return (
      <div className="App">
        <div className="center">
        <div className="right-column">
            <div className="blue-box">
              <h1>Login</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                    className="white-input"
                  />
                </div>

                <div className="form-group">
                  <label>Senha:</label>
                  <input
                    type="password"
                    name="senha"
                    value={senha}
                    onChange={this.handleInputChange}
                    required
                    className="white-input"
                  />
                </div>

                <button type="submit" className="white-button" style={{ color: '#8E44ED', fontSize: '16px' }}>
                  Acessar
                </button>
              </form>
              <p>{mensagem}</p>
            </div>
          </div>
          <div className="left-column">
            <img
              src="https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%B5es-isoladas-do-vetor-de-desenho-animado-quadro-criatividade-grupo-colegas-escrevendo-sobre-o-negro-colaborativo-no-253849343.jpg"
              alt="Imagem de ilustração"
              className="left-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

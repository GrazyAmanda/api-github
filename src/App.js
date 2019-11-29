import React, { Component } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import RepoLista from "./components/RepoLista";
import "./App.css";

class App extends Component {
  //iniciando os meus estado 
  state = {
    user: "",
    users: "",
    repos: [],
    error: "",
    loading: false
  };
//para receber a atualização do usuário
  changeUser = user => {
    this.setState({ user });
  };


  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      //aqui pra fazer a requicição dos repositórios
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
        
      );

      const { data: users } = await axios.get(
        `https://api.github.com/users/${user}`
        
      );
    //aqui ele faz a pesquisa da pessoa
      console.log(repos)
      console.log(users)
      //caso não tenha achado ninguém
      this.setState({ repos, users, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        loading: false
      });
    }
  };
 
  render() {
    const { user, users, repos, error, loading } = this.state;
    return (
      <div className="App">
        <Header />
        <Formulario
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
         <RepoLista 
         users={users}
         repos={repos} />
      </div>
    );
  }
}

export default App;
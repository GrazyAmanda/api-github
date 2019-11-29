import React from "react";
import Spinner from "../Spinner";
//componente que faz a pesquisa de usuários 
const Formulario = ({ user, loading, error, buttonAction, changeUser }) => (
  <div className="formContainer jumbotron">
     <h1>GitHub Info</h1>
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Buscar usuário"
      onChange={e => changeUser(e.target.value)}
    />
    <button className="searchButton" onClick={buttonAction}>
      {loading ? <Spinner /> : "Buscar"}
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default Formulario;

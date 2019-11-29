import React from "react";
import imageLogo from './images/githublogo.jpg';

//adicionando o cabeçalho da aplicação
const Header = () => (
  <header className="app-header" style={{ width: 1680, height: 80 , backgroundColor: '#302d2d',}}>
    <img className="img-circle pull-right" alt="avatar" width="40" height="40" src={imageLogo} alt='Logo da aplicação' />
  </header>
);

export default Header;
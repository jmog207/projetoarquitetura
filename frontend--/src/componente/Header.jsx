import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Walkway</h1>
      </div>
      <div className="nav-categorias">
        <Link to="/">Home</Link>
        <a href="#">Produtos</a>
        <a href="#">Contato</a>
      </div>
      <div className="form-busca">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
      <div className="logout">
        <button onClick={onLogout}>Sair</button> 
      </div>
    </header>
  );
};

export default Header;
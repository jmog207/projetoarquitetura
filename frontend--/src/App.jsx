import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componente/Login';
import Header from './componente/Header';
import TelaPrincipal from './componente/TelaPrincipal/TelaPrincipal';
import ProdutoDetalhe from './componente/ProdutoDetalhe';
import CadastroUsuario from './componente/CadastroUsuario';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Salva o login no localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false'); // Remove o login do localStorage
  };

  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Header onLogout={handleLogout} />
                <TelaPrincipal />
              </>
            ) : (
              <Login aoLogar={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/produto/:id"
          element={
            isLoggedIn ? (
              <>
                <Header onLogout={handleLogout} />
                <ProdutoDetalhe />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

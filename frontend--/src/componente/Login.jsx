import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook
import './Login.css';

function Login({ aoLogar }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate(); // Inicializa o hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch('http://localhost:8082/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem('Login realizado com sucesso!');
        aoLogar();
        console.log(dados);
      } else {
        setMensagem(dados.message || 'Erro ao fazer login.');
      }
    } catch (error) {
      setMensagem('Erro na conexão com o servidor.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="titulo">Walkway</h1>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <button
          className="botao-cadastro"
          onClick={() => navigate('/cadastro')}
        >
          Cadastrar
        </button>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
}

export default Login;

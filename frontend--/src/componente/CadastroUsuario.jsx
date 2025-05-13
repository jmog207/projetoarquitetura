import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch('http://localhost:8082/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem('Usuário cadastrado com sucesso!');
        setTimeout(() => navigate('/'), 1500); 
      } else {
        setMensagem(dados.message || 'Erro ao cadastrar usuário.');
      }
    } catch (error) {
      setMensagem('Erro na conexão com o servidor.');
    }
  };

  return (
    <div className="cadastro-wrapper">
      <div className="cadastro-container">
        <h1 className="titulo">Cadastro</h1>
        <h2>Cadastro de Usuário</h2>
        <form className="cadastro-form" onSubmit={handleCadastro}>
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
          <button type="submit">Cadastrar</button>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
}

export default CadastroUsuario;

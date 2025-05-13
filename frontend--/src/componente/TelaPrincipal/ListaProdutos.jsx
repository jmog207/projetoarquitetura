import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListarProdutos.css';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const resposta = await fetch('http://localhost:8082/api/produtos');
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
      }
    };

    buscarProdutos();
  }, []);

  return (
    <div className="lista-produtos">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <img
            src="/src/imagens/produto1.jpg"
            alt={produto.nome}
            className="imagem-produto"
            onClick={() => navigate(`/produto/${produto.id}`)}
          />
          <div className="info-produto">
            <p className="nome-produto">{produto.nome}</p>
            <p className="preco-produto">{produto.preco}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default ListaProdutos;

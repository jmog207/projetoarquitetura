import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProdutoDetalhe.css';

function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8082/api/produtos/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data))
      .catch(err => console.error('Erro ao carregar produto:', err));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  const handleTamanhoChange = (e) => {
    setTamanhoSelecionado(e.target.value);
  };

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const validarCep = (cep) => {
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep);
  };

  const calcularFrete = () => {
    if (!validarCep(cep)) {
      setErro('CEP inválido. Use o formato 00000-000.');
      setFrete(null);
      return;
    }
    
    setErro('');
    const valorFrete = (parseInt(cep.replace('-', '')) % 100) + 10; 
    setFrete(valorFrete.toFixed(2));
  };

  return (
    <div className="produto-detalhe">
      <div className="imagem-detalhe">
        <img src={produto.imagem || "/src/imagens/produto2.jpg"} alt={produto.nome} />
      </div>
      <div className="info-detalhe">
        <h2>{produto.nome}</h2>
        <p className="descricao">{produto.descricao}</p>

        <div className="tamanho">
          <label htmlFor="tamanho">Tamanho: </label>
          <select
            id="tamanho"
            value={tamanhoSelecionado}
            onChange={handleTamanhoChange}
          >
            <option value="">Selecione o tamanho</option>
            {[...Array(10)].map((_, index) => {
              const tamanho = 35 + index;
              return (
                <option key={tamanho} value={tamanho}>
                  {tamanho}
                </option>
              );
            })}
          </select>
        </div>

        <p className="preco">R$ {produto.preco.toFixed(2)}</p>
        <p className="avaliacao">Avaliação: ⭐⭐⭐⭐☆</p>

        {/* Campo de CEP e botão para calcular frete */}
        <div className="campo-cep">
          <input
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={handleCepChange}
          />
          <button onClick={calcularFrete}>Calcular Frete</button>
        </div>


        {erro && <p className="erro">{erro}</p>}

        {frete && <p className="frete">Frete: R$ {frete}</p>}

        <button className="btn-comprar">Comprar</button>
      </div>
    </div>
  );
}

export default ProdutoDetalhe;

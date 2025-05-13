import React from 'react';
import Carrossel from './Carrossel';
import ListaProdutos from './ListaProdutos';

function TelaPrincipal() {
  return (
    <>
      <Carrossel />
      <div className="divisoria-produtos">
        <h2>Encontre seu produto</h2>
        <hr />
      </div>
      <ListaProdutos />
    </>
  );
}

export default TelaPrincipal;

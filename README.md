Precisa ser feita a criação do banco co o mesmo nome presente no db_sequealize

const sequelize = new Sequelize('projetoAS', '--USUARIO--', '--SENHA--', {
    host: 'localhost',
    dialect: 'postgres'
});

e executar normalmenet com o node app.js

Front disponível na http://localhost:5173/


<pre> ```text /projeto_arquitetura │ ├── backend/ │ ├── config/ # Configuração do banco │ ├── controllers/ # Lógica dos endpoints │ ├── models/ # Modelos Sequelize │ └── routers/ # Rotas da API │ └── frontend/ ├── componente/ # Componentes React (Login, Header, ProdutoDetalhe, etc.) └── imagens/ # Imagens locais dos produtos ``` </pre>


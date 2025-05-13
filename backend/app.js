const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./config/db_sequelize');
const routes = require('./routers/route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', routes);

db.sequelize.sync().then(() => {
  console.log('Tabelas sincronizadas com sucesso!');
}).catch((err) => {
  console.error('Erro ao sincronizar tabelas:', err);
});

app.listen(8082, () => {
  console.log('Servidor rodando em http://localhost:8082');
});

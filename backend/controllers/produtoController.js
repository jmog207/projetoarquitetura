const db = require('../config/db_sequelize');
const Produto = db.Produto;

module.exports = {
  async listarProdutos(req, res) {
    const produtos = await Produto.findAll();
    res.json(produtos.map(produto => ({
      ...produto.dataValues,
      imagemUrl: 'http://localhost:8082/images/default.jpg'
    })));
  },

  async criarProduto(req, res) {
    const { nome, preco, descricao } = req.body;
    try {
      const produto = await Produto.create({ nome, preco, descricao });
      res.status(201).json(produto);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar produto' });
    }
  },

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, descricao } = req.body;
    try {
      await Produto.update({ nome, preco, descricao }, { where: { id } });
      res.json({ mensagem: 'Produto atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao atualizar produto' });
    }
  },

  async deletarProduto(req, res) {
    const { id } = req.params;
    try {
      await Produto.destroy({ where: { id } });
      res.json({ mensagem: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao deletar produto' });
    }
  },

  async obterProdutoPorId(req, res) {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
      }
      res.json({
        ...produto.dataValues,
        imagemUrl: 'http://localhost:8082/images/default.jpg'
      });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar produto' });
    }
  }
};

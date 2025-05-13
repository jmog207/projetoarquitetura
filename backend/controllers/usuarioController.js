const db = require('../config/db_sequelize');
const Usuario = db.Usuario;

module.exports = {
  async login(req, res) {
    const { login, senha } = req.body;

    try {
      const usuario = await Usuario.findOne({ where: { login, senha } });

      if (!usuario) {
        return res.status(401).json({ mensagem: 'Login ou senha inválidos' });
      }

      // Em produção, aqui você retornaria um JWT
      return res.json({ mensagem: 'Login realizado com sucesso', usuario });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro no servidor' });
    }
  },
  async listarUsuarios(req, res) {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  },

  async criarUsuario(req, res) {
    const { login, senha } = req.body;
    try {
      const usuario = await Usuario.create({ login, senha });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar usuário' });
    }
  },

  async atualizarUsuario(req, res) {
    const { id } = req.params;
    const { login, senha } = req.body;
    try {
      await Usuario.update({ login, senha }, { where: { id } });
      res.json({ mensagem: 'Usuário atualizado com sucesso' });
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao atualizar usuário' });
    }
  },

  async deletarUsuario(req, res) {
    const { id } = req.params;
    try {
      await Usuario.destroy({ where: { id } });
      res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao deletar usuário' });
    }
  }
};

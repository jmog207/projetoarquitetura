const db = require('../config/db_sequelize');
const Usuario = db.Usuario;

const login = async (req, res) => {
    const { login, senha } = req.body;

    if (!login || !senha) {
        return res.status(400).json({ message: "Login e senha são obrigatórios." });
    }

    try {
        const usuario = await Usuario.findOne({ where: { login } });

        if (!usuario) {
            return res.status(401).json({ message: "Usuário não encontrado." });
        }

        if (usuario.senha !== senha) {
            return res.status(401).json({ message: "Senha incorreta." });
        }

        return res.json({ message: "Login realizado com sucesso!", usuario });

    } catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ message: "Erro no servidor." });
    }
};

module.exports = { login };

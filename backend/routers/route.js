const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const produtoController = require('../controllers/produtoController');
const authController = require('../controllers/authController'); 


router.post('/auth/login', authController.login);


router.get('/users', usuarioController.listarUsuarios);
router.post('/users', usuarioController.criarUsuario);
router.put('/users/:id', usuarioController.atualizarUsuario);
router.delete('/users/:id', usuarioController.deletarUsuario);


router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:id', produtoController.obterProdutoPorId);
router.post('/produtos', produtoController.criarProduto);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.deletarProduto);

module.exports = router;

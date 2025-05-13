module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    return Produto;
  };
  
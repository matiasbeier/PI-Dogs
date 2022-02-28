const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    heigth: {
      type: DataTypes.JSON,
      allowNull: false
    },
    weigth:  {
      type: DataTypes.JSON,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING
    },
    origin: {
      type: DataTypes.STRING
    },
    created_by_me: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    image: {
      type: DataTypes.JSON,
    }

  });
};

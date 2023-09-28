const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("mvp", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

connection.authenticate()
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });

const Clothing = connection.define("clothes", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// connection.sync({force:true})
// .then(() => {
//     console.log("tables are created");
//   })
//   .catch((error) => {
//     throw error;
//   });

module.exports = {
  Clothing,
};

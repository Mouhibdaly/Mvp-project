const { Clothing } = require("../database-mysql/clothes.js");

module.exports.getAll = async (req, res) => {
  try {
    const allClothes = await Clothing.findAll();
    res.status(200).json(allClothes);
  } catch (error) {
    // console.log(error);
    // res.status(500).send(error);
    throw error 
  }
};

module.exports.create = async (req, res) => {
  try {
    const newCloth = await Clothing.create(req.body);
    res.status(201).json(newCloth);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const edit = await Clothing.update(req.body, { where: { id: req.params.id } });
    res.status(200).send(edit);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    const upd = await Clothing.destroy({ where: { id: req.params.id } });
    res.status(200).json(upd);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

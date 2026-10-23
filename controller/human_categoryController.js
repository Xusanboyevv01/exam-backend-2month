const { HumanCategory } = require("../models");
const { validateHumanCategory } = require("../validations/human_categoryValidation");
const { Op } = require("sequelize");

exports.createHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await HumanCategory.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategorys = async (req, res) => {
  try {
    const items = await HumanCategory.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategoryById = async (req, res) => {
  try {
    const item = await HumanCategory.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("HumanCategory not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await HumanCategory.findByPk(req.params.id);
    if (!item) return res.status(404).send("HumanCategory not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHumanCategory = async (req, res) => {
  try {
    const item = await HumanCategory.findByPk(req.params.id);
    if (!item) return res.status(404).send("HumanCategory not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "HumanCategory deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchHumanCategorys = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await HumanCategory.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

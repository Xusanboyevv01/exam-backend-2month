const { Types } = require("../models");
const { validateTypes } = require("../validations/typesValidation");
const { Op } = require("sequelize");

exports.createTypes = async (req, res) => {
  const { error } = validateTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Types.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTypess = async (req, res) => {
  try {
    const items = await Types.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTypesById = async (req, res) => {
  try {
    const item = await Types.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Types not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTypes = async (req, res) => {
  const { error } = validateTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Types.findByPk(req.params.id);
    if (!item) return res.status(404).send("Types not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTypes = async (req, res) => {
  try {
    const item = await Types.findByPk(req.params.id);
    if (!item) return res.status(404).send("Types not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Types deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTypess = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Types.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

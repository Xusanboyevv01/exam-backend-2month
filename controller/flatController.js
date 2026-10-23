const { Flat } = require("../models");
const { validateFlat } = require("../validations/flatValidation");
const { Op } = require("sequelize");

exports.createFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Flat.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlats = async (req, res) => {
  try {
    const items = await Flat.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlatById = async (req, res) => {
  try {
    const item = await Flat.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Flat not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Flat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Flat not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteFlat = async (req, res) => {
  try {
    const item = await Flat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Flat not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Flat deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchFlats = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { condition: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Flat.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

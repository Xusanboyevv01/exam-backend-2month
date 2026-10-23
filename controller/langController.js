const { Lang } = require("../models");
const { validateLang } = require("../validations/langValidation");
const { Op } = require("sequelize");

exports.createLang = async (req, res) => {
  const { error } = validateLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Lang.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangs = async (req, res) => {
  try {
    const items = await Lang.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangById = async (req, res) => {
  try {
    const item = await Lang.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Lang not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLang = async (req, res) => {
  const { error } = validateLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Lang.findByPk(req.params.id);
    if (!item) return res.status(404).send("Lang not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLang = async (req, res) => {
  try {
    const item = await Lang.findByPk(req.params.id);
    if (!item) return res.status(404).send("Lang not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Lang deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchLangs = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Lang.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

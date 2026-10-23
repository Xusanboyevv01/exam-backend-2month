const { Region } = require("../models");
const { validateRegion } = require("../validations/regionValidation");
const { Op } = require("sequelize");

exports.createRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Region.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegions = async (req, res) => {
  try {
    const items = await Region.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const item = await Region.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Region not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Region.findByPk(req.params.id);
    if (!item) return res.status(404).send("Region not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    const item = await Region.findByPk(req.params.id);
    if (!item) return res.status(404).send("Region not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Region deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchRegions = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Region.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

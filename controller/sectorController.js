const { Sector } = require("../models");
const { validateSector } = require("../validations/sectorValidation");
const { Op } = require("sequelize");

exports.createSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Sector.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSectors = async (req, res) => {
  try {
    const items = await Sector.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSectorById = async (req, res) => {
  try {
    const item = await Sector.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Sector not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Sector.findByPk(req.params.id);
    if (!item) return res.status(404).send("Sector not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSector = async (req, res) => {
  try {
    const item = await Sector.findByPk(req.params.id);
    if (!item) return res.status(404).send("Sector not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Sector deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSectors = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { sector_name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Sector.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

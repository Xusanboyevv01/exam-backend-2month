const { District } = require("../models");
const { validateDistrict } = require("../validations/districtValidation");
const { Op } = require("sequelize");

exports.createDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await District.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistricts = async (req, res) => {
  try {
    const items = await District.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const item = await District.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("District not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await District.findByPk(req.params.id);
    if (!item) return res.status(404).send("District not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDistrict = async (req, res) => {
  try {
    const item = await District.findByPk(req.params.id);
    if (!item) return res.status(404).send("District not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "District deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDistricts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await District.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

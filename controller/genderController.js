const { Gender } = require("../models");
const { validateGender } = require("../validations/genderValidation");
const { Op } = require("sequelize");

exports.createGender = async (req, res) => {
  const { error } = validateGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Gender.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getGenders = async (req, res) => {
  try {
    const items = await Gender.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getGenderById = async (req, res) => {
  try {
    const item = await Gender.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Gender not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateGender = async (req, res) => {
  const { error } = validateGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Gender.findByPk(req.params.id);
    if (!item) return res.status(404).send("Gender not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteGender = async (req, res) => {
  try {
    const item = await Gender.findByPk(req.params.id);
    if (!item) return res.status(404).send("Gender not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Gender deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchGenders = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Gender.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

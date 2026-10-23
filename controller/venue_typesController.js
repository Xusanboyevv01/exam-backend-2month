const { VenueTypes } = require("../models");
const { validateVenueTypes } = require("../validations/venue_typesValidation");
const { Op } = require("sequelize");

exports.createVenueTypes = async (req, res) => {
  const { error } = validateVenueTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await VenueTypes.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypess = async (req, res) => {
  try {
    const items = await VenueTypes.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypesById = async (req, res) => {
  try {
    const item = await VenueTypes.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("VenueTypes not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenueTypes = async (req, res) => {
  const { error } = validateVenueTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await VenueTypes.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenueTypes not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenueTypes = async (req, res) => {
  try {
    const item = await VenueTypes.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenueTypes not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "VenueTypes deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenueTypess = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { id: { [Op.eq]: Number(cleanQuery) || -1 } },
    ] };
    const items = await VenueTypes.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

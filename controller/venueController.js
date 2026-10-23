const { Venue } = require("../models");
const { validateVenue } = require("../validations/venueValidation");
const { Op } = require("sequelize");

exports.createVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Venue.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenues = async (req, res) => {
  try {
    const items = await Venue.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const item = await Venue.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Venue not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Venue.findByPk(req.params.id);
    if (!item) return res.status(404).send("Venue not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const item = await Venue.findByPk(req.params.id);
    if (!item) return res.status(404).send("Venue not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Venue deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenues = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
      { address: { [Op.like]: `%${cleanQuery}%` } },
      { location: { [Op.like]: `%${cleanQuery}%` } },
      { site: { [Op.like]: `%${cleanQuery}%` } },
      { phone: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Venue.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

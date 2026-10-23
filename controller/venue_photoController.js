const { VenuePhoto } = require("../models");
const { validateVenuePhoto } = require("../validations/venue_photoValidation");
const { Op } = require("sequelize");

exports.createVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await VenuePhoto.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhotos = async (req, res) => {
  try {
    const items = await VenuePhoto.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const item = await VenuePhoto.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("VenuePhoto not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await VenuePhoto.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenuePhoto not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenuePhoto = async (req, res) => {
  try {
    const item = await VenuePhoto.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenuePhoto not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "VenuePhoto deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenuePhotos = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { url: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await VenuePhoto.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

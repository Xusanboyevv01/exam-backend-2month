const { SeatType } = require("../models");
const { validateSeatType } = require("../validations/seat_typeValidation");
const { Op } = require("sequelize");

exports.createSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await SeatType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatTypes = async (req, res) => {
  try {
    const items = await SeatType.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatTypeById = async (req, res) => {
  try {
    const item = await SeatType.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("SeatType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await SeatType.findByPk(req.params.id);
    if (!item) return res.status(404).send("SeatType not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeatType = async (req, res) => {
  try {
    const item = await SeatType.findByPk(req.params.id);
    if (!item) return res.status(404).send("SeatType not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "SeatType deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSeatTypes = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await SeatType.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const { Seat } = require("../models");
const { validateSeat } = require("../validations/seatValidation");
const { Op } = require("sequelize");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Seat.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeats = async (req, res) => {
  try {
    const items = await Seat.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const item = await Seat.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Seat not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Seat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Seat not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const item = await Seat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Seat not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Seat deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSeats = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { id: { [Op.eq]: Number(cleanQuery) || -1 } },
    ] };
    const items = await Seat.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

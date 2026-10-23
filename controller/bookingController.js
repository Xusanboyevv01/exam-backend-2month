const { Booking } = require("../models");
const { validateBooking } = require("../validations/bookingValidation");
const { Op } = require("sequelize");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Booking.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const items = await Booking.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const item = await Booking.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Booking not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Booking.findByPk(req.params.id);
    if (!item) return res.status(404).send("Booking not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const item = await Booking.findByPk(req.params.id);
    if (!item) return res.status(404).send("Booking not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchBookings = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { id: { [Op.eq]: Number(cleanQuery) || -1 } },
    ] };
    const items = await Booking.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

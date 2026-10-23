const { Event } = require("../models");
const { validateEvent } = require("../validations/eventValidation");
const { Op } = require("sequelize");

exports.createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Event.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEvents = async (req, res) => {
  try {
    const items = await Event.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const item = await Event.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Event not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Event.findByPk(req.params.id);
    if (!item) return res.status(404).send("Event not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const item = await Event.findByPk(req.params.id);
    if (!item) return res.status(404).send("Event not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchEvents = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
      { photo: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Event.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const { EventType } = require("../models");
const { validateEventType } = require("../validations/event_typeValidation");
const { Op } = require("sequelize");

exports.createEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await EventType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypes = async (req, res) => {
  try {
    const items = await EventType.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const item = await EventType.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("EventType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await EventType.findByPk(req.params.id);
    if (!item) return res.status(404).send("EventType not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEventType = async (req, res) => {
  try {
    const item = await EventType.findByPk(req.params.id);
    if (!item) return res.status(404).send("EventType not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "EventType deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchEventTypes = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await EventType.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const { TicketStatus } = require("../models");
const { validateTicketStatus } = require("../validations/ticket_statusValidation");
const { Op } = require("sequelize");

exports.createTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await TicketStatus.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatuss = async (req, res) => {
  try {
    const items = await TicketStatus.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatusById = async (req, res) => {
  try {
    const item = await TicketStatus.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("TicketStatus not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketStatus not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketStatus = async (req, res) => {
  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketStatus not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "TicketStatus deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicketStatuss = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await TicketStatus.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const { Ticket } = require("../models");
const { validateTicket } = require("../validations/ticketValidation");
const { Op } = require("sequelize");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Ticket.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTickets = async (req, res) => {
  try {
    const items = await Ticket.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const item = await Ticket.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Ticket not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Ticket.findByPk(req.params.id);
    if (!item) return res.status(404).send("Ticket not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const item = await Ticket.findByPk(req.params.id);
    if (!item) return res.status(404).send("Ticket not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Ticket deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTickets = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { id: { [Op.eq]: Number(cleanQuery) || -1 } },
    ] };
    const items = await Ticket.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

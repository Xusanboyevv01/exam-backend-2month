const { CustomerCard } = require("../models");
const { validateCustomerCard } = require("../validations/customer_cardValidation");
const { Op } = require("sequelize");

exports.createCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await CustomerCard.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCards = async (req, res) => {
  try {
    const items = await CustomerCard.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerCardById = async (req, res) => {
  try {
    const item = await CustomerCard.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("CustomerCard not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await CustomerCard.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerCard not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerCard = async (req, res) => {
  try {
    const item = await CustomerCard.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerCard not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "CustomerCard deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomerCards = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
      { phone: { [Op.like]: `%${cleanQuery}%` } },
      { number: { [Op.like]: `%${cleanQuery}%` } },
      { year: { [Op.like]: `%${cleanQuery}%` } },
      { month: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await CustomerCard.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

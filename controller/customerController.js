const { Customer } = require("../models");
const { validateCustomer } = require("../validations/customerValidation");
const { Op } = require("sequelize");

exports.createCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Customer.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const items = await Customer.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const item = await Customer.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Customer not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Customer.findByPk(req.params.id);
    if (!item) return res.status(404).send("Customer not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const item = await Customer.findByPk(req.params.id);
    if (!item) return res.status(404).send("Customer not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomers = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { first_name: { [Op.like]: `%${cleanQuery}%` } },
      { last_name: { [Op.like]: `%${cleanQuery}%` } },
      { phone: { [Op.like]: `%${cleanQuery}%` } },
      { hashed_password: { [Op.like]: `%${cleanQuery}%` } },
      { email: { [Op.like]: `%${cleanQuery}%` } },
      { hashed_refresh_token: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Customer.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

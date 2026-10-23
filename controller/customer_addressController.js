const { CustomerAddress } = require("../models");
const { validateCustomerAddress } = require("../validations/customer_addressValidation");
const { Op } = require("sequelize");

exports.createCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await CustomerAddress.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddresss = async (req, res) => {
  try {
    const items = await CustomerAddress.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  try {
    const item = await CustomerAddress.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("CustomerAddress not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await CustomerAddress.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerAddress not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerAddress = async (req, res) => {
  try {
    const item = await CustomerAddress.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerAddress not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "CustomerAddress deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomerAddresss = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
      { street: { [Op.like]: `%${cleanQuery}%` } },
      { house: { [Op.like]: `%${cleanQuery}%` } },
      { location: { [Op.like]: `%${cleanQuery}%` } },
      { post_index: { [Op.like]: `%${cleanQuery}%` } },
      { info: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await CustomerAddress.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

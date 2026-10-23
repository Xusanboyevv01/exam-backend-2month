const { PaymentMethod } = require("../models");
const { validatePaymentMethod } = require("../validations/payment_methodValidation");
const { Op } = require("sequelize");

exports.createPaymentMethod = async (req, res) => {
  const { error } = validatePaymentMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await PaymentMethod.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getPaymentMethods = async (req, res) => {
  try {
    const items = await PaymentMethod.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getPaymentMethodById = async (req, res) => {
  try {
    const item = await PaymentMethod.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("PaymentMethod not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatePaymentMethod = async (req, res) => {
  const { error } = validatePaymentMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await PaymentMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("PaymentMethod not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const item = await PaymentMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("PaymentMethod not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "PaymentMethod deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchPaymentMethods = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await PaymentMethod.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

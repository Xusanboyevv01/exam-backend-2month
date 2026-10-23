const { DeliveryMethod } = require("../models");
const { validateDeliveryMethod } = require("../validations/delivery_methodValidation");
const { Op } = require("sequelize");

exports.createDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await DeliveryMethod.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethods = async (req, res) => {
  try {
    const items = await DeliveryMethod.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethodById = async (req, res) => {
  try {
    const item = await DeliveryMethod.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("DeliveryMethod not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("DeliveryMethod not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDeliveryMethod = async (req, res) => {
  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("DeliveryMethod not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "DeliveryMethod deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDeliveryMethods = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await DeliveryMethod.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

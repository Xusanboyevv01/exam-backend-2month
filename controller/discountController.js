const { Discount } = require("../models");
const { validateDiscount } = require("../validations/discountValidation");
const { Op } = require("sequelize");

exports.createDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Discount.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDiscounts = async (req, res) => {
  try {
    const items = await Discount.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const item = await Discount.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Discount not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Discount.findByPk(req.params.id);
    if (!item) return res.status(404).send("Discount not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const item = await Discount.findByPk(req.params.id);
    if (!item) return res.status(404).send("Discount not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Discount deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDiscounts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { discount: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Discount.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

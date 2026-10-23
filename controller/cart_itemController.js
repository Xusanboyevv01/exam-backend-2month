const { CartItem } = require("../models");
const { validateCartItem } = require("../validations/cart_itemValidation");
const { Op } = require("sequelize");

exports.createCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await CartItem.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const items = await CartItem.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const item = await CartItem.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("CartItem not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await CartItem.findByPk(req.params.id);
    if (!item) return res.status(404).send("CartItem not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const item = await CartItem.findByPk(req.params.id);
    if (!item) return res.status(404).send("CartItem not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "CartItem deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCartItems = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { id: { [Op.eq]: Number(cleanQuery) || -1 } },
    ] };
    const items = await CartItem.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

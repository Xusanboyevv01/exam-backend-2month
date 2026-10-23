const { Cart } = require("../models");
const { validateCart } = require("../validations/cartValidation");
const { Op } = require("sequelize");

exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Cart.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCarts = async (req, res) => {
  try {
    const items = await Cart.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartById = async (req, res) => {
  try {
    const item = await Cart.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Cart not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Cart.findByPk(req.params.id);
    if (!item) return res.status(404).send("Cart not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const item = await Cart.findByPk(req.params.id);
    if (!item) return res.status(404).send("Cart not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Cart deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCarts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { id: { [Op.eq]: Number(cleanQuery) || -1 } },
    ] };
    const items = await Cart.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const { Admin } = require("../models");
const { validateAdmin } = require("../validations/adminValidation");
const { Op } = require("sequelize");

exports.createAdmin = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Admin.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const items = await Admin.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const item = await Admin.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Admin not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateAdmin = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const item = await Admin.findByPk(req.params.id);
    if (!item) return res.status(404).send("Admin not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const item = await Admin.findByPk(req.params.id);
    if (!item) return res.status(404).send("Admin not found");
    await item.destroy();
    res.status(200).json({
      success: true,
      message: "Admin deleted successfully",
      item: item,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchAdmins = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");
    const cleanQuery = query.trim();
    const where = { [Op.or]: [
      { name: { [Op.like]: `%${cleanQuery}%` } },
      { login: { [Op.like]: `%${cleanQuery}%` } },
      { hashed_password: { [Op.like]: `%${cleanQuery}%` } },
      { hashed_refresh_token: { [Op.like]: `%${cleanQuery}%` } },
    ] };
    const items = await Admin.findAll({ where });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const express = require("express");
const router = express.Router();
const Controller = require("../controller/customerController");

/**
 * @swagger
 * tags:
 *   - name: Customer
 *     description: Customer CRUD and search endpoints
 */

/** @swagger
 * /api/customer:
 *   post:
 *     tags: [Customer]
 *     summary: Create Customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/customer", Controller.createCustomer);

/** @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all Customer
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/customer", Controller.getCustomers);

/** @swagger
 * /api/customer/search:
 *   get:
 *     tags: [Customer]
 *     summary: Search Customer
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
router.get("/customer/search", Controller.searchCustomers);

/** @swagger
 * /api/customer/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 */
router.get("/customer/:id", Controller.getCustomerById);

/** @swagger
 * /api/customer/{id}:
 *   patch:
 *     tags: [Customer]
 *     summary: Update Customer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Updated
 */
router.patch("/customer/:id", Controller.updateCustomer);

/** @swagger
 * /api/customer/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete Customer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/customer/:id", Controller.deleteCustomer);

module.exports = router;

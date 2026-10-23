const express = require("express");
const router = express.Router();
const Controller = require("../controller/customer_addressController");

/**
 * @swagger
 * tags:
 *   - name: CustomerAddress
 *     description: CustomerAddress CRUD and search endpoints
 */

/** @swagger
 * /api/customer_address:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create CustomerAddress
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
router.post("/customer_address", Controller.createCustomerAddress);

/** @swagger
 * /api/customer_address:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all CustomerAddress
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/customer_address", Controller.getCustomerAddresss);

/** @swagger
 * /api/customer_address/search:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Search CustomerAddress
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
router.get("/customer_address/search", Controller.searchCustomerAddresss);

/** @swagger
 * /api/customer_address/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get CustomerAddress by ID
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
router.get("/customer_address/:id", Controller.getCustomerAddressById);

/** @swagger
 * /api/customer_address/{id}:
 *   patch:
 *     tags: [CustomerAddress]
 *     summary: Update CustomerAddress
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
router.patch("/customer_address/:id", Controller.updateCustomerAddress);

/** @swagger
 * /api/customer_address/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete CustomerAddress
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
router.delete("/customer_address/:id", Controller.deleteCustomerAddress);

module.exports = router;

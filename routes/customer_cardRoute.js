const express = require("express");
const router = express.Router();
const Controller = require("../controller/customer_cardController");

/**
 * @swagger
 * tags:
 *   - name: CustomerCard
 *     description: CustomerCard CRUD and search endpoints
 */

/** @swagger
 * /api/customer_card:
 *   post:
 *     tags: [CustomerCard]
 *     summary: Create CustomerCard
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
router.post("/customer_card", Controller.createCustomerCard);

/** @swagger
 * /api/customer_card:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all CustomerCard
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/customer_card", Controller.getCustomerCards);

/** @swagger
 * /api/customer_card/search:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Search CustomerCard
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
router.get("/customer_card/search", Controller.searchCustomerCards);

/** @swagger
 * /api/customer_card/{id}:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get CustomerCard by ID
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
router.get("/customer_card/:id", Controller.getCustomerCardById);

/** @swagger
 * /api/customer_card/{id}:
 *   patch:
 *     tags: [CustomerCard]
 *     summary: Update CustomerCard
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
router.patch("/customer_card/:id", Controller.updateCustomerCard);

/** @swagger
 * /api/customer_card/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete CustomerCard
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
router.delete("/customer_card/:id", Controller.deleteCustomerCard);

module.exports = router;

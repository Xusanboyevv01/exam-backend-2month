const express = require("express");
const router = express.Router();
const Controller = require("../controller/payment_methodController");

/**
 * @swagger
 * tags:
 *   - name: PaymentMethod
 *     description: PaymentMethod CRUD and search endpoints
 */

/** @swagger
 * /api/payment_method:
 *   post:
 *     tags: [PaymentMethod]
 *     summary: Create PaymentMethod
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
router.post("/payment_method", Controller.createPaymentMethod);

/** @swagger
 * /api/payment_method:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get all PaymentMethod
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/payment_method", Controller.getPaymentMethods);

/** @swagger
 * /api/payment_method/search:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Search PaymentMethod
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
router.get("/payment_method/search", Controller.searchPaymentMethods);

/** @swagger
 * /api/payment_method/{id}:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get PaymentMethod by ID
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
router.get("/payment_method/:id", Controller.getPaymentMethodById);

/** @swagger
 * /api/payment_method/{id}:
 *   patch:
 *     tags: [PaymentMethod]
 *     summary: Update PaymentMethod
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
router.patch("/payment_method/:id", Controller.updatePaymentMethod);

/** @swagger
 * /api/payment_method/{id}:
 *   delete:
 *     tags: [PaymentMethod]
 *     summary: Delete PaymentMethod
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
router.delete("/payment_method/:id", Controller.deletePaymentMethod);

module.exports = router;

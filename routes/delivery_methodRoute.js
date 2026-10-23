const express = require("express");
const router = express.Router();
const Controller = require("../controller/delivery_methodController");

/**
 * @swagger
 * tags:
 *   - name: DeliveryMethod
 *     description: DeliveryMethod CRUD and search endpoints
 */

/** @swagger
 * /api/delivery_method:
 *   post:
 *     tags: [DeliveryMethod]
 *     summary: Create DeliveryMethod
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
router.post("/delivery_method", Controller.createDeliveryMethod);

/** @swagger
 * /api/delivery_method:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get all DeliveryMethod
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/delivery_method", Controller.getDeliveryMethods);

/** @swagger
 * /api/delivery_method/search:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Search DeliveryMethod
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
router.get("/delivery_method/search", Controller.searchDeliveryMethods);

/** @swagger
 * /api/delivery_method/{id}:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get DeliveryMethod by ID
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
router.get("/delivery_method/:id", Controller.getDeliveryMethodById);

/** @swagger
 * /api/delivery_method/{id}:
 *   patch:
 *     tags: [DeliveryMethod]
 *     summary: Update DeliveryMethod
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
router.patch("/delivery_method/:id", Controller.updateDeliveryMethod);

/** @swagger
 * /api/delivery_method/{id}:
 *   delete:
 *     tags: [DeliveryMethod]
 *     summary: Delete DeliveryMethod
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
router.delete("/delivery_method/:id", Controller.deleteDeliveryMethod);

module.exports = router;

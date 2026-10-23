const express = require("express");
const router = express.Router();
const Controller = require("../controller/discountController");

/**
 * @swagger
 * tags:
 *   - name: Discount
 *     description: Discount CRUD and search endpoints
 */

/** @swagger
 * /api/discount:
 *   post:
 *     tags: [Discount]
 *     summary: Create Discount
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
router.post("/discount", Controller.createDiscount);

/** @swagger
 * /api/discount:
 *   get:
 *     tags: [Discount]
 *     summary: Get all Discount
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/discount", Controller.getDiscounts);

/** @swagger
 * /api/discount/search:
 *   get:
 *     tags: [Discount]
 *     summary: Search Discount
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
router.get("/discount/search", Controller.searchDiscounts);

/** @swagger
 * /api/discount/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get Discount by ID
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
router.get("/discount/:id", Controller.getDiscountById);

/** @swagger
 * /api/discount/{id}:
 *   patch:
 *     tags: [Discount]
 *     summary: Update Discount
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
router.patch("/discount/:id", Controller.updateDiscount);

/** @swagger
 * /api/discount/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete Discount
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
router.delete("/discount/:id", Controller.deleteDiscount);

module.exports = router;

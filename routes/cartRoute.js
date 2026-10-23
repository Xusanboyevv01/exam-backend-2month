const express = require("express");
const router = express.Router();
const Controller = require("../controller/cartController");

/**
 * @swagger
 * tags:
 *   - name: Cart
 *     description: Cart CRUD and search endpoints
 */

/** @swagger
 * /api/cart:
 *   post:
 *     tags: [Cart]
 *     summary: Create Cart
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
router.post("/cart", Controller.createCart);

/** @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all Cart
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/cart", Controller.getCarts);

/** @swagger
 * /api/cart/search:
 *   get:
 *     tags: [Cart]
 *     summary: Search Cart
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
router.get("/cart/search", Controller.searchCarts);

/** @swagger
 * /api/cart/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get Cart by ID
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
router.get("/cart/:id", Controller.getCartById);

/** @swagger
 * /api/cart/{id}:
 *   patch:
 *     tags: [Cart]
 *     summary: Update Cart
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
router.patch("/cart/:id", Controller.updateCart);

/** @swagger
 * /api/cart/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete Cart
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
router.delete("/cart/:id", Controller.deleteCart);

module.exports = router;

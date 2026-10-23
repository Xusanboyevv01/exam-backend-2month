const express = require("express");
const router = express.Router();
const Controller = require("../controller/cart_itemController");

/**
 * @swagger
 * tags:
 *   - name: CartItem
 *     description: CartItem CRUD and search endpoints
 */

/** @swagger
 * /api/cart_item:
 *   post:
 *     tags: [CartItem]
 *     summary: Create CartItem
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
router.post("/cart_item", Controller.createCartItem);

/** @swagger
 * /api/cart_item:
 *   get:
 *     tags: [CartItem]
 *     summary: Get all CartItem
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/cart_item", Controller.getCartItems);

/** @swagger
 * /api/cart_item/search:
 *   get:
 *     tags: [CartItem]
 *     summary: Search CartItem
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
router.get("/cart_item/search", Controller.searchCartItems);

/** @swagger
 * /api/cart_item/{id}:
 *   get:
 *     tags: [CartItem]
 *     summary: Get CartItem by ID
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
router.get("/cart_item/:id", Controller.getCartItemById);

/** @swagger
 * /api/cart_item/{id}:
 *   patch:
 *     tags: [CartItem]
 *     summary: Update CartItem
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
router.patch("/cart_item/:id", Controller.updateCartItem);

/** @swagger
 * /api/cart_item/{id}:
 *   delete:
 *     tags: [CartItem]
 *     summary: Delete CartItem
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
router.delete("/cart_item/:id", Controller.deleteCartItem);

module.exports = router;

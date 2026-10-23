const express = require("express");
const router = express.Router();
const Controller = require("../controller/flatController");

/**
 * @swagger
 * tags:
 *   - name: Flat
 *     description: Flat CRUD and search endpoints
 */

/** @swagger
 * /api/flat:
 *   post:
 *     tags: [Flat]
 *     summary: Create Flat
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
router.post("/flat", Controller.createFlat);

/** @swagger
 * /api/flat:
 *   get:
 *     tags: [Flat]
 *     summary: Get all Flat
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/flat", Controller.getFlats);

/** @swagger
 * /api/flat/search:
 *   get:
 *     tags: [Flat]
 *     summary: Search Flat
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
router.get("/flat/search", Controller.searchFlats);

/** @swagger
 * /api/flat/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get Flat by ID
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
router.get("/flat/:id", Controller.getFlatById);

/** @swagger
 * /api/flat/{id}:
 *   patch:
 *     tags: [Flat]
 *     summary: Update Flat
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
router.patch("/flat/:id", Controller.updateFlat);

/** @swagger
 * /api/flat/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete Flat
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
router.delete("/flat/:id", Controller.deleteFlat);

module.exports = router;

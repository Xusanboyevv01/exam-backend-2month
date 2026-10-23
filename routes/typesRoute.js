const express = require("express");
const router = express.Router();
const Controller = require("../controller/typesController");

/**
 * @swagger
 * tags:
 *   - name: Types
 *     description: Types CRUD and search endpoints
 */

/** @swagger
 * /api/types:
 *   post:
 *     tags: [Types]
 *     summary: Create Types
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
router.post("/types", Controller.createTypes);

/** @swagger
 * /api/types:
 *   get:
 *     tags: [Types]
 *     summary: Get all Types
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/types", Controller.getTypess);

/** @swagger
 * /api/types/search:
 *   get:
 *     tags: [Types]
 *     summary: Search Types
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
router.get("/types/search", Controller.searchTypess);

/** @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Types]
 *     summary: Get Types by ID
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
router.get("/types/:id", Controller.getTypesById);

/** @swagger
 * /api/types/{id}:
 *   patch:
 *     tags: [Types]
 *     summary: Update Types
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
router.patch("/types/:id", Controller.updateTypes);

/** @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Types]
 *     summary: Delete Types
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
router.delete("/types/:id", Controller.deleteTypes);

module.exports = router;

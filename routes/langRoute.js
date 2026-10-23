const express = require("express");
const router = express.Router();
const Controller = require("../controller/langController");

/**
 * @swagger
 * tags:
 *   - name: Lang
 *     description: Lang CRUD and search endpoints
 */

/** @swagger
 * /api/lang:
 *   post:
 *     tags: [Lang]
 *     summary: Create Lang
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
router.post("/lang", Controller.createLang);

/** @swagger
 * /api/lang:
 *   get:
 *     tags: [Lang]
 *     summary: Get all Lang
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/lang", Controller.getLangs);

/** @swagger
 * /api/lang/search:
 *   get:
 *     tags: [Lang]
 *     summary: Search Lang
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
router.get("/lang/search", Controller.searchLangs);

/** @swagger
 * /api/lang/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: Get Lang by ID
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
router.get("/lang/:id", Controller.getLangById);

/** @swagger
 * /api/lang/{id}:
 *   patch:
 *     tags: [Lang]
 *     summary: Update Lang
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
router.patch("/lang/:id", Controller.updateLang);

/** @swagger
 * /api/lang/{id}:
 *   delete:
 *     tags: [Lang]
 *     summary: Delete Lang
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
router.delete("/lang/:id", Controller.deleteLang);

module.exports = router;

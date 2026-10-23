const express = require("express");
const router = express.Router();
const Controller = require("../controller/human_categoryController");

/**
 * @swagger
 * tags:
 *   - name: HumanCategory
 *     description: HumanCategory CRUD and search endpoints
 */

/** @swagger
 * /api/human_category:
 *   post:
 *     tags: [HumanCategory]
 *     summary: Create HumanCategory
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
router.post("/human_category", Controller.createHumanCategory);

/** @swagger
 * /api/human_category:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get all HumanCategory
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/human_category", Controller.getHumanCategorys);

/** @swagger
 * /api/human_category/search:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Search HumanCategory
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
router.get("/human_category/search", Controller.searchHumanCategorys);

/** @swagger
 * /api/human_category/{id}:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get HumanCategory by ID
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
router.get("/human_category/:id", Controller.getHumanCategoryById);

/** @swagger
 * /api/human_category/{id}:
 *   patch:
 *     tags: [HumanCategory]
 *     summary: Update HumanCategory
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
router.patch("/human_category/:id", Controller.updateHumanCategory);

/** @swagger
 * /api/human_category/{id}:
 *   delete:
 *     tags: [HumanCategory]
 *     summary: Delete HumanCategory
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
router.delete("/human_category/:id", Controller.deleteHumanCategory);

module.exports = router;

const express = require("express");
const router = express.Router();
const Controller = require("../controller/regionController");

/**
 * @swagger
 * tags:
 *   - name: Region
 *     description: Region CRUD and search endpoints
 */

/** @swagger
 * /api/region:
 *   post:
 *     tags: [Region]
 *     summary: Create Region
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
router.post("/region", Controller.createRegion);

/** @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Get all Region
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/region", Controller.getRegions);

/** @swagger
 * /api/region/search:
 *   get:
 *     tags: [Region]
 *     summary: Search Region
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
router.get("/region/search", Controller.searchRegions);

/** @swagger
 * /api/region/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get Region by ID
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
router.get("/region/:id", Controller.getRegionById);

/** @swagger
 * /api/region/{id}:
 *   patch:
 *     tags: [Region]
 *     summary: Update Region
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
router.patch("/region/:id", Controller.updateRegion);

/** @swagger
 * /api/region/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete Region
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
router.delete("/region/:id", Controller.deleteRegion);

module.exports = router;

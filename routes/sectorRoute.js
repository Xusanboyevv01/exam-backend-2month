const express = require("express");
const router = express.Router();
const Controller = require("../controller/sectorController");

/**
 * @swagger
 * tags:
 *   - name: Sector
 *     description: Sector CRUD and search endpoints
 */

/** @swagger
 * /api/sector:
 *   post:
 *     tags: [Sector]
 *     summary: Create Sector
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
router.post("/sector", Controller.createSector);

/** @swagger
 * /api/sector:
 *   get:
 *     tags: [Sector]
 *     summary: Get all Sector
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/sector", Controller.getSectors);

/** @swagger
 * /api/sector/search:
 *   get:
 *     tags: [Sector]
 *     summary: Search Sector
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
router.get("/sector/search", Controller.searchSectors);

/** @swagger
 * /api/sector/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get Sector by ID
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
router.get("/sector/:id", Controller.getSectorById);

/** @swagger
 * /api/sector/{id}:
 *   patch:
 *     tags: [Sector]
 *     summary: Update Sector
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
router.patch("/sector/:id", Controller.updateSector);

/** @swagger
 * /api/sector/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete Sector
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
router.delete("/sector/:id", Controller.deleteSector);

module.exports = router;

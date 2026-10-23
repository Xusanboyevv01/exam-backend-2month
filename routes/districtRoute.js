const express = require("express");
const router = express.Router();
const Controller = require("../controller/districtController");

/**
 * @swagger
 * tags:
 *   - name: District
 *     description: District CRUD and search endpoints
 */

/** @swagger
 * /api/district:
 *   post:
 *     tags: [District]
 *     summary: Create District
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
router.post("/district", Controller.createDistrict);

/** @swagger
 * /api/district:
 *   get:
 *     tags: [District]
 *     summary: Get all District
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/district", Controller.getDistricts);

/** @swagger
 * /api/district/search:
 *   get:
 *     tags: [District]
 *     summary: Search District
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
router.get("/district/search", Controller.searchDistricts);

/** @swagger
 * /api/district/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get District by ID
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
router.get("/district/:id", Controller.getDistrictById);

/** @swagger
 * /api/district/{id}:
 *   patch:
 *     tags: [District]
 *     summary: Update District
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
router.patch("/district/:id", Controller.updateDistrict);

/** @swagger
 * /api/district/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete District
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
router.delete("/district/:id", Controller.deleteDistrict);

module.exports = router;

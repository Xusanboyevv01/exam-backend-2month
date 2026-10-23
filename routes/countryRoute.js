const express = require("express");
const router = express.Router();
const Controller = require("../controller/countryController");

/**
 * @swagger
 * tags:
 *   - name: Country
 *     description: Country CRUD and search endpoints
 */

/** @swagger
 * /api/country:
 *   post:
 *     tags: [Country]
 *     summary: Create Country
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
router.post("/country", Controller.createCountry);

/** @swagger
 * /api/country:
 *   get:
 *     tags: [Country]
 *     summary: Get all Country
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/country", Controller.getCountrys);

/** @swagger
 * /api/country/search:
 *   get:
 *     tags: [Country]
 *     summary: Search Country
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
router.get("/country/search", Controller.searchCountrys);

/** @swagger
 * /api/country/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get Country by ID
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
router.get("/country/:id", Controller.getCountryById);

/** @swagger
 * /api/country/{id}:
 *   patch:
 *     tags: [Country]
 *     summary: Update Country
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
router.patch("/country/:id", Controller.updateCountry);

/** @swagger
 * /api/country/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete Country
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
router.delete("/country/:id", Controller.deleteCountry);

module.exports = router;

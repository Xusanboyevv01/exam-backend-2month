const express = require("express");
const router = express.Router();
const Controller = require("../controller/venue_typesController");

/**
 * @swagger
 * tags:
 *   - name: VenueTypes
 *     description: VenueTypes CRUD and search endpoints
 */

/** @swagger
 * /api/venue_types:
 *   post:
 *     tags: [VenueTypes]
 *     summary: Create VenueTypes
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
router.post("/venue_types", Controller.createVenueTypes);

/** @swagger
 * /api/venue_types:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Get all VenueTypes
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/venue_types", Controller.getVenueTypess);

/** @swagger
 * /api/venue_types/search:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Search VenueTypes
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
router.get("/venue_types/search", Controller.searchVenueTypess);

/** @swagger
 * /api/venue_types/{id}:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Get VenueTypes by ID
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
router.get("/venue_types/:id", Controller.getVenueTypesById);

/** @swagger
 * /api/venue_types/{id}:
 *   patch:
 *     tags: [VenueTypes]
 *     summary: Update VenueTypes
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
router.patch("/venue_types/:id", Controller.updateVenueTypes);

/** @swagger
 * /api/venue_types/{id}:
 *   delete:
 *     tags: [VenueTypes]
 *     summary: Delete VenueTypes
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
router.delete("/venue_types/:id", Controller.deleteVenueTypes);

module.exports = router;

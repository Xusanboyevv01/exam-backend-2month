const express = require("express");
const router = express.Router();
const Controller = require("../controller/venueController");

/**
 * @swagger
 * tags:
 *   - name: Venue
 *     description: Venue CRUD and search endpoints
 */

/** @swagger
 * /api/venue:
 *   post:
 *     tags: [Venue]
 *     summary: Create Venue
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
router.post("/venue", Controller.createVenue);

/** @swagger
 * /api/venue:
 *   get:
 *     tags: [Venue]
 *     summary: Get all Venue
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/venue", Controller.getVenues);

/** @swagger
 * /api/venue/search:
 *   get:
 *     tags: [Venue]
 *     summary: Search Venue
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
router.get("/venue/search", Controller.searchVenues);

/** @swagger
 * /api/venue/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get Venue by ID
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
router.get("/venue/:id", Controller.getVenueById);

/** @swagger
 * /api/venue/{id}:
 *   patch:
 *     tags: [Venue]
 *     summary: Update Venue
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
router.patch("/venue/:id", Controller.updateVenue);

/** @swagger
 * /api/venue/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Delete Venue
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
router.delete("/venue/:id", Controller.deleteVenue);

module.exports = router;

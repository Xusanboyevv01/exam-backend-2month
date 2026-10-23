const express = require("express");
const router = express.Router();
const Controller = require("../controller/venue_photoController");

/**
 * @swagger
 * tags:
 *   - name: VenuePhoto
 *     description: VenuePhoto CRUD and search endpoints
 */

/** @swagger
 * /api/venue_photo:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create VenuePhoto
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
router.post("/venue_photo", Controller.createVenuePhoto);

/** @swagger
 * /api/venue_photo:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all VenuePhoto
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/venue_photo", Controller.getVenuePhotos);

/** @swagger
 * /api/venue_photo/search:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Search VenuePhoto
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
router.get("/venue_photo/search", Controller.searchVenuePhotos);

/** @swagger
 * /api/venue_photo/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get VenuePhoto by ID
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
router.get("/venue_photo/:id", Controller.getVenuePhotoById);

/** @swagger
 * /api/venue_photo/{id}:
 *   patch:
 *     tags: [VenuePhoto]
 *     summary: Update VenuePhoto
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
router.patch("/venue_photo/:id", Controller.updateVenuePhoto);

/** @swagger
 * /api/venue_photo/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete VenuePhoto
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
router.delete("/venue_photo/:id", Controller.deleteVenuePhoto);

module.exports = router;

const express = require("express");
const router = express.Router();
const Controller = require("../controller/bookingController");

/**
 * @swagger
 * tags:
 *   - name: Booking
 *     description: Booking CRUD and search endpoints
 */

/** @swagger
 * /api/booking:
 *   post:
 *     tags: [Booking]
 *     summary: Create Booking
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
router.post("/booking", Controller.createBooking);

/** @swagger
 * /api/booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all Booking
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/booking", Controller.getBookings);

/** @swagger
 * /api/booking/search:
 *   get:
 *     tags: [Booking]
 *     summary: Search Booking
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
router.get("/booking/search", Controller.searchBookings);

/** @swagger
 * /api/booking/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get Booking by ID
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
router.get("/booking/:id", Controller.getBookingById);

/** @swagger
 * /api/booking/{id}:
 *   patch:
 *     tags: [Booking]
 *     summary: Update Booking
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
router.patch("/booking/:id", Controller.updateBooking);

/** @swagger
 * /api/booking/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete Booking
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
router.delete("/booking/:id", Controller.deleteBooking);

module.exports = router;

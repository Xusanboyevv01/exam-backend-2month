const express = require("express");
const router = express.Router();
const Controller = require("../controller/seatController");

/**
 * @swagger
 * tags:
 *   - name: Seat
 *     description: Seat CRUD and search endpoints
 */

/** @swagger
 * /api/seat:
 *   post:
 *     tags: [Seat]
 *     summary: Create Seat
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
router.post("/seat", Controller.createSeat);

/** @swagger
 * /api/seat:
 *   get:
 *     tags: [Seat]
 *     summary: Get all Seat
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/seat", Controller.getSeats);

/** @swagger
 * /api/seat/search:
 *   get:
 *     tags: [Seat]
 *     summary: Search Seat
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
router.get("/seat/search", Controller.searchSeats);

/** @swagger
 * /api/seat/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get Seat by ID
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
router.get("/seat/:id", Controller.getSeatById);

/** @swagger
 * /api/seat/{id}:
 *   patch:
 *     tags: [Seat]
 *     summary: Update Seat
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
router.patch("/seat/:id", Controller.updateSeat);

/** @swagger
 * /api/seat/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete Seat
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
router.delete("/seat/:id", Controller.deleteSeat);

module.exports = router;

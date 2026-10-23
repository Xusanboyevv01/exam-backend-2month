const express = require("express");
const router = express.Router();
const Controller = require("../controller/seat_typeController");

/**
 * @swagger
 * tags:
 *   - name: SeatType
 *     description: SeatType CRUD and search endpoints
 */

/** @swagger
 * /api/seat_type:
 *   post:
 *     tags: [SeatType]
 *     summary: Create SeatType
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
router.post("/seat_type", Controller.createSeatType);

/** @swagger
 * /api/seat_type:
 *   get:
 *     tags: [SeatType]
 *     summary: Get all SeatType
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/seat_type", Controller.getSeatTypes);

/** @swagger
 * /api/seat_type/search:
 *   get:
 *     tags: [SeatType]
 *     summary: Search SeatType
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
router.get("/seat_type/search", Controller.searchSeatTypes);

/** @swagger
 * /api/seat_type/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: Get SeatType by ID
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
router.get("/seat_type/:id", Controller.getSeatTypeById);

/** @swagger
 * /api/seat_type/{id}:
 *   patch:
 *     tags: [SeatType]
 *     summary: Update SeatType
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
router.patch("/seat_type/:id", Controller.updateSeatType);

/** @swagger
 * /api/seat_type/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete SeatType
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
router.delete("/seat_type/:id", Controller.deleteSeatType);

module.exports = router;

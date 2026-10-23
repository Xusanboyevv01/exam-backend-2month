const express = require("express");
const router = express.Router();
const Controller = require("../controller/eventController");

/**
 * @swagger
 * tags:
 *   - name: Event
 *     description: Event CRUD and search endpoints
 */

/** @swagger
 * /api/event:
 *   post:
 *     tags: [Event]
 *     summary: Create Event
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
router.post("/event", Controller.createEvent);

/** @swagger
 * /api/event:
 *   get:
 *     tags: [Event]
 *     summary: Get all Event
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/event", Controller.getEvents);

/** @swagger
 * /api/event/search:
 *   get:
 *     tags: [Event]
 *     summary: Search Event
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
router.get("/event/search", Controller.searchEvents);

/** @swagger
 * /api/event/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get Event by ID
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
router.get("/event/:id", Controller.getEventById);

/** @swagger
 * /api/event/{id}:
 *   patch:
 *     tags: [Event]
 *     summary: Update Event
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
router.patch("/event/:id", Controller.updateEvent);

/** @swagger
 * /api/event/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete Event
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
router.delete("/event/:id", Controller.deleteEvent);

module.exports = router;

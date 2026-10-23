const express = require("express");
const router = express.Router();
const Controller = require("../controller/event_typeController");

/**
 * @swagger
 * tags:
 *   - name: EventType
 *     description: EventType CRUD and search endpoints
 */

/** @swagger
 * /api/event_type:
 *   post:
 *     tags: [EventType]
 *     summary: Create EventType
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
router.post("/event_type", Controller.createEventType);

/** @swagger
 * /api/event_type:
 *   get:
 *     tags: [EventType]
 *     summary: Get all EventType
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/event_type", Controller.getEventTypes);

/** @swagger
 * /api/event_type/search:
 *   get:
 *     tags: [EventType]
 *     summary: Search EventType
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
router.get("/event_type/search", Controller.searchEventTypes);

/** @swagger
 * /api/event_type/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: Get EventType by ID
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
router.get("/event_type/:id", Controller.getEventTypeById);

/** @swagger
 * /api/event_type/{id}:
 *   patch:
 *     tags: [EventType]
 *     summary: Update EventType
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
router.patch("/event_type/:id", Controller.updateEventType);

/** @swagger
 * /api/event_type/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete EventType
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
router.delete("/event_type/:id", Controller.deleteEventType);

module.exports = router;

const express = require("express");
const router = express.Router();
const Controller = require("../controller/ticket_statusController");

/**
 * @swagger
 * tags:
 *   - name: TicketStatus
 *     description: TicketStatus CRUD and search endpoints
 */

/** @swagger
 * /api/ticket_status:
 *   post:
 *     tags: [TicketStatus]
 *     summary: Create TicketStatus
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
router.post("/ticket_status", Controller.createTicketStatus);

/** @swagger
 * /api/ticket_status:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get all TicketStatus
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/ticket_status", Controller.getTicketStatuss);

/** @swagger
 * /api/ticket_status/search:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Search TicketStatus
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
router.get("/ticket_status/search", Controller.searchTicketStatuss);

/** @swagger
 * /api/ticket_status/{id}:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get TicketStatus by ID
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
router.get("/ticket_status/:id", Controller.getTicketStatusById);

/** @swagger
 * /api/ticket_status/{id}:
 *   patch:
 *     tags: [TicketStatus]
 *     summary: Update TicketStatus
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
router.patch("/ticket_status/:id", Controller.updateTicketStatus);

/** @swagger
 * /api/ticket_status/{id}:
 *   delete:
 *     tags: [TicketStatus]
 *     summary: Delete TicketStatus
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
router.delete("/ticket_status/:id", Controller.deleteTicketStatus);

module.exports = router;

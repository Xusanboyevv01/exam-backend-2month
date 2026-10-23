const express = require("express");
const router = express.Router();
const Controller = require("../controller/ticketController");

/**
 * @swagger
 * tags:
 *   - name: Ticket
 *     description: Ticket CRUD and search endpoints
 */

/** @swagger
 * /api/ticket:
 *   post:
 *     tags: [Ticket]
 *     summary: Create Ticket
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
router.post("/ticket", Controller.createTicket);

/** @swagger
 * /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all Ticket
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/ticket", Controller.getTickets);

/** @swagger
 * /api/ticket/search:
 *   get:
 *     tags: [Ticket]
 *     summary: Search Ticket
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
router.get("/ticket/search", Controller.searchTickets);

/** @swagger
 * /api/ticket/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get Ticket by ID
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
router.get("/ticket/:id", Controller.getTicketById);

/** @swagger
 * /api/ticket/{id}:
 *   patch:
 *     tags: [Ticket]
 *     summary: Update Ticket
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
router.patch("/ticket/:id", Controller.updateTicket);

/** @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete Ticket
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
router.delete("/ticket/:id", Controller.deleteTicket);

module.exports = router;

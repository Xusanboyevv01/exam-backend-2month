const express = require("express");
const router = express.Router();
const Controller = require("../controller/ticket_typeController");

/**
 * @swagger
 * tags:
 *   - name: TicketType
 *     description: TicketType CRUD and search endpoints
 */

/** @swagger
 * /api/ticket_type:
 *   post:
 *     tags: [TicketType]
 *     summary: Create TicketType
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
router.post("/ticket_type", Controller.createTicketType);

/** @swagger
 * /api/ticket_type:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all TicketType
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/ticket_type", Controller.getTicketTypes);

/** @swagger
 * /api/ticket_type/search:
 *   get:
 *     tags: [TicketType]
 *     summary: Search TicketType
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
router.get("/ticket_type/search", Controller.searchTicketTypes);

/** @swagger
 * /api/ticket_type/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get TicketType by ID
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
router.get("/ticket_type/:id", Controller.getTicketTypeById);

/** @swagger
 * /api/ticket_type/{id}:
 *   patch:
 *     tags: [TicketType]
 *     summary: Update TicketType
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
router.patch("/ticket_type/:id", Controller.updateTicketType);

/** @swagger
 * /api/ticket_type/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete TicketType
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
router.delete("/ticket_type/:id", Controller.deleteTicketType);

module.exports = router;

const express = require("express");
const router = express.Router();
const Controller = require("../controller/adminController");

/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Admin CRUD and search endpoints
 */

/** @swagger
 * /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Create Admin
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
router.post("/admin", Controller.createAdmin);

/** @swagger
 * /api/admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all Admin
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/admin", Controller.getAdmins);

/** @swagger
 * /api/admin/search:
 *   get:
 *     tags: [Admin]
 *     summary: Search Admin
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
router.get("/admin/search", Controller.searchAdmins);

/** @swagger
 * /api/admin/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get Admin by ID
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
router.get("/admin/:id", Controller.getAdminById);

/** @swagger
 * /api/admin/{id}:
 *   patch:
 *     tags: [Admin]
 *     summary: Update Admin
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
router.patch("/admin/:id", Controller.updateAdmin);

/** @swagger
 * /api/admin/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete Admin
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
router.delete("/admin/:id", Controller.deleteAdmin);

module.exports = router;

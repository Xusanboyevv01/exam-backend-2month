const express = require("express");
const router = express.Router();
const Controller = require("../controller/genderController");

/**
 * @swagger
 * tags:
 *   - name: Gender
 *     description: Gender CRUD and search endpoints
 */

/** @swagger
 * /api/gender:
 *   post:
 *     tags: [Gender]
 *     summary: Create Gender
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
router.post("/gender", Controller.createGender);

/** @swagger
 * /api/gender:
 *   get:
 *     tags: [Gender]
 *     summary: Get all Gender
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/gender", Controller.getGenders);

/** @swagger
 * /api/gender/search:
 *   get:
 *     tags: [Gender]
 *     summary: Search Gender
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
router.get("/gender/search", Controller.searchGenders);

/** @swagger
 * /api/gender/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get Gender by ID
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
router.get("/gender/:id", Controller.getGenderById);

/** @swagger
 * /api/gender/{id}:
 *   patch:
 *     tags: [Gender]
 *     summary: Update Gender
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
router.patch("/gender/:id", Controller.updateGender);

/** @swagger
 * /api/gender/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete Gender
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
router.delete("/gender/:id", Controller.deleteGender);

module.exports = router;

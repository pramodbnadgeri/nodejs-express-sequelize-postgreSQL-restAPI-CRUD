// import {
// getUsers,
// getUserById
// } from "../controller/user.controller.js";
const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    signIn,
    checkSq
} = require("../controller/user.controller.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: The user's name
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         id: 12345
 *         username: some name
 *         password: some password
 */

/**
 * @swagger
 * tags:
 *   name: user
 *   description: The user managing API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

//get all users
router.get("/users", getUsers);


/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The user was not found
 */

//get individual user
router.get("/user/:id", getUserById);


/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: email
 *           description: The user's email
 *         password:
 *           type: password
 *           description: The user's password
 *       example:
 *         email: some name
 *         password: some password
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: user creation
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: The user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */
// Route create a new user
router.post('/user', createUser);



/**
 * @swagger
 * /user/{id}:
 *  put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */
//Route update an user
router.put("/user/:id", updateUser);




/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
//Route to delete existing user
router.delete("/user/:id", deleteUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     Signin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: email
 *           description: The user's email
 *         password:
 *           type: password
 *           description: The user's password
 *       example:
 *         email: some name
 *         password: some password
 */

/**
 * @swagger
 * /signIn:
 *   post:
 *     summary: Signin
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signin'
 *     responses:
 *       200:
 *         description: The user logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */

//Route to signin
router.post("/signIn", signIn);

/**
* @swagger
* /checkSq/sq:
*   post:
*     security:
*       - Authorization: []
*     tags: [Users]
*     description: to suggest number of trees.
 *     parameters:
 *       - in: path
 *         name: sq
 *         schema:
 *           type: string
 *         required: true
 *         description: To check sq
 *     responses:
 *       200:
 *         description: To check sq
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       402:
 *         description: User not logged in
 */

//Route to check area size
router.get("/checkSq/:sq", checkSq);

module.exports = router;
import express from "express"
var router = express.Router()
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import AuthController from '../controller/AuthController';
router.use(cors())

router.post("/", (req, res)=> AuthController.Login(req, res))

module.exports = router
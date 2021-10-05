import express from "express"
var router = express.Router()
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import AppointmentController from '../controller/AppointmentController';
router.use(cors())

router.post("/", (req, res) => AppointmentController.AddToAppointments(req, res))
router.get("/page/:page", (req, res) => AppointmentController.GetAllAppointments(req, res))
router.get("/:id", (req, res) => AppointmentController.GetAppointment(req, res))
router.delete("/:id", (req, res) => AppointmentController.DeleteAppointment(req, res))


module.exports = router
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const cors_1 = __importDefault(require("cors"));
const AppointmentController_1 = __importDefault(require("../controller/AppointmentController"));
router.use((0, cors_1.default)());
router.post("/", (req, res) => AppointmentController_1.default.AddToAppointments(req, res));
router.get("/page/:page", (req, res) => AppointmentController_1.default.GetAllAppointments(req, res));
router.get("/:id", (req, res) => AppointmentController_1.default.GetAppointment(req, res));
router.delete("/:id", (req, res) => AppointmentController_1.default.DeleteAppointment(req, res));
module.exports = router;

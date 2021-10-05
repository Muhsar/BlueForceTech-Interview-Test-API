import express from "express";
import Appointment from "../models/Appointment";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
// const key = process.env.SECRET_KEY || "secret"
class AppointmentController {
  static async AddToAppointments(req, res) {
    // res.send(decode)
    const { full_name, date, time, reason, phone_number, email } = req.body;
    const newAppointment = {
      full_name, date, time, reason, phone_number, email
    };
    await Appointment.findOne({ date, time })
      .then((appointment) => {
        if (appointment) {
          console.log(appointment);
          res.json({ message: "Sorry The selected date and time has been booked" });
        }
        if (!appointment) {
          // console.log(Appointment)
          Appointment.create(newAppointment).then(() => {
            res.json({ data: newAppointment, message: "Booking Successful" });
          });
        }
      })
      .catch((err) => {
        res.send("error" + err);
      });
  }
  static async GetAllAppointments(req, res) {
    const pageData = Number(req.params.page) * 10
    const nextPageData = (Number(req.params.page) + 1) * 10
    await Appointment.find().then(appointment=>{
      appointment && res.json({message: "All Appointments Retrieved Successfully", data: appointment.slice(pageData, nextPageData), total: appointment.length})
      !appointment && res.json({message: "Unexpected Error"})
    })
  }
  static async GetAppointment(req, res) {
    await Appointment.findOne({_id: req.params.id}).then(appointment=>{
      appointment && res.json({message: "Appointment Retrieved Successfully", data: appointment})
      !appointment && res.json({message: "No Appointment With that ID"})
    })
  }
  static async DeleteAppointment(req, res) {
    await Appointment.findOneAndDelete({_id: req.params.id}).then(async ()=>{
      await Appointment.find().then(Appointment=>{
        Appointment && res.json({message: "All Appointment Items Retrieved Successfully", data: Appointment})
      !Appointment && res.json({message: "Unexpected Error"})
      })
    })
  }
}
export default AppointmentController;

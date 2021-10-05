import express from "express"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const key = process.env.SECRET_KEY || "secret"
class AuthController {
static async Login(req, res) {
  const {
    email,
    password
  } = req.body
  console.log(req.body)
  if (email === "admin@gmail.com") {
    if(password==="admin") {
      const payload = {
        user_id: Math.random(),
        email
      }
      let token = jwt.sign(payload, key)
      res.json(token)
    }
    else {
      res.json({message: "Passwords Do not Match"})
    }
    }
    else{
      res.json({message: "user does not exist"})
    }
  }
}
export default AuthController

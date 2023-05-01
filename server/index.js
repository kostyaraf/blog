import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from 'cors'
import authRoute from './routes/auth.js'

const app = express()
dotenv.config()

// Constants
export const PORT = process.env.PORT || 3001;
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())


// Routes
app.use('/api/auth', authRoute)


// app.get('/', (req, res) => {
//   res.json({ message: 'Working!' })
// })

const start = async() => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fur6vvj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
    app.listen(PORT, () => {
      console.log(`Server started on a port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start();
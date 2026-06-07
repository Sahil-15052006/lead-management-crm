import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'

configDotenv()

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('connected to mongodb')
  console.log(mongoose.connection.name);
}

export default connectDB;

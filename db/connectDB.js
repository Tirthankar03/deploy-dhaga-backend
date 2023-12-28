import mongoose from "mongoose";
import express from "express";
import cors from 'cors'

const app = express();
app.use(cors({
			// origin: "http://localhost:3000",
			origin: "https://deploy-mern-dhaga-frontend.vercel.app",
			methods: ["GET", "POST"],
			credentials: true
}))
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};





export default connectDB;

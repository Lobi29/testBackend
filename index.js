import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// utils
import connectDB from './config/db.js';
import PostRoute from './routes/postRouter.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middlewares 
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use('/api', PostRoute);

app.listen(port, () => console.log( `Server running on port: ${port}` ));
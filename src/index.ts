import express from 'express';
import cookieParser from 'cookie-parser';
import mainPage from './routes/index-route';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", mainPage)


module.exports = app;
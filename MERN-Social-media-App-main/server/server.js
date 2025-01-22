import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoute from './routes/authRoutes.js';
import UserRoute from './routes/userRoutes.js';
import PostRoute from './routes/postRoutes.js';
import UploadRoute from './routs/uploadRoute.js';


// Routes
const app = express();


// to serve images for public (public folder)
app.use(express.static('public'));
app.use('/images', express.static('images'));


// MiddleWare
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

mongoose.connect
    (process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() =>
        app.listen(process.env.PORT, () => console.log(`listening at ${process.env.PORT}`))
    ).catch((error) =>
        console.log('error')
    )


// uses of routes

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/upload', UploadRoute);
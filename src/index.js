import express from 'express';
import cors from 'cors'
import userRouter from './userRoutes.js';

const app = express();
//middilewares
app.use(cors());
app.use(express.json());
app.listen(6009, ()=>console.log('server is running on port 6009'))

//routes
app.use('/user' , userRouter)
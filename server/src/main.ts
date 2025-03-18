import dotenv from 'dotenv';
import express from 'express';
import { connect } from 'mongoose';
import apiRoutes from './api';
import cors from 'cors';

dotenv.config();
const app = express();
console.log('MONGODB_URI:', process.env.MONGODB_URI);
app.use(cors({
    exposedHeaders: ['X-Total-Count']
  }));

const uri: string = process.env.MONGODB_URI as string;

connect(uri, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });;

app.use(express.json());
// app.use(morgan('dev'));
app.use('/api', apiRoutes);
// const Model = mongoose.model("todo", toDoModel);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/admin/api`);
});
server.on('error', console.error);
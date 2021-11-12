import 'reflect-metadata';
import express from 'express';
import cors from 'cors'

import './database/connect'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)
app.listen(3333, () => {
  console.log('server started at 3333 port');
})
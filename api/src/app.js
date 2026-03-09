import express from 'express';
import mongoDB from './dao/mongo.js';
import env from './config/env.config.js';

const app = express();
mongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(env.port, async () => console.log(`Server conected ${env.port}`));
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import UsersRoute from '#Routes/UsersRoute.js'
import UserAccountRoute from '#Routes/UserAccountRoute.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGOURL = process.env.MONGO_URL;


mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database is connect successfully!");
  // const db = mongoose.connection;
  // db.on('error', (error) => console.log(error))
  // db.once('open', () => console.log("Database is connect successfully!"))
}).catch((error) => console.log(`mongoose.connect error ${error}`));

app.use(cors())
app.use(express.json())
app.use(UsersRoute)
app.use(UserAccountRoute)
app.listen(PORT, () => {
  console.log(`its running in PORT ${PORT}`);
})
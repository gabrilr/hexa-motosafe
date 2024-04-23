import express from 'express';
import morgan from 'morgan';
import { Signale } from 'signale';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

import { userRouter } from './users/infrastructure/routes/UserRouter';
import { contactRouter } from './contacts/infrastructure/routes/ContactRouter';
import { sensorRouter } from './sensor/infrastructure/routes/SensorRouter';

dotenv.config();

const port: string | undefined = process.env.PORT;
const app = express();
const sigOptions = {
    secrets: ["([0-9]{4}-?)+"]
}
const signale = new Signale(sigOptions);

app.use(cors());
app.use(helmet.hidePoweredBy());
app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/sensor", userRouter);
app.use("/contacts", contactRouter);

app.listen(port, ()=>{
    signale.success("Server running in port: "+port);
});

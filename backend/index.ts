import mongoose from 'mongoose';
import express, { Express, Request, Response} from 'express';
import bscrypt from 'bcryptjs';
import session from 'express-session';
import cookieParser from 'cookie-parser';  
import  dotenv from 'dotenv';


dotenv.config();


const app: Express = express();
const port = process.env.PORT


app.get('/', (req: Request, res: Response) => {
    res.send('Salut tous les mondes')
})

app.listen(port, () => {
    console.log(`[server]: Server is runnning at https : localhost: ${port}`);
})
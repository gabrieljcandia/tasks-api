import dotenv from 'dotenv';
dotenv.config();
import {start} from './server';
import {setupSequelizeDbConnection} from "./db/db";

setupSequelizeDbConnection().then(()=>{
    start();
})
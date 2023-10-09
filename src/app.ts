import express, {Request, Response } from 'express';
import tenantsRouter from './tenants/tenants.routes';
//import professionsRouter from './professions/professions.routes';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import * as dotenv from 'dotenv';

//const dotenv = require("dotenv");
dotenv.config();

//creates instance of express application
const app = express();
//uses this port
//const port = process.env.PORT;
const port = 3000;

//Enable all CORS request (CORS = Cross-Origin Resource Sharing)
app.use(cors());

//Parse JSON bodies
app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//adding set of security middleware
app.use(helmet());
console.log("Hi from app.ts. Host is: " + process.env.MY_SQL_DB_HOST + ". Port is: " + process.env.MY_SQL_DB_PORT);

if(process.env.NODE_ENV == 'development'){
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + " in dev mode.")
}

//Application routes
//root route
app.get('/', (req:Request, res: Response) => {
    res.send('<h1>Welcome to Open Door Suites.</h1>');
})
//adding router middleware
app.use('/', [tenantsRouter]);

//app starts listening to port (defined above). app.listen is used to bind and listen to the connections on the port.
app.listen(port, () => {
    //string written to console when the app starts listening/server starts running.
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(process.env.GREETING + " <-Greeting from app.ts.")
}); //end function

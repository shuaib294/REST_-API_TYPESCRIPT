import express from 'express'
import bodyParser from  'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import http from 'http'
import mongoose from 'mongoose'
import router from './routers'

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());
app.use(cors({
    "credentials":true,
}));

const server = http.createServer(app);

server.listen(8080,()=>{
    console.log("server running on https://localhost:8080/")
});

const MONGO_URL = "";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(()=>{
    console.log("connected to database");
});
mongoose.connection.on('error', (error:Error)=>{
    console.log(error);
});

app.use('/', router());

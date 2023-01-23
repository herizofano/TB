import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import dotenv from 'dotenv';


import clientRoutes from './routes/clients.js';
import generalRoutes from './routes/generals.js';
import managementRoutes from './routes/managements.js';
import campagnesRoutes from './routes/campagnes.js';


//data import

import User from './models/User.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';
import OverallStat from './models/OverallStat.js';
import AffiliateStat from './models/AffiliateStat.js';

import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from './datas/index.js'


/** CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());


/** ROUTES */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", campagnesRoutes);


/** MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /*ONLY ADD DATA ONE TIME*/
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //Transaction.insertMany(dataTransaction);
    //OverallStat.insertMany(dataOverallStat);
    //User.insertMany(dataUser);
    //AffiliateStat.insertMany(dataAffiliateStat);
}).catch((err) => console.log(`${err} Server not connected`));
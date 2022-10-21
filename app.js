import express from 'express';
import mongoose from 'mongoose';
const app = express()
import 'dotenv/config'
import mapsAndSats from './routes/routeOne.js'
import bodyParser from 'body-parser';
import cors from "cors"


app.use(bodyParser.json())
app.use(cors())
app.use('/mapsAndSats', mapsAndSats)

app.get('/', (req, res)=>{
    res.send('home')
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, ()=>console.log("DB-connected"))
app.listen(PORT, )
import pkg from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import maps from '../models/mapsAndPosts.js'

const upload = multer({
    dest: "uploads/"
})

const router = express.Router()
const { json } = pkg;

router.get('/maps', async (req, res)=>{
    try {
        const allData = await maps.find()
        res.status(200).json(allData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
router.post('/maps', upload.single("mapImage"), (req, res)=>{
    const newMaps = new maps({
        mapsArray: req.body.mapsArray,
        generalWeatherState: req.body.generalWeatherState,
        regionsTempPage: req.body.regionsTempPage,
        spacCasePage: req.body.spacCasePage,
    })
    newMaps.save()
    .then(respond => {
        res.json(respond)
        // console.log(res.json(respond))
    })
    .catch(err=>{
        res.json({
            message: err.message
        })
        // console.log(err);
    })
})


router.get('/maps/:id', async (req, res)=>{
    const {id} = req.params
    try {
        if(mongoose.Types.ObjectId.isValid(id)){
            const allData = await maps.findById(id)
            res.status(200).json(allData)
        }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.put('/maps/:id',  async (req, res)=>{
    const {id} = req.params
    const data = req.body
    console.log("id: ", id);
    console.log("data: ", data);
    const newMaps = new maps({
       ...data,
    })
    try {
        if(mongoose.Types.ObjectId.isValid(id)){
            const updatedData = await maps.findByIdAndUpdate(id, newMaps)
            // const allData = await maps.find()
            const allData = await maps.findById(id)
            res.status(200).json(allData)
        }else{
            res.status(404).send({message: 'data Not Found'})
        }

    } catch (error) {
        res.status(404).json({message:  error.message})
    }
})


export default router


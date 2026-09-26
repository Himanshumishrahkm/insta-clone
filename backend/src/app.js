const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({quiet:true});
const cors = require('cors')

const multer = require('multer')
const UserModel = require('./models/user-data')
const imgbuffer = require('./services/storage.service')


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



const upload = multer({storage:multer.memoryStorage()});


app.post('/create',upload.single('image'),async(req,res)=>
{
    
    try {
        const result =  await imgbuffer(req.file.buffer);
        const caption = req.body.caption;
        
        
        const user = UserModel.create({
            image:result.url,
            caption,
        })
        res.json({
            message: "Uploaded successfully",
            url: result.url
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Upload failed",
            error: error.message
        });
    }
    
    
})

app.get('/feed',async(req,res)=>{
    const users = await UserModel.find();

    if(users.length < 1)
    {
        res.json({
            message:"No users"
        })
    }
    else
    {
        res.json({
            message:"users are fetched...",
            obj:users
        })
    }
    
})



module.exports = app;
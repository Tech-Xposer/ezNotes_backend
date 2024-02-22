const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { model } = require('mongoose');
const checkUserAuth= async (req,res,next)=>{
    try {
        const {authorization} = req.headers;
        if(authorization && authorization.startsWith('Bearer')){
            const token = authorization.split(" ")[1];
            const {uid} = await jwt.verify(token, process.env.APP_SECRET)
            const user = await userModel.findById(uid).select('-password')
            req.user = user
            next()
        }else{
            return res.status(401).send({
                status:"FAILED",
                message:"please provide token"
            })
        }
    } catch (error) {
        return res.status(400).send({
            status:"FAILED",
            message:error.message
        })
    }
}

module.exports = {checkUserAuth}
const mongoose= require('mongoose');
const User = require("../models/User.js");

module.exports.addNote =  async(req,res) =>{
    const {id} = req.params;
    const data = req.body;

    try{
        let userData = await User.findById(new mongoose.Types.ObjectId(id));

        if(!userData){
            res.status(404).json({message:"User does not exist"});
        }

        userData.notes.push(data);

        await userData.save();

        res.status(200).json({message:"Note added sucessfully",data:userData});

    }catch(error){
        res.status(500).json({message:"Internal Error",error:error.message})
    }
}

module.exports.dragNotes =  async(req,res) =>{
    const {id} = req.params;
    const data = req.body;

    try{
        let userData = await User.findById(new mongoose.Types.ObjectId(id));

        if(!userData){
            res.status(404).json({message:"User does not exist"});
        }

        userData.notes = data;

        await userData.save();

        res.status(200).json({message:"Notes dragged sucessfully",data:userData});

    }catch(error){
        res.status(500).json({message:"Internal Error",error:error.message})
    }
}

module.exports.changeCheck = async(req,res) =>{
    const {id,index} = req.params;

    try{
        let userData = await User.findById(new mongoose.Types.ObjectId(id));

        if(!userData){
            res.status(404).json({message:"User does not exist"});
        }

        userData.notes[parseInt(index)].check = !userData.notes[parseInt(index)].check;

        await userData.save();

        res.status(200).json({message:"Notes checked sucessfully",data:userData});

    }catch(error){
        res.status(500).json({message:"Internal Error",error:error.message})
    }

}
const Sneackers = require('./../Models/Sneackers');

exports.getSneackersService = async()=>{
    const SneackersCollection = await Sneackers.find({})

    return SneackersCollection;
}

exports.saveSneackersService = async(data)=>{
    const saveSneackers = await Sneackers.create(data);

    return saveSneackers;
}

exports.updateSneackerService = async(sneackerId, data) =>{
    const updateSneacker = await Sneackers.updateOne({_id: sneackerId}, {$set: data})

    return updateSneacker;
}
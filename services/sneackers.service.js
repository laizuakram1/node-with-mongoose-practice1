const Sneackers = require('./../Models/Sneackers');

exports.getSneackersService = async()=>{
    const SneackersCollection = await Sneackers.find({})

    return SneackersCollection;
}

exports.saveSneackersService = async(data)=>{
    const saveSneackers = await Sneackers.save(data);

    return saveSneackers;
}
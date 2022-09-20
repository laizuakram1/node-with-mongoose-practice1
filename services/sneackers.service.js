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
    const updateSneacker = await Sneackers.updateOne({_id: sneackerId}, {$set: data}, {runValidators:true})

    return updateSneacker;
}

exports.bulkUpdateSneackersService = async(data) =>{
    
    // const bulkUpdate = await Sneackers.updateMany({_id: data.ids}, data.data, {
    //     runValidators: true
    // })
    // bulk update er another way
    const products = [];
    data.ids.forEach(product =>{
        products.push(product.updateOne({_id: product.id}, product.data));
    });
    const result = await promise.all(products);
    return result;

}
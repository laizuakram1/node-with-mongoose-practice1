const { getSneackersService, saveSneackersService } = require("../services/sneackers.service");



exports.getSneackers = async(req, res, next) =>{
    try{
      // i can dind by use multi operator and method
      const sneacker = await getSneackersService();

      res.status(200).json({
        status:200,
        message:'success',
        data: sneacker
      })

    }catch(err){
      res.status(400).json({
        status:'fail',
        message:'data cant get',
        error: err.message
      })
    }
};


exports.saveSneackers = async(req, res, next) =>{

    try{
      //save // create
      const sneackers = req.body;
      const result = await saveSneackersService(sneackers);
    
      res.status(200).json({
        message:'data insert successfully',
        data : result
      });
    }catch(err){
     res.status(400).json({
       status:'fail',
       message:'data not inserted',
       error:err.message
     })
    }
   }
const { getSneackersService, saveSneackersService, updateSneackerService } = require("../services/sneackers.service");



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

   exports.updateSneacker = async(req, res, next) =>{
    try {
      const id = req.params.id;
      const result = await updateSneackerService(id, req.body);

      res.status(200).json({
        status:'success',
        message:"sneacker update successful",
        data: result

      }) 
    } catch (err) {
      res.status(400).json({
        status:'fail',
        message:'data not updated',
        error:err.message
      })
    }
    
   }
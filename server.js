const mongoose = require("mongoose");
require('dotenv').config();


const app = require('./app');
const port = process.env.PORT || 8000;


//database connection 
mongoose.connect(`mongodb://localhost:27017/products`).then(()=>{
    console.log('database connect successfully');
});




app.listen(port, () => {
    console.log(`my node server is run on port ${port}`);
  });


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/project",{
    useNewUrlParser:true,   
}).then(()=> {
    console.log("Connection is sucessfully ");
}).catch((e)=>{
    console.log("Connection is failed")
})
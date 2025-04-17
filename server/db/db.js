
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const uri = process.env.URI;

const conn = mongoose.connect(uri).then(()=>{
    console.log(uri);
    console.log("mongodb connected");
}).catch((err) => {
    console.log(err);
})

module.exports = conn
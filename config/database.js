const mongoose = require("mongoose");
// process.env.MONGO_URI
// mongodb+srv://Calendar:zxcvbnm1106@atlascluster.vifnygm.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/myapp
const connectDB = async() => {
    const conn = mongoose.connect("mongodb://localhost:27017/Expressjs_Base", {
        useNewUrlParser: true,
        retryWrites: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB connected`);
};

module.exports = connectDB;
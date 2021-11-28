const MongoUrl = "mongodb+srv://Usama123:usama123@cluster0.9vtom.mongodb.net/shop?retryWrites=true&w=majority"
const mongoose = require('mongoose');
 


const connectDB = async ()=>{


    try {
        await mongoose.connect(MongoUrl,{
        
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectDB;
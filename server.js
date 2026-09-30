const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/bookRoute.js")
const app = express()
const PORT = 3000

require("dotenv").config()

app.use(express.json())
app.use("/books", route)

app.listen(PORT, ()=> {
    console.log(`App is running on PORT: ${PORT}`);
    
})

const mongoInfo = process.env.PASSCODE




mongoose.connect(mongoInfo)
.then(()=> {
    console.log("Mongodb has now been connected");
    
})

.catch((error)=> {
    console.log(error.message);
    
})



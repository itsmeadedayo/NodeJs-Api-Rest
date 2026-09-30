const express = require("express")
const route = express.Router()

const {
    getBook,
    postBook,
    putBook,
   deleteBook
} = require("../controllers/bookController.js")



route.get("/", getBook)
route.post("/",postBook)
route.put("/:id", putBook)
route.delete("/:id", deleteBook)



module.exports = route
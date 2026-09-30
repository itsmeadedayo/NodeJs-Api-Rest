
const bookModel = require("../models/bookModel.js")


const getBook = ("/", async(req, res)=> {
    try {
         const book = await bookModel.find(req.body)
         res.status(200).json(book)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


const postBook = ("/", async(req, res)=> {
    try {
         const book = await bookModel.create(req.body)
         res.status(201).json(book)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

const putBook = ("/:id", async(req, res) => {
    try {
        const { id } = req.params
        const book = await bookModel.findByIdAndUpdate(id, req.body, 
            {
                returnDocument: 'after',
                runvalidators: true

            })
        if(!book){
            res.status(404).json({message: "Book not found"})
        }
        res.status(200).json({message: "Book has now been edited"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

const deleteBook = ("/:id", async(req, res) => {
    try {
        const { id } = req.params
        const book = await bookModel.findByIdAndDelete(id)
        if(!book){
            res.status(404).json({message: "Book not found"})
        }
        res.status(200).json({message: "Book has now been deleted"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = {
    getBook,
    postBook,
    putBook,
   deleteBook
}
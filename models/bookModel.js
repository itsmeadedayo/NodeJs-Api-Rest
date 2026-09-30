const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({

    bookName: {

      type: String,

      required: [true, "Book is required"],

      trim: true,

      minLength: [5, "Book must be at least 5 characters"],

      maxLength: [100, "Book must be under 100 characters"],

    },

    author: {

      type: String,

      required: [true, "author name is required"],

      trim: true,

      maxLength: [60, "Author name must be under 60 characters"],

    },

    isbn: {

      type: String,

      unique: true,

      sparse: true,

      unique: true,

    },

    genre: {

      type: String,

      required: [true, "Genre is required"],

      enum: {

        values: [

          "fiction",

          "non fiction",

          "fantasy",

          "history",

          "science",

          "other",

        ],

      },

    },

    publisherYear: {

      type: Number,

      min: [1000, "Year looks too old"],

      max: [new Date().getFullYear()],

    },

  },

  { timestamps: true }
)

const bookModel = mongoose.model("book-list", bookSchema)

module.exports = bookModel
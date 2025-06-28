const mongoose = require("mongoose");



const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});



const blogSchemaModel = mongoose.model("blog", blogSchema);

module.exports = blogSchemaModel;




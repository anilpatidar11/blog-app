const blogSchemaModel = require("../models/blogModel");
const jwt = require('jsonwebtoken');

const addBlog = async (req, res) => {
  try {
    const { title, content, author , } = req.body;

   const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);




    if (!title || !content || !author) {
      return res.status(400).json({ status: false, message: "Fill all input" });
    }

    const blog = await blogSchemaModel.create({
      title,
      content,
      author,
      createdBy: decoded.id
    });

    return res
      .status(201)
      .json({ status: true, message: "Blog add Succesfully", blog });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const deleteblog = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBlog = await blogSchemaModel.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ status: true, message: "Blog Deleted", deleteBlog });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

const getblog = async (req, res) => {
  try {

   const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const allblogs = await blogSchemaModel.find({ createdBy: decoded.id });

    return res.status(201).json({ status: true, data : allblogs });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};



const updateblog = async (req, res) => {

  try {
    const id = req.params.id;
    const editblog = req.body

    const updateBlog = await blogSchemaModel.findByIdAndUpdate(id, editblog);

    if (!updateBlog) {
   return res.status(404).json({ status: false, message: "Blog not found" });
}

  return res.status(200).json({ status: true,  updateBlog });

}

  catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }

}





module.exports = { addBlog, deleteblog, getblog,updateblog };

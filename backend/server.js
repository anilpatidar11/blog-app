const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 6000;
const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRouter")
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', userRouter);
app.use('/api', blogRouter);



mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));



app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});









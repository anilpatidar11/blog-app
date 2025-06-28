const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController')


router.post('/add', blogController.addBlog)
router.delete('/delete/:id', blogController.deleteblog)
router.get('/get', blogController.getblog)
router.put('/update/:id', blogController.updateblog)

module.exports = router;

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userContoller')


router.post('/register', userController.registerUser)

router.post('/login',userController.loginUser)



const verifyToken = require('../middleware/authMiddleware')

router.get('/secure', verifyToken, userController.secureData)


module.exports = router;

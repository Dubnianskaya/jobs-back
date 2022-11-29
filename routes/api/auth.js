const express = require('express')

const {auth: controllers} = require('../../controllers')

const {auth, schemaValidation, ctrlWrapper} = require('../../middlewares')
const { joiRegisterSchema, joiLoginSchema} = require('../../models')

const router = express.Router()

router.post('/signup', schemaValidation(joiRegisterSchema), ctrlWrapper(controllers.register))
router.post('/login', schemaValidation(joiLoginSchema), ctrlWrapper(controllers.login))
router.get('/logout', auth, ctrlWrapper(controllers.logout))

module.exports = router
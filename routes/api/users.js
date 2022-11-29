const express = require('express')

const {users: controllers} = require('../../controllers')
const {auth, schemaValidation, ctrlWrapper} = require('../../middlewares')
const { joiSavedJobsSchema } = require('../../models')

const router = express.Router()

router.get('/current', auth, ctrlWrapper(controllers.getCurrent))
router.patch('/savedJobs', auth, schemaValidation(joiSavedJobsSchema), ctrlWrapper(controllers.updateSavedJobs))

module.exports = router
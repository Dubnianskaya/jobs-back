const express = require('express')

const {appliedJobs: controllers} = require('../../controllers')
const {auth, schemaValidation, ctrlWrapper} = require('../../middlewares')
const { joiAppliedJobSchema } = require('../../models')

const router = express.Router()

router.get('/', auth, ctrlWrapper(controllers.getAppliedJobs))
router.post('/', auth, schemaValidation(joiAppliedJobSchema), ctrlWrapper(controllers.postApplyingJob))

module.exports = router
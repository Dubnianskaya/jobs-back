const { User, joiRegisterSchema, joiLoginSchema, joiAppliedJobsSchema, joiSavedJobsSchema } = require('./user')
const { AppliedJob, joiAppliedJobSchema } = require('./appliedJob')

module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema,
    joiAppliedJobsSchema,
    joiSavedJobsSchema,
    AppliedJob,
    joiAppliedJobSchema
}
const {Schema, model} = require('mongoose')
const Joi = require('joi')

const appliedJobSchema = Schema({
    jobId: {
        type: String,
        required: [true, 'Job id is required'],
    },
    companyName: {
        type: String,
        required: [true, 'Company name is required'],
    },
    name: {
        type: String,
        minLength: 3,
        maxLength: 60,
        required: [true, 'Name is required'],
    },
    surname: {
        type: String,
        minLength: 3,
        maxLength: 60,
        required: [true, 'Surname is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }
}, {versionKey: false, timestamps: true})

const AppliedJob = model('applied_job', appliedJobSchema)

const joiAppliedJobSchema = Joi.object({
    jobId: Joi.string().required(),
    companyName: Joi.string().required(),
    name: Joi.string().min(3).max(60).required(),
    surname: Joi.string().min(3).max(60).required(),
    email: Joi.string().email().required(),
})

module.exports = {
    AppliedJob,
    joiAppliedJobSchema,
}
const {AppliedJob} = require('../../models')

const postApplyingJob = async (req, res) => {
      const {_id} = req.user;
      const result = await AppliedJob.create({...req.body, owner: _id});
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          result
        }
      })
  }

module.exports = postApplyingJob
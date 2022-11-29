const {AppliedJob} = require('../../models')

const getAppliedJobs = async (req, res) => {
      const {_id} = req.user;
      const appliedJobs = await AppliedJob.find({owner: _id}, "").populate("owner", "_id jobId companyName email name surname");
        res.json({
        status: "success",
        code: 200,
        data: {
            result: appliedJobs
        }
    })
  }

module.exports = getAppliedJobs
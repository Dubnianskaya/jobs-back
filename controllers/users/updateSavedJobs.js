const {User} = require('../../models')

const updateSavedJobs = async (req, res) => {
      const {_id} = req.user;
      const {savedJobs} = req.body;
      const result = await User.findByIdAndUpdate(_id, {savedJobs}, {new: true});
      res.json({
        status: "success",
        code: 200,
        data: {
         savedJobs: result.savedJobs
        }
      })
  }

module.exports = updateSavedJobs;
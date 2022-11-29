const getCurrent = async (req, res) => {
  const { email, name, surname, savedJobs } = req.user;

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email,
        name,
        surname,
        savedJobs,
      },
    },
  });
};

module.exports = getCurrent;

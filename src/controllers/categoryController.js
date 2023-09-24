exports.create = async (req, res) => {
  try {

    res.status(200).json({
      status: "success",
      data: "Can contain create information"
    })
  } catch (error) {
    res.status(200).json({
      status: "fail",
      data: "Something went wrong"
    })
  }
};

exports.read = async (req, res) => {
  try {

    res.status(200).json({
      status: "success",
      data: "Can contain read information"
    })
  } catch (error) {
    res.status(200).json({
      status: "fail",
      data: "Something went wrong"
    })
  }
};

exports.delete = async (req, res) => {
  try {

    res.status(200).json({
      status: "success",
      data: "Can contain delete information"
    })
  } catch (error) {
    res.status(200).json({
      status: "fail",
      data: "Something went wrong"
    })
  }
};

exports.update = async (req, res) => {
  try {

    res.status(200).json({
      status: "success",
      data: "Can contain update information"
    })
  } catch (error) {
    res.status(200).json({
      status: "fail",
      data: "Something went wrong"
    })
  }
};
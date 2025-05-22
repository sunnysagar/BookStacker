const { signupService, loginService} = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    await signupService(req.body);
    res.status(201).json({message: "User Created"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

exports.login = async (req, res) => {
  try {
    const token = await loginService(req.body);
    res.json({token});
  } catch (error) {
    res.status(400).json({message: error.message });
  }
};

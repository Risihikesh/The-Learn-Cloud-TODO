const User =require("../models/User.js");
const  {validationResult}  =require("express-validator");

const signUP = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors.array());
    return res.status(404).json({ errors: errors.array() ,success:false});
  }
  const data = await User.findOne({ email: req.body.email });
  if (data)
    return res
      .status(404)
      .json({ errors: [{ msg: "Email Already in Use Please login" }],success:false });
  try {
    const data = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    // console.log(data);
    res.status(200).json({ success: true,data:data });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error:error,success:false });
  }
};
module.exports=signUP ;

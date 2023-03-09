const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signup function
exports.signup = async (req, res) => {
  await bcrypt.hash(req.body.password, 10).then((hash) => {
    const admin = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: hash,
      place: req.body.place,
      date: Date(),
    });
    admin
      .save()
      .then(() =>
        res
          .status(201)
          .json({ message: "un utilisateur a été crée dans la base de donnée" })
      )
      .catch((error) => res.status(400).json({ error: error }));
  });
};

//login function
exports.login = async (req, res) => {
  await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ message: "Paire login/mot de passe incorrect" });
      }
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ message: "Paire login/mot de passe incorrect" });
        }
        res.status(200).json({
          userId: user._id,
          token: jwt
            .sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            })
            .split(".")[1],
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

//get user function
exports.getUser = async (req, res) => {
  await User.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json(error));
};

//getOne user function
exports.getOneUser = async (req, res) => {
  await User.findById({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json(`ID unknow : ${error}`));
};

//UpdateOne user function
exports.modifyUser = async (req, res) => {
  await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        place: req.body.place,
      },
    }
  )
    .then((user) => console.log(user))
    .then(() =>
      res
        .status(200)
        .json({ message: "les informations ont bien étées mise à jour" })
    )
    .catch((error) => res.status(401).json(`${error}`));
};

//deleteOne User function
exports.deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id })
    .then((user) => {
      console.log(user);
    })
    .then(() =>
      res.status(200).json({ message: "votre compte a bien été supprimé" })
    )
    .catch((error) => res.status(400).json({ error }));
};

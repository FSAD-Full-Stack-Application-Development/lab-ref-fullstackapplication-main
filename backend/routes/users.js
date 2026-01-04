var express = require('express');
var router = express.Router();
var User = require('../models/user')
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'jwtsecretkey'

/* GET users listing. */
router.get('/', function(req, res, next) {
});

// get email/password from the frontend
// rules- unique email are valid
// check for any/the first one document with the email
// if email is not there, invalid login/redirect to register page
// If email is there, compare the input password with the associate pw from the db.
// If it matches, then OK
// Else invalid username and password
// if login is OK, then a token is invoked with user identity
// Token- JWT: payload (user-info, email/id , +, but never the sensitive infos.), JWT SECRET, expiration time





router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;

  const existing_user = await User.findOne( {email} )

  if (!existing_user) {
    return res.status(500).json({message: "User not found"})
  }

  const isMatch = await existing_user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

  // found the user with correct email and pw
  const token = jwt.sign({ email }, SECRET_KEY,  { expiresIn: '1h' })
  res.status(200).json({token: token, user: existing_user})
})

router.post('/register', async function(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(500).json({message: "Empty fields!"})
  }

  const existing_user = await User.findOne( {email} )

  if (existing_user) {
    return res.status(500).json({message: "Email already in use."})
  }

  const new_user = new User({email, password})
  await new_user.save()

  res.status(200).json({ new_user })
})

module.exports = router;

const router = require('express').Router();

const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  // read a pw from body
  const { password } = req.body;
  // hash pw using bcrypt.js
  const hashed = bcrypt.hashSync(password, 14)
  // return hashed pw to user in an object that looks like this:
  // { password: 'og password', hash: 'hashed password' }
  res.status(200).json({ password: password, hash: hashed })
})

module.exports = router;

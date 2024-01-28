const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Bonjour",
    user: "Jean",
    added: new Date()
  },
  {
    text: "Hola",
    user: "Juan",
    added: new Date()
  },
  {
    text: "Hello",
    user: "John",
    added: new Date()
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages: messages });
});

router.get('/new', (req,res,next) => {
  res.render('form')
})

router.post('/new', (req,res,next) => {
  const user = req.body.name;
  const message = req.body.message;
  messages.push({text: message, user: user,added: new Date() });
  res.redirect('/');
})

module.exports = router;

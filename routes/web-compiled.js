var express = require('express');
var router = express.Router();
// const userController = require('./../controller/user');


router.get('/product', function (req, res, next) {
  // const userId = req.session.userId;
  // if(!userId) {
  //   return res.render('login', { title: 'login' });
  // }
  return res.render('login', {});
});

module.exports = router;

//# sourceMappingURL=web-compiled.js.map
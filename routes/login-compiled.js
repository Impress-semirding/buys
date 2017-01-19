var express = require('express');
var router = express.Router();
const users = require('./../controller/user');
// const userController = require('./../controller/user');

function checkUser(userId) {
	if (typeof userId !== 'number') {
		return false;
	} else {
		return true;
	}
}

//login、
router.post('/', function (req, res, next) {
	const userId = req.body.userId;
	const username = req.body.name;
	if (!checkUser(userId)) {
		return res.json({ 'login': 'fail', msg: '类型错误' });
	}
	if (req.session.userId === undefined) {
		req.session.regenerate(function () {
			req.user = {
				userId: userId,
				username: username
			};
			req.session.userId = userId;
			req.session.save(); //保存一下修改后的Session
		});
		users.hasUser(userId).then(user => {
			if (!user.length) {
				return users.insert(req.user);
			} else {
				res.json({ 'login': 'success' });
			}
		}).then(data => {
			res.json({ 'login': data });
		});
	} else {
		res.json({ 'login': 'success' });
	}
});

module.exports = router;

//# sourceMappingURL=login-compiled.js.map
var express = require('express');
var router = express.Router();
const users = require('./../controller/user');
// const userController = require('./../controller/user');

function checkUser(userId) {
	if(typeof userId !== 'number') {
		return false;
	} else {
		return true;
	}
}


//login、
router.get('/Info', function(req, res, next) {
	const userId = req.session.userId;
	users.getUserInfo(userId)
	.then(
		(data) => {
			res.json({ 'user': data });
		},
		(err) => {
			res.json({ 'data': err });
		}
	)
});

router.post('/addAddress', function(req, res, next) {
	const userId = req.session.userId;
	const addAddress = req.body.addAddress;
	if(!userId) {
		const data = {
			code: 201,
			msg : '请登陆'
		}
		return res.json({ 'data': data });
	}
	users.addAddress(userId, addAddress)
	.then(
		(data) => {
			res.json({ 'user': data });
		},
		(err) => {
			res.json({ 'data': err });
		}
	)
});

module.exports = router;

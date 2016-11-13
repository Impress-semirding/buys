var express = require('express');
var router = express.Router();
const order = require('./../controller/order');

function check(data) {
	for(i in data) {
		if(data[i] === undefined || data[i] === '') {
			return false;
		}
	}
	return true;
}

router.get('/order', function(req, res, next) {
	if(req.session.userId === undefined) {
		const data = {
			code: 201,
			msg : '请登陆'
		}
		return res.json({ 'data': data });
	} else {
		const userId = req.session.userId;
		order.myOrder(userId)
		.then(
			(data) => {
				res.json({ 'data': data });
			},
			(err) => {

			}
		) 
	}
});


module.exports = router;

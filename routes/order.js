var express = require('express');
var router = express.Router();
const order = require('./../controller/order');
const logger = require('./../config/log4js');

function check(data) {
	for(i in data) {
		if(data[i] === undefined || data[i] === '') {
			return false;
		}
	}
	return true;
}

router.post('/confirm', function(req, res, next) {
	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
	console.log(req.session);
	if(req.session.userId === undefined) {
		const data = {
			code: 201,
			msg : '请登陆'
		}
		res.json({ 'data': data });
	} else {
		const userId = req.session.userId;
		const indianaId = req.body.indianaId;
		const acount = req.body.acount;
		const createTime = new Date().getTime();
		const feed = {
			createTime : createTime,
			w_id: userId,
			indiana_id : indianaId,
			acount: acount,
		};
		if(!check(feed)) {
			return res.json({ 'data': {code: 201, msg: '参数不全'} });
		}
		order.confirm(feed)
		.then(
			(data) => {
				res.json({ 'data': data });
			},
			(err) => {
				res.json({ 'data': err });
			}
		)

	}
});


module.exports = router;

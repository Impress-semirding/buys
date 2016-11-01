var express = require('express');
var router = express.Router();
const order = require('./../controller/order');
const logger = require('./../config/log4js');

router.get('/confirm', function(req, res, next) {
	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
	order.getList()
	.then((doc) => {
		if (!doc) {
			logger.info(getClientIp(req) + 'fail');
		} else {
			res.json({ 'data': doc });
		}
	})
});


module.exports = router;

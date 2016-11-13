var express = require('express');
var router = express.Router();
const product = require('./../controller/product');
const logger = require('./../config/log4js');
const getClientIp = require('./../config/getAddress');

/* GET users listing. */


// router.get('/detail', function(req, res, next) {
// 	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
// 	const queryId = req.query.id;
// 	user.getDetail(queryId, function(data) {
// 		if(!data) {
// 			logger.info(getClientIp(req) + 'fail');
// 		} else {
// 			res.json(data);
// 		}
// 	});
// });

router.get('/insert', function(req, res, next) {
	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
	product.insert();
	logger.info(getClientIp(req) + 'login');
  res.json({ 'sucess': '插入假数据成功' });
});


module.exports = router;

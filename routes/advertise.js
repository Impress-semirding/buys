var express = require('express');
var router = express.Router();
const advertise = require('./../controller/advertise');
const logger = require('./../config/log4js');
const getClientIp = require('./../config/getAddress');

/* GET users listing. */
router.get('/list', function(req, res, next) {
	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
	advertise.getList()
	.then((doc) => {
		if (!doc) {
			logger.info(getClientIp(req) + 'fail');
		} else {
			res.json({ 'detailImages': doc });
		}
	})
});

router.get('/insert', function(req, res, next) {
	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
	advertise.insert();
  res.json({ 'sucess': '插入假数据成功' });
});


module.exports = router;

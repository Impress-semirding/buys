var express = require('express');
var router = express.Router();
const user = require('./../controller/indiana');
const logger = require('./../config/log4js');
const getClientIp = require('./../config/getAddress');

/* GET users listing. */
router.get('/list', function(req, res, next) {
	user.getList()
	.then((data) => {
		if (!data) {
			logger.info(`${getClientIp(req)}fail`);
		} else {
			res.json({ data });
		}
	})
});

router.get('/detail', function(req, res, next) {
	const queryId = req.query.id;
	user.getDetail(queryId, function(data) {
		if(!data) {
			logger.info(`${getClientIp(req)}fail`);
		} else {
			res.json(data);
		}
	});
});

router.get('/insert', function(req, res, next) {
	const sucess = '插入假数据成功';
	user.insert();
	logger.info(getClientIp(req) + 'login');
  res.json({ sucess });
});


module.exports = router;

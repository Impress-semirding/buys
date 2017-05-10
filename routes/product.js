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

router.post('/insert', function(req, res, next) {
	// res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
	const desc = req.body.desc;
	const priceBase = req.body.priceBase;
	const gpic = req.body.gpic;
	const detailImages = req.body.detailImages;
	const totalTimes = req.body.totalTimes;
	const tag = req.body.tag;
	const gname = req.body.gname;
	const priceType = req.body.priceType;
	const addAttributes = req.body.addAttributes;
	const property = req.body.property;
	const priceUnit = req.body.priceUnit;
	const regularBuyMax = req.body.regularBuyMax;
	const showVideos = req.body.showVideos;
	const price = req.body.price;
	const buyUnit = req.body.buyUnit;
	const gid = req.body.gid;
	const buyable = req.body.buyable;
	const flagList = req.body.flagList;
	const brand = req.body.brand;
	const wishSetable = req.body.wishSetable;
	const typeId = req.body.typeId;
	const goodsType = req.body.goodsType;
	const productItem = {
		desc,
		priceBase,
		gpic,
		detailImages,
		totalTimes,
		tag,
		gname,
		priceType,
		addAttributes,
		property,
		priceUnit,
		regularBuyMax,
		showVideos,
		price,
		buyUnit,
		gid,
		buyable,
		flagList,
		brand,
		wishSetable,
		typeId,
		goodsType
	};
	console.log(productItem);
	product.insert(productItem)
	.then(() => {
		logger.info(getClientIp(req) + 'login');
		res.json({ 'sucess': '插入假数据成功' });
	});
});


module.exports = router;

webpackJsonp([32],{

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';var _stringify=__webpack_require__(1275);var _stringify2=_interopRequireDefault(_stringify);var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(178);
	var _antd=__webpack_require__(338);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	var perConf=__webpack_require__(1277);
	var mode=perConf.mode;
	
	module.exports=function(ops){
	var config=(0,_extends3.default)({
	url:"",
	data:"",
	handleResponse:false,
	callback:function callback(){}},
	ops);
	if(config.url.match(/^\//)){config.url=config.url.substr(1,config.url.length);}
	if(mode=="local"){
	var data=__webpack_require__(1278)("./"+config.url+".json");
	setTimeout(function(){
	var consoleData={
	requestUrl:config.url,
	requestParams:config.data,
	responseData:data.data};
	
	console.log(consoleData);
	config.callback.call(undefined,data.data);
	},200);
	}else{
	$.ajax({
	url:"/admin/"+config.url,
	type:"post",
	headers:{token:localStorage.getItem("token")},
	contentType:"application/json; charset=utf-8",
	data:(0,_stringify2.default)(config.data),
	success:function success(data){
	if(data.status==1001){
	var currentPath=location.hash.split("#")[1].split("?")[0];
	_reactRouter.hashHistory.push({
	pathname:"/common/login",
	search:"?returnPath="+currentPath});
	
	}else if(config.handleResponse){
	config.callback.call(this,data);
	}else
	if(data.status!=200){
	_antd.message.error(data.errMsg,1);
	}else{
	config.callback.call(this,data.data);
	}
	}});
	
	}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1274)))

/***/ }),

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(1276), __esModule: true };

/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(252);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),

/***/ 1277:
/***/ (function(module, exports) {

	module.exports = {"host":"","projectPath":"sunnyFinancing","pageName":"admin","platform":"web","mode":""}

/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./activity/deleteInfo.json": 1279,
		"./activity/getInfoDetail.json": 1280,
		"./activity/getInfoList.json": 1281,
		"./activity/getSignUpList.json": 1282,
		"./activity/updateInfo.json": 1283,
		"./adv/deleteInfo.json": 1284,
		"./adv/getContentList.json": 1285,
		"./adv/getInfoDetail.json": 1286,
		"./adv/getInfoList.json": 1287,
		"./adv/updateInfo.json": 1288,
		"./auth.json": 1289,
		"./auth/admin/getAuthList.json": 1290,
		"./auth/admin/setAuthList.json": 1291,
		"./auth/manage/deleteUser.json": 1292,
		"./auth/manage/getUserDetail.json": 1293,
		"./auth/manage/getUserList.json": 1294,
		"./auth/manage/updateUser.json": 1295,
		"./changePwd.json": 1296,
		"./delegateFund/deleteInfo.json": 1297,
		"./delegateFund/edit.json": 1298,
		"./delegateFund/getInfoDetail.json": 1299,
		"./delegateFund/getInfoList.json": 1300,
		"./delegateFund/receivedProject/deleteInfo.json": 1301,
		"./delegateFund/receivedProject/getDetailInfo.json": 1302,
		"./delegateFund/receivedProject/getInfoList.json": 1303,
		"./delegateFund/setProgress.json": 1304,
		"./delegateProject/deleteInfo.json": 1305,
		"./delegateProject/edit.json": 1306,
		"./delegateProject/getInfoDetail.json": 1307,
		"./delegateProject/getInfoList.json": 1308,
		"./delegateProject/receivedFund/deleteInfo.json": 1309,
		"./delegateProject/receivedFund/getDetailInfo.json": 1310,
		"./delegateProject/receivedFund/getInfoList.json": 1311,
		"./delegateProject/setProgress.json": 1312,
		"./finance/consumption/deleteInfo.json": 1313,
		"./finance/consumption/getInfoList.json": 1314,
		"./finance/recharge/deleteInfo.json": 1315,
		"./finance/recharge/getInfoList.json": 1316,
		"./fund/normal/audit.json": 1317,
		"./fund/normal/deleteInfo.json": 1318,
		"./fund/normal/getInfoDetail.json": 1319,
		"./fund/normal/getInfoList.json": 1320,
		"./getMenuItems.json": 1321,
		"./help/feedback/deleteInfo.json": 1322,
		"./help/feedback/getInfoDetail.json": 1323,
		"./help/feedback/getInfoList.json": 1324,
		"./help/qa/deleteInfo.json": 1325,
		"./help/qa/getInfoDetail.json": 1326,
		"./help/qa/getInfoList.json": 1327,
		"./help/qa/updateInfo.json": 1328,
		"./link/deleteInfo.json": 1329,
		"./link/getInfoDetail.json": 1330,
		"./link/getInfoList.json": 1331,
		"./link/updateInfo.json": 1332,
		"./login.json": 1333,
		"./logout.json": 1334,
		"./notice/deleteInfo.json": 1335,
		"./notice/getInfoDetail.json": 1336,
		"./notice/getInfoList.json": 1337,
		"./notice/updateInfo.json": 1338,
		"./platform/company/getInfoDetail.json": 1339,
		"./platform/company/updateInfo.json": 1340,
		"./platform/contact/getInfoDetail.json": 1341,
		"./platform/contact/updateInfo.json": 1342,
		"./platform/news/deleteInfo.json": 1343,
		"./platform/news/getInfoDetail.json": 1344,
		"./platform/news/getInfoList.json": 1345,
		"./platform/news/updateInfo.json": 1346,
		"./platform/report/deleteInfo.json": 1347,
		"./platform/report/getInfoDetail.json": 1348,
		"./platform/report/getInfoList.json": 1349,
		"./platform/report/updateInfo.json": 1350,
		"./project/normal/audit.json": 1351,
		"./project/normal/deleteInfo.json": 1352,
		"./project/normal/getInfoDetail.json": 1353,
		"./project/normal/getInfoList.json": 1354,
		"./report/audit.json": 1355,
		"./report/deleteInfo.json": 1356,
		"./report/detail/deleteInfo.json": 1357,
		"./report/getInfoDetail.json": 1358,
		"./report/getInfoList.json": 1359,
		"./report/setForbidden.json": 1360,
		"./upload.json": 1361,
		"./user/mail/deleteHistory.json": 1362,
		"./user/mail/getHistoryList.json": 1363,
		"./user/mail/send.json": 1364,
		"./user/manage/audit.json": 1365,
		"./user/manage/deleteUser.json": 1366,
		"./user/manage/getUserDetail.json": 1367,
		"./user/manage/getUserList.json": 1368,
		"./user/manage/setForbidden.json": 1369,
		"./user/message/deleteHistory.json": 1370,
		"./user/message/getHistoryList.json": 1371,
		"./user/message/send.json": 1372
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1278;


/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{}}

/***/ }),

/***/ 1280:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dfdf","data":{"detailInfo":{"key":1,"title":"活动标题","limitNum":300,"img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","startTime":"2017-10-11 17:00","endTime":"2017-10-11 19:00","deadlineTime":"2017-10-10 17:00","active":0,"address":"dsfsdf","contact":"sfdsf","invited":"fsddsfds","cost":213,"content":"活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}}}

/***/ }),

/***/ 1281:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"frgr","data":{"current":1,"total":123,"list":[{"key":1,"title":"活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1活动1","limitNum":300,"signUpNum":122,"status":1,"startTime":"2017-10-11 17:00","endTime":"2017-10-11 19:00","deadlineTime":"2017-10-10 17:00","createTime":"2017-10-09 13:11","active":0},{"key":2,"title":"活动1活动1","limitNum":200,"signUpNum":145,"status":0,"startTime":"2017-10-11 17:00","endTime":"2017-10-11 19:00","deadlineTime":"2017-10-10 17:00","createTime":"2017-10-09 13:11","active":1},{"key":3,"title":"活动1活动1","limitNum":722,"signUpNum":546,"status":1,"startTime":"2017-10-11 17:00","endTime":"2017-10-11 19:00","deadlineTime":"2017-10-10 17:00","createTime":"2017-10-09 13:11","active":0},{"key":4,"title":"活动1活动1","limitNum":555,"signUpNum":124,"status":0,"startTime":"2017-10-11 17:00","endTime":"2017-10-11 19:00","deadlineTime":"2017-10-10 17:00","createTime":"2017-10-09 13:11","active":1}]}}

/***/ }),

/***/ 1282:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"current":1,"total":123,"list":[{"key":1,"time":"2017-11-11","name":"于永健","company":"阳光融资","phone":"123123123","number":112,"cost":412,"tips":"未支付"},{"key":2,"time":"2017-11-11","name":"于永健","company":"阳光融资","phone":"123123123","number":44,"cost":123,"tips":"未支付"},{"key":3,"time":"2017-11-11","name":"于永健","company":"阳光融资","phone":"123123123","number":54,"cost":5435,"tips":"未支付"},{"key":4,"time":"2017-11-11","name":"于永健","company":"阳光融资","phone":"123123123","number":1124,"cost":54353,"tips":"未支付"},{"key":5,"time":"2017-11-11","name":"于永健","company":"阳光融资","phone":"123123123","number":12,"cost":123,"tips":"未支付"}]}}

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{}}

/***/ }),

/***/ 1284:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{}}

/***/ }),

/***/ 1285:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{"list":[{"key":"adelegateProject-1","value":"网站委托项目1"},{"key":"222","value":"网站委托项sdfs目1"},{"key":"dcelegatePgrgroject-21","value":"网站委托项目1"},{"key":"deslegat23eProject-1","value":"网站委托项目1"},{"key":"delgegeat123eProject-1","value":"网站委gre托项目1"},{"key":"delqhtrgreegateProject-1","value":"网站委托项目1"},{"key":"deltegatgreeProject-1","value":"网站htr委托项目1"},{"key":"delgegangrteProject-1","value":"网站nyj委托项目1"},{"key":"deqlegagreteProject-1","value":"网站gre委托项目1"}]}}

/***/ }),

/***/ 1286:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{"detailInfo":{"key":12,"name":"广告长标题示例","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com","type":"2","advContentType":"2","advContentKeyWord":"广告搜索关键字","advContentResult":"222"}}}

/***/ }),

/***/ 1287:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"sdfs","data":{"current":1,"total":123,"list":[{"key":12,"name":"广告长标题示例广告长标题示例广告长标题示例广告长标题示例广告长标题示例","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com","type":"2"},{"key":1,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com","type":"1"},{"key":2,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com","type":"2"},{"key":3,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com","type":"2"},{"key":4,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com","type":"1"},{"key":5,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com","type":"1"},{"key":6,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com","type":"1"},{"key":11,"name":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com","type":"2"}]}}

/***/ }),

/***/ 1288:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{}}

/***/ }),

/***/ 1289:
/***/ (function(module, exports) {

	module.exports = {"status":1001,"errMsg":"1313","data":{}}

/***/ }),

/***/ 1290:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":[{"id":"0101","name":"管理员及权限","checked":true},{"id":"0102","name":"用户管理","checked":true},{"id":"0103","name":"资金管理","checked":false},{"id":"0104","name":"项目管理","checked":false},{"id":"0105","name":"举报","checked":false},{"id":"0106","name":"公告管理","checked":false},{"id":"0107","name":"广告管理","checked":true},{"id":"0108","name":"活动管理","checked":false},{"id":"0109","name":"平台管理","checked":false},{"id":"0110","name":"帮助中心","checked":false},{"id":"0111","name":"财务管理","checked":false},{"id":"0112","name":"友情链接管理","checked":false}]}

/***/ }),

/***/ 1291:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"Dfds","data":{}}

/***/ }),

/***/ 1292:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1293:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"roleId":1,"account":"yuyongjian","password":"aaaa","confirmPassword":"aaaa","name":"於永健","mobile":"13918913343","status":1}}

/***/ }),

/***/ 1294:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"current":4,"total":262,"list":[{"roleId":1,"key":1,"loginName":"admin","name":"胡彦sff斌","status":"0","mobile":"13918911123","updateTime":"2017-09-11 11:11:11"},{"roleId":2,"key":2,"loginName":"yuyongjian","name":"於永健","status":"1","mobile":"12312312312","updateTime":"2017-09-08 12:12:15"},{"roleId":3,"key":3,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":4,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":5,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":6,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":7,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":8,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":9,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"},{"roleId":4,"key":10,"loginName":"liuguozhu","name":"刘国柱","status":"0","mobile":"214354365435","updateTime":"2017-07-13 07:11:11"}]}}

/***/ }),

/***/ 1295:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1296:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"gethth","data":{}}

/***/ }),

/***/ 1297:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1298:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1299:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"assetsType":{"debts":[{"value":"房地产抵押融资","key":"1"},{"value":"金融股权质押融资","key":"2"},{"value":"股票质押融资","key":"3"},{"value":"应收款质押融资(保理)","key":"4"},{"value":"政府平台融资(PPP)","key":"5"},{"value":"融资租赁","key":"6"},{"value":"短期过桥","key":"7"},{"value":"其他","key":"8"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assetsAcquisition":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}]},"provinceList":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","810000":"香港特别行政区","820000":"澳门特别行政区"},"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"key":"ZJ7f2137777","title":"资金标题","category":"1","stockType":"2","type":["2","3"],"industry":["1","3","5","6"],"region":["110000","320000"],"financingProfits":{"isNeed":"0","number":22},"invest":{"min":22,"max":555},"deadline":{"min":2,"max":6},"minRate":22,"mortgage":{"isNeed":"0","type":["2","3"],"rate":{"min":4,"max":20}},"guarantee":{"isNeed":"1","method":"自保"},"estimateBenefits":{"times":21,"type":"1"},"needCost":"1","companyProfits":{"isNeed":"1","number":245},"detail":"资金详情","accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}}}

/***/ }),

/***/ 1300:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"current":1,"total":362,"list":[{"key":1,"category":1,"title":"债权资金","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":11},{"key":2,"category":2,"title":"股权资金","progress":0,"publisherTime":"2017-09-27 23:50","deliverCount":31},{"key":3,"category":3,"title":"资产收购","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":543},{"key":4,"category":1,"title":"普通资金","progress":0,"publisherTime":"2017-09-27 23:50","deliverCount":12},{"key":5,"category":3,"title":"普通资金","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":543},{"key":11,"category":2,"title":"普通资金","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":654},{"key":12,"category":1,"title":"普通资金","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":21},{"key":15,"category":0,"title":"普通资金","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":33},{"key":16,"category":1,"title":"普通资金","progress":1,"publisherTime":"2017-09-27 23:50","deliverCount":55}]}}

/***/ }),

/***/ 1301:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1302:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsgd","data":{"id":"4223","time":"2017-09-11 22:11:22","userName":"各顾各","userID":"213","content":"脱氧核糖","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}}

/***/ }),

/***/ 1303:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgd","data":{"current":1,"total":362,"title":"委托资金标题","list":[{"id":1,"time":"2017-09-11 22:11:22","userName":"各顾各","userID":"213","content":"脱氧核糖","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":2,"time":"2017-09-11 22:11:22","userName":"热歌","userID":"123","content":"的话","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":3,"time":"2017-09-11 22:11:22","userName":"过户费","userID":"324","content":"大范甘迪发","fileName":"换行符","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":4,"time":"2017-09-11 22:11:22","userName":"苹果热","userID":"4353","content":"gdfgrdgre","fileName":"天然黑人头","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":5,"time":"2017-09-11 22:11:22","userName":"飞脚后跟","userID":"5346","content":"gdfgrdgre","fileName":"额外人格","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":6,"time":"2017-09-11 22:11:22","userName":"苹果热","userID":"123","content":"桃花运","fileName":"同任何人","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":7,"time":"2017-09-11 22:11:22","userName":"挺好听","userID":"543","content":"野田佳彦他","fileName":"天然黑人头","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":8,"time":"2017-09-11 22:11:22","userName":"苹果热","userID":"6534","content":"天然黑人头","fileName":"天然黑人头","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":11,"time":"2017-09-11 22:11:22","userName":"很符合","userID":"54345","content":"同任何人","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}]}}

/***/ }),

/***/ 1304:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1305:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1306:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1307:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"assetsType":{"debts":[{"value":"开发商项目","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assetsAcquisition":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}]},"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"cascaderRegion":[{"value":"0","label":"浙江","children":[{"value":"1","label":"杭州","children":[{"value":"2","label":"西湖"}]}]},{"value":"10","label":"江苏","children":[{"value":"11","label":"南京","children":[{"value":"12","label":"中华门"}]}]}],"project":{"key":"2143324432","title":"这是债权项目","category":"0","type":"2","detail":"项目详情","accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}},"financing":{"industry":"1","aptitude":"融资方开发资质","parentAptitue":"母公司开发资质","previousProfits":252,"recentProfits":214,"nextProfits":5364,"number":124,"deadline":7,"maxRate":11,"region":["0","1","2"]},"stock":{"type":"2","property":"1","number":52,"rate":12,"estimate":{"times":15,"type":"2"}},"target":{"name":"标的企业名称","industry":"1","previousProfits":252,"recentProfits":124,"value":123,"nextProfits":543,"number":124,"region":["0","1","2"]},"assets":{"region":["0","1","2"],"value":214,"number":2145},"mortgage":{"isNeed":"1","type":["1","2"],"name":"抵押物名称","value":12,"rate":25},"guarantee":{"isNeed":"1","method":"资产抵押"},"accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}}}

/***/ }),

/***/ 1308:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"current":1,"total":362,"list":[{"id":1,"category":1,"title":"债权项目","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":11},{"id":2,"category":2,"title":"股权项目","progress":0,"publisherTime":"2017-09-27 23:50","receivedItemsNum":31},{"id":3,"category":4,"title":"资产转让","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":543},{"id":4,"category":1,"title":"普通项目","progress":0,"publisherTime":"2017-09-27 23:50","receivedItemsNum":12},{"id":5,"category":4,"title":"普通项目","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":543},{"id":11,"category":2,"title":"普通项目","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":654},{"id":12,"category":1,"title":"普通项目","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":21},{"id":15,"category":2,"title":"普通项目","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":33},{"id":16,"category":1,"title":"普通项目","progress":1,"publisherTime":"2017-09-27 23:50","receivedItemsNum":55}]}}

/***/ }),

/***/ 1309:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1310:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsgd","data":{"id":"4223","time":"2017-09-11 22:11:22","userName":"各顾各","userID":"213","content":"脱氧核糖","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}}

/***/ }),

/***/ 1311:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgd","data":{"title":"委托项目标题","current":1,"total":362,"list":[{"id":"4223","time":"2017-09-11 22:11:22","userName":"各顾各","userID":"213","content":"脱氧核糖","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"5143","time":"2017-09-11 22:11:22","userName":"热歌","userID":"123","content":"的话","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"645","time":"2017-09-11 22:11:22","userName":"过户费","userID":"324","content":"大范甘迪发","fileName":"换行符","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"111","time":"2017-09-11 22:11:22","userName":"苹果热","userID":"4353","content":"gdfgrdgre","fileName":"天然黑人头","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"222","time":"2017-09-11 22:11:22","userName":"飞脚后跟","userID":"5346","content":"gdfgrdgre","fileName":"额外人格","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"543","time":"2017-09-11 22:11:22","userName":"苹果热","userID":"123","content":"桃花运","fileName":"同任何人","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"654","time":"2017-09-11 22:11:22","userName":"挺好听","userID":"543","content":"野田佳彦他","fileName":"天然黑人头","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"314","time":"2017-09-11 22:11:22","userName":"苹果热","userID":"6534","content":"天然黑人头","fileName":"天然黑人头","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"},{"id":"765","time":"2017-09-11 22:11:22","userName":"很符合","userID":"54345","content":"同任何人","fileName":"投递文件名","fileLink":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}]}}

/***/ }),

/***/ 1312:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1313:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1314:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fdsfds","data":{"current":1,"total":123,"list":[{"key":1,"name":"刘国柱","number":213,"type":1,"time":"2017-01-12 11:22"},{"key":2,"name":"刘国柱","number":213,"type":2,"time":"2017-01-12 11:22"},{"key":3,"name":"刘国柱","number":213,"type":1,"time":"2017-01-12 11:22"},{"key":4,"name":"刘国柱","number":213,"type":1,"time":"2017-01-12 11:22"},{"key":5,"name":"刘国柱","number":213,"type":2,"time":"2017-01-12 11:22"}]}}

/***/ }),

/***/ 1315:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1316:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fdsfds","data":{"current":1,"total":123,"list":[{"key":1,"name":"刘国柱","number":213,"time":"2017-10-12 20:12"},{"key":2,"name":"刘国柱","number":213,"time":"2017-10-12 20:12"},{"key":3,"name":"刘国柱","number":213,"time":"2017-10-12 20:12"},{"key":4,"name":"刘国柱","number":213,"time":"2017-10-12 20:12"},{"key":5,"name":"刘国柱","number":213,"time":"2017-10-12 20:12"}]}}

/***/ }),

/***/ 1317:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgf","data":{}}

/***/ }),

/***/ 1318:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1319:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"key":1,"title":"普通资金","category":1,"investmentType":"2,3,4","investmentIndustry":"3,5,7,11,13","region":["310000","320000"],"isNeedLastYearProfits":1,"lastYearProfitsNum":55555,"investMin":502,"investMax":555,"deadlineMin":1,"deadlineMax":5,"minRate":1.22,"isNeedMortgage":1,"mortgageType":"1,2","mortgageRateMin":2.22,"mortgageRateMax":6.66,"isNeedGuarantee":1,"guaranteeMethod":"担保方式1","estimateBenefitsTimes":6,"estimateBenefitsType":2,"needCost":1,"detail":"普通资金审核详情","accessoryName":"filename","accessoryLink":"/file/123.txt","auditStatus":3,"comment":"审核通过","stockType":1,"fundDetails":"普通资金审核详情","progress":2,"categoryStr":"债权","stockTypeStr":"参股","auditStatusStr":"已通过","investmentTypeStr":null,"investmentIndustryStr":"教育培训,煤炭业,化肥农药,钢铁,电器设备","mortgageTypeStr":"固定资产,有价证券","estimateBenefitsTypeStr":"今年净利润","debts":[{"value":"房地产抵押融资","key":"1"},{"value":"金融股权质押融资","key":"2"},{"value":"股票质押融资","key":"3"},{"value":"应收款质押融资(保理)","key":"4"},{"value":"政府平台融资(PPP)","key":"5"},{"value":"融资租赁","key":"6"},{"value":"短期过桥","key":"7"},{"value":"其他","key":"8"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assetsAcquisition":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}],"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}]}}

/***/ }),

/***/ 1320:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"pageNum":1,"pageSize":5,"size":5,"startRow":0,"endRow":4,"total":5,"pages":1,"list":[{"key":7,"category":1,"investmentTypeStr":"金融股权质押融资,股票质押融资","title":"提交普通资金标题","audit":{"status":1,"comment":null},"progress":1,"userType":2,"publisher":{"id":2,"name":"赵跃"},"publisherTime":"2018-04-06 22:55"},{"key":6,"category":1,"investmentTypeStr":"金融股权质押融资,股票质押融资","title":"普通资金42442标题","audit":{"status":4,"comment":null},"progress":1,"userType":2,"publisher":{"id":2,"name":"赵跃"},"publisherTime":"2018-04-06 22:52"},{"key":5,"category":1,"investmentTypeStr":"房地产抵押融资,金融股权质押融资,股票质押融资","title":"普通资金标题","audit":{"status":4,"comment":null},"progress":1,"userType":2,"publisher":{"id":2,"name":"赵跃"},"publisherTime":"2018-04-06 22:46"},{"key":3,"category":1,"investmentTypeStr":"金融股权质押融资,股票质押融资,应收款质押融资(保理)","title":"普资金11111","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":2,"publisher":{"id":2,"name":"赵跃"},"publisherTime":"2018-04-05 21:09"},{"key":1,"category":1,"investmentTypeStr":"金融股权质押融资,股票质押融资,应收款质押融资(保理)","title":"普通资金","audit":{"status":3,"comment":"审核通过"},"progress":2,"userType":2,"publisher":{"id":2,"name":"赵跃"},"publisherTime":"2017-09-27 23:50"}],"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1,"firstPage":1,"lastPage":1}}

/***/ }),

/***/ 1321:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"xxx","data":{"menuItems":[{"key":"auth","name":"管理员及权限","url":"","children":[{"key":"auth-manage","name":"管理员列表","url":"/auth/manage"},{"key":"auth-admin","name":"管理员权限","children":[{"key":"auth-admin-user","name":"用户管理员","url":"/auth/admin/user"},{"key":"auth-admin-project","name":"项目管理员","url":"/auth/admin/project"},{"key":"auth-admin-fund","name":"资金管理员","url":"/auth/admin/fund"},{"key":"auth-admin-other","name":"其他栏目管理员","url":"/auth/admin/other"}]}]},{"key":"user","name":"用户管理","url":"","children":[{"key":"user-manage","name":"用户列表","url":"/user/manage"},{"key":"user-message","name":"群发短信","url":"/user/message"},{"key":"user-mail","name":"群发邮件","url":"/user/mail"}]},{"key":"fund","name":"资金管理","url":"","children":[{"key":"fund-normal","name":"普通资金","url":"/fund/normal"}]},{"key":"project","name":"项目管理","url":"","children":[{"key":"project-normal","name":"普通项目","url":"/project/normal"}]},{"key":"delegateFund","name":"委托资金","url":"","children":[{"key":"delegateFund-list","name":"资金列表","url":"/delegateFund"}]},{"key":"delegateProject","name":"委托项目","url":"","children":[{"key":"delegateProject-list","name":"项目列表","url":"/delegateProject"}]},{"key":"report","name":"举报管理","url":"","children":[{"key":"report-list","name":"举报列表","url":"/report"}]},{"key":"notice","name":"公告管理","url":"","children":[{"key":"notice-list","name":"公告列表","url":"/notice"}]},{"key":"adv","name":"广告管理","url":"","children":[{"key":"adv-list","name":"广告列表","url":"/adv"}]},{"key":"activity","name":"活动管理","url":"","children":[{"key":"activity-list","name":"活动列表","url":"/activity"}]},{"key":"platform","name":"平台管理","url":"","children":[{"key":"platform-company","name":"公司概况","url":"/platform/company"},{"key":"platform-news","name":"行业动态","url":"/platform/news"},{"key":"platform-report","name":"媒体报道","url":"/platform/report"},{"key":"platform-contact","name":"联系方式","url":"/platform/contact"}]},{"key":"help","name":"帮助中心","url":"","children":[{"key":"help-qa","name":"常见问题","url":"/help/qa"},{"key":"help-feedback","name":"意见反馈","url":"/help/feedback"}]},{"key":"finance","name":"财务管理","url":"","children":[{"key":"finance-recharge","name":"充值","url":"/finance/recharge"},{"key":"finance-consumption","name":"消费","url":"/finance/consumption"}]},{"key":"link","name":"友情链接","url":"","children":[{"key":"link-list","name":"链接列表","url":"/link"}]}]}}

/***/ }),

/***/ 1322:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"Dsf","data":{}}

/***/ }),

/***/ 1323:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"Dsfds","data":{"detailInfo":{"key":4,"name":"意见反馈","email":"feedback@qq.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"}}}

/***/ }),

/***/ 1324:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"current":1,"total":213,"list":[{"key":1,"name":"意见反馈","email":"21321432@xx.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"},{"key":2,"name":"意见反馈","email":"21321432@xx.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"},{"key":3,"name":"意见反馈","email":"21321432@xx.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"},{"key":4,"name":"意见反馈","email":"21321432@xx.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"},{"key":5,"name":"意见反馈","email":"21321432@xx.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"},{"key":6,"name":"意见反馈","email":"21321432@xx.com","mobile":"13918912321","content":"意见反馈内容意见反馈内容意见反馈内容意见反馈内容意见反馈内容","time":"2017-10-21"}]}}

/***/ }),

/***/ 1325:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1326:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dfs","data":{"detailInfo":{"key":1,"title":"常见问题","createTime":"2017-10-12","content":"常见问题描述常见问题描述常见问题描述常见问题描述常见问题描述常见问题描述常见问题描述"}}}

/***/ }),

/***/ 1327:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"current":1,"total":123,"list":[{"key":1,"title":"常见问题","createTime":"2017-10-12"},{"key":2,"title":"常见问题","createTime":"2017-10-12"},{"key":3,"title":"常见问题","createTime":"2017-10-12"},{"key":4,"title":"常见问题","createTime":"2017-10-12"},{"key":5,"title":"常见问题","createTime":"2017-10-12"},{"key":6,"title":"常见问题","createTime":"2017-10-12"}]}}

/***/ }),

/***/ 1328:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1329:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1330:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dfdsfds","data":{"detailInfo":{"key":6,"name":"融老板","link":"www.ronglaoba.cn"}}}

/***/ }),

/***/ 1331:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"current":1,"total":123,"list":[{"key":1,"name":"友情连接","link":"www.ronglaoba.cn"},{"key":2,"name":"友情连接","link":"www.ronglaoba.cn"},{"key":3,"name":"友情连接","link":"www.ronglaoba.cn"},{"key":4,"name":"友情连接","link":"www.ronglaoba.cn"},{"key":5,"name":"友情连接","link":"www.ronglaoba.cn"},{"key":6,"name":"友情连接","link":"www.ronglaoba.cn"}]}}

/***/ }),

/***/ 1332:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1333:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"gethth","data":{"token":"fdsfds"}}

/***/ }),

/***/ 1334:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"gethth","data":{}}

/***/ }),

/***/ 1335:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{}}

/***/ }),

/***/ 1336:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{"detailInfo":{"key":12,"title":"公告标题","content":"富文本编辑器回显","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com"}}}

/***/ }),

/***/ 1337:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"sdfs","data":{"current":1,"total":123,"list":[{"key":12,"title":"长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例长标题示例","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com"},{"key":1,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com"},{"key":2,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com"},{"key":3,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com"},{"key":4,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com"},{"key":5,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com"},{"key":6,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"0","link":"http://www.baidu.com"},{"key":11,"title":"公告标题","img":"http://ronglaoban.cn/images/siteNotice/2017/05/25/1495703720781939.jpeg","time":"2017-10-13 22:11:34","status":"1","link":"http://www.baidu.com"}]}}

/***/ }),

/***/ 1338:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"greger","data":{}}

/***/ }),

/***/ 1339:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"edsfds","data":{"detailInfo":{"info":"公司概况公司概况公司概况公司概况公司概况公司概况公司概况公司概况公司概况公司概况公司概况公司概况公司概况","culture":"企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化"}}}

/***/ }),

/***/ 1340:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1341:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dfs","data":{"detailInfo":{"exchangeNumber":"021-2423423","helpNumber":"021-213243","fax":"021-432432","address":"上海市浦东新区浦电路111号","postcode":"200012","email":"xxxx@ff.com"}}}

/***/ }),

/***/ 1342:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dfs","data":{}}

/***/ }),

/***/ 1343:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1344:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"detailInfo":{"key":1,"title":"新闻水电费水电费","source":"新华网","content":"新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容"}}}

/***/ }),

/***/ 1345:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"current":1,"total":123,"list":[{"key":1,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":2,"title":"新闻反倒是水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":3,"title":"新闻飞水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":4,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":5,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":6,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":7,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":8,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"}]}}

/***/ }),

/***/ 1346:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1347:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1348:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"detailInfo":{"key":1,"title":"新闻水电费水电费","source":"新华网","content":"新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容"}}}

/***/ }),

/***/ 1349:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"current":1,"total":123,"list":[{"key":1,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":2,"title":"新闻反倒是水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":3,"title":"新闻飞水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":4,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":5,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":6,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":7,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"},{"key":8,"title":"新闻水电费水电费","source":"新华网","createTime":"2017-10-10"}]}}

/***/ }),

/***/ 1350:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{}}

/***/ }),

/***/ 1351:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgf","data":{}}

/***/ }),

/***/ 1352:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1353:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"assetsType":{"debts":[{"value":"开发商项目","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assetsAcquisition":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}]},"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"cascaderRegion":[{"value":"0","label":"浙江","children":[{"value":"1","label":"杭州","children":[{"value":"2","label":"西湖"}]}]},{"value":"10","label":"江苏","children":[{"value":"11","label":"南京","children":[{"value":"12","label":"中华门"}]}]}],"project":{"key":"2143324432","title":"这是债权项目","category":"0","type":"2","detail":"项目详情","accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}},"financing":{"industry":"1","aptitude":"融资方开发资质","parentAptitue":"母公司开发资质","previousProfits":252,"recentProfits":213,"nextProfits":543,"number":124,"deadline":7,"maxRate":11,"region":["0","1","2"]},"stock":{"type":"2","property":"1","number":52,"rate":12,"estimate":{"times":5,"type":"1"}},"target":{"name":"标的企业名称","industry":"1","previousProfits":252,"recentProfits":124,"value":123,"nextProfits":543,"number":124,"region":["0","1","2"]},"assets":{"region":["0","1","2"],"value":214,"number":2145},"mortgage":{"isNeed":"1","type":["0","1","2"],"name":"抵押物名称","value":12,"rate":25},"guarantee":{"isNeed":"1","method":"资产抵押"},"audit":{"status":"0","comment":"项目审核意见"}}}

/***/ }),

/***/ 1354:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"pageSize":1,"size":1,"startRow":0,"endRow":0,"total":231,"pages":1,"list":[{"id":1,"category":1,"typeStr":"应收款质押融资(保理)","title":"普通项目","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":1,"publisher":{"id":1,"name":"潘力剑"},"publisherTime":"2017-09-27 23:50"},{"id":2,"category":2,"typeStr":"应都是融资(保理)","title":"普通项目","audit":{"status":1,"comment":"审核通过"},"progress":0,"userType":2,"publisher":{"id":12,"name":"潘力剑"},"publisherTime":"2017-11-27 23:50"},{"id":3,"category":4,"typeStr":"应收款质押融资(保理)","title":"普通项目","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":1,"publisher":{"id":1,"name":"潘力剑"},"publisherTime":"2017-09-27 23:50"},{"id":4,"category":1,"typeStr":"应收款质押融资(保理)","title":"普通项目","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":1,"publisher":{"id":1,"name":"潘力剑"},"publisherTime":"2017-09-27 23:50"},{"id":5,"category":1,"typeStr":"应收款质押融资(保理)","title":"普通项目","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":1,"publisher":{"id":1,"name":"潘力剑"},"publisherTime":"2017-09-27 23:50"},{"id":6,"category":1,"typeStr":"应收款质押融资(保理)","title":"普通项目","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":1,"publisher":{"id":1,"name":"潘力剑"},"publisherTime":"2017-09-27 23:50"},{"id":7,"category":1,"typeStr":"普通项目(保理)","title":"普通项目","audit":{"status":3,"comment":"审核通过"},"progress":1,"userType":1,"publisher":{"id":1,"name":"潘力剑"},"publisherTime":"2017-09-27 23:50"}],"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1,"firstPage":1,"lastPage":1,"current":1}}

/***/ }),

/***/ 1355:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1356:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdf","data":{}}

/***/ }),

/***/ 1357:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdf","data":{}}

/***/ }),

/***/ 1358:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"pageNum":1,"pageSize":4,"size":4,"startRow":0,"endRow":3,"total":4,"pages":1,"list":[{"id":7,"userId":null,"name":null,"content":"举报测试","reportTime":"2018-04-08 23:36:27","reporter":{"name":"赵跃","id":2}},{"id":4,"userId":null,"name":null,"content":"举报测试","reportTime":"2018-04-06 22:00:29","reporter":{"name":"赵跃","id":2}},{"id":1,"userId":null,"name":null,"content":"xxx3","reportTime":null,"reporter":{"name":"赵跃","id":2}},{"id":3,"userId":null,"name":null,"content":"3","reportTime":null,"reporter":{"name":"赵跃","id":2}}],"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1,"firstPage":1,"lastPage":1}}

/***/ }),

/***/ 1359:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fsdf","data":{"current":1,"total":123,"list":[{"id":"1","number":12,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"1"},"forbidden":true},{"id":"2","number":543,"category":2,"title":"资金标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"2"},"forbidden":false},{"id":"3","number":5,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"3"},"forbidden":true},{"id":"4","number":122,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"21312"},"forbidden":false},{"id":"5","number":112,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"6"},"forbidden":true},{"id":"11","number":543,"category":1,"title":"项目标题","publisher":{"name":"刘国柱","mobile":"1391843233","id":"53"},"forbidden":false},{"id":"12","number":423,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"123"},"forbidden":true},{"id":"13","number":112,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"213512"},"forbidden":true},{"id":"15","number":534,"category":1,"title":"项目标题","auditNum":123,"publisher":{"name":"刘国柱","mobile":"1391843233","id":"534"},"forbidden":false}]}}

/***/ }),

/***/ 1360:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdf","data":{}}

/***/ }),

/***/ 1361:
/***/ (function(module, exports) {

	module.exports = {"error":0,"url":"http://img1.imgtn.bdimg.com/it/u=1794894692,1423685501&fm=27&gp=0.jpg"}

/***/ }),

/***/ 1362:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1363:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"current":1,"total":123,"list":[{"key":1,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":2,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"2","sendTime":"2017-01-21 11:11:43"},{"key":3,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":4,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"2","sendTime":"2017-01-21 11:11:43"},{"key":5,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"2","sendTime":"2017-01-21 11:11:43"},{"key":6,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"0","sendTime":"2017-01-21 11:11:43"},{"key":7,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":8,"title":"邮件标题","content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"2","sendTime":"2017-01-21 11:11:43"}]}}

/***/ }),

/***/ 1364:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{}}

/***/ }),

/***/ 1365:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgf","data":{}}

/***/ }),

/***/ 1366:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1367:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dsfds","data":{"name":"刘国柱","gender":"1","nickName":"莉莉","headPic":"http://ronglaoban.cn/images/photo/2017/07/16/17240306.png","licensePic":"http://ronglaoban.cn/images/auth/2017/07/16/busiLicence/17240306.png","companyPic":"http://ronglaoban.cn/images/auth/2017/07/16/companyCard/17240306.png","privatePic":"http://ronglaoban.cn/images/auth/2017/07/16/idCard/17240306.png","idPic":"http://ronglaoban.cn/images/auth/2017/07/16/photo/17240306.png","region":"天津天津和平区","company":"上海木偶房产中介","department":"销售部","position":"销售经理","mobile":"131111111111","phone":"021-3456790","mail":"2283680103@qq.com","qq":"2283680103","wx":"weixinwe","weibo":"weibo","audit":"1"}}

/***/ }),

/***/ 1368:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"current":1,"total":362,"list":[{"key":1,"gender":"0","name":"房东","status":"2","mobile":"13918911123","companyName":"上海资金","type":"1","registerTime":"2017-09-11 11:11:11","forbidden":true},{"key":2,"gender":"1","name":"於永健","status":"3","mobile":"12312312312","companyName":"上海资金","type":"2","registerTime":"2017-09-08 12:12:15","forbidden":false},{"key":3,"gender":"0","name":"刘国柱","status":"1","mobile":"214354365435","companyName":"上海资金","type":"2","registerTime":"2017-07-13 07:11:11","forbidden":true},{"key":4,"name":"刘国柱","gender":"0","status":"2","mobile":"214354365435","companyName":"上海资金","type":"1","registerTime":"2017-07-13 07:11:11","forbidden":true},{"key":5,"name":"刘国柱","status":"2","companyName":"上海资金","gender":"1","mobile":"214354365435","type":"1","registerTime":"2017-07-13 07:11:11"},{"key":6,"loginName":"liuguozhu","name":"刘国柱","status":"2","gender":"0","mobile":"214354365435","companyName":"上海资金","type":"1","registerTime":"2017-07-13 07:11:11","forbidden":true},{"key":7,"name":"刘国柱","status":"2","gender":"0","mobile":"214354365435","companyName":"上海资金","type":"1","registerTime":"2017-07-13 07:11:11","forbidden":true},{"key":8,"name":"刘国柱","gender":"0","status":"2","mobile":"214354365435","companyName":"上海资金","type":"2","registerTime":"2017-07-13 07:11:11","forbidden":false},{"key":9,"name":"刘国柱","status":"2","mobile":"214354365435","gender":"1","companyName":"上海资金","type":"2","registerTime":"2017-07-13 07:11:11","forbidden":true},{"key":10,"name":"刘国柱","gender":"0","status":"2","mobile":"214354365435","companyName":"上海资金","type":"1","registerTime":"2017-07-13 07:11:11","forbidden":true}]}}

/***/ }),

/***/ 1369:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1370:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgdgfd","data":{}}

/***/ }),

/***/ 1371:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"current":1,"total":123,"list":[{"key":1,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":2,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"0","sendTime":"2017-01-21 11:11:43"},{"key":3,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":4,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"2","sendTime":"2017-01-21 11:11:43"},{"key":5,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":6,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"},{"key":7,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"2","sendTime":"2017-01-21 11:11:43"},{"key":8,"content":"今天给大家伙儿发钱啦，每人一个亿！ 领取找马云或者王健林.","sendTo":"1","sendTime":"2017-01-21 11:11:43"}]}}

/***/ }),

/***/ 1372:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{}}

/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(adminAjax) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.DebtsForm=undefined;var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(286);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(291);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(292);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(296);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(330);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(178);
	var _antd=__webpack_require__(338);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	var FormItem=_antd.Form.Item;
	var Option=_antd.Select.Option;
	var RadioGroup=_antd.Radio.Group;
	var CheckboxGroup=_antd.Checkbox.Group;var
	TextArea=_antd.Input.TextArea;var
	DebtsForm=exports.DebtsForm=function(_React$Component){(0,_inherits3.default)(DebtsForm,_React$Component);
	function DebtsForm(props){(0,_classCallCheck3.default)(this,DebtsForm);var _this=(0,_possibleConstructorReturn3.default)(this,(DebtsForm.__proto__||(0,_getPrototypeOf2.default)(DebtsForm)).call(this,
	props));
	_this.state={
	disabled:props.actionType=="detail"?true:false,
	loading:false,
	"assetsType":{
	"debts":[],
	"stock":[],
	"purchase":[],
	"transfer":[]},
	
	"industryList":[],
	"cascaderRegion":[],
	"project":{
	"key":"",
	"title":"",
	"category":"",
	"type":"",
	"detail":"",
	"accessory":{
	"name":"",
	"link":""}},
	
	
	"financing":{
	"industry":"",
	"aptitude":"",
	"parentAptitue":"",
	"region":[],
	"previousProfits":"",
	"recentProfits":"",
	"nextProfits":"",
	"number":"",
	"deadline":"",
	"maxRate":""},
	
	"mortgage":{
	"isNeed":"",
	"type":[],
	"name":"",
	"value":"",
	"rate":""},
	
	"guarantee":{
	"isNeed":"",
	"method":""},
	
	"stock":{
	"type":"",
	"property":"",
	"number":"",
	"rate":"",
	"value":"",
	"estimate":{
	"times":"",
	"type":""}},
	
	
	"subject":{
	"name":"",
	"industry":"",
	"region":"",
	"previousProfits":"",
	"recentProfits":"",
	"nextProfits":""},
	
	"assets":{
	"region":"",
	"number":"",
	"value":""},
	
	"audit":{
	"status":"",
	"comment":""},
	
	'fileList':[]};
	
	['handleSubmit','resetForm','financingIndustryChange','mortgageChange','guaranteeChange','uploadChange'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(DebtsForm,[{key:'guaranteeChange',value:function guaranteeChange(
	
	e){
	this.setState({
	guarantee:{
	isNeed:e.target.value}});
	
	
	}},{key:'mortgageChange',value:function mortgageChange(
	
	e){
	this.setState({
	mortgage:{
	isNeed:e.target.value}});
	
	
	}},{key:'financingIndustryChange',value:function financingIndustryChange(
	
	val){
	this.state.financing.industry=val;
	this.setState({
	financing:this.state.financing});
	
	}},{key:'componentWillMount',value:function componentWillMount()
	
	{
	var that=this;
	this.setState({loading:true});
	adminAjax({
	url:"/delegateProject/getInfoDetail",
	method:"post",
	data:{id:that.props.infoID?that.props.infoID:""},
	callback:function callback(data){
	var newData=data;
	that.setState((0,_extends3.default)({loading:false},newData));
	that.setState({
	fileList:[{
	uid:"random",
	name:newData.accessory.name,
	url:newData.accessory.link,
	status:"done",
	response:'Server Error 500'}]});
	
	
	}});
	
	}},{key:'handleSubmit',value:function handleSubmit(
	
	e){var _this2=this;
	e.preventDefault();
	this.props.form.validateFields(function(err,values){
	if(!err){
	adminAjax({
	url:"/delegateProject/edit",
	method:"post",
	data:_this2.props.actionType=="edit"?(0,_extends3.default)(values,{id:_this2.props.infoID},{accessory:{name:_this2.state.accessory.name,link:_this2.state.accessory.link}}):(0,_extends3.default)(values,{accessory:{name:_this2.state.accessory.name,link:_this2.state.accessory.link}}),
	callback:function callback(data){
	_antd.message.success("保存成功!",1,function(){
	_reactRouter.hashHistory.push("/delegateProject");
	});
	}});
	
	}
	});
	}},{key:'return',value:function _return()
	
	{
	history.back();
	}},{key:'resetForm',value:function resetForm()
	
	{
	this.props.form.resetFields();
	}},{key:'uploadChange',value:function uploadChange(
	
	info){
	var that=this;
	var file=info.file;
	var fileList=info.fileList;
	this.setState({loading:true});
	if(fileList.length>0){
	if(fileList.length>1){
	fileList=[file];
	}
	if(fileList[0].status=="error"){
	fileList=[];
	_antd.message.error("上传图片失败!");
	}
	if(fileList[0].status=="done"){
	fileList[0].url=''+fileList[0].response.url;
	this.setState({
	accessory:{
	name:fileList[0].name,
	link:fileList[0].url}});
	
	
	}
	}else{
	this.setState({
	accessory:{
	name:"",
	link:""}});
	
	
	}
	
	this.setState({fileList:fileList,loading:false});
	}},{key:'render',value:function render()
	
	{var
	getFieldDecorator=this.props.form.getFieldDecorator;
	var formItemLayout={
	labelCol:{span:3},
	wrapperCol:{span:14}};
	
	return(
	_react2.default.createElement(_antd.Spin,{spinning:this.state.loading,tip:'Loading...'},
	_react2.default.createElement(_antd.Form,null,
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u6807\u9898',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.title",{
	rules:[{required:true,message:"请输入标题!"}],
	initialValue:this.state.project.title})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u7C7B\u522B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("category",{
	initialValue:"1"})(
	
	_react2.default.createElement(_antd.Select,{disabled:true},
	_react2.default.createElement(Option,{value:'1'},'\u503A\u6743'),
	_react2.default.createElement(Option,{value:'2'},'\u80A1\u6743'),
	_react2.default.createElement(Option,{value:'4'},'\u8D44\u91D1\u8F6C\u8BA9')))),
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u7C7B\u578B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.type",{
	rules:[{
	required:true,
	message:"请选择项目类型!"}],
	
	initialValue:this.state.project.type})(
	
	_react2.default.createElement(_antd.Select,{disabled:this.state.disabled},
	
	this.state.assetsType.debts.map(function(item){
	return _react2.default.createElement(Option,{value:item.key,key:item.key},item.value);
	})))),
	
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u878D\u8D44\u65B9\u540D\u79F0'}),
	
	_react2.default.createElement('div',null,'\u8BE6\u89C1\u6211\u7684\u8054\u7CFB\u65B9\u5F0F')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u878D\u8D44\u65B9\u6240\u5C5E\u884C\u4E1A',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("industry",{
	rules:[{
	required:true,
	message:"请选择所属行业!"}],
	
	initialValue:this.state.financing.industry})(
	
	_react2.default.createElement(_antd.Select,{onChange:this.financingIndustryChange,disabled:this.state.disabled},
	
	this.state.industryList.map(function(item){
	return _react2.default.createElement(Option,{value:item.key,key:item.key},item.value);
	})))),
	
	
	
	
	
	this.state.financing.industry==2?
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u878D\u8D44\u65B9\u5F00\u53D1\u8D44\u8D28',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.aptitude",{
	rules:[{
	required:true,
	message:"请输入融资方开发资质!"}],
	
	initialValue:this.state.financing.aptitude})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))):
	
	"",
	
	
	this.state.financing.industry==2?
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u6BCD\u516C\u53F8\u5F00\u53D1\u8D44\u8D28',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.parentAptitue",{
	rules:[{
	required:true,
	message:"请输入母公司开发资质!"}],
	
	initialValue:this.state.financing.parentAptitue})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))):
	
	"",
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u878D\u8D44\u65B9\u6240\u5728\u5730',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.region",{
	rules:[{
	required:true,
	message:"请设置地区!"}],
	
	initialValue:this.state.financing.region})(
	
	_react2.default.createElement(_antd.Cascader,{disabled:this.state.disabled,options:this.state.cascaderRegion}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u878D\u8D44\u65B9\u53BB\u5E74\u51C0\u5229\u6DA6',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.previousProfits",{
	rules:[{
	required:true,
	message:"请输入去年净利润!"}],
	
	initialValue:this.state.financing.previousProfits})(
	
	_react2.default.createElement(_antd.Input,{style:{width:"93%"},disabled:this.state.disabled}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u878D\u8D44\u91D1\u989D',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.number",{
	rules:[{
	required:true,
	message:"请输入融资金额!"}],
	
	initialValue:this.state.financing.number})(
	
	_react2.default.createElement(_antd.Input,{style:{width:"93%"},disabled:this.state.disabled})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u671F\u9650',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.deadline",{
	rules:[{
	required:true,
	message:"请输入期限"}],
	
	initialValue:this.state.financing.deadline})(
	
	_react2.default.createElement(_antd.Input,{style:{width:"93%"},disabled:this.state.disabled})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u5E74')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u6700\u9AD8\u63A5\u53D7\u5229\u7387',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("financing.maxRate",{
	rules:[{
	required:true,
	message:"请输入最高接受利率"}],
	
	initialValue:this.state.financing.maxRate})(
	
	_react2.default.createElement(_antd.Input,{style:{width:"93%"},disabled:this.state.disabled})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'%')),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u6709\u65E0\u62B5/\u8D28\u62BC\u7269',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("mortgage.isNeed",{
	rules:[{
	required:true,
	message:"请设置是否需要抵押物!"}],
	
	initialValue:this.state.mortgage.isNeed})(
	
	_react2.default.createElement(RadioGroup,{onChange:this.mortgageChange,disabled:this.state.disabled},
	_react2.default.createElement(_antd.Radio,{value:'1'},'\u662F'),
	_react2.default.createElement(_antd.Radio,{value:'0'},'\u5426')))),
	
	
	
	
	this.state.mortgage.isNeed=="1"?
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u62B5/\u8D28\u62BC\u7269\u7C7B\u578B'}),
	
	getFieldDecorator("mortgage.type",{
	initialValue:this.state.mortgage.type})(
	
	_react2.default.createElement(CheckboxGroup,{disabled:this.state.disabled},
	_react2.default.createElement(_antd.Checkbox,{value:'1'},'\u56FA\u5B9A\u8D44\u4EA7'),
	_react2.default.createElement(_antd.Checkbox,{value:'2'},'\u6709\u4EF7\u8BC1\u5238'),
	_react2.default.createElement(_antd.Checkbox,{value:'3'},'\u5176\u4ED6')))):
	
	
	"",
	
	
	this.state.mortgage.isNeed=="1"?
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u62B5/\u8D28\u62BC\u7269\u540D\u79F0'}),
	
	getFieldDecorator("mortgage.name",{
	initialValue:this.state.mortgage.name})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))):
	
	"",
	
	
	this.state.mortgage.isNeed=="1"?
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u62B5/\u8D28\u62BC\u7269\u4EF7\u503C'}),
	
	getFieldDecorator("mortgage.value",{
	initialValue:this.state.mortgage.value})(
	
	_react2.default.createElement(_antd.Input,{style:{width:"93%"},disabled:this.state.disabled})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')):
	"",
	
	
	this.state.mortgage.isNeed=="1"?
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u62B5/\u8D28\u62BC\u7269\u6298\u6263\u7387'}),
	
	getFieldDecorator("mortgage.rate",{
	initialValue:this.state.mortgage.rate})(
	
	_react2.default.createElement(_antd.Input,{style:{width:"95%"},disabled:this.state.disabled})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'%')):
	"",
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u6709\u65E0\u62C5\u4FDD',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("guarantee.isNeed",{
	rules:[{
	required:true,
	message:"请设置担保信息!"}],
	
	initialValue:this.state.guarantee.isNeed})(
	
	_react2.default.createElement(RadioGroup,{onChange:this.guaranteeChange,disabled:this.state.disabled},
	_react2.default.createElement(_antd.Radio,{value:'1'},'\u662F'),
	_react2.default.createElement(_antd.Radio,{value:'0'},'\u5426')))),
	
	
	
	
	this.state.guarantee.isNeed=="1"?
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u62C5\u4FDD\u65B9\u5F0F'}),
	
	getFieldDecorator("guarantee.method",{
	initialValue:this.state.guarantee.method})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))):
	
	"",
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u8BE6\u60C5',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.detail",{
	rules:[{require:true,message:"请输入项目详情!"}],
	initialValue:this.state.project.detail})(
	
	_react2.default.createElement(TextArea,{disabled:this.state.disabled,autosize:{minRows:3}}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u9644\u4EF6'}),
	
	_react2.default.createElement(_antd.Upload,{
	name:'file',
	action:'/admin/upload',
	fileList:this.state.fileList,
	onChange:this.uploadChange},
	
	_react2.default.createElement(_antd.Button,null,
	_react2.default.createElement(_antd.Icon,{type:'upload'}),'\u4E0A\u4F20\u6587\u4EF6'))),
	
	
	
	_react2.default.createElement(FormItem,{wrapperCol:{span:8,offset:3}},
	
	!this.state.disabled?_react2.default.createElement(_antd.Button,{type:'primary',onClick:this.handleSubmit,style:{"marginRight":"20px"}},'\u7ACB\u5373\u53D1\u5E03'):"",
	
	
	!this.state.disabled?_react2.default.createElement(_antd.Button,{type:'danger',onClick:this.resetForm,style:{"marginRight":"20px"}},'\u91CD\u7F6E'):"",
	
	_react2.default.createElement(_antd.Button,{icon:'rollback',onClick:this.return},'\u8FD4\u56DE')))));
	
	
	
	
	}}]);return DebtsForm;}(_react2.default.Component);
	
	
	var WrappedDebtsForm=_antd.Form.create({})(DebtsForm);
	
	module.exports=WrappedDebtsForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1273)))

/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(adminAjax) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.StockForm=undefined;var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(286);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(291);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(292);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(296);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(330);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(178);
	var _antd=__webpack_require__(338);
	
	
	
	
	var _benefitsItem=__webpack_require__(1447);var _benefitsItem2=_interopRequireDefault(_benefitsItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var FormItem=_antd.Form.Item;var Option=_antd.Select.Option;var RadioGroup=_antd.Radio.Group;var TextArea=_antd.Input.TextArea;var
	
	StockForm=exports.StockForm=function(_React$Component){(0,_inherits3.default)(StockForm,_React$Component);
	function StockForm(props){(0,_classCallCheck3.default)(this,StockForm);var _this=(0,_possibleConstructorReturn3.default)(this,(StockForm.__proto__||(0,_getPrototypeOf2.default)(StockForm)).call(this,
	props));
	_this.state={
	disabled:props.actionType=="detail"?true:false,
	loading:false,
	"assetsType":{
	"debts":[],
	"stock":[],
	"purchase":[],
	"transfer":[]},
	
	"industryList":[],
	"cascaderRegion":[],
	"project":{
	"key":"",
	"title":"",
	"category":"",
	"type":"",
	"detail":"",
	"accessory":{
	"name":"",
	"link":""}},
	
	
	"financing":{
	"industry":"",
	"aptitude":"",
	"parentAptitued":"",
	"region":[],
	"previousProfits":"",
	"recentProfits":"",
	"nextProfits":"",
	"number":"",
	"deadline":"",
	"maxRate":""},
	
	"mortgage":{
	"isNeed":"",
	"type":[],
	"name":"",
	"value":"",
	"rate":""},
	
	"guarantee":{
	"isNeed":"",
	"method":""},
	
	"stock":{
	"type":"",
	"property":"",
	"number":"",
	"rate":"",
	"estimate":{
	"times":"",
	"type":""}},
	
	
	"target":{
	"name":"",
	"industry":"",
	"region":"",
	"value":"",
	"previousProfits":"",
	"recentProfits":"",
	"nextProfits":""},
	
	"assets":{
	"region":"",
	"number":"",
	"value":""},
	
	'fileList':[]};
	
	['handleSubmit','resetForm','stockPropertyChange','uploadChange'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(StockForm,[{key:'stockPropertyChange',value:function stockPropertyChange(
	
	val){
	(0,_extends3.default)(this.state.stock,{property:val});
	this.setState({
	stock:this.state.stock});
	
	}},{key:'componentWillMount',value:function componentWillMount()
	
	{
	var that=this;
	this.setState({loading:true});
	adminAjax({
	url:"/delegateProject/getInfoDetail",
	method:"post",
	data:{id:that.props.infoID?that.props.infoID:""},
	callback:function callback(data){
	var newData=data;
	that.setState((0,_extends3.default)({loading:false},newData));
	that.setState({
	fileList:[{
	uid:"random",
	name:newData.accessory.name,
	url:newData.accessory.link,
	status:"done",
	response:'Server Error 500'}]});
	
	
	}});
	
	}},{key:'handleSubmit',value:function handleSubmit(
	
	e){var _this2=this;
	e.preventDefault();
	this.props.form.validateFields(function(err,values){
	if(!err){
	adminAjax({
	url:"/delegateProject/edit",
	method:"post",
	data:_this2.props.actionType=="edit"?(0,_extends3.default)(values,{id:_this2.props.infoID},{accessory:{name:_this2.state.accessory.name,link:_this2.state.accessory.link}}):(0,_extends3.default)(values,{accessory:{name:_this2.state.accessory.name,link:_this2.state.accessory.link}}),
	callback:function callback(data){
	_antd.message.success("保存成功!",1,function(){
	_reactRouter.hashHistory.push("/delegateProject");
	});
	}});
	
	}
	});
	}},{key:'return',value:function _return()
	
	{
	history.back();
	}},{key:'resetForm',value:function resetForm()
	
	{
	this.props.form.resetFields();
	}},{key:'uploadChange',value:function uploadChange(
	
	info){
	var that=this;
	var file=info.file;
	var fileList=info.fileList;
	this.setState({loading:true});
	if(fileList.length>0){
	if(fileList.length>1){
	fileList=[file];
	}
	if(fileList[0].status=="error"){
	fileList=[];
	_antd.message.error("上传图片失败!");
	}
	if(fileList[0].status=="done"){
	fileList[0].url=''+fileList[0].response.url;
	this.setState({
	accessory:{
	name:fileList[0].name,
	link:fileList[0].url}});
	
	
	}
	}else{
	this.setState({
	accessory:{
	name:"",
	link:""}});
	
	
	}
	
	this.setState({fileList:fileList,loading:false});
	}},{key:'render',value:function render()
	
	{var
	getFieldDecorator=this.props.form.getFieldDecorator;
	var formItemLayout={
	labelCol:{span:4},
	wrapperCol:{span:14}};
	
	return(
	_react2.default.createElement(_antd.Spin,{spinning:this.state.loading,tip:'Loading...'},
	_react2.default.createElement(_antd.Form,null,
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u6807\u9898',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.title",{
	rules:[{required:true,message:"请输入标题!"}],
	initialValue:this.state.project.title})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u7C7B\u522B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.category",{
	initialValue:"2"})(
	
	_react2.default.createElement(_antd.Select,{disabled:true},
	_react2.default.createElement(Option,{value:'1'},'\u503A\u6743'),
	_react2.default.createElement(Option,{value:'2'},'\u80A1\u6743'),
	_react2.default.createElement(Option,{value:'3'},'\u8D44\u91D1\u6536\u8D2D')))),
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u53C2/\u63A7\u80A1',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("stock.type",{
	rules:[{
	required:true,
	message:"请选择类型!"}],
	
	initialValue:this.state.stock.type})(
	
	_react2.default.createElement(RadioGroup,{disabled:this.state.disabled},
	_react2.default.createElement(_antd.Radio,{value:'1'},'\u53C2\u80A1\u578B\u6295\u8D44'),
	_react2.default.createElement(_antd.Radio,{value:'2'},'\u63A7\u80A1\u578B\u6295\u8D44')))),
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u7C7B\u578B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.type",{
	rules:[{
	required:true,
	message:"请选择项目类型!"}],
	
	initialValue:this.state.project.type})(
	
	_react2.default.createElement(_antd.Select,{disabled:this.state.disabled},
	
	this.state.assetsType.stock.map(function(item){
	return _react2.default.createElement(Option,{value:item.key,key:item.key},item.value);
	})))),
	
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u80A1\u6743\u6027\u8D28',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("stock.property",{
	rules:[{
	required:true,
	message:"请选择股权性质"}],
	
	initialValue:this.state.stock.property})(
	
	_react2.default.createElement(_antd.Select,{onChange:this.stockPropertyChange,disabled:this.state.disabled},
	_react2.default.createElement(Option,{value:'1'},'\u8001\u80A1\u8F6C\u8BA9'),
	_react2.default.createElement(Option,{value:'2'},'\u65B0\u80A1\u589E\u53D1')))),
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:this.state.stock.property=="1"?"转让方名称":"融资方名称"}),
	
	_react2.default.createElement('div',null,'\u8BE6\u89C1\u6211\u7684\u8054\u7CFB\u65B9\u5F0F')),
	
	
	this.state.stock.property=="1"?
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u6807\u7684\u4F01\u4E1A\u540D\u79F0',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("target.name",{
	rules:[{
	required:true,
	message:"请输入标的企业名称!"}],
	
	initialValue:this.state.target.name})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))):
	
	"",
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:this.state.stock.property=="1"?"标的企业所属行业":"融资方所属行业",
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator(this.state.stock.property=="1"?"target.industry":"financing.industry",{
	rules:[{
	required:true,
	message:"请设置所属行业!"}],
	
	initialValue:this.state.stock.property=="1"?this.state.target.industry:this.state.financing.industry})(
	
	_react2.default.createElement(_antd.Select,{disabled:this.state.disabled},
	
	this.state.industryList.map(function(item){
	return _react2.default.createElement(Option,{value:item.key,key:item.key},item.value);
	})))),
	
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:this.state.stock.property=="1"?"标的企业所在地":"融资方所在地",
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator(this.state.stock.property=="1"?"target.region":"financing.region",{
	rules:[{
	required:true,
	message:"请设置所在地!"}],
	
	initialValue:this.state.stock.property=="1"?this.state.target.region:this.state.financing.region})(
	
	_react2.default.createElement(_antd.Cascader,{disabled:this.state.disabled,
	options:this.state.cascaderRegion}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:this.state.stock.property=="1"?"x=项目去年利润":"融资方去年利润",
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator(this.state.stock.property=="1"?"target.previousProfits":"financing.previousProfits",{
	rules:[{
	required:true,
	message:'请输入去年净利润!'}],
	
	initialValue:this.state.stock.property=="1"?this.state.target.previousProfits:this.state.financing.previousProfits})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:this.state.stock.property=="1"?"转让金额":"融资金额",
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("stock.number",{
	rules:[{
	required:true,
	message:"请输入金额!"}],
	
	initialValue:this.state.stock.number})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u51FA\u8BA9\u80A1\u6743\u6BD4\u4F8B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("stock.rate",{
	initialValue:this.state.stock.rate})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'%')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u4F01\u4E1A\u6574\u4F53\u4F30\u503C'}),
	
	getFieldDecorator(this.state.stock.property=="1"?"target.number":"financing.number",{
	initialValue:this.state.stock.property=="1"?this.state.target.number:this.state.financing.number})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u6295\u8D44\u4F30\u503C\u500D\u6570'}),
	
	getFieldDecorator("stock.estimate",{
	initialValue:{
	times:this.state.stock.estimate.times,
	type:this.state.stock.estimate.type}})(
	
	_react2.default.createElement(_benefitsItem2.default,{disabled:this.state.disabled}))),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u4F01\u4E1A\u4ECA\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'}),
	
	getFieldDecorator(this.state.stock.property=="1"?"target.recentProfits":"financing.recentProfits",{
	initialValue:this.state.stock.property=="1"?this.state.target.recentProfits:this.state.financing.recentProfits})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u4F01\u4E1A\u660E\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'}),
	
	getFieldDecorator(this.state.stock.property=="1"?"target.nextProfits":"financing.nextProfits",{
	initialValue:this.state.stock.property=="1"?this.state.target.nextProfits:this.state.financing.nextProfits})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u8BE6\u60C5',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.detail",{
	rules:[{required:true,message:"请输入资金详情!"}],
	initialValue:this.state.project.detail})(
	
	_react2.default.createElement(TextArea,{disabled:this.state.disabled,autosize:{minRows:3}}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u9644\u4EF6'}),
	
	_react2.default.createElement(_antd.Upload,{
	name:'file',
	action:'/admin/upload',
	fileList:this.state.fileList,
	onChange:this.uploadChange},
	
	_react2.default.createElement(_antd.Button,null,
	_react2.default.createElement(_antd.Icon,{type:'upload'}),'\u4E0A\u4F20\u6587\u4EF6'))),
	
	
	
	_react2.default.createElement(FormItem,{wrapperCol:{span:8,offset:3}},
	
	!this.state.disabled?_react2.default.createElement(_antd.Button,{type:'primary',onClick:this.handleSubmit,style:{"marginRight":"20px"}},'\u7ACB\u5373\u53D1\u5E03'):"",
	
	
	!this.state.disabled?_react2.default.createElement(_antd.Button,{type:'danger',onClick:this.resetForm,style:{"marginRight":"20px"}},'\u91CD\u7F6E'):"",
	
	_react2.default.createElement(_antd.Button,{icon:'rollback',onClick:this.return},'\u8FD4\u56DE')))));
	
	
	
	
	}}]);return StockForm;}(_react2.default.Component);
	
	
	var WrappedStockForm=_antd.Form.create({})(StockForm);
	
	module.exports=WrappedStockForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1273)))

/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(286);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(291);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(292);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(296);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(330);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _antd=__webpack_require__(338);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	var Option=_antd.Select.Option;var
	
	BenefitsItem=function(_React$Component){(0,_inherits3.default)(BenefitsItem,_React$Component);
	function BenefitsItem(props){(0,_classCallCheck3.default)(this,BenefitsItem);var _this=(0,_possibleConstructorReturn3.default)(this,(BenefitsItem.__proto__||(0,_getPrototypeOf2.default)(BenefitsItem)).call(this,
	props));
	
	var value=_this.props.value||{};
	_this.state={
	times:value.times||0,
	type:value.type||"1"};
	
	['handleTimesChange','handleTypeChange','triggerChange'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(BenefitsItem,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
	nextProps){
	
	if('value'in nextProps){
	var value=nextProps.value;
	this.setState(value);
	}
	}},{key:'handleTimesChange',value:function handleTimesChange(
	
	e){
	var times=parseInt(e.target.value||0,10);
	if(!('value'in this.props)){
	this.setState({times:times});
	}
	this.triggerChange({times:times});
	}},{key:'handleTypeChange',value:function handleTypeChange(
	
	type){
	if(!('value'in this.props)){
	this.setState({type:type});
	}
	this.triggerChange({type:type});
	}},{key:'triggerChange',value:function triggerChange(
	
	changedValue){
	
	var onChange=this.props.onChange;
	if(onChange){
	onChange((0,_extends3.default)({},this.state,changedValue));
	}
	}},{key:'render',value:function render()
	{
	return(
	_react2.default.createElement('span',null,
	_react2.default.createElement(_antd.Input,{
	disabled:this.props.disabled,
	type:'text',
	value:this.state.times,
	onChange:this.handleTimesChange,
	style:{width:'25%'}}),'\xA0\u500D\xA0',
	_react2.default.createElement(_antd.Icon,{type:'close'}),
	_react2.default.createElement(_antd.Select,{disabled:this.props.disabled,
	value:this.state.type,
	style:{width:'25%'},
	onChange:this.handleTypeChange},
	
	_react2.default.createElement(Option,{value:'1'},'\u53BB\u5E74\u51C0\u5229\u6DA6'),
	_react2.default.createElement(Option,{value:'2'},'\u4ECA\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'),
	_react2.default.createElement(Option,{value:'3'},'\u660E\u5E74\u9884\u8BA1\u51C0\u5229\u6DA6'))));
	
	
	
	
	}}]);return BenefitsItem;}(_react2.default.Component);
	
	
	module.exports=BenefitsItem;

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(adminAjax) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.TransferForm=undefined;var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(286);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(291);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(292);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(296);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(330);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(178);
	var _antd=__webpack_require__(338);
	
	
	
	
	var _investItem=__webpack_require__(1449);var _investItem2=_interopRequireDefault(_investItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var FormItem=_antd.Form.Item;var Option=_antd.Select.Option;var RadioGroup=_antd.Radio.Group;var TextArea=_antd.Input.TextArea;var
	
	TransferForm=exports.TransferForm=function(_React$Component){(0,_inherits3.default)(TransferForm,_React$Component);
	function TransferForm(props){(0,_classCallCheck3.default)(this,TransferForm);var _this=(0,_possibleConstructorReturn3.default)(this,(TransferForm.__proto__||(0,_getPrototypeOf2.default)(TransferForm)).call(this,
	props));
	_this.state={
	disabled:props.actionType=="detail"?true:false,
	loading:false,
	"assetsType":{
	"debts":[],
	"stock":[],
	"purchase":[],
	"assetsAcquisition":[]},
	
	"industryList":[],
	"cascaderRegion":[],
	"project":{
	"key":"",
	"title":"",
	"category":"",
	"type":"",
	"detail":"",
	"accessory":{
	"name":"",
	"link":""}},
	
	
	"financing":{
	"industry":"",
	"aptitude":"",
	"parentAptitued":"",
	"region":[],
	"previousProfits":"",
	"recentProfits":"",
	"nextProfits":"",
	"number":"",
	"deadline":"",
	"maxRate":""},
	
	"assets":{
	"region":["0","1","2"],
	"value":214,
	"number":2145},
	
	"mortgage":{
	"isNeed":"",
	"type":[],
	"name":"",
	"value":"",
	"rate":""},
	
	"guarantee":{
	"isNeed":"",
	"method":""},
	
	"stock":{
	"type":"",
	"property":"",
	"number":"",
	"rate":"",
	"estimate":{
	"times":"",
	"type":""}},
	
	
	"target":{
	"name":"",
	"industry":"",
	"region":"",
	"value":"",
	"previousProfits":"",
	"recentProfits":"",
	"nextProfits":""},
	
	'fileList':[]};
	
	['handleSubmit','resetForm','uploadChange'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(TransferForm,[{key:'componentWillMount',value:function componentWillMount()
	
	{
	var that=this;
	this.setState({loading:true});
	adminAjax({
	url:"/delegateProject/getInfoDetail",
	method:"post",
	data:{id:that.props.infoID?that.props.infoID:""},
	callback:function callback(data){
	var newData=data;
	that.setState((0,_extends3.default)({loading:false},newData));
	that.setState({
	fileList:[{
	uid:"random",
	name:newData.accessory.name,
	url:newData.accessory.link,
	status:"done",
	response:'Server Error 500'}]});
	
	
	}});
	
	}},{key:'handleSubmit',value:function handleSubmit(
	
	e){var _this2=this;
	e.preventDefault();
	this.props.form.validateFields(function(err,values){
	if(!err){
	adminAjax({
	url:"/delegateProject/edit",
	method:"post",
	data:_this2.props.actionType=="edit"?(0,_extends3.default)(values,{id:_this2.props.infoID},{accessory:{name:_this2.state.accessory.name,link:_this2.state.accessory.link}}):(0,_extends3.default)(values,{accessory:{name:_this2.state.accessory.name,link:_this2.state.accessory.link}}),
	callback:function callback(data){
	_antd.message.success("保存成功!",1,function(){
	_reactRouter.hashHistory.push("/delegateProject");
	});
	}});
	
	}
	});
	}},{key:'return',value:function _return()
	
	{
	history.back();
	}},{key:'resetForm',value:function resetForm()
	
	{
	this.props.form.resetFields();
	}},{key:'uploadChange',value:function uploadChange(
	
	info){
	var that=this;
	var file=info.file;
	var fileList=info.fileList;
	this.setState({loading:true});
	if(fileList.length>0){
	if(fileList.length>1){
	fileList=[file];
	}
	if(fileList[0].status=="error"){
	fileList=[];
	_antd.message.error("上传图片失败!");
	}
	if(fileList[0].status=="done"){
	fileList[0].url=''+fileList[0].response.url;
	this.setState({
	accessory:{
	name:fileList[0].name,
	link:fileList[0].url}});
	
	
	}
	}else{
	this.setState({
	accessory:{
	name:"",
	link:""}});
	
	
	}
	
	this.setState({fileList:fileList,loading:false});
	}},{key:'render',value:function render()
	
	{var
	getFieldDecorator=this.props.form.getFieldDecorator;
	var formItemLayout={
	labelCol:{span:3},
	wrapperCol:{span:14}};
	
	return(
	_react2.default.createElement(_antd.Spin,{spinning:this.state.loading,tip:'Loading...'},
	_react2.default.createElement(_antd.Form,null,
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u6807\u9898',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.title",{
	rules:[{require:true,message:"请输入标题!"}],
	initialValue:this.state.project.title})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u7C7B\u522B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.category",{
	initialValue:"4"})(
	
	_react2.default.createElement(_antd.Select,{disabled:true},
	_react2.default.createElement(Option,{value:'1'},'\u503A\u6743'),
	_react2.default.createElement(Option,{value:'2'},'\u80A1\u6743'),
	_react2.default.createElement(Option,{value:'4'},'\u8D44\u91D1\u8F6C\u8BA9')))),
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u9879\u76EE\u7C7B\u578B',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.type",{
	rules:[{
	required:true,
	message:"请选择项目类型!"}],
	
	initialValue:this.state.project.type})(
	
	_react2.default.createElement(_antd.Select,{disabled:this.state.disabled},
	
	this.state.assetsType.assetsAcquisition.map(function(item){
	return _react2.default.createElement(Option,{value:item.key,key:item.key},item.value);
	})))),
	
	
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u8D44\u4EA7\u8F6C\u8BA9\u4EBA'}),
	
	_react2.default.createElement('div',null,'\u8BE6\u89C1\u6211\u7684\u8054\u7CFB\u65B9\u5F0F')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u8D44\u4EA7\u6240\u5728\u5730',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("assets.region",{
	rules:[{
	required:true,
	message:"请选择资产所在地!"}],
	
	initialValue:this.state.assets.region})(
	
	_react2.default.createElement(_antd.Cascader,{disabled:this.state.disabled,
	options:this.state.cascaderRegion}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u8F6C\u8BA9\u91D1\u989D',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("assets.number",{
	rules:[{
	required:true,
	message:"请输入转让金额!"}],
	
	initialValue:this.state.assets.number})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({
	required:true},
	formItemLayout,{
	label:'\u8D44\u4EA7\u4EF7\u503C',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("assets.value",{
	rules:[{
	required:true,
	message:"请输入资产价值!"}],
	
	initialValue:this.state.assets.value})(
	
	_react2.default.createElement(_antd.Input,{disabled:this.state.disabled,style:{width:"93%"}})),
	
	_react2.default.createElement('span',{className:'ant-form-text',style:{marginLeft:7}},'\u4E07\u5143')),
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u9879\u76EE\u8BE6\u60C5',
	hasFeedback:!this.state.disabled}),
	
	getFieldDecorator("project.detail",{
	rules:[{require:true,message:"请输入项目详情!"}],
	initialValue:this.state.project.detail})(
	
	_react2.default.createElement(TextArea,{disabled:this.state.disabled,autosize:{minRows:3}}))),
	
	
	_react2.default.createElement(FormItem,(0,_extends3.default)({},
	formItemLayout,{
	label:'\u9644\u4EF6'}),
	
	_react2.default.createElement(_antd.Upload,{
	name:'file',
	action:'/admin/upload',
	fileList:this.state.fileList,
	onChange:this.uploadChange},
	
	_react2.default.createElement(_antd.Button,null,
	_react2.default.createElement(_antd.Icon,{type:'upload'}),'\u4E0A\u4F20\u6587\u4EF6'))),
	
	
	
	_react2.default.createElement(FormItem,{wrapperCol:{span:8,offset:3}},
	
	!this.state.disabled?_react2.default.createElement(_antd.Button,{type:'primary',onClick:this.handleSubmit,style:{"marginRight":"20px"}},'\u7ACB\u5373\u53D1\u5E03'):"",
	
	
	!this.state.disabled?_react2.default.createElement(_antd.Button,{type:'danger',onClick:this.resetForm,style:{"marginRight":"20px"}},'\u91CD\u7F6E'):"",
	
	_react2.default.createElement(_antd.Button,{icon:'rollback',onClick:this.return},'\u8FD4\u56DE')))));
	
	
	
	
	}}]);return TransferForm;}(_react2.default.Component);
	
	
	var WrappedTransferForm=_antd.Form.create({})(TransferForm);
	
	module.exports=WrappedTransferForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1273)))

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(286);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(291);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(292);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(296);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(330);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _antd=__webpack_require__(338);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var
	InvestItem=function(_React$Component){(0,_inherits3.default)(InvestItem,_React$Component);
	function InvestItem(props){(0,_classCallCheck3.default)(this,InvestItem);var _this=(0,_possibleConstructorReturn3.default)(this,(InvestItem.__proto__||(0,_getPrototypeOf2.default)(InvestItem)).call(this,
	props));
	
	var value=_this.props.value||{};
	_this.state={
	min:value.min||0,
	max:value.max||0};
	
	['handleMinChange','handleMaxChange','triggerChange'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(InvestItem,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
	nextProps){
	
	if('value'in nextProps){
	var value=nextProps.value;
	this.setState(value);
	}
	}},{key:'handleMinChange',value:function handleMinChange(
	
	e){
	var min=e.target.value;
	if(!('value'in this.props)){
	this.setState({min:min});
	}
	this.triggerChange({min:min});
	}},{key:'handleMaxChange',value:function handleMaxChange(
	
	e){
	var max=parseInt(e.target.value||0,10);
	if(!('value'in this.props)){
	this.setState({max:max});
	}
	this.triggerChange({max:max});
	}},{key:'triggerChange',value:function triggerChange(
	
	changedValue){
	
	var onChange=this.props.onChange;
	if(onChange){
	onChange((0,_extends3.default)({},this.state,changedValue));
	}
	}},{key:'render',value:function render()
	
	{
	return(
	_react2.default.createElement('span',null,
	_react2.default.createElement(_antd.Input,{type:'text',value:this.state.min,onChange:this.handleMinChange,style:{width:'20%'},disabled:this.props.disabled}),'\xA0\xA0\u2014\u2014\xA0\xA0',
	_react2.default.createElement(_antd.Input,{type:'text',value:this.state.max,onChange:this.handleMaxChange,style:{width:'20%'},disabled:this.props.disabled}),'\u4E07\u5143'));
	
	
	}}]);return InvestItem;}(_react2.default.Component);
	
	
	module.exports=InvestItem;

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Edit=undefined;var _getPrototypeOf=__webpack_require__(286);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(291);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(292);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(296);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(330);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(178);
	var _antd=__webpack_require__(338);
	
	var _debtsForm=__webpack_require__(1445);var _debtsForm2=_interopRequireDefault(_debtsForm);
	var _stockForm=__webpack_require__(1446);var _stockForm2=_interopRequireDefault(_stockForm);
	var _transferForm=__webpack_require__(1448);var _transferForm2=_interopRequireDefault(_transferForm);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Content=_antd.Layout.Content;var
	
	Edit=exports.Edit=function(_React$Component){(0,_inherits3.default)(Edit,_React$Component);
	function Edit(props){(0,_classCallCheck3.default)(this,Edit);return(0,_possibleConstructorReturn3.default)(this,(Edit.__proto__||(0,_getPrototypeOf2.default)(Edit)).call(this,
	props));
	}(0,_createClass3.default)(Edit,[{key:'render',value:function render()
	
	{
	return(
	_react2.default.createElement(_antd.Layout,{style:{padding:'0 24px 24px'}},
	_react2.default.createElement(_antd.Breadcrumb,{style:{margin:'12px 0'}},
	
	this.props.routes.map(function(item,index){
	return _react2.default.createElement(_antd.Breadcrumb.Item,{key:''},item.breadcrumbName);
	})),
	
	
	_react2.default.createElement(Content,{style:{background:'#fff',padding:24,margin:0,minHeight:280}},
	
	this.props.location.query.assetsType==1?_react2.default.createElement(_debtsForm2.default,{infoID:this.props.params.id,actionType:'edit'}):this.props.location.query.assetsType==2?_react2.default.createElement(_stockForm2.default,{infoID:this.props.params.id,actionType:'edit'}):_react2.default.createElement(_transferForm2.default,{infoID:this.props.params.id,actionType:'edit'}))));
	
	
	
	
	}}]);return Edit;}(_react2.default.Component);
	
	
	module.exports=Edit;

/***/ })

});
//# sourceMappingURL=delegateProject_edit.571dc71d16fe941a0662.chunk.js.map
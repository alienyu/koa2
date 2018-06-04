webpackJsonp([1],{

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _getPrototypeOf=__webpack_require__(339);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(349);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(383);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _antd=__webpack_require__(391);
	
	var _header=__webpack_require__(1325);var _header2=_interopRequireDefault(_header);
	var _footer=__webpack_require__(1424);var _footer2=_interopRequireDefault(_footer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Content=_antd.Layout.Content;var
	
	App=function(_React$Component){(0,_inherits3.default)(App,_React$Component);
	function App(props){(0,_classCallCheck3.default)(this,App);var _this=(0,_possibleConstructorReturn3.default)(this,(App.__proto__||(0,_getPrototypeOf2.default)(App)).call(this,
	props));
	_this.state={};return _this;
	}(0,_createClass3.default)(App,[{key:'render',value:function render()
	
	{
	return(
	_react2.default.createElement(_antd.Layout,null,
	_react2.default.createElement(_header2.default,null),
	_react2.default.createElement(Content,{style:{background:'#f3f3f3'}},
	this.props.children),
	
	_react2.default.createElement(_footer2.default,null)));
	
	
	}}]);return App;}(_react2.default.Component);
	
	module.exports=App;

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax, common) {'use strict';var _getPrototypeOf=__webpack_require__(339);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(349);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(383);var _inherits3=_interopRequireDefault(_inherits2);var _class;var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(232);
	var _antd=__webpack_require__(391);
	
	
	var _mobxReact=__webpack_require__(1419);
	var _userStore=__webpack_require__(1421);var _userStore2=_interopRequireDefault(_userStore);
	var _menuStore=__webpack_require__(1422);var _menuStore2=_interopRequireDefault(_menuStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Header=_antd.Layout.Header;var SubMenu=_antd.Menu.SubMenu;var
	
	
	bizHeader=(0,_mobxReact.observer)(_class=function(_React$Component){(0,_inherits3.default)(bizHeader,_React$Component);
	function bizHeader(props){(0,_classCallCheck3.default)(this,bizHeader);var _this=(0,_possibleConstructorReturn3.default)(this,(bizHeader.__proto__||(0,_getPrototypeOf2.default)(bizHeader)).call(this,
	props));
	['handleClick','logout'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(bizHeader,[{key:'logout',value:function logout()
	
	{
	ajax({
	url:"/common/logout",
	callback:function callback(data){
	_userStore2.default.clearUserInfo();
	_reactRouter.hashHistory.push("/");
	}});
	
	}},{key:'handleClick',value:function handleClick(
	
	e){
	if(e.key=='/space'){
	if(_userStore2.default.userInfo.name||common.getUserInfo("name")){
	_reactRouter.hashHistory.push('/'+_userStore2.default.userInfo.type+'/space');
	}else{
	_antd.message.error("请先登录!",1,function(){
	_reactRouter.hashHistory.push("/common/login");
	});
	}
	_menuStore2.default.changeSpaceMenu('/'+_userStore2.default.userInfo.type+'/space');
	}else{
	_reactRouter.hashHistory.push(e.key);
	}
	console.log(e.key);
	_menuStore2.default.changeHeaderMenu(e.key);
	}},{key:'render',value:function render()
	
	{
	var userName=_userStore2.default.userInfo.name||common.getUserInfo("name");
	var logoImg=__webpack_require__(1423);
	var currentPath=_menuStore2.default.currentHeaderMenu;
	return(
	_react2.default.createElement(Header,{className:'header'},
	_react2.default.createElement('div',{className:'userInfoFrame'},
	_react2.default.createElement(_antd.Row,{className:'userInfo'},
	_react2.default.createElement(_antd.Col,{span:6,className:'help'},'\u5BA2\u670D\u70ED\u7EBF: 4008-333-888'),
	_react2.default.createElement(_antd.Col,{span:6,offset:12,className:'right'},
	_react2.default.createElement('a',{href:'javascript:;',className:'share'},'\u5206\u4EAB'),
	_react2.default.createElement('a',{href:'javascript:;',className:'download'},'\u4E0B\u8F7D\u624B\u673A\u7248'),
	userName?
	_react2.default.createElement(_antd.Tooltip,{placement:'bottom',title:_react2.default.createElement('a',{href:'javascript:;',onClick:this.logout},'\u9000\u51FA')},_react2.default.createElement('span',{className:'userName'},userName)):
	_react2.default.createElement('span',null,_react2.default.createElement(_reactRouter.Link,{to:'/common/login?returnUrl=xxx',className:'btn'},'\u767B\u5F55'),'\xA0\xA0|\xA0\xA0',
	_react2.default.createElement(_reactRouter.Link,{to:'/common/register',className:'btn'},'\u6CE8\u518C'))))),
	
	
	
	
	_react2.default.createElement('div',{className:'menuFrame'},
	_react2.default.createElement(_antd.Row,{className:'menu'},
	_react2.default.createElement(_antd.Col,{span:6},
	_react2.default.createElement(_reactRouter.Link,{to:'/',className:'logo'},
	_react2.default.createElement('img',{src:logoImg}))),
	
	
	_react2.default.createElement(_antd.Col,{span:14,offset:4,className:'right'},
	_react2.default.createElement(_antd.Menu,{
	onClick:this.handleClick,
	selectedKeys:[currentPath],
	mode:'horizontal'},
	
	_react2.default.createElement(_antd.Menu.Item,{key:'/'},'\u9996\u9875'),
	_react2.default.createElement(SubMenu,{title:'\u8D44\u91D1',key:'/fund/list'},
	_react2.default.createElement(_antd.Menu.Item,{key:'/fund/list/debts'},'\u503A\u6743\u8D44\u91D1'),
	_react2.default.createElement(_antd.Menu.Item,{key:'/fund/list/stock'},'\u80A1\u6743\u8D44\u91D1'),
	_react2.default.createElement(_antd.Menu.Item,{key:'/fund/list/purchase'},'\u8D44\u4EA7\u6536\u8D2D\u8D44\u91D1')),
	
	_react2.default.createElement(SubMenu,{title:'\u9879\u76EE',key:'/project/list'},
	_react2.default.createElement(_antd.Menu.Item,{key:'/project/list/debts'},'\u503A\u6743\u9879\u76EE'),
	_react2.default.createElement(_antd.Menu.Item,{key:'/project/list/stock'},'\u80A1\u6743\u9879\u76EE'),
	_react2.default.createElement(_antd.Menu.Item,{key:'/project/list/transfer'},'\u8D44\u4EA7\u8F6C\u8BA9\u9879\u76EE')),
	
	_react2.default.createElement(_antd.Menu.Item,{key:'/entrust'},'\u59D4\u6258'),
	_react2.default.createElement(_antd.Menu.Item,{key:'/space'},'\u4E2A\u4EBA\u4E2D\u5FC3')))))));
	
	
	
	
	
	
	}}]);return bizHeader;}(_react2.default.Component))||_class;
	
	
	module.exports=bizHeader;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1326), __webpack_require__(1418)))

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(mask, $) {'use strict';var _stringify=__webpack_require__(1328);var _stringify2=_interopRequireDefault(_stringify);var _extends2=__webpack_require__(299);var _extends3=_interopRequireDefault(_extends2);var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(232);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	var perConf=__webpack_require__(1330);
	var mode=perConf.mode;
	
	module.exports=function(ops){
	var config=(0,_extends3.default)({
	url:"",
	data:"",
	callback:function callback(){}},
	ops);
	if(config.url.match(/^\//)){config.url=config.url.substr(1,config.url.length);}
	mask.showMask();
	if(mode=="local"){
	mask.hideMask();
	var data=__webpack_require__(1331)("./"+config.url+".json");
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
	url:"/pc/"+config.url,
	type:"post",
	headers:{token:localStorage.getItem("token")},
	contentType:"application/json; charset=utf-8",
	data:(0,_stringify2.default)(config.data),
	success:function success(data){
	mask.hideMask();
	if(data.status==1001){
	var currentPath=location.hash.split("#")[1].split("?")[0];
	_reactRouter.hashHistory.push({
	pathname:"/common/login",
	search:"?returnPath="+currentPath});
	
	}else if(data.status!=200){
	message.error(data.errMsg,1);
	}else{
	config.callback.call(this,data.data);
	}
	}});
	
	}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52), __webpack_require__(1327)))

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(1329), __esModule: true };

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(305);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),

/***/ 1330:
/***/ (function(module, exports) {

	module.exports = {"host":"","projectPath":"sunnyFinancing","pageName":"biz","platform":"web","mode":""}

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./about/getNewsDetail.json": 1332,
		"./about/getNewsList.json": 1333,
		"./about/getReportDetail.json": 1334,
		"./about/getReportList.json": 1335,
		"./activity/enroll.json": 1336,
		"./activity/getInfoDetail.json": 1337,
		"./activity/getInfoList.json": 1338,
		"./activity/getPayQRCode.json": 1339,
		"./common/forgotPwd.json": 1340,
		"./common/getMsgCaptcha.json": 1341,
		"./common/getSEOLink.json": 1342,
		"./common/login.json": 1343,
		"./common/logout.json": 1344,
		"./common/refreshCaptcha.json": 1345,
		"./common/register.json": 1346,
		"./common/upload.json": 1347,
		"./fund/deliver/delete.json": 1348,
		"./fund/deliver/getInfoList.json": 1349,
		"./fund/deliverProject.json": 1350,
		"./fund/draft/delete.json": 1351,
		"./fund/draft/getInfoList.json": 1352,
		"./fund/favorite/delete.json": 1353,
		"./fund/favorite/getInfoList.json": 1354,
		"./fund/feedback/getInfoList.json": 1355,
		"./fund/feedback/readInfo.json": 1356,
		"./fund/getDelegateInfoDetail.json": 1357,
		"./fund/getDetailContactInfo.json": 1358,
		"./fund/getInfoList.json": 1359,
		"./fund/getNormalInfoDetail.json": 1360,
		"./fund/list/getFilterInfo.json": 1361,
		"./fund/publish/doPublish.json": 1362,
		"./fund/publish/getInfoDetail.json": 1363,
		"./fund/publish/saveDraft.json": 1364,
		"./fund/published/delete.json": 1365,
		"./fund/published/getInfoList.json": 1366,
		"./fund/published/setProcess.json": 1367,
		"./fund/seen/getInfoList.json": 1368,
		"./fund/setFavorite.json": 1369,
		"./fund/submitReport.json": 1370,
		"./fund/subscription/getInfoList.json": 1371,
		"./fund/subscription/getSetting.json": 1372,
		"./fund/subscription/updateSetting.json": 1373,
		"./help/getQaDetail.json": 1374,
		"./help/getQaList.json": 1375,
		"./help/submitFeedback.json": 1376,
		"./home/getAllInfo.json": 1377,
		"./info/checkPayResult.json": 1378,
		"./info/getAuthInfo.json": 1379,
		"./info/getBasicInfo.json": 1380,
		"./info/getPayQRCode.json": 1381,
		"./info/getPayQRID.json": 1382,
		"./info/getPersonalInfo.json": 1383,
		"./info/searchAccountRecord.json": 1384,
		"./info/setAuth.json": 1385,
		"./info/setPersonalInfo.json": 1386,
		"./notice/getInfoDetail.json": 1387,
		"./notice/getInfoList.json": 1388,
		"./pay/createOrder.json": 1389,
		"./pay/getOrderStatus.json": 1390,
		"./pay/qrCodePay.json": 1391,
		"./project/deliver/delete.json": 1392,
		"./project/deliver/getInfoList.json": 1393,
		"./project/deliverFund.json": 1394,
		"./project/draft/delete.json": 1395,
		"./project/draft/getInfoList.json": 1396,
		"./project/favorite/delete.json": 1397,
		"./project/favorite/getInfoList.json": 1398,
		"./project/feedback/getInfoList.json": 1399,
		"./project/feedback/readInfo.json": 1400,
		"./project/getDelegateInfoDetail.json": 1401,
		"./project/getDetailContactInfo.json": 1402,
		"./project/getInfoList.json": 1403,
		"./project/getNormalInfoDetail.json": 1404,
		"./project/list/getFilterInfo.json": 1405,
		"./project/publish/doPublish.json": 1406,
		"./project/publish/getInfoDetail.json": 1407,
		"./project/publish/saveDraft.json": 1408,
		"./project/published/delete.json": 1409,
		"./project/published/getInfoList.json": 1410,
		"./project/published/setProcess.json": 1411,
		"./project/seen/getInfoList.json": 1412,
		"./project/setFavorite.json": 1413,
		"./project/submitReport.json": 1414,
		"./project/subscription/getInfoList.json": 1415,
		"./project/subscription/getSetting.json": 1416,
		"./project/subscription/updateSetting.json": 1417
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
	webpackContext.id = 1331;


/***/ }),

/***/ 1332:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","date":"2017-12-12","source":"新华网","content":"<p>从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成</p>"}}

/***/ }),

/***/ 1333:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"current":4,"total":123,"infoList":[{"id":"1","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"2","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"3","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的成从一开始网络的形成"},{"id":"4","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"5","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"6","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"}]}}

/***/ }),

/***/ 1334:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","date":"2017-12-12","source":"新华网","content":"<p>从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成</p>"}}

/***/ }),

/***/ 1335:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"current":4,"total":123,"infoList":[{"id":"1","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"2","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"3","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的成从一开始网络的形成"},{"id":"4","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"5","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"},{"id":"6","date":"2017/12/12","title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","abstractContent":"从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成"}]}}

/***/ }),

/***/ 1336:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"type":1}}

/***/ }),

/***/ 1337:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","date":"2017-12-12","source":"新华网","content":"<p>活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容</p>","img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517041571&di=5f3d1736d0d6c8aa3b5f4565a3eb0839&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019d425628813032f8755701ad9912.jpg","info":{"startTime":"2017-11-11 08:00","endTime":"2017-11-11 15:00","address":"徐汇区桂平南路1988号一楼","invited":"张华生 李国宁","phone":"021-123123123","fees":"20","limitNum":"30"}}}

/***/ }),

/***/ 1338:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"current":4,"total":123,"infoList":[{"id":1,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-10-21"},{"id":2,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-10-22"},{"id":3,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-10-21"},{"id":4,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-11-21"},{"id":5,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-12-21"},{"id":11,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-10-21"},{"id":12,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-10-22"},{"id":13,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-10-21"},{"id":14,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-11-21"},{"id":15,"title":"活动标题活动标题活动标题活动标题活动标题活动标题活动标题","date":"2017-12-21"}]}}

/***/ }),

/***/ 1339:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"fee":11,"startTime":"2017-11-11","title":"国安大咖说第三期","payQRCode":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=683886776,1786348428&fm=11&gp=0.jpg"}}

/***/ }),

/***/ 1340:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1341:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1342:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"SEOLink":[{"link":"http://www.baidu.com","value":"百度"},{"link":"http://www.baidu.com","value":"百度"},{"link":"http://www.baidu.com","value":"百度"}]}}

/***/ }),

/***/ 1343:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"userInfo":{"name":"alienyu","type":"project"},"token":"fsdgdgf"}}

/***/ }),

/***/ 1344:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1345:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"captchaImg":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2554149881,1906419828&fm=27&gp=0.jpg"}}

/***/ }),

/***/ 1346:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"userInfo":{"name":"alienyu","type":"fund"},"token":"fsdgdgf"}}

/***/ }),

/***/ 1347:
/***/ (function(module, exports) {

	module.exports = {"error":0,"url":"http://img1.imgtn.bdimg.com/it/u=1794894692,1423685501&fm=27&gp=0.jpg"}

/***/ }),

/***/ 1348:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1349:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"title":"委托项目委托项目委托项目委托项目委托项目","time":"2017-01-21","content":"委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目","accessory":{"name":"投递标书","link":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}},{"id":2,"title":"委托项目委托项目委托项目委托项目委托项目","time":"2017-01-22","content":"委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目","accessory":{"name":"投递标书","link":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}},{"id":3,"title":"委托项目委托项目委托项目委托项目委托项目","time":"2017-02-21","content":"委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目委托项目","accessory":{"name":"投递标书","link":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}}]}}

/***/ }),

/***/ 1350:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1351:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1352:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"]},{"id":2,"category":"1","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"]},{"id":3,"category":"3","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"]}]}}

/***/ }),

/***/ 1353:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1354:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"total":452,"infoList":[{"id":1,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"feature":"normal"},{"id":2,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"feature":"delegate"},{"id":3,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":0,"feature":"normal"}]}}

/***/ }),

/***/ 1355:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"total":214,"infoList":[{"id":1,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":11}},{"id":2,"name":"我大大","status":0,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":12}},{"id":3,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":13}},{"id":4,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":13}},{"id":5,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":13}},{"id":6,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":13}},{"id":73,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":13}},{"id":13,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","fundDetail":{"name":"上海地产融资1亿","id":13}}]}}

/***/ }),

/***/ 1356:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1357:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"fundInfo":{"title":"上海南京路万达广场建设项目","date":"2017-10-11","status":1,"categoryText":"股权","stockTypeText":"参股型投资","typeText":"成长型","industryText":"房地产","regionText":"浙江省, 江苏省, 上海市","lastYearProfit":12,"investMin":300,"investMax":566,"deadlineMin":1,"deadlineMax":5,"minRate":3.55,"isNeesMortgage":1,"mortgageType":"固有资产，其他","mortgageRateMin":2.33,"mortgageRateMax":3.55,"isNeedGuarantee":1,"guaranteeMethod":"担保方式","estimateBenefitsText":"6倍今年净利润","needCost":1,"content":"项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍","attachment":{"name":"万达广场项目计划书.doc","link":"/ssss"},"favoriteNum":11,"hasFavorite":false,"hasDelivered":false},"contactInfo":{"department":"技术研发部","position":"高级工程师","name":"刘国柱","phone":"021-123123131","mobile":"139189123123","email":"5233523@qqq.com"}}}

/***/ }),

/***/ 1358:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"canSeen":1,"contactInfo":{"memberType":"阳光融资资金方","companyName":"阳光融资有限公司","department":"技术研发部","position":"高级工程师","name":"你买鸡","phone":"021-123123131","mobile":"139189123123","email":"5233523@qqq.com"}}}

/***/ }),

/***/ 1359:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"current":4,"total":123,"fundList":[{"id":1,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1,"delegate":false},{"id":2,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1,"delegate":true},{"id":3,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1,"delegate":false},{"id":43,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":0,"delegate":true},{"id":4,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1,"delegate":false},{"id":5,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":0,"delegate":false},{"id":63,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1,"delegate":false}]}}

/***/ }),

/***/ 1360:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"fundInfo":{"title":"上海南京路万达广场建设项目","date":"2017-10-11","status":1,"categoryText":"股权","stockTypeText":"参股型投资","typeText":"成长型","industryText":"房地产","regionText":"浙江省, 江苏省, 上海市","lastYearProfit":12,"investMin":300,"investMax":566,"deadlineMin":1,"deadlineMax":5,"minRate":3.55,"isNeesMortgage":1,"mortgageType":"固有资产，其他","mortgageRateMin":2.33,"mortgageRateMax":3.55,"isNeedGuarantee":1,"guaranteeMethod":"担保方式","estimateBenefitsText":"6倍今年净利润","needCost":1,"content":"项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍","attachment":{"name":"万达广场项目计划书.doc","link":"/ssss"},"seenNum":12,"favoriteNum":11,"reportNum":5,"hasSeen":false,"hasFavorite":false,"hasReport":false},"contactInfo":{"memberType":"阳光融资资金方","companyName":"阳光融资有限公司","department":"技术研发部","position":"高级工程师","name":"刘国柱","phone":"021-123123131","mobile":"139189123123","email":"5233523@qqq.com"}}}

/***/ }),

/***/ 1361:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"debts":[{"value":"房地产抵押融资","key":"1"},{"value":"金融股权质押融资","key":"2"},{"value":"股票质押融资","key":"3"},{"value":"应收款质押融资(保理)","key":"4"},{"value":"政府平台融资(PPP)","key":"5"},{"value":"融资租赁","key":"6"},{"value":"短期过桥","key":"7"},{"value":"其他","key":"8"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assets":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}],"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"province_list":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","810000":"香港特别行政区","820000":"澳门特别行政区"},"financingNumList":[{"key":1,"value":"99万以下"},{"key":2,"value":"100万-499万"},{"key":3,"value":"500万-999万"},{"key":4,"value":"1000万-4999万"},{"key":5,"value":"5000万-9999万"},{"key":6,"value":"1亿-4.99亿"},{"key":7,"value":"5亿-9.99亿"},{"key":8,"value":"10亿以上"}]}}

/***/ }),

/***/ 1362:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1363:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"assetsType":{"debts":[{"value":"房地产抵押融资","key":"1"},{"value":"金融股权质押融资","key":"2"},{"value":"股票质押融资","key":"3"},{"value":"应收款质押融资(保理)","key":"4"},{"value":"政府平台融资(PPP)","key":"5"},{"value":"融资租赁","key":"6"},{"value":"短期过桥","key":"7"},{"value":"其他","key":"8"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assetsAcquisition":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}]},"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"provinceList":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","810000":"香港特别行政区","820000":"澳门特别行政区"},"key":"ZJ7f2137777","title":"资金标题","category":"1","stockType":"2","type":["1","3"],"industry":["1","3","5","6"],"region":["110000","440000"],"financingProfits":{"isNeed":"0","number":22},"invest":{"min":22,"max":555},"deadline":{"min":2,"max":6},"minRate":22,"mortgage":{"isNeed":"0","type":["2","3"],"rate":{"min":4,"max":20}},"guarantee":{"isNeed":"1","method":"自保"},"estimateBenefits":{"times":21,"type":"1"},"needCost":"1","companyProfits":{"isNeed":"1","number":245},"detail":"资金详情","accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}}}

/***/ }),

/***/ 1364:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1365:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1366:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"category":"2","title":"普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1},{"id":2,"category":"1","title":"普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1},{"id":3,"category":"3","title":"普通资金普通资金普通资金普通资金普通资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":0}]}}

/***/ }),

/***/ 1367:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1368:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"total":452,"infoList":[{"id":1,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"feature":"normal"},{"id":2,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"feature":"delegate"},{"id":3,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":0,"feature":"normal"}]}}

/***/ }),

/***/ 1369:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1370:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1371:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"total":452,"infoList":[{"id":1,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"feature":"normal"},{"id":2,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"feature":"delegate"},{"id":3,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":0,"feature":"normal"}]}}

/***/ }),

/***/ 1372:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"debts":[{"value":"开发商项目","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assets":[{"value":"开发商","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"province_list":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","810000":"香港特别行政区","820000":"澳门特别行政区"},"selectedDebtsProjectType":[1,2],"selectedDebtsIndustry":[1,3,5],"selectedDebtsRegion":["110000","120000","130000"],"debtsNumMin":12,"debtsNumMax":213,"selectedStockType":[1,2],"selectedStockProjectType":[2,3,4],"selectedStockIndustry":[1,2,3],"selectedStockRegion":["210000","220000"],"stockBenefit":{"isLimit":1,"num":21},"stockNumMin":45,"stockNumMax":234,"selectedTransferProjectType":[2],"selectedTransferRegion":["510000","520000","530000"],"transferNumMin":75,"transferNumMax":325,"email":"6043254322@qq.com"}}

/***/ }),

/***/ 1373:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1374:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"title":"阳光融资是什么类型的公司","date":"2017-12-12","source":"新华网","content":"<p>从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成,从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成从一开始网络的形成</p>"}}

/***/ }),

/***/ 1375:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"infoList":[{"id":1,"title":"阳光融资是什么类型的公司?"},{"id":2,"title":"阳光融资是什么类型的公司?"},{"id":3,"title":"阳光融资是什么类型的公司?"},{"id":4,"title":"阳光融资是什么类型的公司?"},{"id":5,"title":"阳光融资是什么类型的公司?"},{"id":6,"title":"阳光融资是什么类型的公司?"}]}}

/***/ }),

/***/ 1376:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1377:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"banner":[{"image":"http://img.zcool.cn/community/0175c456cc1fdf6ac7252ce6a0b696.jpg@1280w_1l_2o_100sh.jpg","link":"/fund/detail/2"},{"image":"http://img.zcool.cn/community/016c0e56fa52066ac725794827d909.jpg","link":"/project/detail/3"},{"image":"http://img.zcool.cn/community/01017d5648b5e532f87512f6835467.png","link":"/project/detail/3"}],"noticeInfo":[{"id":1,"text":"阳光融资公告示例阳光融资公告示例阳光融资公告示例","date":"2017年8月19日"},{"id":2,"text":"阳光融资公告示例阳光融资公告示例阳光融资公告示例","date":"2017年10月19日"},{"id":3,"text":"阳光融资公告示例阳光融资公告示例阳光融资公告示例","date":"2017年11月19日"},{"id":4,"text":"阳光融资公告示例阳光融资公告示例阳光融资公告示例","date":"2017年12月19日"}],"activityInfo":[{"id":1,"text":"阳光融资活动示例阳光融资活动示例阳光融资活动示例","date":"2017年11月19日"},{"id":2,"text":"阳光融资活动示例阳光融资活动示例阳光融资活动示例","date":"2017年8月12日"},{"id":3,"text":"阳光融资活动示例阳光融资活动示例阳光融资活动示例","date":"2017年5月19日"},{"id":4,"text":"阳光融资活动示例阳光融资活动示例阳光融资活动示例","date":"2017年7月19日"}],"fundList":{"debts":[{"id":1,"title":"债权资金标题债权资金标题债权资金标题","date":"2017-08-12"},{"id":2,"title":"债权资金标题债权资金标题债权资金标题","date":"2017-08-12"},{"id":3,"title":"债权资金标题债权资金标题债权资金标题","date":"2017-08-12"},{"id":4,"title":"债权资金标题债权资金标题债权资金标题","date":"2017-08-12"}],"stock":[{"id":1,"title":"股权资金标题股权资金标题股权资金标题","date":"2017-08-12"},{"id":2,"title":"股权资金标题股权资金标题股权资金标题","date":"2017-08-12"},{"id":3,"title":"股权资金标题股权资金标题股权资金标题","date":"2017-08-12"},{"id":4,"title":"股权资金标题股权资金标题股权资金标题","date":"2017-08-12"},{"id":5,"title":"股权资金标题股权资金标题股权资金标题","date":"2017-08-12"}],"purchase":[{"id":1,"title":"资产收购标题资产收购标题资产收购标题","date":"2017-08-12"},{"id":2,"title":"资产收购标题资产收购标题资产收购标题","date":"2017-08-12"},{"id":3,"title":"资产收购标题资产收购标题资产收购标题","date":"2017-08-12"},{"id":4,"title":"资产收购资产收购资产收购资产收购资产收购","date":"2017-08-12"}]},"projectList":{"debts":[{"id":1,"title":"债权项目标题债权项目标题债权项目标题","date":"2017-08-12"},{"id":2,"title":"债权项目标题债权项目标题债权项目标题","date":"2017-08-12"},{"id":3,"title":"债权项目标题债权项目标题债权项目标题","date":"2017-08-12"},{"id":4,"title":"债权项目标题债权项目标题债权项目标题","date":"2017-08-12"}],"stock":[{"id":1,"title":"股权项目标题股权项目标题股权项目标题","date":"2017-08-12"},{"id":2,"title":"股权项目标题股权项目标题股权项目标题","date":"2017-08-12"},{"id":3,"title":"股权项目标题股权项目标题股权项目标题","date":"2017-08-12"},{"id":4,"title":"股权项目标题股权项目标题股权项目标题","date":"2017-08-12"}],"transfer":[{"id":1,"title":"资产转让标题资产转让标题资产转让标题","date":"2017-08-12"},{"id":2,"title":"资产转让标题资产转让标题资产转让标题","date":"2017-08-12"},{"id":3,"title":"资产转让标题资产转让标题资产转让标题","date":"2017-08-12"},{"id":4,"title":"资产转让标题资产转让标题资产转让标题","date":"2017-08-12"}]},"delegateFund":[{"id":1,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1},{"id":2,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1},{"id":3,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1}],"delegateProject":[{"id":1,"title":"委托项目委托项目委托项目委托项目委托项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1},{"id":2,"title":"委托项目委托项目委托项目委托项目委托项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1},{"id":3,"title":"委托项目委托项目委托项目委托项目委托项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1}]}}

/***/ }),

/***/ 1378:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"hasComplete":false,"paySuccess":true}}

/***/ }),

/***/ 1379:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"featureList":[{"key":1,"value":"银行"},{"key":2,"value":"信托"},{"key":3,"value":"券商"},{"key":4,"value":"公墓基金及子公司"},{"key":5,"value":"保险公司"},{"key":6,"value":"四大资产"},{"key":7,"value":"上市公司"},{"key":8,"value":"私募基金"},{"key":9,"value":"投资公司"},{"key":10,"value":"实体企业"},{"key":11,"value":"小贷公司"},{"key":12,"value":"其他"}],"uploader":{"bizLicence":"http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg","company":"http://img5.imgtn.bdimg.com/it/u=12867320,655225767&fm=27&gp=0.jpg","personal":"http://img5.imgtn.bdimg.com/it/u=547138142,3998729701&fm=27&gp=0.jpg","certification":"http://img4.imgtn.bdimg.com/it/u=1611505379,380489200&fm=214&gp=0.jpg"},"feature":4}}

/***/ }),

/***/ 1380:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"basicInfo":{"hasUploadAvatar":false,"avatarImg":"http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg","firstName":"於","lastName":"永健","cuteName":"金麦基","gender":2,"regionSelectedResult":"101112","companyName":"上海巨富事业","department":"技术部","position":"开发","companyInfo":"阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资","phone":"242342342323","mobile":"1391482342","mobileShow":0,"email":"53204234@qq.com","accountNum":213.43,"published":123,"delivered":213,"feedback":5,"authStatus":"0","cascaderRegion":[{"value":"0","label":"浙江","children":[{"value":"1","label":"杭州","children":[{"value":"2","label":"西湖"}]}]},{"value":"10","label":"江苏","children":[{"value":"11","label":"南京","children":[{"value":"12","label":"中华门"}]}]}]}}}

/***/ }),

/***/ 1381:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"payQRCode":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=683886776,1786348428&fm=11&gp=0.jpg"}}

/***/ }),

/***/ 1382:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"orderID":1}}

/***/ }),

/***/ 1383:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"basicInfo":{"hasUploadAvatar":false,"avatarImg":"http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg","firstName":"於","lastName":"永健","cuteName":"金麦基","gender":2,"regionSelectedResult":"101112","companyName":"上海巨富事业","department":"技术部","position":"开发","companyInfo":"阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资阳光融资","phone":"242342342323","mobile":"1391482342","mobileShow":0,"email":"53204234@qq.com","accountNum":213.43,"published":123,"delivered":213,"feedback":5,"authStatus":"0","cascaderRegion":[{"value":"0","label":"浙江","children":[{"value":"1","label":"杭州","children":[{"value":"2","label":"西湖"}]}]},{"value":"10","label":"江苏","children":[{"value":"11","label":"南京","children":[{"value":"12","label":"中华门"}]}]}]}}}

/***/ }),

/***/ 1384:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"total":123,"recordList":[{"recordID":"CZ3543435345343453","time":"2018-01-01","desc":"充值","recordNum":"+100","accountLeft":"3000"},{"recordID":"CZ354342131245343453","time":"2018-01-02","desc":"充值","recordNum":"-100","accountLeft":"4000"},{"recordID":"CZ3545435345343453","time":"2018-01-03","desc":"充值","recordNum":"+100","accountLeft":"5000"},{"recordID":"CZ35434341245343453","time":"2018-01-01","desc":"充值","recordNum":"+100","accountLeft":"3000"},{"recordID":"CZ35434254345343453","time":"2018-01-02","desc":"充值","recordNum":"-100","accountLeft":"4000"},{"recordID":"CZ3545412345343453","time":"2018-01-03","desc":"充值","recordNum":"+100","accountLeft":"5000"},{"recordID":"CZ3543435543533453","time":"2018-01-01","desc":"充值","recordNum":"+100","accountLeft":"3000"},{"recordID":"CZ3543124545343453","time":"2018-01-02","desc":"充值","recordNum":"-100","accountLeft":"4000"},{"recordID":"CZ3545412323524153","time":"2018-01-03","desc":"充值","recordNum":"+100","accountLeft":"5000"},{"recordID":"CZ3543532345343453","time":"2018-01-03","desc":"充值","recordNum":"+100","accountLeft":"5000"}]}}

/***/ }),

/***/ 1385:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1386:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1387:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"title":"P2B理财模式来\"搅局\" 互联网金融被\"洗牌\"","date":"2017-12-12","content":"<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p>"}}

/***/ }),

/***/ 1388:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"current":4,"total":123,"infoList":[{"id":1,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-10-21"},{"id":2,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-10-22"},{"id":3,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-10-21"},{"id":4,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-11-21"},{"id":5,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-12-21"},{"id":11,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-10-21"},{"id":12,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-10-22"},{"id":13,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-10-21"},{"id":14,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-11-21"},{"id":15,"title":"公告标题公告标题公告标题公告标题公告标题公告标题公告标题公告标题","date":"2017-12-21"}]}}

/***/ }),

/***/ 1389:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":"1234"}

/***/ }),

/***/ 1390:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=683886776,1786348428&fm=11&gp=0.jpg"}

/***/ }),

/***/ 1391:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=683886776,1786348428&fm=11&gp=0.jpg"}

/***/ }),

/***/ 1392:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1393:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"title":"委托资金委托资金委托资金委托资金委托资金","time":"2017-01-21","content":"委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金","accessory":{"name":"投递标书","link":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}},{"id":2,"title":"委托资金委托资金委托资金委托资金委托资金","time":"2017-01-22","content":"委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金","accessory":{"name":"投递标书","link":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}},{"id":3,"title":"委托资金委托资金委托资金委托资金委托资金","time":"2017-02-21","content":"委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金委托资金","accessory":{"name":"投递标书","link":"http://www.ronglaoban.cn//images/attachment/2017/07/13/测试附件.docx"}}]}}

/***/ }),

/***/ 1394:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1395:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1396:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123},{"id":2,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123},{"id":3,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123}]}}

/***/ }),

/***/ 1397:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1398:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"normal","status":1},{"id":2,"category":"1","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"delegate","status":1},{"id":3,"category":"3","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"normal","status":0}]}}

/***/ }),

/***/ 1399:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"total":214,"infoList":[{"id":1,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":11},"hasRead":false},{"id":2,"name":"我大大","status":0,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":12},"hasRead":true},{"id":3,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":13},"hasRead":false},{"id":4,"name":"我大大","status":0,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":13},"hasRead":false},{"id":5,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":13},"hasRead":true},{"id":6,"name":"我大大","status":0,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":13},"hasRead":false},{"id":73,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":13},"hasRead":false},{"id":13,"name":"我大大","status":1,"date":"2017-10-12 21:12:42","company":"上海项目公司","department":"投资部门","position":"投资总监","mobile":"139182313123","email":"242352432@qq.com","projectDetail":{"name":"上海地产融资1亿","id":13},"hasRead":true}]}}

/***/ }),

/***/ 1400:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1401:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"projectInfo":{"title":"上海南京路万达广场建设项目","date":"2017-10-11","status":1,"categoryText":"债权","typeText":"债权子类型","regionText":"浙江省杭州市天门","financing":{"industryText":"融资房地产","aptitude":"融资方开发资质","parentAptitue":"母公司开发资质","previousProfits":252,"recentProfits":214,"nextProfits":5364,"number":124,"deadline":7,"maxRate":11,"regionText":"浙江省杭州市西湖区"},"stockData":{"typeText":"参股型项目","property":"老股转让","number":52,"rate":12,"estimateText":"9倍去年净利润"},"target":{"name":"标的企业名称","industryText":"标的房地产","previousProfits":1252,"recentProfits":1124,"nextProfits":5343,"number":1524,"regionText":"江苏省南京市雨花台区"},"assets":{"regionText":"资产所在地例子","value":214,"number":2145},"mortgage":{"isNeed":1,"typeText":"固定资产, 有价证券","name":"抵押物名称","value":12,"rate":25},"guarantee":{"isNeed":1,"method":"资产抵押"},"content":"项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍","attachment":{"name":"万达广场项目计划书.doc","link":"/ssss"},"favoriteNum":11,"hasFavorite":false,"hasDelivered":false},"contactInfo":{"department":"技术研发部","position":"高级工程师","name":"刘国柱","phone":"021-123123131","mobile":"139189123123","email":"5233523@qqq.com"}}}

/***/ }),

/***/ 1402:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"canSeen":1,"contactInfo":{"memberType":"阳光融资资金方","companyName":"阳光融资有限公司","department":"技术研发部","position":"高级工程师","name":"你买鸡","phone":"021-123123131","mobile":"139189123123","email":"5233523@qqq.com"}}}

/***/ }),

/***/ 1403:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"current":4,"total":123,"projectList":[{"id":1,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":0,"delegate":false},{"id":2,"title":"委托项目委托项目委托项目委托项目委托项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"delegate":true},{"id":3,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"delegate":false},{"id":43,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":0,"delegate":false},{"id":4,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"delegate":false},{"id":5,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":0,"delegate":false},{"id":63,"title":"普通项目普通项目普通项目普通项目普通项目","category":"2","stockType":2,"type":"子类型","industry":"房地产","region":"浙江省杭州市天门","financingNum":5000,"seen":123,"status":1,"delegate":false}]}}

/***/ }),

/***/ 1404:
/***/ (function(module, exports) {

	module.exports = {"status":200,"data":{"projectInfo":{"title":"上海南京路万达广场建设项目","date":"2017-10-11","status":1,"categoryText":"资产转让","typeText":"债权子类型","regionText":"浙江省杭州市天门","financing":{"industryText":"融资房地产","aptitude":"融资方开发资质","parentAptitue":"母公司开发资质","previousProfits":252,"recentProfits":214,"nextProfits":5364,"number":124,"deadline":7,"maxRate":11,"regionText":"浙江省杭州市西湖区"},"stockData":{"typeText":"参股型项目","property":"新股增发","number":52,"rate":12,"estimateText":"9倍去年净利润"},"target":{"name":"标的企业名称","industryText":"标的房地产","previousProfits":1252,"recentProfits":1124,"nextProfits":5343,"number":1524,"regionText":"江苏省南京市雨花台区"},"assets":{"regionText":"资产所在地例子","value":214,"number":2145},"mortgage":{"isNeed":1,"typeText":"固定资产, 有价证券","name":"抵押物名称","value":12,"rate":25},"guarantee":{"isNeed":1,"method":"资产抵押"},"content":"项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍项目介绍","attachment":{"name":"万达广场项目计划书.doc","link":"/ssss"},"seenNum":12,"favoriteNum":11,"reportNum":5,"hasSeen":true,"hasFavorite":false,"hasReport":false},"contactInfo":{"memberType":"阳光融资资金方","companyName":"阳光融资有限公司","department":"技术研发部","position":"高级工程师","name":"刘国柱","phone":"021-123123131","mobile":"139189123123","email":"5233523@qqq.com"}}}

/***/ }),

/***/ 1405:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"debts":[{"value":"房地产抵押融资","key":"1"},{"value":"金融股权质押融资","key":"2"},{"value":"股票质押融资","key":"3"},{"value":"应收款质押融资(保理)","key":"4"},{"value":"政府平台融资(PPP)","key":"5"},{"value":"融资租赁","key":"6"},{"value":"短期过桥","key":"7"},{"value":"其他","key":"8"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assets":[{"value":"土地或者在建工程","key":"1"},{"value":"房产","key":"2"},{"value":"矿产","key":"3"},{"value":"票据","key":"4"},{"value":"债权","key":"5"},{"value":"其他收益权","key":"6"},{"value":"无形资产","key":"7"},{"value":"其他","key":"8"}],"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"province_list":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","810000":"香港特别行政区","820000":"澳门特别行政区"},"financingNumList":[{"key":1,"value":"99万以下"},{"key":2,"value":"100万-499万"},{"key":3,"value":"500万-999万"},{"key":4,"value":"1000万-4999万"},{"key":5,"value":"5000万-9999万"},{"key":6,"value":"1亿-4.99亿"},{"key":7,"value":"5亿-9.99亿"},{"key":8,"value":"10亿以上"}]}}

/***/ }),

/***/ 1406:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1407:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"dgfd","data":{"assetsType":{"debts":[{"value":"开发商项目","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assets":[{"value":"开发商","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}]},"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"cascaderRegion":[{"value":"0","label":"浙江","children":[{"value":"1","label":"杭州","children":[{"value":"2","label":"西湖"}]}]},{"value":"10","label":"江苏","children":[{"value":"11","label":"南京","children":[{"value":"12","label":"中华门"}]}]}],"project":{"key":"2143324432","title":"这是债权项目","category":"0","type":"2","detail":"项目详情","accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}},"financing":{"industry":"11","aptitude":"融资方开发资质","parentAptitue":"母公司开发资质","previousProfits":252,"recentProfits":214,"nextProfits":5364,"number":124,"deadline":7,"maxRate":11,"region":["0","1","2"]},"stock":{"type":"2","property":"1","number":52,"rate":12,"estimate":{"times":15,"type":"2"}},"target":{"name":"标的企业名称","industry":"1","previousProfits":252,"recentProfits":124,"value":123,"nextProfits":543,"number":124,"region":["0","1","2"]},"assets":{"region":["0","1","2"],"value":214,"number":2145},"mortgage":{"isNeed":"1","type":["1","2"],"name":"抵押物名称","value":12,"rate":25},"guarantee":{"isNeed":"1","method":"资产抵押"},"accessory":{"name":"测试附件.doc","link":"http://www.ronglaoban.cn///images/attachment/2017/07/13/测试附件.docx"}}}

/***/ }),

/***/ 1408:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1409:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1410:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"category":"2","title":"普通项目普通项目普通项目普通项目普通项目","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1},{"id":2,"category":"1","title":"普通项目普通项目普通项目普通项目普通项目","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":1},{"id":3,"category":"3","title":"普通项目普通项目普通项目普通项目普通项目","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"status":0}]}}

/***/ }),

/***/ 1411:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1412:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"normal","status":0},{"id":2,"category":"1","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"delegate","status":1},{"id":3,"category":"3","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"normal","status":1}]}}

/***/ }),

/***/ 1413:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1414:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1415:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"fds","data":{"total":213,"infoList":[{"id":1,"category":"2","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"normal","status":1},{"id":2,"category":"1","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"delegate","status":1},{"id":3,"category":"3","title":"委托资金委托资金委托资金委托资金委托资金","stockType":1,"type":["股权子类型1","股权子类型2"],"investMin":543,"investMax":5665,"seen":124,"region":["上海","北京"],"industry":["金融信息行业","房地产"],"feature":"normal","status":0}]}}

/***/ }),

/***/ 1416:
/***/ (function(module, exports) {

	module.exports = {"status":200,"errMsg":"","data":{"debts":[{"value":"开发商项目","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"stock":[{"value":"种子期(创意期)","key":"1"},{"value":"初创期","key":"2"},{"value":"成长期","key":"3"},{"value":"成熟期(pre-ipo)","key":"4"}],"assets":[{"value":"开发商","key":"1"},{"value":"企业项目","key":"2"},{"value":"风头项目","key":"3"}],"industryList":[{"value":"市政公用","key":"1"},{"value":"房地产","key":"2"},{"value":"教育培训","key":"3"},{"value":"石油燃气","key":"4"},{"value":"煤炭业","key":"5"},{"value":"化工化纤","key":"6"},{"value":"化肥农药","key":"7"},{"value":"建材","key":"8"},{"value":"有色金属","key":"9"},{"value":"建筑工程","key":"10"},{"value":"钢铁","key":"11"},{"value":"造纸印刷","key":"12"},{"value":"电器设备","key":"13"},{"value":"机械设备","key":"14"},{"value":"贸易服务","key":"15"},{"value":"运输物流","key":"16"},{"value":"汽配","key":"17"},{"value":"家电","key":"18"},{"value":"日用品","key":"19"},{"value":"纺织服装","key":"20"},{"value":"旅游酒店","key":"21"},{"value":"餐饮娱乐","key":"22"},{"value":"文化传媒","key":"23"},{"value":"零售连锁","key":"24"},{"value":"食品饮料","key":"25"},{"value":"酿酒造酒","key":"26"},{"value":"农业","key":"27"},{"value":"医药生物","key":"28"},{"value":"银行","key":"29"},{"value":"信托","key":"30"},{"value":"券商","key":"31"},{"value":"公募基金及子公司","key":"32"},{"value":"保险","key":"33"},{"value":"其他金融机构","key":"34"},{"value":"IT互联网","key":"35"},{"value":"通信","key":"36"},{"value":"电子","key":"37"},{"value":"综合类","key":"38"},{"value":"国防军工","key":"39"},{"value":"航空航天","key":"40"},{"value":"节能环保","key":"41"},{"value":"新能源","key":"42"},{"value":"新材料","key":"43"}],"province_list":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","810000":"香港特别行政区","820000":"澳门特别行政区"},"selectedDebtsProjectType":[1,2],"selectedDebtsIndustry":[1,3,5],"selectedDebtsRegion":["110000","120000","130000"],"debtsNumMin":12,"debtsNumMax":213,"selectedStockType":[1,2],"selectedStockProjectType":[2,3,4],"selectedStockIndustry":[1,2,3],"selectedStockRegion":["210000","220000"],"stockNumMin":45,"stockNumMax":234,"selectedTransferProjectType":[2],"selectedTransferRegion":["510000","520000","530000"],"transferNumMin":75,"transferNumMax":325,"email":"6043254322@qq.com"}}

/***/ }),

/***/ 1417:
/***/ (function(module, exports) {

	module.exports = {"status":200}

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _stringify=__webpack_require__(1328);var _stringify2=_interopRequireDefault(_stringify);var _mobxReact=__webpack_require__(1419);
	var _userStore=__webpack_require__(1421);var _userStore2=_interopRequireDefault(_userStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports={
	getUserInfo:function getUserInfo(key){
	if(localStorage.getItem("userInfo")){
	return JSON.parse(localStorage.getItem("userInfo"))[key];
	}else{
	return"";
	}
	},
	setUserInfo:function setUserInfo(userData){
	localStorage.setItem("userInfo",(0,_stringify2.default)(userData));
	},
	setToken:function setToken(token){
	localStorage.setItem("token",token);
	}};

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(1420), __webpack_require__(55), __webpack_require__(85)) :
		typeof define === 'function' && define.amd ? define(['exports', 'mobx', 'react', 'react-dom'], factory) :
		(factory((global.mobxReact = {}),global.mobx,global.React,global.ReactDOM));
	}(this, (function (exports,mobx,react,reactDom) { 'use strict';
	
	// These functions can be stubbed out in specific environments
	var unstable_batchedUpdates$1 = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	var asyncGenerator = function () {
	  function AwaitValue(value) {
	    this.value = value;
	  }
	
	  function AsyncGenerator(gen) {
	    var front, back;
	
	    function send(key, arg) {
	      return new Promise(function (resolve, reject) {
	        var request = {
	          key: key,
	          arg: arg,
	          resolve: resolve,
	          reject: reject,
	          next: null
	        };
	
	        if (back) {
	          back = back.next = request;
	        } else {
	          front = back = request;
	          resume(key, arg);
	        }
	      });
	    }
	
	    function resume(key, arg) {
	      try {
	        var result = gen[key](arg);
	        var value = result.value;
	
	        if (value instanceof AwaitValue) {
	          Promise.resolve(value.value).then(function (arg) {
	            resume("next", arg);
	          }, function (arg) {
	            resume("throw", arg);
	          });
	        } else {
	          settle(result.done ? "return" : "normal", result.value);
	        }
	      } catch (err) {
	        settle("throw", err);
	      }
	    }
	
	    function settle(type, value) {
	      switch (type) {
	        case "return":
	          front.resolve({
	            value: value,
	            done: true
	          });
	          break;
	
	        case "throw":
	          front.reject(value);
	          break;
	
	        default:
	          front.resolve({
	            value: value,
	            done: false
	          });
	          break;
	      }
	
	      front = front.next;
	
	      if (front) {
	        resume(front.key, front.arg);
	      } else {
	        back = null;
	      }
	    }
	
	    this._invoke = send;
	
	    if (typeof gen.return !== "function") {
	      this.return = undefined;
	    }
	  }
	
	  if (typeof Symbol === "function" && Symbol.asyncIterator) {
	    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    };
	  }
	
	  AsyncGenerator.prototype.next = function (arg) {
	    return this._invoke("next", arg);
	  };
	
	  AsyncGenerator.prototype.throw = function (arg) {
	    return this._invoke("throw", arg);
	  };
	
	  AsyncGenerator.prototype.return = function (arg) {
	    return this._invoke("return", arg);
	  };
	
	  return {
	    wrap: function (fn) {
	      return function () {
	        return new AsyncGenerator(fn.apply(this, arguments));
	      };
	    },
	    await: function (value) {
	      return new AwaitValue(value);
	    }
	  };
	}();
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	var EventEmitter = function () {
	    function EventEmitter() {
	        classCallCheck(this, EventEmitter);
	        this.listeners = [];
	    }
	
	    createClass(EventEmitter, [{
	        key: "on",
	        value: function on(cb) {
	            var _this = this;
	
	            this.listeners.push(cb);
	            return function () {
	                var index = _this.listeners.indexOf(cb);
	                if (index !== -1) _this.listeners.splice(index, 1);
	            };
	        }
	    }, {
	        key: "emit",
	        value: function emit(data) {
	            this.listeners.forEach(function (fn) {
	                return fn(data);
	            });
	        }
	    }]);
	    return EventEmitter;
	}();
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	
	var defineProperty$1 = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	
	var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty$1(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	};
	
	// Copied from React.PropTypes
	function createChainableTypeChecker(validate) {
	    function checkType(isRequired, props, propName, componentName, location, propFullName) {
	        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	            rest[_key - 6] = arguments[_key];
	        }
	
	        return mobx.untracked(function () {
	            componentName = componentName || "<<anonymous>>";
	            propFullName = propFullName || propName;
	            if (props[propName] == null) {
	                if (isRequired) {
	                    var actual = props[propName] === null ? "null" : "undefined";
	                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
	                }
	                return null;
	            } else {
	                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
	            }
	        });
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	    return chainedCheckType;
	}
	
	// Copied from React.PropTypes
	function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === "symbol") {
	        return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue["@@toStringTag"] === "Symbol") {
	        return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === "function" && propValue instanceof Symbol) {
	        return true;
	    }
	
	    return false;
	}
	
	// Copied from React.PropTypes
	function getPropType(propValue) {
	    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
	    if (Array.isArray(propValue)) {
	        return "array";
	    }
	    if (propValue instanceof RegExp) {
	        // Old webkits (at least until Android 4.0) return 'function' rather than
	        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	        // passes PropTypes.object.
	        return "object";
	    }
	    if (isSymbol(propType, propValue)) {
	        return "symbol";
	    }
	    return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// Copied from React.PropTypes
	function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === "object") {
	        if (propValue instanceof Date) {
	            return "date";
	        } else if (propValue instanceof RegExp) {
	            return "regexp";
	        }
	    }
	    return propType;
	}
	
	function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
	    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
	        return mobx.untracked(function () {
	            if (allowNativeType) {
	                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
	            }
	            var mobxChecker = void 0;
	            switch (mobxType) {
	                case "Array":
	                    mobxChecker = mobx.isObservableArray;
	                    break;
	                case "Object":
	                    mobxChecker = mobx.isObservableObject;
	                    break;
	                case "Map":
	                    mobxChecker = mobx.isObservableMap;
	                    break;
	                default:
	                    throw new Error("Unexpected mobxType: " + mobxType);
	            }
	            var propValue = props[propName];
	            if (!mobxChecker(propValue)) {
	                var preciseType = getPreciseType(propValue);
	                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
	                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
	            }
	            return null;
	        });
	    });
	}
	
	function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
	    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
	        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
	            rest[_key2 - 5] = arguments[_key2];
	        }
	
	        return mobx.untracked(function () {
	            if (typeof typeChecker !== "function") {
	                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
	            }
	            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
	            if (error instanceof Error) return error;
	            var propValue = props[propName];
	            for (var i = 0; i < propValue.length; i++) {
	                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
	                if (error instanceof Error) return error;
	            }
	            return null;
	        });
	    });
	}
	
	var observableArray = createObservableTypeCheckerCreator(false, "Array");
	var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
	var observableMap = createObservableTypeCheckerCreator(false, "Map");
	var observableObject = createObservableTypeCheckerCreator(false, "Object");
	var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
	var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
	var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");
	
	
	
	var propTypes = Object.freeze({
		observableArray: observableArray,
		observableArrayOf: observableArrayOf,
		observableMap: observableMap,
		observableObject: observableObject,
		arrayOrObservableArray: arrayOrObservableArray,
		arrayOrObservableArrayOf: arrayOrObservableArrayOf,
		objectOrObservableObject: objectOrObservableObject
	});
	
	function isStateless(component) {
	    // `function() {}` has prototype, but `() => {}` doesn't
	    // `() => {}` via Babel has prototype too.
	    return !(component.prototype && component.prototype.render);
	}
	
	var injectorContextTypes = {
	    mobxStores: objectOrObservableObject
	};
	Object.seal(injectorContextTypes);
	
	var proxiedInjectorProps = {
	    contextTypes: {
	        get: function get$$1() {
	            return injectorContextTypes;
	        },
	        set: function set$$1(_) {
	            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
	        },
	        configurable: true,
	        enumerable: false
	    },
	    isMobxInjector: {
	        value: true,
	        writable: true,
	        configurable: true,
	        enumerable: true
	    }
	
	    /**
	     * Store Injection
	     */
	};function createStoreInjector(grabStoresFn, component, injectNames) {
	    var _class, _temp2;
	
	    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
	    if (injectNames) displayName += "-with-" + injectNames;
	
	    var Injector = (_temp2 = _class = function (_Component) {
	        inherits(Injector, _Component);
	
	        function Injector() {
	            var _ref;
	
	            var _temp, _this, _ret;
	
	            classCallCheck(this, Injector);
	
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
	                _this.wrappedInstance = instance;
	            }, _temp), possibleConstructorReturn(_this, _ret);
	        }
	
	        createClass(Injector, [{
	            key: "render",
	            value: function render() {
	                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
	                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
	                // See this test: 'using a custom injector is not too reactive' in inject.js
	                var newProps = {};
	                for (var key in this.props) {
	                    if (this.props.hasOwnProperty(key)) {
	                        newProps[key] = this.props[key];
	                    }
	                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
	                for (var _key2 in additionalProps) {
	                    newProps[_key2] = additionalProps[_key2];
	                }
	
	                if (!isStateless(component)) {
	                    newProps.ref = this.storeRef;
	                }
	
	                return react.createElement(component, newProps);
	            }
	        }]);
	        return Injector;
	    }(react.Component), _class.displayName = displayName, _temp2);
	
	    // Static fields from component should be visible on the generated Injector
	
	    hoistNonReactStatics(Injector, component);
	
	    Injector.wrappedComponent = component;
	    Object.defineProperties(Injector, proxiedInjectorProps);
	
	    return Injector;
	}
	
	function grabStoresByName(storeNames) {
	    return function (baseStores, nextProps) {
	        storeNames.forEach(function (storeName) {
	            if (storeName in nextProps // prefer props over stores
	            ) return;
	            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
	            nextProps[storeName] = baseStores[storeName];
	        });
	        return nextProps;
	    };
	}
	
	/**
	 * higher order component that injects stores to a child.
	 * takes either a varargs list of strings, which are stores read from the context,
	 * or a function that manually maps the available stores from the context to props:
	 * storesToProps(mobxStores, props, context) => newProps
	 */
	function inject() /* fn(stores, nextProps) or ...storeNames */{
	    var grabStoresFn = void 0;
	    if (typeof arguments[0] === "function") {
	        grabStoresFn = arguments[0];
	        return function (componentClass) {
	            var injected = createStoreInjector(grabStoresFn, componentClass);
	            injected.isMobxInjector = false; // supress warning
	            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
	            // see #111
	            injected = observer(injected);
	            injected.isMobxInjector = true; // restore warning
	            return injected;
	        };
	    } else {
	        var storeNames = [];
	        for (var i = 0; i < arguments.length; i++) {
	            storeNames[i] = arguments[i];
	        }grabStoresFn = grabStoresByName(storeNames);
	        return function (componentClass) {
	            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
	        };
	    }
	}
	
	/**
	 * dev tool support
	 */
	var isDevtoolsEnabled = false;
	
	var isUsingStaticRendering = false;
	
	var warnedAboutObserverInjectDeprecation = false;
	
	// WeakMap<Node, Object>;
	var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
	var renderReporter = new EventEmitter();
	
	function findDOMNode$2(component) {
	    if (reactDom.findDOMNode) {
	        try {
	            return reactDom.findDOMNode(component);
	        } catch (e) {
	            // findDOMNode will throw in react-test-renderer, see:
	            // See https://github.com/mobxjs/mobx-react/issues/216
	            // Is there a better heuristic?
	            return null;
	        }
	    }
	    return null;
	}
	
	function reportRendering(component) {
	    var node = findDOMNode$2(component);
	    if (node && componentByNodeRegistery) componentByNodeRegistery.set(node, component);
	
	    renderReporter.emit({
	        event: "render",
	        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
	        totalTime: Date.now() - component.__$mobRenderStart,
	        component: component,
	        node: node
	    });
	}
	
	function trackComponents() {
	    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
	    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
	}
	
	function useStaticRendering(useStaticRendering) {
	    isUsingStaticRendering = useStaticRendering;
	}
	
	/**
	 * Errors reporter
	 */
	
	var errorsReporter = new EventEmitter();
	
	/**
	 * Utilities
	 */
	
	function patch(target, funcName) {
	    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    var base = target[funcName];
	    var mixinFunc = reactiveMixin[funcName];
	    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
	        mixinFunc.apply(this, arguments);
	        base.apply(this, arguments);
	    } : function () {
	        base.apply(this, arguments);
	        mixinFunc.apply(this, arguments);
	    };
	
	    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
	    // ...but that breaks react-hot-loader, see #231...
	    target[funcName] = f;
	}
	
	function isObjectShallowModified(prev, next) {
	    if (null == prev || null == next || (typeof prev === "undefined" ? "undefined" : _typeof(prev)) !== "object" || (typeof next === "undefined" ? "undefined" : _typeof(next)) !== "object") {
	        return prev !== next;
	    }
	    var keys = Object.keys(prev);
	    if (keys.length !== Object.keys(next).length) {
	        return true;
	    }
	    var key = void 0;
	    for (var i = keys.length - 1; i >= 0, key = keys[i]; i--) {
	        if (next[key] !== prev[key]) {
	            return true;
	        }
	    }
	    return false;
	}
	
	/**
	 * ReactiveMixin
	 */
	var reactiveMixin = {
	    componentWillMount: function componentWillMount() {
	        var _this = this;
	
	        if (isUsingStaticRendering === true) return;
	        // Generate friendly name for debugging
	        var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
	        var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID;
	
	        /**
	         * If props are shallowly modified, react will render anyway,
	         * so atom.reportChanged() should not result in yet another re-render
	         */
	        var skipRender = false;
	        /**
	         * forceUpdate will re-assign this.props. We don't want that to cause a loop,
	         * so detect these changes
	         */
	        var isForcingUpdate = false;
	
	        function makePropertyObservableReference(propName) {
	            var valueHolder = this[propName];
	            var atom = new mobx.Atom("reactive " + propName);
	            Object.defineProperty(this, propName, {
	                configurable: true,
	                enumerable: true,
	                get: function get$$1() {
	                    atom.reportObserved();
	                    return valueHolder;
	                },
	                set: function set$$1(v) {
	                    if (!isForcingUpdate && isObjectShallowModified(valueHolder, v)) {
	                        valueHolder = v;
	                        skipRender = true;
	                        atom.reportChanged();
	                        skipRender = false;
	                    } else {
	                        valueHolder = v;
	                    }
	                }
	            });
	        }
	
	        // make this.props an observable reference, see #124
	        makePropertyObservableReference.call(this, "props");
	        // make state an observable reference
	        makePropertyObservableReference.call(this, "state");
	
	        // wire up reactive render
	        var baseRender = this.render.bind(this);
	        var reaction = null;
	        var isRenderingPending = false;
	
	        var initialRender = function initialRender() {
	            reaction = new mobx.Reaction(initialName + "#" + rootNodeID + ".render()", function () {
	                if (!isRenderingPending) {
	                    // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
	                    // This unidiomatic React usage but React will correctly warn about this so we continue as usual
	                    // See #85 / Pull #44
	                    isRenderingPending = true;
	                    if (typeof _this.componentWillReact === "function") _this.componentWillReact(); // TODO: wrap in action?
	                    if (_this.__$mobxIsUnmounted !== true) {
	                        // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
	                        // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
	                        // However, people also claim this migth happen during unit tests..
	                        var hasError = true;
	                        try {
	                            isForcingUpdate = true;
	                            if (!skipRender) react.Component.prototype.forceUpdate.call(_this);
	                            hasError = false;
	                        } finally {
	                            isForcingUpdate = false;
	                            if (hasError) reaction.dispose();
	                        }
	                    }
	                }
	            });
	            reaction.reactComponent = _this;
	            reactiveRender.$mobx = reaction;
	            _this.render = reactiveRender;
	            return reactiveRender();
	        };
	
	        var reactiveRender = function reactiveRender() {
	            isRenderingPending = false;
	            var exception = undefined;
	            var rendering = undefined;
	            reaction.track(function () {
	                if (isDevtoolsEnabled) {
	                    _this.__$mobRenderStart = Date.now();
	                }
	                try {
	                    rendering = mobx.extras.allowStateChanges(false, baseRender);
	                } catch (e) {
	                    exception = e;
	                }
	                if (isDevtoolsEnabled) {
	                    _this.__$mobRenderEnd = Date.now();
	                }
	            });
	            if (exception) {
	                errorsReporter.emit(exception);
	                throw exception;
	            }
	            return rendering;
	        };
	
	        this.render = initialRender;
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        if (isUsingStaticRendering === true) return;
	        this.render.$mobx && this.render.$mobx.dispose();
	        this.__$mobxIsUnmounted = true;
	        if (isDevtoolsEnabled) {
	            var node = findDOMNode$2(this);
	            if (node && componentByNodeRegistery) {
	                componentByNodeRegistery.delete(node);
	            }
	            renderReporter.emit({
	                event: "destroy",
	                component: this,
	                node: node
	            });
	        }
	    },
	
	    componentDidMount: function componentDidMount() {
	        if (isDevtoolsEnabled) {
	            reportRendering(this);
	        }
	    },
	
	    componentDidUpdate: function componentDidUpdate() {
	        if (isDevtoolsEnabled) {
	            reportRendering(this);
	        }
	    },
	
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        if (isUsingStaticRendering) {
	            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
	        }
	        // update on any state changes (as is the default)
	        if (this.state !== nextState) {
	            return true;
	        }
	        // update if props are shallowly not equal, inspired by PureRenderMixin
	        // we could return just 'false' here, and avoid the `skipRender` checks etc
	        // however, it is nicer if lifecycle events are triggered like usually,
	        // so we return true here if props are shallowly modified.
	        return isObjectShallowModified(this.props, nextProps);
	    }
	
	    /**
	     * Observer function / decorator
	     */
	};function observer(arg1, arg2) {
	    if (typeof arg1 === "string") {
	        throw new Error("Store names should be provided as array");
	    }
	    if (Array.isArray(arg1)) {
	        // component needs stores
	        if (!warnedAboutObserverInjectDeprecation) {
	            warnedAboutObserverInjectDeprecation = true;
	            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
	        }
	        if (!arg2) {
	            // invoked as decorator
	            return function (componentClass) {
	                return observer(arg1, componentClass);
	            };
	        } else {
	            return inject.apply(null, arg1)(observer(arg2));
	        }
	    }
	    var componentClass = arg1;
	
	    if (componentClass.isMobxInjector === true) {
	        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
	    }
	
	    // Stateless function component:
	    // If it is function but doesn't seem to be a react class constructor,
	    // wrap it to a react class automatically
	    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !react.Component.isPrototypeOf(componentClass)) {
	        var _class, _temp;
	
	        return observer((_temp = _class = function (_Component) {
	            inherits(_class, _Component);
	
	            function _class() {
	                classCallCheck(this, _class);
	                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	            }
	
	            createClass(_class, [{
	                key: "render",
	                value: function render() {
	                    return componentClass.call(this, this.props, this.context);
	                }
	            }]);
	            return _class;
	        }(react.Component), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
	    }
	
	    if (!componentClass) {
	        throw new Error("Please pass a valid component to 'observer'");
	    }
	
	    var target = componentClass.prototype || componentClass;
	    mixinLifecycleEvents(target);
	    componentClass.isMobXReactObserver = true;
	    return componentClass;
	}
	
	function mixinLifecycleEvents(target) {
	    patch(target, "componentWillMount", true);["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
	        patch(target, funcName);
	    });
	    if (!target.shouldComponentUpdate) {
	        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
	    }
	}
	
	// TODO: support injection somehow as well?
	var Observer = observer(function (_ref) {
	    var children = _ref.children;
	    return children();
	});
	
	Observer.displayName = "Observer";
	
	Observer.propTypes = {
	    children: function children(propValue, key, componentName, location, propFullName) {
	        if (typeof propValue[key] !== "function") return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(propValue[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
	    }
	};
	
	var _class;
	var _temp;
	
	var specialReactKeys = { children: true, key: true, ref: true };
	
	var Provider = (_temp = _class = function (_Component) {
	    inherits(Provider, _Component);
	
	    function Provider() {
	        classCallCheck(this, Provider);
	        return possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
	    }
	
	    createClass(Provider, [{
	        key: "render",
	        value: function render() {
	            return react.Children.only(this.props.children);
	        }
	    }, {
	        key: "getChildContext",
	        value: function getChildContext() {
	            var stores = {};
	            // inherit stores
	            var baseStores = this.context.mobxStores;
	            if (baseStores) for (var key in baseStores) {
	                stores[key] = baseStores[key];
	            }
	            // add own stores
	            for (var _key in this.props) {
	                if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
	            }return {
	                mobxStores: stores
	            };
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            // Maybe this warning is too aggressive?
	            if (Object.keys(nextProps).length !== Object.keys(this.props).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
	            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
	                if (!specialReactKeys[key] && this.props[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
	            }
	        }
	    }]);
	    return Provider;
	}(react.Component), _class.contextTypes = {
	    mobxStores: objectOrObservableObject
	}, _class.childContextTypes = {
	    mobxStores: objectOrObservableObject.isRequired
	}, _temp);
	
	if (!react.Component) throw new Error("mobx-react requires React to be available");
	if (!mobx.extras) throw new Error("mobx-react requires mobx to be available");
	
	if (typeof reactDom.unstable_batchedUpdates === "function") mobx.extras.setReactionScheduler(reactDom.unstable_batchedUpdates);else if (typeof unstable_batchedUpdates$1 === "function") mobx.extras.setReactionScheduler(unstable_batchedUpdates$1);
	
	var onError = function onError(fn) {
	    return errorsReporter.on(fn);
	};
	
	/* DevTool support */
	// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js
	
	if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
	    var mobx$1 = { spy: mobx.spy, extras: mobx.extras };
	    var mobxReact = { renderReporter: renderReporter, componentByNodeRegistery: componentByNodeRegistery, trackComponents: trackComponents };
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
	}
	
	exports.propTypes = propTypes;
	exports.PropTypes = propTypes;
	exports.onError = onError;
	exports.observer = observer;
	exports.Observer = Observer;
	exports.renderReporter = renderReporter;
	exports.componentByNodeRegistery = componentByNodeRegistery;
	exports.trackComponents = trackComponents;
	exports.useStaticRendering = useStaticRendering;
	exports.Provider = Provider;
	exports.inject = inject;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ }),

/***/ 1420:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */
	
	var extendStatics = Object.setPrototypeOf ||
	    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	
	/**
	 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
	 *
	 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
	 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
	 */
	var BaseAtom = (function () {
	    /**
	     * Create a new atom. For debugging purposes it is recommended to give it a name.
	     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
	     */
	    function BaseAtom(name) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        this.name = name;
	        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
	    }
	    BaseAtom.prototype.onBecomeUnobserved = function () {
	        // noop
	    };
	    /**
	     * Invoke this method to notify mobx that your atom has been used somehow.
	     */
	    BaseAtom.prototype.reportObserved = function () {
	        reportObserved(this);
	    };
	    /**
	     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
	     */
	    BaseAtom.prototype.reportChanged = function () {
	        startBatch();
	        propagateChanged(this);
	        endBatch();
	    };
	    BaseAtom.prototype.toString = function () {
	        return this.name;
	    };
	    return BaseAtom;
	}());
	var Atom = (function (_super) {
	    __extends(Atom, _super);
	    /**
	     * Create a new atom. For debugging purposes it is recommended to give it a name.
	     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
	     */
	    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
	        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
	        var _this = _super.call(this, name) || this;
	        _this.name = name;
	        _this.onBecomeObservedHandler = onBecomeObservedHandler;
	        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
	        _this.isPendingUnobservation = false; // for effective unobserving.
	        _this.isBeingTracked = false;
	        return _this;
	    }
	    Atom.prototype.reportObserved = function () {
	        startBatch();
	        _super.prototype.reportObserved.call(this);
	        if (!this.isBeingTracked) {
	            this.isBeingTracked = true;
	            this.onBecomeObservedHandler();
	        }
	        endBatch();
	        return !!globalState.trackingDerivation;
	        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
	        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
	    };
	    Atom.prototype.onBecomeUnobserved = function () {
	        this.isBeingTracked = false;
	        this.onBecomeUnobservedHandler();
	    };
	    return Atom;
	}(BaseAtom));
	var isAtom = createInstanceofPredicate("Atom", BaseAtom);
	
	function hasInterceptors(interceptable) {
	    return interceptable.interceptors && interceptable.interceptors.length > 0;
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        var interceptors = interceptable.interceptors;
	        if (interceptors)
	            for (var i = 0, l = interceptors.length; i < l; i++) {
	                change = interceptors[i](change);
	                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	                if (!change)
	                    break;
	            }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}
	
	function hasListeners(listenable) {
	    return listenable.changeListeners && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	
	function isSpyEnabled() {
	    return !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    var change = objectAssign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (change)
	        spyReport(objectAssign({}, change, END_EVENT));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    globalState.spyListeners.push(listener);
	    return once(function () {
	        var idx = globalState.spyListeners.indexOf(listener);
	        if (idx !== -1)
	            globalState.spyListeners.splice(idx, 1);
	    });
	}
	
	function iteratorSymbol() {
	    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
	}
	var IS_ITERATING_MARKER = "__$$iterating";
	function arrayAsIterator(array) {
	    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
	    // yet it is quite convenient to be able to use the response both as array directly and as iterator
	    // it is suboptimal, but alas...
	    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
	    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
	    var idx = -1;
	    addHiddenFinalProp(array, "next", function next() {
	        idx++;
	        return {
	            done: idx >= this.length,
	            value: idx < this.length ? this[idx] : undefined
	        };
	    });
	    return array;
	}
	function declareIterator(prototType, iteratorFactory) {
	    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
	}
	
	var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
	// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
	var safariPrototypeSetterInheritanceBug = (function () {
	    var v = false;
	    var p = {};
	    Object.defineProperty(p, "0", {
	        set: function () {
	            v = true;
	        }
	    });
	    Object.create(p)["0"] = 1;
	    return v === false;
	})();
	/**
	 * This array buffer contains two lists of properties, so that all arrays
	 * can recycle their property definitions, which significantly improves performance of creating
	 * properties on the fly.
	 */
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	// Typescript workaround to make sure ObservableArray extends Array
	var StubArray = (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	function inherit(ctor, proto) {
	    if (typeof Object["setPrototypeOf"] !== "undefined") {
	        Object["setPrototypeOf"](ctor.prototype, proto);
	    }
	    else if (typeof ctor.prototype.__proto__ !== "undefined") {
	        ctor.prototype.__proto__ = proto;
	    }
	    else {
	        ctor["prototype"] = proto;
	    }
	}
	inherit(StubArray, Array.prototype);
	// Weex freeze Array.prototype
	// Make them writeable and configurable in prototype chain
	// https://github.com/alibaba/weex/pull/1529
	if (Object.isFrozen(Array)) {
	    
	    [
	        "constructor",
	        "push",
	        "shift",
	        "concat",
	        "pop",
	        "unshift",
	        "replace",
	        "find",
	        "findIndex",
	        "splice",
	        "reverse",
	        "sort"
	    ].forEach(function (key) {
	        Object.defineProperty(StubArray.prototype, key, {
	            configurable: true,
	            writable: true,
	            value: Array.prototype[key]
	        });
	    });
	}
	var ObservableArrayAdministration = (function () {
	    function ObservableArrayAdministration(name, enhancer, array, owned) {
	        this.array = array;
	        this.owned = owned;
	        this.values = [];
	        this.lastKnownLength = 0;
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.atom = new BaseAtom(name || "ObservableArray@" + getNextId());
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
	        if (this.dehancer !== undefined)
	            return values.map(this.dehancer);
	        return values;
	    };
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.array,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined; // No Array.fill everywhere...
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    // adds / removes the necessary numeric properties to this object
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	        this.lastKnownLength += delta;
	        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
	            reserveArrayBuffer(oldLength + delta + 1);
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = [];
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        var lengthDelta = newItems.length - deleteCount;
	        this.updateArrayLength(length, lengthDelta); // create or remove new entries
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return this.dehanceValues(res);
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values
	                .slice(0, index)
	                .concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	        var _a;
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.array,
	                type: "update",
	                index: index,
	                newValue: newValue,
	                oldValue: oldValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removed: removed,
	                added: added,
	                removedCount: removed.length,
	                addedCount: added.length
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var ObservableArray = (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, enhancer, name, owned) {
	        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	        if (owned === void 0) { owned = false; }
	        var _this = _super.call(this) || this;
	        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
	        addHiddenFinalProp(_this, "$mobx", adm);
	        if (initialValues && initialValues.length) {
	            _this.spliceWithArray(0, 0, initialValues);
	        }
	        if (safariPrototypeSetterInheritanceBug) {
	            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
	            // defined on the instance. After that it works fine, even if this property is deleted.
	            Object.defineProperty(adm.array, "0", ENTRY_0);
	        }
	        return _this;
	    }
	    ObservableArray.prototype.intercept = function (handler) {
	        return this.$mobx.intercept(handler);
	    };
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        return this.$mobx.observe(listener, fireImmediately);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.concat = function () {
	        var arrays = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arrays[_i] = arguments[_i];
	        }
	        this.$mobx.atom.reportObserved();
	        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
	    };
	    /**
	     * Converts this array back to a (shallow) javascript structure.
	     * For a deep clone use mobx.toJS
	     */
	    ObservableArray.prototype.toJS = function () {
	        return this.slice();
	    };
	    ObservableArray.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toJS();
	    };
	    ObservableArray.prototype.peek = function () {
	        this.$mobx.atom.reportObserved();
	        return this.$mobx.dehanceValues(this.$mobx.values);
	    };
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        var idx = this.findIndex.apply(this, arguments);
	        return idx === -1 ? undefined : this.get(idx);
	    };
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        var items = this.peek(), l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return i;
	        return -1;
	    };
	    /*
	     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
	     * since these functions alter the inner structure of the array, the have side effects.
	     * Because the have side effects, they should not be used in computed function,
	     * and for that reason the do not call dependencyState.notifyObserved
	     */
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return this.$mobx.spliceWithArray(index);
	            case 2:
	                return this.$mobx.spliceWithArray(index, deleteCount);
	        }
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        // reverse by default mutates in place before returning the result
	        // which makes it both a 'derivation' and a 'mutation'.
	        // so we deviate from the default and just make it an dervitation
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        // sort by default mutates in place before returning the result
	        // which goes against all good practices. Let's not change the array in place!
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.move = function (fromIndex, toIndex) {
	        function checkIndex(index) {
	            if (index < 0) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
	            }
	            var length = this.$mobx.values.length;
	            if (index >= length) {
	                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
	            }
	        }
	        checkIndex.call(this, fromIndex);
	        checkIndex.call(this, toIndex);
	        if (fromIndex === toIndex) {
	            return;
	        }
	        var oldItems = this.$mobx.values;
	        var newItems;
	        if (fromIndex < toIndex) {
	            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [
	                oldItems[fromIndex]
	            ], oldItems.slice(toIndex + 1));
	        }
	        else {
	            // toIndex < fromIndex
	            newItems = oldItems.slice(0, toIndex).concat([
	                oldItems[fromIndex]
	            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
	        }
	        this.replace(newItems);
	    };
	    // See #734, in case property accessors are unreliable...
	    ObservableArray.prototype.get = function (index) {
	        var impl = this.$mobx;
	        if (impl) {
	            if (index < impl.values.length) {
	                impl.atom.reportObserved();
	                return impl.dehanceValue(impl.values[index]);
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
	                .values
	                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    };
	    // See #734, in case property accessors are unreliable...
	    ObservableArray.prototype.set = function (index, newValue) {
	        var adm = this.$mobx;
	        var values = adm.values;
	        if (index < values.length) {
	            // update at index in range
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: this,
	                    index: index,
	                    newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            // add a new item
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else {
	            // out of bounds
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        }
	    };
	    return ObservableArray;
	}(StubArray));
	declareIterator(ObservableArray.prototype, function () {
	    return arrayAsIterator(this.slice());
	});
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return this.$mobx.getArrayLength();
	    },
	    set: function (newLength) {
	        this.$mobx.setArrayLength(newLength);
	    }
	});
	[
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some",
	    "toString",
	    "toLocaleString"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
	    addHiddenProp(ObservableArray.prototype, funcName, function () {
	        return baseFunc.apply(this.peek(), arguments);
	    });
	});
	/**
	 * We don't want those to show up in `for (const key in ar)` ...
	 */
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "intercept",
	    "observe",
	    "clear",
	    "concat",
	    "get",
	    "replace",
	    "toJS",
	    "toJSON",
	    "peek",
	    "find",
	    "findIndex",
	    "splice",
	    "spliceWithArray",
	    "push",
	    "pop",
	    "set",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "move",
	    "toString",
	    "toLocaleString"
	]);
	// See #364
	var ENTRY_0 = createArrayEntryDescriptor(0);
	function createArrayEntryDescriptor(index) {
	    return {
	        enumerable: false,
	        configurable: false,
	        get: function () {
	            // TODO: Check `this`?, see #752?
	            return this.get(index);
	        },
	        set: function (value) {
	            this.set(index, value);
	        }
	    };
	}
	function createArrayBufferItem(index) {
	    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
	}
	
	var UNCHANGED = {};
	var ObservableValue = (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.hasUnreportedChange = false;
	        _this.dehancer = undefined;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled()) {
	            // only notify spy if this is a stand-alone observable
	            spyReport({ type: "create", object: _this, newValue: _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy) {
	                spyReportStart({
	                    type: "update",
	                    object: this,
	                    newValue: newValue,
	                    oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this,
	                type: "update",
	                newValue: newValue
	            });
	            if (!change)
	                return UNCHANGED;
	            newValue = change.newValue;
	        }
	        // apply modifier
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.value !== newValue ? newValue : UNCHANGED;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.dehanceValue(this.value);
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    return ObservableValue;
	}(BaseAtom));
	ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
	
	var messages = {
	    m001: "It is not allowed to assign new values to @action fields",
	    m002: "`runInAction` expects a function",
	    m003: "`runInAction` expects a function without arguments",
	    m004: "autorun expects a function",
	    m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
	    m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
	    m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
	    m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
	    m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
	    m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
	    m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
	    m012: "computed takes one or two arguments if used as function",
	    m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
	    m014: "extendObservable expected 2 or more arguments",
	    m015: "extendObservable expects an object as first argument",
	    m016: "extendObservable should not be used on maps, use map.merge instead",
	    m017: "all arguments of extendObservable should be objects",
	    m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
	    m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
	    m020: "modifiers can only be used for individual object properties",
	    m021: "observable expects zero or one arguments",
	    m022: "@observable can not be used on getters, use @computed instead",
	    m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
	    m025: "whyRun can only be used on reactions and computed values",
	    m026: "`action` can only be invoked on functions",
	    m028: "It is not allowed to set `useStrict` when a derivation is running",
	    m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
	    m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
	    m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
	    m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
	    m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
	    m033: "`observe` doesn't support the fire immediately property for observable maps.",
	    m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
	    m035: "Cannot make the designated object observable; it is not extensible",
	    m036: "It is not possible to get index atoms from arrays",
	    m037: "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
	    m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
	};
	function getMessage(id) {
	    return messages[id];
	}
	
	function createAction(actionName, fn) {
	    invariant(typeof fn === "function", getMessage("m026"));
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    var res = function () {
	        return executeAction(actionName, fn, this, arguments);
	    };
	    res.originalFn = fn;
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = startAction(actionName, fn, scope, args);
	    try {
	        return fn.apply(scope, args);
	    }
	    finally {
	        endAction(runInfo);
	    }
	}
	function startAction(actionName, fn, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy) {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            fn: fn,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    return {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        notifySpy: notifySpy,
	        startTime: startTime
	    };
	}
	function endAction(runInfo) {
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy)
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	}
	function useStrict(strict) {
	    invariant(globalState.trackingDerivation === null, getMessage("m028"));
	    globalState.strictMode = strict;
	    globalState.allowStateChanges = !strict;
	}
	function isStrictModeEnabled() {
	    return globalState.strictMode;
	}
	function allowStateChanges(allowStateChanges, func) {
	    // TODO: deprecate / refactor this function in next major
	    // Currently only used by `@observer`
	    // Proposed change: remove first param, rename to `forbidStateChanges`,
	    // require error callback instead of the hardcoded error message now used
	    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        allowStateChangesEnd(prev);
	    }
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	
	/**
	 * Constructs a decorator, that normalizes the differences between
	 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
	 * values during instance creation to properties that have a getter setter.
	 *
	 * - Sigh -
	 *
	 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
	 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
	 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
	 */
	function createClassPropertyDecorator(
	    /**
	     * This function is invoked once, when the property is added to a new instance.
	     * When this happens is not strictly determined due to differences in TS and Babel:
	     * Typescript: Usually when constructing the new instance
	     * Babel, sometimes Typescript: during the first get / set
	     * Both: when calling `runLazyInitializers(instance)`
	     */
	    onInitialize, get, set, enumerable, 
	    /**
	     * Can this decorator invoked with arguments? e.g. @decorator(args)
	     */
	    allowCustomArguments) {
	    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
	        if (argLen === void 0) { argLen = 0; }
	        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
	        if (!descriptor) {
	            // typescript (except for getter / setters)
	            var newDescriptor = {
	                enumerable: enumerable,
	                configurable: true,
	                get: function () {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
	                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
	                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
	                    }
	                    else {
	                        set.call(this, key, v);
	                    }
	                }
	            };
	            if (arguments.length < 3 || (arguments.length === 5 && argLen < 3)) {
	                // Typescript target is ES3, so it won't define property for us
	                // or using Reflect.decorate polyfill, which will return no descriptor
	                // (see https://github.com/mobxjs/mobx/issues/333)
	                Object.defineProperty(target, key, newDescriptor);
	            }
	            return newDescriptor;
	        }
	        else {
	            // babel and typescript getter / setter props
	            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
	                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
	                );
	            }
	            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
	            target.__mobxLazyInitializers.push(function (instance) {
	                onInitialize(instance, key, initializer_1 ? initializer_1.call(instance) : value_1, customArgs, descriptor);
	            });
	            return {
	                enumerable: enumerable,
	                configurable: true,
	                get: function () {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    set.call(this, key, v);
	                }
	            };
	        }
	    }
	    if (allowCustomArguments) {
	        /** If custom arguments are allowed, we should return a function that returns a decorator */
	        return function () {
	            /** Direct invocation: @decorator bla */
	            if (quacksLikeADecorator(arguments))
	                return classPropertyDecorator.apply(null, arguments);
	            /** Indirect invocation: @decorator(args) bla */
	            var outerArgs = arguments;
	            var argLen = arguments.length;
	            return function (target, key, descriptor) {
	                return classPropertyDecorator(target, key, descriptor, outerArgs, argLen);
	            };
	        };
	    }
	    return classPropertyDecorator;
	}
	function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
	    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
	        addHiddenProp(instance, "__mobxInitializedProps", {});
	    instance.__mobxInitializedProps[key] = true;
	    onInitialize(instance, key, v, customArgs, baseDescriptor);
	}
	function runLazyInitializers(instance) {
	    if (instance.__mobxDidRunLazyInitializers === true)
	        return;
	    if (instance.__mobxLazyInitializers) {
	        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
	        instance.__mobxDidRunLazyInitializers &&
	            instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
	    }
	}
	function quacksLikeADecorator(args) {
	    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
	}
	
	var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
	    var actionName = args && args.length === 1 ? args[0] : value.name || key || "<unnamed action>";
	    var wrappedAction = action(actionName, value);
	    addHiddenProp(target, key, wrappedAction);
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, getMessage("m001"));
	}, false, true);
	var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
	    defineBoundAction(target, key, value);
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, getMessage("m001"));
	}, false, false);
	var action = function action(arg1, arg2, arg3, arg4) {
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return createAction(arg1.name || "<unnamed action>", arg1);
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return createAction(arg1, arg2);
	    if (arguments.length === 1 && typeof arg1 === "string")
	        return namedActionDecorator(arg1);
	    return namedActionDecorator(arg2).apply(null, arguments);
	};
	action.bound = function boundAction(arg1, arg2, arg3) {
	    if (typeof arg1 === "function") {
	        var action_1 = createAction("<not yet bound action>", arg1);
	        action_1.autoBind = true;
	        return action_1;
	    }
	    return boundActionDecorator.apply(null, arguments);
	};
	function namedActionDecorator(name) {
	    return function (target, prop, descriptor) {
	        if (descriptor && typeof descriptor.value === "function") {
	            // TypeScript @action method() { }. Defined on proto before being decorated
	            // Don't use the field decorator if we are just decorating a method
	            descriptor.value = createAction(name, descriptor.value);
	            descriptor.enumerable = false;
	            descriptor.configurable = true;
	            return descriptor;
	        }
	        if (descriptor !== undefined && descriptor.get !== undefined) {
	            throw new Error("[mobx] action is not expected to be used with getters");
	        }
	        // bound instance methods
	        return actionFieldDecorator(name).apply(this, arguments);
	    };
	}
	function runInAction(arg1, arg2, arg3) {
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    var scope = typeof arg1 === "function" ? arg2 : arg3;
	    invariant(typeof fn === "function", getMessage("m002"));
	    invariant(fn.length === 0, getMessage("m003"));
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    return executeAction(actionName, fn, scope, undefined);
	}
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	function defineBoundAction(target, propertyName, fn) {
	    var res = function () {
	        return executeAction(propertyName, fn, target, arguments);
	    };
	    res.isMobxAction = true;
	    addHiddenProp(target, propertyName, res);
	}
	
	function identityComparer(a, b) {
	    return a === b;
	}
	function structuralComparer(a, b) {
	    return deepEqual(a, b);
	}
	function defaultComparer(a, b) {
	    return areBothNaN(a, b) || identityComparer(a, b);
	}
	var comparer = {
	    identity: identityComparer,
	    structural: structuralComparer,
	    default: defaultComparer
	};
	
	function autorun(arg1, arg2, arg3) {
	    var name, view, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        view = arg2;
	        scope = arg3;
	    }
	    else {
	        name = arg1.name || "Autorun@" + getNextId();
	        view = arg1;
	        scope = arg2;
	    }
	    invariant(typeof view === "function", getMessage("m004"));
	    invariant(isAction(view) === false, getMessage("m005"));
	    if (scope)
	        view = view.bind(scope);
	    var reaction = new Reaction(name, function () {
	        this.track(reactionRunner);
	    });
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	function when(arg1, arg2, arg3, arg4) {
	    var name, predicate, effect, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        predicate = arg2;
	        effect = arg3;
	        scope = arg4;
	    }
	    else {
	        name = "When@" + getNextId();
	        predicate = arg1;
	        effect = arg2;
	        scope = arg3;
	    }
	    var disposer = autorun(name, function (r) {
	        if (predicate.call(scope)) {
	            r.dispose();
	            var prevUntracked = untrackedStart();
	            effect.call(scope);
	            untrackedEnd(prevUntracked);
	        }
	    });
	    return disposer;
	}
	function autorunAsync(arg1, arg2, arg3, arg4) {
	    var name, func, delay, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        func = arg2;
	        delay = arg3;
	        scope = arg4;
	    }
	    else {
	        name = arg1.name || "AutorunAsync@" + getNextId();
	        func = arg1;
	        delay = arg2;
	        scope = arg3;
	    }
	    invariant(isAction(func) === false, getMessage("m006"));
	    if (delay === void 0)
	        delay = 1;
	    if (scope)
	        func = func.bind(scope);
	    var isScheduled = false;
	    var r = new Reaction(name, function () {
	        if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                if (!r.isDisposed)
	                    r.track(reactionRunner);
	            }, delay);
	        }
	    });
	    function reactionRunner() {
	        func(r);
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	function reaction(expression, effect, arg3) {
	    if (arguments.length > 3) {
	        fail(getMessage("m007"));
	    }
	    if (isModifierDescriptor(expression)) {
	        fail(getMessage("m008"));
	    }
	    var opts;
	    if (typeof arg3 === "object") {
	        opts = arg3;
	    }
	    else {
	        opts = {};
	    }
	    opts.name =
	        opts.name || expression.name || effect.name || "Reaction@" + getNextId();
	    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
	    opts.delay = opts.delay || 0;
	    opts.compareStructural = opts.compareStructural || opts.struct || false;
	    // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead
	    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
	    if (opts.context) {
	        expression = expression.bind(opts.context);
	    }
	    var firstTime = true;
	    var isScheduled = false;
	    var value;
	    var equals = opts.equals
	        ? opts.equals
	        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
	    var r = new Reaction(opts.name, function () {
	        if (firstTime || opts.delay < 1) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                reactionRunner();
	            }, opts.delay);
	        }
	    });
	    function reactionRunner() {
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var nextValue = expression(r);
	            changed = firstTime || !equals(value, nextValue);
	            value = nextValue;
	        });
	        if (firstTime && opts.fireImmediately)
	            effect(value, r);
	        if (!firstTime && changed === true)
	            effect(value, r);
	        if (firstTime)
	            firstTime = false;
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	
	/**
	 * A node in the state dependency root that observes other nodes, and can be observed itself.
	 *
	 * ComputedValue will remember the result of the computation for the duration of the batch, or
	 * while being observed.
	 *
	 * During this time it will recompute only when one of its direct dependencies changed,
	 * but only when it is being accessed with `ComputedValue.get()`.
	 *
	 * Implementation description:
	 * 1. First time it's being accessed it will compute and remember result
	 *    give back remembered result until 2. happens
	 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
	 * 3. When it's being accessed, recompute if any shallow dependency changed.
	 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
	 *    go to step 2. either way
	 *
	 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
	 */
	var ComputedValue = (function () {
	    /**
	     * Create a new computed value based on a function expression.
	     *
	     * The `name` property is for debug purposes only.
	     *
	     * The `equals` property specifies the comparer function to use to determine if a newly produced
	     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
	     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
	     * Structural comparison can be convenient if you always produce an new aggregated object and
	     * don't want to notify observers if it is structurally the same.
	     * This is useful for working with vectors, mouse coordinates etc.
	     */
	    function ComputedValue(derivation, scope, equals, name, setter) {
	        this.derivation = derivation;
	        this.scope = scope;
	        this.equals = equals;
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = null; // during tracking it's an array with new observed observers
	        this.isPendingUnobservation = false;
	        this.observers = [];
	        this.observersIndexes = {};
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = new CaughtException(null);
	        this.isComputing = false; // to check for cycles
	        this.isRunningSetter = false;
	        this.name = name || "ComputedValue@" + getNextId();
	        if (setter)
	            this.setter = createAction(name + "-setter", setter);
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        clearObserving(this);
	        this.value = undefined;
	    };
	    /**
	     * Returns the current value of this computed value.
	     * Will evaluate its computation first if needed.
	     */
	    ComputedValue.prototype.get = function () {
	        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
	        if (globalState.inBatch === 0) {
	            // This is an minor optimization which could be omitted to simplify the code
	            // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
	            // tracking as it will never be called again inside this batch.
	            startBatch();
	            if (shouldCompute(this))
	                this.value = this.computeValue(false);
	            endBatch();
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this
	                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, "[ComputedValue '" + this
	                .name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled()) {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                fn: this.derivation
	            });
	        }
	        var oldValue = this.value;
	        var wasSuspended = this.dependenciesState === exports.IDerivationState.NOT_TRACKING;
	        var newValue = (this.value = this.computeValue(true));
	        return (wasSuspended ||
	            isCaughtException(oldValue) ||
	            isCaughtException(newValue) ||
	            !this.equals(oldValue, newValue));
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            try {
	                res = this.derivation.call(this.scope);
	            }
	            catch (e) {
	                res = new CaughtException(e);
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ComputedValue.prototype.whyRun = function () {
	        var isTracking = Boolean(globalState.trackingDerivation);
	        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
	        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
	        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking
	            ? "[active] the value of this computation is needed by a reaction"
	            : this.isComputing
	                ? "[get] The value of this computed was requested outside a reaction"
	                : "[idle] not running at the moment") + "\n" +
	            (this.dependenciesState === exports.IDerivationState.NOT_TRACKING
	                ? getMessage("m032")
	                : " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this.isComputing && isTracking
	                    ? " (... or any observable accessed during the remainder of the current run)"
	                    : "") + "\n    " + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
	    };
	    return ComputedValue;
	}());
	ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
	
	var ObservableObjectAdministration = (function () {
	    function ObservableObjectAdministration(target, name) {
	        this.target = target;
	        this.name = name;
	        this.values = {};
	        this.changeListeners = null;
	        this.interceptors = null;
	    }
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name) {
	    if (isObservableObject(target) && target.hasOwnProperty("$mobx"))
	        return target.$mobx;
	    invariant(Object.isExtensible(target), getMessage("m035"));
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    var adm = new ObservableObjectAdministration(target, name);
	    addHiddenFinalProp(target, "$mobx", adm);
	    return adm;
	}
	function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
	    if (adm.values[propName] && !isComputedValue(adm.values[propName])) {
	        // already observable property
	        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
	        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
	        return;
	    }
	    // not yet observable property
	    if ("value" in descriptor) {
	        // not a computed value
	        if (isModifierDescriptor(descriptor.value)) {
	            // x : ref(someValue)
	            var modifierDescriptor = descriptor.value;
	            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
	        }
	        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
	            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
	        }
	        else if (isComputedValue(descriptor.value)) {
	            // x: computed(someExpr)
	            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
	        }
	        else {
	            // x: someValue
	            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
	        }
	    }
	    else {
	        // get x() { return 3 } set x(v) { }
	        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
	    }
	}
	function defineObservableProperty(adm, propName, newValue, enhancer) {
	    assertPropertyConfigurable(adm.target, propName);
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            object: adm.target,
	            name: propName,
	            type: "add",
	            newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
	    newValue = observable.value; // observableValue might have changed it
	    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
	    notifyPropertyAddition(adm, adm.target, propName, newValue);
	}
	function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
	    if (asInstanceProperty)
	        assertPropertyConfigurable(adm.target, propName);
	    adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);
	    if (asInstanceProperty) {
	        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
	    }
	}
	function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
	    var name = adm.name + "." + propName;
	    computedValue.name = name;
	    if (!computedValue.scope)
	        computedValue.scope = adm.target;
	    adm.values[propName] = computedValue;
	    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
	}
	var observablePropertyConfigs = {};
	var computedPropertyConfigs = {};
	function generateObservablePropConfig(propName) {
	    return (observablePropertyConfigs[propName] ||
	        (observablePropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                return this.$mobx.values[propName].get();
	            },
	            set: function (v) {
	                setPropertyValue(this, propName, v);
	            }
	        }));
	}
	function generateComputedPropConfig(propName) {
	    return (computedPropertyConfigs[propName] ||
	        (computedPropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                return this.$mobx.values[propName].get();
	            },
	            set: function (v) {
	                return this.$mobx.values[propName].set(v);
	            }
	        }));
	}
	function setPropertyValue(instance, name, newValue) {
	    var adm = instance.$mobx;
	    var observable = adm.values[name];
	    // intercept
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            type: "update",
	            object: instance,
	            name: name,
	            newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    newValue = observable.prepareNewValue(newValue);
	    // notify spy & observers
	    if (newValue !== UNCHANGED) {
	        var notify = hasListeners(adm);
	        var notifySpy = isSpyEnabled();
	        var change = notify || notifySpy
	            ? {
	                type: "update",
	                object: instance,
	                oldValue: observable.value,
	                name: name,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(change);
	        observable.setNewValue(newValue);
	        if (notify)
	            notifyListeners(adm, change);
	        if (notifySpy)
	            spyReportEnd();
	    }
	}
	function notifyPropertyAddition(adm, object, name, newValue) {
	    var notify = hasListeners(adm);
	    var notifySpy = isSpyEnabled();
	    var change = notify || notifySpy
	        ? {
	            type: "add",
	            object: object,
	            name: name,
	            newValue: newValue
	        }
	        : null;
	    if (notifySpy)
	        spyReportStart(change);
	    if (notify)
	        notifyListeners(adm, change);
	    if (notifySpy)
	        spyReportEnd();
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        runLazyInitializers(thing);
	        return isObservableObjectAdministration(thing.$mobx);
	    }
	    return false;
	}
	
	/**
	 * Returns true if the provided value is reactive.
	 * @param value object, function or array
	 * @param property if property is specified, checks whether value.property is reactive.
	 */
	function isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableArray(value) || isObservableMap(value))
	            throw new Error(getMessage("m019"));
	        else if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    // For first check, see #701
	    return (isObservableObject(value) ||
	        !!value.$mobx ||
	        isAtom(value) ||
	        isReaction(value) ||
	        isComputedValue(value));
	}
	
	function createDecoratorForEnhancer(enhancer) {
	    invariant(!!enhancer, ":(");
	    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
	        assertPropertyConfigurable(target, name);
	        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
	        var adm = asObservableObject(target, undefined);
	        defineObservableProperty(adm, name, baseValue, enhancer);
	    }, function (name) {
	        var observable = this.$mobx.values[name];
	        if (observable === undefined // See #505
	        )
	            return undefined;
	        return observable.get();
	    }, function (name, value) {
	        setPropertyValue(this, name, value);
	    }, true, false);
	}
	
	function extendObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    return extendObservableHelper(target, deepEnhancer, properties);
	}
	function extendShallowObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    return extendObservableHelper(target, referenceEnhancer, properties);
	}
	function extendObservableHelper(target, defaultEnhancer, properties) {
	    invariant(arguments.length >= 2, getMessage("m014"));
	    invariant(typeof target === "object", getMessage("m015"));
	    invariant(!isObservableMap(target), getMessage("m016"));
	    properties.forEach(function (propSet) {
	        invariant(typeof propSet === "object", getMessage("m017"));
	        invariant(!isObservable(propSet), getMessage("m018"));
	    });
	    var adm = asObservableObject(target);
	    var definedProps = {};
	    // Note could be optimised if properties.length === 1
	    for (var i = properties.length - 1; i >= 0; i--) {
	        var propSet = properties[i];
	        for (var key in propSet)
	            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
	                definedProps[key] = true;
	                if (target === propSet && !isPropertyConfigurable(target, key))
	                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
	                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
	                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
	            }
	    }
	    return target;
	}
	
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	/**
	 * Turns an object, array or function into a reactive structure.
	 * @param v the value which should become observable.
	 */
	function createObservable(v) {
	    if (v === void 0) { v = undefined; }
	    // @observable someProp;
	    if (typeof arguments[1] === "string")
	        return deepDecorator.apply(null, arguments);
	    invariant(arguments.length <= 1, getMessage("m021"));
	    invariant(!isModifierDescriptor(v), getMessage("m020"));
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    var res = deepEnhancer(v, undefined, undefined);
	    // this value could be converted to a new observable data structure, return it
	    if (res !== v)
	        return res;
	    // otherwise, just box it
	    return observable.box(v);
	}
	var observableFactories = {
	    box: function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        return new ObservableValue(value, deepEnhancer, name);
	    },
	    shallowBox: function (value, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowBox");
	        return new ObservableValue(value, referenceEnhancer, name);
	    },
	    array: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        return new ObservableArray(initialValues, deepEnhancer, name);
	    },
	    shallowArray: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowArray");
	        return new ObservableArray(initialValues, referenceEnhancer, name);
	    },
	    map: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        return new ObservableMap(initialValues, deepEnhancer, name);
	    },
	    shallowMap: function (initialValues, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowMap");
	        return new ObservableMap(initialValues, referenceEnhancer, name);
	    },
	    object: function (props, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("object");
	        var res = {};
	        // convert to observable object
	        asObservableObject(res, name);
	        // add properties
	        extendObservable(res, props);
	        return res;
	    },
	    shallowObject: function (props, name) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("shallowObject");
	        var res = {};
	        asObservableObject(res, name);
	        extendShallowObservable(res, props);
	        return res;
	    },
	    ref: function () {
	        if (arguments.length < 2) {
	            // although ref creates actually a modifier descriptor, the type of the resultig properties
	            // of the object is `T` in the end, when the descriptors are interpreted
	            return createModifierDescriptor(referenceEnhancer, arguments[0]);
	        }
	        else {
	            return refDecorator.apply(null, arguments);
	        }
	    },
	    shallow: function () {
	        if (arguments.length < 2) {
	            // although ref creates actually a modifier descriptor, the type of the resultig properties
	            // of the object is `T` in the end, when the descriptors are interpreted
	            return createModifierDescriptor(shallowEnhancer, arguments[0]);
	        }
	        else {
	            return shallowDecorator.apply(null, arguments);
	        }
	    },
	    deep: function () {
	        if (arguments.length < 2) {
	            // although ref creates actually a modifier descriptor, the type of the resultig properties
	            // of the object is `T` in the end, when the descriptors are interpreted
	            return createModifierDescriptor(deepEnhancer, arguments[0]);
	        }
	        else {
	            return deepDecorator.apply(null, arguments);
	        }
	    },
	    struct: function () {
	        if (arguments.length < 2) {
	            // although ref creates actually a modifier descriptor, the type of the resultig properties
	            // of the object is `T` in the end, when the descriptors are interpreted
	            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
	        }
	        else {
	            return deepStructDecorator.apply(null, arguments);
	        }
	    }
	};
	var observable = createObservable;
	// weird trick to keep our typings nicely with our funcs, and still extend the observable function
	Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
	observable.deep.struct = observable.struct;
	observable.ref.struct = function () {
	    if (arguments.length < 2) {
	        return createModifierDescriptor(refStructEnhancer, arguments[0]);
	    }
	    else {
	        return refStructDecorator.apply(null, arguments);
	    }
	};
	function incorrectlyUsedAsDecorator(methodName) {
	    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}
	
	function isModifierDescriptor(thing) {
	    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
	}
	function createModifierDescriptor(enhancer, initialValue) {
	    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
	    return {
	        isMobxModifierDescriptor: true,
	        initialValue: initialValue,
	        enhancer: enhancer
	    };
	}
	function deepEnhancer(v, _, name) {
	    if (isModifierDescriptor(v))
	        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    if (Array.isArray(v))
	        return observable.array(v, name);
	    if (isPlainObject(v))
	        return observable.object(v, name);
	    if (isES6Map(v))
	        return observable.map(v, name);
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (isModifierDescriptor(v))
	        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.shallowArray(v, name);
	    if (isPlainObject(v))
	        return observable.shallowObject(v, name);
	    if (isES6Map(v))
	        return observable.shallowMap(v, name);
	    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
	}
	function referenceEnhancer(newValue) {
	    // never turn into an observable
	    return newValue;
	}
	function deepStructEnhancer(v, oldValue, name) {
	    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
	    // more suited for immutable objects
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    if (Array.isArray(v))
	        return new ObservableArray(v, deepStructEnhancer, name);
	    if (isES6Map(v))
	        return new ObservableMap(v, deepStructEnhancer, name);
	    if (isPlainObject(v)) {
	        var res = {};
	        asObservableObject(res, name);
	        extendObservableHelper(res, deepStructEnhancer, [v]);
	        return res;
	    }
	    return v;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}
	
	/**
	 * During a transaction no views are updated until the end of the transaction.
	 * The transaction will be run synchronously nonetheless.
	 *
	 * @param action a function that updates some reactive state
	 * @returns any value that was returned by the 'action' parameter.
	 */
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    startBatch();
	    try {
	        return action.apply(thisArg);
	    }
	    finally {
	        endBatch();
	    }
	}
	
	var ObservableMapMarker = {};
	var ObservableMap = (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this.$mobx = ObservableMapMarker;
	        this._data = Object.create(null);
	        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
	        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.dehancer = undefined;
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return typeof this._data[key] !== "undefined";
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (!this.isValidKey(key))
	            return false;
	        key = "" + key;
	        if (this._hasMap[key])
	            return this._hasMap[key].get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        this.assertValidKey(key);
	        key = "" + key;
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        this.assertValidKey(key);
	        key = "" + key;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: this._data[key].value,
	                    name: key
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(change);
	            transaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable$$1 = _this._data[key];
	                observable$$1.setNewValue(undefined);
	                _this._data[key] = undefined;
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
	        var entry = this._hasMap[key];
	        if (entry) {
	            entry.setNewValue(value);
	        }
	        else {
	            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
	        }
	        return entry;
	    };
	    ObservableMap.prototype._updateValue = function (name, newValue) {
	        var observable$$1 = this._data[name];
	        newValue = observable$$1.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this,
	                    oldValue: observable$$1.value,
	                    name: name,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy)
	                spyReportStart(change);
	            observable$$1.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (name, newValue) {
	        var _this = this;
	        transaction(function () {
	            var observable$$1 = (_this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false));
	            newValue = observable$$1.value; // value might have been changed
	            _this._updateHasMapEntry(name, true);
	            _this._keys.push(name);
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this,
	                name: name,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy)
	            spyReportStart(change);
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        key = "" + key;
	        if (this.has(key))
	            return this.dehanceValue(this._data[key].get());
	        return this.dehanceValue(undefined);
	    };
	    ObservableMap.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableMap.prototype.keys = function () {
	        return arrayAsIterator(this._keys.slice());
	    };
	    ObservableMap.prototype.values = function () {
	        return arrayAsIterator(this._keys.map(this.get, this));
	    };
	    ObservableMap.prototype.entries = function () {
	        var _this = this;
	        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
	    };
	    /** Merge another object into this object, returns this. */
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (isPlainObject(other))
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_a) {
	                    var key = _a[0], value = _a[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other))
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            else if (other !== null && other !== undefined)
	                fail("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                _this.keys().forEach(_this.delete, _this);
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        transaction(function () {
	            // grab all the keys that are present in the new map but not present in the current map
	            // and delete them from the map, then merge the new map
	            // this will cause reactions only on changed values
	            var newKeys = getMapLikeKeys(values);
	            var oldKeys = _this.keys();
	            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
	            missingKeys.forEach(function (k) { return _this.delete(k); });
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns a shallow non observable object clone of this map.
	     * Note that the values might still be observable. For a deep clone use mobx.toJS.
	     */
	    ObservableMap.prototype.toJS = function () {
	        var _this = this;
	        var res = {};
	        this.keys().forEach(function (key) { return (res[key] = _this.get(key)); });
	        return res;
	    };
	    ObservableMap.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toJS();
	    };
	    ObservableMap.prototype.isValidKey = function (key) {
	        if (key === null || key === undefined)
	            return false;
	        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
	            return true;
	        return false;
	    };
	    ObservableMap.prototype.assertValidKey = function (key) {
	        if (!this.isValidKey(key))
	            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return (this.name +
	            "[{ " +
	            this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
	            " }]");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        invariant(fireImmediately !== true, getMessage("m033"));
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	declareIterator(ObservableMap.prototype, function () {
	    return this.entries();
	});
	function map(initialValues) {
	    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
	    return observable.map(initialValues);
	}
	/* 'var' fixes small-build issue */
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
	
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	function getGlobal() {
	    return typeof window !== "undefined" ? window : global;
	}
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail(message, thing) {
	    invariant(false, message, thing);
	    throw "X"; // unreachable
	}
	function invariant(check, message, thing) {
	    if (!check)
	        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
	}
	/**
	 * Prints a deprecation message, but only one time.
	 * Returns false if the deprecated message was already printed before
	 */
	var deprecatedMessages = [];
	function deprecated(msg) {
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	/**
	 * Makes sure that the provided function is invoked at most once.
	 */
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function joinStrings(things, limit, separator) {
	    if (limit === void 0) { limit = 100; }
	    if (separator === void 0) { separator = " - "; }
	    if (!things)
	        return "";
	    var sliced = things.slice(0, limit);
	    return "" + sliced.join(separator) + (things.length > limit
	        ? " (... and " + (things.length - limit) + "more)"
	        : "");
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	function objectAssign() {
	    var res = arguments[0];
	    for (var i = 1, l = arguments.length; i < l; i++) {
	        var source = arguments[i];
	        for (var key in source)
	            if (hasOwnProperty(source, key)) {
	                res[key] = source[key];
	            }
	    }
	    return res;
	}
	var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwnProperty(object, propName) {
	    return prototypeHasOwnProperty.call(object, propName);
	}
	function makeNonEnumerable(object, propNames) {
	    for (var i = 0; i < propNames.length; i++) {
	        addHiddenProp(object, propNames[i], object[propNames[i]]);
	    }
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function getEnumerableKeys(obj) {
	    var res = [];
	    for (var key in obj)
	        res.push(key);
	    return res;
	}
	/**
	 * Naive deepEqual. Doesn't check for prototype, non-enumerable or out-of-range properties on arrays.
	 * If you have such a case, you probably should use this function but something fancier :).
	 */
	function deepEqual(a, b) {
	    if (a === null && b === null)
	        return true;
	    if (a === undefined && b === undefined)
	        return true;
	    if (areBothNaN(a, b))
	        return true;
	    if (typeof a !== "object")
	        return a === b;
	    var aIsArray = isArrayLike(a);
	    var aIsMap = isMapLike(a);
	    if (aIsArray !== isArrayLike(b)) {
	        return false;
	    }
	    else if (aIsMap !== isMapLike(b)) {
	        return false;
	    }
	    else if (aIsArray) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = a.length - 1; i >= 0; i--)
	            if (!deepEqual(a[i], b[i]))
	                return false;
	        return true;
	    }
	    else if (aIsMap) {
	        if (a.size !== b.size)
	            return false;
	        var equals_1 = true;
	        a.forEach(function (value, key) {
	            equals_1 = equals_1 && deepEqual(b.get(key), value);
	        });
	        return equals_1;
	    }
	    else if (typeof a === "object" && typeof b === "object") {
	        if (a === null || b === null)
	            return false;
	        if (isMapLike(a) && isMapLike(b)) {
	            if (a.size !== b.size)
	                return false;
	            // Freaking inefficient.... Create PR if you run into this :) Much appreciated!
	            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
	        }
	        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
	            return false;
	        for (var prop in a) {
	            if (!(prop in b))
	                return false;
	            if (!deepEqual(a[prop], b[prop]))
	                return false;
	        }
	        return true;
	    }
	    return false;
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	function areBothNaN(a, b) {
	    return (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b));
	}
	/**
	 * Returns whether the argument is an array, disregarding observability.
	 */
	function isArrayLike(x) {
	    return Array.isArray(x) || isObservableArray(x);
	}
	function isMapLike(x) {
	    return isES6Map(x) || isObservableMap(x);
	}
	function isES6Map(thing) {
	    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
	        return true;
	    return false;
	}
	function getMapLikeKeys(map$$1) {
	    var keys;
	    if (isPlainObject(map$$1))
	        keys = Object.keys(map$$1);
	    else if (Array.isArray(map$$1))
	        keys = map$$1.map(function (_a) {
	            var key = _a[0];
	            return key;
	        });
	    else if (isMapLike(map$$1))
	        keys = Array.from(map$$1.keys());
	    else
	        fail("Cannot get keys from " + map$$1);
	    return keys;
	}
	function primitiveSymbol() {
	    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? "" + value : value;
	}
	
	/**
	 * These values will persist if global state is reset
	 */
	var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
	var MobXGlobals = (function () {
	    function MobXGlobals() {
	        /**
	         * MobXGlobals version.
	         * MobX compatiblity with other versions loaded in memory as long as this version matches.
	         * It indicates that the global state still stores similar information
	         */
	        this.version = 5;
	        /**
	         * Currently running derivation
	         */
	        this.trackingDerivation = null;
	        /**
	         * Are we running a computation currently? (not a reaction)
	         */
	        this.computationDepth = 0;
	        /**
	         * Each time a derivation is tracked, it is assigned a unique run-id
	         */
	        this.runId = 0;
	        /**
	         * 'guid' for general purpose. Will be persisted amongst resets.
	         */
	        this.mobxGuid = 0;
	        /**
	         * Are we in a batch block? (and how many of them)
	         */
	        this.inBatch = 0;
	        /**
	         * Observables that don't have observers anymore, and are about to be
	         * suspended, unless somebody else accesses it in the same batch
	         *
	         * @type {IObservable[]}
	         */
	        this.pendingUnobservations = [];
	        /**
	         * List of scheduled, not yet executed, reactions.
	         */
	        this.pendingReactions = [];
	        /**
	         * Are we currently processing reactions?
	         */
	        this.isRunningReactions = false;
	        /**
	         * Is it allowed to change observables at this point?
	         * In general, MobX doesn't allow that when running computations and React.render.
	         * To ensure that those functions stay pure.
	         */
	        this.allowStateChanges = true;
	        /**
	         * If strict mode is enabled, state changes are by default not allowed
	         */
	        this.strictMode = false;
	        /**
	         * Used by createTransformer to detect that the global state has been reset.
	         */
	        this.resetId = 0;
	        /**
	         * Spy callbacks
	         */
	        this.spyListeners = [];
	        /**
	         * Globally attached error handlers that react specifically to errors in reactions
	         */
	        this.globalReactionErrorHandlers = [];
	    }
	    return MobXGlobals;
	}());
	var globalState = new MobXGlobals();
	var shareGlobalStateCalled = false;
	var runInIsolationCalled = false;
	var warnedAboutMultipleInstances = false;
	{
	    var global_1 = getGlobal();
	    if (!global_1.__mobxInstanceCount) {
	        global_1.__mobxInstanceCount = 1;
	    }
	    else {
	        global_1.__mobxInstanceCount++;
	        setTimeout(function () {
	            if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
	                warnedAboutMultipleInstances = true;
	                console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
	            }
	        });
	    }
	}
	function isolateGlobalState() {
	    runInIsolationCalled = true;
	    getGlobal().__mobxInstanceCount--;
	}
	function shareGlobalState() {
	    // TODO: remove in 4.0; just use peer dependencies instead.
	    deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
	    shareGlobalStateCalled = true;
	    var global = getGlobal();
	    var ownState = globalState;
	    /**
	     * Backward compatibility check
	     */
	    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
	        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
	    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
	        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
	    if (global.__mobxGlobal)
	        globalState = global.__mobxGlobal;
	    else
	        global.__mobxGlobal = ownState;
	}
	function getGlobalState() {
	    return globalState;
	}
	
	/**
	 * For testing purposes only; this will break the internal state of existing observables,
	 * but can be used to get back at a stable state after throwing errors
	 */
	function resetGlobalState() {
	    globalState.resetId++;
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.strictMode;
	}
	
	function hasObservers(observable) {
	    return observable.observers && observable.observers.length > 0;
	}
	function getObservers(observable) {
	    return observable.observers;
	}
	function addObserver(observable, node) {
	    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
	    // invariantObservers(observable);
	    var l = observable.observers.length;
	    if (l) {
	        // because object assignment is relatively expensive, let's not store data about index 0.
	        observable.observersIndexes[node.__mapid] = l;
	    }
	    observable.observers[l] = node;
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
	}
	function removeObserver(observable, node) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
	    // invariantObservers(observable);
	    if (observable.observers.length === 1) {
	        // deleting last observer
	        observable.observers.length = 0;
	        queueForUnobservation(observable);
	    }
	    else {
	        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
	        var list = observable.observers;
	        var map = observable.observersIndexes;
	        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
	        if (filler !== node) {
	            // otherwise node was the last element, which already got removed from array
	            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
	            if (index) {
	                // map store all indexes but 0, see comment in `addObserver`
	                map[filler.__mapid] = index;
	            }
	            else {
	                delete map[filler.__mapid];
	            }
	            list[index] = filler;
	        }
	        delete map[node.__mapid];
	    }
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
	}
	function queueForUnobservation(observable) {
	    if (!observable.isPendingUnobservation) {
	        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
	        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	/**
	 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
	 * During a batch `onBecomeUnobserved` will be called at most once per observable.
	 * Avoids unnecessary recalculations.
	 */
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        // the batch is actually about to finish, all unobserving should happen here.
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable = list[i];
	            observable.isPendingUnobservation = false;
	            if (observable.observers.length === 0) {
	                observable.onBecomeUnobserved();
	                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        /**
	         * Simple optimization, give each derivation run an unique id (runId)
	         * Check if last time this observable was accessed the same runId is used
	         * if this is the case, the relation is already known
	         */
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	        }
	    }
	    else if (observable.observers.length === 0) {
	        queueForUnobservation(observable);
	    }
	}
	/**
	 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
	 * It will propagate changes to observers from previous run
	 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
	 * Hopefully self reruning autoruns aren't a feature people should depend on
	 * Also most basic use cases should be ok
	 */
	// Called by Atom when its value changes
	function propagateChanged(observable) {
	    // invariantLOS(observable, "changed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE)
	            d.onBecomeStale();
	        d.dependenciesState = exports.IDerivationState.STALE;
	    }
	    // invariantLOS(observable, "changed end");
	}
	// Called by ComputedValue when it recalculate and its value changed
	function propagateChangeConfirmed(observable) {
	    // invariantLOS(observable, "confirmed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = exports.IDerivationState.STALE;
	        else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
	        )
	            observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	    }
	    // invariantLOS(observable, "confirmed end");
	}
	// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
	function propagateMaybeChanged(observable) {
	    // invariantLOS(observable, "maybe start");
	    if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
	    var observers = observable.observers;
	    var i = observers.length;
	    while (i--) {
	        var d = observers[i];
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
	            d.onBecomeStale();
	        }
	    }
	    // invariantLOS(observable, "maybe end");
	}
	
	(function (IDerivationState) {
	    // before being run or (outside batch and not being observed)
	    // at this point derivation is not holding any data about dependency tree
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    // no shallow dependency changed since last computation
	    // won't recalculate derivation
	    // this is what makes mobx fast
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    // some deep dependency changed, but don't know if shallow dependency changed
	    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
	    // currently only ComputedValue will propagate POSSIBLY_STALE
	    //
	    // having this state is second big optimization:
	    // don't have to recompute on every dependency change, but only when it's needed
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    // A shallow dependency has changed since last computation and the derivation
	    // will need to recompute when it's needed next.
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(exports.IDerivationState || (exports.IDerivationState = {}));
	var CaughtException = (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	        // Empty
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	/**
	 * Finds out whether any dependency of the derivation has actually changed.
	 * If dependenciesState is 1 then it will recalculate dependencies,
	 * if any dependency changed it will propagate it by changing dependenciesState to 2.
	 *
	 * By iterating over the dependencies in the same order that they were reported and
	 * stopping on the first change, all the recalculations are only called for ComputedValues
	 * that will be tracked by derivation. That is because we assume that if the first x
	 * dependencies of the derivation doesn't change then the derivation should run the same way
	 * up until accessing x-th dependency.
	 */
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case exports.IDerivationState.UP_TO_DATE:
	            return false;
	        case exports.IDerivationState.NOT_TRACKING:
	        case exports.IDerivationState.STALE:
	            return true;
	        case exports.IDerivationState.POSSIBLY_STALE: {
	            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    try {
	                        obj.get();
	                    }
	                    catch (e) {
	                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
	                    // and `derivation` is an observer of `obj`
	                    if (derivation.dependenciesState === exports.IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            return false;
	        }
	    }
	}
	function isComputingDerivation() {
	    return globalState.trackingDerivation !== null; // filter out actions inside computations
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers$$1 = atom.observers.length > 0;
	    // Should never be possible to change an observed observable from inside computed, see #798
	    if (globalState.computationDepth > 0 && hasObservers$$1)
	        fail(getMessage("m031") + atom.name);
	    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
	    if (!globalState.allowStateChanges && hasObservers$$1)
	        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
	}
	/**
	 * Executes the provided function `f` and tracks which observables are being accessed.
	 * The tracking information is stored on the `derivation` object and the derivation is registered
	 * as observer of any of the accessed observables.
	 */
	function trackDerivedFunction(derivation, f, context) {
	    // pre allocate array allocation + room for variation in deps
	    // array will be trimmed by bindDependencies
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    try {
	        result = f.call(context);
	    }
	    catch (e) {
	        result = new CaughtException(e);
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    return result;
	}
	/**
	 * diffs newObserving with observing.
	 * update observing to be newObserving with unique observables
	 * notify observers that become observed/unobserved
	 */
	function bindDependencies(derivation) {
	    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
	    var prevObserving = derivation.observing;
	    var observing = (derivation.observing = derivation.newObserving);
	    var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
	    // Go through all new observables and check diffValue: (this list can contain duplicates):
	    //   0: first occurrence, change to 1 and keep it
	    //   1: extra occurrence, drop it
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
	        // not hitting the condition
	        if (dep.dependenciesState > lowestNewObservingDerivationState) {
	            lowestNewObservingDerivationState = dep.dependenciesState;
	        }
	    }
	    observing.length = i0;
	    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
	    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
	    //   0: it's not in new observables, unobserve it
	    //   1: it keeps being observed, don't want to notify it. change to 0
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    // Go through all new observables and check diffValue: (now it should be unique)
	    //   0: it was set to 0 in last loop. don't need to do anything.
	    //   1: it wasn't observed, let's observe it. set back to 0
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	    // Some new observed derivations may become stale during this derivation computation
	    // so they have had no chance to propagate staleness (#916)
	    if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
	        derivation.dependenciesState = lowestNewObservingDerivationState;
	        derivation.onBecomeStale();
	    }
	}
	function clearObserving(derivation) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
	    var obs = derivation.observing;
	    derivation.observing = [];
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    var res = action();
	    untrackedEnd(prev);
	    return res;
	}
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	/**
	 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
	 *
	 */
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	}
	
	var Reaction = (function () {
	    function Reaction(name, onInvalidate) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = [];
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    /**
	     * internal, use schedule() if you intend to kick off a reaction
	     */
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                this.onInvalidate();
	                if (this._isTrackPending && isSpyEnabled()) {
	                    // onInvalidate didn't trigger track right away..
	                    spyReport({
	                        object: this,
	                        type: "scheduled-reaction"
	                    });
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify) {
	            startTime = Date.now();
	            spyReportStart({
	                object: this,
	                type: "reaction",
	                fn: fn
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            // disposed during last run. Clean up everything that was bound after the dispose call.
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify) {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
	        var messageToUser = getMessage("m037");
	        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
	        /** If debugging brought you here, please, read the above message :-). Tnx! */
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                message: message,
	                error: error,
	                object: this
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                // if disposed while running, clean up later. Maybe not optimal, but rare case
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        r.onError = registerErrorHandler;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.whyRun = function () {
	        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
	        return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed
	            ? "stopped"
	            : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this._isRunning
	            ? " (... or any observable accessed during the remainder of the current run)"
	            : "") + "\n\t" + getMessage("m038") + "\n";
	    };
	    return Reaction;
	}());
	function registerErrorHandler(handler) {
	    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
	    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
	    this.$mobx.errorHandler = handler;
	}
	function onReactionError(handler) {
	    globalState.globalReactionErrorHandlers.push(handler);
	    return function () {
	        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
	        if (idx >= 0)
	            globalState.globalReactionErrorHandlers.splice(idx, 1);
	    };
	}
	/**
	 * Magic number alert!
	 * Defines within how many times a reaction is allowed to re-trigger itself
	 * until it is assumed that this is gonna be a never ending loop...
	 */
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    // Trampolining, if runReactions are already running, new reactions will be picked up
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    // While running reactions, new reactions might be triggered.
	    // Hence we work with two variables and check whether
	    // we converge to no remaining reactions after a while.
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
	                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0); // clear reactions
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);
	function setReactionScheduler(fn) {
	    var baseScheduler = reactionScheduler;
	    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
	}
	
	function asReference(value) {
	    deprecated("asReference is deprecated, use observable.ref instead");
	    return observable.ref(value);
	}
	function asStructure(value) {
	    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
	    return observable.struct(value);
	}
	function asFlat(value) {
	    deprecated("asFlat is deprecated, use observable.shallow instead");
	    return observable.shallow(value);
	}
	function asMap(data) {
	    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
	    return observable.map(data || {});
	}
	
	function createComputedDecorator(equals) {
	    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
	        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
	        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
	        var adm = asObservableObject(target, "");
	        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
	    }, function (name) {
	        var observable = this.$mobx.values[name];
	        if (observable === undefined // See #505
	        )
	            return undefined;
	        return observable.get();
	    }, function (name, value) {
	        this.$mobx.values[name].set(value);
	    }, false, false);
	}
	var computedDecorator = createComputedDecorator(comparer.default);
	var computedStructDecorator = createComputedDecorator(comparer.structural);
	/**
	 * Decorator for class properties: @computed get value() { return expr; }.
	 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
	 */
	var computed = function computed(arg1, arg2, arg3) {
	    if (typeof arg2 === "string") {
	        return computedDecorator.apply(null, arguments);
	    }
	    invariant(typeof arg1 === "function", getMessage("m011"));
	    invariant(arguments.length < 3, getMessage("m012"));
	    var opts = typeof arg2 === "object" ? arg2 : {};
	    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
	    var equals = opts.equals
	        ? opts.equals
	        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
	    return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
	};
	computed.struct = computedStructDecorator;
	computed.equals = createComputedDecorator;
	
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            invariant(property === undefined, getMessage("m036"));
	            return thing.$mobx.atom;
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return getAtom(anyThing._keys);
	            var observable = anyThing._data[property] || anyThing._hasMap[property];
	            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        runLazyInitializers(thing);
	        if (property && !thing.$mobx)
	            thing[property]; // See #1072 // TODO: remove in 4.0
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail("please specify a property");
	            var observable = thing.$mobx.values[property];
	            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing.$mobx)) {
	            // disposer function
	            return thing.$mobx;
	        }
	    }
	    return fail("Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    invariant(thing, "Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing))
	        return thing;
	    // Initializers run lazily when transpiling to babel, so make sure they are run...
	    runLazyInitializers(thing);
	    if (thing.$mobx)
	        return thing.$mobx;
	    invariant(false, "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing); // valid for arrays as well
	    return named.name;
	}
	
	function isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        if (!value.$mobx.values[property])
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	function observeObservable(thing, listener, fireImmediately) {
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	function interceptInterceptable(thing, handler) {
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    return getAdministration(thing, property).intercept(handler);
	}
	
	/**
	 * expr can be used to create temporarily views inside views.
	 * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
	 *
	 * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
	 * instead it will only rerenders when the current todo is (de)selected.
	 *
	 * reactiveComponent((props) => {
	 *     const todo = props.todo;
	 *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
	 *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
	 * });
	 *
	 */
	function expr(expr, scope) {
	    if (!isComputingDerivation())
	        console.warn(getMessage("m013"));
	    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
	    return computed(expr, { context: scope }).get();
	}
	
	function toJS(source, detectCycles, __alreadySeen) {
	    if (detectCycles === void 0) { detectCycles = true; }
	    if (__alreadySeen === void 0) { __alreadySeen = []; }
	    // optimization: using ES6 map would be more efficient!
	    // optimization: lift this function outside toJS, this makes recursion expensive
	    function cache(value) {
	        if (detectCycles)
	            __alreadySeen.push([source, value]);
	        return value;
	    }
	    if (isObservable(source)) {
	        if (detectCycles && __alreadySeen === null)
	            __alreadySeen = [];
	        if (detectCycles && source !== null && typeof source === "object") {
	            for (var i = 0, l = __alreadySeen.length; i < l; i++)
	                if (__alreadySeen[i][0] === source)
	                    return __alreadySeen[i][1];
	        }
	        if (isObservableArray(source)) {
	            var res = cache([]);
	            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
	            res.length = toAdd.length;
	            for (var i = 0, l = toAdd.length; i < l; i++)
	                res[i] = toAdd[i];
	            return res;
	        }
	        if (isObservableObject(source)) {
	            var res = cache({});
	            for (var key in source)
	                res[key] = toJS(source[key], detectCycles, __alreadySeen);
	            return res;
	        }
	        if (isObservableMap(source)) {
	            var res_1 = cache({});
	            source.forEach(function (value, key) { return (res_1[key] = toJS(value, detectCycles, __alreadySeen)); });
	            return res_1;
	        }
	        if (isObservableValue(source))
	            return toJS(source.get(), detectCycles, __alreadySeen);
	    }
	    return source;
	}
	
	function createTransformer(transformer, onCleanup) {
	    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
	    // Memoizes: object id -> reactive view that applies transformer to the object
	    var objectCache = {};
	    // If the resetId changes, we will clear the object cache, see #163
	    // This construction is used to avoid leaking refs to the objectCache directly
	    var resetId = globalState.resetId;
	    // Local transformer class specifically for this transformer
	    var Transformer = (function (_super) {
	        __extends(Transformer, _super);
	        function Transformer(sourceIdentifier, sourceObject) {
	            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
	            _this.sourceIdentifier = sourceIdentifier;
	            _this.sourceObject = sourceObject;
	            return _this;
	        }
	        Transformer.prototype.onBecomeUnobserved = function () {
	            var lastValue = this.value;
	            _super.prototype.onBecomeUnobserved.call(this);
	            delete objectCache[this.sourceIdentifier];
	            if (onCleanup)
	                onCleanup(lastValue, this.sourceObject);
	        };
	        return Transformer;
	    }(ComputedValue));
	    return function (object) {
	        if (resetId !== globalState.resetId) {
	            objectCache = {};
	            resetId = globalState.resetId;
	        }
	        var identifier = getMemoizationId(object);
	        var reactiveTransformer = objectCache[identifier];
	        if (reactiveTransformer)
	            return reactiveTransformer.get();
	        // Not in cache; create a reactive view
	        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
	        return reactiveTransformer.get();
	    };
	}
	function getMemoizationId(object) {
	    if (typeof object === "string" || typeof object === "number")
	        return object;
	    if (object === null || typeof object !== "object")
	        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
	    var tid = object.$transformId;
	    if (tid === undefined) {
	        tid = getNextId();
	        addHiddenProp(object, "$transformId", tid);
	    }
	    return tid;
	}
	
	function log(msg) {
	    console.log(msg);
	    return msg;
	}
	function whyRun(thing, prop) {
	    switch (arguments.length) {
	        case 0:
	            thing = globalState.trackingDerivation;
	            if (!thing)
	                return log(getMessage("m024"));
	            break;
	        case 2:
	            thing = getAtom(thing, prop);
	            break;
	    }
	    thing = getAtom(thing);
	    if (isComputedValue(thing))
	        return log(thing.whyRun());
	    else if (isReaction(thing))
	        return log(thing.whyRun());
	    return fail(getMessage("m025"));
	}
	
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (hasObservers(node))
	        result.observers = getObservers(node).map(nodeToObserverTree);
	    return result;
	}
	
	function interceptReads(thing, propOrHandler, handler) {
	    var target;
	    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
	        target = getAdministration(thing);
	    }
	    else if (isObservableObject(thing)) {
	        if (typeof propOrHandler !== "string")
	            return fail("InterceptReads can only be used with a specific property, not with an object in general");
	        target = getAdministration(thing, propOrHandler);
	    }
	    else {
	        return fail("Expected observable map, object or array as first array");
	    }
	    if (target.dehancer !== undefined)
	        return fail("An intercept reader was already established");
	    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
	    return function () {
	        target.dehancer = undefined;
	    };
	}
	
	/**
	 * (c) Michel Weststrate 2015 - 2016
	 * MIT Licensed
	 *
	 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
	 * this is a good place to start:
	 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
	 *
	 * Source folders:
	 * ===============
	 *
	 * - api/     Most of the public static methods exposed by the module can be found here.
	 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
	 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
	 * - utils/   Utility stuff.
	 *
	 */
	var extras = {
	    allowStateChanges: allowStateChanges,
	    deepEqual: deepEqual,
	    getAtom: getAtom,
	    getDebugName: getDebugName,
	    getDependencyTree: getDependencyTree,
	    getAdministration: getAdministration,
	    getGlobalState: getGlobalState,
	    getObserverTree: getObserverTree,
	    interceptReads: interceptReads,
	    isComputingDerivation: isComputingDerivation,
	    isSpyEnabled: isSpyEnabled,
	    onReactionError: onReactionError,
	    reserveArrayBuffer: reserveArrayBuffer,
	    resetGlobalState: resetGlobalState,
	    isolateGlobalState: isolateGlobalState,
	    shareGlobalState: shareGlobalState,
	    spyReport: spyReport,
	    spyReportEnd: spyReportEnd,
	    spyReportStart: spyReportStart,
	    setReactionScheduler: setReactionScheduler
	};
	var everything = {
	    Reaction: Reaction,
	    untracked: untracked,
	    Atom: Atom,
	    BaseAtom: BaseAtom,
	    useStrict: useStrict,
	    isStrictModeEnabled: isStrictModeEnabled,
	    spy: spy,
	    comparer: comparer,
	    asReference: asReference,
	    asFlat: asFlat,
	    asStructure: asStructure,
	    asMap: asMap,
	    isModifierDescriptor: isModifierDescriptor,
	    isObservableObject: isObservableObject,
	    isBoxedObservable: isObservableValue,
	    isObservableArray: isObservableArray,
	    ObservableMap: ObservableMap,
	    isObservableMap: isObservableMap,
	    map: map,
	    transaction: transaction,
	    observable: observable,
	    computed: computed,
	    isObservable: isObservable,
	    isComputed: isComputed,
	    extendObservable: extendObservable,
	    extendShallowObservable: extendShallowObservable,
	    observe: observe,
	    intercept: intercept,
	    autorun: autorun,
	    autorunAsync: autorunAsync,
	    when: when,
	    reaction: reaction,
	    action: action,
	    isAction: isAction,
	    runInAction: runInAction,
	    expr: expr,
	    toJS: toJS,
	    createTransformer: createTransformer,
	    whyRun: whyRun,
	    isArrayLike: isArrayLike,
	    extras: extras
	};
	var warnedAboutDefaultExport = false;
	var _loop_1 = function (p) {
	    var val = everything[p];
	    Object.defineProperty(everything, p, {
	        get: function () {
	            if (!warnedAboutDefaultExport) {
	                warnedAboutDefaultExport = true;
	                console.warn("Using default export (`import mobx from 'mobx'`) is deprecated " +
	                    "and won’t work in mobx@4.0.0\n" +
	                    "Use `import * as mobx from 'mobx'` instead");
	            }
	            return val;
	        }
	    });
	};
	for (var p in everything) {
	    _loop_1(p);
	}
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: spy, extras: extras });
	}
	
	exports.extras = extras;
	exports['default'] = everything;
	exports.Reaction = Reaction;
	exports.untracked = untracked;
	exports.Atom = Atom;
	exports.BaseAtom = BaseAtom;
	exports.useStrict = useStrict;
	exports.isStrictModeEnabled = isStrictModeEnabled;
	exports.spy = spy;
	exports.comparer = comparer;
	exports.asReference = asReference;
	exports.asFlat = asFlat;
	exports.asStructure = asStructure;
	exports.asMap = asMap;
	exports.isModifierDescriptor = isModifierDescriptor;
	exports.isObservableObject = isObservableObject;
	exports.isBoxedObservable = isObservableValue;
	exports.isObservableArray = isObservableArray;
	exports.ObservableMap = ObservableMap;
	exports.isObservableMap = isObservableMap;
	exports.map = map;
	exports.transaction = transaction;
	exports.observable = observable;
	exports.computed = computed;
	exports.isObservable = isObservable;
	exports.isComputed = isComputed;
	exports.extendObservable = extendObservable;
	exports.extendShallowObservable = extendShallowObservable;
	exports.observe = observe;
	exports.intercept = intercept;
	exports.autorun = autorun;
	exports.autorunAsync = autorunAsync;
	exports.when = when;
	exports.reaction = reaction;
	exports.action = action;
	exports.isAction = isAction;
	exports.runInAction = runInAction;
	exports.expr = expr;
	exports.toJS = toJS;
	exports.createTransformer = createTransformer;
	exports.whyRun = whyRun;
	exports.isArrayLike = isArrayLike;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _defineProperty=__webpack_require__(346);var _defineProperty2=_interopRequireDefault(_defineProperty);var _getOwnPropertyDescriptor=__webpack_require__(1020);var _getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor);var _stringify=__webpack_require__(1328);var _stringify2=_interopRequireDefault(_stringify);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _desc,_value,_class,_descriptor;var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _mobx=__webpack_require__(1420);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;(0,_defineProperty2.default)(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}var
	
	UserInfo=(_class=function(){function UserInfo(){(0,_classCallCheck3.default)(this,UserInfo);_initDefineProp(this,'userInfo',_descriptor,this);}(0,_createClass3.default)(UserInfo,[{key:'changeUserInfo',value:function changeUserInfo(
	
	
	
	
	
	userData){
	this.userInfo=userData;
	localStorage.setItem("userInfo",(0,_stringify2.default)(userData));
	}},{key:'clearUserInfo',value:function clearUserInfo()
	
	{
	this.changeUserInfo({});
	localStorage.setItem("token","");
	
	}}]);return UserInfo;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'userInfo',[_mobx.observable],{enumerable:true,initializer:function initializer(){return localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{name:"",type:""};}}),_applyDecoratedDescriptor(_class.prototype,'changeUserInfo',[_mobx.action],(0,_getOwnPropertyDescriptor2.default)(_class.prototype,'changeUserInfo'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'clearUserInfo',[_mobx.action],(0,_getOwnPropertyDescriptor2.default)(_class.prototype,'clearUserInfo'),_class.prototype)),_class);
	
	
	var user=new UserInfo();
	
	module.exports=user;

/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _defineProperty=__webpack_require__(346);var _defineProperty2=_interopRequireDefault(_defineProperty);var _getOwnPropertyDescriptor=__webpack_require__(1020);var _getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _desc,_value,_class,_descriptor,_descriptor2;var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _mobx=__webpack_require__(1420);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;(0,_defineProperty2.default)(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}var
	
	Menu=(_class=function(){function Menu(){(0,_classCallCheck3.default)(this,Menu);_initDefineProp(this,'currentHeaderMenu',_descriptor,this);_initDefineProp(this,'currentSpaceMenu',_descriptor2,this);}(0,_createClass3.default)(Menu,[{key:'changeHeaderMenu',value:function changeHeaderMenu(
	
	
	
	path){
	this.currentHeaderMenu=path;
	}},{key:'changeSpaceMenu',value:function changeSpaceMenu(
	
	path){
	this.currentSpaceMenu=path;
	}}]);return Menu;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'currentHeaderMenu',[_mobx.observable],{enumerable:true,initializer:function initializer(){return location.hash.split('#')[1].split('?')[0].match('space')?'/space':location.hash.split('#')[1].split('?')[0];}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'currentSpaceMenu',[_mobx.observable],{enumerable:true,initializer:function initializer(){return location.hash.split('#')[1].split('?')[0];}}),_applyDecoratedDescriptor(_class.prototype,'changeHeaderMenu',[_mobx.action],(0,_getOwnPropertyDescriptor2.default)(_class.prototype,'changeHeaderMenu'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'changeSpaceMenu',[_mobx.action],(0,_getOwnPropertyDescriptor2.default)(_class.prototype,'changeSpaceMenu'),_class.prototype)),_class);
	
	
	var menu=new Menu();
	
	module.exports=menu;

/***/ }),

/***/ 1423:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA8CAMAAAAUhQWjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowOTdkNzY1My1jN2ZhLTQyY2UtYjljNS01ODcyZTEzYTM0YTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU0QUQyNkJGNDdEMTFFN0I3N0NDOUE0RDQ4RjlCRDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU0QUQyNkFGNDdEMTFFN0I3N0NDOUE0RDQ4RjlCRDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZjQyOTA4MzItZGM0NC00MmE2LWI0NDMtNjJmODIxMTM5OWFkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5N2Q3NjUzLWM3ZmEtNDJjZS1iOWM1LTU4NzJlMTNhMzRhNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po1C3xkAAAB4UExURcHT6ER6uYOm0YSn0kR7uvD0+aK83NHe7uDp8xFYqJKx17HI4jVvtDRutBNZqHSczO/q02SRxmOQxdHCeXOby1WGwCVkrlSFv+DWp8ayVyRjrvv69Pf16OjhvNzRm/Pv3sq3Y9THhOzlyM28btjMkMKtTABOov///4vBOl4AAAAodFJOU////////////////////////////////////////////////////wC+qi4YAAAE+UlEQVR42uyZiXKcOBCGxSCJ02DGHI6PxOtNWu//hmmdSCBm8O5MqnaLnlR5Rhz6P6n/liBE/E+CHCAHyAFygBwgB8gBcoAcIAfIAfKfBMmJjuDIujHrkwIAiuSUuba3Rx3BpT9so73HMr6qkpFsF0gGOk7+tYVum2wDf4E5Eqvl8ZeOd+/S12+67bs4QTzsmaX8kdausUq5EC0MeCSVPegjLSmBklyeT1MhKAwpRhVLrV7fqsjnA4um7GGh5cz0gb+06G+v86U/XdM1kBa6GjgApTVQBTZKoamooJH3pyq4ukYKzwFyAiO2NXhSBGQ1/PISFaU5rViJedAkb274xXqSroFQyCiCoPoUOp0auUDNbFQdGxEDflpQI9rSsqNlmjJa51Gzc9ODy97EqDXzEVNjjj0b3T/spX/r30/iOgh+Q9lyMjo9ZA1wVJ+1UMtfFWYVqaFt8KOuYYggeNOMNNuqWqFwvIUPxtx8FEmSODnGUh+zcBnvHtgVkBxq/JfKLKl1VzjiBIBRLTSFGpMo1QkmdSCUTL8sVYkYBcmCVGLG2Gd9cLJzoA3GDVfBIn5/9VONnPyYnL9s5/h9xOQCaFA93liamMJovVzJL0TgdLRNpzg6nLqaCdZAtbWO9L64U6CULPoX7CEwUOD372vz27Gy85rYFhxYCtUI0s+NK1I6MpV5Mjo0SKn6UqAm8i0Qmz5SbV4EQqdF/27+TCJavz/LJSRSjkN6WyUwBiADWgRkKstcIVhn0RZoWJ6pzBu6Vvq8w88MpoNtruye36dApy1g/hhMQa5bv78J8RQaxgvrrWL2aQ15jYNdy7lR1RSTp1YZYIw60HFACAyuhRBSUSp5mwtbFOd3EpYwvkgs1Ueiwg6L8/vnsoS5OMOyMOIINzjIpVz/qFKKBmhy5XGTee2AuZeTEdpSpfio1DA0PL0AYv3OQ6dbCZf2Fc7vH8tFZTnfWrDtsEH7YuYQlEr0SVzhDDrzGgq0RslyCZRgQ0VUZah4mV/aNPZBiSzscD+EtT8axu+/tpxOlgVLw42UCykNtcnUaTSB9LyckxprQNtwnJRGHRc5zliHiwzQ/OLulwXLdzmvWv4KEw/rdx2f1wuWSp1O7Z9kDVKDVpm/skEaKZV7ziy3PwUiqROyNC3ZxW08X6/bDsRJSLyY8+TZ43jaUbDu/Dwyr9qeJRYg/qx52+WPGeRtR8G6M8i8p/JyeR/Io+N43ixY2xyJ86S7q//QsNztkKtPiP3S6btBnN8/XncUrNicTbcEYcXC6Rgvyx1rHMT6/XOrYPXiMoiWdyMQm86RJpsX+mF1WoHYRX2rYE3iGsgLW4CczZNxZp+8Zb2Qf9k/AjnFBjTZCbKzYM2380FOy9OWBfxrINnaNoLBThDLUeTiCkihZ/2OIFbMeT1LV0F2FCzbbf+iVPogL2a5uhUIX671ruUaSLmjYNluT5XqImb2W4G4/Jh0frAT7AOp5rdHYbAYiF5M7goyr5MP51OfxMtvBCTZeGRfl08FIp/nzvf0SLgJ21pH/j1I6Ly7gERIkjuAmBy+J8jqDV2f3QIkscIMCAlBEvP6hd8QBB3uoRSVNuOtQfReL7pF+SoI12MQfSXOz3rbNXFmzgyufn9Wsb7ZOvItELXXuwnIn40+SXr7hbu3Gnz5ANd7D3X98T9WB8gBcoAcIAfIAXKAHCB/PH4LMADDiJsCNHsrIwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ajax) {'use strict';var _getPrototypeOf=__webpack_require__(339);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(349);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(383);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(232);
	var _antd=__webpack_require__(391);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var
	Footer=_antd.Layout.Footer;var
	
	bizFooter=function(_React$Component){(0,_inherits3.default)(bizFooter,_React$Component);
	function bizFooter(props){(0,_classCallCheck3.default)(this,bizFooter);var _this=(0,_possibleConstructorReturn3.default)(this,(bizFooter.__proto__||(0,_getPrototypeOf2.default)(bizFooter)).call(this,
	props));
	_this.state={
	visible:false,
	SEOLink:[]};return _this;
	
	
	}(0,_createClass3.default)(bizFooter,[{key:'componentWillMount',value:function componentWillMount()
	
	{
	var that=this;
	ajax({
	url:"/common/getSEOLink",
	callback:function callback(data){
	that.setState({SEOLink:data.SEOLink});
	}});
	
	}},{key:'render',value:function render()
	
	{
	var appImg=__webpack_require__(1425);
	return(
	_react2.default.createElement(Footer,{className:'footer'},
	_react2.default.createElement('div',{className:'outerLinkFrame'},
	_react2.default.createElement(_antd.Row,{className:'outerLink'},
	this.state.SEOLink.length>0?
	_react2.default.createElement(_antd.Col,{span:4},
	_react2.default.createElement('div',{className:'link'},'\u53CB\u60C5\u94FE\u63A5'),
	_react2.default.createElement('ul',null,
	this.state.SEOLink.map(function(item,index){return(
	_react2.default.createElement('li',{key:index},_react2.default.createElement('a',{href:item.link},item.value)));}))):
	
	
	"",
	
	_react2.default.createElement(_antd.Col,{span:4},
	_react2.default.createElement('div',{className:'about'},'\u5173\u4E8E\u6211\u4EEC'),
	_react2.default.createElement('ul',null,
	_react2.default.createElement('li',null,_react2.default.createElement(_reactRouter.Link,{to:'/about/overview'},'\u516C\u53F8\u6982\u51B5')),
	_react2.default.createElement('li',null,_react2.default.createElement(_reactRouter.Link,{to:'/about/news'},'\u884C\u4E1A\u52A8\u6001')),
	_react2.default.createElement('li',null,_react2.default.createElement(_reactRouter.Link,{to:'/about/report'},'\u5A92\u4F53\u62A5\u5230')),
	_react2.default.createElement('li',null,_react2.default.createElement(_reactRouter.Link,{to:'/about/contact'},'\u8054\u7CFB\u6211\u4EEC')))),
	
	
	_react2.default.createElement(_antd.Col,{span:4},
	_react2.default.createElement('div',{className:'help'},'\u5E2E\u52A9\u4E2D\u5FC3'),
	_react2.default.createElement('ul',null,
	_react2.default.createElement('li',null,_react2.default.createElement(_reactRouter.Link,{to:'/help/qa'},'\u5E38\u89C1\u95EE\u9898')),
	_react2.default.createElement('li',null,_react2.default.createElement(_reactRouter.Link,{to:'help/feedback'},'\u610F\u89C1\u53CD\u9988')))),
	
	
	_react2.default.createElement(_antd.Col,{span:7,offset:5},
	_react2.default.createElement(_antd.Col,{span:7},
	_react2.default.createElement('img',{src:appImg,className:'appImg'})),
	
	_react2.default.createElement(_antd.Col,{span:15,offset:2},
	_react2.default.createElement('p',null,'\u5BA2\u670D\u7535\u8BDD:'),
	_react2.default.createElement('p',null,'4008-333-888'),
	_react2.default.createElement('p',null,'\u603B\u673A\u7535\u8BDD:021-20265188'),
	_react2.default.createElement('p',null,'\u4F20\u771F:021-58903578'))))),
	
	
	
	
	_react2.default.createElement(_antd.Row,{className:'info'},
	_react2.default.createElement(_antd.Col,{span:10,offset:4},'\u4E0A\u6D77\u6D66\u4E1C\u65B0\u533A\u6D66\u7535\u8DEF360\u53F7 \u9646\u5BB6\u5634\u6295\u8D44\u5927\u53A615\u697C'),
	
	
	_react2.default.createElement(_antd.Col,{span:10},'copyright\xA9 \u4E0A\u6D77\u6625\u96E8\u91D1\u878D\u4FE1\u606F\u670D\u52A1\u6709\u9650\u516C\u53F8  \u6CAAICP\u590711045933\u53F7-6'))));
	
	
	
	
	
	}}]);return bizFooter;}(_react2.default.Component);
	
	
	module.exports=bizFooter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1326)))

/***/ }),

/***/ 1425:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABiCAMAAABtcK2xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowOTdkNzY1My1jN2ZhLTQyY2UtYjljNS01ODcyZTEzYTM0YTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUY1QTJGNTFGNDdEMTFFN0I3N0NDOUE0RDQ4RjlCRDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUY1QTJGNTBGNDdEMTFFN0I3N0NDOUE0RDQ4RjlCRDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZjQyOTA4MzItZGM0NC00MmE2LWI0NDMtNjJmODIxMTM5OWFkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5N2Q3NjUzLWM3ZmEtNDJjZS1iOWM1LTU4NzJlMTNhMzRhNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgQ066wAAAGAUExURWJiYqysrGtra5SUlOFsbZWwsHJyctkiHaKioto2Mv39/ffDxPX19bEAAENDQ/zW2BcXF+vFxl1dXdLS0igoKN7e3ry8vOvr61FRUe3t7eBmZ8jIyExMTOmYmjMzM7a2toCAgNxXV7m5uczMzMDAwJ6entUAANbW1uq4uOaEiOF1drGxseHh4fLy8j8/P9YPAedWW+BEROTl5eOmptAbFfbr7MXFxQwMDMsAAOz//yEhIfj4+Pm6utuGivP+/76+vn19fYqKioWFhWuGh5mZmaampnh4ePr6+vDw8I6Ojnx8fOnT1fqpqtnZ2duam+avsDk5OUVFRVdXV9uhoM8iHfj//8PDw4KCgsHb3OiNkKlZWv2WlMgUC+J+f90sKN88O92Nj+vh4uqeoNkaEoeko/nf4ff394iIiP7u8P7Nzd1MSeVhXsHBwUhISNo9O9QtKWt7eqW9vfH19urv87/Pzs0FAM/Pz9gHAC4uLrS0tO7o69pdXdRubgAAAP///////6TRodIAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAADARJREFUeNrsWv9XGlcWHyGFkZAJDjCgII46I1Zk3JjUsZAqWAWxtUE3kaZbTdo0sUk02XYrTjb73v7r+3l3HiPpLzukZ3fP2eM9h2HO8J6fe9/9fkfln/9NUq7RrtGu0a6I/wfoGu3/Ei1RHaYXvE7fdfzyotrGz8lqgg8Wyrs2FiTxXf9gayIMWjXlsoDcCD91XTw4xS8KK+DapatYyJjkfw4Li/g+Hd7pWqHQ2DAd8hZ9t8BsnlXAcJeuYB0LV6skFdBYCVtbH2ydCYm2mpTcV5jOY9gYqYrrDi8Swx5kEnJVV+kYunhUYOe4mmDK31mvdpkREo3znKAknwdaNJPJ2DyaSqXsXAYM7+a0VKGcSs3vC0w8zvN2boyVyqtAa/IEbeVcC4+Wo6NwuAW0K4rR8aTYGklGnxT9UKblOu8xk+/R/SZ3RkXrEtpqAZziWigcME9L80g3y89L8wXGDIPQksbpEJqvO2N0NI3QYmwLT7foyWQgp7QEj3Tmk0JoJt1bH4tmMt0wDJ1lnBTrWLuJvmUY9fa5ozlYUsNP246jlX6HdjY6Woaf0fH4VOF5XMvQG2O+zUrvquF2MkCLSOsPj5bY1QTFSDaBVnNqTOUdzWVNQ3FcZhvWGm8DzXUcR7EsqxOgqbQ1PYpsA9qXaB3ehLdxXsT9Mi8R+6Q7obfskN6iwdbz0GgVwyIymoRW03qWqXWMHJzIc1QrosE7zg2jqOEUk5bteMyF5gSabmz6Ow0vHNruB+HnHIpoQfXb+J4Bw0lErjp0F/jbKuSbB2oBRhX5YGslDNqLiKIHpNi8orwDWl7tMsXOsD21xhqqO0Bz7RaCQFZp4rONpUM7lfLH5rcPmQalJNrA5/5gNl02VWEApn8climcq9gwzUajRvnE3DKJGg1x7Zm0nPOjnqA0V3HNhkdLw9s4V8mZBG0DYozuulI8XzoRufx8Rvd5qTEvrN4E5Uyd1cBu1hyTsgnqc5XkSLGW6TITUaMlHoulPlm00GF5s0axMiTa7oD9QG+RIDqW4QdBnLyKlmmRBoNjYGHR6qQRJZDNkmxXSLYaAm4XHr7VGpJM6MxgXiCdoFp4f3PhRkJvaygARCwxcV+D33F+CLQSa/NAa2lRIyTEdx5HID4mPS+GjCWuiMerpg3JGjA2jTkwvU1eEaYGixThPbJVr/d69brZFIv8pTiGo54F1/TRnFHQBFWgEJG8RBw5DKJ+muIkZbpJki8N73snt4jaJPpxaEjNepfOsW/3uY3w0FFVNaZ0bHUnUdd1kQX0JhKFQx+wp1SA5ilHo6G5Es2nwdEwJmqGEutL+yTLdJEEHT5Djhlhe5RNOyPlAFvVTULLqIJ6iJQVvYlI6XRLEHaOH5ZKTtSG99uqgWUOz9mieuwxT2/YRaTCUz01Qn4j6QyYmKAOrFFBaEC09JS//vTJI/7Tl19+GTijwQ7kncipMZQwY5Tgw6Il2yg2YvyIUrODvF1zGkYMGU6c4cv73zy9f//mzW8Wf93YSB7o0JmrCeeYw0LdyvKsEUES9EKj7YpCKsX7Q+EiBk9D9t744vtbROvr6w/Hn25APdCbH02i+B7Y4zJCQNjK/AWM27I1UXBsGj5luc5svvHN+mX8xycLJyfPXi1d3Fv/lKsejsCvT2JYbjq2KDAs3dk2JkPGEvpepUbiigTaDw9XFqafL71dOIl//fz98cIJt0vBEeTJ2/ziujZohP4dWtuoOHlepmJDc06H0Lb5g5X41OL60qMb8Ts3F/+09GTl5W+uphiGKESsKGotE4cgqq5toxo6m0K6OclwN0A7hFLu3nsy+2z6+Pj4cmnizafH45dff3uVu+eka4ravB8+dydgIW3UW4gphax8Znc76AfuPjyJj0/cfb8Sn158+9XEq4XjX7fAUBqlZ1rLiDYPC4X1F3hM64dDq1MzsS9qg6EMJ/Lq3Xsn8R8/e378Nv56cXbi/fjCP9DfdCmSzNBR7MkSZg2aC5W7qyUwmVHgA5nyTkokyGimlmqV9dQOv/v9ycmdqffjsyvjN+5NxZ8Bjed2geRRmIsgsiVyAs9NsdD5DY12pmq4eUpaft/WRDTZ5ncvTuJv365MXT5bGJ++WHi2sJQQ7b/lnvMjtOeIjzCOjjtC7oa/VVFsu/ngFFssRjMFnOT6+PHj6fdfzb5+/GT6zvTU+l++ZRT9/RmD6QrqVYuUcsN5t+vyhMuktyWqL/iWYFros/3g1pvjqad//urHG4/fvFo6frMQoNEEw++mejziFmSLHmZegs1j1L/Nk+KlnbjuJ7dvzS5OLf4wMb3y8MbtV7OwkkQy6BcV3vTHD6JOcNdC+xsY7UN33eo7bG4E/sZ++vnW658fTDxdnI0/eTVxZ+rV+hdy9EDDjuoeEye5RUnQCO/dlE2rM24RktZ5g+TTGfLWrdcvn04sPnhwsnD8Wfzy8mKCG2ALZ4kDV6VcMCs39HQmUV2VuXtN6m4PaPWq4iKYfHfrzp0biFvxy/c3Vi7XH3/O37GBndiAaNIfyI8wnXEF1iZsskzKEI/qsJQKz2T4374T6ebi4uH4s4v4yfTGBpVKffIApVoVQxwaVI3iAdldBL1MWYWT6uVyOUk+18wptVXc3X65+OD285s370/8/RHkWMsc5sbIu0VZFk1RT5DJZNzwVVANCZnR8GpTWqUw7ne82LB+++UXzn/55PNHn2+gCD+QnbAnA4EfCtTRqtcaL2tOt6sphT2pepPVutGCaCZS3qnhefvV1eV3qPjPrEKHiaxjazEk3VW+o9WQ5PcLpfCV+aAUtYIKbw9h3Q+4fe4Od1J+17Em43IMz5uQzQ2rt2TRCbq2vpNBjy9SZIO1rHNW0lx2xCPOjpXwD4G0hBoo7ehWFNVCw1jGMag85rihO6qhXmoO8Vikf1+uJNrB/WCBlMxPSwUy3wik65DtH4RDS1gzWtHwy4pJq6OZVNqomrC2KAq3JoqAfHfGMGaKGqJbCQGuaszj0DVrmauQTmcxLAlZmVMrIc+yAMajsjK/6vQLUi6SMcvO4ZgZ0tpWEJkrYdGSTnetgoS8SwOziKUAbRnqUFhGE5ryULwl2qhYzjnX8mDIMzqIJn1UCmI2YzqonZx+WDSf8QMqahwKTCacKEbTGdG8z/MMG1JtWTrmIBMMZk+ZcJVCe21GTgshBwxNlG0NxzQO4EYtGph12ZilaTOIukdiOIXKlao8fw6qy8mTEq4KmpRjwBk57eXUbgp1zEm288H8IrDJ7O/HN9R8hZk8KWgLlSbfx1XRbZ5WTd3Ep8YUO8cN1bYzrAhr1w9VWw5Nc2pHP2A1sUHx0FXp6Kda6urHTJ4OWYQmGHmSzmd8d3jaq/ExmkT584soaU4PO52pn4rhkRjDCKrwzYbFrYaYYIgmyW6IWdNk2zTb7a0GTTA0nm3s9RR491HvDEfe4+96oaczH04MD4akVOTsyVfuYKJNqs1RKswjDwi0g/ATQ4S/lpywgHF9aPLUMLPcxmfbzNVNs+6PcYRsy/hJwdIz0yI0bMMv2VEnvVmJdpX6hb9JvU0GnRRKMzRgg7nTNpYnw3YdQKsnSRYVuVQPJoZ5KZukLZJNhLOa2TNtLPXoucM0eQxh0cCo73NnwZuVKKKjQqpgLMGDNxGJYKpWGVK2gQovHR5t+O2D1dgUeoOZ+o272qMJKGRrNMBWCtaoiUPv5cWIqqdBtp6Jfj+83obRDlHeROBEStAEuqx6lSw8aZWiIBTJYgx6OxzBJn/3jqpvp2nsImJJRNnnp0pHJSNo21FdsaNKkWTbV1r2PB/TPeQdnbXs2qhvVrzgjVhHvgoS799qbHXo3RFfpkMQkuVlDOlAtv3QPQ5j7QQF8rS0EhVllIKqZAdJaw2fEhKYVhTyGWc0v0B2czyqFLLI3DVHpPe0tTuqv/UJLUIlYgvMHrCyfK8SxJI+HUIlmPOKV2d2+Ak90LqOJI/QGvTeKMUyKKQ8xzYybMwQfuA4fBdLPFQlk8hzKWywIZ2oKmO4nx/9nfCgE76iq9wtHbMrJ77++0UejE3HwtVcxhCVSRnDNMkLRpsbsDh86njgyzApB1Q+zdPC6/+KuEb7o2jX/2F1jfY/R/uXAAMAqkobTK8Ii8IAAAAASUVORK5CYII="

/***/ })

});
//# sourceMappingURL=layout.9c161e2ace9a9cccb263.chunk.js.map
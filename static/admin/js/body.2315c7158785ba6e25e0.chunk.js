webpackJsonp([3],{

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"auth/manage",
	breadcrumbName:"管理员管理",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(4, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1377)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(5, function(require){
	cb(null,__webpack_require__(1378));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(6, function(require){
	cb(null,__webpack_require__(1380));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1381:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"auth/admin",
	breadcrumbName:"管理员及权限",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(7, function(require){
	callback(null,{
	breadcrumbName:'用户',
	component:__webpack_require__(1382)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'user',
	breadcrumbName:'用户',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(7, function(require){
	cb(null,__webpack_require__(1382));
	});
	}},
	{
	path:'project',
	breadcrumbName:'项目',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(8, function(require){
	cb(null,__webpack_require__(1384));
	});
	}},
	{
	path:'fund',
	breadcrumbName:'资金',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(9, function(require){
	cb(null,__webpack_require__(1385));
	});
	}},
	{
	path:'other',
	breadcrumbName:'其他',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(10, function(require){
	cb(null,__webpack_require__(1386));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"user/manage",
	breadcrumbName:"用户管理",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(11, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1388)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:'详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(12, function(require){
	cb(null,__webpack_require__(1390));
	});
	}},
	
	{
	path:'audit/:id',
	breadcrumbName:'审核',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(13, function(require){
	cb(null,__webpack_require__(1392));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"user/message",
	breadcrumbName:"群发短信",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(14, function(require){
	callback(null,{
	breadcrumbName:'编辑',
	component:__webpack_require__(1394)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'history',
	breadcrumbName:'历史',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(15, function(require){
	cb(null,__webpack_require__(1396));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"user/mail",
	breadcrumbName:"群发邮件",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(16, function(require){
	callback(null,{
	breadcrumbName:'编辑',
	component:__webpack_require__(1398)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'history',
	breadcrumbName:'历史',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(17, function(require){
	cb(null,__webpack_require__(1400));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1401:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"fund/normal",
	breadcrumbName:"普通资金",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(18, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1402)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:'详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(19, function(require){
	cb(null,__webpack_require__(1404));
	});
	}},
	
	{
	path:'audit/:id',
	breadcrumbName:'审核',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(20, function(require){
	cb(null,__webpack_require__(1413));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"project/normal",
	breadcrumbName:"普通项目",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(21, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1415)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:'详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(22, function(require){
	cb(null,__webpack_require__(1417));
	});
	}},
	
	{
	path:'audit/:id',
	breadcrumbName:'审核',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(23, function(require){
	cb(null,__webpack_require__(1423));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"delegateFund",
	breadcrumbName:"委托资金",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(24, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1425)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:'详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(25, function(require){
	cb(null,__webpack_require__(1427));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(26, function(require){
	cb(null,__webpack_require__(1436));
	});
	}},
	
	{
	path:'new',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(27, function(require){
	cb(null,__webpack_require__(1437));
	});
	}},
	
	{
	path:'receivedProject/list',
	breadcrumbName:'收到的投递项目列表',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(28, function(require){
	cb(null,__webpack_require__(1438));
	});
	}},
	
	{
	path:'receivedProject/detail/:id',
	breadcrumbName:'收到的投递项目详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(29, function(require){
	cb(null,__webpack_require__(1439));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"delegateProject",
	breadcrumbName:"委托项目",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(30, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1442)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:'详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(31, function(require){
	cb(null,__webpack_require__(1444));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(32, function(require){
	cb(null,__webpack_require__(1450));
	});
	}},
	
	{
	path:'new',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(33, function(require){
	cb(null,__webpack_require__(1451));
	});
	}},
	
	{
	path:'receivedFund/list',
	breadcrumbName:'收到的投递资金列表',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(34, function(require){
	cb(null,__webpack_require__(1452));
	});
	}},
	
	{
	path:'receivedFund/detail/:id',
	breadcrumbName:'收到的投递资金详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(35, function(require){
	cb(null,__webpack_require__(1453));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"report",
	breadcrumbName:"举报管理",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(36, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1456)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:"详情",
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(37, function(require){
	cb(null,__webpack_require__(1457));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1458:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"notice",
	breadcrumbName:"公告管理",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(38, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1459)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(39, function(require){
	cb(null,__webpack_require__(1460));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(40, function(require){
	cb(null,__webpack_require__(1463));
	});
	}},
	
	{
	path:'detail/:id',
	breadcrumbName:'查看',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(41, function(require){
	cb(null,__webpack_require__(1464));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"adv",
	breadcrumbName:"广告管理",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(42, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1466)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(43, function(require){
	cb(null,__webpack_require__(1467));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(44, function(require){
	cb(null,__webpack_require__(1470));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"activity",
	breadcrumbName:"活动管理",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(45, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1472)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(46, function(require){
	cb(null,__webpack_require__(1473));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(47, function(require){
	cb(null,__webpack_require__(1476));
	});
	}},
	
	{
	path:'detail/:id',
	breadcrumbName:'详情',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(48, function(require){
	cb(null,__webpack_require__(1477));
	});
	}},
	
	{
	path:'signUp/:id',
	breadcrumbName:'报名列表',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(49, function(require){
	cb(null,__webpack_require__(1478));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"platform",
	breadcrumbName:"平台管理",
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	__webpack_require__.e/* nsure */(50, function(require){
	cb(null,[
	__webpack_require__(1480),
	__webpack_require__(1483),
	__webpack_require__(1489),
	__webpack_require__(1495)]);
	
	});
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"help",
	breadcrumbName:"帮助中心",
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	__webpack_require__.e/* nsure */(59, function(require){
	cb(null,[
	__webpack_require__(1499),
	__webpack_require__(1505)]);
	
	});
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"finance",
	breadcrumbName:"财务管理",
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	__webpack_require__.e/* nsure */(66, function(require){
	cb(null,[
	__webpack_require__(1510),
	__webpack_require__(1513)]);
	
	});
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"link",
	breadcrumbName:"友情链接",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(69, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1517)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(70, function(require){
	cb(null,__webpack_require__(1518));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(71, function(require){
	cb(null,__webpack_require__(1520));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ })

});
//# sourceMappingURL=body.2315c7158785ba6e25e0.chunk.js.map
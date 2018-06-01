webpackJsonp([50],{

/***/ 1480:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"company",
	breadcrumbName:"公司概况",
	getComponent:function getComponent(location,cb){
	__webpack_require__.e/* nsure */(51, function(require){
	cb(null,__webpack_require__(1481));
	});
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"news",
	breadcrumbName:"行业动态",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(52, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1484)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(53, function(require){
	cb(null,__webpack_require__(1485));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(54, function(require){
	cb(null,__webpack_require__(1487));
	});
	}},
	
	{
	path:'detail/:id',
	breadcrumbName:'查看',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(55, function(require){
	cb(null,__webpack_require__(1488));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"report",
	breadcrumbName:"媒体报道",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(36, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1490)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(56, function(require){
	cb(null,__webpack_require__(1491));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(57, function(require){
	cb(null,__webpack_require__(1493));
	});
	}},
	
	{
	path:'detail/:id',
	breadcrumbName:'查看',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(37, function(require){
	cb(null,__webpack_require__(1494));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1495:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"contact",
	breadcrumbName:"联系方式",
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(58, function(require){
	cb(null,__webpack_require__(1496));
	});
	}},
	_routeEnter2.default);

/***/ })

});
//# sourceMappingURL=platform.e630d07bec156f1d370d.chunk.js.map
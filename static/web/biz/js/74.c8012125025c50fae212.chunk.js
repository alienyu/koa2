webpackJsonp([74],{

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(299);var _extends3=_interopRequireDefault(_extends2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var routeEnter=__webpack_require__(337);
	
	module.exports=(0,_extends3.default)({
	path:"detail/:id",
	breadcrumbName:"项目详情",
	getComponent:function getComponent(location,cb){
	__webpack_require__.e/* nsure */(75, function(require){
	cb(null,__webpack_require__(1576));
	});
	}},
	routeEnter);

/***/ }),

/***/ 1581:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(299);var _extends3=_interopRequireDefault(_extends2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var routeEnter=__webpack_require__(337);
	
	module.exports=(0,_extends3.default)({
	path:"list",
	breadcrumbName:"找项目",
	getComponent:function getComponent(location,cb){
	__webpack_require__.e/* nsure */(49, function(require){
	cb(null,__webpack_require__(1582));
	});
	},
	getIndexRoute:function getIndexRoute(nextState,cb){
	__webpack_require__.e/* nsure */(2, function(require){
	cb(null,{
	breadcrumbName:'',
	component:__webpack_require__(1583)});
	
	});
	},
	getChildRoutes:function getChildRoutes(nextState,cb){
	__webpack_require__.e/* nsure */(76, function(require){
	cb(null,[
	__webpack_require__(1586),
	__webpack_require__(1590),
	__webpack_require__(1594)]);
	
	});
	}},
	routeEnter);

/***/ }),

/***/ 1598:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _toConsumableArray2=__webpack_require__(408);var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _extends2=__webpack_require__(299);var _extends3=_interopRequireDefault(_extends2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var routeEnter=__webpack_require__(337);
	
	module.exports=(0,_extends3.default)({
	path:"space",
	breadcrumbName:"项目方空间",
	getComponent:function getComponent(location,cb){
	__webpack_require__.e/* nsure */(80, function(require){
	cb(null,__webpack_require__(1599));
	});
	},
	getIndexRoute:function getIndexRoute(nextState,cb){
	__webpack_require__.e/* nsure */(81, function(require){
	cb(null,{
	breadcrumbName:'账户总览',
	component:__webpack_require__(1600)});
	
	});
	},
	getChildRoutes:function getChildRoutes(nextState,cb){
	__webpack_require__.e/* nsure */(82, function(require){
	cb(null,[
	__webpack_require__(1601),
	__webpack_require__(1603),
	__webpack_require__(1606),
	__webpack_require__(1608),
	__webpack_require__(1610),
	__webpack_require__(1612),
	__webpack_require__(1614),
	__webpack_require__(1616),
	__webpack_require__(1618)].concat((0,_toConsumableArray3.default)(
	__webpack_require__(1620)),[
	__webpack_require__(1627)]));
	
	});
	}},
	routeEnter);

/***/ })

});
//# sourceMappingURL=74.c8012125025c50fae212.chunk.js.map
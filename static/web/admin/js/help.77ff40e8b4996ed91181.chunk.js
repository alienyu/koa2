webpackJsonp([59],{

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"qa",
	breadcrumbName:"常见问题",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(60, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1500)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'add',
	breadcrumbName:'新增',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(61, function(require){
	cb(null,__webpack_require__(1501));
	});
	}},
	
	{
	path:'edit/:id',
	breadcrumbName:'修改',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(62, function(require){
	cb(null,__webpack_require__(1503));
	});
	}},
	
	{
	path:'detail/:id',
	breadcrumbName:'查看',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(63, function(require){
	cb(null,__webpack_require__(1504));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _extends2=__webpack_require__(246);var _extends3=_interopRequireDefault(_extends2);var _routeEnter=__webpack_require__(284);var _routeEnter2=_interopRequireDefault(_routeEnter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	module.exports=(0,_extends3.default)({
	path:"feedback",
	breadcrumbName:"意见反馈",
	getIndexRoute:function getIndexRoute(nextState,callback){
	__webpack_require__.e/* nsure */(64, function(require){
	callback(null,{
	breadcrumbName:'列表',
	component:__webpack_require__(1506)});
	
	});
	},
	getChildRoutes:function getChildRoutes(partialNextState,cb){
	!/* require.ensure */(function(require){
	cb(null,[
	{
	path:'detail/:id',
	breadcrumbName:'查看',
	getComponent:function getComponent(nextState,cb){
	__webpack_require__.e/* nsure */(65, function(require){
	cb(null,__webpack_require__(1507));
	});
	}}]);
	
	
	}(__webpack_require__));
	}},
	_routeEnter2.default);

/***/ })

});
//# sourceMappingURL=help.77ff40e8b4996ed91181.chunk.js.map
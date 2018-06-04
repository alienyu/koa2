webpackJsonp([44],{

/***/ 1495:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _getPrototypeOf=__webpack_require__(339);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(349);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(383);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(232);
	var _antd=__webpack_require__(391);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var
	
	Success=function(_React$Component){(0,_inherits3.default)(Success,_React$Component);
	function Success(props){(0,_classCallCheck3.default)(this,Success);var _this=(0,_possibleConstructorReturn3.default)(this,(Success.__proto__||(0,_getPrototypeOf2.default)(Success)).call(this,
	props));
	['goToPay'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(Success,[{key:'goToPay',value:function goToPay()
	
	{
	_reactRouter.hashHistory.push('/activity/detail/'+this.props.params.id+'/pay?person='+this.props.location.query.person);
	}},{key:'render',value:function render()
	
	{
	var successBG=__webpack_require__(1496);
	
	return(
	_react2.default.createElement(_antd.Row,{className:'activitySuccess',type:'flex',justify:'center',align:'middle'},
	_react2.default.createElement(_antd.Col,{span:12,className:'frame'},
	_react2.default.createElement('img',{src:successBG}),
	_react2.default.createElement(_antd.Row,{className:'prompt'},'\u62A5\u540D\u6210\u529F!',
	this.props.location.query.type==1?_react2.default.createElement('i',null,'\u8BF7\u652F\u4ED8\u6D3B\u52A8\u8D39\u7528'):_react2.default.createElement('i',{className:'free'},'\u672C\u6D3B\u52A8\u4E3A\u514D\u8D39\u6D3B\u52A8')),
	
	_react2.default.createElement(_antd.Row,null,
	_react2.default.createElement(_antd.Button,{type:'primary',onClick:this.goToPay,className:'payBtn',disabled:this.props.location.query.type==0?true:false},'\u652F\u4ED8\u6D3B\u52A8\u8D39\u7528')))));
	
	
	
	
	}}]);return Success;}(_react2.default.Component);
	
	
	module.exports=Success;

/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "common/imgs/537c3bbb85410065f570f24c2d011fa8.png";

/***/ })

});
//# sourceMappingURL=activityEnrollSuccess.c6f6884165ca72f336cd.chunk.js.map
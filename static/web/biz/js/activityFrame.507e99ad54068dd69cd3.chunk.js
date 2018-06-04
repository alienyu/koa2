webpackJsonp([37],{

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _getPrototypeOf=__webpack_require__(339);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(349);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(383);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(232);
	var _antd=__webpack_require__(391);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var
	
	Frame=function(_React$Component){(0,_inherits3.default)(Frame,_React$Component);
	function Frame(props){(0,_classCallCheck3.default)(this,Frame);return(0,_possibleConstructorReturn3.default)(this,(Frame.__proto__||(0,_getPrototypeOf2.default)(Frame)).call(this,
	props));
	}(0,_createClass3.default)(Frame,[{key:'render',value:function render()
	
	{
	return(
	_react2.default.createElement('div',{className:'activityPage'},
	_react2.default.createElement(_antd.Row,{className:'contentFrame'},
	_react2.default.createElement(_antd.Breadcrumb,null,
	this.props.routes.map(function(item){return(
	_react2.default.createElement(_antd.Breadcrumb.Item,{key:item.breadcrumbName},_react2.default.createElement(_reactRouter.Link,{to:item.path},item.breadcrumbName)));})),
	
	
	this.props.children)));
	
	
	
	}}]);return Frame;}(_react2.default.Component);
	
	
	module.exports=Frame;

/***/ })

});
//# sourceMappingURL=activityFrame.507e99ad54068dd69cd3.chunk.js.map
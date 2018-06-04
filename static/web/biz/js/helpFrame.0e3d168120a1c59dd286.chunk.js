webpackJsonp([27],{

/***/ 1469:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _getPrototypeOf=__webpack_require__(339);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(344);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(345);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(349);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(383);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(55);var _react2=_interopRequireDefault(_react);
	var _reactRouter=__webpack_require__(232);
	var _antd=__webpack_require__(391);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var
	
	Index=function(_React$Component){(0,_inherits3.default)(Index,_React$Component);
	function Index(props){(0,_classCallCheck3.default)(this,Index);var _this=(0,_possibleConstructorReturn3.default)(this,(Index.__proto__||(0,_getPrototypeOf2.default)(Index)).call(this,
	props));
	['changeMenu'].forEach(function(m){return _this[m]=_this[m].bind(_this);});return _this;
	}(0,_createClass3.default)(Index,[{key:'changeMenu',value:function changeMenu(
	
	obj){
	_reactRouter.hashHistory.push(obj.key);
	}},{key:'render',value:function render()
	
	{
	return(
	_react2.default.createElement('div',{className:'helpPage'},
	_react2.default.createElement(_antd.Row,{className:'contentFrame'},
	_react2.default.createElement(_antd.Breadcrumb,null,
	this.props.routes.map(function(item){return(
	_react2.default.createElement(_antd.Breadcrumb.Item,{key:item.breadcrumbName},item.breadcrumbName));})),
	
	
	_react2.default.createElement(_antd.Row,{className:'detail'},
	_react2.default.createElement(_antd.Col,{span:4,className:'menu'},
	_react2.default.createElement(_antd.Menu,{
	defaultSelectedKeys:[this.props.location.pathname],
	mode:'inline',
	theme:'light',
	onClick:this.changeMenu},
	
	_react2.default.createElement(_antd.Menu.Item,{key:'/help/qa'},'\u5E38\u89C1\u95EE\u9898'),
	_react2.default.createElement(_antd.Menu.Item,{key:'/help/feedback'},'\u610F\u89C1\u53CD\u9988'))),
	
	
	_react2.default.createElement(_antd.Col,{span:20,className:'detailFrame'},
	this.props.children)))));
	
	
	
	
	
	}}]);return Index;}(_react2.default.Component);
	
	
	module.exports=Index;

/***/ })

});
//# sourceMappingURL=helpFrame.0e3d168120a1c59dd286.chunk.js.map
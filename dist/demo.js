/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _beeLayout = __webpack_require__(1);
	
	var _beePanel = __webpack_require__(8);
	
	var _beeButton = __webpack_require__(62);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _src = __webpack_require__(64);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });
	
	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });
	
	var Demo1 = __webpack_require__(106);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 地区级联", "code": "/**\n*\n* @title 地区级联\n* @description 中国地区级联\n*\n*/\n\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { CitySelect, Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\tdefaultValue:{ province:'北京',city:'北京',area:'东城区'},\n\t\t\tvalue:null\n\t\t}\n\t}\n\n\tonChange=(obj)=>{\n\t\tconsole.log(obj)\n\t}\n\n\tbtnOnClick=()=>{\n\t\tthis.setState({\n\t\t\tvalue:{ province:'山西',city:'长治',area:'长治县'}\n\t\t})\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<CitySelect ref='city' onChange={this.onChange} defaultValue={this.state.defaultValue} value={this.state.value}/>\n\t\t\t\t<Button shape=\"border\" onClick={this.btnOnClick} style={{marginTop:\"10px\"}}>代码设置数据</Button>\n\t\t\t</div>\n\t)}\n}\n", "desc": " 中国地区级联" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc;
	
	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";
	
	        var footer = _react2['default'].createElement(
	            _beeButton2['default'],
	            { shape: 'block', onClick: this.handleClick },
	            caret,
	            text
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                )
	            )
	        );
	    };
	
	    return Demo;
	}(_react.Component);
	
	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);
	
	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);
	
	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }
	
	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;
	
	var _Col2 = __webpack_require__(2);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(6);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Layout = __webpack_require__(7);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
	
	  /**
	   * xs显示列数
	   */
	  xs: _propTypes2["default"].number,
	  /**
	   * sm显示列数
	   */
	  sm: _propTypes2["default"].number,
	  /**
	   * md显示列数
	   */
	  md: _propTypes2["default"].number,
	  /**
	   * lg显示列数
	   */
	  lg: _propTypes2["default"].number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _propTypes2["default"].number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _propTypes2["default"].number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _propTypes2["default"].number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _propTypes2["default"].number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _propTypes2["default"].number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _propTypes2["default"].number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _propTypes2["default"].number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _propTypes2["default"].number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _propTypes2["default"].number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _propTypes2["default"].number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _propTypes2["default"].number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _propTypes2["default"].number
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};
	
	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var Col = function (_Component) {
	  _inherits(Col, _Component);
	
	  function Col() {
	    _classCallCheck(this, Col);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);
	
	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];
	
	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }
	
	        delete others[propName];
	      }
	
	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };
	
	  return Col;
	}(_react.Component);
	
	Col.defaultProps = defaultProps;
	Col.propTypes = propTypes;
	
	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};
	
	var Row = function (_Component) {
	  _inherits(Row, _Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var bsclass = '' + clsPrefix;
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Row;
	}(_react.Component);
	
	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;
	
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _propTypes2["default"].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};
	
	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);
	
	  function Con() {
	    _classCallCheck(this, Con);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Con.prototype.render = function render() {
	    var _tbclass;
	
	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);
	
	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Con;
	}(_react2["default"].Component);
	
	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;
	
	exports["default"] = Con;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(9);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(61);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(10);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),
	
	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};
	
	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props, context) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);
	
	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }
	
	  //头部点击事件
	
	
	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };
	
	  //渲染panelheader
	
	
	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';
	
	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }
	
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };
	
	  //如果使用链接，渲染为a标签
	
	
	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };
	
	  //如果有折叠动画，渲染折叠动画
	
	
	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix)
	      )
	    );
	  };
	
	  //渲染panelbody
	
	
	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix) {
	    var children = [];
	    var bodyChildren = [];
	
	    var bodyClassName = clsPrefix + '-body';
	
	    //添加到body的children中
	    function maybeAddBody() {
	      if (!bodyChildren.length) {
	        return;
	      }
	
	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren
	      ));
	
	      bodyChildren = [];
	    }
	
	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody();
	
	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));
	
	        return;
	      }
	
	      bodyChildren.push(child);
	    });
	
	    maybeAddBody();
	
	    return children;
	  };
	
	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);
	
	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;
	
	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };
	
	  return Panel;
	}(_react2["default"].Component);
	
	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;
	
	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(11);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(16);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(60);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;
	
	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	
	
	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	
	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}
	
	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	
	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };
	
	  var vendors = Object.keys(vendorMap);
	
	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	
	  style = null;
	
	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {
	
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}
	
	exports.default = on;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(17);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(25);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  /* -- Expanding -- */
	
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	}(_react2["default"].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;
	
	var _camelizeStyle = __webpack_require__(18);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	var _hyphenateStyle = __webpack_require__(20);
	
	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);
	
	var _getComputedStyle2 = __webpack_require__(22);
	
	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);
	
	var _removeStyle = __webpack_require__(23);
	
	var _removeStyle2 = _interopRequireDefault(_removeStyle);
	
	var _properties = __webpack_require__(13);
	
	var _isTransform = __webpack_require__(24);
	
	var _isTransform2 = _interopRequireDefault(_isTransform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }
	
	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;
	
	var _camelize = __webpack_require__(19);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;
	
	var _hyphenate = __webpack_require__(21);
	
	var _hyphenate2 = _interopRequireDefault(_hyphenate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;
	
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = __webpack_require__(18);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	
	      prop = (0, _camelizeStyle2.default)(prop);
	
	      if (prop == 'float') prop = 'styleFloat';
	
	      var current = node.currentStyle[prop] || null;
	
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;
	
	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';
	
	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(27);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(29);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(30);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(33);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(34);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(35);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(36);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(37);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(38);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(39);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(44);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(48);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(49);
	
	var _Align3 = _interopRequireDefault(_Align2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';
	
	exports.Align = _Align3.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }
	
	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	
	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	function _objectEntries(obj) {
	  var entries = [];
	  var keys = Object.keys(obj);
	
	  for (var k = 0; k < keys.length; ++k) {
	    entries.push([keys[k], obj[keys[k]]]);
	  }return entries;
	}
	
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;
	
	  var parentProps = {};
	  var childProps = {};
	
	  _objectEntries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });
	
	  return [parentProps, childProps];
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(40);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;
	
	var _EventObject = __webpack_require__(41);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventBaseObject = __webpack_require__(42);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(43);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2["default"].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;
	
	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(45);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(46);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.default = cssAnimation;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports.default = TransitionEvents;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(47);
	} catch (err) {
	  var index = __webpack_require__(47);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(50);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(39);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import isWindow from './isWindow';
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};
	
	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    return _this;
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react2.default.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.startMonitorWindowResize = function () {
	    if (!_this2.resizeHandler) {
	      _this2.bufferMonitor = buffer(_this2.forceAlign, _this2.props.monitorBufferTime);
	      _this2.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this2.bufferMonitor);
	    }
	  };
	
	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };
	
	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};
	
	;
	
	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	
	exports.default = Align;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(51);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(53);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(54);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(56);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(57);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(58);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);
	
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTargetNotOutOfVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = _getOffsetParent2['default'];
	
	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(52);
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = void 0;
	
	function force(x, y) {
	  return x + y;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;
	
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}
	
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(51);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(51);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(53);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(55);
	
	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;
	
	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(51);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(51);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(51);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(59);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};
	
	// TODO: Use uncontrollable.
	
	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);
	
	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleSelect = _this.handleSelect.bind(_this);
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({ activeKey: key });
	  };
	
	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);
	
	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };
	
	        if (accordion) {
	          _extends(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }
	
	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };
	
	  return PanelGroup;
	}(_react2["default"].Component);
	
	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;
	
	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(63);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _propTypes2["default"].oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),
	
	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,
	
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
	    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
	};
	
	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false,
	    isSubmit: false
	};
	
	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }
	
	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            isSubmit = _props.isSubmit,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);
	
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        //clsObj[`${clsPrefix}-border`] = bordered;
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };
	
	    return Button;
	}(_react.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CitySelect = __webpack_require__(65);
	
	var _CitySelect2 = _interopRequireDefault(_CitySelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _CitySelect2['default'];
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _beeSelect = __webpack_require__(66);
	
	var _beeSelect2 = _interopRequireDefault(_beeSelect);
	
	var _lodash = __webpack_require__(104);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var provinceData = [{ "name": "北京", "city": [{ "name": "北京", "area": ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"] }] }, { "name": "天津", "city": [{ "name": "天津", "area": ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟  县"] }] }, { "name": "河北", "city": [{ "name": "石家庄", "area": ["长安区", "桥东区", "桥西区", "新华区", "郊  区", "井陉矿区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵  县", "辛集市", "藁", "晋州市", "新乐市", "鹿泉市"] }, { "name": "唐山", "area": ["路南区", "路北区", "古冶区", "开平区", "新  区", "丰润县", "滦  县", "滦南县", "乐亭县", "迁西县", "玉田县", "唐海县", "遵化市", "丰南市", "迁安市"] }, { "name": "秦皇岛", "area": ["海港区", "山海关区", "北戴河区", "青龙满族自治县", "昌黎县", "抚宁县", "卢龙县"] }, { "name": "邯郸", "area": ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉  县", "磁  县", "肥乡县", "永年县", "邱  县", "鸡泽县", "广平县", "馆陶县", "魏  县", "曲周县", "武安市"] }, { "name": "邢台", "area": ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任  县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威  县", "清河县", "临西县", "南宫市", "沙河市"] }, { "name": "保定", "area": ["新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐  县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易  县", "曲阳县", "蠡  县", "顺平县", "博野", "雄县", "涿州市", "定州市", "安国市", "高碑店市"] }, { "name": "张家口", "area": ["桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚  县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县"] }, { "name": "承德", "area": ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县"] }, { "name": "沧州", "area": ["新华区", "运河区", "沧  县", "青  县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献  县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市"] }, { "name": "廊坊", "area": ["安次区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市"] }, { "name": "衡水", "area": ["桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景  县", "阜城县", "冀州市", "深州市"] }] }, { "name": "山西", "city": [{ "name": "太原", "area": ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市"] }, { "name": "大同", "area": ["城  区", "矿  区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县"] }, { "name": "阳泉", "area": ["城  区", "矿  区", "郊  区", "平定县", "盂  县"] }, { "name": "长治", "area": ["城  区", "郊  区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁  县", "沁源县", "潞城市"] }, { "name": "晋城", "area": ["城  区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市"] }, { "name": "朔州", "area": ["朔城区", "平鲁区", "山阴县", "应  县", "右玉县", "怀仁县"] }, { "name": "忻州", "area": ["忻府区", "原平市", "定襄县", "五台县", "代  县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县"] }, { "name": "吕梁", "area": ["离石区", "孝义市", "汾阳市", "文水县", "交城县", "兴  县", "临  县", "柳林县", "石楼县", "岚  县", "方山县", "中阳县", "交口县"] }, { "name": "晋中", "area": ["榆次市", "介休市", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁  县", "平遥县", "灵石县"] }, { "name": "临汾", "area": ["临汾市", "侯马市", "霍州市", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古  县", "安泽县", "浮山县", "吉  县", "乡宁县", "蒲  县", "大宁县", "永和县", "隰  县", "汾西县"] }, { "name": "运城", "area": ["运城市", "永济市", "河津市", "芮城县", "临猗县", "万荣县", "新绛县", "稷山县", "闻喜县", "夏  县", "绛  县", "平陆县", "垣曲县"] }] }, { "name": "内蒙古", "city": [{ "name": "呼和浩特", "area": ["新城区", "回民区", "玉泉区", "郊  区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县"] }, { "name": "包头", "area": ["东河区", "昆都伦区", "青山区", "石拐矿区", "白云矿区", "郊  区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗"] }, { "name": "乌海", "area": ["海勃湾区", "海南区", "乌达区"] }, { "name": "赤峰", "area": ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗"] }, { "name": "呼伦贝尔", "area": ["海拉尔市", "满洲里市", "扎兰屯市", "牙克石市", "根河市", "额尔古纳市", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "新巴尔虎右旗", "新巴尔虎左旗", "陈巴尔虎旗"] }, { "name": "兴安盟", "area": ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县"] }, { "name": "通辽", "area": ["科尔沁区", "霍林郭勒市", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗"] }, { "name": "锡林郭勒盟", "area": ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县"] }, { "name": "乌兰察布盟", "area": ["集宁市", "丰镇市", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗"] }, { "name": "伊克昭盟", "area": ["东胜市", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗"] }, { "name": "巴彦淖尔盟", "area": ["临河市", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗"] }, { "name": "阿拉善盟", "area": ["阿拉善左旗", "阿拉善右旗", "额济纳旗"] }] }, { "name": "辽宁", "city": [{ "name": "沈阳", "area": ["沈河区", "皇姑区", "和平区", "大东区", "铁西区", "苏家屯区", "东陵区", "于洪区", "新民市", "法库县", "辽中县", "康平县", "新城子区", "其他"] }, { "name": "大连", "area": ["西岗区", "中山区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "瓦房店市", "普兰店市", "庄河市", "长海县", "其他"] }, { "name": "鞍山", "area": ["铁东区", "铁西区", "立山区", "千山区", "海城市", "台安县", "岫岩满族自治县", "其他"] }, { "name": "抚顺", "area": ["顺城区", "新抚区", "东洲区", "望花区", "抚顺县", "清原满族自治县", "新宾满族自治县", "其他"] }, { "name": "本溪", "area": ["平山区", "明山区", "溪湖区", "南芬区", "本溪满族自治县", "桓仁满族自治县", "其他"] }, { "name": "丹东", "area": ["振兴区", "元宝区", "振安区", "东港市", "凤城市", "宽甸满族自治县", "其他"] }, { "name": "锦州", "area": ["太和区", "古塔区", "凌河区", "凌海市", "黑山县", "义县", "北宁市", "其他"] }, { "name": "营口", "area": ["站前区", "西市区", "鲅鱼圈区", "老边区", "大石桥市", "盖州市", "其他"] }, { "name": "阜新", "area": ["海州区", "新邱区", "太平区", "清河门区", "细河区", "彰武县", "阜新蒙古族自治县", "其他"] }, { "name": "辽阳", "area": ["白塔区", "文圣区", "宏伟区", "太子河区", "弓长岭区", "灯塔市", "辽阳县", "其他"] }, { "name": "盘锦", "area": ["双台子区", "兴隆台区", "盘山县", "大洼县", "其他"] }, { "name": "铁岭", "area": ["银州区", "清河区", "调兵山市", "开原市", "铁岭县", "昌图县", "西丰县", "其他"] }, { "name": "朝阳", "area": ["双塔区", "龙城区", "凌源市", "北票市", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "其他"] }, { "name": "葫芦岛", "area": ["龙港区", "南票区", "连山区", "兴城市", "绥中县", "建昌县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "吉林", "city": [{ "name": "长春", "area": ["朝阳区", "宽城区", "二道区", "南关区", "绿园区", "双阳区", "九台市", "榆树市", "德惠市", "农安县", "其他"] }, { "name": "吉林", "area": ["船营区", "昌邑区", "龙潭区", "丰满区", "舒兰市", "桦甸市", "蛟河市", "磐石市", "永吉县", "其他"] }, { "name": "四平", "area": ["铁西区", "铁东区", "公主岭市", "双辽市", "梨树县", "伊通满族自治县", "其他"] }, { "name": "辽源", "area": ["龙山区", "西安区", "东辽县", "东丰县", "其他"] }, { "name": "通化", "area": ["东昌区", "二道江区", "梅河口市", "集安市", "通化县", "辉南县", "柳河县", "其他"] }, { "name": "白山", "area": ["八道江区", "江源区", "临江市", "靖宇县", "抚松县", "长白朝鲜族自治县", "其他"] }, { "name": "松原", "area": ["宁江区", "乾安县", "长岭县", "扶余县", "前郭尔罗斯蒙古族自治县", "其他"] }, { "name": "白城", "area": ["洮北区", "大安市", "洮南市", "镇赉县", "通榆县", "其他"] }, { "name": "延边朝鲜族自治州", "area": ["延吉市", "图们市", "敦化市", "龙井市", "珲春市", "和龙市", "安图县", "汪清县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "黑龙江", "city": [{ "name": "哈尔滨", "area": ["松北区", "道里区", "南岗区", "平房区", "香坊区", "道外区", "呼兰区", "阿城区", "双城市", "尚志市", "五常市", "宾县", "方正县", "通河县", "巴彦县", "延寿县", "木兰县", "依兰县", "其他"] }, { "name": "齐齐哈尔", "area": ["龙沙区", "昂昂溪区", "铁锋区", "建华区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "讷河市", "富裕县", "拜泉县", "甘南县", "依安县", "克山县", "泰来县", "克东县", "龙江县", "其他"] }, { "name": "鹤岗", "area": ["兴山区", "工农区", "南山区", "兴安区", "向阳区", "东山区", "萝北县", "绥滨县", "其他"] }, { "name": "双鸭山", "area": ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "宝清县", "友谊县", "饶河县", "其他"] }, { "name": "鸡西", "area": ["鸡冠区", "恒山区", "城子河区", "滴道区", "梨树区", "麻山区", "密山市", "虎林市", "鸡东县", "其他"] }, { "name": "大庆", "area": ["萨尔图区", "红岗区", "龙凤区", "让胡路区", "大同区", "林甸县", "肇州县", "肇源县", "杜尔伯特蒙古族自治县", "其他"] }, { "name": "伊春", "area": ["伊春区", "带岭区", "南岔区", "金山屯区", "西林区", "美溪区", "乌马河区", "翠峦区", "友好区", "上甘岭区", "五营区", "红星区", "新青区", "汤旺河区", "乌伊岭区", "铁力市", "嘉荫县", "其他"] }, { "name": "牡丹江", "area": ["爱民区", "东安区", "阳明区", "西安区", "绥芬河市", "宁安市", "海林市", "穆棱市", "林口县", "东宁县", "其他"] }, { "name": "佳木斯", "area": ["向阳区", "前进区", "东风区", "郊区", "同江市", "富锦市", "桦川县", "抚远县", "桦南县", "汤原县", "其他"] }, { "name": "七台河", "area": ["桃山区", "新兴区", "茄子河区", "勃利县", "其他"] }, { "name": "黑河", "area": ["爱辉区", "北安市", "五大连池市", "逊克县", "嫩江县", "孙吴县", "其他"] }, { "name": "绥化", "area": ["北林区", "安达市", "肇东市", "海伦市", "绥棱县", "兰西县", "明水县", "青冈县", "庆安县", "望奎县", "其他"] }, { "name": "大兴安岭地区", "area": ["呼玛县", "塔河县", "漠河县", "大兴安岭辖区", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "上海", "city": [{ "name": "上海", "area": ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明县", "其他"] }] }, { "name": "江苏", "city": [{ "name": "南京", "area": ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "栖霞区", "雨花台区", "浦口区", "江宁区", "六合区", "溧水县", "高淳县", "其他"] }, { "name": "苏州", "area": ["金阊区", "平江区", "沧浪区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江市", "太仓市", "其他"] }, { "name": "无锡", "area": ["崇安区", "南长区", "北塘区", "滨湖区", "锡山区", "惠山区", "江阴市", "宜兴市", "其他"] }, { "name": "常州", "area": ["钟楼区", "天宁区", "戚墅堰区", "新北区", "武进区", "金坛市", "溧阳市", "其他"] }, { "name": "镇江", "area": ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市", "其他"] }, { "name": "南通", "area": ["崇川区", "港闸区", "通州市", "如皋市", "海门市", "启东市", "海安县", "如东县", "其他"] }, { "name": "泰州", "area": ["海陵区", "高港区", "姜堰市", "泰兴市", "靖江市", "兴化市", "其他"] }, { "name": "扬州", "area": ["广陵区", "维扬区", "邗江区", "江都市", "仪征市", "高邮市", "宝应县", "其他"] }, { "name": "盐城", "area": ["亭湖区", "盐都区", "大丰市", "东台市", "建湖县", "射阳县", "阜宁县", "滨海县", "响水县", "其他"] }, { "name": "连云港", "area": ["新浦区", "海州区", "连云区", "东海县", "灌云县", "赣榆县", "灌南县", "其他"] }, { "name": "徐州", "area": ["云龙区", "鼓楼区", "九里区", "泉山区", "贾汪区", "邳州市", "新沂市", "铜山县", "睢宁县", "沛县", "丰县", "其他"] }, { "name": "淮安", "area": ["清河区", "清浦区", "楚州区", "淮阴区", "涟水县", "洪泽县", "金湖县", "盱眙县", "其他"] }, { "name": "宿迁", "area": ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "浙江", "city": [{ "name": "杭州", "area": ["拱墅区", "西湖区", "上城区", "下城区", "江干区", "滨江区", "余杭区", "萧山区", "建德市", "富阳市", "临安市", "桐庐县", "淳安县", "其他"] }, { "name": "宁波", "area": ["海曙区", "江东区", "江北区", "镇海区", "北仑区", "鄞州区", "余姚市", "慈溪市", "奉化市", "宁海县", "象山县", "其他"] }, { "name": "温州", "area": ["鹿城区", "龙湾区", "瓯海区", "瑞安市", "乐清市", "永嘉县", "洞头县", "平阳县", "苍南县", "文成县", "泰顺县", "其他"] }, { "name": "嘉兴", "area": ["秀城区", "秀洲区", "海宁市", "平湖市", "桐乡市", "嘉善县", "海盐县", "其他"] }, { "name": "湖州", "area": ["吴兴区", "南浔区", "长兴县", "德清县", "安吉县", "其他"] }, { "name": "绍兴", "area": ["越城区", "诸暨市", "上虞市", "嵊州市", "绍兴县", "新昌县", "其他"] }, { "name": "金华", "area": ["婺城区", "金东区", "兰溪市", "义乌市", "东阳市", "永康市", "武义县", "浦江县", "磐安县", "其他"] }, { "name": "衢州", "area": ["柯城区", "衢江区", "江山市", "龙游县", "常山县", "开化县", "其他"] }, { "name": "舟山", "area": ["定海区", "普陀区", "岱山县", "嵊泗县", "其他"] }, { "name": "台州", "area": ["椒江区", "黄岩区", "路桥区", "临海市", "温岭市", "玉环县", "天台县", "仙居县", "三门县", "其他"] }, { "name": "丽水", "area": ["莲都区", "龙泉市", "缙云县", "青田县", "云和县", "遂昌县", "松阳县", "庆元县", "景宁畲族自治县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "安徽", "city": [{ "name": "合肥", "area": ["庐阳区", "瑶海区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "其他"] }, { "name": "芜湖", "area": ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "南陵县", "繁昌县", "其他"] }, { "name": "蚌埠", "area": ["蚌山区", "龙子湖区", "禹会区", "淮上区", "怀远县", "固镇县", "五河县", "其他"] }, { "name": "淮南", "area": ["田家庵区", "大通区", "谢家集区", "八公山区", "潘集区", "凤台县", "其他"] }, { "name": "马鞍山", "area": ["雨山区", "花山区", "金家庄区", "当涂县", "其他"] }, { "name": "淮北", "area": ["相山区", "杜集区", "烈山区", "濉溪县", "其他"] }, { "name": "铜陵", "area": ["铜官山区", "狮子山区", "郊区", "铜陵县", "其他"] }, { "name": "安庆", "area": ["迎江区", "大观区", "宜秀区", "桐城市", "宿松县", "枞阳县", "太湖县", "怀宁县", "岳西县", "望江县", "潜山县", "其他"] }, { "name": "黄山", "area": ["屯溪区", "黄山区", "徽州区", "休宁县", "歙县", "祁门县", "黟县", "其他"] }, { "name": "滁州", "area": ["琅琊区", "南谯区", "天长市", "明光市", "全椒县", "来安县", "定远县", "凤阳县", "其他"] }, { "name": "阜阳", "area": ["颍州区", "颍东区", "颍泉区", "界首市", "临泉县", "颍上县", "阜南县", "太和县", "其他"] }, { "name": "宿州", "area": ["埇桥区", "萧县", "泗县", "砀山县", "灵璧县", "其他"] }, { "name": "巢湖", "area": ["居巢区", "含山县", "无为县", "庐江县", "和县", "其他"] }, { "name": "六安", "area": ["金安区", "裕安区", "寿县", "霍山县", "霍邱县", "舒城县", "金寨县", "其他"] }, { "name": "亳州", "area": ["谯城区", "利辛县", "涡阳县", "蒙城县", "其他"] }, { "name": "池州", "area": ["贵池区", "东至县", "石台县", "青阳县", "其他"] }, { "name": "宣城", "area": ["宣州区", "宁国市", "广德县", "郎溪县", "泾县", "旌德县", "绩溪县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "福建", "city": [{ "name": "福州", "area": ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "福清市", "长乐市", "闽侯县", "闽清县", "永泰县", "连江县", "罗源县", "平潭县", "其他"] }, { "name": "厦门", "area": ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其他"] }, { "name": "莆田", "area": ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其他"] }, { "name": "三明", "area": ["梅列区", "三元区", "永安市", "明溪县", "将乐县", "大田县", "宁化县", "建宁县", "沙县", "尤溪县", "清流县", "泰宁县", "其他"] }, { "name": "泉州", "area": ["鲤城区", "丰泽区", "洛江区", "泉港区", "石狮市", "晋江市", "南安市", "惠安县", "永春县", "安溪县", "德化县", "金门县", "其他"] }, { "name": "漳州", "area": ["芗城区", "龙文区", "龙海市", "平和县", "南靖县", "诏安县", "漳浦县", "华安县", "东山县", "长泰县", "云霄县", "其他"] }, { "name": "南平", "area": ["延平区", "建瓯市", "邵武市", "武夷山市", "建阳市", "松溪县", "光泽县", "顺昌县", "浦城县", "政和县", "其他"] }, { "name": "龙岩", "area": ["新罗区", "漳平市", "长汀县", "武平县", "上杭县", "永定县", "连城县", "其他"] }, { "name": "宁德", "area": ["蕉城区", "福安市", "福鼎市", "寿宁县", "霞浦县", "柘荣县", "屏南县", "古田县", "周宁县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "江西", "city": [{ "name": "南昌", "area": ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建县", "南昌县", "进贤县", "安义县", "其他"] }, { "name": "景德镇", "area": ["珠山区", "昌江区", "乐平市", "浮梁县", "其他"] }, { "name": "萍乡", "area": ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其他"] }, { "name": "九江", "area": ["浔阳区", "庐山区", "瑞昌市", "九江县", "星子县", "武宁县", "彭泽县", "永修县", "修水县", "湖口县", "德安县", "都昌县", "其他"] }, { "name": "新余", "area": ["渝水区", "分宜县", "其他"] }, { "name": "鹰潭", "area": ["月湖区", "贵溪市", "余江县", "其他"] }, { "name": "赣州", "area": ["章贡区", "瑞金市", "南康市", "石城县", "安远县", "赣县", "宁都县", "寻乌县", "兴国县", "定南县", "上犹县", "于都县", "龙南县", "崇义县", "信丰县", "全南县", "大余县", "会昌县", "其他"] }, { "name": "吉安", "area": ["吉州区", "青原区", "井冈山市", "吉安县", "永丰县", "永新县", "新干县", "泰和县", "峡江县", "遂川县", "安福县", "吉水县", "万安县", "其他"] }, { "name": "宜春", "area": ["袁州区", "丰城市", "樟树市", "高安市", "铜鼓县", "靖安县", "宜丰县", "奉新县", "万载县", "上高县", "其他"] }, { "name": "抚州", "area": ["临川区", "南丰县", "乐安县", "金溪县", "南城县", "东乡县", "资溪县", "宜黄县", "广昌县", "黎川县", "崇仁县", "其他"] }, { "name": "上饶", "area": ["信州区", "德兴市", "上饶县", "广丰县", "鄱阳县", "婺源县", "铅山县", "余干县", "横峰县", "弋阳县", "玉山县", "万年县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "山东", "city": [{ "name": "济南", "area": ["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区", "章丘市", "平阴县", "济阳县", "商河县", "其他"] }, { "name": "青岛", "area": ["市南区", "市北区", "城阳区", "四方区", "李沧区", "黄岛区", "崂山区", "胶南市", "胶州市", "平度市", "莱西市", "即墨市", "其他"] }, { "name": "淄博", "area": ["张店区", "临淄区", "淄川区", "博山区", "周村区", "桓台县", "高青县", "沂源县", "其他"] }, { "name": "枣庄", "area": ["市中区", "山亭区", "峄城区", "台儿庄区", "薛城区", "滕州市", "其他"] }, { "name": "东营", "area": ["东营区", "河口区", "垦利县", "广饶县", "利津县", "其他"] }, { "name": "烟台", "area": ["芝罘区", "福山区", "牟平区", "莱山区", "龙口市", "莱阳市", "莱州市", "招远市", "蓬莱市", "栖霞市", "海阳市", "长岛县", "其他"] }, { "name": "潍坊", "area": ["潍城区", "寒亭区", "坊子区", "奎文区", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市", "昌乐县", "临朐县", "其他"] }, { "name": "济宁", "area": ["市中区", "任城区", "曲阜市", "兖州市", "邹城市", "鱼台县", "金乡县", "嘉祥县", "微山县", "汶上县", "泗水县", "梁山县", "其他"] }, { "name": "泰安", "area": ["泰山区", "岱岳区", "新泰市", "肥城市", "宁阳县", "东平县", "其他"] }, { "name": "威海", "area": ["环翠区", "乳山市", "文登市", "荣成市", "其他"] }, { "name": "日照", "area": ["东港区", "岚山区", "五莲县", "莒县", "其他"] }, { "name": "莱芜", "area": ["莱城区", "钢城区", "其他"] }, { "name": "临沂", "area": ["兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县", "其他"] }, { "name": "德州", "area": ["德城区", "乐陵市", "禹城市", "陵县", "宁津县", "齐河县", "武城县", "庆云县", "平原县", "夏津县", "临邑县", "其他"] }, { "name": "聊城", "area": ["东昌府区", "临清市", "高唐县", "阳谷县", "茌平县", "莘县", "东阿县", "冠县", "其他"] }, { "name": "滨州", "area": ["滨城区", "邹平县", "沾化县", "惠民县", "博兴县", "阳信县", "无棣县", "其他"] }, { "name": "菏泽", "area": ["牡丹区", "鄄城县", "单县", "郓城县", "曹县", "定陶县", "巨野县", "东明县", "成武县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "河南", "city": [{ "name": "郑州", "area": ["中原区", "金水区", "二七区", "管城回族区", "上街区", "惠济区", "巩义市", "新郑市", "新密市", "登封市", "荥阳市", "中牟县", "其他"] }, { "name": "开封", "area": ["鼓楼区", "龙亭区", "顺河回族区", "禹王台区", "金明区", "开封县", "尉氏县", "兰考县", "杞县", "通许县", "其他"] }, { "name": "洛阳", "area": ["西工区", "老城区", "涧西区", "瀍河回族区", "洛龙区", "吉利区", "偃师市", "孟津县", "汝阳县", "伊川县", "洛宁县", "嵩县", "宜阳县", "新安县", "栾川县", "其他"] }, { "name": "平顶山", "area": ["新华区", "卫东区", "湛河区", "石龙区", "汝州市", "舞钢市", "宝丰县", "叶县", "郏县", "鲁山县", "其他"] }, { "name": "安阳", "area": ["北关区", "文峰区", "殷都区", "龙安区", "林州市", "安阳县", "滑县", "内黄县", "汤阴县", "其他"] }, { "name": "鹤壁", "area": ["淇滨区", "山城区", "鹤山区", "浚县", "淇县", "其他"] }, { "name": "新乡", "area": ["卫滨区", "红旗区", "凤泉区", "牧野区", "卫辉市", "辉县市", "新乡县", "获嘉县", "原阳县", "长垣县", "封丘县", "延津县", "其他"] }, { "name": "焦作", "area": ["解放区", "中站区", "马村区", "山阳区", "沁阳市", "孟州市", "修武县", "温县", "武陟县", "博爱县", "其他"] }, { "name": "濮阳", "area": ["华龙区", "濮阳县", "南乐县", "台前县", "清丰县", "范县", "其他"] }, { "name": "许昌", "area": ["魏都区", "禹州市", "长葛市", "许昌县", "鄢陵县", "襄城县", "其他"] }, { "name": "漯河", "area": ["源汇区", "郾城区", "召陵区", "临颍县", "舞阳县", "其他"] }, { "name": "三门峡", "area": ["湖滨区", "义马市", "灵宝市", "渑池县", "卢氏县", "陕县", "其他"] }, { "name": "南阳", "area": ["卧龙区", "宛城区", "邓州市", "桐柏县", "方城县", "淅川县", "镇平县", "唐河县", "南召县", "内乡县", "新野县", "社旗县", "西峡县", "其他"] }, { "name": "商丘", "area": ["梁园区", "睢阳区", "永城市", "宁陵县", "虞城县", "民权县", "夏邑县", "柘城县", "睢县", "其他"] }, { "name": "信阳", "area": ["浉河区", "平桥区", "潢川县", "淮滨县", "息县", "新县", "商城县", "固始县", "罗山县", "光山县", "其他"] }, { "name": "周口", "area": ["川汇区", "项城市", "商水县", "淮阳县", "太康县", "鹿邑县", "西华县", "扶沟县", "沈丘县", "郸城县", "其他"] }, { "name": "驻马店", "area": ["驿城区", "确山县", "新蔡县", "上蔡县", "西平县", "泌阳县", "平舆县", "汝南县", "遂平县", "正阳县", "其他"] }, { "name": "焦作", "area": ["济源市", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "湖北", "city": [{ "name": "武汉", "area": ["江岸区", "武昌区", "江汉区", "硚口区", "汉阳区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "其他"] }, { "name": "黄石", "area": ["黄石港区", "西塞山区", "下陆区", "铁山区", "大冶市", "阳新县", "其他"] }, { "name": "十堰", "area": ["张湾区", "茅箭区", "丹江口市", "郧县", "竹山县", "房县", "郧西县", "竹溪县", "其他"] }, { "name": "荆州", "area": ["沙市区", "荆州区", "洪湖市", "石首市", "松滋市", "监利县", "公安县", "江陵县", "其他"] }, { "name": "宜昌", "area": ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "宜都市", "当阳市", "枝江市", "秭归县", "远安县", "兴山县", "五峰土家族自治县", "长阳土家族自治县", "其他"] }, { "name": "襄樊", "area": ["襄城区", "樊城区", "襄阳区", "老河口市", "枣阳市", "宜城市", "南漳县", "谷城县", "保康县", "其他"] }, { "name": "鄂州", "area": ["鄂城区", "华容区", "梁子湖区", "其他"] }, { "name": "荆门", "area": ["东宝区", "掇刀区", "钟祥市", "京山县", "沙洋县", "其他"] }, { "name": "孝感", "area": ["孝南区", "应城市", "安陆市", "汉川市", "云梦县", "大悟县", "孝昌县", "其他"] }, { "name": "黄冈", "area": ["黄州区", "麻城市", "武穴市", "红安县", "罗田县", "浠水县", "蕲春县", "黄梅县", "英山县", "团风县", "其他"] }, { "name": "咸宁", "area": ["咸安区", "赤壁市", "嘉鱼县", "通山县", "崇阳县", "通城县", "其他"] }, { "name": "随州", "area": ["曾都区", "广水市", "其他"] }, { "name": "恩施土家族苗族自治州", "area": ["恩施市", "利川市", "建始县", "来凤县", "巴东县", "鹤峰县", "宣恩县", "咸丰县", "其他"] }, { "name": "仙桃", "area": ["仙桃"] }, { "name": "天门", "area": ["天门"] }, { "name": "潜江", "area": ["潜江"] }, { "name": "神农架林区", "area": ["神农架林区"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "湖南", "city": [{ "name": "长沙", "area": ["岳麓区", "芙蓉区", "天心区", "开福区", "雨花区", "浏阳市", "长沙县", "望城县", "宁乡县", "其他"] }, { "name": "株洲", "area": ["天元区", "荷塘区", "芦淞区", "石峰区", "醴陵市", "株洲县", "炎陵县", "茶陵县", "攸县", "其他"] }, { "name": "湘潭", "area": ["岳塘区", "雨湖区", "湘乡市", "韶山市", "湘潭县", "其他"] }, { "name": "衡阳", "area": ["雁峰区", "珠晖区", "石鼓区", "蒸湘区", "南岳区", "耒阳市", "常宁市", "衡阳县", "衡东县", "衡山县", "衡南县", "祁东县", "其他"] }, { "name": "邵阳", "area": ["双清区", "大祥区", "北塔区", "武冈市", "邵东县", "洞口县", "新邵县", "绥宁县", "新宁县", "邵阳县", "隆回县", "城步苗族自治县", "其他"] }, { "name": "岳阳", "area": ["岳阳楼区", "云溪区", "君山区", "临湘市", "汨罗市", "岳阳县", "湘阴县", "平江县", "华容县", "其他"] }, { "name": "常德", "area": ["武陵区", "鼎城区", "津市市", "澧县", "临澧县", "桃源县", "汉寿县", "安乡县", "石门县", "其他"] }, { "name": "张家界", "area": ["永定区", "武陵源区", "慈利县", "桑植县", "其他"] }, { "name": "益阳", "area": ["赫山区", "资阳区", "沅江市", "桃江县", "南县", "安化县", "其他"] }, { "name": "郴州", "area": ["北湖区", "苏仙区", "资兴市", "宜章县", "汝城县", "安仁县", "嘉禾县", "临武县", "桂东县", "永兴县", "桂阳县", "其他"] }, { "name": "永州", "area": ["冷水滩区", "零陵区", "祁阳县", "蓝山县", "宁远县", "新田县", "东安县", "江永县", "道县", "双牌县", "江华瑶族自治县", "其他"] }, { "name": "怀化", "area": ["鹤城区", "洪江市", "会同县", "沅陵县", "辰溪县", "溆浦县", "中方县", "新晃侗族自治县", "芷江侗族自治县", "通道侗族自治县", "靖州苗族侗族自治县", "麻阳苗族自治县", "其他"] }, { "name": "娄底", "area": ["娄星区", "冷水江市", "涟源市", "新化县", "双峰县", "其他"] }, { "name": "湘西土家族苗族自治州", "area": ["吉首市", "古丈县", "龙山县", "永顺县", "凤凰县", "泸溪县", "保靖县", "花垣县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "广东", "city": [{ "name": "广州", "area": ["越秀区", "荔湾区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "其他"] }, { "name": "深圳", "area": ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区", "盐田区", "其他"] }, { "name": "东莞", "area": ["莞城", "常平", "塘厦", "塘厦", "塘厦", "其他"] }, { "name": "中山", "area": ["中山"] }, { "name": "潮州", "area": ["湘桥区", "潮安县", "饶平县", "其他"] }, { "name": "揭阳", "area": ["榕城区", "揭东县", "揭西县", "惠来县", "普宁市", "其他"] }, { "name": "云浮", "area": ["云城区", "新兴县", "郁南县", "云安县", "罗定市", "其他"] }, { "name": "珠海", "area": ["香洲区", "斗门区", "金湾区", "其他"] }, { "name": "汕头", "area": ["金平区", "濠江区", "龙湖区", "潮阳区", "潮南区", "澄海区", "南澳县", "其他"] }, { "name": "韶关", "area": ["浈江区", "武江区", "曲江区", "乐昌市", "南雄市", "始兴县", "仁化县", "翁源县", "新丰县", "乳源瑶族自治县", "其他"] }, { "name": "佛山", "area": ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其他"] }, { "name": "江门", "area": ["蓬江区", "江海区", "新会区", "恩平市", "台山市", "开平市", "鹤山市", "其他"] }, { "name": "湛江", "area": ["赤坎区", "霞山区", "坡头区", "麻章区", "吴川市", "廉江市", "雷州市", "遂溪县", "徐闻县", "其他"] }, { "name": "茂名", "area": ["茂南区", "茂港区", "化州市", "信宜市", "高州市", "电白县", "其他"] }, { "name": "肇庆", "area": ["端州区", "鼎湖区", "高要市", "四会市", "广宁县", "怀集县", "封开县", "德庆县", "其他"] }, { "name": "惠州", "area": ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县", "其他"] }, { "name": "梅州", "area": ["梅江区", "兴宁市", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "其他"] }, { "name": "汕尾", "area": ["城区", "陆丰市", "海丰县", "陆河县", "其他"] }, { "name": "河源", "area": ["源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县", "其他"] }, { "name": "阳江", "area": ["江城区", "阳春市", "阳西县", "阳东县", "其他"] }, { "name": "清远", "area": ["清城区", "英德市", "连州市", "佛冈县", "阳山县", "清新县", "连山壮族瑶族自治县", "连南瑶族自治县", "其他"] }] }, { "name": "广西", "city": [{ "name": "南宁", "area": ["青秀区", "兴宁区", "西乡塘区", "良庆区", "江南区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其他"] }, { "name": "柳州", "area": ["城中区", "鱼峰区", "柳北区", "柳南区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "其他"] }, { "name": "桂林", "area": ["象山区", "秀峰区", "叠彩区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜各族自治县", "恭城瑶族自治县", "其他"] }, { "name": "梧州", "area": ["万秀区", "蝶山区", "长洲区", "岑溪市", "苍梧县", "藤县", "蒙山县", "其他"] }, { "name": "北海", "area": ["海城区", "银海区", "铁山港区", "合浦县", "其他"] }, { "name": "防城港", "area": ["港口区", "防城区", "东兴市", "上思县", "其他"] }, { "name": "钦州", "area": ["钦南区", "钦北区", "灵山县", "浦北县", "其他"] }, { "name": "贵港", "area": ["港北区", "港南区", "覃塘区", "桂平市", "平南县", "其他"] }, { "name": "玉林", "area": ["玉州区", "北流市", "容县", "陆川县", "博白县", "兴业县", "其他"] }, { "name": "百色", "area": ["右江区", "凌云县", "平果县", "西林县", "乐业县", "德保县", "田林县", "田阳县", "靖西县", "田东县", "那坡县", "隆林各族自治县", "其他"] }, { "name": "贺州", "area": ["八步区", "钟山县", "昭平县", "富川瑶族自治县", "其他"] }, { "name": "河池", "area": ["金城江区", "宜州市", "天峨县", "凤山县", "南丹县", "东兰县", "都安瑶族自治县", "罗城仫佬族自治县", "巴马瑶族自治县", "环江毛南族自治县", "大化瑶族自治县", "其他"] }, { "name": "来宾", "area": ["兴宾区", "合山市", "象州县", "武宣县", "忻城县", "金秀瑶族自治县", "其他"] }, { "name": "崇左", "area": ["江州区", "凭祥市", "宁明县", "扶绥县", "龙州县", "大新县", "天等县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "海南", "city": [{ "name": "海口", "area": ["龙华区", "秀英区", "琼山区", "美兰区", "其他"] }, { "name": "三亚", "area": ["三亚市", "其他"] }, { "name": "五指山", "area": ["五指山"] }, { "name": "琼海", "area": ["琼海"] }, { "name": "儋州", "area": ["儋州"] }, { "name": "文昌", "area": ["文昌"] }, { "name": "万宁", "area": ["万宁"] }, { "name": "东方", "area": ["东方"] }, { "name": "澄迈县", "area": ["澄迈县"] }, { "name": "定安县", "area": ["定安县"] }, { "name": "屯昌县", "area": ["屯昌县"] }, { "name": "临高县", "area": ["临高县"] }, { "name": "白沙黎族自治县", "area": ["白沙黎族自治县"] }, { "name": "昌江黎族自治县", "area": ["昌江黎族自治县"] }, { "name": "乐东黎族自治县", "area": ["乐东黎族自治县"] }, { "name": "陵水黎族自治县", "area": ["陵水黎族自治县"] }, { "name": "保亭黎族苗族自治县", "area": ["保亭黎族苗族自治县"] }, { "name": "琼中黎族苗族自治县", "area": ["琼中黎族苗族自治县"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "重庆", "city": [{ "name": "重庆", "area": ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "其他"] }] }, { "name": "四川", "city": [{ "name": "成都", "area": ["青羊区", "锦江区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "都江堰市", "彭州市", "邛崃市", "崇州市", "金堂县", "郫县", "新津县", "双流县", "蒲江县", "大邑县", "其他"] }, { "name": "自贡", "area": ["大安区", "自流井区", "贡井区", "沿滩区", "荣县", "富顺县", "其他"] }, { "name": "攀枝花", "area": ["仁和区", "米易县", "盐边县", "东区", "西区", "其他"] }, { "name": "泸州", "area": ["江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县", "其他"] }, { "name": "德阳", "area": ["旌阳区", "广汉市", "什邡市", "绵竹市", "罗江县", "中江县", "其他"] }, { "name": "绵阳", "area": ["涪城区", "游仙区", "江油市", "盐亭县", "三台县", "平武县", "安县", "梓潼县", "北川羌族自治县", "其他"] }, { "name": "广元", "area": ["元坝区", "朝天区", "青川县", "旺苍县", "剑阁县", "苍溪县", "市中区", "其他"] }, { "name": "遂宁", "area": ["船山区", "安居区", "射洪县", "蓬溪县", "大英县", "其他"] }, { "name": "内江", "area": ["市中区", "东兴区", "资中县", "隆昌县", "威远县", "其他"] }, { "name": "乐山", "area": ["市中区", "五通桥区", "沙湾区", "金口河区", "峨眉山市", "夹江县", "井研县", "犍为县", "沐川县", "马边彝族自治县", "峨边彝族自治县", "其他"] }, { "name": "南充", "area": ["顺庆区", "高坪区", "嘉陵区", "阆中市", "营山县", "蓬安县", "仪陇县", "南部县", "西充县", "其他"] }, { "name": "眉山", "area": ["东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县", "其他"] }, { "name": "宜宾", "area": ["翠屏区", "宜宾县", "兴文县", "南溪县", "珙县", "长宁县", "高县", "江安县", "筠连县", "屏山县", "其他"] }, { "name": "广安", "area": ["广安区", "华蓥市", "岳池县", "邻水县", "武胜县", "其他"] }, { "name": "达州", "area": ["通川区", "万源市", "达县", "渠县", "宣汉县", "开江县", "大竹县", "其他"] }, { "name": "雅安", "area": ["雨城区", "芦山县", "石棉县", "名山县", "天全县", "荥经县", "宝兴县", "汉源县", "其他"] }, { "name": "巴中", "area": ["巴州区", "南江县", "平昌县", "通江县", "其他"] }, { "name": "资阳", "area": ["雁江区", "简阳市", "安岳县", "乐至县", "其他"] }, { "name": "阿坝藏族羌族自治州", "area": ["马尔康县", "九寨沟县", "红原县", "汶川县", "阿坝县", "理县", "若尔盖县", "小金县", "黑水县", "金川县", "松潘县", "壤塘县", "茂县", "其他"] }, { "name": "甘孜藏族自治州", "area": ["康定县", "丹巴县", "炉霍县", "九龙县", "甘孜县", "雅江县", "新龙县", "道孚县", "白玉县", "理塘县", "德格县", "乡城县", "石渠县", "稻城县", "色达县", "巴塘县", "泸定县", "得荣县", "其他"] }, { "name": "凉山彝族自治州", "area": ["西昌市", "美姑县", "昭觉县", "金阳县", "甘洛县", "布拖县", "雷波县", "普格县", "宁南县", "喜德县", "会东县", "越西县", "会理县", "盐源县", "德昌县", "冕宁县", "木里藏族自治县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "贵州", "city": [{ "name": "贵阳", "area": ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "清镇市", "开阳县", "修文县", "息烽县", "其他"] }, { "name": "六盘水", "area": ["钟山区", "水城县", "盘县", "六枝特区", "其他"] }, { "name": "遵义", "area": ["红花岗区", "汇川区", "赤水市", "仁怀市", "遵义县", "绥阳县", "桐梓县", "习水县", "凤冈县", "正安县", "余庆县", "湄潭县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "其他"] }, { "name": "安顺", "area": ["西秀区", "普定县", "平坝县", "镇宁布依族苗族自治县", "紫云苗族布依族自治县", "关岭布依族苗族自治县", "其他"] }, { "name": "铜仁地区", "area": ["铜仁市", "德江县", "江口县", "思南县", "石阡县", "玉屏侗族自治县", "松桃苗族自治县", "印江土家族苗族自治县", "沿河土家族自治县", "万山特区", "其他"] }, { "name": "毕节地区", "area": ["毕节市", "黔西县", "大方县", "织金县", "金沙县", "赫章县", "纳雍县", "威宁彝族回族苗族自治县", "其他"] }, { "name": "黔西南布依族苗族自治州", "area": ["兴义市", "望谟县", "兴仁县", "普安县", "册亨县", "晴隆县", "贞丰县", "安龙县", "其他"] }, { "name": "黔东南苗族侗族自治州", "area": ["凯里市", "施秉县", "从江县", "锦屏县", "镇远县", "麻江县", "台江县", "天柱县", "黄平县", "榕江县", "剑河县", "三穗县", "雷山县", "黎平县", "岑巩县", "丹寨县", "其他"] }, { "name": "黔南布依族苗族自治州", "area": ["都匀市", "福泉市", "贵定县", "惠水县", "罗甸县", "瓮安县", "荔波县", "龙里县", "平塘县", "长顺县", "独山县", "三都水族自治县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "云南", "city": [{ "name": "昆明", "area": ["盘龙区", "五华区", "官渡区", "西山区", "东川区", "安宁市", "呈贡县", "晋宁县", "富民县", "宜良县", "嵩明县", "石林彝族自治县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "其他"] }, { "name": "曲靖", "area": ["麒麟区", "宣威市", "马龙县", "沾益县", "富源县", "罗平县", "师宗县", "陆良县", "会泽县", "其他"] }, { "name": "玉溪", "area": ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县", "其他"] }, { "name": "保山", "area": ["隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县", "其他"] }, { "name": "昭通", "area": ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县", "其他"] }, { "name": "丽江", "area": ["古城区", "永胜县", "华坪县", "玉龙纳西族自治县", "宁蒗彝族自治县", "其他"] }, { "name": "普洱", "area": ["思茅区", "普洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县", "其他"] }, { "name": "临沧", "area": ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县", "其他"] }, { "name": "德宏傣族景颇族自治州", "area": ["潞西市", "瑞丽市", "梁河县", "盈江县", "陇川县", "其他"] }, { "name": "怒江傈僳族自治州", "area": ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "其他"] }, { "name": "迪庆藏族自治州", "area": ["香格里拉县", "德钦县", "维西傈僳族自治县", "其他"] }, { "name": "大理白族自治州", "area": ["大理市", "祥云县", "宾川县", "弥渡县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "漾濞彝族自治县", "南涧彝族自治县", "巍山彝族回族自治县", "其他"] }, { "name": "楚雄彝族自治州", "area": ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其他"] }, { "name": "红河哈尼族彝族自治州", "area": ["蒙自县", "个旧市", "开远市", "绿春县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "河口瑶族自治县", "屏边苗族自治县", "其他"] }, { "name": "文山壮族苗族自治州", "area": ["文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其他"] }, { "name": "西双版纳傣族自治州", "area": ["景洪市", "勐海县", "勐腊县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "西藏", "city": [{ "name": "拉萨", "area": ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县", "其他"] }, { "name": "那曲地区", "area": ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "其他"] }, { "name": "昌都地区", "area": ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县", "其他"] }, { "name": "林芝地区", "area": ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县", "其他"] }, { "name": "山南地区", "area": ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县", "其他"] }, { "name": "日喀则地区", "area": ["日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县", "其他"] }, { "name": "阿里地区", "area": ["噶尔县", "普兰县", "札达县", "日土县", "革吉县", "改则县", "措勤县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "陕西", "city": [{ "name": "西安", "area": ["莲湖区", "新城区", "碑林区", "雁塔区", "灞桥区", "未央区", "阎良区", "临潼区", "长安区", "高陵县", "蓝田县", "户县", "周至县", "其他"] }, { "name": "铜川", "area": ["耀州区", "王益区", "印台区", "宜君县", "其他"] }, { "name": "宝鸡", "area": ["渭滨区", "金台区", "陈仓区", "岐山县", "凤翔县", "陇县", "太白县", "麟游县", "扶风县", "千阳县", "眉县", "凤县", "其他"] }, { "name": "咸阳", "area": ["秦都区", "渭城区", "杨陵区", "兴平市", "礼泉县", "泾阳县", "永寿县", "三原县", "彬县", "旬邑县", "长武县", "乾县", "武功县", "淳化县", "其他"] }, { "name": "渭南", "area": ["临渭区", "韩城市", "华阴市", "蒲城县", "潼关县", "白水县", "澄城县", "华县", "合阳县", "富平县", "大荔县", "其他"] }, { "name": "延安", "area": ["宝塔区", "安塞县", "洛川县", "子长县", "黄陵县", "延川县", "富县", "延长县", "甘泉县", "宜川县", "志丹县", "黄龙县", "吴起县", "其他"] }, { "name": "汉中", "area": ["汉台区", "留坝县", "镇巴县", "城固县", "南郑县", "洋县", "宁强县", "佛坪县", "勉县", "西乡县", "略阳县", "其他"] }, { "name": "榆林", "area": ["榆阳区", "清涧县", "绥德县", "神木县", "佳县", "府谷县", "子洲县", "靖边县", "横山县", "米脂县", "吴堡县", "定边县", "其他"] }, { "name": "安康", "area": ["汉滨区", "紫阳县", "岚皋县", "旬阳县", "镇坪县", "平利县", "石泉县", "宁陕县", "白河县", "汉阴县", "其他"] }, { "name": "商洛", "area": ["商州区", "镇安县", "山阳县", "洛南县", "商南县", "丹凤县", "柞水县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "甘肃", "city": [{ "name": "兰州", "area": ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "其他"] }, { "name": "嘉峪关", "area": ["嘉峪关市", "其他"] }, { "name": "金昌", "area": ["金川区", "永昌县", "其他"] }, { "name": "白银", "area": ["白银区", "平川区", "靖远县", "会宁县", "景泰县", "其他"] }, { "name": "天水", "area": ["清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县", "北道区", "秦城区", "其他"] }, { "name": "武威", "area": ["凉州区", "民勤县", "古浪县", "天祝藏族自治县", "其他"] }, { "name": "酒泉", "area": ["肃州区", "玉门市", "敦煌市", "金塔县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "安西县", "其他"] }, { "name": "张掖", "area": ["甘州区", "民乐县", "临泽县", "高台县", "山丹县", "肃南裕固族自治县", "其他"] }, { "name": "庆阳", "area": ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县", "其他"] }, { "name": "平凉", "area": ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县", "其他"] }, { "name": "定西", "area": ["安定区", "通渭县", "临洮县", "漳县", "岷县", "渭源县", "陇西县", "其他"] }, { "name": "陇南", "area": ["武都区", "成县", "宕昌县", "康县", "文县", "西和县", "礼县", "两当县", "徽县", "其他"] }, { "name": "临夏回族自治州", "area": ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县", "其他"] }, { "name": "甘南藏族自治州", "area": ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "青海", "city": [{ "name": "西宁", "area": ["城中区", "城东区", "城西区", "城北区", "湟源县", "湟中县", "大通回族土族自治县", "其他"] }, { "name": "海东地区", "area": ["平安县", "乐都县", "民和回族土族自治县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县", "其他"] }, { "name": "海北藏族自治州", "area": ["海晏县", "祁连县", "刚察县", "门源回族自治县", "其他"] }, { "name": "海南藏族自治州", "area": ["共和县", "同德县", "贵德县", "兴海县", "贵南县", "其他"] }, { "name": "黄南藏族自治州", "area": ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县", "其他"] }, { "name": "果洛藏族自治州", "area": ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县", "其他"] }, { "name": "玉树藏族自治州", "area": ["玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县", "其他"] }, { "name": "海西蒙古族藏族自治州", "area": ["德令哈市", "格尔木市", "乌兰县", "都兰县", "天峻县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "宁夏", "city": [{ "name": "银川", "area": ["兴庆区", "西夏区", "金凤区", "灵武市", "永宁县", "贺兰县", "其他"] }, { "name": "石嘴山", "area": ["大武口区", "惠农区", "平罗县", "其他"] }, { "name": "吴忠", "area": ["利通区", "青铜峡市", "盐池县", "同心县", "其他"] }, { "name": "固原", "area": ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县", "其他"] }, { "name": "中卫", "area": ["沙坡头区", "中宁县", "海原县", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "新疆", "city": [{ "name": "乌鲁木齐", "area": ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "东山区", "乌鲁木齐县", "其他"] }, { "name": "克拉玛依", "area": ["克拉玛依区", "独山子区", "白碱滩区", "乌尔禾区", "其他"] }, { "name": "吐鲁番地区", "area": ["吐鲁番市", "托克逊县", "鄯善县", "其他"] }, { "name": "哈密地区", "area": ["哈密市", "伊吾县", "巴里坤哈萨克自治县", "其他"] }, { "name": "和田地区", "area": ["和田市", "和田县", "洛浦县", "民丰县", "皮山县", "策勒县", "于田县", "墨玉县", "其他"] }, { "name": "阿克苏地区", "area": ["阿克苏市", "温宿县", "沙雅县", "拜城县", "阿瓦提县", "库车县", "柯坪县", "新和县", "乌什县", "其他"] }, { "name": "喀什地区", "area": ["喀什市", "巴楚县", "泽普县", "伽师县", "叶城县", "岳普湖县", "疏勒县", "麦盖提县", "英吉沙县", "莎车县", "疏附县", "塔什库尔干塔吉克自治县", "其他"] }, { "name": "克孜勒苏柯尔克孜自治州", "area": ["阿图什市", "阿合奇县", "乌恰县", "阿克陶县", "其他"] }, { "name": "巴音郭楞蒙古自治州", "area": ["库尔勒市", "和静县", "尉犁县", "和硕县", "且末县", "博湖县", "轮台县", "若羌县", "焉耆回族自治县", "其他"] }, { "name": "昌吉回族自治州", "area": ["昌吉市", "阜康市", "奇台县", "玛纳斯县", "吉木萨尔县", "呼图壁县", "木垒哈萨克自治县", "米泉市", "其他"] }, { "name": "博尔塔拉蒙古自治州", "area": ["博乐市", "精河县", "温泉县", "其他"] }, { "name": "石河子", "area": ["石河子"] }, { "name": "阿拉尔", "area": ["阿拉尔"] }, { "name": "图木舒克", "area": ["图木舒克"] }, { "name": "五家渠", "area": ["五家渠"] }, { "name": "伊犁哈萨克自治州", "area": ["伊宁市", "奎屯市", "伊宁县", "特克斯县", "尼勒克县", "昭苏县", "新源县", "霍城县", "巩留县", "察布查尔锡伯自治县", "塔城地区", "阿勒泰地区", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "台湾", "city": [{ "name": "台湾", "area": ["台北市", "高雄市", "台北县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "基隆市", "新竹市", "台中市", "嘉义市", "台南市", "其他"] }, { "name": "其他", "area": ["其他"] }] }, { "name": "澳门", "city": [{ "name": "澳门", "area": ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路凼", "其他"] }] }, { "name": "香港", "city": [{ "name": "香港", "area": ["中西区", "湾仔区", "东区", "南区", "深水埗区", "油尖旺区", "九龙城区", "黄大仙区", "观塘区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区", "其他"] }] }];
	var propTypes = {
	    defaultValue: _propTypes2['default'].object, //{ province:'北京',city:'北京',area:'东城区'}
	    value: _propTypes2['default'].object, //{ province:'北京',city:'北京',area:'东城区'}
	    onChange: _propTypes2['default'].func
	};
	var defaultProps = {
	    defaultValue: { province: '北京', city: '北京', area: '东城区' },
	    value: null,
	    onChange: function onChange() {}
	};
	
	var CitySelect = function (_Component) {
	    _inherits(CitySelect, _Component);
	
	    function CitySelect() {
	        _classCallCheck(this, CitySelect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	        _this.getIndex = function (type, name, provinceIndex) {
	            var provinceI = provinceIndex || _this.state.provinceIndex;
	            switch (type) {
	                case 'province':
	                    return (0, _lodash2['default'])(provinceData, function (province) {
	                        return province.name == name;
	                    });
	                    break;
	                case 'city':
	                    return (0, _lodash2['default'])(provinceData[provinceI].city, function (city) {
	                        return city.name == name;
	                    });
	                    break;
	            }
	        };
	
	        _this.handleProvinceChange = function (value) {
	            var index = _this.getIndex('province', value);
	            var city = provinceData[index].city[0].name;
	            var area = provinceData[index].city[0].area[0];
	            _this.setState({
	                province: value,
	                cities: provinceData[index].city,
	                secondCity: city,
	                provinceIndex: index,
	                areas: provinceData[index].city[0].area,
	                secondArea: area
	            });
	            _this.onChange(value, city, area);
	        };
	
	        _this.handleCityChange = function (value) {
	            var index = _this.getIndex('city', value);
	            var provinceIndex = _this.state.provinceIndex;
	            var area = provinceData[provinceIndex].city[index].area[0];
	            _this.setState({
	                secondCity: provinceData[provinceIndex].city[index].name,
	                areas: provinceData[provinceIndex].city[index].area,
	                secondArea: area,
	                cityIndex: value
	            });
	            _this.onChange(undefined, value, area);
	        };
	
	        _this.onSecondAreaChange = function (value) {
	            _this.setState({
	                secondArea: value
	            });
	            _this.onChange(undefined, undefined, value);
	        };
	
	        _this.onChange = function (province, city, area) {
	            _this.props.onChange({
	                province: province || _this.state.province,
	                city: city || _this.state.secondCity,
	                area: area
	            });
	        };
	
	        _this.state = {
	            province: '北京',
	            provinceIndex: 0,
	            cityIndex: 0,
	            cities: provinceData[0].city,
	            secondCity: provinceData[0].city[0].name,
	            areas: provinceData[0].city[0].area,
	            secondArea: provinceData[0].city[0].area[0]
	        };
	        return _this;
	    }
	
	    CitySelect.prototype.componentDidMount = function componentDidMount() {
	        var _props = this.props,
	            _defaultValue = _props.defaultValue,
	            value = _props.value;
	
	        var defaultValue = value ? value : _defaultValue;
	        var province = defaultValue.province;
	        var provinceIndex = this.getIndex('province', defaultValue.province);
	        var cityIndex = this.getIndex('city', defaultValue.city, provinceIndex);
	        var cities = provinceData[provinceIndex].city;
	        var secondCity = defaultValue.city;
	        var areas = cities[cityIndex].area;
	        var secondArea = defaultValue.area;
	        this.setState({
	            province: province,
	            provinceIndex: provinceIndex,
	            cityIndex: cityIndex,
	            cities: cities,
	            secondCity: secondCity,
	            areas: areas,
	            secondArea: secondArea
	        });
	    };
	
	    CitySelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _nextProps$value = nextProps.value,
	            province = _nextProps$value.province,
	            city = _nextProps$value.city,
	            area = _nextProps$value.area;
	
	        this.setState({
	            province: province,
	            secondCity: city,
	            secondArea: area
	        });
	        this.handleProvinceChange(province);
	    };
	
	    CitySelect.prototype.render = function render() {
	        var provinceOptions = provinceData.map(function (province, index) {
	            return _react2['default'].createElement(
	                Option,
	                { key: province.name },
	                province.name
	            );
	        });
	        var cityOptions = this.state.cities.map(function (city, index) {
	            return _react2['default'].createElement(
	                Option,
	                { key: city.name },
	                city.name
	            );
	        });
	        var areaOptions = this.state.areas.map(function (area, index) {
	            return _react2['default'].createElement(
	                Option,
	                { key: area },
	                area
	            );
	        });
	        return _react2['default'].createElement(
	            'div',
	            { className: (0, _classnames2['default'])("u-city-select", this.props.className) },
	            _react2['default'].createElement(
	                _beeSelect2['default'],
	                {
	                    value: this.state.province,
	                    className: 'province',
	                    onChange: this.handleProvinceChange },
	                provinceOptions
	            ),
	            _react2['default'].createElement(
	                _beeSelect2['default'],
	                {
	                    value: this.state.secondCity,
	                    className: 'city',
	                    onChange: this.handleCityChange },
	                cityOptions
	            ),
	            _react2['default'].createElement(
	                _beeSelect2['default'],
	                {
	                    value: this.state.secondArea,
	                    className: 'area',
	                    onChange: this.onSecondAreaChange },
	                areaOptions
	            )
	        );
	    };
	
	    return CitySelect;
	}(_react.Component);
	
	CitySelect.propTypes = propTypes;
	CitySelect.defaultProps = defaultProps;
	exports['default'] = CitySelect;
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(67);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Select2["default"];
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _RcSelect = __webpack_require__(68);
	
	var _RcSelect2 = _interopRequireDefault(_RcSelect);
	
	var _Option = __webpack_require__(103);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _OptGroup = __webpack_require__(89);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var SelectContext = {
	  antLocale: {
	    Select: _propTypes2["default"].any
	  }
	};
	
	var defaultProps = {
	  clsPrefix: "u-select",
	  showSearch: false,
	  transitionName: "slide-up",
	  choiceTransitionName: "zoom"
	};
	
	var propTypes = {
	  clsPrefix: _propTypes2["default"].string,
	  className: _propTypes2["default"].string,
	  value: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].any]),
	  defaultValue: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].array, _propTypes2["default"].any]),
	  size: _propTypes2["default"].oneOf(["default", "lg", "sm"]),
	  combobox: _propTypes2["default"].bool,
	  notFoundContent: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].array, _propTypes2["default"].any]),
	  showSearch: _propTypes2["default"].bool,
	  transitionName: _propTypes2["default"].string,
	  choiceTransitionName: _propTypes2["default"].string,
	  multiple: _propTypes2["default"].bool,
	  allowClear: _propTypes2["default"].bool,
	  filterOption: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func]),
	  tags: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  onSearch: _propTypes2["default"].func,
	  placeholder: _propTypes2["default"].string,
	  dropdownMatchSelectWidth: _propTypes2["default"].bool,
	  optionFilterProp: _propTypes2["default"].string,
	  optionLabelProp: _propTypes2["default"].string,
	  disabled: _propTypes2["default"].bool,
	  defaultActiveFirstOption: _propTypes2["default"].bool,
	  labelInValue: _propTypes2["default"].bool,
	  getPopupContainer: _propTypes2["default"].func,
	  style: _propTypes2["default"].object,
	  dropdownStyle: _propTypes2["default"].object,
	  dropdownMenuStyle: _propTypes2["default"].object,
	  onChange: _propTypes2["default"].func,
	  scrollToEnd: _propTypes2["default"].func
	};
	
	var Select = function (_Component) {
	  _inherits(Select, _Component);
	
	  function Select(props) {
	    _classCallCheck(this, Select);
	
	    return _possibleConstructorReturn(this, _Component.call(this, props));
	  }
	
	  Select.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        _props$className = _props.className,
	        className = _props$className === undefined ? "" : _props$className,
	        size = _props.size,
	        combobox = _props.combobox,
	        showSearch = _props.showSearch,
	        data = _props.data;
	    var _props2 = this.props,
	        _props2$notFoundConte = _props2.notFoundContent,
	        notFoundContent = _props2$notFoundConte === undefined ? "Not Found" : _props2$notFoundConte,
	        optionLabelProp = _props2.optionLabelProp;
	
	
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix + "-lg", size === "lg"), _defineProperty(_classNames, clsPrefix + "-sm", size === "sm"), _defineProperty(_classNames, clsPrefix + "-show-search", showSearch), _classNames), className);
	
	    var antLocale = this.context.antLocale;
	
	    if (antLocale && antLocale.Select) {
	      notFoundContent = "notFoundContent" in this.props ? notFoundContent : antLocale.Select.notFoundContent;
	    }
	
	    if (combobox) {
	      notFoundContent = null;
	      // children 带 dom 结构时，无法填入输入框
	      optionLabelProp = optionLabelProp || "value";
	    }
	    if (data) {
	      data.map(function (item) {
	        return _react2["default"].createElement(
	          _Option2["default"],
	          { value: item.value },
	          item.key
	        );
	      });
	    }
	    return data ? _react2["default"].createElement(
	      _RcSelect2["default"],
	      _extends({}, this.props, {
	        className: cls,
	        optionLabelProp: optionLabelProp || "children",
	        notFoundContent: notFoundContent
	      }),
	      data.map(function (item) {
	        return _react2["default"].createElement(
	          _Option2["default"],
	          { key: item.value, value: item.value, disabled: item.disabled ? true : false },
	          item.key
	        );
	      })
	    ) : _react2["default"].createElement(_RcSelect2["default"], _extends({}, this.props, {
	      className: cls,
	      optionLabelProp: optionLabelProp || "children",
	      notFoundContent: notFoundContent
	    }));
	  };
	
	  return Select;
	}(_react.Component);
	
	Select.context = SelectContext;
	Select.propTypes = propTypes;
	Select.defaultProps = defaultProps;
	Select.Option = _Option2["default"];
	Select.OptGroup = _OptGroup2["default"];
	
	exports["default"] = Select;
	module.exports = exports["default"];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeMenus = __webpack_require__(69);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _OptGroup = __webpack_require__(89);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _componentClasses = __webpack_require__(46);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _util = __webpack_require__(90);
	
	var _SelectTrigger = __webpack_require__(91);
	
	var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	//import FilterMixin from './FilterMixin';
	
	function noop() {}
	
	function filterFn(input, child) {
	  return String((0, _util.getPropValue)(child, this.props.optionFilterProp)).indexOf(input) > -1;
	}
	
	function saveRef(name, component) {
	  this[name] = component;
	}
	
	var valueObjectShape = void 0;
	
	if (_propTypes2["default"]) {
	  valueObjectShape = _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].shape({
	    key: _propTypes2["default"].string,
	    label: _propTypes2["default"].node
	  })]);
	}
	
	var propTypes = {
	  defaultActiveFirstOption: _propTypes2["default"].bool,
	  multiple: _propTypes2["default"].bool,
	  filterOption: _propTypes2["default"].any,
	  children: _propTypes2["default"].any,
	  showSearch: _propTypes2["default"].bool,
	  disabled: _propTypes2["default"].bool,
	  allowClear: _propTypes2["default"].bool,
	  showArrow: _propTypes2["default"].bool,
	  tags: _propTypes2["default"].bool,
	  clsPrefix: _propTypes2["default"].string,
	  className: _propTypes2["default"].string,
	  transitionName: _propTypes2["default"].string,
	  optionLabelProp: _propTypes2["default"].string,
	  optionFilterProp: _propTypes2["default"].string,
	  animation: _propTypes2["default"].string,
	  choiceTransitionName: _propTypes2["default"].string,
	  onChange: _propTypes2["default"].func,
	  onBlur: _propTypes2["default"].func,
	  onFocus: _propTypes2["default"].func,
	  onSelect: _propTypes2["default"].func,
	  onSearch: _propTypes2["default"].func,
	  placeholder: _propTypes2["default"].any,
	  onDeselect: _propTypes2["default"].func,
	  labelInValue: _propTypes2["default"].bool,
	  value: _propTypes2["default"].oneOfType([valueObjectShape, _propTypes2["default"].arrayOf(valueObjectShape)]),
	  defaultValue: _propTypes2["default"].oneOfType([valueObjectShape, _propTypes2["default"].arrayOf(valueObjectShape)]),
	  dropdownStyle: _propTypes2["default"].object,
	  maxTagTextLength: _propTypes2["default"].number,
	  tokenSeparators: _propTypes2["default"].arrayOf(_propTypes2["default"].string)
	};
	
	var defaultProps = {
	  clsPrefix: 'rc-select',
	  filterOption: filterFn,
	  defaultOpen: false,
	  labelInValue: false,
	  defaultActiveFirstOption: true,
	  showSearch: true,
	  allowClear: false,
	  placeholder: '',
	  defaultValue: [],
	  onChange: noop,
	  onFocus: noop,
	  onBlur: noop,
	  onSelect: noop,
	  onSearch: noop,
	  onDeselect: noop,
	  showArrow: true,
	  dropdownMatchSelectWidth: true,
	  dropdownStyle: {},
	  dropdownMenuStyle: {},
	  optionFilterProp: 'value',
	  optionLabelProp: 'value',
	  notFoundContent: 'Not Found'
	};
	
	var RcSelect = function (_Component) {
	  _inherits(RcSelect, _Component);
	
	  //mixins: [FilterMixin],
	
	  function RcSelect(props) {
	    _classCallCheck(this, RcSelect);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    var value = [];
	    if ('value' in props) {
	      value = (0, _util.toArray)(props.value);
	    } else {
	      value = (0, _util.toArray)(props.defaultValue);
	    }
	    value = _this.addLabelToValue(props, value);
	    value = _this.addTitleToValue(props, value);
	    var inputValue = '';
	    if (props.combobox) {
	      inputValue = value.length ? String(value[0].key) : '';
	    }
	    _this.saveInputRef = saveRef.bind(_this, 'inputInstance');
	    _this.saveInputMirrorRef = saveRef.bind(_this, 'inputMirrorInstance');
	    var open = props.open;
	    if (open === undefined) {
	      open = props.defaultOpen;
	    }
	    _this.state = {
	      value: value,
	      inputValue: inputValue,
	      open: open
	    };
	
	    _this.filterOption = _this.filterOption.bind(_this);
	    _this.renderFilterOptions = _this.renderFilterOptions.bind(_this);
	    _this.renderFilterOptionsFromChildren = _this.renderFilterOptionsFromChildren.bind(_this);
	    _this.onInputChange = _this.onInputChange.bind(_this);
	    _this.onDropdownVisibleChange = _this.onDropdownVisibleChange.bind(_this);
	
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
	    _this.onMenuSelect = _this.onMenuSelect.bind(_this);
	    _this.onMenuDeselect = _this.onMenuDeselect.bind(_this);
	    _this.onArrowClick = _this.onArrowClick.bind(_this);
	
	    _this.onPlaceholderClick = _this.onPlaceholderClick.bind(_this);
	    _this.onOuterFocus = _this.onOuterFocus.bind(_this);
	    _this.onPopupFocus = _this.onPopupFocus.bind(_this);
	    _this.onOuterBlur = _this.onOuterBlur.bind(_this);
	    _this.onClearSelection = _this.onClearSelection.bind(_this);
	
	    _this.onChoiceAnimationLeave = _this.onChoiceAnimationLeave.bind(_this);
	    _this.getLabelBySingleValue = _this.getLabelBySingleValue.bind(_this);
	    _this.getValueByLabel = _this.getValueByLabel.bind(_this);
	    _this.getLabelFromOption = _this.getLabelFromOption.bind(_this);
	    _this.getLabelFromProps = _this.getLabelFromProps.bind(_this);
	
	    _this.getVLForOnChange = _this.getVLForOnChange.bind(_this);
	    _this.getLabelByValue = _this.getLabelByValue.bind(_this);
	    _this.getDropdownContainer = _this.getDropdownContainer.bind(_this);
	    _this.getPlaceholderElement = _this.getPlaceholderElement.bind(_this);
	    _this.getInputElement = _this.getInputElement.bind(_this);
	
	    _this.getInputDOMNode = _this.getInputDOMNode.bind(_this);
	    _this.getInputMirrorDOMNode = _this.getInputMirrorDOMNode.bind(_this);
	    _this.getPopupDOMNode = _this.getPopupDOMNode.bind(_this);
	    _this.getPopupMenuComponent = _this.getPopupMenuComponent.bind(_this);
	    _this.setOpenState = _this.setOpenState.bind(_this);
	
	    _this.setInputValue = _this.setInputValue.bind(_this);
	    _this.clearBlurTime = _this.clearBlurTime.bind(_this);
	    _this.clearAdjustTimer = _this.clearAdjustTimer.bind(_this);
	    _this.clearAdjustTimer = _this.clearAdjustTimer.bind(_this);
	    _this.updateFocusClassName = _this.updateFocusClassName.bind(_this);
	
	    _this.maybeFocus = _this.maybeFocus.bind(_this);
	    _this.addLabelToValue = _this.addLabelToValue.bind(_this);
	    _this.addTitleToValue = _this.addTitleToValue.bind(_this);
	    _this.removeSelected = _this.removeSelected.bind(_this);
	    _this.openIfHasChildren = _this.openIfHasChildren.bind(_this);
	
	    _this.fireChange = _this.fireChange.bind(_this);
	    _this.isChildDisabled = _this.isChildDisabled.bind(_this);
	    _this.tokenize = _this.tokenize.bind(_this);
	    _this.adjustOpenState = _this.adjustOpenState.bind(_this);
	    _this.renderTopControlNode = _this.renderTopControlNode.bind(_this);
	
	    return _this;
	  }
	
	  RcSelect.prototype.componentWillMount = function componentWillMount() {
	    this.adjustOpenState();
	  };
	
	  RcSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      var value = (0, _util.toArray)(nextProps.value);
	      value = this.addLabelToValue(nextProps, value);
	      value = this.addTitleToValue(nextProps, value);
	      this.setState({
	        value: value
	      });
	      if (nextProps.combobox) {
	        this.setState({
	          inputValue: value.length ? this.getLabelFromProps(nextProps, value[0].key) : ''
	        });
	      }
	    }
	  };
	
	  RcSelect.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
	    this.props = nextProps;
	    this.state = nextState;
	    this.adjustOpenState();
	  };
	
	  RcSelect.prototype.componentDidUpdate = function componentDidUpdate() {
	    var state = this.state,
	        props = this.props;
	
	    if (state.open && (0, _util.isMultipleOrTags)(props)) {
	      var inputNode = this.getInputDOMNode();
	      var mirrorNode = this.getInputMirrorDOMNode();
	      if (inputNode.value) {
	        inputNode.style.width = '';
	        inputNode.style.width = mirrorNode.clientWidth + 'px';
	      } else {
	        inputNode.style.width = '';
	      }
	    }
	  };
	
	  RcSelect.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearBlurTime();
	    this.clearAdjustTimer();
	    if (this.dropdownContainer) {
	      _reactDom2["default"].unmountComponentAtNode(this.dropdownContainer);
	      document.body.removeChild(this.dropdownContainer);
	      this.dropdownContainer = null;
	    }
	  };
	
	  RcSelect.prototype.filterOption = function filterOption(input, child) {
	    if (!input) {
	      return true;
	    }
	    var filterOption = this.props.filterOption;
	    if (!filterOption) {
	      return true;
	    }
	    if (child.props.disabled) {
	      return false;
	    }
	    return filterOption.call(this, input, child);
	  };
	
	  RcSelect.prototype.renderFilterOptions = function renderFilterOptions(inputValue) {
	    return this.renderFilterOptionsFromChildren(this.props.children, true, inputValue);
	  };
	
	  RcSelect.prototype.renderFilterOptionsFromChildren = function renderFilterOptionsFromChildren(children, showNotFound, iv) {
	    var _this2 = this;
	
	    var sel = [];
	    var props = this.props;
	    var inputValue = iv === undefined ? this.state.inputValue : iv;
	    var childrenKeys = [];
	    var tags = props.tags;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, false);
	        if (innerItems.length) {
	          var label = child.props.label;
	          var key = child.key;
	          if (!key && typeof label === 'string') {
	            key = label;
	          } else if (!label && key) {
	            label = key;
	          }
	          sel.push(_react2["default"].createElement(
	            _beeMenus.ItemGroup,
	            { key: key, title: label },
	            innerItems
	          ));
	        }
	        return;
	      }
	
	      // warning(
	      //   child.type === Option,
	      //   'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' +
	      //     `instead of \`${child.type.name || child.type.displayName || child.type}\`.`
	      // );
	
	      var childValue = (0, _util.getValuePropValue)(child);
	      if (_this2.filterOption(inputValue, child)) {
	        sel.push(_react2["default"].createElement(_beeMenus.Item, _extends({
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          value: childValue,
	          key: childValue
	        }, child.props)));
	      }
	      if (tags && !child.props.disabled) {
	        childrenKeys.push(childValue);
	      }
	    });
	    if (tags) {
	      // tags value must be string
	      var value = this.state.value || [];
	      value = value.filter(function (singleValue) {
	        return childrenKeys.indexOf(singleValue.key) === -1 && (!inputValue || String(singleValue.key).indexOf(String(inputValue)) > -1);
	      });
	      sel = sel.concat(value.map(function (singleValue) {
	        var key = singleValue.key;
	        return _react2["default"].createElement(
	          _beeMenus.Item,
	          {
	            style: _util.UNSELECTABLE_STYLE,
	            attribute: _util.UNSELECTABLE_ATTRIBUTE,
	            value: key,
	            key: key
	          },
	          key
	        );
	      }));
	      if (inputValue) {
	        var notFindInputItem = sel.every(function (option) {
	          return (0, _util.getValuePropValue)(option) !== inputValue;
	        });
	        if (notFindInputItem) {
	          sel.unshift(_react2["default"].createElement(
	            _beeMenus.Item,
	            {
	              style: _util.UNSELECTABLE_STYLE,
	              attribute: _util.UNSELECTABLE_ATTRIBUTE,
	              value: inputValue,
	              key: inputValue
	            },
	            inputValue
	          ));
	        }
	      }
	    }
	    if (!sel.length && showNotFound && props.notFoundContent) {
	      sel = [_react2["default"].createElement(
	        _beeMenus.Item,
	        {
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          disabled: true,
	          value: 'NOT_FOUND',
	          key: 'NOT_FOUND'
	        },
	        props.notFoundContent
	      )];
	    }
	    return sel;
	  };
	
	  RcSelect.prototype.onInputChange = function onInputChange(event) {
	    var tokenSeparators = this.props.tokenSeparators;
	
	    var val = event.target.value;
	    if ((0, _util.isMultipleOrTags)(this.props) && tokenSeparators && (0, _util.includesSeparators)(val, tokenSeparators)) {
	      var nextValue = this.tokenize(val);
	      this.fireChange(nextValue);
	      this.setOpenState(false, true);
	      this.setInputValue('', false);
	      return;
	    }
	    this.setInputValue(val);
	    this.setState({
	      open: true
	    });
	    if ((0, _util.isCombobox)(this.props)) {
	      this.fireChange([{
	        key: val
	      }]);
	    }
	  };
	
	  RcSelect.prototype.onDropdownVisibleChange = function onDropdownVisibleChange(open) {
	    this.setOpenState(open);
	  };
	
	  // combobox ignore
	
	
	  RcSelect.prototype.onKeyDown = function onKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var keyCode = event.keyCode;
	    if (this.state.open && !this.getInputDOMNode()) {
	      this.onInputKeyDown(event);
	    } else if (keyCode === _tinperBeeCore.KeyCode.ENTER || keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      this.setOpenState(true);
	      event.preventDefault();
	    }
	  };
	
	  RcSelect.prototype.onInputKeyDown = function onInputKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var state = this.state;
	    var keyCode = event.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _tinperBeeCore.KeyCode.BACKSPACE) {
	      event.preventDefault();
	      var value = state.value;
	
	      if (value.length) {
	        this.removeSelected(value[value.length - 1].key);
	      }
	      return;
	    }
	    if (keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      if (!state.open) {
	        this.openIfHasChildren();
	        event.preventDefault();
	        event.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _tinperBeeCore.KeyCode.ESC) {
	      if (state.open) {
	        this.setOpenState(false);
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return;
	    }
	
	    if (state.open) {
	      var menu = this.refs.trigger.getInnerMenu();
	
	      if (menu && menu.rcMenu.onKeyDown(event)) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    }
	  };
	
	  RcSelect.prototype.onMenuSelect = function onMenuSelect(_ref) {
	    var _this3 = this;
	
	    var item = _ref.item;
	
	    var value = this.state.value;
	    var props = this.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var selectedLabel = this.getLabelFromOption(item);
	    var event = selectedValue;
	    if (props.labelInValue) {
	      event = {
	        key: event,
	        label: selectedLabel
	      };
	    }
	    props.onSelect(event, item);
	    var selectedTitle = item.props.title;
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if ((0, _util.findIndexInValueByKey)(value, selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([{
	        key: selectedValue,
	        label: selectedLabel,
	        title: selectedTitle
	      }]);
	    } else {
	      if ((0, _util.isCombobox)(props)) {
	        this.skipAdjustOpen = true;
	        this.clearAdjustTimer();
	        this.skipAdjustOpenTimer = setTimeout(function () {
	          _this3.skipAdjustOpen = false;
	        }, 0);
	      }
	      if (value.length && value[0].key === selectedValue) {
	        this.setOpenState(false, true);
	        return;
	      }
	      value = [{
	        key: selectedValue,
	        label: selectedLabel,
	        title: selectedTitle
	      }];
	      this.setOpenState(false, true);
	    }
	    this.fireChange(value);
	    var inputValue = void 0;
	    if ((0, _util.isCombobox)(props)) {
	      inputValue = (0, _util.getPropValue)(item, props.optionLabelProp);
	    } else {
	      inputValue = '';
	    }
	    this.setInputValue(inputValue, false);
	  };
	
	  RcSelect.prototype.onMenuDeselect = function onMenuDeselect(_ref2) {
	    var item = _ref2.item,
	        domEvent = _ref2.domEvent;
	
	    if (domEvent.type === 'click') {
	      this.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    this.setInputValue('', false);
	  };
	
	  RcSelect.prototype.onArrowClick = function onArrowClick(e) {
	    e.stopPropagation();
	    if (!this.props.disabled) {
	      this.setOpenState(!this.state.open, true);
	    }
	  };
	
	  RcSelect.prototype.onPlaceholderClick = function onPlaceholderClick() {
	    if (this.getInputDOMNode()) {
	      this.getInputDOMNode().focus();
	    }
	  };
	
	  RcSelect.prototype.onOuterFocus = function onOuterFocus() {
	    this.clearBlurTime();
	    this._focused = true;
	    this.updateFocusClassName();
	    this.props.onFocus();
	  };
	
	  RcSelect.prototype.onPopupFocus = function onPopupFocus() {
	    // fix ie scrollbar, focus element again
	    this.maybeFocus(true, true);
	  };
	
	  RcSelect.prototype.onOuterBlur = function onOuterBlur() {
	    var _this4 = this;
	
	    this.blurTimer = setTimeout(function () {
	      _this4._focused = false;
	      _this4.updateFocusClassName();
	      var props = _this4.props;
	      var value = _this4.state.value;
	      var inputValue = _this4.state.inputValue;
	
	      if ((0, _util.isSingleMode)(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
	        var options = _this4._options || [];
	        if (options.length) {
	          var firstOption = (0, _util.findFirstMenuItem)(options);
	          if (firstOption) {
	            value = [{
	              key: firstOption.key,
	              label: _this4.getLabelFromOption(firstOption)
	            }];
	            _this4.fireChange(value);
	          }
	        }
	      } else if ((0, _util.isMultipleOrTags)(props) && inputValue) {
	        // why not use setState?
	        _this4.state.inputValue = _this4.getInputDOMNode().value = '';
	      }
	      props.onBlur(_this4.getVLForOnChange(value));
	    }, 10);
	  };
	
	  RcSelect.prototype.onClearSelection = function onClearSelection(event) {
	    var props = this.props;
	    var state = this.state;
	    if (props.disabled) {
	      return;
	    }
	    var inputValue = state.inputValue,
	        value = state.value;
	
	    event.stopPropagation();
	    if (inputValue || value.length) {
	      if (value.length) {
	        this.fireChange([]);
	      }
	      this.setOpenState(false, true);
	      if (inputValue) {
	        this.setInputValue('');
	      }
	    }
	  };
	
	  RcSelect.prototype.onChoiceAnimationLeave = function onChoiceAnimationLeave() {
	    this.refs.trigger.refs.trigger.forcePopupAlign();
	  };
	
	  RcSelect.prototype.getLabelBySingleValue = function getLabelBySingleValue(children, value) {
	    var _this5 = this;
	
	    if (value === undefined) {
	      return null;
	    }
	    var label = null;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        var maybe = _this5.getLabelBySingleValue(child.props.children, value);
	        if (maybe !== null) {
	          label = maybe;
	        }
	      } else if ((0, _util.getValuePropValue)(child) === value) {
	        label = _this5.getLabelFromOption(child);
	      }
	    });
	    return label;
	  };
	
	  RcSelect.prototype.getValueByLabel = function getValueByLabel(children, label) {
	    var _this6 = this;
	
	    if (label === undefined) {
	      return null;
	    }
	    var value = null;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        var maybe = _this6.getValueByLabel(child.props.children, label);
	        if (maybe !== null) {
	          value = maybe;
	        }
	      } else if ((0, _util.toArray)(_this6.getLabelFromOption(child)).join('') === label) {
	        value = (0, _util.getValuePropValue)(child);
	      }
	    });
	    return value;
	  };
	
	  RcSelect.prototype.getLabelFromOption = function getLabelFromOption(child) {
	    return (0, _util.getPropValue)(child, this.props.optionLabelProp);
	  };
	
	  RcSelect.prototype.getLabelFromProps = function getLabelFromProps(props, value) {
	    return this.getLabelByValue(props.children, value);
	  };
	
	  RcSelect.prototype.getVLForOnChange = function getVLForOnChange(vls_) {
	    var vls = vls_;
	    if (vls !== undefined) {
	      if (!this.props.labelInValue) {
	        vls = vls.map(function (v) {
	          return v.key;
	        });
	      } else {
	        vls = vls.map(function (vl) {
	          return { key: vl.key, label: vl.label };
	        });
	      }
	      return (0, _util.isMultipleOrTags)(this.props) ? vls : vls[0];
	    }
	    return vls;
	  };
	
	  RcSelect.prototype.getLabelByValue = function getLabelByValue(children, value) {
	    var label = this.getLabelBySingleValue(children, value);
	    if (label === null) {
	      return value;
	    }
	    return label;
	  };
	
	  RcSelect.prototype.getDropdownContainer = function getDropdownContainer() {
	    if (!this.dropdownContainer) {
	      this.dropdownContainer = document.createElement('div');
	      document.body.appendChild(this.dropdownContainer);
	    }
	    return this.dropdownContainer;
	  };
	
	  RcSelect.prototype.getPlaceholderElement = function getPlaceholderElement() {
	    var props = this.props,
	        state = this.state;
	
	    var hidden = false;
	    if (state.inputValue) {
	      hidden = true;
	    }
	    if (state.value.length) {
	      hidden = true;
	    }
	    if ((0, _util.isCombobox)(props) && state.value.length === 1 && !state.value[0].key) {
	      hidden = false;
	    }
	    var placeholder = props.placeholder;
	    if (placeholder) {
	      return _react2["default"].createElement(
	        'div',
	        _extends({
	          onMouseDown: _util.preventDefaultEvent,
	          style: _extends({
	            display: hidden ? 'none' : 'block'
	          }, _util.UNSELECTABLE_STYLE)
	        }, _util.UNSELECTABLE_ATTRIBUTE, {
	          onClick: this.onPlaceholderClick,
	          className: props.clsPrefix + '-selection-placeholder'
	        }),
	        placeholder
	      );
	    }
	    return null;
	  };
	
	  RcSelect.prototype.getInputElement = function getInputElement() {
	    var props = this.props;
	    return _react2["default"].createElement(
	      'div',
	      { className: props.clsPrefix + '-search-field-wrap' },
	      _react2["default"].createElement('input', {
	        ref: this.saveInputRef,
	        onChange: this.onInputChange,
	        onKeyDown: this.onInputKeyDown,
	        value: this.state.inputValue,
	        disabled: props.disabled,
	        className: props.clsPrefix + '-search-field'
	      }),
	      _react2["default"].createElement(
	        'span',
	        {
	          ref: this.saveInputMirrorRef,
	          className: props.clsPrefix + '-search-field-mirror'
	        },
	        this.state.inputValue
	      )
	    );
	  };
	
	  RcSelect.prototype.getInputDOMNode = function getInputDOMNode() {
	    return this.inputInstance;
	  };
	
	  RcSelect.prototype.getInputMirrorDOMNode = function getInputMirrorDOMNode() {
	    return this.inputMirrorInstance;
	  };
	
	  RcSelect.prototype.getPopupDOMNode = function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDOMNode();
	  };
	
	  RcSelect.prototype.getPopupMenuComponent = function getPopupMenuComponent() {
	    return this.refs.trigger.getInnerMenu();
	  };
	
	  RcSelect.prototype.setOpenState = function setOpenState(open, needFocus) {
	    var _this7 = this;
	
	    var props = this.props,
	        state = this.state;
	
	    if (state.open === open) {
	      this.maybeFocus(open, needFocus);
	      return;
	    }
	    var nextState = {
	      open: open
	    };
	    // clear search input value when open is false in singleMode.
	    if (!open && (0, _util.isSingleMode)(props) && props.showSearch) {
	      this.setInputValue('');
	    }
	    if (!open) {
	      this.maybeFocus(open, needFocus);
	    }
	    this.setState(nextState, function () {
	      if (open) {
	        _this7.maybeFocus(open, needFocus);
	      }
	    });
	  };
	
	  RcSelect.prototype.setInputValue = function setInputValue(inputValue) {
	    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    this.setState({
	      inputValue: inputValue
	    });
	    if (fireSearch) {
	      this.props.onSearch(inputValue);
	    }
	  };
	
	  RcSelect.prototype.clearBlurTime = function clearBlurTime() {
	    if (this.blurTimer) {
	      clearTimeout(this.blurTimer);
	      this.blurTimer = null;
	    }
	  };
	
	  RcSelect.prototype.clearAdjustTimer = function clearAdjustTimer() {
	    if (this.skipAdjustOpenTimer) {
	      clearTimeout(this.skipAdjustOpenTimer);
	      this.skipAdjustOpenTimer = null;
	    }
	  };
	
	  RcSelect.prototype.updateFocusClassName = function updateFocusClassName() {
	    var refs = this.refs,
	        props = this.props;
	
	
	    if (this._focused) {
	      (0, _componentClasses2["default"])(refs.root).add(props.clsPrefix + '-focused');
	    } else {
	      (0, _componentClasses2["default"])(refs.root).remove(props.clsPrefix + '-focused');
	    }
	  };
	
	  RcSelect.prototype.maybeFocus = function maybeFocus(open, needFocus) {
	    if (needFocus || open) {
	      var input = this.getInputDOMNode();
	      var _document = document,
	          activeElement = _document.activeElement;
	
	      if (input && (open || (0, _util.isMultipleOrTagsOrCombobox)(this.props))) {
	        if (activeElement !== input) {
	          input.focus();
	        }
	      } else {
	        var selection = this.refs.selection;
	        if (activeElement !== selection) {
	          selection.focus();
	        }
	      }
	    }
	  };
	
	  RcSelect.prototype.addLabelToValue = function addLabelToValue(props, value_) {
	    var _this8 = this;
	
	    var value = value_;
	    if (props.labelInValue) {
	      value.forEach(function (v) {
	        v.label = v.label || _this8.getLabelFromProps(props, v.key);
	      });
	    } else {
	      value = value.map(function (v) {
	        return {
	          key: v,
	          label: _this8.getLabelFromProps(props, v)
	        };
	      });
	    }
	    return value;
	  };
	
	  RcSelect.prototype.addTitleToValue = function addTitleToValue(props, values) {
	    var _this9 = this;
	
	    var nextValues = values;
	    var keys = values.map(function (v) {
	      return v.key;
	    });
	    _react2["default"].Children.forEach(props.children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        nextValues = _this9.addTitleToValue(child.props, nextValues);
	      } else {
	        var value = (0, _util.getValuePropValue)(child);
	        var valueIndex = keys.indexOf(value);
	        if (valueIndex > -1) {
	          nextValues[valueIndex].title = child.props.title;
	        }
	      }
	    });
	    return nextValues;
	  };
	
	  RcSelect.prototype.removeSelected = function removeSelected(selectedKey) {
	    var props = this.props;
	    if (props.disabled || this.isChildDisabled(selectedKey)) {
	      return;
	    }
	    var label = void 0;
	    var value = this.state.value.filter(function (singleValue) {
	      if (singleValue.key === selectedKey) {
	        label = singleValue.label;
	      }
	      return singleValue.key !== selectedKey;
	    });
	    var canMultiple = (0, _util.isMultipleOrTags)(props);
	
	    if (canMultiple) {
	      var event = selectedKey;
	      if (props.labelInValue) {
	        event = {
	          key: selectedKey,
	          label: label
	        };
	      }
	      props.onDeselect(event);
	    }
	    this.fireChange(value);
	  };
	
	  RcSelect.prototype.openIfHasChildren = function openIfHasChildren() {
	    var props = this.props;
	    if (_react2["default"].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      this.setOpenState(true);
	    }
	  };
	
	  RcSelect.prototype.fireChange = function fireChange(value) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value
	      });
	    }
	    props.onChange(this.getVLForOnChange(value));
	  };
	
	  RcSelect.prototype.isChildDisabled = function isChildDisabled(key) {
	    return (0, _util.toArray)(this.props.children).some(function (child) {
	      var childValue = (0, _util.getValuePropValue)(child);
	      return childValue === key && child.props && child.props.disabled;
	    });
	  };
	
	  RcSelect.prototype.tokenize = function tokenize(string) {
	    var _this10 = this;
	
	    var _props = this.props,
	        multiple = _props.multiple,
	        tokenSeparators = _props.tokenSeparators,
	        children = _props.children;
	
	    var nextValue = this.state.value;
	    (0, _util.splitBySeparators)(string, tokenSeparators).forEach(function (label) {
	      var selectedValue = { key: label, label: label };
	      if ((0, _util.findIndexInValueByLabel)(nextValue, label) === -1) {
	        if (multiple) {
	          var value = _this10.getValueByLabel(children, label);
	          if (value) {
	            selectedValue.key = value;
	            nextValue = nextValue.concat(selectedValue);
	          }
	        } else {
	          nextValue = nextValue.concat(selectedValue);
	        }
	      }
	    });
	    return nextValue;
	  };
	
	  RcSelect.prototype.adjustOpenState = function adjustOpenState() {
	    if (this.skipAdjustOpen) {
	      return;
	    }
	    var open = this.state.open;
	
	    if (typeof document !== 'undefined' && this.getInputDOMNode() && document.activeElement === this.getInputDOMNode()) {
	      open = true;
	    }
	    var options = [];
	    if (open) {
	      options = this.renderFilterOptions();
	    }
	    this._options = options;
	    if (open && ((0, _util.isMultipleOrTagsOrCombobox)(this.props) || !this.props.showSearch) && !options.length) {
	      open = false;
	    }
	    this.state.open = open;
	  };
	
	  RcSelect.prototype.renderTopControlNode = function renderTopControlNode() {
	    var _this11 = this;
	
	    var _state = this.state,
	        value = _state.value,
	        open = _state.open,
	        inputValue = _state.inputValue;
	
	    var props = this.props;
	    var choiceTransitionName = props.choiceTransitionName,
	        clsPrefix = props.clsPrefix,
	        maxTagTextLength = props.maxTagTextLength,
	        showSearch = props.showSearch;
	
	    var className = clsPrefix + '-selection-rendered';
	    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
	    var innerNode = null;
	    if ((0, _util.isSingleMode)(props)) {
	      var selectedValue = null;
	      if (value.length) {
	        var showSelectedValue = false;
	        var opacity = 1;
	        if (!showSearch) {
	          showSelectedValue = true;
	        } else {
	          if (open) {
	            showSelectedValue = !inputValue;
	            if (showSelectedValue) {
	              opacity = 0.4;
	            }
	          } else {
	            showSelectedValue = true;
	          }
	        }
	        var singleValue = value[0];
	        selectedValue = _react2["default"].createElement(
	          'div',
	          {
	            key: 'value',
	            className: clsPrefix + '-selection-selected-value',
	            title: singleValue.title || singleValue.label,
	            style: {
	              display: showSelectedValue ? 'block' : 'none',
	              opacity: opacity
	            }
	          },
	          value[0].label
	        );
	      }
	      if (!showSearch) {
	        innerNode = [selectedValue];
	      } else {
	        innerNode = [selectedValue, _react2["default"].createElement(
	          'div',
	          {
	            className: clsPrefix + '-search ' + clsPrefix + '-search--inline',
	            key: 'input',
	            style: {
	              display: open ? 'block' : 'none'
	            }
	          },
	          this.getInputElement()
	        )];
	      }
	    } else {
	      var selectedValueNodes = [];
	      if ((0, _util.isMultipleOrTags)(props)) {
	        selectedValueNodes = value.map(function (singleValue) {
	          var content = singleValue.label;
	          var title = singleValue.title || content;
	          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	            content = content.slice(0, maxTagTextLength) + '...';
	          }
	          var disabled = _this11.isChildDisabled(singleValue.key);
	          var choiceClassName = disabled ? clsPrefix + '-selection-choice ' + clsPrefix + '-selection-choice-disabled' : clsPrefix + '-selection-choice';
	          return _react2["default"].createElement(
	            'li',
	            _extends({
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onMouseDown: _util.preventDefaultEvent,
	              className: choiceClassName,
	              key: singleValue.key,
	              title: title
	            }),
	            _react2["default"].createElement(
	              'div',
	              { className: clsPrefix + '-selection-choice-content' },
	              content
	            ),
	            disabled ? null : _react2["default"].createElement('span', {
	              className: clsPrefix + '-selection-choice-remove',
	              onClick: _this11.removeSelected.bind(_this11, singleValue.key)
	            })
	          );
	        });
	      }
	      selectedValueNodes.push(_react2["default"].createElement(
	        'li',
	        {
	          className: clsPrefix + '-search ' + clsPrefix + '-search--inline',
	          key: '__input'
	        },
	        this.getInputElement()
	      ));
	
	      innerNode = _react2["default"].createElement(
	        'ul',
	        null,
	        selectedValueNodes
	      );
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: className },
	      this.getPlaceholderElement(),
	      innerNode
	    );
	  };
	
	  RcSelect.prototype.render = function render() {
	    var _rootCls;
	
	    var props = this.props;
	    var multiple = (0, _util.isMultipleOrTags)(props);
	    var state = this.state;
	    var className = props.className,
	        disabled = props.disabled,
	        allowClear = props.allowClear,
	        clsPrefix = props.clsPrefix;
	
	    var ctrlNode = this.renderTopControlNode();
	    var extraSelectionProps = {};
	    var open = this.state.open;
	
	    var options = this._options;
	    if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
	      extraSelectionProps = {
	        onKeyDown: this.onKeyDown,
	        tabIndex: 0
	      };
	    }
	    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, clsPrefix, 1), _defineProperty(_rootCls, clsPrefix + '-open', open), _defineProperty(_rootCls, clsPrefix + '-focused', open || !!this._focused), _defineProperty(_rootCls, clsPrefix + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, clsPrefix + '-disabled', disabled), _defineProperty(_rootCls, clsPrefix + '-enabled', !disabled), _defineProperty(_rootCls, clsPrefix + '-allow-clear', !!props.allowClear), _rootCls);
	    var clearStyle = _extends({}, _util.UNSELECTABLE_STYLE, {
	      display: 'none'
	    });
	    if (state.inputValue || state.value.length) {
	      clearStyle.display = 'block';
	    }
	    var clear = _react2["default"].createElement('span', _extends({
	      key: 'clear',
	      onMouseDown: _util.preventDefaultEvent,
	      style: clearStyle
	    }, _util.UNSELECTABLE_ATTRIBUTE, {
	      className: clsPrefix + '-selection-clear',
	      onClick: this.onClearSelection
	    }));
	    return _react2["default"].createElement(
	      _SelectTrigger2["default"],
	      {
	        onPopupFocus: this.onPopupFocus,
	        dropdownAlign: props.dropdownAlign,
	        dropdownClassName: props.dropdownClassName,
	        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
	        defaultActiveFirstOption: props.defaultActiveFirstOption,
	        dropdownMenuStyle: props.dropdownMenuStyle,
	        transitionName: props.transitionName,
	        animation: props.animation,
	        clsPrefix: props.clsPrefix,
	        dropdownStyle: props.dropdownStyle,
	        combobox: props.combobox,
	        showSearch: props.showSearch,
	        options: options,
	        multiple: multiple,
	        disabled: disabled,
	        visible: open,
	        inputValue: state.inputValue,
	        value: state.value,
	        onDropdownVisibleChange: this.onDropdownVisibleChange,
	        getPopupContainer: props.getPopupContainer,
	        onMenuSelect: this.onMenuSelect,
	        onMenuDeselect: this.onMenuDeselect,
	        scrollToEnd: props.scrollToEnd,
	        ref: 'trigger'
	      },
	      _react2["default"].createElement(
	        'div',
	        {
	          style: props.style,
	          ref: 'root',
	          onBlur: this.onOuterBlur,
	          onFocus: this.onOuterFocus,
	          className: (0, _classnames2["default"])(rootCls)
	        },
	        _react2["default"].createElement(
	          'div',
	          _extends({
	            ref: 'selection',
	            key: 'selection',
	            className: clsPrefix + '-selection\n            ' + clsPrefix + '-selection--' + (multiple ? 'multiple' : 'single'),
	            role: 'combobox',
	            'aria-autocomplete': 'list',
	            'aria-haspopup': 'true',
	            'aria-expanded': open
	          }, extraSelectionProps),
	          ctrlNode,
	          allowClear && !multiple ? clear : null,
	          multiple || !props.showArrow ? null : _react2["default"].createElement(
	            'span',
	            _extends({
	              key: 'arrow',
	              className: clsPrefix + '-arrow',
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onMouseDown: _util.preventDefaultEvent,
	              onClick: this.onArrowClick
	            }),
	            _react2["default"].createElement('b', null)
	          )
	        )
	      )
	    );
	  };
	
	  return RcSelect;
	}(_react.Component);
	
	;
	
	RcSelect.defaultProps = defaultProps;
	RcSelect.propTypes = propTypes;
	
	exports["default"] = RcSelect;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VerticalMenu = __webpack_require__(70);
	
	var _VerticalMenu2 = _interopRequireDefault(_VerticalMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _VerticalMenu2["default"];
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ExportMenu = __webpack_require__(71);
	
	var _ExportMenu2 = _interopRequireDefault(_ExportMenu);
	
	var _openAnimation = __webpack_require__(87);
	
	var _openAnimation2 = _interopRequireDefault(_openAnimation);
	
	var _warning = __webpack_require__(88);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleClick = function (e) {
	      _this.setOpenKeys([]);
	
	      var onClick = _this.props.onClick;
	      if (onClick) {
	        onClick(e);
	      }
	    };
	
	    _this.handleOpenChange = function (openKeys) {
	      _this.setOpenKeys(openKeys);
	
	      var onOpenChange = _this.props.onOpenChange;
	      if (onOpenChange) {
	        onOpenChange(openKeys);
	      }
	    };
	
	    (0, _warning2["default"])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead.');
	
	    _this.state = {
	      openKeys: []
	    };
	    return _this;
	  }
	
	  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
	      this.switchModeFromInline = true;
	    }
	    if ('openKeys' in nextProps) {
	      this.setOpenKeys(nextProps.openKeys);
	    }
	  };
	
	  Menu.prototype.setOpenKeys = function setOpenKeys(openKeys) {
	    if (!('openKeys' in this.props)) {
	      this.setState({ openKeys: openKeys });
	    }
	  };
	
	  Menu.prototype.render = function render() {
	    var openAnimation = this.props.openAnimation || this.props.openTransitionName;
	    if (!openAnimation) {
	      switch (this.props.mode) {
	        case 'horizontal':
	          openAnimation = 'slide-up';
	          break;
	        case 'vertical':
	          // When mode switch from inline
	          // submenu should hide without animation
	          if (this.switchModeFromInline) {
	            openAnimation = '';
	            this.switchModeFromInline = false;
	          } else {
	            openAnimation = 'zoom-big';
	          }
	          break;
	        case 'inline':
	          openAnimation = _openAnimation2["default"];
	          break;
	        default:
	      }
	    }
	
	    var props = {};
	    var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
	    if (this.props.mode !== 'inline') {
	      // 这组属性的目的是
	      // 弹出型的菜单需要点击后立即关闭
	      // 另外，弹出型的菜单的受控模式没有使用场景
	      props = {
	        openKeys: this.state.openKeys,
	        onClick: this.handleClick,
	        onOpenChange: this.handleOpenChange,
	        openTransitionName: openAnimation,
	        className: className
	      };
	    } else {
	      props = {
	        openAnimation: openAnimation,
	        className: className
	      };
	    }
	    return _react2["default"].createElement(_ExportMenu2["default"], _extends({}, this.props, props));
	  };
	
	  return Menu;
	}(_react2["default"].Component);
	
	Menu.defaultProps = {
	  prefixCls: 'u-menu',
	  className: '',
	  theme: 'light' // or dark
	};
	
	Menu.Divider = _ExportMenu.Divider;
	Menu.Item = _ExportMenu.Item;
	Menu.SubMenu = _ExportMenu.SubMenu;
	Menu.ItemGroup = _ExportMenu.ItemGroup;
	Menu.MenuToggle = _ExportMenu.MenuToggle;
	Menu.SideContainer = _ExportMenu.SideContainer;
	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuToggle = exports.SideContainer = exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;
	
	var _Menu = __webpack_require__(72);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(75);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(82);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(83);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(84);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _SideContainer = __webpack_require__(85);
	
	var _SideContainer2 = _interopRequireDefault(_SideContainer);
	
	var _MenuToggle = __webpack_require__(86);
	
	var _MenuToggle2 = _interopRequireDefault(_MenuToggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.SubMenu = _SubMenu2["default"];
	exports.Item = _MenuItem2["default"];
	exports.MenuItem = _MenuItem2["default"];
	exports.MenuItemGroup = _MenuItemGroup2["default"];
	exports.ItemGroup = _MenuItemGroup2["default"];
	exports.Divider = _Divider2["default"];
	exports.SideContainer = _SideContainer2["default"];
	exports.MenuToggle = _MenuToggle2["default"];
	exports["default"] = _Menu2["default"];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _util = __webpack_require__(73);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DOMWrap = __webpack_require__(74);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children,
	      eventKey = props.eventKey;
	
	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	var propTypes = {
	
	  openSubMenuOnMouseEnter: _propTypes2["default"].bool,
	  closeSubMenuOnMouseLeave: _propTypes2["default"].bool,
	  selectedKeys: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].string]),
	  defaultSelectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  defaultOpenKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  openKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  mode: _propTypes2["default"].string,
	  onClick: _propTypes2["default"].func,
	  onSelect: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  openTransitionName: _propTypes2["default"].string,
	  openAnimation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  level: _propTypes2["default"].number,
	  eventKey: _propTypes2["default"].string,
	  selectable: _propTypes2["default"].bool,
	  children: _propTypes2["default"].any,
	
	  focusable: _propTypes2["default"].bool,
	  multiple: _propTypes2["default"].bool,
	  style: _propTypes2["default"].object,
	  defaultActiveFirst: _propTypes2["default"].bool,
	  visible: _propTypes2["default"].bool,
	  activeKey: _propTypes2["default"].string
	
	};
	var defaultProps = {
	  openSubMenuOnMouseEnter: true,
	  closeSubMenuOnMouseLeave: true,
	  selectable: true,
	  onClick: _util.noop,
	  onSelect: _util.noop,
	  onOpenChange: _util.noop,
	  onDeselect: _util.noop,
	  defaultSelectedKeys: [],
	  defaultOpenKeys: [],
	
	  clsPrefix: 'u-menu',
	  className: '',
	  mode: 'vertical',
	  level: 1,
	  inlineIndent: 24,
	  visible: true,
	  focusable: true,
	  style: {}
	};
	
	var Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    var selectedKeys = _this.props.defaultSelectedKeys;
	    var openKeys = _this.props.defaultOpenKeys;
	    if ('selectedKeys' in _this.props) {
	      selectedKeys = _this.props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = _this.props.openKeys || [];
	    }
	
	    _this.state = {
	      selectedKeys: selectedKeys,
	      openKeys: openKeys,
	      activeKey: getActiveKey(_this.props, _this.props.activeKey)
	      //activeKey: getActiveKey(this.props, this.props.activeKey),
	    };
	    _this.renderMenuItem = _this.renderMenuItem.bind(_this);
	    _this.onDestroy = _this.onDestroy.bind(_this);
	    _this.onItemHover = _this.onItemHover.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.onOpenChange = _this.onOpenChange.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onDeselect = _this.onDeselect.bind(_this);
	    _this.getOpenTransitionName = _this.getOpenTransitionName.bind(_this);
	    _this.isInlineMode = _this.isInlineMode.bind(_this);
	    _this.lastOpenSubMenu = _this.lastOpenSubMenu.bind(_this);
	    _this.renderMenuItem = _this.renderMenuItem.bind(_this);
	
	    _this.renderCommonMenuItem = _this.renderCommonMenuItem.bind(_this);
	    _this.renderRoot = _this.renderRoot.bind(_this);
	    _this.getOpenChangesOnItemHover = _this.getOpenChangesOnItemHover.bind(_this);
	    _this.getFlatInstanceArray = _this.getFlatInstanceArray.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.step = _this.step.bind(_this);
	
	    return _this;
	  }
	
	  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }
	
	    if ('activeKey' in nextProps) {
	      props.activeKey = getActiveKey(nextProps, nextProps.activeKey);
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props.activeKey = activeKey;
	      }
	    }
	
	    this.setState(props);
	  };
	
	  Menu.prototype.componentWillMount = function componentWillMount() {
	    this.instanceArray = [];
	  };
	
	  Menu.prototype.onDestroy = function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  };
	
	  Menu.prototype.onItemHover = function onItemHover(e) {
	    var item = e.item;
	    var _props = this.props,
	        mode = _props.mode,
	        closeSubMenuOnMouseLeave = _props.closeSubMenuOnMouseLeave;
	    var _e$openChanges = e.openChanges,
	        openChanges = _e$openChanges === undefined ? [] : _e$openChanges;
	    // special for top sub menu
	
	    if (mode !== 'inline' && !closeSubMenuOnMouseLeave && item.isSubMenu) {
	      var activeKey = this.state.activeKey;
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.props.open) {
	        openChanges = openChanges.concat({
	          key: item.props.eventKey,
	          item: item,
	          originalEvent: e,
	          open: true
	        });
	      }
	    }
	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  };
	
	  Menu.prototype.onSelect = function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect(_extends({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  };
	
	  Menu.prototype.onClick = function onClick(e) {
	    this.props.onClick(e);
	  };
	
	  Menu.prototype.onOpenChange = function onOpenChange(e_) {
	    var props = this.props;
	    var openKeys = this.state.openKeys.concat();
	    var changed = false;
	    var processSingle = function processSingle(e) {
	      var oneChanged = false;
	      if (e.open) {
	        oneChanged = openKeys.indexOf(e.key) === -1;
	        if (oneChanged) {
	          openKeys.push(e.key);
	        }
	      } else {
	        var index = openKeys.indexOf(e.key);
	        oneChanged = index !== -1;
	        if (oneChanged) {
	          openKeys.splice(index, 1);
	        }
	      }
	      changed = changed || oneChanged;
	    };
	    if (Array.isArray(e_)) {
	      // batch change call
	      e_.forEach(processSingle);
	    } else {
	      processSingle(e_);
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        this.setState({ openKeys: openKeys });
	      }
	      props.onOpenChange(openKeys);
	    }
	  };
	
	  Menu.prototype.onDeselect = function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect(_extends({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  };
	
	  Menu.prototype.getOpenTransitionName = function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.clsPrefix + '-open-' + animationName;
	    }
	    return transitionName;
	  };
	
	  Menu.prototype.isInlineMode = function isInlineMode() {
	    return this.props.mode === 'inline';
	  };
	
	  Menu.prototype.lastOpenSubMenu = function lastOpenSubMenu() {
	    var lastOpen = [];
	    var openKeys = this.state.openKeys;
	
	    if (openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  };
	
	  Menu.prototype.renderMenuItem = function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      selectedKeys: state.selectedKeys,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  };
	
	  Menu.prototype.renderCommonMenuItem = function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = _extends({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.clsPrefix,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _tinperBeeCore.createChainedFunction)(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
	  };
	
	  Menu.prototype.getOpenChangesOnItemHover = function getOpenChangesOnItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key,
	        hover = e.hover,
	        trigger = e.trigger;
	
	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty
	
	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        return {
	          item: activeItem,
	          originalEvent: e,
	          key: activeItem.props.eventKey,
	          open: false
	        };
	      }
	    }
	    return [];
	  };
	
	  Menu.prototype.getFlatInstanceArray = function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  };
	
	  Menu.prototype.step = function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (!len) {
	      return null;
	    }
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  };
	
	  Menu.prototype.onKeyDown = function onKeyDown(e) {
	    var _this2 = this;
	
	    var keyCode = e.keyCode;
	    var handled = void 0;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _tinperBeeCore.KeyCode.UP || keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      activeItem = this.step(keyCode === _tinperBeeCore.KeyCode.UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        scrollIntoView(ReactDOM.findDOMNode(activeItem), ReactDOM.findDOMNode(_this2), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  };
	
	  Menu.prototype.renderRoot = function renderRoot(props) {
	    var _classes;
	
	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.clsPrefix, 1), _defineProperty(_classes, props.clsPrefix + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2["default"])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        _extends({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.clsPrefix + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2["default"].Children.map(props.children, this.renderMenuItem.bind(this))
	      )
	      /*eslint-enable */
	
	    );
	  };
	
	  Menu.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    props.className += ' ' + props.clsPrefix + '-root';
	    return this.renderRoot(props);
	  };
	
	  return Menu;
	}(_react.Component);
	
	;
	
	Menu.propTypes = propTypes;
	Menu.defaultProps = defaultProps;
	
	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecusively = loopMenuItemRecusively;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function noop() {}
	
	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + index;
	}
	
	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2["default"].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type && c.type.isMenuItemGroup) {
	      _react2["default"].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}
	
	function loopMenuItemRecusively(children, keys, ret) {
	  if (!children || ret.find) {
	    return;
	  }
	  _react2["default"].Children.forEach(children, function (c) {
	    if (ret.find) {
	      return;
	    }
	    if (c) {
	      var construt = c.type;
	      if (!construt || !(construt.isSubMenu || construt.isMenuItem || construt.isMenuItemGroup)) {
	        return;
	      }
	      if (keys.indexOf(c.key) !== -1) {
	        ret.find = true;
	      } else if (c.props.children) {
	        loopMenuItemRecusively(c.props.children, keys, ret);
	      }
	    }
	  });
	}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  tag: _propTypes2["default"].string,
	  hiddenClassName: _propTypes2["default"].string,
	  visible: _propTypes2["default"].bool
	};
	var defaultProps = {
	  tag: 'div'
	};
	
	var DOMWrap = function (_Component) {
	  _inherits(DOMWrap, _Component);
	
	  function DOMWrap() {
	    _classCallCheck(this, DOMWrap);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  DOMWrap.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    delete props.tag;
	    delete props.hiddenClassName;
	    delete props.visible;
	    return _react2["default"].createElement(Tag, props);
	  };
	
	  return DOMWrap;
	}(_react.Component);
	
	;
	
	DOMWrap.propTypes = propTypes;
	DOMWrap.defaultProps = defaultProps;
	
	exports["default"] = DOMWrap;
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _SubPopupMenu = __webpack_require__(76);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(73);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var guid = 0;
	
	var propTypes = {
	  parentMenu: _propTypes2["default"].object,
	  title: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].node]),
	  children: _propTypes2["default"].any,
	  selectedKeys: _propTypes2["default"].array,
	  openKeys: _propTypes2["default"].array,
	  onClick: _propTypes2["default"].func,
	  onOpenChange: _propTypes2["default"].func,
	  rootPrefixCls: _propTypes2["default"].string,
	  eventKey: _propTypes2["default"].string,
	  multiple: _propTypes2["default"].bool,
	  active: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  closeSubMenuOnMouseLeave: _propTypes2["default"].bool,
	  openSubMenuOnMouseEnter: _propTypes2["default"].bool,
	  onDeselect: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  onItemHover: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func,
	  onTitleMouseEnter: _propTypes2["default"].func,
	  onTitleMouseLeave: _propTypes2["default"].func,
	  onTitleClick: _propTypes2["default"].func
	};
	var defaultProps = {
	  onMouseEnter: _util.noop,
	  onMouseLeave: _util.noop,
	  onTitleMouseEnter: _util.noop,
	  onTitleMouseLeave: _util.noop,
	  onTitleClick: _util.noop,
	  title: ''
	};
	
	var SubMenu = function (_Component) {
	  _inherits(SubMenu, _Component);
	
	  function SubMenu(props) {
	    _classCallCheck(this, SubMenu);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.isSubMenu = 1;
	    _this.state = {
	      defaultActiveFirst: false
	    };
	
	    _this.onDestroy = _this.onDestroy.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onOpenChange = _this.onOpenChange.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onTitleMouseEnter = _this.onTitleMouseEnter.bind(_this);
	
	    _this.onTitleMouseLeave = _this.onTitleMouseLeave.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onTitleClick = _this.onTitleClick.bind(_this);
	    _this.onSubMenuClick = _this.onSubMenuClick.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.onDeselect = _this.onDeselect.bind(_this);
	
	    _this.getPrefixCls = _this.getPrefixCls.bind(_this);
	    _this.getActiveClassName = _this.getActiveClassName.bind(_this);
	    _this.getSelectedClassName = _this.getSelectedClassName.bind(_this);
	
	    _this.getDisabledClassName = _this.getDisabledClassName.bind(_this);
	    _this.getOpenClassName = _this.getOpenClassName.bind(_this);
	    _this.saveMenuInstance = _this.saveMenuInstance.bind(_this);
	    _this.addKeyPath = _this.addKeyPath.bind(_this);
	    _this.triggerOpenChange = _this.triggerOpenChange.bind(_this);
	    _this.clearSubMenuTimers = _this.clearSubMenuTimers.bind(_this);
	
	    _this.clearSubMenuLeaveTimer = _this.clearSubMenuLeaveTimer.bind(_this);
	    _this.clearSubMenuTitleLeaveTimer = _this.clearSubMenuTitleLeaveTimer.bind(_this);
	    _this.isChildrenSelected = _this.isChildrenSelected.bind(_this);
	    _this.isOpen = _this.isOpen.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	    return _this;
	  }
	
	  SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _props = this.props,
	        onDestroy = _props.onDestroy,
	        eventKey = _props.eventKey,
	        parentMenu = _props.parentMenu;
	
	    this.mounted = true;
	    if (onDestroy) {
	      onDestroy(eventKey);
	    }
	    if (parentMenu.subMenuInstance === this) {
	      this.clearSubMenuTimers();
	    }
	  };
	
	  SubMenu.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	  };
	
	  SubMenu.prototype.onDestroy = function onDestroy(key) {
	    this.props.onDestroy(key);
	  };
	
	  SubMenu.prototype.onKeyDown = function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	    var isOpen = this.isOpen();
	
	    if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
	      this.onTitleClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }
	
	    if (keyCode === _tinperBeeCore.KeyCode.RIGHT) {
	      if (isOpen) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _tinperBeeCore.KeyCode.LEFT) {
	      var handled = void 0;
	      if (isOpen) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (isOpen && (keyCode === _tinperBeeCore.KeyCode.UP || keyCode === _tinperBeeCore.KeyCode.DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  };
	
	  SubMenu.prototype.onOpenChange = function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  };
	
	  SubMenu.prototype.onMouseEnter = function onMouseEnter(e) {
	    var props = this.props;
	    this.clearSubMenuLeaveTimer(props.parentMenu.subMenuInstance !== this);
	    props.onMouseEnter({
	      key: props.eventKey,
	      domEvent: e
	    });
	  };
	
	  SubMenu.prototype.onTitleMouseEnter = function onTitleMouseEnter(domEvent) {
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        key = props.eventKey;
	
	    var item = this;
	    this.clearSubMenuTitleLeaveTimer(parentMenu.subMenuInstance !== item);
	    if (parentMenu.menuItemInstance) {
	      parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer(true);
	    }
	    var openChanges = [];
	    if (props.openSubMenuOnMouseEnter) {
	      openChanges.push({
	        key: key,
	        item: item,
	        trigger: 'mouseenter',
	        open: true
	      });
	    }
	    props.onItemHover({
	      key: key,
	      item: item,
	      hover: true,
	      trigger: 'mouseenter',
	      openChanges: openChanges
	    });
	    this.setState({
	      defaultActiveFirst: false
	    });
	    props.onTitleMouseEnter({
	      key: key,
	      domEvent: domEvent
	    });
	  };
	
	  SubMenu.prototype.onTitleMouseLeave = function onTitleMouseLeave(e) {
	    var _this2 = this;
	
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        eventKey = props.eventKey;
	
	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuTitleLeaveFn = function () {
	      if (_this2.mounted) {
	        // leave whole sub tree
	        // still active
	        if (props.mode === 'inline' && props.active) {
	          props.onItemHover({
	            key: eventKey,
	            item: _this2,
	            hover: false,
	            trigger: 'mouseleave'
	          });
	        }
	        props.onTitleMouseLeave({
	          key: props.eventKey,
	          domEvent: e
	        });
	      }
	    };
	    parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
	  };
	
	  SubMenu.prototype.onMouseLeave = function onMouseLeave(e) {
	    var _this3 = this;
	
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        eventKey = props.eventKey;
	
	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuLeaveFn = function () {
	      if (_this3.mounted) {
	        // leave whole sub tree
	        // still active
	        if (props.mode !== 'inline') {
	          var isOpen = _this3.isOpen();
	          if (isOpen && props.closeSubMenuOnMouseLeave && props.active) {
	            props.onItemHover({
	              key: eventKey,
	              item: _this3,
	              hover: false,
	              trigger: 'mouseleave',
	              openChanges: [{
	                key: eventKey,
	                item: _this3,
	                trigger: 'mouseleave',
	                open: false
	              }]
	            });
	          } else {
	            if (props.active) {
	              props.onItemHover({
	                key: eventKey,
	                item: _this3,
	                hover: false,
	                trigger: 'mouseleave'
	              });
	            }
	            if (isOpen && props.closeSubMenuOnMouseLeave) {
	              _this3.triggerOpenChange(false);
	            }
	          }
	        }
	        // trigger mouseleave
	        props.onMouseLeave({
	          key: eventKey,
	          domEvent: e
	        });
	      }
	    };
	    // prevent popup menu and submenu gap
	    parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100);
	  };
	
	  SubMenu.prototype.onTitleClick = function onTitleClick(e) {
	    var props = this.props;
	
	    props.onTitleClick({
	      key: props.eventKey,
	      domEvent: e
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.isOpen(), 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  };
	
	  SubMenu.prototype.onSubMenuClick = function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  };
	
	  SubMenu.prototype.onSelect = function onSelect(info) {
	    this.props.onSelect(info);
	  };
	
	  SubMenu.prototype.onDeselect = function onDeselect(info) {
	    this.props.onDeselect(info);
	  };
	
	  SubMenu.prototype.getPrefixCls = function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  };
	
	  SubMenu.prototype.getActiveClassName = function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  };
	
	  SubMenu.prototype.getDisabledClassName = function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  };
	
	  SubMenu.prototype.getSelectedClassName = function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  };
	
	  SubMenu.prototype.getOpenClassName = function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  };
	
	  SubMenu.prototype.saveMenuInstance = function saveMenuInstance(c) {
	    this.menuInstance = c;
	  };
	
	  SubMenu.prototype.addKeyPath = function addKeyPath(info) {
	    return _extends({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  };
	
	  SubMenu.prototype.triggerOpenChange = function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  };
	
	  SubMenu.prototype.clearSubMenuTimers = function clearSubMenuTimers() {
	    var callFn = void 0;
	    this.clearSubMenuLeaveTimer(callFn);
	    this.clearSubMenuTitleLeaveTimer(callFn);
	  };
	
	  SubMenu.prototype.clearSubMenuTitleLeaveTimer = function clearSubMenuTitleLeaveTimer() {
	    var callFn = void 0;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuTitleLeaveTimer) {
	      clearTimeout(parentMenu.subMenuTitleLeaveTimer);
	      parentMenu.subMenuTitleLeaveTimer = null;
	      if (callFn && parentMenu.subMenuTitleLeaveFn) {
	        parentMenu.subMenuTitleLeaveFn();
	      }
	      parentMenu.subMenuTitleLeaveFn = null;
	    }
	  };
	
	  SubMenu.prototype.clearSubMenuLeaveTimer = function clearSubMenuLeaveTimer() {
	    var callFn = void 0;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuLeaveTimer) {
	      clearTimeout(parentMenu.subMenuLeaveTimer);
	      parentMenu.subMenuLeaveTimer = null;
	      if (callFn && parentMenu.subMenuLeaveFn) {
	        parentMenu.subMenuLeaveFn();
	      }
	      parentMenu.subMenuLeaveFn = null;
	    }
	  };
	
	  SubMenu.prototype.isChildrenSelected = function isChildrenSelected() {
	    var ret = { find: false };
	    (0, _util.loopMenuItemRecusively)(this.props.children, this.props.selectedKeys, ret);
	    return ret.find;
	  };
	
	  SubMenu.prototype.isOpen = function isOpen() {
	    return this.props.openKeys.indexOf(this.props.eventKey) !== -1;
	  };
	
	  SubMenu.prototype.renderChildren = function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: this.isOpen(),
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2["default"].createElement(
	      _SubPopupMenu2["default"],
	      baseProps,
	      children
	    );
	  };
	
	  SubMenu.prototype.render = function render() {
	    var _classes;
	
	    var isOpen = this.isOpen();
	    this.haveOpen = this.haveOpen || isOpen;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);
	
	    classes[this.getOpenClassName()] = isOpen;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getSelectedClassName()] = this.isChildrenSelected();
	
	    if (!this._menuId) {
	      if (props.eventKey) {
	        this._menuId = props.eventKey + '$Menu';
	      } else {
	        this._menuId = '$__$' + ++guid + '$Menu';
	      }
	    }
	
	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var titleClickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      titleClickEvents = {
	        onClick: this.onTitleClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onTitleMouseEnter,
	        onMouseLeave: this.onTitleMouseLeave
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({ className: (0, _classnames2["default"])(classes) }, mouseEvents),
	      _react2["default"].createElement(
	        'div',
	        _extends({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, titleClickEvents, {
	          'aria-expanded': isOpen,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  };
	
	  return SubMenu;
	}(_react.Component);
	
	;
	
	SubMenu.propTypes = propTypes;
	SubMenu.defaultProps = defaultProps;
	SubMenu.isSubMenu = 1;
	
	exports["default"] = SubMenu;
	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _beeAnimate = __webpack_require__(77);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _util = __webpack_require__(73);
	
	var _DOMWrap = __webpack_require__(74);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children,
	      eventKey = props.eventKey;
	
	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}
	
	//import Animate from 'bee-transition';
	var propTypes = {
	  onSelect: _propTypes2["default"].func,
	  onClick: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  onOpenChange: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  openTransitionName: _propTypes2["default"].string,
	  openAnimation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  openKeys: _propTypes2["default"].array,
	  closeSubMenuOnMouseLeave: _propTypes2["default"].bool,
	  visible: _propTypes2["default"].bool,
	  children: _propTypes2["default"].any
	};
	
	var SubPopupMenu = function (_Component) {
	  _inherits(SubPopupMenu, _Component);
	
	  function SubPopupMenu(props) {
	    _classCallCheck(this, SubPopupMenu);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      activeKey: getActiveKey(_this.props, _this.props.activeKey)
	    };
	    _this.getOpenChangesOnItemHover = _this.getOpenChangesOnItemHover.bind(_this);
	    _this.onDeselect = _this.onDeselect.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onOpenChange = _this.onOpenChange.bind(_this);
	    _this.onDestroy = _this.onDestroy.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);
	
	    _this.onItemHover = _this.onItemHover.bind(_this);
	    _this.getOpenTransitionName = _this.getOpenTransitionName.bind(_this);
	    _this.renderMenuItem = _this.renderMenuItem.bind(_this);
	
	    _this.getFlatInstanceArray = _this.getFlatInstanceArray.bind(_this);
	    _this.renderCommonMenuItem = _this.renderCommonMenuItem.bind(_this);
	    _this.renderRoot = _this.renderRoot.bind(_this);
	
	    return _this;
	  }
	
	  SubPopupMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var props = void 0;
	    if ('activeKey' in nextProps) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  };
	
	  SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  };
	
	  SubPopupMenu.prototype.onDeselect = function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  };
	
	  SubPopupMenu.prototype.onSelect = function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  };
	
	  SubPopupMenu.prototype.onClick = function onClick(e) {
	    this.props.onClick(e);
	  };
	
	  SubPopupMenu.prototype.onOpenChange = function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  };
	
	  SubPopupMenu.prototype.onDestroy = function onDestroy(key) {
	    this.props.onDestroy(key);
	  };
	
	  SubPopupMenu.prototype.onItemHover = function onItemHover(e) {
	    var _e$openChanges = e.openChanges,
	        openChanges = _e$openChanges === undefined ? [] : _e$openChanges;
	
	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  };
	
	  SubPopupMenu.prototype.getOpenTransitionName = function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  };
	
	  SubPopupMenu.prototype.renderMenuItem = function renderMenuItem(c, i, subIndex) {
	    var props = this.props;
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  };
	
	  SubPopupMenu.prototype.getOpenChangesOnItemHover = function getOpenChangesOnItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key,
	        hover = e.hover,
	        trigger = e.trigger;
	
	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty
	
	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        return {
	          item: activeItem,
	          originalEvent: e,
	          key: activeItem.props.eventKey,
	          open: false
	        };
	      }
	    }
	    return [];
	  };
	
	  SubPopupMenu.prototype.renderCommonMenuItem = function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = _extends({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _tinperBeeCore.createChainedFunction)(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
	  };
	
	  SubPopupMenu.prototype.getFlatInstanceArray = function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  };
	
	  SubPopupMenu.prototype.renderRoot = function renderRoot(props) {
	    var _classes;
	
	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2["default"])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        _extends({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2["default"].Children.map(props.children, this.renderMenuItem.bind(this))
	      )
	      /*eslint-enable */
	
	    );
	  };
	
	  SubPopupMenu.prototype.render = function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = _extends({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if (_typeof(props.openAnimation) === 'object') {
	      animProps.animation = _extends({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2["default"].createElement(
	      _beeAnimate2["default"],
	      _extends({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      this.renderRoot(props)
	    );
	  };
	
	  return SubPopupMenu;
	}(_react.Component);
	
	;
	SubPopupMenu.propTypes = propTypes;
	exports["default"] = SubPopupMenu;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(78);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(79);
	
	var _AnimateChild = __webpack_require__(80);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(81);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultKey = 'u_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var propTypes = {
	  component: _propTypes2["default"].any,
	  animation: _propTypes2["default"].object,
	  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  transitionEnter: _propTypes2["default"].bool,
	  transitionAppear: _propTypes2["default"].bool,
	  exclusive: _propTypes2["default"].bool,
	  transitionLeave: _propTypes2["default"].bool,
	  onEnd: _propTypes2["default"].func,
	  onEnter: _propTypes2["default"].func,
	  onLeave: _propTypes2["default"].func,
	  onAppear: _propTypes2["default"].func,
	  showProp: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var Animate = function (_Component) {
	  _inherits(Animate, _Component);
	
	  function Animate(props) {
	    _classCallCheck(this, Animate);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);
	
	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };
	
	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };
	
	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };
	
	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };
	
	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };
	
	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	
	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };
	
	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };
	
	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };
	
	  return Animate;
	}(_react.Component);
	
	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _util = __webpack_require__(81);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var propTypes = {
	  children: _propTypes2["default"].any
	};
	
	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);
	
	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };
	
	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };
	
	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };
	
	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };
	
	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return AnimateChild;
	}(_react.Component);
	
	;
	
	AnimateChild.propTypes = propTypes;
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(73);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	/* eslint react/no-is-mounted:0 */
	var propTypes = {
	  rootPrefixCls: _propTypes2["default"].string,
	  eventKey: _propTypes2["default"].string,
	  active: _propTypes2["default"].bool,
	  children: _propTypes2["default"].any,
	  selectedKeys: _propTypes2["default"].array,
	  disabled: _propTypes2["default"].bool,
	  title: _propTypes2["default"].string,
	  onSelect: _propTypes2["default"].func,
	  onClick: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  parentMenu: _propTypes2["default"].object,
	  onItemHover: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  onSelect: _util.noop,
	  onMouseEnter: _util.noop,
	  onMouseLeave: _util.noop
	};
	
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.getPrefixCls = _this.getPrefixCls.bind(_this);
	    _this.getActiveClassName = _this.getActiveClassName.bind(_this);
	    _this.getDisabledClassName = _this.getDisabledClassName.bind(_this);
	    _this.getSelectedClassName = _this.getSelectedClassName.bind(_this);
	    _this.clearMenuItemMouseLeaveTimer = _this.clearMenuItemMouseLeaveTimer.bind(_this);
	    _this.isSelected = _this.isSelected.bind(_this);
	    return _this;
	  }
	
	  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
	    var props = this.props;
	    this.mounted = false;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	    if (props.parentMenu.menuItemInstance === this) {
	      this.clearMenuItemMouseLeaveTimer();
	    }
	  };
	
	  MenuItem.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	  };
	
	  MenuItem.prototype.onKeyDown = function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  };
	
	  MenuItem.prototype.onMouseLeave = function onMouseLeave(e) {
	    var _this2 = this;
	
	    var props = this.props;
	    var eventKey = props.eventKey,
	        parentMenu = props.parentMenu;
	
	    parentMenu.menuItemInstance = this;
	    parentMenu.menuItemMouseLeaveFn = function () {
	      if (_this2.mounted && props.active) {
	        props.onItemHover({
	          key: eventKey,
	          item: _this2,
	          hover: false,
	          domEvent: e,
	          trigger: 'mouseleave'
	        });
	      }
	    };
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
	    props.onMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  };
	
	  MenuItem.prototype.onMouseEnter = function onMouseEnter(e) {
	    var props = this.props;
	    var eventKey = props.eventKey,
	        parentMenu = props.parentMenu;
	
	    this.clearMenuItemMouseLeaveTimer(parentMenu.menuItemInstance !== this);
	    if (parentMenu.subMenuInstance) {
	      parentMenu.subMenuInstance.clearSubMenuTimers();
	    }
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      domEvent: e,
	      trigger: 'mouseenter'
	    });
	    props.onMouseEnter({
	      key: eventKey,
	      domEvent: e
	    });
	  };
	
	  MenuItem.prototype.onClick = function onClick(e) {
	    var props = this.props;
	    var selected = this.isSelected();
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!selected) {
	      props.onSelect(info);
	    }
	  };
	
	  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  };
	
	  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  };
	
	  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  };
	
	  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  };
	
	  MenuItem.prototype.clearMenuItemMouseLeaveTimer = function clearMenuItemMouseLeaveTimer() {
	    var props = this.props;
	    var callFn = void 0;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	      if (callFn && parentMenu.menuItemMouseLeaveFn) {
	        parentMenu.menuItemMouseLeaveFn();
	      }
	      parentMenu.menuItemMouseLeaveFn = null;
	    }
	  };
	
	  MenuItem.prototype.isSelected = function isSelected() {
	    return this.props.selectedKeys.indexOf(this.props.eventKey) !== -1;
	  };
	
	  MenuItem.prototype.render = function render() {
	    var props = this.props;
	    var selected = this.isSelected();
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = _extends({}, props.attribute, {
	      title: props.title,
	      className: (0, _classnames2["default"])(classes),
	      role: 'menuitem',
	      'aria-selected': selected,
	      'aria-disabled': props.disabled
	    });
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = _extends({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({
	        style: style
	      }, attrs, mouseEvent),
	      props.children
	    );
	  };
	
	  return MenuItem;
	}(_react.Component);
	
	;
	
	MenuItem.isMenuItem = 1;
	
	MenuItem.defaultProps = defaultProps;
	MenuItem.propTypes = propTypes;
	
	exports["default"] = MenuItem;
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    renderMenuItem: _propTypes2["default"].func,
	    index: _propTypes2["default"].number,
	    className: _propTypes2["default"].string,
	    rootPrefixCls: _propTypes2["default"].string,
	    title: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].node]),
	    children: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].node])
	};
	
	var defaultProps = {
	    disabled: true
	};
	
	var MenuItemGroup = function (_Component) {
	    _inherits(MenuItemGroup, _Component);
	
	    function MenuItemGroup() {
	        _classCallCheck(this, MenuItemGroup);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    MenuItemGroup.prototype.renderInnerMenuItem = function renderInnerMenuItem(item, subIndex) {
	        var _props = this.props,
	            renderMenuItem = _props.renderMenuItem,
	            index = _props.index;
	
	        return renderMenuItem(item, index, subIndex);
	    };
	
	    MenuItemGroup.prototype.render = function render() {
	        var _props2 = this.props,
	            _props2$className = _props2.className,
	            className = _props2$className === undefined ? '' : _props2$className,
	            title = _props2.title,
	            children = _props2.children,
	            rootPrefixCls = _props2.rootPrefixCls;
	
	        var titleClassName = rootPrefixCls + '-item-group-title';
	        var listClassName = rootPrefixCls + '-item-group-list';
	
	        return _react2["default"].createElement(
	            'li',
	            { className: className + ' ' + rootPrefixCls + '-item-group' },
	            _react2["default"].createElement(
	                'div',
	                { className: titleClassName },
	                title
	            ),
	            _react2["default"].createElement(
	                'ul',
	                { className: listClassName },
	                _react2["default"].Children.map(children, this.renderInnerMenuItem.bind(this))
	            )
	        );
	    };
	
	    return MenuItemGroup;
	}(_react.Component);
	
	;
	
	MenuItemGroup.isMenuItemGroup = true;
	MenuItemGroup.propTypes = propTypes;
	MenuItemGroup.defaultProps = defaultProps;
	
	exports["default"] = MenuItemGroup;
	module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  className: _propTypes2["default"].string,
	  rootPrefixCls: _propTypes2["default"].string
	};
	
	var Divider = function (_Component) {
	  _inherits(Divider, _Component);
	
	  function Divider() {
	    _classCallCheck(this, Divider);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Divider.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        rootPrefixCls = _props.rootPrefixCls;
	
	    return _react2["default"].createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
	  };
	
	  return Divider;
	}(_react.Component);
	
	;
	
	Divider.propTypes = propTypes;
	
	exports["default"] = Divider;
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultProps = {
	  clsPrefix: "u-navbar-side-container",
	  sideActive: false
	};
	
	var NavSideContainer = function (_React$Component) {
	  _inherits(NavSideContainer, _React$Component);
	
	  function NavSideContainer() {
	    _classCallCheck(this, NavSideContainer);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  NavSideContainer.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        clsPrefix = _props.clsPrefix,
	        sideActive = _props.sideActive,
	        expanded = _props.expanded,
	        props = _objectWithoutProperties(_props, ['className', 'children', 'clsPrefix', 'sideActive', 'expanded']);
	
	    //const navbarProps = this.context.u_navbar;
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, clsPrefix, expanded && 'expanded') },
	      children
	    );
	  };
	
	  return NavSideContainer;
	}(_react2["default"].Component);
	
	NavSideContainer.defaultProps = defaultProps;
	
	exports["default"] = NavSideContainer;
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  onClick: _propTypes2["default"].func,
	  /**
	   * The toggle content, if left empty it will render the default toggle (seen above).
	   */
	  show: _propTypes2["default"].bool,
	  children: _propTypes2["default"].node
	};
	
	var contextTypes = {
	  u_navbar: _propTypes2["default"].shape({
	    expanded: _propTypes2["default"].bool,
	    onToggle: _propTypes2["default"].func
	  })
	};
	
	var defaultProps = {
	  clsPrefix: 'u-navbar-toggle',
	  show: false
	};
	
	var MenuToggle = function (_React$Component) {
	  _inherits(MenuToggle, _React$Component);
	
	  function MenuToggle(props) {
	    _classCallCheck(this, MenuToggle);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      toggleState: false
	      //this.handleRender = this.handleRender.bind(this);
	    };return _this;
	  }
	
	  MenuToggle.prototype.handleClick = function handleClick() {
	    var _context$u_navbar = this.context.u_navbar,
	        expanded = _context$u_navbar.expanded,
	        onToggle = _context$u_navbar.onToggle;
	
	    this.setState({ toggleState: !this.state.toggleState });
	    if (onToggle) {
	      onToggle(!expanded);
	    }
	  };
	
	  MenuToggle.prototype.render = function render() {
	    var _props = this.props,
	        onClick = _props.onClick,
	        className = _props.className,
	        children = _props.children,
	        clsPrefix = _props.clsPrefix,
	        show = _props.show,
	        props = _objectWithoutProperties(_props, ['onClick', 'className', 'children', 'clsPrefix', 'show']);
	    //const navbarProps = this.context.u_navbar || { bsClass: 'navbar' };
	    //console.log(navbarProps.onToggle, navbarProps.expanded);
	
	    var buttonProps = _extends({
	      type: 'button'
	    }, props, {
	      onClick: (0, _tinperBeeCore.createChainedFunction)(onClick, this.handleClick.bind(this)),
	      className: (0, _classnames2["default"])(className, clsPrefix, show && 'show')
	      //!this.context.u_navbar.expanded && 'collapsed',
	    });
	
	    if (children) {
	      return _react2["default"].createElement(
	        'button',
	        buttonProps,
	        children
	      );
	    }
	    //当show存在时，渲染左侧静态面包按钮
	    return _react2["default"].createElement(
	      'div',
	      null,
	      show && this.state.toggleState && _react2["default"].createElement(
	        'button',
	        buttonProps,
	        _react2["default"].createElement(
	          'span',
	          { className: 'sr-only' },
	          'Toggle navigation'
	        ),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' })
	      ),
	      show && !this.state.toggleState && _react2["default"].createElement(
	        'button',
	        buttonProps,
	        _react2["default"].createElement('span', { className: 'uf uf-arrow-left' })
	      ),
	      !show && !this.state.toggleState && _react2["default"].createElement(
	        'button',
	        buttonProps,
	        _react2["default"].createElement(
	          'span',
	          { className: 'sr-only' },
	          'Toggle navigation'
	        ),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' })
	      )
	    );
	  };
	
	  return MenuToggle;
	}(_react2["default"].Component);
	
	MenuToggle.propTypes = propTypes;
	MenuToggle.defaultProps = defaultProps;
	MenuToggle.contextTypes = contextTypes;
	
	exports["default"] = MenuToggle;
	module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function animate(node, show, done) {
	  var height = void 0;
	  return (0, _tinperBeeCore.cssAnimation)(node, 'u-motion-collapse', {
	    start: function start() {
	      if (!show) {
	        node.style.height = node.offsetHeight + 'px';
	      } else {
	        height = node.offsetHeight;
	        node.style.height = 0;
	      }
	    },
	    active: function active() {
	      node.style.height = (show ? height : 0) + 'px';
	    },
	    end: function end() {
	      node.style.height = '';
	      done();
	    }
	  });
	}
	
	var animation = {
	  enter: function enter(node, done) {
	    return animate(node, true, done);
	  },
	  leave: function leave(node, done) {
	    return animate(node, false, done);
	  },
	  appear: function appear(node, done) {
	    return animate(node, true, done);
	  }
	};
	
	exports["default"] = animation;
	module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var warned = {};
	
	exports["default"] = function (valid, message) {
	  if (!valid && !warned[message]) {
	    (0, _warning2["default"])(false, message);
	    warned[message] = true;
	  }
	};
	
	module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  label: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var OptGroup = function (_React$Component) {
	  _inherits(OptGroup, _React$Component);
	
	  function OptGroup() {
	    _classCallCheck(this, OptGroup);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  return OptGroup;
	}(_react2["default"].Component);
	
	OptGroup.propTypes = propTypes;
	exports["default"] = OptGroup;
	module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.preventDefaultEvent = preventDefaultEvent;
	exports.findIndexInValueByKey = findIndexInValueByKey;
	exports.findIndexInValueByLabel = findIndexInValueByLabel;
	exports.getSelectKeys = getSelectKeys;
	exports.findFirstMenuItem = findFirstMenuItem;
	exports.includesSeparators = includesSeparators;
	exports.splitBySeparators = splitBySeparators;
	
	var _beeMenus = __webpack_require__(69);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getValuePropValue(child) {
	  var props = child.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (child.key) {
	    return child.key;
	  }
	  throw new Error('no key or value for ' + child);
	}
	
	function getPropValue(child, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(child);
	  }
	  return child.props[prop];
	}
	
	function isCombobox(props) {
	  return props.combobox;
	}
	
	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}
	
	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}
	
	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}
	
	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}
	
	function preventDefaultEvent(e) {
	  e.preventDefault();
	}
	
	function findIndexInValueByKey(value, key) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (value[i].key === key) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}
	
	function findIndexInValueByLabel(value, label) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (toArray(value[i].label).join('') === label) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}
	
	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2["default"].Children.forEach(menuItems, function (item) {
	    if (item.type === _beeMenus.ItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (findIndexInValueByKey(value, itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}
	
	var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none'
	};
	
	var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
	  unselectable: 'unselectable'
	};
	
	function findFirstMenuItem(children) {
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (child.type === _beeMenus.ItemGroup) {
	      var found = findFirstMenuItem(child.props.children);
	      if (found) {
	        return found;
	      }
	    } else if (!child.props.disabled) {
	      return child;
	    }
	  }
	  return null;
	}
	
	function includesSeparators(string, separators) {
	  for (var i = 0; i < separators.length; ++i) {
	    if (string.lastIndexOf(separators[i]) > 0) {
	      return true;
	    }
	  }
	  return false;
	}
	
	function splitBySeparators(string, separators) {
	  var reg = new RegExp('[' + separators.join() + ']');
	  var array = string.split(reg);
	  if (array[0] === '') {
	    array.shift();
	  }
	  if (array[array.length - 1] === '') {
	    array.pop();
	  }
	  return array;
	}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _trigger = __webpack_require__(92);
	
	var _trigger2 = _interopRequireDefault(_trigger);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DropdownMenu = __webpack_require__(99);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _util = __webpack_require__(90);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  }
	};
	
	var propTypes = {
	  onPopupFocus: _propTypes2["default"].func,
	  dropdownMatchSelectWidth: _propTypes2["default"].bool,
	  dropdownAlign: _propTypes2["default"].object,
	  visible: _propTypes2["default"].bool,
	  disabled: _propTypes2["default"].bool,
	  showSearch: _propTypes2["default"].bool,
	  dropdownClassName: _propTypes2["default"].string,
	  multiple: _propTypes2["default"].bool,
	  inputValue: _propTypes2["default"].string,
	  filterOption: _propTypes2["default"].any,
	  options: _propTypes2["default"].any,
	  clsPrefix: _propTypes2["default"].string,
	  popupClassName: _propTypes2["default"].string,
	  children: _propTypes2["default"].any
	};
	
	var SelectTrigger = function (_Component) {
	  _inherits(SelectTrigger, _Component);
	
	  function SelectTrigger(props) {
	    _classCallCheck(this, SelectTrigger);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.setDropdownWidth = function () {
	      var width = _reactDom2["default"].findDOMNode(_this).offsetWidth;
	      if (width !== _this.state.dropdownWidth) {
	        _this.setState({ dropdownWidth: width });
	      }
	    };
	
	    _this.getInnerMenu = _this.getInnerMenu.bind(_this);
	    _this.getPopupDOMNode = _this.getPopupDOMNode.bind(_this);
	    _this.getDropdownTransitionName = _this.getDropdownTransitionName.bind(_this);
	    _this.getDropdownElement = _this.getDropdownElement.bind(_this);
	    _this.getDropdownPrefixCls = _this.getDropdownPrefixCls.bind(_this);
	    _this.saveMenu = _this.saveMenu.bind(_this);
	    _this.state = {
	      dropdownWidth: null
	    };
	
	    return _this;
	  }
	
	  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
	    this.setDropdownWidth();
	  };
	
	  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.setDropdownWidth();
	  };
	
	  SelectTrigger.prototype.getInnerMenu = function getInnerMenu() {
	    return this.popupMenu && this.popupMenu.refs.menu;
	  };
	
	  SelectTrigger.prototype.getPopupDOMNode = function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDomNode();
	  };
	
	  SelectTrigger.prototype.getDropdownElement = function getDropdownElement(newProps) {
	    var props = this.props;
	    return _react2["default"].createElement(_DropdownMenu2["default"], _extends({
	      ref: this.saveMenu
	    }, newProps, {
	      clsPrefix: this.getDropdownPrefixCls(),
	      onMenuSelect: props.onMenuSelect,
	      scrollToEnd: props.scrollToEnd,
	      onMenuDeselect: props.onMenuDeselect,
	      value: props.value,
	      defaultActiveFirstOption: props.defaultActiveFirstOption,
	      dropdownMenuStyle: props.dropdownMenuStyle
	    }));
	  };
	
	  SelectTrigger.prototype.getDropdownTransitionName = function getDropdownTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  SelectTrigger.prototype.getDropdownPrefixCls = function getDropdownPrefixCls() {
	    return this.props.clsPrefix + '-dropdown';
	  };
	
	  SelectTrigger.prototype.saveMenu = function saveMenu(menu) {
	    this.popupMenu = menu;
	  };
	
	  SelectTrigger.prototype.render = function render() {
	    var _popupClassName;
	
	    var _props = this.props,
	        onPopupFocus = _props.onPopupFocus,
	        props = _objectWithoutProperties(_props, ['onPopupFocus']);
	
	    var multiple = props.multiple,
	        visible = props.visible,
	        inputValue = props.inputValue,
	        dropdownAlign = props.dropdownAlign,
	        disabled = props.disabled,
	        showSearch = props.showSearch,
	        dropdownClassName = props.dropdownClassName,
	        dropdownStyle = props.dropdownStyle,
	        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
	
	    var dropdownPrefixCls = this.getDropdownPrefixCls();
	    var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
	    var popupElement = this.getDropdownElement({
	      menuItems: props.options,
	      onPopupFocus: onPopupFocus,
	      multiple: multiple,
	      inputValue: inputValue,
	      visible: visible
	    });
	    var hideAction = void 0;
	    if (disabled) {
	      hideAction = [];
	    } else if ((0, _util.isSingleMode)(props) && !showSearch) {
	      hideAction = ['click'];
	    } else {
	      hideAction = ['blur'];
	    }
	    var popupStyle = _extends({}, dropdownStyle);
	    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
	    if (this.state.dropdownWidth) {
	      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
	    }
	    return _react2["default"].createElement(
	      _trigger2["default"],
	      _extends({}, props, {
	        showAction: disabled ? [] : ['click'],
	        hideAction: hideAction,
	        ref: 'trigger',
	        popupPlacement: 'bottomLeft',
	        builtinPlacements: BUILT_IN_PLACEMENTS,
	        clsPrefix: dropdownPrefixCls
	        // popupTransitionName={this.getDropdownTransitionName()}
	        , onPopupVisibleChange: props.onDropdownVisibleChange,
	        popup: popupElement,
	        popupAlign: dropdownAlign,
	        popupVisible: visible,
	        getPopupContainer: props.getPopupContainer,
	        popupClassName: (0, _classnames2["default"])(popupClassName),
	        popupStyle: popupStyle
	      }),
	      props.children
	    );
	  };
	
	  return SelectTrigger;
	}(_react.Component);
	
	;
	
	SelectTrigger.propTypes = propTypes;
	
	exports["default"] = SelectTrigger;
	module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(93);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _contains = __webpack_require__(94);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _Popup = __webpack_require__(95);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	//import getContainerRenderMixin from './getContainerRenderMixin';
	
	function noop() {}
	
	function returnEmptyString() {
	  return '';
	}
	
	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
	
	var propTypes = {
	  children: _propTypes2["default"].any,
	  action: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].arrayOf(_propTypes2["default"].string)]),
	  showAction: _propTypes2["default"].any,
	  hideAction: _propTypes2["default"].any,
	  getPopupClassNameFromAlign: _propTypes2["default"].any,
	  onPopupVisibleChange: _propTypes2["default"].func,
	  afterPopupVisibleChange: _propTypes2["default"].func,
	  popup: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func]).isRequired,
	  popupStyle: _propTypes2["default"].object,
	  clsPrefix: _propTypes2["default"].string,
	  popupClassName: _propTypes2["default"].string,
	  popupPlacement: _propTypes2["default"].string,
	  builtinPlacements: _propTypes2["default"].object,
	  popupTransitionName: _propTypes2["default"].string,
	  popupAnimation: _propTypes2["default"].any,
	  mouseEnterDelay: _propTypes2["default"].number,
	  mouseLeaveDelay: _propTypes2["default"].number,
	  zIndex: _propTypes2["default"].number,
	  focusDelay: _propTypes2["default"].number,
	  blurDelay: _propTypes2["default"].number,
	  getPopupContainer: _propTypes2["default"].func,
	  destroyPopupOnHide: _propTypes2["default"].bool,
	  mask: _propTypes2["default"].bool,
	  maskClosable: _propTypes2["default"].bool,
	  onPopupAlign: _propTypes2["default"].func,
	  popupAlign: _propTypes2["default"].object,
	  popupVisible: _propTypes2["default"].bool,
	  maskTransitionName: _propTypes2["default"].string,
	  maskAnimation: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  clsPrefix: 'rc-trigger-popup',
	  getPopupClassNameFromAlign: returnEmptyString,
	  onPopupVisibleChange: noop,
	  afterPopupVisibleChange: noop,
	  onPopupAlign: noop,
	  popupClassName: '',
	  mouseEnterDelay: 0,
	  mouseLeaveDelay: 0.1,
	  focusDelay: 0,
	  blurDelay: 0.15,
	  popupStyle: {},
	  destroyPopupOnHide: false,
	  popupAlign: {},
	  defaultPopupVisible: false,
	  mask: false,
	  maskClosable: true,
	  action: [],
	  showAction: [],
	  hideAction: []
	};
	
	var Trigger = function (_Component) {
	  _inherits(Trigger, _Component);
	
	  function Trigger(props) {
	    _classCallCheck(this, Trigger);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      popupVisible: !!_this.props.popupVisible || _this.props.defaultPopupVisible
	      //this.removeContainer = this.removeContainer.bind(this);
	    };_this.getContainer = _this.getContainer.bind(_this);
	    _this.renderComponent = _this.renderComponent.bind(_this);
	    _this.isVisible = _this.isVisible.bind(_this);
	
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onPopupMouseEnter = _this.onPopupMouseEnter.bind(_this);
	    _this.onPopupMouseLeave = _this.onPopupMouseLeave.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);
	
	    _this.onMouseDown = _this.onMouseDown.bind(_this);
	    _this.onTouchStart = _this.onTouchStart.bind(_this);
	    _this.onBlur = _this.onBlur.bind(_this);
	    _this.onDocumentClick = _this.onDocumentClick.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
	
	    _this.getRootDomNode = _this.getRootDomNode.bind(_this);
	    _this.getPopupClassNameFromAlign = _this.getPopupClassNameFromAlign.bind(_this);
	    _this.getPopupAlign = _this.getPopupAlign.bind(_this);
	    _this.getComponent = _this.getComponent.bind(_this);
	    _this.setPopupVisible = _this.setPopupVisible.bind(_this);
	
	    _this.delaySetPopupVisible = _this.delaySetPopupVisible.bind(_this);
	    _this.clearDelayTimer = _this.clearDelayTimer.bind(_this);
	    _this.createTwoChains = _this.createTwoChains.bind(_this);
	    _this.isClickToShow = _this.isClickToShow.bind(_this);
	    _this.isClickToHide = _this.isClickToHide.bind(_this);
	
	    _this.isMouseEnterToShow = _this.isMouseEnterToShow.bind(_this);
	    _this.isMouseLeaveToHide = _this.isMouseLeaveToHide.bind(_this);
	    _this.isFocusToShow = _this.isFocusToShow.bind(_this);
	    _this.isBlurToHide = _this.isBlurToHide.bind(_this);
	    _this.forcePopupAlign = _this.forcePopupAlign.bind(_this);
	
	    _this.fireEvents = _this.fireEvents.bind(_this);
	    _this.close = _this.close.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  Trigger.prototype.isVisible = function isVisible(instance) {
	    return instance.state.popupVisible;
	  };
	
	  Trigger.prototype.getContainer = function getContainer(instance) {
	    var popupContainer = document.createElement('div');
	    var mountNode = instance.props.getPopupContainer ? instance.props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : document.body;
	    mountNode.appendChild(popupContainer);
	    return popupContainer;
	  };
	
	  Trigger.prototype.renderComponent = function renderComponent(instance, componentArg, ready) {
	    if (instance._component || this.isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = this.getContainer(instance);
	      }
	      var component = instance.getComponent(componentArg);
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  };
	
	  Trigger.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    this.mounted = false;
	    ALL_HANDLERS.forEach(function (h) {
	      _this2['fire' + h] = function (e) {
	        _this2.fireEvents(h, e);
	      };
	    });
	  };
	
	  Trigger.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  };
	
	  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;
	
	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  };
	
	  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    this.renderComponent(this, null, function () {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    });
	    if (this.isClickToHide()) {
	      if (state.popupVisible) {
	        if (!this.clickOutsideHandler) {
	          this.clickOutsideHandler = (0, _tinperBeeCore.addEventListener)(document, 'mousedown', this.onDocumentClick);
	          this.touchOutsideHandler = (0, _tinperBeeCore.addEventListener)(document, 'touchstart', this.onDocumentClick);
	        }
	        return;
	      }
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  };
	
	  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	    //this.removeContainer();
	  };
	
	  Trigger.prototype.onMouseEnter = function onMouseEnter(e) {
	    this.fireEvents('onMouseEnter', e);
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  };
	
	  Trigger.prototype.onMouseLeave = function onMouseLeave(e) {
	    this.fireEvents('onMouseLeave', e);
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  };
	
	  Trigger.prototype.onPopupMouseEnter = function onPopupMouseEnter() {
	    this.clearDelayTimer();
	  };
	
	  Trigger.prototype.onPopupMouseLeave = function onPopupMouseLeave(e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  };
	
	  Trigger.prototype.onFocus = function onFocus(e) {
	    this.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    this.clearDelayTimer();
	    if (this.isFocusToShow()) {
	      this.focusTime = Date.now();
	      this.delaySetPopupVisible(true, this.props.focusDelay);
	    }
	  };
	
	  Trigger.prototype.onMouseDown = function onMouseDown(e) {
	    this.fireEvents('onMouseDown', e);
	    this.preClickTime = Date.now();
	  };
	
	  Trigger.prototype.onTouchStart = function onTouchStart(e) {
	    this.fireEvents('onTouchStart', e);
	    this.preTouchTime = Date.now();
	  };
	
	  Trigger.prototype.onBlur = function onBlur(e) {
	    this.fireEvents('onBlur', e);
	    this.clearDelayTimer();
	    if (this.isBlurToHide()) {
	      this.delaySetPopupVisible(false, this.props.blurDelay);
	    }
	  };
	
	  Trigger.prototype.onClick = function onClick(event) {
	    this.fireEvents('onClick', event);
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  };
	
	  Trigger.prototype.onDocumentClick = function onDocumentClick(event) {
	    if (this.props.mask && !this.props.maskClosable) {
	      return;
	    }
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
	      this.close();
	    }
	  };
	
	  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
	    // for test
	    if (this._component) {
	      return this.mounted ? this._component.getPopupDomNode() : null;
	    }
	    return null;
	  };
	
	  Trigger.prototype.getRootDomNode = function getRootDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  };
	
	  Trigger.prototype.getPopupClassNameFromAlign = function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        builtinPlacements = props.builtinPlacements,
	        clsPrefix = props.clsPrefix;
	
	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, clsPrefix, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  };
	
	  Trigger.prototype.getPopupAlign = function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        popupAlign = props.popupAlign,
	        builtinPlacements = props.builtinPlacements;
	
	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  };
	
	  Trigger.prototype.getComponent = function getComponent() {
	    var props = this.props,
	        state = this.state;
	
	    var mouseProps = {};
	    if (this.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = this.onPopupMouseEnter;
	    }
	    if (this.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = this.onPopupMouseLeave;
	    }
	    return _react2["default"].createElement(
	      _Popup2["default"],
	      _extends({
	        clsPrefix: props.clsPrefix,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: this.getPopupAlign(),
	        onAlign: props.onPopupAlign,
	        animation: props.popupAnimation,
	        getClassNameFromAlign: this.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: this.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }),
	      typeof props.popup === 'function' ? props.popup() : props.popup
	    );
	  };
	
	  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  };
	
	  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS) {
	    var _this3 = this;
	
	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this3.setPopupVisible(visible);
	        _this3.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  };
	
	  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  };
	
	  Trigger.prototype.createTwoChains = function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  };
	
	  Trigger.prototype.isClickToShow = function isClickToShow() {
	    var _props = this.props,
	        action = _props.action,
	        showAction = _props.showAction;
	
	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  };
	
	  Trigger.prototype.isClickToHide = function isClickToHide() {
	    var _props2 = this.props,
	        action = _props2.action,
	        hideAction = _props2.hideAction;
	
	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  };
	
	  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
	    var _props3 = this.props,
	        action = _props3.action,
	        showAction = _props3.showAction;
	
	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  };
	
	  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
	    var _props4 = this.props,
	        action = _props4.action,
	        hideAction = _props4.hideAction;
	
	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  };
	
	  Trigger.prototype.isFocusToShow = function isFocusToShow() {
	    var _props5 = this.props,
	        action = _props5.action,
	        showAction = _props5.showAction;
	
	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  };
	
	  Trigger.prototype.isBlurToHide = function isBlurToHide() {
	    var _props6 = this.props,
	        action = _props6.action,
	        hideAction = _props6.hideAction;
	
	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  };
	
	  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
	    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
	      this.popupInstance.alignInstance.forceAlign();
	    }
	  };
	
	  Trigger.prototype.fireEvents = function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  };
	
	  Trigger.prototype.close = function close() {
	    this.setPopupVisible(false);
	  };
	
	  Trigger.prototype.render = function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var newChildProps = {};
	
	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }
	
	    return _react2["default"].cloneElement(child, newChildProps);
	  };
	
	  return Trigger;
	}(_react.Component);
	
	;
	
	Trigger.propTypes = propTypes;
	Trigger.defaultProps = defaultProps;
	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  return _inDOM2.default ? function (context, node) {
	    if (context.contains) {
	      return context.contains(node);
	    } else if (context.compareDocumentPosition) {
	      return context === node || !!(context.compareDocumentPosition(node) & 16);
	    } else {
	      return fallback(context, node);
	    }
	  } : fallback;
	}();
	
	function fallback(context, node) {
	  if (node) do {
	    if (node === context) return true;
	  } while (node = node.parentNode);
	
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Align = __webpack_require__(49);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	var _beeAnimate = __webpack_require__(77);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _PopupInner = __webpack_require__(96);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var _LazyRenderBox = __webpack_require__(97);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  visible: _propTypes2["default"].bool,
	  style: _propTypes2["default"].object,
	  getClassNameFromAlign: _propTypes2["default"].func,
	  onAlign: _propTypes2["default"].func,
	  getRootDomNode: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  align: _propTypes2["default"].any,
	  destroyPopupOnHide: _propTypes2["default"].bool,
	  className: _propTypes2["default"].string,
	  clsPrefix: _propTypes2["default"].string,
	  onMouseLeave: _propTypes2["default"].func
	};
	
	var Popup = function (_Component) {
	  _inherits(Popup, _Component);
	
	  function Popup() {
	    _classCallCheck(this, Popup);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this.onAlign = _this.onAlign.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
	    _this.getTarget = _this.getTarget.bind(_this);
	    _this.getMaskTransitionName = _this.getMaskTransitionName.bind(_this);
	    _this.getTransitionName = _this.getTransitionName.bind(_this);
	    _this.getClassName = _this.getClassName.bind(_this);
	    _this.getPopupElement = _this.getPopupElement.bind(_this);
	    _this.getZIndexStyle = _this.getZIndexStyle.bind(_this);
	    _this.getMaskElement = _this.getMaskElement.bind(_this);
	    _this.saveAlign = _this.saveAlign.bind(_this);
	    return _this;
	  }
	
	  Popup.prototype.componentDidMount = function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  };
	
	  Popup.prototype.onAlign = function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };
	
	  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this.refs.popup);
	  };
	
	  Popup.prototype.getTarget = function getTarget() {
	    return this.props.getRootDomNode();
	  };
	
	  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.clsPrefix + '-' + animation;
	    }
	    return transitionName;
	  };
	
	  Popup.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
	    return this.props.clsPrefix + ' ' + this.props.className + ' ' + currentAlignClassName;
	  };
	
	  Popup.prototype.getPopupElement = function getPopupElement() {
	    var props = this.props;
	    var align = props.align,
	        style = props.style,
	        visible = props.visible,
	        clsPrefix = props.clsPrefix,
	        destroyPopupOnHide = props.destroyPopupOnHide;
	
	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = clsPrefix + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    var newStyle = _extends({}, style, this.getZIndexStyle());
	    var popupInnerProps = {
	      className: className,
	      clsPrefix: clsPrefix,
	      ref: 'popup',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(
	        _beeAnimate2["default"],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2["default"].createElement(
	          _Align2["default"],
	          {
	            target: this.getTarget,
	            key: 'popup',
	            ref: this.saveAlign,
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2["default"].createElement(
	            _PopupInner2["default"],
	            _extends({
	              visible: true
	            }, popupInnerProps),
	            props.children
	          )
	        ) : null
	      );
	    }
	    return _react2["default"].createElement(
	      _beeAnimate2["default"],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2["default"].createElement(
	        _Align2["default"],
	        {
	          target: this.getTarget,
	          key: 'popup',
	          ref: this.saveAlign,
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2["default"].createElement(
	          _PopupInner2["default"],
	          _extends({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          props.children
	        )
	      )
	    );
	  };
	
	  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  };
	
	  Popup.prototype.getMaskElement = function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.clsPrefix + '-mask',
	        hiddenClassName: props.clsPrefix + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(
	          _beeAnimate2["default"],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  };
	
	  Popup.prototype.saveAlign = function saveAlign(align) {
	    this.alignInstance = align;
	  };
	
	  Popup.prototype.render = function render() {
	    return _react2["default"].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  };
	
	  return Popup;
	}(_react.Component);
	
	;
	
	Popup.propTypes = propTypes;
	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LazyRenderBox = __webpack_require__(97);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  hiddenClassName: _propTypes2["default"].string,
	  className: _propTypes2["default"].string,
	  clsPrefix: _propTypes2["default"].string,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func,
	  children: _propTypes2["default"].any
	};
	
	var PopupInner = function (_Component) {
	  _inherits(PopupInner, _Component);
	
	  function PopupInner() {
	    _classCallCheck(this, PopupInner);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  PopupInner.prototype.render = function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: props.style
	      },
	      _react2["default"].createElement(
	        _LazyRenderBox2["default"],
	        { className: props.clsPrefix + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  };
	
	  return PopupInner;
	}(_react.Component);
	
	;
	
	PopupInner.propTypes = propTypes;
	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  children: _propTypes2["default"].any,
	  className: _propTypes2["default"].string,
	  visible: _propTypes2["default"].bool,
	  hiddenClassName: _propTypes2["default"].string
	};
	
	var LazyRenderBox = function (_Component) {
	  _inherits(LazyRenderBox, _Component);
	
	  function LazyRenderBox() {
	    _classCallCheck(this, LazyRenderBox);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  };
	
	  LazyRenderBox.prototype.render = function render() {
	    var _props = this.props,
	        hiddenClassName = _props.hiddenClassName,
	        visible = _props.visible,
	        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);
	
	    if (hiddenClassName || _react2["default"].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2["default"].createElement('div', props);
	    }
	
	    return _react2["default"].Children.only(props.children);
	  };
	
	  return LazyRenderBox;
	}(_react.Component);
	
	;
	LazyRenderBox.propTypes = propTypes;
	
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}
	
	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}
	
	function getPopupClassNameFromAlign(builtinPlacements, clsPrefix, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return clsPrefix + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _beeMenus = __webpack_require__(69);
	
	var _beeMenus2 = _interopRequireDefault(_beeMenus);
	
	var _domScrollIntoView = __webpack_require__(100);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _util = __webpack_require__(90);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  defaultActiveFirstOption: _propTypes2["default"].bool,
	  value: _propTypes2["default"].any,
	  dropdownMenuStyle: _propTypes2["default"].object,
	  multiple: _propTypes2["default"].bool,
	  onPopupFocus: _propTypes2["default"].func,
	  onMenuDeSelect: _propTypes2["default"].func,
	  onMenuSelect: _propTypes2["default"].func,
	  clsPrefix: _propTypes2["default"].string,
	  menuItems: _propTypes2["default"].any,
	  inputValue: _propTypes2["default"].string,
	  visible: _propTypes2["default"].bool
	};
	
	var DropdownMenu = function (_Component) {
	  _inherits(DropdownMenu, _Component);
	
	  function DropdownMenu() {
	    _classCallCheck(this, DropdownMenu);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  DropdownMenu.prototype.componentWillMount = function componentWillMount() {
	    this.lastInputValue = this.props.inputValue;
	  };
	
	  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
	    this.scrollActiveItemToView();
	    this.lastVisible = this.props.visible;
	    var scrollDom = (0, _reactDom.findDOMNode)(this.refs.menu);
	    scrollDom.addEventListener('scroll', this.handleScroll.bind(this));
	  };
	
	  DropdownMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    var scrollDom = (0, _reactDom.findDOMNode)(this.refs.menu);
	    scrollDom.removeEventListener('scroll', this.handleScroll.bind(this));
	  };
	
	  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    if (!nextProps.visible) {
	      this.lastVisible = false;
	    }
	    // freeze when hide
	    return nextProps.visible;
	  };
	
	  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (!prevProps.visible && props.visible) {
	      this.scrollActiveItemToView();
	    }
	    this.lastVisible = props.visible;
	    this.lastInputValue = props.inputValue;
	  };
	
	  DropdownMenu.prototype.handleScroll = function handleScroll(event) {
	    var scrollToEnd = this.props.scrollToEnd;
	
	    var el = event.target;
	    if (el.scrollHeight < el.clientHeight + el.scrollTop + 1) {
	      if (scrollToEnd) {
	        scrollToEnd();
	      }
	    }
	  };
	
	  DropdownMenu.prototype.scrollActiveItemToView = function scrollActiveItemToView() {
	    // scroll into view
	    var itemComponent = (0, _reactDom.findDOMNode)(this.firstActiveItem);
	    if (itemComponent) {
	      (0, _domScrollIntoView2["default"])(itemComponent, (0, _reactDom.findDOMNode)(this.refs.menu), {
	        onlyScrollIfNeeded: true
	      });
	    }
	  };
	
	  DropdownMenu.prototype.renderMenu = function renderMenu() {
	    var _this2 = this;
	
	    var props = this.props;
	    var menuItems = props.menuItems,
	        defaultActiveFirstOption = props.defaultActiveFirstOption,
	        value = props.value,
	        clsPrefix = props.clsPrefix,
	        multiple = props.multiple,
	        onMenuSelect = props.onMenuSelect,
	        inputValue = props.inputValue;
	
	    if (menuItems && menuItems.length) {
	      var menuProps = {};
	      if (multiple) {
	        menuProps.onDeselect = props.onMenuDeselect;
	        menuProps.onSelect = onMenuSelect;
	      } else {
	        menuProps.onClick = onMenuSelect;
	      }
	
	      var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	      var activeKeyProps = {};
	
	      var clonedMenuItems = menuItems;
	      if (selectedKeys.length) {
	        if (props.visible && !this.lastVisible) {
	          activeKeyProps.activeKey = selectedKeys[0];
	        }
	        var foundFirst = false;
	        // set firstActiveItem via cloning menus
	        // for scroll into view
	        var clone = function clone(item) {
	          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
	            foundFirst = true;
	            return (0, _react.cloneElement)(item, {
	              ref: function ref(_ref) {
	                _this2.firstActiveItem = _ref;
	              }
	            });
	          }
	          return item;
	        };
	
	        clonedMenuItems = menuItems.map(function (item) {
	          if (item.type === _beeMenus.ItemGroup) {
	            var children = (0, _tinperBeeCore.toArray)(item.props.children).map(clone);
	            return (0, _react.cloneElement)(item, {}, children);
	          }
	          return clone(item);
	        });
	      }
	
	      // clear activeKey when inputValue change
	      if (inputValue !== this.lastInputValue) {
	        activeKeyProps.activeKey = '';
	      }
	
	      return _react2["default"].createElement(
	        _beeMenus2["default"],
	        _extends({
	          ref: 'menu',
	          style: this.props.dropdownMenuStyle,
	          defaultActiveFirst: defaultActiveFirstOption
	        }, activeKeyProps, {
	          multiple: multiple,
	          focusable: false
	        }, menuProps, {
	          selectedKeys: selectedKeys,
	          clsPrefix: clsPrefix + '-menu'
	        }),
	        clonedMenuItems
	      );
	    }
	    return null;
	  };
	
	  DropdownMenu.prototype.render = function render() {
	    var renderMenu = this.renderMenu();
	    return renderMenu ? _react2["default"].createElement(
	      'div',
	      {
	        style: { overflow: 'auto' },
	        onFocus: this.props.onPopupFocus,
	        onMouseDown: _util.preventDefaultEvent
	      },
	      renderMenu
	    ) : null;
	  };
	
	  return DropdownMenu;
	}(_react.Component);
	
	;
	
	exports["default"] = DropdownMenu;
	module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(101);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(102);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;
	
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  disabled: _propTypes2["default"].bool,
	  value: _propTypes2["default"].string
	};
	
	var Option = function (_React$Component) {
	  _inherits(Option, _React$Component);
	
	  function Option() {
	    _classCallCheck(this, Option);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  return Option;
	}(_react2["default"].Component);
	
	Option.propTypes = propTypes;
	exports["default"] = Option;
	module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var result,
	      index = -1,
	      length = path.length;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = findIndex;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(105)(module)))

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeButton = __webpack_require__(62);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _src = __webpack_require__(64);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @title 地区级联
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @description 中国地区级联
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);
	
		function Demo1() {
			_classCallCheck(this, Demo1);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this));
	
			_this.onChange = function (obj) {
				console.log(obj);
			};
	
			_this.btnOnClick = function () {
				_this.setState({
					value: { province: '山西', city: '长治', area: '长治县' }
				});
			};
	
			_this.state = {
				defaultValue: { province: '北京', city: '北京', area: '东城区' },
				value: null
			};
			return _this;
		}
	
		Demo1.prototype.render = function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_src2['default'], { ref: 'city', onChange: this.onChange, defaultValue: this.state.defaultValue, value: this.state.value }),
				_react2['default'].createElement(
					_beeButton2['default'],
					{ shape: 'border', onClick: this.btnOnClick, style: { marginTop: "10px" } },
					'\u4EE3\u7801\u8BBE\u7F6E\u6570\u636E'
				)
			);
		};
	
		return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map
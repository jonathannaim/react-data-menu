'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuPopupFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var classNames = require('classnames');

var MenuPopupFactory = exports.MenuPopupFactory = function () {
    function MenuPopupFactory() {
        _classCallCheck(this, MenuPopupFactory);
    }

    _createClass(MenuPopupFactory, [{
        key: 'createItem',
        value: function createItem(config) {
            var className = classNames({
                'menu-popup': true,
                'showing': config.showing
            });

            return _react2.default.createElement(
                'div',
                _extends({}, config.handlers, { id: config.popupId, key: config.popupId, className: className, styles: config.styles }),
                config.children
            );
        }
    }]);

    return MenuPopupFactory;
}();
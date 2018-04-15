'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.handleChange = function (e) {
      if (_this.props.onChange) {
        _this.props.onChange(e.target.value);
      }
      if (_this.props.onFinishChange) {
        _this.props.onFinishChange(e.target.value);
      }
    };

    _this.state = {
      options: _this.props.options
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.options !== this.props.options) {
        if (nextProps.options !== this.state.options) {
          this.setState({ options: nextProps.options });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _components.Row,
        null,
        _react2.default.createElement(
          _components.Label,
          null,
          this.props.label
        ),
        _react2.default.createElement(
          _components.Control,
          null,
          _react2.default.createElement(
            'select',
            {
              onChange: this.handleChange,
              value: this.props.value,
              style: {
                backgroundColor: this.context.style.lowlight,
                color: this.context.style.highlight,
                font: this.context.style.font,
                height: this.context.style.computed.itemHeight,
                lineHeight: this.context.style.computed.itemHeight,
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                MozAppearance: 'none',
                border: 'none',
                outline: 'none',
                cursor: 'pointer'
              }
            },
            this.state.options.map(function (opt, index) {
              return _react2.default.createElement(
                'option',
                {
                  value: opt,
                  key: opt + index,
                  style: {
                    backgroundColor: _this2.context.style.font
                  }
                },
                opt
              );
            })
          )
        )
      );
    }
  }]);

  return Select;
}(_react2.default.PureComponent);

exports.default = Select;


Select.propTypes = {
  options: _propTypes2.default.array.isRequired,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFinishChange: _propTypes2.default.func
};

Select.contextTypes = {
  style: _propTypes2.default.object
};
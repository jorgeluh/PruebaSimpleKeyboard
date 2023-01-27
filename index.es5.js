"use strict";

var _simpleKeyboard = _interopRequireDefault(require("simple-keyboard"));
require("simple-keyboard/build/css/index.css");
require("./index.css");
var _spanish = _interopRequireDefault(require("simple-keyboard-layouts/build/layouts/spanish"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var keyboard = new _simpleKeyboard["default"](_objectSpread({
  onChange: function onChange(input) {
    return _onChange(input);
  },
  onKeyPress: function onKeyPress(button) {
    return _onKeyPress(button);
  }
}, _spanish["default"]));

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", function (event) {
  keyboard.setInput(event.target.value);
});
console.log(keyboard);
function _onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}
function _onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}
function handleShift() {
  var currentLayout = keyboard.options.layoutName;
  var shiftToggle = currentLayout === "default" ? "shift" : "default";
  keyboard.setOptions({
    layoutName: shiftToggle
  });
}

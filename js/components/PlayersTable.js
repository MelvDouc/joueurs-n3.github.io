function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayersTable_instances, _PlayersTable_columns, _PlayersTable_players, _PlayersTable_mapPlayers, _PlayersTable_sortPlayers, _PlayersTable_addPlayerRows, _PlayersTable_setHeadingClickHandler, _PlayersTable_initHead, _PlayersTable_initBody;
import players from "../constants/players.js";
import columns from "../constants/columns.js";
import SortOrder from "../constants/sort-order.js";
var PlayersTable = /*#__PURE__*/function (_HTMLTableElement) {
  _inherits(PlayersTable, _HTMLTableElement);
  var _super = _createSuper(PlayersTable);
  function PlayersTable() {
    var _this;
    _classCallCheck(this, PlayersTable);
    _this = _super.call(this);
    _PlayersTable_instances.add(_assertThisInitialized(_this));
    _PlayersTable_columns.set(_assertThisInitialized(_this), void 0);
    _PlayersTable_players.set(_assertThisInitialized(_this), void 0);
    __classPrivateFieldSet(_assertThisInitialized(_this), _PlayersTable_columns, columns, "f");
    __classPrivateFieldSet(_assertThisInitialized(_this), _PlayersTable_players, __classPrivateFieldGet(_assertThisInitialized(_this), _PlayersTable_instances, "m", _PlayersTable_mapPlayers).call(_assertThisInitialized(_this), players), "f");
    __classPrivateFieldGet(_assertThisInitialized(_this), _PlayersTable_instances, "m", _PlayersTable_initHead).call(_assertThisInitialized(_this));
    __classPrivateFieldGet(_assertThisInitialized(_this), _PlayersTable_instances, "m", _PlayersTable_initBody).call(_assertThisInitialized(_this));
    return _this;
  }
  return _createClass(PlayersTable);
}( /*#__PURE__*/_wrapNativeSuper(HTMLTableElement));
export { PlayersTable as default };
_PlayersTable_columns = new WeakMap(), _PlayersTable_players = new WeakMap(), _PlayersTable_instances = new WeakSet(), _PlayersTable_mapPlayers = function _PlayersTable_mapPlayers(players) {
  var _this2 = this;
  return players.map(function (player, index) {
    var row = document.createElement("tr");
    __classPrivateFieldGet(_this2, _PlayersTable_columns, "f").forEach(function (_ref) {
      var prop = _ref.prop;
      var cell = document.createElement("td");
      cell.innerText = player[prop];
      row.appendChild(cell);
    });
    return _objectSpread(_objectSpread({}, player), {}, {
      index: index,
      row: row
    });
  });
}, _PlayersTable_sortPlayers = function _PlayersTable_sortPlayers(sortOrder, index) {
  var _this3 = this;
  switch (sortOrder) {
    case SortOrder.ASCENDING:
      __classPrivateFieldGet(this, _PlayersTable_players, "f").sort(function (a, b) {
        return __classPrivateFieldGet(_this3, _PlayersTable_columns, "f")[index].sortFn(a, b);
      });
      return;
    case SortOrder.DESCENDING:
      __classPrivateFieldGet(this, _PlayersTable_players, "f").sort(function (a, b) {
        return __classPrivateFieldGet(_this3, _PlayersTable_columns, "f")[index].sortFn(b, a);
      });
      return;
    case SortOrder.NONE:
      __classPrivateFieldGet(this, _PlayersTable_players, "f").sort(function (a, b) {
        return a.index - b.index;
      });
  }
}, _PlayersTable_addPlayerRows = function _PlayersTable_addPlayerRows() {
  var _this4 = this;
  __classPrivateFieldGet(this, _PlayersTable_players, "f").forEach(function (_ref2) {
    var row = _ref2.row;
    return _this4.tBodies[0].appendChild(row);
  });
}, _PlayersTable_setHeadingClickHandler = function _PlayersTable_setHeadingClickHandler(heading, index) {
  var _this5 = this;
  var sortOrderProxy = new Proxy({
    value: SortOrder.NONE
  }, {
    set: function set(target, key, newValue) {
      target[key] = newValue;
      heading.dataset.sortOrder = String(newValue);
      return true;
    }
  });
  sortOrderProxy.value = sortOrderProxy.value;
  heading.addEventListener("click", function () {
    sortOrderProxy.value = ++sortOrderProxy.value % 3;
    __classPrivateFieldGet(_this5, _PlayersTable_instances, "m", _PlayersTable_sortPlayers).call(_this5, sortOrderProxy.value, index);
    __classPrivateFieldGet(_this5, _PlayersTable_instances, "m", _PlayersTable_addPlayerRows).call(_this5);
  });
}, _PlayersTable_initHead = function _PlayersTable_initHead() {
  var _this6 = this;
  var tHead = this.createTHead();
  var headRow = document.createElement("tr");
  __classPrivateFieldGet(this, _PlayersTable_columns, "f").forEach(function (_ref3, i) {
    var name = _ref3.name;
    var heading = document.createElement("th");
    heading.innerText = name;
    __classPrivateFieldGet(_this6, _PlayersTable_instances, "m", _PlayersTable_setHeadingClickHandler).call(_this6, heading, i);
    headRow.appendChild(heading);
  });
  tHead.appendChild(headRow);
}, _PlayersTable_initBody = function _PlayersTable_initBody() {
  this.createTBody();
  __classPrivateFieldGet(this, _PlayersTable_instances, "m", _PlayersTable_addPlayerRows).call(this);
};
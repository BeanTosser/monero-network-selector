"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoneroNetworkSelector = MoneroNetworkSelector;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// In place of deprecated babel polyfills

/*
 * Network Selector
 *
 * The Network Selector is a basic dropdown menu that allows the user to select a Monero network
 * on which the app will run. The app can then use that information to choose a node running
 * on the chosen network, properly validate wallet addresses for the chosen network type,
 * and so forth.
 */

/*
 * NetworkSelector
 *
 * This is a basic UI that allows users of a monero web app to select from among the three Monero networks (mainnet, stagenet, and testnet)
 * that the app should connect to.
 *
 */
function MoneroNetworkSelector(props) {
  console.log("Rendering networkselector");
  /*
   * props:
   * networkTypes
   * onNetworkTypeChanged
   */

  var availableNetworkOptions = (0, _react.useRef)(null);

  var handleSelect = function handleSelect(event) {
    console.log("You chose the network type: " + event.target.value);

    if (event.target.value === "mainnet") {
      console.log("set network type to " + 0);
      props.onNetworkTypeChanged(0);
    } else if (event.target.value === "stagenet") {
      console.log("set network type to " + 1);
      props.onNetworkTypeChanged(1);
    } else if (event.target.value === "testnet") {
      props.onNetworkTypeChanged(2);
    } else {
      thow("Something went wrong with network selection");
    }
  }; // if networkTypes prop is not supplied, default to allowing a choice from among all three networks


  if (props.networkTypes === undefined) {
    //default to all three networks
    availableNetworkOptions.current = [/*#__PURE__*/_react["default"].createElement("option", {
      value: "mainnet",
      key: "mainnet"
    }, "mainnet"), /*#__PURE__*/_react["default"].createElement("option", {
      value: "stagenet",
      key: "stagenet"
    }, "stagenet"), /*#__PURE__*/_react["default"].createElement("option", {
      value: "testnet",
      key: "testnet"
    }, "testnet")];
  } else {
    // Sanity check networkTypes
    // There must be at least two and no more than three available networks
    if (props.networkTypes.length >= 2 && props.networkTypes.length <= 3) {
      // Keep track of selected network types to check for invalid repeats
      var chosenNetworks = [];
      availableNetworkOptions.current = props.networkTypes.map(function (networkTypeInteger) {
        //Make sure the value is not a repeat
        if (chosenNetworks.indexOf(networkTypeInteger) === -1) {
          // The value is valid. add it to the available network types
          chosenNetworks.push(networkTypeInteger);

          switch (networkTypeInteger) {
            case 0:
              console.log("adding mainnet");
              return /*#__PURE__*/_react["default"].createElement("option", {
                value: "mainnet",
                key: "mainnet"
              }, "mainnet");

            case 1:
              console.log("Adding stagenet");
              return /*#__PURE__*/_react["default"].createElement("option", {
                value: "stagenet",
                key: "stagenet"
              }, "stagenet");

            case 2:
              console.log("Adding testnet");
              return /*#__PURE__*/_react["default"].createElement("option", {
                value: "testnet",
                key: "testnet"
              }, "testnet");

            default:
              throw "networkTypes values must be between 0 and 2";
          }
        } else {
          throw "The networkTypes array must not contain duplicate values";
        }
      });
    } else {
      throw "networkTypes must have exactly two or three elements";
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "network-select"
  }, "Choose a Monero network"), /*#__PURE__*/_react["default"].createElement("select", {
    name: "network-select",
    className: "network-select",
    onChange: handleSelect
  }, availableNetworkOptions.current));
}
// In place of deprecated babel polyfills
import "./MoneroNetworkSelector.css";

import React from "react";
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

export function MoneroNetworkSelector(props) {
  console.log("Rendering networkselector");
  
  /*
   * props:
   *
   * networkTypes (optional)
   * onNetworkTypeChanged (optional)
   */ 
  
  const handleSelect = function(event) {
    console.log("You chose the network type: " + event.target.value);

    if (event.target.value === "mainnet") {
      props.onNetworkTypeChanged(0);
    } else if (event.target.value === "stagenet") {
      props.onNetworkTypeChanged(1);
    } else if (event.target.value === "testnet") {
      props.onNetworkTypeChanged(2);
    } else {
      thow("Something went wrong with network selection");
    }

  }
  
  let availableNetworkOptions = [];
  
  // if networkTypes prop is not supplied, default to allowing a choice from among all three networks
  if(props.networkTypes === undefined) {
    //default to all three networks
    availableNetworkOptions = [
      <option
        value = "mainnet"
        key = "mainnet"
      >
        mainnet
      </option>,
      <option
        value = "stagenet"
        key = "stagenet"
      >
        stagenet
      </option>,
      <option
        value = "testnet"
        key = "testnet"
      >
       testnet
      </option>
    ]
  } else {
    // Sanity check networkTypes
    // There must be at least two and no more than three available networks
    if(props.networkTypes.length >= 2 && props.networkTypes.length <= 3) {
    // Keep track of selected network types to check for invalid repeats
      let chosenNetworks = [];
      availableNetworkOptions = props.networkTypes.map(networkTypeInteger => {
        //Make sure the value is not a repeat
        if(chosenNetworks.indexOf(networkTypeInteger) === -1){
          // The value is valid. add it to the available network types
          chosenNetworks.push(networkTypeInteger);
          switch(networkTypeInteger) {
            case 0:
              return (
                <option
                  value = "mainnet"
                  key = "mainnet"
                >
                  mainnet
                </option>
              )
            case 1:
              return (
                <option
                  value = "stagenet"
                  key = "stagenet"
                >
                  stagenet
                </option>
              )
            case 2:
              return (
                <option
                  value = "testnet"
                  key = "testnet"
                >
                  testnet
                </option>
              )
            default:
              throw("networkTypes values must be between 0 and 2");
          }
        } else {
            throw("The networkTypes array must not contain duplicate values");
        }

      })
    } else {
      throw("networkTypes must have exactly two or three elements");
    }
  }
  
  return (
    <div className = "network_selector_container">
      <label htmlFor="network_select">Network: </label>
      <select 
        name = "network-select"
        onChange = {handleSelect}>
          {availableNetworkOptions}
      </select>
    </div>
  )
}
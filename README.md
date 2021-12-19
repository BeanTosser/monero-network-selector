# MoneroNetworkSelector
A React UI drop-down menu that allows end users of react-based Monero web applications to select which Monero network to use the application with.

## Usage
These instructions only apply to independent use of the MoneroNetworkSelector UI component. If you want to use the MoneroNetworkSelector in conjunction with the ConnectionManager UI, use the [NetworkConnectionCoordinator component](https://ijli8s8ej8j.com/) (only available for [monero-javascript](https://github.com/monero-ecosystem/monero-javascript) applications)

### Props
The MoneroNetworkSelector component takes three props: **setNetworkType**, **networkTypes**, and **className**.  
  **setNetworkType**(optional): A function to handle the user changing the current network.
  **networkTypes**(optional): An array of integer values between 0 and 2. Each integer corresponds to a network type:  

  0: mainnet  
  1: stagenet  
  2: testnet  
  
  The array specifies which networks the user should be able to choose from. A valid networkTypes array must contain exactly two or three integer elements between 0 and 2. The order of the values in the array determines the order in which they appear in the rendered network selector component.
  Some examples of valid networkTypes arrays:  
  * [0, 2]  
  * [0, 1, 2]  
  * [2, 1]  
  
Some examples of invalid networkTypes arrays:  
  * [0, 0, 1] (repeat values are not allowed)  
  * [8, 2] (only the values 0, 1, and 2 are valid)  
  * [0] (the array must have at least two elements)  
  * [0, 2, 1, 4] (the array must have no more than three elements)  
  
  The network selector will default to listing all three networks in the order 0(mainnet), 1(stagenet), 2(testnet) if it does not receive the **networkTypes** prop.  

**notes on styling the network selector**: The entire network selector element has the class name "network_selector_container". The network selector component contains a "label" element and a "select" element. All three elements can be styled as follows:

```
.network_selector_container {
  [your styles here]
}

.network_selector_container > label {
  [your styles here]
}

.network_selector_container > select {
  appearance: none;
  --webkit-appearance: none;
  --moz-appearance: none;
  [your styles here]
}

```
 

### Instructions
&nbsp;&nbsp;1\. Install the MoneroNetworkSelector module from npm:

```
npm install monero-network-selector
```
&nbsp;&nbsp;2\. Import the MoneroNetworkSelector component into the javascript file that you intend to use the MoneroNetworkSelector UI in:

```
import {MoneroNetworkSelector} from "monero-network-selector"
```

**Note that this is a named import and must therefore be surrounded in curly braces "{}" as in the example.**  

&nbsp;&nbsp;3\. Pass the required props to the MoneroNetworkSelector component in your JSX implementation:

```
return(
// Your JSX here
<MoneroNetworkSelector 
  setNetworkType = {setNetworkType}
  networkTypeFlags = {[0,1]}
/>
// Your JSX here
)
```
&nbsp;&nbsp;4\. Implement the setNetworkType function in your javascript file. The function must accept a number value of 0, 1, or 2 as an argument. For example:

```
const setNetworkType = function(networkType) {
  switch(networkType){
    case 0:
      console.log("Using Mainnet");
      break;
    case 1:
      console.log("Using Stagenet");
      break;
    case 2:
      console.log("Using Testnet");
      break;
  }
}
```

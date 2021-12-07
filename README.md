# MoneroNetworkSelector
A React UI drop-down menu that allows end users of react-based Monero web applications to select which Monero network to use the application with.

## Usage
These instructions only apply to independent use of the NetworkSelector UI component. If you want to use the NetworkSelector in conjunction with the ConnectionManager UI, use the [NetworkConnectionCoordinator component](https://ijli8s8ej8j.com/) (only available for [monero-javascript](https://github.com/monero-ecosystem/monero-javascript) applications)

### Props
The NetworkSelector component takes two props:
1. <b>setNetworkType</b>(required): A function to handle the user changing the current network
2. <b>networkTypes</b>(optional): An array of integer values between 0 and 2. Each integer corresponds to a network type:
  0: mainnet
  1: stagenet
  2: testnet
  
  The array specifies which networks the user should be able to choose from. A valid networkTypes array must contain exactly two or three integer elements between 0 and 2. 
  Some examples of valid networkTypes arrays:
  * [0, 2]
  * [0, 1, 2]
  * [2, 1]
  Some examples of invalid networkTypes arrays:
  * [0, 0, 1] (repeat values are not allowed)
  * [8, 2] (only the values 0, 1, and 2 are valid)
  * [0] (the array must have at least two elements)
  * [0, 2, 1, 4] (the array must have no more than three elements)
  Omitting the networkTypes prop will cause the NetworkSelector component to allow the user to choose from among all three Monero networks by default.

### Instructions
1. Place the NetworkSelector.js and NetworkSelector.css files into an appropriate location in your React project. For example: `src/components`. If your project uses typescript, place the NetworkSelecter.d.ts file in the same directory.
2. Import the NetworkSelector component into the javascript file that you intend to use the NetworkSelector UI in:
`import NetworkSelector from "./components/NetworkSelector.js"`
3. Pass the required props to the NetworkSelector component in your JSX implementation:
```
return(
// Your JSX here
<NetworkSelector 
  setNetworkType = {setNetworkType}
  networkTypeFlags = {[0,1]}
/>
// Your JSX here
)
```
4. Implement the setNetworkType function in your javascript file. The function must accept a number value of 0, 1, or 2 as an argument. For example:

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

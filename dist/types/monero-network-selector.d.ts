import React from "react";

/*
 * This type definition has not yet been submitted to definitelyTyped;
 * Therefore, it is made available here until incorporated into the 
 * definitelyTyped repository.
 */

declare module 'monero-network-selector' {
  export function MoneroNetworkSelector(props: MoneroNetworkSelectorProps): JSX.Element;
  export type MoneroNetworkSelectorProps = {
    networkTypes?: number[],
    onNetworkTypeChanged?: (n: number) => void
  }
}
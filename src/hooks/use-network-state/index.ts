/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffect, useState } from "react";
import { isBrowser } from "../..";
import { off, on } from "../../functions";
import { NavigatorWithConnection, NetworkInformation, UseNetworkState } from "./types";

const navigator = isBrowser ? (window.navigator as NavigatorWithConnection) : undefined;
const conn: NetworkInformation | undefined =
  navigator && (navigator.connection || navigator.mozConnection || navigator.webkitConnection);

/**
 * Returns the network information state
 */
function getConnectionState(previousState?: UseNetworkState): UseNetworkState {
  const online = navigator?.onLine;
  const previousOnline = previousState?.online;

  return {
    online,
    previous: previousOnline,
    since: online === previousOnline ? previousState?.since : new Date(),
    downlink: conn?.downlink,
    downlinkMax: conn?.downlinkMax,
    effectiveType: conn?.effectiveType,
    rtt: conn?.rtt,
    saveData: conn?.saveData,
    type: conn?.type,
  };
}

/**
 * Tracks the state of browser's network connection.
 *
 * @example
 * ```tsx
 * import { useNetworkState } from '@feedzai/js-utilities/hooks';
 * ...
 * const onlineState = useNetworkState();
 *
 * return (
 *  <div>
 *    <div>Your current internet connection state:</div>
 *    <pre>{JSON.stringify(onlineState, null, 2)}</pre>
 *  </div>
 * );
 * ```
 */
export function useNetworkState(initialState?: UseNetworkState): UseNetworkState {
  const [state, setState] = useState(initialState ?? getConnectionState);

  useEffect(() => {
    const handleStateChange = () => {
      setState(getConnectionState);
    };

    on(window, "online", handleStateChange, { passive: true });
    on(window, "offline", handleStateChange, { passive: true });

    // it is quite hard to test it in jsdom environment maybe will be improved in future
    /* istanbul ignore next */
    if (conn) {
      on(conn, "change", handleStateChange, { passive: true });
    }

    return () => {
      off(window, "online", handleStateChange);
      off(window, "offline", handleStateChange);

      /* istanbul ignore next */
      if (conn) {
        off(conn, "change", handleStateChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

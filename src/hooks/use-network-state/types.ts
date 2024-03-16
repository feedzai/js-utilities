/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Network Information Object
 */
export interface NetworkInformation extends EventTarget {
  readonly downlink: number;
  readonly downlinkMax: number;
  readonly effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  readonly rtt: number;
  readonly saveData: boolean;
  readonly type:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "none"
    | "wifi"
    | "wimax"
    | "other"
    | "unknown";
}

export interface UseNetworkState {
  /**
   * @desc Whether browser connected to the network or not.
   */
  online: boolean | undefined;
  /**
   * @desc Previous value of `online` property. Helps to identify if browser
   * just connected or lost connection.
   */
  previous: boolean | undefined;
  /**
   * @desc The {Date} object pointing to the moment when state change occurred.
   */
  since: Date | undefined;
  /**
   * @desc Effective bandwidth estimate in megabits per second, rounded to the
   * nearest multiple of 25 kilobits per seconds.
   */
  downlink: NetworkInformation["downlink"] | undefined;
  /**
   * @desc Maximum downlink speed, in megabits per second (Mbps), for the
   * underlying connection technology
   */
  downlinkMax: NetworkInformation["downlinkMax"] | undefined;
  /**
   * @desc Effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'.
   * This value is determined using a combination of recently observed round-trip time
   * and downlink values.
   */
  effectiveType: NetworkInformation["effectiveType"] | undefined;
  /**
   * @desc Estimated effective round-trip time of the current connection, rounded
   * to the nearest multiple of 25 milliseconds
   */
  rtt: NetworkInformation["rtt"] | undefined;
  /**
   * @desc {true} if the user has set a reduced data usage option on the user agent.
   */
  saveData: NetworkInformation["saveData"] | undefined;
  /**
   * @desc The type of connection a device is using to communicate with the network.
   * It will be one of the following values:
   *  - bluetooth
   *  - cellular
   *  - ethernet
   *  - none
   *  - wifi
   *  - wimax
   *  - other
   *  - unknown
   */
  type: NetworkInformation["type"] | undefined;
}

export type NavigatorWithConnection = Navigator &
  Partial<Record<"connection" | "mozConnection" | "webkitConnection", NetworkInformation>>;

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
export type VoteOption = "yes" | "no";

export interface BalanceResponse {
  locked_balance: [number, VoterInfo][];
  pools: BalancePoolInfo[];
  [k: string]: unknown;
}
export interface VoterInfo {
  balance: Uint128;
  vote: VoteOption;
  [k: string]: unknown;
}
export interface BalancePoolInfo {
  balance: Uint128;
  days: number;
  share: Uint128;
  unlock: number;
  [k: string]: unknown;
}

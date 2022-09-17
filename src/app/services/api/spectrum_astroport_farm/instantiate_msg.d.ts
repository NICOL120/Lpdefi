/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

/**
 * This structure describes the parameters for creating a contract.
 */
export interface InstantiateMsg {
  /**
   * the base reward token contract address
   */
  base_reward_token: string;
  /**
   * The compound proxy contract address
   */
  compound_proxy: string;
  /**
   * The controller address to execute compound
   */
  controller: string;
  /**
   * The performance fee
   */
  fee: Decimal;
  /**
   * The fee collector contract address
   */
  fee_collector: string;
  /**
   * The LP token contract address
   */
  liquidity_token: string;
  /**
   * The owner address
   */
  owner: string;
  /**
   * The LP staking generator contract address
   */
  staking_contract: string;
  [k: string]: unknown;
}

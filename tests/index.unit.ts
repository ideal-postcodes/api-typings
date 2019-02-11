/**
 * Notes on Testing
 *
 * This test suite doesn't run code in lib/. Instead it grabs typings defined
 * if lib/api-typings and assigns pre-generated fixtures from the
 * Ideal-Postcodes.co.uk API (see github.com/ideal-postcodes/api-fixtures).
 *
 * If types are defined properly then the type assignments to fixtures defined
 * in this file will compile without issue.
 *
 * The describe/it mocha syntax, while not actually testing an code (as there
 * is none in lib/) is a means to document which interfaces have been tested.
 */

import { assert } from "chai";
import { postcodes, addresses, errors } from "@ideal-postcodes/api-fixtures";
import {
  ApiBaseResponse,
  ApiErrorResponse,
  AddressNumber,
  Address
} from "../lib/index";

describe("Typings", () => {
  describe("ApiBaseResponse", () => {
    it("allows assignment to 200 and non-200 responses", () => {
      let response: ApiBaseResponse;
      response = postcodes.success.body;
      response = errors.balanceDepleted.body;
    });
  });

  describe("ApiErrorResponse", () => {
    it("allows assignment to non-200 responses", () => {
      let error: ApiErrorResponse;
      error = errors.balanceDepleted.body;
      error = errors.dailyIpRateLimitReached.body;
      error = errors.dailyLimitReached.body;
      error = errors.invalidKey.body;
      error = errors.invalidUrl.body;
    });
  });

  describe("AddressNumber", () => {
    it("can be assigned to number or empty string", () => {
      const n: AddressNumber = 8;
      const s: AddressNumber = "";
    });
  });

  describe("Address", () => {
    it("can be assigned to PAF address response", () => {
      let address: Address;
      addresses.success.body.result.hits.forEach(a => (address = a));
    });

    it("can be assigned to MR address response", () => {
      let mrAddress: Address;
      addresses.multipleResidence.success.body.result.hits.forEach(
        a => (mrAddress = a)
      );
    });
  });
});

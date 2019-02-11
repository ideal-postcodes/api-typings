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
import {
  postcodes,
  addresses,
  autocomplete,
  udprn,
  umprn,
  keys,
  errors,
} from "@ideal-postcodes/api-fixtures";

import {
  ApiBaseResponse,
  ApiErrorResponse,
  AddressNumber,
  Address,
  UmprnAddress,
  PostcodeResults,
  PostcodesResponse,
  AddressResults,
  AddressQueryResponse,
  SuggestionResults,
  AddressSuggestion,
  AddressAutocompleteResponse,
  UdprnResponse,
  UmprnResponse,
  KeyStatus,
  PublicKeyResponse,
} from "../lib/index";

// Aliases for test fixtures
const postcodeResults = postcodes.success.body.result;
const postcodeMrResults = postcodes.multipleResidence.success.body.result;
const mrAddressQueryHits = addresses.multipleResidence.success.body.result.hits;

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
      error = udprn.notFound.body;
      error = umprn.notFound.body;
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
      mrAddressQueryHits.forEach(a => (mrAddress = a));
    });
  });

  describe("UmprnAddress", () => {
    it("Can be assigned to a MR address", () => {
      let address: UmprnAddress;
      mrAddressQueryHits.forEach(a => (address = a));
    });
  });

  describe("PostcodeResults", () => {
    it("can be assigned to a list of addresses", () => {
      const results: PostcodeResults = postcodeResults;
    });

    it("can be assigned to a list of multiple residence addresses", () => {
      const results: PostcodeResults = postcodeMrResults;
    });
  });

  describe("PostcodesResponse", () => {
    it("can be assigned to a postcode lookup", () => {
      const response: PostcodesResponse = postcodes.success.body;
    });
    it("can be assigned to a paginated multiple residence lookup", () => {
      const response: PostcodesResponse =
        postcodes.multipleResidence.success.body;
    });
  });

  describe("AddressResults", () => {
    it("can be assigned to a list of address results", () => {
      const results: AddressResults = addresses.success.body.result.hits;
    });
    it("can be assigned to a list of multiple residence address results", () => {
      const results: AddressResults =
        addresses.multipleResidence.success.body.result.hits;
    });
    it("can be assigned to an empty result set", () => {
      const results: AddressResults = addresses.empty.body.result.hits;
    });
  });

  describe("AddressQueryResponse", () => {
    it("can be assigned to a successful query", () => {
      const response: AddressQueryResponse = addresses.success.body;
    });
    it("can be assigned to a successful Multiple Residence query", () => {
      const response: AddressQueryResponse =
        addresses.multipleResidence.success.body;
    });
    it("can be assigned to an empty query", () => {
      const response: AddressQueryResponse = addresses.empty.body;
    });
  });

  describe("SuggestionResults", () => {
    it("can be assigned to an address suggestion response", () => {
      const response: SuggestionResults = autocomplete.success.body.result.hits;
    });
    it("can be assigned to a Multiple Residence address suggestion response", () => {
      const response: SuggestionResults =
        autocomplete.multipleResidence.success.body.result.hits;
    });
    it("can be assigned to an empty suggestion response", () => {
      const response: SuggestionResults = autocomplete.empty.body.result.hits;
    });
  });

  describe("AddressAutocompleteResponse", () => {
    it("can be assigned to an address suggestion response", () => {
      const response: AddressAutocompleteResponse = autocomplete.success.body;
    });
    it("can be assigned to a Multiple Residence address suggestion response", () => {
      const response: AddressAutocompleteResponse =
        autocomplete.multipleResidence.success.body;
    });
    it("can be assigned to an empty suggestion response", () => {
      const response: AddressAutocompleteResponse = autocomplete.empty.body;
    });
  });

  describe("AddressSuggestion", () => {
    it("can be assigned to an address suggestion", () => {
      let suggestion: AddressSuggestion;
      autocomplete.success.body.result.hits.forEach(s => (suggestion = s));
    });
    it("can be assigned to a Multiple Residence suggestion", () => {
      let suggestion: AddressSuggestion;
      autocomplete.multipleResidence.success.body.result.hits.forEach(
        s => (suggestion = s)
      );
    });
  });

  describe("UdprnResponse", () => {
    it("can be assigned to a UDPRN response", () => {
      const response: UdprnResponse = udprn.success.body;
    });
  });

  describe("UmprnResponse", () => {
    it("can be assigned to a UMPRN response", () => {
      const response: UmprnResponse = umprn.success.body;
    });
  });

  describe("Purchase", () => {
    it("can be assigned to an active purchase");
    it("can be assigned to an inactive purchase (i.e. opened_at = null)");
  });

  describe("Key", () => {
    it("can be assigned to a private key result");
  });

  describe("PrivateKeyResponse", () => {
    it("can be assigned to a private key response");
  });
});

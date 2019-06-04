/**
 * ## Api Base Response
 *
 * Basic API response shape provided by the API.
 *
 * Each API response is typically composed, at minimum, of:
 * - `code` or a number which points to a particular response type
 * - `message` a human readable string which indicates the nature of the response
 */
export interface ApiBaseResponse {
  /**
   * Custom response code returned by API.
   *
   * The response codes first 3 digits, reflects the HTTP status. e.g. `2000` would accompany a `200 OK` HTTP status.
   *
   * We do not recommend performing `>` or `<` type comparison operations on `code` even though its type is `number`. This prohibits us from producing more than 10 response codes per HTTP status.
   */
  code: number;

  /**
   * Human readable success or error message returned by API.
   */
  message: string;
}

/**
 * ## API Error Response Body
 *
 * API response returned in the event of a (non-200) API response.
 *
 * An error has occurred if the HTTP status code is not 200. Errors can range from the a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).
 */
export interface ApiErrorResponse extends ApiBaseResponse {}

/**
 * ## Api Response With Result
 *
 * @hidden
 *
 * A generic interface used to construct useful API type definitions
 */
interface ApiResponseWithResult<T> extends ApiBaseResponse {
  /**
   * Result or set of results
   */
  result: T;
}

/**
 * ## Address Number
 *
 * Some numbers which may not be populated on a premise will return empty string `""` instead of `null` or `0`.
 *
 * Instances of `AddressNumber` include:
 * - Longitude, Latitude
 * - Eastings, Northings
 * - UMPRN
 */
export type AddressNumber = number | string;

/**
 * ## Address
 *
 * Standard Address object returned by the API that represents a single premise on Royal Mail's Postcode Address File.
 *
 * See [ideal-postcodes.co.uk/documentation/paf-data](https://ideal-postcodes.co.uk/documentation/paf-data) for a glossary of PAF premise data attributes.
 *
 * Take note of:
 * - Numbers have type `AddressNumber`. This means in the event they are not populated, they return empty string (instead of `null`)
 * - String fields which are not populated (i.e. have no value) return empty string `""`
 * - API Keys with Multiple Residence enabled may also return a `umprn` attribute
 */
export interface Address {
  /**
   * Postcode
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#postcode](https://ideal-postcodes.co.uk/documentation/paf-data/#postcode)
   */
  postcode: string;

  /**
   * Inward Postcode
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#postcode_inward](https://ideal-postcodes.co.uk/documentation/paf-data/#postcode_inward)
   */
  postcode_inward: string;

  /**
   * Outward Postcode
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#postcode_outward](https://ideal-postcodes.co.uk/documentation/paf-data/#postcode_outward)
   */
  postcode_outward: string;

  /**
   * Post Town
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#post_town](https://ideal-postcodes.co.uk/documentation/paf-data/#post_town)
   */
  post_town: string;

  /**
   * Dependant Locality
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#dependant_locality](https://ideal-postcodes.co.uk/documentation/paf-data/#dependant_locality)
   */
  dependant_locality: string;

  /**
   * Double Dependant Locality
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#double_dependant_locality](https://ideal-postcodes.co.uk/documentation/paf-data/#double_dependant_locality)
   */
  double_dependant_locality: string;

  /**
   * Thoroughfare
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#thoroughfare](https://ideal-postcodes.co.uk/documentation/paf-data/#thoroughfare)
   */
  thoroughfare: string;

  /**
   * Dependant Thoroughfare
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#dependant_thoroughfare](https://ideal-postcodes.co.uk/documentation/paf-data/#dependant_thoroughfare)
   */
  dependant_thoroughfare: string;

  /**
   * Building Number
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#building_number](https://ideal-postcodes.co.uk/documentation/paf-data/#building_number)
   */
  building_number: string;

  /**
   * Building Name
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#building_name](https://ideal-postcodes.co.uk/documentation/paf-data/#building_name)
   */
  building_name: string;

  /**
   * Sub Building Name
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#sub_building_name](https://ideal-postcodes.co.uk/documentation/paf-data/#sub_building_name)
   */
  sub_building_name: string;

  /**
   * PO Box
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#po_box](https://ideal-postcodes.co.uk/documentation/paf-data/#po_box)
   */
  po_box: string;

  /**
   * Department Name
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#department_name](https://ideal-postcodes.co.uk/documentation/paf-data/#department_name)
   */
  department_name: string;

  /**
   * Organisation Name
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#organisation_name](https://ideal-postcodes.co.uk/documentation/paf-data/#organisation_name)
   */
  organisation_name: string;

  /**
   * UDPRN
   *
   * Unique ID provided to a premise in Royal Mail's Postcode Address File.
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#udprn_code](https://ideal-postcodes.co.uk/documentation/paf-data/#udprn_code)
   */
  udprn: number;

  /**
   * UMPRN
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#umprn_code](https://ideal-postcodes.co.uk/documentation/paf-data/#umprn_code)
   */
  umprn?: AddressNumber;

  /**
   * Postcode Type
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#postcode_type](https://ideal-postcodes.co.uk/documentation/paf-data/#postcode_type)
   */
  postcode_type: string;

  /**
   * SU Organisation Indicator
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#su_organisation_indicator](https://ideal-postcodes.co.uk/documentation/paf-data/#su_organisation_indicator)
   */
  su_organisation_indicator: string;

  /**
   * Delivery Point Suffix
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#delivery_point_suffix](https://ideal-postcodes.co.uk/documentation/paf-data/#delivery_point_suffix)
   */
  delivery_point_suffix: string;

  /**
   * Address Line 1
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#line_1](https://ideal-postcodes.co.uk/documentation/paf-data/#line_1)
   */
  line_1: string;

  /**
   * Address Line 2
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#line_2](https://ideal-postcodes.co.uk/documentation/paf-data/#line_2)
   */
  line_2: string;

  /**
   * Address Line 3
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#line_3](https://ideal-postcodes.co.uk/documentation/paf-data/#line_3)
   */
  line_3: string;

  /**
   * Premise
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#premise](https://ideal-postcodes.co.uk/documentation/paf-data/#premise)
   */
  premise: string;

  /**
   * Longitude
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#longitude](https://ideal-postcodes.co.uk/documentation/paf-data/#longitude)
   */
  longitude: AddressNumber;

  /**
   * Latitude
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#latitude](https://ideal-postcodes.co.uk/documentation/paf-data/#latitude)
   */
  latitude: AddressNumber;

  /**
   * Eastings
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#eastings](https://ideal-postcodes.co.uk/documentation/paf-data/#eastings)
   */
  eastings: AddressNumber;

  /**
   * Northings
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#northings](https://ideal-postcodes.co.uk/documentation/paf-data/#northings)
   */
  northings: AddressNumber;

  /**
   * Country
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#country](https://ideal-postcodes.co.uk/documentation/paf-data/#country)
   */
  country: string;

  /**
   * Traditional County
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#traditional_county](https://ideal-postcodes.co.uk/documentation/paf-data/#traditional_county)
   */
  traditional_county: string;

  /**
   * Administrative County
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#administrative_county](https://ideal-postcodes.co.uk/documentation/paf-data/#administrative_county)
   */
  administrative_county: string;

  /**
   * Postal County
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#postal_county](https://ideal-postcodes.co.uk/documentation/paf-data/#postal_county)
   */
  postal_county: string;

  /**
   * County
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#county](https://ideal-postcodes.co.uk/documentation/paf-data/#county)
   */
  county: string;

  /**
   * District
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#district](https://ideal-postcodes.co.uk/documentation/paf-data/#district)
   */
  district: string;

  /**
   * Ward
   *
   * [ideal-postcodes.co.uk/documentation/paf-data/#ward](https://ideal-postcodes.co.uk/documentation/paf-data/#ward)
   */
  ward: string;
}

/**
 * ## Umprn Address
 *
 * Standard Address object returned by the API that represents a single Multiple Residence premise on Royal Mail's Postcode Address File.
 *
 * UMPRN addresses will always return a UMPRN attribute.
 *
 * API Documentation for `umprn/:umprn`: [ideal-postcodes.co.uk/documentation/umprn](https://ideal-postcodes.co.uk/documentation/umprn).
 */
export interface UmprnAddress extends Address {
  umprn: number;
}

/**
 * ## Postcode Results
 *
 * Postcode results are represented as an array of addresses
 */
export type PostcodeResults = Address[];

/**
 * ## Postcodes Lookup Response Body
 *
 * Response body returned from a successful postcode lookup API request.
 *
 * API Documentation for `postcodes/:postcode`: [ideal-postcodes.co.uk/documentation/postcodes#postcode](https://ideal-postcodes.co.uk/documentation/postcodes#postcode).
 *
 * Example Request:
 *
 * [api.ideal-postcodes.co.uk/v1/postcodes/SW1A2AA](https://api.ideal-postcodes.co.uk/v1/postcodes/SW1A2AA?api_key=iddqd)
 */
export interface PostcodesResponse
  extends ApiResponseWithResult<PostcodeResults>,
    PossiblePaginatedResponse {}

/**
 * ## Address Results
 *
 * Address queries will return a list of Address premises.
 */
export type AddressResults = Address[];

interface AddressQueryResults extends PaginatedResponse {
  hits: AddressResults;
}

/**
 * ## Address Query Response Body
 *
 * Response body returned from a successful address query
 *
 * Note that the address query API will not return a 404 response if no results are found (unlike the postcode lookup API). Instead an empty array is returned.
 *
 * API Documentation for `addresses?query=`: [ideal-postcodes.co.uk/documentation/addresses#query](https://ideal-postcodes.co.uk/documentation/addresses#query).
 *
 * Example Request:
 *
 * [api.ideal-postcodes.co.uk/v1/addresses?q=10 downing street london](https://api.ideal-postcodes.co.uk/v1/addresses?api_key=iddqd&q=10%20downing%20street%20london)
 */
export interface AddressQueryResponse
  extends ApiResponseWithResult<AddressQueryResults> {}

/**
 * ## PossiblePaginatedApiResponseWithResult
 *
 * @hidden
 *
 * Some requests may expose the pagination elements `page`, `limit`, and `total` such as an address query, or postcode lookup with the multiple residence dataset.
 */
interface PossiblePaginatedResponse {
  /**
   * Current page number.
   *
   * Exposed in the event a request can be paginated.
   */
  page?: number;

  /**
   * Total number of results.
   *
   * Exposed in the event a request can be paginated.
   */
  total?: number;

  /**
   * Maximum number of results per page.
   *
   * Exposed in the event a request can be paginated.
   */
  limit?: number;
}

/**
 * PaginatedResponse
 *
 * @hidden
 *
 * Enforces pagination attributes on interface
 */
interface PaginatedResponse {
  /**
   * Current page number
   */
  page: number;

  /**
   * Total number of results.
   */
  total: number;

  /**
   * Maximum number of results per page.
   */
  limit: number;
}

/**
 * ## Suggestion URLs
 *
 * The address suggestion API returns a object containing URLs which point to the full premise endpoint.
 */
export interface SuggestionUrls {
  /**
   * Relative link to resolve address by its UDPRN e.g. `"/v1/udprn/7944730"`
   */
  udprn: string;

  /**
   * Relative link to resolve address by its UMPRN e.g. `"/v1/umprn/11168744"`
   */
  umprn?: string;
}

/**
 * ## Suggestion Results
 *
 * Autocomplete requests will return a list of address suggestion objects inside a hits attribute
 */
export type AddressSuggestionResults = AddressSuggestion[];

/**
 * ## Autocomplete Hits
 *
 * Autocomplete requests will return a list of address suggestion objects inside a hits attribute.
 */
interface AutocompleteHits {
  hits: AddressSuggestionResults;
}

/**
 * ## Address Autocomplete Response Body
 *
 * Response body returned from a successful address autocomplete or address suggestion request.
 *
 * API Documentation for `autocomplete/addresses?query=`: [ideal-postcodes.co.uk/documentation/autocomplete#query](https://ideal-postcodes.co.uk/documentation/autocomplete#query).
 *
 * Example Request:
 *
 * [api.ideal-postcodes.co.uk/v1/autocomplete/addresses?q=10 downin](https://api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=10%20downin)
 */
export interface AddressSuggestionResponse
  extends ApiResponseWithResult<AutocompleteHits> {}

/**
 * ## Address Suggestion
 *
 * The address suggesetion object represents premise suggestion given an autocomplete query. It contains the suggestion string, which alludes to the premise as well as a series of IDs and endpoints to resolve the full premise adddress.
 */
export interface AddressSuggestion {
  /**
   * Suggestion for your given query, represented as a partial address.
   */
  suggestion: string;

  /**
   * Relative paths to resolve premise by UDPRN or UMPRN.
   */
  urls: SuggestionUrls;

  /**
   * UDPRN of suggestion.
   */
  udprn: number;

  /**
   * UMPRN of suggestion.
   */
  umprn?: number;
}

/**
 * ## Udprn Response Body
 *
 * Response body returned from a successful UDPRN request.
 *
 * API Documentation for `udprn/:udprn`: [ideal-postcodes.co.uk/documentation/udprn](https://ideal-postcodes.co.uk/documentation/udprn).
 *
 * Example Request:
 *
 * [api.ideal-postcodes.co.uk/v1/udprn/8](https://api.ideal-postcodes.co.uk/v1/udprn/8?api_key=iddqd)
 */
export interface UdprnResponse extends ApiResponseWithResult<Address> {}

/**
 * ## Umprn Response
 *
 * Response body returned from a successful UMPRN request.
 *
 * API Documentation for `umprn/:umprn`: [ideal-postcodes.co.uk/documentation/umprn](https://ideal-postcodes.co.uk/documentation/umprn).
 *
 * Example Request:
 *
 * [api.ideal-postcodes.co.uk/v1/umprn/50199115](https://api.ideal-postcodes.co.uk/v1/umprn/50199115?api_key=iddqdmr)
 */
export interface UmprnResponse extends ApiResponseWithResult<UmprnAddress> {}

/**
 * ## Daily Limit
 *
 * Daily usage limit configuration and status for API Key.
 */
export interface DailyLimit {
  /**
   * Maximum number of requests permitted on key.
   */
  limit: number | null;

  /**
   * Number of requests performed today which count towards daily limit.
   */
  consumed: number;
}

/**
 * ## Individual Limit
 *
 * Individual daily IP Limit configuration for API Key.
 */
export interface IndividualLimit {
  /**
   * Maximum number of requests for a given IP Address per day.
   */
  limit: number | null;
}

/**
 * ## Notifications Configuration
 *
 * Email notification configuration for API Key.
 */
export interface NotificationsConfiguration {
  /**
   * A list of email addresses to receive notifications for API Key.
   */
  emails: string[];

  /**
   * Whether email notifications are activated for key.
   */
  enabled: boolean;
}

/**
 * ## Automated Topup Configuration
 *
 * Automated top-up configuration for API Key.
 */
export interface AutomatedTopupConfiguration {
  /**
   * Whether automated top-ups have been activated on this key.
   */
  enabled: boolean;
}

/**
 * ## Purchase
 *
 * Represents a purchased batch of lookups on API Key.
 */
export interface Purchase {
  /**
   * The expiry date of purchase. Assigned to `null` if no date is currently set.
   */
  expires: string | null;

  /**
   * Lookups purchased.
   */
  purchased: number;

  /**
   * Lookups consumed.
   */
  consumed: number;
}

/**
 * ## Key
 *
 * Represents private key information returned by the [/keys](https://ideal-postcodes.co.uk/documentation/keys#key) API retrieved with a secret `user_token`.
 */
export interface Key {
  /**
   * Number of lookups remaining on key.
   */
  lookups_remaining: number;

  /**
   * Daily limit configuration and status.
   */
  daily_limit: DailyLimit;

  /**
   * Individual daily IP limit configuration.
   */
  individual_limit: IndividualLimit;

  /**
   * List of permissible URLs.
   */
  allowed_urls: string[];

  /**
   * Email notification configuration.
   */
  notifications: NotificationsConfiguration;

  /**
   * Automated top-up configuration.
   */
  automated_topups: AutomatedTopupConfiguration;

  /**
   * Enumerates current valid purchases.
   */
  current_purchases: Purchase[];
}

/**
 * ## Key Status
 *
 * Represents publicly available information on a key as returned by the [/keys](https://ideal-postcodes.co.uk/documentation/keys#key) API.
 */
export interface KeyStatus {
  available: boolean;
}

/**
 * ## Public Key Response Body
 *
 * Response body returned from a successful API Key availability check.
 *
 * API Documentation for `keys/:key`: [ideal-postcodes.co.uk/documentation/keys#key](https://ideal-postcodes.co.uk/documentation/keys#key).
 *
 * Example Request:
 *
 * [api.ideal-postcodes.co.uk/v1/keys/iddqd](https://api.ideal-postcodes.co.uk/v1/keys/iddqd)
 */
export interface PublicKeyResponse extends ApiResponseWithResult<KeyStatus> {}

/**
 * ## Private Key Response Body
 *
 * Response body returned from a successful API Key information request.
 *
 * API Documentation for `keys/:key?user_token=`: [ideal-postcodes.co.uk/documentation/keys#details](https://ideal-postcodes.co.uk/documentation/keys#details).
 *
 * Example Request:
 *
 * ```
 * api.ideal-postcodes.co.uk/v1/keys/iddqd?user_token=secret
 * ```
 */
export interface PrivateKeyResponse extends ApiResponseWithResult<Key> {}

/**
 * ## Daily Count
 *
 * Represents the transaction usage count of an API Key for a given day
 */
export interface DailyCount {
  /**
   * The day of count
   */
  date: string;
  /**
   * Total number of transactions for a given date
   */
  count: number;
}

/**
 * ## API Usage Results
 *
 * Represents historical daily transaction usage data for a given API Key for a given time interval
 */
export interface KeyUsage {
  /**
   * Start date of data interval
   */
  start: string;
  /**
   * End date of data interval
   */
  end: string;
  /**
   * Total number of lookups performed in time interval
   */
  total: number;

  /**
   * Breakdown of transaction usage by day
   */
  dailyCount: DailyCount[];
}

/**
 * ## Key Usage Body
 *
 * Response body returned from a successful API Key usage request.
 *
 * API Documentation for `keys/:key?user_token=`: [ideal-postcodes.co.uk/documentation/keys#usage](https://ideal-postcodes.co.uk/documentation/keys#usage).
 *
 * Example Request:
 *
 * ```
 * api.ideal-postcodes.co.uk/v1/keys/iddqd/usage?user_token=secret
 * ```
 */
export interface KeyUsageResponse extends ApiResponseWithResult<KeyUsage> {}

/**
 * ## Licensee
 *
 * Represents a licensee returned by the `/licensees` [API](https://ideal-postcodes.co.uk/documentation/licensees).
 */
export interface Licensee {
  /**
   * Unique internal ID for licensee.
   */
  id: string;

  /**
   * Unique Key assigned to licensee. Required to make future API requests for this licensee.
   */

  key: string;

  /**
   * Licensee name.
   */
  name: string;

  /**
   * Licensee address.
   */
  address: string;

  /**
   * Licensee postcode.
   */
  postcode: string;

  /**
   * Date/Time when the licensee was created.
   */
  createdAt: string;

  /**
   * A list of allowed URLs.
   */
  whitelist: string[];

  /**
   * Daily limit configuration for this licensee.
   */
  daily: LicenseeDailyLimit;
}

/**
 * Current licensee daily limit configuration and status.
 */
export interface LicenseeDailyLimit {
  /**
   * Maximum number of lookups a licensee can perform in a day.
   */
  limit: number | null;

  /**
   * Number of lookups performed by licensee today.
   */
  count: number;

  /**
   * Date/Time when the daily limit usage was last updated.
   */
  updatedAt: string;
}

/**
 * ## New Licensee
 *
 * New licensee configuration object. Typically supplied to the `POST /licensees` [API](https://ideal-postcodes.co.uk/documentation/licensees#create)
 */
export interface NewLicensee {
  /**
   * Licensee name.
   */
  name: string;

  /**
   * Licensee address.
   */
  address: string;

  /**
   * Licensee postcode.
   */
  postcode: string;
  /**
   * Allowed URL (whitelist) for licensee.
   */
  whitelist?: string[];
  /**
   * Licensee daily limit configuration.
   */
  daily?: NewLicenseeDailyLimit;
}

export interface NewLicenseeDailyLimit {
  /**
   * Maximum number of requests this licensee can make per day.
   */
  limit: number;
}

/**
 * ## Licensee (Lookup) Response Body
 *
 * Response body returned from a successful licensee query.
 *
 * API Documentation for retrieving `licensees/:licensees`: [ideal-postcodes.co.uk/documentation/licensees#show](https://ideal-postcodes.co.uk/documentation/licensees#show).
 * API Documentation for creating a licensee `POST licensees/`: [ideal-postcodes.co.uk/documentation/licensees#create](https://ideal-postcodes.co.uk/documentation/licensees#create).
 * API Documentation for updating a licencsee `POST licensees/:licensees`: [ideal-postcodes.co.uk/documentation/licensees#update](https://ideal-postcodes.co.uk/documentation/licensees#update).
 *
 * Example Request:
 *
 * ```
 * api.ideal-postcodes.co.uk/v1/licensees/sl_iiijoi932bs8sD?user_token=secret
 * ```
 */
export interface LicenseeResponseBody extends ApiResponseWithResult<Licensee> {}

/**
 * ## Licensees (List) Response Body
 *
 * Response body returned from a successful licensees list query.
 *
 * API Documentation for `licensees`: [ideal-postcodes.co.uk/documentation/licensees#list](https://ideal-postcodes.co.uk/documentation/licensees#list).
 *
 * Example Request:
 *
 * ```
 * api.ideal-postcodes.co.uk/v1/licensees?user_token=secret
 * ```
 */
export interface LicenseesResponseBody
  extends ApiResponseWithResult<Licensee> {}

export interface PaginatedLicenseesList {
  /**
   * List of licensees
   */
  licensees: LicenseesResults;

  /**
   * Indicates there are more licensees after last element of licensees list
   */
  hasMore: boolean;
}

/**
 * Array of licensees
 */
type LicenseesResults = Licensee[];

/**
 * ## Deletion Status
 *
 * Object representing outcome of deletion request
 */
interface DeletionStatus {
  /**
   * Number of deleted records
   */
  deleted: number;
}

/**
 * ## Licensee Cancellation Response Body
 *
 * Response body returned from a successful deletion request.
 *
 * API Documentation for `DELETE licensees/:licensee`: [ideal-postcodes.co.uk/documentation/licensees#delete](https://ideal-postcodes.co.uk/documentation/licensees#delete).
 */
interface DeletionResponseBody extends ApiResponseWithResult<DeletionStatus> {}

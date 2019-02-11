[![CircleCI](https://circleci.com/gh/ideal-postcodes/api-typings.svg?style=svg)](https://circleci.com/gh/ideal-postcodes/api-typings)

# Ideal Postcodes API Typings

## Overview

This repository contains Typescript typings for the Ideal Postcodes API (api.ideal-postcodes.co.uk).

It specifies typings that define:

- The basic JSON objects returned by our APIs (e.g. addresses `Address`, autocomplete suggestions `AddressSuggestion`, API key status `KeyStatus`)
- The overall shape of JSON responses returned by the API (e.g. postcode lookups `PostcodesResponse`, address autocomplete queries `AddressSuggestionResponse`, address search queries `AddressQueryResponse`)

The full documentation for these types can be found at [ideal-postcodes.github.io/api-typings](https://ideal-postcodes.github.io/api-typings).

Typings are exported to `index.d.ts` when published to [npm](https://www.npmjs.com/package/@ideal-postcodes/api-typings). The typings in this repository are defined in `lib/index.ts`.

### Benefits of Typings

This typings repository allows you create Typescript integrations, which gives you the added benefits of static typing. Namely,

- Compile time checks that your library or application appropriately consumes objects and data types returned by our APIs and client libraries
- A foundation for IDEs to provide a richer, more productive environment to develop integrations against our HTTP API and client libraries. API typings facilitate code completion, inline documentation and type checking inside of a supported editor
- The ability to refactor code that integrates against our APIs and client libraries with greater speed and confidence

### Non-Typescript Projects

Your integration does not have to be exclusively Typescript driven to benefit from this typings repository. 

Some IDEs (e.g. Visual Studio, Visual Studio Code or Sublime Text) can use Typescript typings to provide inline code completion and documentation for plain JavaScript files. 

It is also possible to develop a piecemeal, robust Typescript integration against our services and subsequently incorporate it in a larger JavaScript project. Typescript compiles down to plain JavaScript which can conform to ES3 and later. That output can be exported to other JavaScript projects.

### Usage

Install package

```bash
npm install --save-dev @ideal-postcodes/api-typings
```

Import interfaces and other definitions

```javascript
// E.g. Using the address type to 
import { Address } from "ideal-postcodes-typings";
```

## Testing

The testing process involves attempting to compile a test file which assigns [API fixtures](https://github.com/ideal-postcodes/api-fixtures) generated by the API to the interfaces exported by this typings library. The tests will fail to compile if the API fixtures fail to conform to types.

```bash
npm test
```

## Licence

MIT


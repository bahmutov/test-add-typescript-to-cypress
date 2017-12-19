[![Build Status](https://travis-ci.org/bahmutov/test-add-typescript-to-cypress.svg?branch=master)](https://travis-ci.org/bahmutov/test-add-typescript-to-cypress)

> Testing module [add-typescript-to-cypress](https://github.com/bahmutov/add-typescript-to-cypress)

This project shows how Cypress TypeScript definitions can be isolated
from the Jest type definitions to avoid "double definition problem".

See [tsconfig.json](tsconfig.json) and [cypress/tsconfig.json](cypress/tsconfig.json).
You can also lint TypeScript by running

```
npm run check        # checks Jest file
npm run check:cy     # checks Cypress files
```

If you introduce type errors like `cy.foo()` the TS compiler will catch it.

You can run Jest test and Cypress tests

```
npm run unit
npm run cy:run
```

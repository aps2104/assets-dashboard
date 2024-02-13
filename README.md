

## Task

### Background

Limejump manages a number of energy assets on behalf of our customers, such as batteries and gas turbines. We have a portal which customers can log into in order to see information about their contracts and invoices. We want to add a new page to the portal that shows information about their assets.

### What you need to do

Create an 'asset feed dashboard' that shows the following information about each of the customer's assets:

- The name of the asset
- The most recent reading from the asset in kW (i.e. the amount of power the asset is currently producing)
- The highest reading the asset has recently produced in kW

This repo contains a mock API that provides the required information to do this at its `/assets` endpoint, which returns an array of objects that looks like

```js
[
  {
    asset: "Asset 1";
    reading: 123.45;
    timeStamp: "2021-10-08T15:41:00.892+01:00";
  },
  {
    asset: "Asset 1";
    reading: 678.90;
    timeStamp: "2021-10-08T15:39:00.892+01:00";
  },
  {
    asset: "Asset 2";
    reading: 234.56;
    timeStamp: "2021-10-08T15:41:00.892+01:00";
  },
  ...
]
```

(In the above case, Asset 1 has a most recent reading of 123.45kW and a highest reading of 678.90kW.)

A mockup of the required design is in `table_design.pdf`, and more information about styles is in `table_styles.pdf`.

### What you don't need to do

- Write any tests
- Show any pretty loading components while fetching the asset information
- Deal with anything other than a 200 response from the mock API

## Setup

Run `npm install` to install the required dependencies.

To serve the dashboard, run `npm run start`.

To serve the mock API, run `npm run server`. It will start on port 3001 by default.

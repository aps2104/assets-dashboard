For this test you will need to fetch data from a node server and use the data provided to build components which show the following data in a grid:

- The top ten asset data points by value, sorted descending by value
- Average state of charge of the previous 100 data points
- A message displaying the most recent asset data point

You can run the node server with the following command `yarn run server` or `npm run server`. You will find data at the following endpoint: `http://localhost:3001/assets`. This endpoint will return an array of objects with the following shape:

```js
{
  asset: "asset_1";
  reading: 9;
  timeStamp: "2021-10-08T15:41:00.892+01:00";
}
```

The `reading` property refers to the value and is also the state of charge.

Do not worry too much about the design but focus more on structuring your code well and writing readable and testable code.

# Run a report

The Analytics API allows you to query your data through the following single route.

```
https://api.jwplayer.com/v2/sites/{property key}/analytics/queries/
```

!!!important
All [data availability](..) constraints apply to making requests to the Analytics API.
!!!

<br/>

In your platform or language of choice, use the following steps to query your data:

1. In the request route, replace the `{property key}` with your key.
2. Add your secret to authenticate your request.
3. Create a <a href="../api-reference#query-body" target="_blank">query body</a>.
4. Append the query body to your `POST` request.

To help you construct a report, view these [examples of report queries](../example-report-queries). These examples demonstrate both basic and advanced queries that can be run against the Analytics API.

!!!tip
You can also use a [query tool](../run-a-report-with-tools) to run a report or run a report query with [Custom Reports](https://support.jwplayer.com/articles/how-to-use-custom-reports) from your JW Player dashboard
!!!
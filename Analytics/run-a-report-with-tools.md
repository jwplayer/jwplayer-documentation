# Run a report with query tools

JW Player provides you with several options to query the data with the Analytics API. Read each approach and click on the link for the applicable steps to get started.

!!!important
All [data availability](..) constraints apply to making requests to the Analytics API.
!!!

<br/>

| Approach | Description |
| -- | -- |
| [Active Google Sheet](#active-google-sheet) | &bull; No coding<br/>&bull; Simplified querying|
| [PHP samples](#php-samples) | &bull; Minimal coding knowledge needed<br/>&bull; Ability to edit code samples for custom situations<br/><br/>The following relevant files are included:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;[**analytics-example.php**](#php-samples): Preconfigured code to make API calls and write the report to a .csv file<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;[**enriched-videos.php**](#php-samples-enriched-videos) Preconfigured code to create an enriched report with an Enterprise or Developer license|
| [Python sample](#python-sample) | &bull; Minimal coding knowledge needed<br/>&bull; Ability to edit the code sample for custom situations<br/><br/>The following file is included:<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;**analytics-example.py**: Preconfigured code to query data |

<br/>

!!!tip
You can also [query the API](../run-a-report) directly to run a report or run a report query with [Custom Reports](https://support.jwplayer.com/articles/how-to-use-custom-reports) from your JW Player dashboard
!!!

<br/>

<a name="active-google-sheet"></a>

## Active Google Sheet

Use the following steps to query your data:

1. Copy the <a href="https://docs.google.com/spreadsheets/d/1eCeaeolhxn66mX2bmGChgoeDUi-lttru8WPNENvCwoE/edit?usp=sharing" target="_blank">JW Analytics Active Sheet</a> to your Google Drive.
2. In the <strong>Account Info</strong> section, enter your key for the <strong>Property Key</strong> in cell C6.
3. Enter your <strong>Secret</strong> cell C7.
4. In the <strong>Filters</strong> section, select your dimensions and metrics from the drop-down menus. The order of your selections determines the column order in the query results.<br/><br/>If you select more filters than are permitted by your JW Player account license, you will receive an error when running the query. For Enterprise and Developer license customers, additional dimension information is returned in the query results.
5. In the <strong>Date Range</strong> section, enter a <strong>Start Date</strong> and <strong>End Date</strong>.
6. Enter the <strong>Result Limit</strong> to increase or decrease the number of results displayed in the Google Sheet.
7. Click <strong>Run Query</strong>. 

After a few moments, the results of the query display in the Google Sheet, starting from column I. The results are sorted in descending order by the value of the selected metrics.

* * *
<a name="php-samples"></a>

## PHP samples

### Make a query for standard analytics data

Use the following steps to query your data:

1. Download and unzip the <a href="https://github.com/jwplayer/jwdeveloper-platformdemos" target="_blank">jwdeveloper-platformdemos repo</a>.
2. Open <strong>jwdeveloper-platformdemos-master/analytics-api-samples/php-samples/analytics-example.php</strong> in a code editor or text editor.
3. Set the `$body->start_date` to the first date of your query's date range, using the `YYYY-MM-DD` format.
4. Set the `$body->end_date` to the last date of your query's date range, using the `YYYY-MM-DD` format.
5. Set the `$body->dimensions` to the list of dimensions (<a href="../metrics-and-dimensions#dimensions" target="_blank">dimension_id</a>) to include in the query.
6. Set the `$body->metrics` to the list of metric indices (<a href="../metrics-and-dimensions#metrics" target="_blank">metric_id</a>) to include in the query.
7. (Optional) Set the `$body->filter` to the list of <a href="../api-reference#filter" target="_blank">filter indices</a> to include in the query.<br/><br/>If you select more filters than are permitted by your JW Player account license, you will receive an error when running the query.
8. (Optional) Change the value of `$pageLen` to to increase or decrease the number of results returned.
9. (Optional) Update the first argument of `$fpCSV = fopen()` to change the name of the .csv file that is generated.
10. (Optional - Enterprise or Developer license only) Set `$body->include_metadata = 1` to include additional dimension information (<a href="../api-reference#includes" target="_blank">includes</a> and <a href="../api-reference#metadata" target="_blank">metadata</a>) in the query.
11. Save the file.
12. Open a command-line interface (CLI) and navigate to the folder containing <strong>analytics-example.php</strong>.
13. At the CLI prompt, replace the `[property key]` and `[reporting secret]` placeholders and type: `php analytics-example.php [property key] [reporting secret]`.

After a few moments, status information appears in the CLI which includes the remaining requests that can be made to the Analytics API and a .csv file is created in the same folder as the <strong>analytics-example.php</strong> file.

<br/>

#### Sample query body

The following sample query body returns the total number of plays for each of the top two countries (`$pageLen=2` and `country_code`) within the date range of June 1, 2017 - June 2, 2017. The results are filtered for desktop only.

```php
$pageLen = 2;
$body = new stdClass();
$body->start_date = '2017-06-01';
$body->end_date = '2017-06-02';
$body->page_length = $pageLen;
$body->dimensions = ['country_code'];
$body->filter = [
  ["field" => "device_id", "operator" => "=", "value" => ["Desktop"]],
];     
$body->metrics = [
  ["operation" => "sum", "field" => 'plays'],
];
```
<br/>

<a name="php-samples-enriched-videos"></a>

### Make a query for enriched video data

This enriched video report combines metadata and metrics data in a single report. Some of the information included in this report include: completes, media ID, plays, property key, time watched per viewer, unique viewers, video duration, video publish date, and video title.

!!!important
In addition to your property key and reporting secret, you will need the <a href="..#get-the-required-items" target="_blank">property secret</a>. The property secret is needed since this .php script makes an additional call to the Management API.
!!!

Use the following steps to query your data:

1. Download and unzip the <a href="https://github.com/jwplayer/jwdeveloper-platformdemos" target="_blank">jwdeveloper-platformdemos repo</a>.
2. Open <strong>jwdeveloper-platformdemos-master/analytics-api-samples/php-samples/enriched-videos.php</strong> in a code editor or text editor.
3. Replace `<yourkey` with your property key.
4. Replace `yoursecret` with your reporting secret.
5. Replace `yourtoken` with your property secret.
6. Set the `$queryStartDate` to the first date of your query's date range, using `YYYY-MM-DD` format.
7. Set the `$queryEndDate` to the last date of your query's date range, using `YYYY-MM-DD` format.
8. (Optional) Change the value of `$pageLen` to increase or decrease the number of results returned.
9. (Optional) Update `AMI-` in the value for `$outputFn` to change the name prefix of the .csv file that is generated.
10. Save the file.
11. Open a command-line interface (CLI) and navigate to the folder containing <strong>enriched-videos.php</strong>.
12. At the CLI prompt, type: `php enriched-videos.php`.

After a few moments, status information appears in the CLI and a .csv file is created in the same folder as the <strong>enriched-videos.php</strong> file.

* * *
<a name="python-sample"></a>

## Python sample

Use the following steps to query your data:

1. Download and unzip the <a href="https://github.com/jwplayer/jwdeveloper-platformdemos" target="_blank">jwdeveloper-platformdemos repo</a>.
2. Open <strong>jwdeveloper-platformdemos-master/analytics-api-samples/python-samples/analytics-example.py</strong> in a code editor or text editor.
3. Update the `_REPORT_QUERY` object with <a href="../api-reference#query-body" target="_blank">query body</a> data that is applicable for your request. 
4. (Optional) Update value assigned to `_REPORT_NAME` to change the name of the .csv file that is generated.
5. Save the file.
6. Open a command-line interface (CLI) and navigate to the folder containing <strong>analytics-example.py</strong>.
7. At the CLI prompt, replace the `[property key]` and `[reporting secret]` placeholders and type: `python analytics-example.py --site-id [property key] --authorization [reporting secret]`.

After a few moments, status information appears in the CLI and a .csv file is created in the same folder as the <strong>analytics-example.php</strong> file.
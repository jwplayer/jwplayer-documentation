# Overview

The Analytics API allows you to query various data sets relating to the performance of your media items, players, and advertising ad breaks. Responses can be returned in .csv or .json file formats that can be ingested by a data warehouse or analytics solution.

<br/>

## Data availability

<table>
<tr>
    <td style="width:21%">Earliest available data</td>
    <td>2017-01-01</td>
</tr>
<tr>
    <td>Reporting time zone</td>
    <td>US - Eastern (UTC -4 / UTC -5)</td>
</tr>
<tr>
    <td>Data refresh rate</td>
    <td>Updated <strong>approximately every 30 minutes</strong>.</td>
</tr>
<tr>
    <td>Rate limit</td>
    <td><strong>60 requests/minute</strong> per API token or IP<br/><br/>The number of remaining requests that can be made to the Analytics API is returned in the response header of each query.</td>
</tr>
<tr>
    <td>Page length</td>
    <td>Default: 10 rows per page<br/>Maximum: 100 rows per page</td>
</tr>
<tr>
    <td>Queries</td>
    <td><strong>Enterprise or Developer license</strong><br/>&bull; Group by up to <strong>two</strong> dimensions<br/>&bull; Apply up to <strong>five</strong> metrics<br/>&bull; Apply up to <strong>ten</strong> filters<br/><br/><strong>Other licenses</strong><br/>&bull; Group by only <strong>one</strong> dimension<br/>&bull; Apply up to <strong>five</strong> metrics<br/>&bull; Apply only <strong>one</strong> filter</td>
</tr>
<tr>
    <td>Query date range limit</td>
    <td><strong>Enterprise or Developer license</strong><br/>&bull; <strong>92-day window</strong> (queries that include at least one premium* metric or dimension)<br/>&bull; <strong>No limit</strong> (queries that do not include any premium* metrics or dimensions)<br/><br/><strong>Other licenses</strong><br/>&bull; <strong>No limit</strong><br/><br/><sup>* Premium metrics and dimensions are denoted with an asterisk (*) or a cross (&#9768;)</td>
</table>

<br/>

## Get the required items

The Analytics API requires the items in the following table.

<table>
  <tr>
    <th>Item</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="width:21%">Property Key and Secret</td>
    <td>Unique property identifier<br/><br/>
      <ol>
        <li>From your <a href="https://dashboard.jwplayer.com">JW Player dashbord</a>, click the gear next to your name <strong>> API Credentials</strong>.</li>
        <li>In the <strong>JW Platform API Credentials</strong> section, click <strong>SHOW CREDENTIALS</strong> next to a property name.</li>
        <li>Copy the <strong>Key</strong>. If you plan to use the enriched-videos.php query tool, you will also need to copy the <strong>Secret</strong>.</li>
      </ol></td>
  </tr>
  <tr>
    <td>Reporting Secret</td>
    <td>Unique user reporting credential<br/><br/>
      <ol>
        <li>From your <a href="https://dashboard.jwplayer.com">JW Player dashbord</a>, click the gear next to your name <strong>> API Credentials</strong>.</li>
        <li>In the <strong>JW Reporting API Credentials</strong> section, click <strong>SHOW CREDENTIALS</strong> in the row of the relevant API key name.<br/><br/><strong>NOTE</strong>: If no API key names exist, type a new API key name, select a permission level, and click <strong>ADD NEW API KEY</strong>. Your account must have the Admin permission to create a new API key.</li>
        <li>Copy the <strong>Secret</strong>.</li>
      </ol></td>
  </tr>
  <tr>
    <td>Enterprise or Developer license</td>
    <td>(Optional) Account plan that enables access to additional dimensions, enriched metadata, and metrics<br/><br/>Upgrade to an <a href="https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade" target="_blank">Enterprise</a> or <a href="https://developer.jwplayer.com/sign-up/" target="_blank">Developer</a> license if you would like to access this additional data.</td>
  </tr>
</table>
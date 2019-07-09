# Example report queries

The following examples illustrate how to construct basic and advanced queries with the Analytics API.

<br/>

## Example 1: Total plays for media IDs within a defined time frame

**User story**: As an editor, I want to identify my top content so that I can create similar content or find patterns of recent content. Additionally, I can use this information to prioritize pieces of media for monetization through ads.

**Objective**: For a property (`key: 1A23bCD4`), list the total number of plays for each piece of media within the date range of June 1, 2019 - June 2, 2019. The list should be sorted by the number of plays, in descending order.

**Constraint**: Non-enterprise license

**Query**:

```curl
curl -X POST https://api.jwplayer.com/v2/sites/1A23bCD4/analytics/queries/ \
 -H 'Authorization: 123Four56==7123Four56==7' \
 -H 'Content-Type: application/json' \
 -d '{"start_date" : "2019-06-01", "end_date" : "2019-06-02", "dimensions" : ["media_id"], "metrics" : [{"operation": "sum", "field": "plays"}], "sort" : [{"field" : "plays", "order": "DESCENDING"}]}'
```

**Response**:

```json
{
  "page": 0,
  "page_length": 10,
  "data": {
    "rows": [
      ["EUijQ1Ay", 38009],
      ["oSRD4xzP", 27287],
      ["iD7vAER7", 27189]
    ]
  },
  "type": "query_results",
  "metadata": {
    "column_headers": {
      "dimensions": [{
        "type": "string",
        "field": "media_id"
      }],
      "metrics": [{
        "field": "plays",
        "units": "integer"
      }]
    }
  }
}
```

<br/>

## Example 2: Total embeds for the top two countries within a defined time frame

**User story**: As an editor, I want to know from which countries do viewers watch my videos. An embed gives me insight into viewers who have an intent to watch a video on a particular site. By identifying the total embeds for the top two countries, I can understand which areas globally have users with a high intent to watch my videos.

**Objective**: For a property (`key: 1A23bCD4`), list the total number of plays for each country code (for the top two countries) within the date range of June 1, 2019 - June 2, 2019. Filter the date for plays that happened on desktop devices.

**Constraint**: Non-enterprise license

**Query**:

```
curl -X POST https://api.jwplayer.com/v2/sites/1A23bCD4/analytics/queries/ \
 -H 'Authorization: 123Four56==7123Four56==7' \
 -H 'Content-Type: application/json' \
 -d '{"start_date" : "2019-06-01", "end_date" : "2019-06-02", "dimensions" : ["country_code"], "metrics" : [{"operation": "sum", "field": "plays"}], "filter": [{"field": "device_id", "operator": "=", "value": ["Desktop"]}], "page": 0, "page_length": 2, "sort" : [{"field" : "plays", "order": "DESCENDING"}]}'
```

**Response**:

```json
{
  "type": "query_results",
  "page": 0,
  "metadata": {
    "column_headers": {
      "dimensions": [{
        "type": "string",
        "field": "country_code"
      }, {
        "type": "string",
        "field": "device_id"
      }],
      "metrics": [{
        "units": "integer",
        "field": "plays"
      }]
    }
  },
  "page_length": 2,
  "data": {
    "rows": [
      ["US", "Desktop", 37473],
      ["GB", "Desktop", 5368]
    ]
  }
}
```

<br/>

## Example 3: Total plays and embeds by device within a defined time frame

**User story**: As an editor, I want to know on which devices my users are mostly likely to watch my videos: desktop, mobile, or another device. This query shows me the devices likely to be used and helps me to strategically optimize my video player setup for different devices.

**Objective**: For a property (`key: 1A23bCD4`), list the total number of plays and embeds by device within the date range of February 1, 2019 - March 1, 2019. The response should include the title and tag metadata.

**Constraint**: Enterprise license

**Query**:

```
curl -X POST https://api.jwplayer.com/v2/sites/1A23bCD4/analytics/queries/ \
 -H 'Authorization: 123Four56==7123Four56==7' \
 -H 'Content-Type: application/json' \
 -d '{"start_date" : "2019-02-01", "end_date" : "2019-03-02", "dimensions" : ["device_id"], "include_metadata": 1, "metrics": [{"operation": "sum", "field": "embeds"},{"operation": "sum", "field": "plays"}], "sort" : [{"field" : "embeds", "order": "DESCENDING"}]}'
```

**Response**:

```json
{
  "type": "query_results",
  "page": 0,
  "includes": [{
      "type": "media_id",
      "iD7vAER7": {
        "tag": ["background", "homepage", "jwplayer", "timelapse"],
        "title": "Brooklyn Bridge Time Lapse"
      }
    }, {
      "type": "media_id",
      "EUijQ1Ay": {
        "tag": ["background", "homepage"],
        "title": "Jellyfish"
      }
    }, {
      "type": "media_id",
      "oSRD4xzP": {
        "tag": ["background", "homepage", "smoke"],
        "title": "Whiskey Smoke"
      }
  }],
  "data": {
    "rows": [
      ["EUijQ1Ay", 60053, 526600],
      ["oSRD4xzP", 53571, 401269],
      ["iD7vAER7", 52965, 401748]
    ]
  },
  "page_length": 10,
  "metadata": {
    "column_headers": {
      "dimensions": [{
          "type": "string",
          "field": "media_id"
      }],
      "metrics": [{
          "units": "integer",
          "field": "embeds"
        }, {
          "units": "integer",
          "field": "plays"
      }]
    }
  }
}
```

<br/>

## Example 4: Play rates and complete rates of videos with "cat" in the title, viewed in one of three countries, within a defined time frame

**User story**: As an editor, I want to understand the performance of a recent campaign of “cat” videos. Additionally, when the user had the option to view a cat video, at what rate was the video played and completed. This query helps me to understand my content strategy (whether I should focus on pets) or decide to create different types of content for my users.

**Objective**: For a property (`key: 1A23bCD4`), list the play rates and complete rates within the date range of February 15, 2019 - May 15, 2019 of all videos that have "cat" in the title. The response should be filtered for Canada, Ireland, and United Kingdom.

**Constraint**: Enterprise license

**Query**:

```
curl -X POST https://api.jwplayer.com/v2/sites/1A23bCD4/analytics/queries/ \
 -H 'Authorization: 123Four56==7123Four56==7' \
 -H 'Content-Type: application/json' \
 -d '{"start_date":"2019-02-15","end_date":"2019-05-15","dimensions":["page_domain","media_id"],"metrics":[{"operation":"sum","field":"play_rate"},{"operation":"sum","field":"plays"},{"operation":"sum","field":"complete_rate"}],"filter":[{"field":"country_code","operator":"=","value":["CA"]},{"field":"media_id","operator":"LIKE","value":["Cat"]},{"field":"country_code","operator":"=","value":["IE"]},{"field":"country_code","operator":"=","value":["GB"]}],"include_metadata":1,"page":0,"page_length":10}'
```

**Response**:

```json
{
  "data": {
    "rows": [
      [
        "jwpapp.com",
        "UnKVpzaZ",
        0.000000,
        2,
        0.500000
      ]
    ]
  },
  "includes": [
    {
      "UnKVpzaZ": {
        "duration_bucket": "SHORT",
        "tags": [
          "animals",
          "cat"
        ],
        "title": "Happy Cat",
        "upload_date": "2018-07-29"
      },
      "type": "media_id"
    }
  ],
  "metadata": {
    "column_headers": {
      "dimensions": [{
          "display": "Domain",
          "field": "page_domain",
          "type": "string"
        }, {
          "display": "Media",
          "field": "media_id",
          "type": "string"
      }],
      "metrics": [{
          "display": "Play Rate",
          "field": "play_rate",
          "units": "percent"
        }, {
          "display": "Plays",
          "field": "plays",
          "units": "integer"
        }, {
          "display": "Complete Rate",
          "field": "complete_rate",
          "units": "percent"
      }]
    },
    "end_date": "2019-05-15",
    "start_date": "2019-02-15"
  },
  "page": 0,
  "page_length": 10,
  "type": "query_results"
}
```

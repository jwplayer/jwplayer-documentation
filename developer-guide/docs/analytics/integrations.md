# Analytics System Integrations

<sup>Last Updated: August 6, 2019</sup>

By default, JW Player tracks only playback data with [Google Analytics](http://support.jwplayer.com/customer/portal/articles/1417179-integration-with-google-analytics) as an integrated solution. However, there are many more potential analytics services that can be used with our API. Provided that your analytics service is capable of sending this information via Javascript, all API events can hypothetically be tracked and measured.

<br/>

## Listening for Events

A full introduction to our player's API can be found on our [API Introduction](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_introduction/) page. In a nutshell, JW Player's API is capable of listening for specific changes, either initiated by user or by API, and then returning information about its use. A very basic example of detecting when a user initiates a mute would be:

```javascript
jwplayer().on('mute', function(){
	// I would fire my mute tracker here!
  // What happens here would be dependent on your analytics product!
});
```

​For a full list of trackable player events grouped by category, please visit our [API reference page](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_reference/).

<br/>

## Sending Events With Google Analytics

Now that you're able to determine that an event occurred on a page, a ping will need to be sent to an analytics platform for tracking. If your analytics platform of choice is Google Analytics, you'll need to initiate a **send** event. As mentioned in our previous article [here](http://support.jwplayer.com/customer/portal/articles/1417179), you'll need to make sure that you are implementing the new analytics.js on your page, rather than the older ga.js.

Let's assume that we have a single player on a page. If I would like track with our Google Analytics account when an error has occurred with our player (and the error itself), we can use the following code:

```javascript
jwplayer().on('error', function(event) {
  ga('send', 'event', 'JW Player Events', 'Errors', event.message);
});
```

Once triggering an error state, we are able to check into our Google Analytics page and see our tracked event(Under realtime events). In this case, **Errors** will populate in the **JW Player Events** category, and the error itself will be listed under **Actions**. The exact error message will be listed under the **Label** section.  

More information about tracking events with the above code can be found [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) in Google's own analytics documentation.

<br/>

## Sending Events With comScore

Much like a custom GA implementation, if you are utilizing comScore analytics, it is possible to create a setup similar to the above. The below table shows comScore events and their JW Player API equivalents:

|Comscore Event|JW Player API Event|
|--------------|-------------------|
|StreamSenseEventType.BUFFER|on('buffer');|
|StreamSenseEventType.PAUSE|on('pause');|
|StreamSenseEventType.PLAY|on('play');|
|StreamSenseEventType.END|on('complete');|
|Fullscreen State|getFullscreen();|
|Volume|getVolume();|
|Media Position|getPosition();|
|Video Source|getPlaylistItem().file|
|Current Bitrate|getQualityLevels()[getCurrentQuality()].bitrate|

<br/>

## Sending events with Adobe Analytics

You can use the JW Adobe Heartbeat plugin to integrate Adobe Video Analytics with your player events.

### Requirements

Before you add the JW Adobe Heartbeat plugin to your player, you need the following items:

- Adobe credentials
- Adobe Heartbeat tracking server domain
- Adobe Heartbeat channel name
- Adobe Heartbeat channel type
- Page name

### Implementation

Use the following steps to implement and configure this setup:

1. Clone the [JW Adobe Heartbeat plugin repository](https://github.com/jwplayer/jw-adobe-heartbeat-plugin).
2. Add your Adobe credentials to <a href="https://docs.adobe.com/content/help/en/analytics/implementation/javascript-implementation/javascript-implementation-overview.html" target="_blank">**scripts/AppMeasurement.js**</a>.
3. Add your Adobe credentials to <a href="https://docs.adobe.com/content/help/en/id-service/using/implementation-guides/setup-analytics.html" target="_blank">**scripts/VisitorAPI.js**</a>.
4. In the `<head>` of the page with your player, add **VistorAPI.js**, **AppMeasurement.js**, and **VideoHearbear.min.js**.
5. In the `setup()` for your player, define a `plugins../scripts/JWHeartbeat.js` object and set the values in the table below.

| Parameter | Type | Description |
| --- | --- | --- |
| `adobeTrackingDomain` | String | Adobe Heartbeat tracking server domain |
| `channel` | String | Adobe Heartbeat channel name |
| `channelName` | String | Adobe Heartbeat channel type |
| `debug` | Boolean | Enables debugging within the JWHeartbeat.js plugin |
| `pageName` | String | Page name |

<br/>

### Full code sample

```html
<html>
  <head>
    ...
    <!-- Adobe Heartbeat JS -->
    <script language="JavaScript" type="text/javascript" src="scripts/VistorAPI.js"></script>
    <script language="JavaScript" type="text/javascript" src="scripts/AppMeasurement.js"></script>
    <script language="JavaScript" type="text/javascript" src="scripts/VideoHeartbeat.min.js"></script>
    ...
  </head>
  <body>
    ...

    <div id="myElement"></div>

    <script type="text/JavaScript">
      jwplayer("myElement").setup({
        playlist: "https://cdn.jwplayer.com/v2/playlists/ttttYYYY",
        plugins: {
          ./scripts/JWHeartbeat.js: {
            // This is your Adobe HEARTBEAT tracking server domain
            adobeTrackingDomain: "{TRACKING SERVER DOMAIN}",
            // The following 3 parameters are sent through to the Adobe Analytics Servers
            channelName: "{CHANNEL NAME}",
            channel: "{TYPE OF CHANNEL}",
            pageName: "{PAGE NAME}",
            /*  Turns on debugging within the JWHeartbeat.js plugin to see debugging information on the developer console */
            debug: {true or false}
          }
        }
      });
    </script>
    ...
  </body>
</html>
```

<br/><br/>
<div id="wufoo-mff60sc1xnn4cu">
Use this <a href="https://jwplayerdocs.wufoo.com/forms/mff60sc1xnn4cu">form</a> to provide your feedback.
</div>
<script type="text/javascript">var mff60sc1xnn4cu;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'jwplayerdocs',
'formHash':'mff60sc1xnn4cu',
'autoResize':true,
'height':'288',
'async':true,
'host':'wufoo.com',
'header':'show',
'ssl':true,
'defaultValues': 'field118=' + location.pathname};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { mff60sc1xnn4cu = new WufooForm();mff60sc1xnn4cu.initialize(options);mff60sc1xnn4cu.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');</script>
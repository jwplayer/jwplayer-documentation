# Analytics System Integrations

By default, JW Player tracks only playback data with [Google Analytics](http://support.jwplayer.com/customer/portal/articles/1417179-integration-with-google-analytics) as an integrated solution. However, there are many more potential analytics services that can be used with our API. Provided that your analytics service is capable of sending this information via Javascript, all API events can hypothetically be tracked and measured.

## Listening for Events

A full introduction to our player's API can be found on our [API Introduction](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_introduction/) page. In a nutshell, JW Player's API is capable of listening for specific changes, either initiated by user or by API, and then returning information about its use. A very basic example of detecting when a user initiates a mute would be:

```
jwplayer().on('mute',function(){
	//I would fire my mute tracker here!
	//What happens here would be dependent on your analytics product!
});
```

​For a full list of trackable player events grouped by category, please visit our [API reference page](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_reference/).

## Sending Events With Google Analytics

Now that you're able to determine that an event occurred on a page, a ping will need to be sent to an analytics platform for tracking. If your analytics platform of choice is Google Analytics, you'll need to initiate a **send** event. As mentioned in our previous article [here](http://support.jwplayer.com/customer/portal/articles/1417179), you'll need to make sure that you are implementing the new analytics.js on your page, rather than the older ga.js.

Let's assume that we have a single player on a page. If I would like track with our Google Analytics account when an error has occurred with our player (and the error itself), we can use the following code:

```
jwplayer().on('error', function(event) {
ga('send', 'event', 'JW Player Events', 'Errors', event.message);
});
```

Once triggering an error state, we are able to check into our Google Analytics page and see our tracked event(Under realtime events). In this case, **Errors** will populate in the **JW Player Events** category, and the error itself will be listed under **Actions**. The exact error message will be listed under the **Label** section.  

More information about tracking events with the above code can be found [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) in Google's own analytics documentation.

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

## Sending Events With Adobe Site Catalyst

As of JW7, integrated Site Catalyst support has been removed. Events can still be tracked using the JW Player API and Site Catalyst's event tracking pings. Further information can be found on Adobe's site:

*   [HTML5 Video Measurement](http://blogs.adobe.com/digitalmarketing/analytics/html5-video-measurement/)
*   [Media Monitoring Reference](https://marketing.adobe.com/resources/help/en_US/sc/appmeasurement/video/video_mediamonitor.html)
*   [Video Measurement Success](http://blogs.adobe.com/digitalmarketing/analytics/initializing-video-measurement-success/)

Again, the same API events listed above for other implementations can be utilized to send these SiteCatalyst measurement pings as well. The below table shows which JW Player events may correlate with their SiteCatalyst counterparts. Please note that some additional logic may need to be put in place to properly send the correct context for these events.

|SiteCatalyst Event|JW Player API Event|
|---|---|
|s.Media.stop|on('pause');|
|s.Media.stop|on('buffer');|
|s.Media.stop|on('idle');|
|s.Media.close|on('complete');|
|s.Media.play|on('play');|
|s.Media.open|getPlaylist()[getPlaylistIndex()].[information](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_reference/#playlist)|

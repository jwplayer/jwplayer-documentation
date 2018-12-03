# Track video metrics

_Last Updated: December 5, 2018_

When viewers interact with a video player on your site, their actions trigger player events. Some of the player events return video metrics that you can use to analyze and improve your viewers' video experiences.

Below is a visual representation of player events in a timeline. The table below explains all the bold items. The gray events are included as reference points.

<br/><br/>

![player event metrics](../img/analytics/player-event-metrics.png)

<sup>_This timeline does not include all events and the events listed may not appear for all player setups._</sup>

<br/><br/>

| Event | Metric | Description |
| -- | -- | -- |
| `setupError` | Error | Use the `setupError` event to track critical errors in the player setup process.<br/><br/>All `setupError` codes are listed in the [Errors Reference](/api/errors-reference).|
| `buffer` | Buffering | Use the `buffer` event to track how often the player enters a buffering state and evaluate the quality of your adaptive stream. Since this event fires when the player enters a buffering state, this event may fire multiple times during a session.<br/><br/>Use the `reason` property of the buffer event to differentiate normal buffering (`"reason": "buffering"`) from stalls (`"reason": "stalled"`). |
| `adError` | Error | Use the `adError` event to track critical errors in the ad process.<br/><br/>All `adError` codes are listed in the [Ads Errors Reference](/advertising/ad_errors_reference).|
| `adImpression` | Ad impressions | Use the `adImpression` event to track the number of raw ad impressions. After an ad has rendered and begun playback, the `adImpression` event fires.|
| `adViewableImpression` | Ad viewable impressions | Use the `adViewableImpression` to track the viewability of your ad impressions. The `adViewableImpression` event fires only when both of the following conditions are met:<br/><br/>- Ad has played for two consecutive seconds<br/>- At least 50% of the player is in the viewport. <br/><br/>The ad viewable impressions metric is comparable to Google's TrueView viewable impression metric.|
| `autostartNotAllowed` <sup>8.2.0 +</sup> | Autostart | Use the `autostartNotAllowed` to understand if autostarting videos with sound is permitted for a viewer's video experience.<br/><br/>In environments that prohibit autostarting a video with sound, the player defaults to click-to-play. When this occurs, the player emits an `autostartNotAllowed` event. |
| `error` | Error | Use the `error` event to track critical errors in the playback process.<br/><br/>All `error` codes are listed in the [Errors Reference](/api/errors-reference). |
| `firstFrame` | Plays | Use the `firstFrame` event to track video starts, or plays. The `firstFrame` event fires once per media item, when playback has begun.<br/><br/>We do not suggest using the `play` event. The `play` event can be fired several times per media item. For example, when a view pauses and resumes content, resuming the content triggers a `play` event. |
| `visualQuality` | Visual quality | Use the `visualQuality` event to evaluate your quality of service (QoS). This event fires when the rendition of an adaptive stream changes. The `visualQuality` event has two relevant properties:<br/><br/>- `mode`: The `mode` property returns one of two values that correspond to how the visual quality has been changed: `"manual"` or `"auto"`. To evaluate the quality of your stream, track when `"auto"` is the value returned. When `"manual"` is the value that is returned, a user has manually changed the visual quality. When `"auto"` is the value that is returned, the visual quality has been changed automatically by the player.<br/><br/>- `level`: The `level` property returns characteristics of the new rendition, like `bitrate`, `width`, and `height`.|
| `time` | Quartiles | Use the `time` event to track quartiles on video on demand (VOD) assets.  You can use the `duration` and `currentTime` properties of this event to calculate the percentage of the video viewed. Then, you can determine quartile events.<br/><br/>When tracking the `time` event, be sure that the analytics ping is dispatched only once. Since the time event is fired frequently, use a flag or another mechanism to prevent multiple firings.<br/><br/><strong>NOTE: Live streams do not have a duration. Therefore, you cannot track quartile events.</strong>|

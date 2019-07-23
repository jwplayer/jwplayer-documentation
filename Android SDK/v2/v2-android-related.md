# Related Content Overlay

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

As of JW Player SDK for Android 2.5.+ related content overlay is supported. Read more about [Related Videos](https://support.jwplayer.com/customer/portal/articles/1483102).

## Related Overlay API Methods

| Method | Description |
|:---|:---|
| openRelatedOverlay() | Opens the related videos overlay if the current video/playlist has a related feed enabled. If the video is still playing it will pause |
| closeRelatedOverlay() | Closes the related videos overlay if the current video/playlist has a related feed enabled and is shown |

## Related Overlay Callbacks

| Callback | Description |
|:----|:----|
| onRelatedOpen([RelatedOpenEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/RelatedOpenEvent.html) relatedOpenEvent) | Triggers when the related overlay is opened. |
| onRelatedClose([RelatedCloseEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/RelatedCloseEvent.html) relatedCloseEvent) | Triggers when the related plugin is closed. |
| onRelatedPlay([RelatedPlayEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/RelatedPlayEvent.html) relatedPlayEvent) | Triggers when a user selects an object in a related feed or the first item starts playing |

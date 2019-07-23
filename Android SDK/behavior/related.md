# Related Content Overlay

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

As of JW Player SDK for Android 2.5.+ related content overlay is supported.

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

# Known Issues

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

## Current Limitations

Chromecast support was added in version 2.1 of the JW Player SDK for Android. At this moment the Chromecast support is still in beta and the API for Chromecast will be subject to changes in the future.

- Our implementation of Google Casting is at the player level (for convenience), not at the application-level recommended by Google's [Casting UI/UX guidelines](https://developers.google.com/cast/docs/ux_guidelines). For more involved casting requirements, we recommend implementing Google's Cast SDK directly at the application-level instead.
-	Advertisements are not supported when Casting.
-	Multiple AudioTracks or AudioTrack switching is not supported when casting.
-	Multiple players won't play well with Casting, at this moment we advise you not to use multiple players when casting.
-	Only `WebVTT` captions are supported, support for other formats will be added in the future.
-	At this moment the JW Player SDK does not support Casting control through a built in notification, if you really want this you should be able to implement it yourself though, as long as you manage to keep a reference to the `JWPlayerView`.
-	Currently we do not support casting of live streams.
-	Chromecast does currently not support DRM.
-	Chromecast requires that CORS has been configured for resources - headers must be present on playlists, segments and text tracks.

Currently we are using the [Default Media Receiver](https://developers.google.com/cast/docs/media) for playback on the Cast device and therefore can only support playback of certain media formats.

If you are already using a different version of Cast Companion library in your application you will need to add `-dontwarn com.longtailvideo.jwplayer.cast.*` to your ProGuard configuration.

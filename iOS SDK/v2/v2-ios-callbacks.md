# Callbacks

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

In order to get notified about any player-related callbacks, you can either adhere to the new JWPlayerDelegate Protocol, or sign up for notifications using NSNotificationCenter.

The Protocol provides delegate methods for each callback; for more information please review the JWPlayerDelegate.h file in the SDK package.

Every callback notification has an “event” name in the userInfo dictionary, together with the additional parameters described below.

## JWMetaDataAvailableNotification

* **onMeta**: Fired shortly after the video starts to play. 
    Parameter:
	* **metaData**:  Object containing the new metadata. This can be metadata hidden in the media (XMP, ID3, keyframes) or metadata broadcasted by the playback provider (bandwidth, quality switches).

## JWPlayerStateChangedNotification

A set of events reporting changes in the player state. Each event (except onReady) has two params newState and oldState that represent current state after event and previous state.

* **onPlayAttempt**: Triggered the instant a user attempts to play a file.
* **onFirstFrame**: Triggered by a video's first frame event (Or the instant an audio file begins playback).
* **onReady**: The player is created and ready to be used.
* **onIdle**: The player stopped playing.
* **onComplete**: The player has done playing current media.
* **onBuffer**: The player is buffering media.
* **onBufferChange**: Fired when the currently playing item loads additional data into its buffer.
* **onPlay**: The player started to play media.
* **onPause**: The player is paused.

## JWPlaybackPositionChangedNotification

* **onTime**: Fired continuously while the player is playing media. May get fired up to 10 times a second.
    Parameters:
	* **duration**: the duration of the media currently being played (not applicable for lie streams).
	* **position**: current playback position in seconds (not applicable for live streams).
* **onSeek**: Fired after a seek has been requested either by scrubbing the controlbar or through the API.
    Parameters:
    * **offset**: The user requested position to seek to (in seconds).
    * **position**: The position of the player before the player seeks (in seconds).

## JWFullScreenStateChangedNotification  

Fired when the player changes to/from fullscreen mode.

* **onFullscreen**: Parameters:
	* **state**: integer representing is the player is in fullscreen (1) or windowed mode (0).

## JWAdActivityNotification

Set of events related to advertisements.

* **onAdRequest**: Fired whenever an ad is requested by the player.
* **onAdSkipped**: Fired when the user taps skip button during ad.
* **onAdComplete**: Fired when ad is done playing.
* **onAdImpression**: Fired when ad shows up on the screen.
* **onAdPlay**: Fired when ad start to play or is resumed after pause.
* **onAdPause**: Fired when ad is paused.
* **onAdError**: Fired when ad can’t be played for any reason (onError event is fired at the same time).
* **onBeforePlay**: onBefore events are player events that are to be used to inject ads into live streams.
* **onBeforeComplete**

## JWAdPlaybackProgressNotification

Continuous ad playback time update.

* **onAdTime**

## JWAdClickNotification

* **onAdClick**: Fired when the user taps the ad (omitted if openSafariOnAdClick is set to true)

## JWErrorNotification
Fired when the player encounters any errors.

* **onError**: Parameters:
	* **message**: error text

## JWCaptionsNotification

* **onCaptionsList**: Parameters:
	* **track**: number of the active captions track.
	* **tracks**: array of all available captions tracks.  
* **onCaptionsChange**: Parameters:
	* **track**: number of the active captions track.
	* **tracks**: array of all available captions tracks.

## JWVideoQualityNotification

* **onQualityLevels**: Parameters:
	* **currentQuality**: number of the current quality level from the list.
	* **levels**: list of available quality levels.
* **onQualityChange**: Parameters:
	* **currentQuality**: number of the current quality level from the list.
	* **levels**: list of available quality levels.

## JWAudioTrackNotification

* **onAudioTracks**: Parameters:
    * **audioTracks**: Array with audio tracks from the player.
* **onAudioTrackChanged**: Parameters:
    * **currentAudioTrack**: Index of the newly selected audio track in the audio tracks array.
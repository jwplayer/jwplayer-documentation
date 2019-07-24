# Callbacks

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

In order to get notified about any player-related callbacks, you can either adhere to the new JWPlayerDelegate Protocol, or sign up for notifications using NSNotificationCenter.

The Protocol provides delegate methods for each callback; for more information please review the [JWPlayerDelegate.h](https://developer.jwplayer.com/sdk/ios/reference/Protocols/JWPlayerDelegate.html) file in the SDK package.

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
* **onAdStarted**: VPAID-only. Will trigger when a VPAID ad creative signals to our player that it is starting. This differs from adImpression since the advertisement may not yet be visible. Fires after the first `onAdPlay` event.
* **onAdMeta**: Fired when new metadata has been broadcasted by the player during an Ad.
* **onAdPlay**: Fired when ad start to play or is resumed after pause.
* **onAdPause**: Fired when ad is paused.
* **onAdCompanions**: Fired whenever an ad contains companions.
* **onAdError**: Fired when ad can’t be played for any reason (onError event is fired at the same time).

## JWAdPlaybackProgressNotification

Continuous ad playback time update.

* **onAdTime**

## JWAdClickNotification

* **onAdClick**: Fired when the user taps the ad (omitted if openSafariOnAdClick is set to true)

## JWErrorNotification
Fired when the player encounters any errors.

* **onSetupError**: Fired when an error occurs before setup is complete, or in other words before the onReady Event.
* **onError**: Fired when an error occurs after setup.
* **onAdError**: Fired when an error occurs during ad playback.

## JWCaptionsNotification

* **onCaptionsList**: Parameters:
	* **track**: number of the active captions track.
	* **tracks**: array of all available captions tracks.  
* **onCaptionsChange**: Parameters:
	* **track**: number of the active captions track.
	* **tracks**: array of all available captions tracks.

## JWVideoQualityNotification

* **onLevels**: Parameters:
	* **currentQuality**: number of the current quality level from the list.
	* **levels**: list of available quality levels.
* **onLevelsChanged**: Parameters:
	* **currentQuality**: number of the current quality level from the list.
	* **levels**: list of available quality levels.
* **onVisualQuality**: Parameters:	
    * **mode**: The type of quality selection that has been enabled with the player. This will read auto when a user is relying on our automatic quality determination or manual when a user has selected a static quality.
    * **reason**: Why the quality was changed. This can be initial choice.
    * **label**: Information about the quality that was changed. This will display your label, bitrate, index, and resolution.

## JWAudioTrackNotification

* **onAudioTracks**: Parameters:
    * **levels**: Array with audio tracks from the player.
* **onAudioTrackChanged**: Parameters:
    * **currentTrack**: Index of the newly selected audio track in the audio tracks array.



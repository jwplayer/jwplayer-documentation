# AudioTrack

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

The `AudioTrack` class represents an audio track in an HLS, SmoothStreaming, or DASH stream. Audio tracks are sent to the developer via the `onAudioTracks()` callback.

At this moment Audio Track switching is only supported for DASH and SmoothStreaming streams.

## Audio API Methods

| Method                              | Description                                                                                                     |
|:------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| `List<AudioTrack> getAudioTracks()` | Returns a List with audio tracks from the player.                                                               |
| `int getCurrentAudioTrack()`        | Returns the index of the currently active audio track.                                                          |
| `setCurrentAudioTrack(int index)`   | Change the audio track to the provided index. The index must be within the list provided by `getAudioTracks()`. |

## Audio Callbacks

| Callback                                            | Description                                                                                                                                      |
|:----------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| `onAudioTracks(final List<AudioTrack> audioTracks)` | Fired when the list of available audio tracks is updated. Happens shortly after a playlist item starts playing.                                  |
| `onAudioTrackChanged(int currentTrack)`             | Fired when the active audio track is changed. Happens in response to a user clicking the audio tracks menu or a call to `setCurrentAudioTrack()` |

## Background Audio

The JW Player allows you to keep continuing audio playback when your app has been backgrounded.
You can enable background audio playback by calling `setBackgroundAudio(true)` on the JWPlayerView.

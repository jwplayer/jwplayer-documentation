# AudioTrack

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

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
| onAudioTracks([AudioTracksEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AudioTracksEvent.html) audioTracksEvent) | Fired when the list of available audio tracks is updated. Happens shortly after a playlist item starts playing.                                  |
| onAudioTrackChanged([AudioTrackChangedEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/AudioTrackChangedEvent.html) audioTrackChangedEvent)             | Fired when the active audio track is changed. Happens in response to a user clicking the audio tracks menu or a call to `setCurrentAudioTrack()` |

## Background Audio

The JW Player allows you to keep continuing audio playback when your app has been backgrounded.
You can enable background audio playback by calling `setBackgroundAudio(true)` on the JWPlayerView.

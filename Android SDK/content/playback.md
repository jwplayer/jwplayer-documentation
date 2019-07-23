# Loading a file into JW Player

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

There are several ways to create a `PlaylistItem` or list of `PlaylistItem`s as shown below:

## Simple Playback

```java
// Create a PlaylistItem that points to your content
PlaylistItem item = new PlaylistItem("http://url.with.content/file.mp4");

// Load the PlaylistItem into the player
player.load(item);
```

## Playback with Multiple Sources

```java
// Create an empty PlaylistItem
PlaylistItem item = new PlaylistItem();

// Create a list of media sources and add High Definition and Standard Definition variants of the stream
List<MediaSource> mediaSources = new ArrayList<>();
mediaSources.add(new MediaSource("http://content/movie-hd.mp4"));
mediaSources.add(new MediaSource("http://content/movie-sd.mp4"));

// Assign the sources to the PlaylistItem
item.setSources(mediaSources);

// Load the PlaylistItem into the player
player.load(item);
```

## Playback Using a Builder

```java
// Create a new PlaylistItem using the Builder
PlaylistItem item = new PlaylistItem.Builder()
    .file("http://url.with.content/file.mp4")
    .image("http://poster.image/poster.jpg")
    .description("Some really great content")
    .title("Title in the Playlist")
    .build();

// Load the PlaylistItem into the player
player.load(item);
```

## Playback Using TextureView
We give developers the ability to use either `TextureView` or `SurfaceView`. However, `TextureView` should be used only if `SurfaceView` does not meet your needs. One example is where smooth animations or scrolling of the video surface is required prior to Android N version. In this case, please ensure that `SDK_INT` is less than 24 (Android N), otherwise use `SurfaceView`. `SurfaceView` is a default option and you don't need to make any extra configurations. To use `TextureView` please see the example below:

```java
// Create a new PlayerConfig using the Builder
PlayerConfig playerConfig = new PlayerConfig.Builder()
     .useTextureView(true)
     .build();

// Load the PlaylistItem into the player
player.load(item);
```

## Playback Rate

```java
float[] playbackRates = new float[] { 0.5f, 1f, 2f };

// To setup custom playback rates
PlayerConfig playerConfig = new PlayerConfig.Builder()
     .playbackRates(PlaybackRateConfig.Factory.createPlaybackRateConfig(playbackRates))
     .build();
        
// To use default playback rates
 PlayerConfig playerConfig = new PlayerConfig.Builder()
     .playbackRates(PlaybackRateConfig.Factory.createPlaybackRateConfig(true))
     .build();
     
getPlayer().setup(playerConfig);
```

## Playback API Methods

| Method | Description |
| --- | --- |
| `void load(List<PlaylistItem> playlist, AdvertisingBase advertising)` | Loads a new playlist and advertising options into the player. |
| `void load(List<PlaylistItem> playlist)` | Loads a new playlist into the player. |
| `void load(PlaylistItem playlistItem)` | Loads media into the player. |
| `PlayerState getState()` | Returns the player's current playback state |
| `void play()` | Starts playback. |
| `void pause()` | Pauses playback. |
| `void stop()` | Stops the player and unloads the currently playing media file |
| `void seek(double position)` | Seeks the currently playing media to the specified position, in seconds. |
| `double getPosition()` | Returns the current playback position in seconds. |
| `double getDuration()` | Returns the duration of the current media in seconds. |
| `void next()` | Tells JW Player to immediately play the next playlist item. |
| `void playlistItem(int index)` | Start playback of the playlist item at the specified index. |

## Playback Callbacks

| Callback | Description |
| --- | --- |
| onPlay([PlayEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/PlayEvent.html) playEvent) | Fired when the player enters the PLAYING state. |
| onPause([PauseEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/PauseEvent.html) pauseEvent) | Fired when the player enters the PAUSED state. |
| onBuffer([BufferEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/BufferEvent.html) bufferEvent) | Fired when the player enters the BUFFERING state. |
| onIdle([IdleEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/IdleEvent.html) idleEvent) | Fired when the player enters the IDLE state. |
| onFirstFrame([FirstFrameEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/FirstFrameEvent.html) firstFrameEvent) | Fired when playback begins. |
| onSeek([SeekEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/SeekEvent.html) seekEvent) | Fired after a seek has been requested either by scrubbing the controlbar or through the API. |
| onSeeked([SeekedEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/SeekedEvent.html) seekedEvent) | Fired after a seek operation has completed. |
| onTime([TimeEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/TimeEvent.html) timeEvent) | While the player is playing, this event is fired as the playback position gets updated. This may occur as frequently as 10 times per second. |
| onDisplayClick([DisplayClickEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/DisplayClickEvent.html) displayClickEvent) | Fired when the user clicks or taps the video display. |

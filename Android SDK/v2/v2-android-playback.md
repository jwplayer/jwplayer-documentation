# Loading a file into JW Player

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

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

## Playback API Methods

| Method | Description |
| --- | --- |
| `void load(List<PlaylistItem> playlist, AdvertisingBase advertising)` | Loads a new playlist and advertising options into the player. |
| `void load(List<PlaylistItem> playlist)` | Loads a new playlist into the player. |
| `void load(PlaylistItem playlistItem)` | Loads media into the player. |
| `PlayerState getState()` | Returns the player's current playback state |
| `void play()` | Toggle playing state of a video. If playing, pauses. If paused, resumes. |
| `void play(boolean state)` | Starts or suspends playback. |
| `void pause()` | Toggle playing state of a video. If playing, pauses. If paused, resumes. |
| `void pause(boolean state)` | Suspend or resume playback. |
| `void stop()` | Stops the player and unloads the currently playing media file |
| `void seek(int position)` | Seeks the currently playing media to the specified position. |
| `long getPosition()` | Returns the current playback position |
| `long getDuration()` | Returns the duration of the current media |

## Playback Callbacks

| Callback | Description |
| --- | --- |
| `onPlay(PlayerState oldState)` | Fired when the player enters the PLAYING state. |
| `onPause(PlayerState oldState)` | Fired when the player enters the PAUSED state. |
| `onBuffer(PlayerState oldState)` | Fired when the player enters the BUFFERING state. |
| `onIdle(PlayerState oldState)` | Fired when the player enters the IDLE state. |
| `onFirstFrame()` | Fired when playback begins. |
| `onSeek(int position, int offset)` | Fired after a seek has been requested either by scrubbing the controlbar or through the API. |
| `onSeeked()` | Fired after a seek operation has completed. |
| `onTime(long position, long duration)` | While the player is playing, this event is fired as the playback position gets updated. This may occur as frequently as 10 times per second. |
| `onDisplayClick()` | Fired when the user clicks or taps the video display. |

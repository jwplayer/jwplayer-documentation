# Create a playlist

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

Multiple pieces of content can be sent into the player as a playlist as shown below.

```java
// Create a list to contain the PlaylistItems
List<PlaylistItem> playlist = new ArrayList<>();

// Add a PlaylistItem pointing to the first piece of content
playlist.add(new PlaylistItem("http://content/tv-show-pilot-adaptive.m3u8"));

// Add another PlaylistItem pointing to the second piece of content
// This time using the Builder
playlist.add(new PlaylistItem.Builder()
    .file("http://content/tv-show-ep2.mp4")
    .image("http://content/tv-show-poster-image.jpg")
    .description("A good TV show")
    .build());

// Add a final piece of content
playlist.add(new PlaylistItem("http://content/tv-show-ep3.mp4"));

// Load the playlist into the player
player.load(playlist);
```

## Playlist API Methods

| Method | Description |
| --- | --- |
| `List<PlaylistItem> getPlaylist()` | Returns the player's current playlist |
| `int getPlaylistIndex()` | Returns the index of the currently active item in the playlist |
| `PlaylistItem getPlaylistItem(int index)` | Returns the currently playing `PlaylistItem` |

## Playlist Callbacks

| Callback | Description |
| --- | --- |
| onPlaylist([PlaylistEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/PlaylistEvent.html) playlistEvent) | Fired when a new playlist has been loaded into the player. |
| onPlaylistItem([PlaylistItemEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/PlaylistItemEvent.html) playlistItemEvent) | Fired when the playlist index changes to a new playlist item. |
| onPlaylistComplete([PlaylistCompleteEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/PlaylistCompleteEvent.html) playlistCompleteEvent) | Fired when the player is done playing all items in the playlist. However, if the repeat option is set true, this is never fired. |

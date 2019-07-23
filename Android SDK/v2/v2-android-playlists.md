# Creating a Playlist

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

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
| `onPlaylist(List<PlaylistItem> playlist)` | Fired when a new playlist has been loaded into the player. |
| `onPlaylistItem(int index, PlaylistItem playlistItem)` | Fired when the playlist index changes to a new playlist item. |
| `onPlaylistComplete()` | Fired when the player is done playing all items in the playlist. However, if the repeat option is set true, this is never fired. |

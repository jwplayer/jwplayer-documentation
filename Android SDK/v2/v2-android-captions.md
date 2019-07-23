# Captions

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!! 

The `Caption` class represents a caption track. Caption tracks can be attached to a `PlaylistItem` as detailed below.

## Adding Captions to PlaylistItem

To add a `Caption` track to an existing `PlaylistItem` follow the example below

```java
// Create a PlaylistItem pointing to some content
PlaylistItem item = new PlaylistItem("http://media.source/file.m3u8");

// Create a list of Caption objects to represent the captions tracks
List<Caption> captionTracks = new ArrayList<>();

// Create a Caption pointing to English subtitles and add it to the list
Caption captionEn = new Caption("file_en.srt");
captionTracks.add(captionEng);

// Create a Caption pointing to Spanish subtitles, this time using the Builder
Caption captionSp = new Caption.Builder().file("file_sp.srt").label("Español").build();
captionTracks.add(captionSp);

// Add the Caption tracks to the PlaylistItem
item.setCaptions(captionTracks);
```

## Captions API Methods

| Method                            | Description                                                                                                                 |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| `List<Caption> getCaptionsList()` | Returns a List with captions tracks from the player                                                                         |
| `int getCurrentCaptions()`        | Returns the index of the currently active captions track. Note the captions are Off if the index is 0                       |
| `setCurrentCaptions(int index)`   | Change the visible captions track to the provided index. The index must be within the list provided by `getCaptionsList()`. |

## Captions Callbacks

| Callback                                               | Description                                                                                                                                         |
|:-------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `onCaptionsList(List<Caption> tracks)`                 | Fired when the list of available captions tracks is updated.                                                                                        |
| `onCaptionsChanged(int track, List<Caption> captions)` | Fired when the active captions track is changed. Happens in response to a user clicking the controlbar CC menu or a call to `setCurrentCaptions()`. |

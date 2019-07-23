# Custom HTTP Headers

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

The JW Player SDK for Android supports passing through custom HTTP headers 
along with the requests for manifests and media.  In order to configure a 
stream to use custom HTTP headers follow the example below.

```java
// Create a list to contain the PlaylistItems
List<PlaylistItem> playlist = new ArrayList<>();

// Example 1: Create key-value map for the HTTP headers
Map<String, String> httpHeaders = new HashMap<>();
httpHeaders.put("cookie", "abcd1234");
		
// Example 1: Add a PlaylistItem pointing to the first piece of content
PlaylistItem content = new PlaylistItem.Builder()
		.file("http://content/http-header-protected-content.m3u8")
		.httpHeaders(httpHeaders)
		.build();
		
// Example 1: Add the content to the playlist
playlist.add(content);

// Example 2: Create key-value map for the HTTP headers for individual sources
Map<String, String> httpHeadersSD = new HashMap<>();
httpHeaders.put("cookie", "XYZ123");

Map<String, String> httpHeadersHD = new HashMap<>();
httpHeaders.put("cookie", "QWERTY999");

// Example 2: Create individual MediaSources
MediaSource mediaSD = new MediaSource.Builder()
		.file("http://content/http-header-protected-sd.mp4")
		.httpHeaders(httpHeadersSD)
		.build();

MediaSource mediaHD = new MediaSource.Builder()
		.file("http://content/http-header-protected-hd.mp4")
		.httpHeaders(httpHeadersHD)
		.build();
		
List<MediaSource> mediasources = new ArrayList<>();
mediasources.add(mediaSD);
mediasources.add(mediaHD);
		
// Example 2: Add another PlaylistItem pointing to the second piece of content
// This one will use multiple sources
playlist.add(new PlaylistItem.Builder()
		.sources(mediasources)
		.image("http://content/tv-show-poster-image.jpg")
		.description("A good TV show (SD & HD)")
		.build());

// Load the playlist into the player
player.load(playlist);
```

# Basic Embed

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

This section includes samples for basic player operations such as configuration. All numbered examples given refer to either Objective C (1) or Swift (2). For additional examples, see the [sample application](https://github.com/jwplayer/jwplayer-sdk-ios-demo)

<!--
**Declaring a player variable**

	1) @property JWPlayerController *player;
	2) var player: JWPlayerController?

**Creating and populating a player configuration**

	1) JWConfig *config = [[JWConfig alloc] init];
	2) var config: JWConfig = JWConfig()

**Populating video media file location -**
Provide a URL to a media file location (for example an HLS playlist or MP4 file).

	1) config.file = @”http://example.com/hls.m3u8”;
	2) config.file = “http://example.com/hls.m3u8”

**Convenience initializer that accepts a single media file location -**
Provide a URL to a media file location (for example an HLS playlist or MP4 file).

	1) config = [JWConfig configWithFile:@”http://example.com/hls.m3u8”];
	2) config = JWConfig(file:”http://example.com/hls.m3u8”)

**Initializing player instance with a configuration**

	1) player = [[JWPlayerController alloc] initWithConfig:config];
	2) player = JWPlayerController(config:config)

**Setting player view size -**
To set the player view size, you can use config.size property during init:  

	1) config.size = CGSizeMake(100, 100);
	2) config.size = CGSize(width: 100, height: 100)

You can also scale player.view after the player is created:

	1) player.view.frame = CGRectMake(0, 0, 100, 100);
	2) player.view.frame = CGRect(x: 0, y: 0, width: 100, height: 100)

After the player is instantiated, the player.view property represents the player window. You can add it to your view hierarchy to present it on the screen:

	1) [myController.view addSubview:player.view];
	2) myController.view.addSubview(player.view)

!!!tip
It is strongly recommended to add the player view to the view hierarchy in or after the viewDidAppear method of the embedding view controller.
!!!
-->
**Configuration object**

All the data needed to create a player should be populated in the configuration object before calling initializing a player. Here are some examples.

Additional player configuration params:

```Objective-C
config.image    = @"/image.jpg";    //title image
config.title    = @"JWPlayer Demo";	// video title
config.controls = YES;       		//show/hide controls
config.repeat   = NO;               //repeat after completion
```
	
```swift
config.image = "/image.jpg" 		//title image
config.title = "JWPlayer Demo" 		// video title
config.controls = true 				//show/hide controls
config.repeat = false 				//repeat after completion
```

**Local file playback**

The JW Player SDK for iOS supports playback of local files of the following formats: MP4 and M4V with H.264 & AAC/MP3.

To play a local file you need to specify path to the file including `file://` protocol.

```Objective-C
NSString *pathNoScheme = [[NSBundle mainBundle] pathForResource:@"sintel" ofType:@"mp4"]];
NSString *path = [NSString stringWithFormat:@"file://%@", pathNoScheme];
// OR
NSString *path = [[NSURL URLwithString:pathNoScheme] absoluteString];
config.file = path;
```

```swift
var pathNoScheme = Bundle.main.path(forResource: "sintel", ofType: "mp4")!
var path = "file://\(pathNoScheme ?? "")"
// OR
var path = URL(string: pathNoScheme)?.absoluteString
```

## Offline handling
You may specify a poster image to display when the device goes offline by setting a UIImage to the offlinePoster property of JWConfig, and you may specify a message to be displayed on top of the image by setting an NSString to the offlineMessage property of JWConfig.  

```Objective-C
config.offlinePoster = [UIImage imageNamed:@"my_Image_Name.png"];
config.offlineMessage = @"my offline message";
```
```swift
config.offlinePoster = UIImage(named: "my_Image_Name.png")
config.offlineMessage = "my offline message"
```

If the offlinePoster property is nil, the player will display the thumbnail image set to the image property of JWConfig. If both properties are nil, the player will display a black screen.
If the offlineMessage property is nil, the player will display its standard message "No Internet Connection".

## Setting Multiple Sources
To create a player with multiple-source MP4 files, config.sources should be populated with an array of JWSource objects representing different MP4 objects, such as:

```Objective-C
config.sources = @[
    [JWSource sourceWithFile:@"/example_low.mp4" label:@"180p Streaming" isDefault:YES],
    [JWSource sourceWithFile:@"/example_med.mp4" label:@"270p Streaming"],  
    [JWSource sourceWithFile:@"/example_hi.mp4"  label:@"720p Streaming"]
];
```

```swift
config.sources = [
	JWSource(file: "/example_low.mp4", label: "180p Streaming", isDefault: true),
	JWSource(file: "/example_med.mp4", label: "270p Streaming"),
	JWSource(file: "/example_hi.mp4", label: "720p Streaming")
]
```

## Playlists

To create a playlist, an array of JWPlaylistItem objects called playlist is passed to the player.

```Objective-C
JWPlaylistItem *item1 = [[JWPlaylistItem alloc] init];
item1.file            = @”http ://example.com/hls.m3u8”;
item1.tracks          = @[caption1, caption2];
item1.title           = @"Playlist Video With Captions";

JWPlaylistItem *item2 = [[JWPlaylistItem alloc] init];
item2.file            = @”http ://example.com/hls.m3u8”;
item2.adSchedule      = @[adBreak1, adBreak2];
item2.title           = @"Playlist Video With Ads";

config.playlist       = @[item1, item2];
```

```swift
var item1    = JWPlaylistItem()
item1.file   = "http ://example.com/hls.m3u8"
item1.tracks = [caption1, caption2]
item1.title  = "Playlist Video With Captions"

var item2        = JWPlaylistItem()
item2.file       = "http ://example.com/hls.m3u8"
item2.adSchedule = [adBreak1, adBreak2]
item2.title      = "Playlist Video With Ads"

config.playlist  = [item1, item2]
```

Note that you can set an adSchedule for each JWPlaylistItem.

## Playback Rate
Our SDK allows you to set a playback speed, in a range between 0.25 to 4.

```Objective-C
JWConfig *config            = [JWConfig new];
config.playbackRateControls = YES;

// Stop here for the default rates, or
// to specify custom rates, just set the property:
config.playbackRates = @[@0.5, @1, @2];

self.player = [[JWPlayerController alloc] initWithConfig:config];
```

```swift
var config = JWConfig()
config.playbackRateControls = true

// Stop here for the default rates, or
// to specify custom rates, just set the property:
config.playbackRates = [0.5, 1, 2]

player = JWPlayerController(config: config)
```

!!!
Please note that certain streams' playback speed can only be decreased. Also note that audio pitch is currently not adjusted.
!!!

# Basic Embed

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

This section includes samples for basic player operations such as configuration. All examples given in Objective C (1) and Swift (2). For additional examples, see the [sample application](https://github.com/jwplayer/jwplayer-sdk-ios-demo)

**Declaring a player variable**

	1) @property JWPlayerController *player;
	2) var player: JWPlayerController

**Creating and populating a player configuration**

	1) JWConfig *config = [[JWConfig alloc] init];
	2) var config: JWConfig = JWConfig()

**Populating video media file location**
Provide a URL to a media file location (for example an HLS playlist or MP4 file).

	1) config.file = @”http://example.com/hls.m3u8”; 
	2) config.file = “http://example.com/hls.m3u8”

**Convenience initializer that accepts a single media file location**
Provide a URL to a media file location (for example an HLS playlist or MP4 file).

	1) config = [JWConfig configWithFile:@”http://example.com/hls.m3u8”]; 
	2) config = JWConfig(file:”http://example.com/hls.m3u8”)

**Initializing player instance with a configuration**

	1) player = [[JWPlayerController alloc] initWithConfig:config];
	2) player = JWPlayerController(config:config)

**Setting player view size**   

To set the player view size, you can use config.size property during init:  

	1) config.size = CGSizeMake(100, 100); 
	2) config.size = CGSizeMake(100, 100)  

You can also scale player.view after the player is created:

	1) player.view.frame = CGRectMake(0, 0, 100, 100);
	2) player.view.frame = CGRectMake(0, 0, 100, 100)

After the player is instantiated, the player.view property represents the player window. You can add it to your view hierarchy to present it on the screen:

	1) [myController.view addSubview:player.view];
	2) myController.view.addSubview(player.view())

>It is strongly recommended to add the player view to the view hierarchy in or after the viewDidAppear method of the embedding view controller.**

**Configuration object**

All the data needed to create a player should be populated in the configuration object before calling initializing a player. Here are some examples.

Additional player configuration params:

	config.image = @"/image.jpg";			//title image
	config.title = @"JWPlayer Demo";		// video title
	config.controls = YES;  //default		//show/hide controls
	config.repeat = NO;   //default		//repeat after completion
	config.premiumSkin = JWPremiumSkinRoundster;	//JW premium skin
	config.cssSkin = @"http://p.jwpcdn.com/iOS/Skins/nature01/nature01.css"

**Local file playback**

The JW Player SDK for iOS supports playback of local files of the following formats: MP4 and M4V with H.264 & AAC/MP3.

To play a local file you need to specify path to the file including `file://` protocol.

    config.file = [NSString stringWithFormat:@"file://%@",
    						[[NSBundle mainBundle] pathForResource:@"sintel" ofType:@"mp4"]];



## Offline handling
You may specify a poster image to display when the device goes offline by setting a UIImage to the offlinePoster property of JWConfig, and you may specify a message to be displayed on top of the image by setting an NSString to the offlineMessage property of JWConfig.  

    config.offlinePoster = [UIImage imageNamed:@"my_Image's_Name.png"];
    config.offlineMessage = @"my offline message";

If the offlinePoster property is nil, the player will display the thumbnail image set to the image property of JWConfig. If both properties are nil, the player will display a black screen.
If the offlineMessage property is nil, the player will display its standard message "No Internet Connection".

## Setting Multiple Sources
To create a player with multiple-source MP4 files, config.sources should be populated with an array of JWSource objects representing different MP4 objects, such as:

	config.sources = @[[JWSource sourceWithFile:@"/example_low.mp4"
	label:@"180p Streaming" isDefault:YES],  
		[JWSource sourceWithFile:@"/example_med.mp4" 
	label:@"270p Streaming"],  
		[JWSource sourceWithFile:@"/example_hi.mp4" 
	label:@"720p Streaming"]];

## Playlists

To create a playlist, an array of JWPlaylistItem objects called playlist is passed to the player.

	JWPlaylistItem *item1 = [[JWPlaylistItem alloc] init];
	item1.file = @”http://example.com/hls.m3u8”;
	item1.tracks = @[caption1, caption2];
	item1.title = @"Playlist Video With Captions";

	JWPlaylistItem *item2 = [[JWPlaylistItem alloc] init];
	item2.file = @”http://example.com/hls.m3u8”;
	item2.adSchedule = @[adBreak1, adBreak2];
	item2.title = @"Playlist Video With Ads";
    
	config.playlist = @[item1, item2];

Note that you can set an adSchedule for each JWPlaylistItem.

## Casting
Before casting, you must instantiate a JWCastController object with a JWPlayerController object and scan for devices.

    self.castController = [[JWCastController alloc]initWithPlayer:self.player];
    [self.castController scanForDevices];

By adhering to the JWCastingDelegate protocol and implementing the delegate method onCastingDevicesAvailable:, you will be informed whenever a casting device goes online. A list of connectable devices can be obtained by accessing your castController's' availableDevices property. 

To connect to a device:

    JWCastingDevice *device = [self.castController.availableDevices objectAtIndex:index];
    [self.castController connectToDevice:device];

When a connection is successfully established, the JWCastingDelegate method named onConnectedToCastingDevice: is called and you can cast by calling:
    
    [self.castController cast];

To stop casting without disconnecting from the casting device:

    [self.castController stopCasting];

To disconnect from the casting device:

    [self.castController disconnect];

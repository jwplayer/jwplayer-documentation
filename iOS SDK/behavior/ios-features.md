# Advanced Features

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

## DVR

DVR functionality allows viewers to pause, play, and rewind live events. If viewers begin watching an event past the initial broadcast time, and do not want to miss any important content, this allows them to start at an earlier position. If DVR is supported and enabled on the streaming server, add "?DVR" to the video url (eg. http://mydomain.com/video.m3u8?DVR) to indicate to the player that the HLS Playlist is a DVR stream. JW Player will in turn adjust the visual elements on the control bar to support DVR and make it clear to the viewer that the live stream can be paused or rewound to a point in the past.

## Background Audio

All iOS apps have a default audio session that comes preconfigured. 
Although the default audio session provides useful behavior, it doesn't provide the general audio behavior you need when building a media playback app. To change the default behavior, you configure your app’s audio session category.

Of the seven categories, the one most playback apps need is called `AVAudioSessionCategoryPlayback` / `playback`. This category indicates that audio playback is a central feature of your app. When you specify this category, your app’s audio continues with the Ring/Silent switch set to silent mode. With this category, your app can also play background audio if you're using the Audio, AirPlay, and Picture in Picture background mode (see the [AVAudioSession docs](https://developer.apple.com/documentation/avfoundation/avaudiosession) for an overview).

!!!tip
If you have not enabled the "Audio, AirPlay and Picture in Picture" setting in the Background Modes of your project's capabilities list, add the UIBackgroundModes key in your app's info.plist and set its value to an array containing the string "audio".
!!!

!!!tip
Since updating the session is a blocking operation, best practice is to perform this operation on a background concurrent thread (not shown).
!!!

!!!note
The snippets below do not implement error handling for the sake of clarity.
!!!

To set the category, add the following code to your app, conventionally in the AppDelegate's `didFinishLaunchingWithOptions` method:

```Objective-C
NSError *error;
[AVAudioSession.sharedInstance setCategory:AVAudioSessionCategoryPlayback error:&error];
[AVAudioSession.sharedInstance setActive:YES error:&error];
```

```swift
// Swift < 4.2
try? AVAudioSession.sharedInstance().setCategory(AVAudioSessionCategoryPlayback)
try? AVAudioSession.sharedInstance().setActive(true)

// Swift 4.2
try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .moviePlayback, options: [])
try? AVAudioSession.sharedInstance().setActive(true, options: [])
```

as the case may be. (For more on this topic, such as AVAudioSession options allowing AirPlay and Bluetooth, see the Apple docs [System Audio Interaction](https://developer.apple.com/documentation/avfoundation/system_audio_interaction), and especially
[Audio Session Categories and Modes](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioSessionCategoriesandModes/AudioSessionCategoriesandModes.html#//apple_ref/doc/uid/TP40007875-CH10).)

!!!
Per [Apple's documentation](https://developer.apple.com/library/ios/qa/qa1668/_index.html), adding the audio string to the UIBackgroundModes array in your Info.plist will also enable streaming via AirPlay.
!!!

## Lock Screen Controls

An application reproducing content with JW Player will display controls on the device's lockscreen by default as long as background audio is enabled.

* Play/Pause will always be displayed, and can be toggled with the Apple AirPod and EarPod headphones.
* 'Previous' and 'Next' will appear grayed out when playing single items and ads.
* 'Previous' will be grayed out for the first item of a playlist.
* 'Next' will **not** be grayed out for the last item of a playlist; instead, tapping 'Next' **will** 'wrap around' to load the *first* item of the playlist.

Additionally, information about the content being reproduced will be displayed:

* Information set in a JWPlaylistItem (e.g., 'title' and 'image') will be displayed.
* If absent from the JWPlaylistItem, the information set in the JWConfig will be displayed. 
* If a title is not specified in either place, the name of the application will be displayed in place of a title.
* When Google IMA ads are playing, the title switches to "Advertisement".

If you wish to disable this feature and/or override it with your own settings, set the JWPlayerController's `displayLockScreenControls` property to NO.

!!!note
In order for Lock Screen controls to appear, the audioSession's categoryOptions property must include `AVAudioSessionCategoryOptionDefaultToSpeaker` / `defaultToSpeaker` or `AVAudioSessionCategoryOptionAllowBluetooth` / `allowBluetooth`, or return 0. !!!

##Custom asset options

When initializing the player, an options dictionary for AVURLAsset customization can be specified, via the 'assetOptions' property in JWConfig, JWSources or JWPlaylistItem.

The AVURLAsset customization options are described in [AVURLAsset documentation](https://developer.apple.com/library/mac/documentation/AVFoundation/Reference/AVURLAsset_Class/#//apple_ref/doc/constant_group/Initialization_Options).

For example:

```Objective-C
JWConfig *config = [[JWConfig alloc] initWithContentUrl:@"your url"];
config.assetOptions = @{@"AVURLAssetHTTPHeaderFieldsKey":@{@"cookie": @"cookie data"}};
```

```swift
var config = JWConfig(contentUrl: "your url")
config.assetOptions = ["AVURLAssetHTTPHeaderFieldsKey": ["cookie": "cookie data"]]
```

## DRM

### Apple FairPlay

#### Overview

FairPlay Streaming (FPS) securely delivers keys to Apple mobile devices, enabling the playback of encrypted video content. FPS allows a content provider to securely deliver an AES 128-bit content key from the provider’s key server. The content provider encrypts the H.264 video content with the content key. Then, FPS decrypts the encrypted video content with the content key. 

!!!important
The JW Player SDK does not encrypt streams for you, and does not implement a key server.
!!!

The JW Player SDK does not encrypt streams for you, and does not implement a key server. The JW Player SDK detects when a stream is FairPlay encrypted and asks your app to provide the necessary information and key to decrypt the content. This approach gives you the flexibility to encrypt your content and manage your keys the way you prefer.

In order for you to be FPS compliant you must:

* Write a Key Security Module that is installed in a key server's software. 
* Add code to allow your app to communicate with the server that can deliver the key needed to decrypt the content.
* Create the formatting and encryption software for the media content server. This software prepares the encrypted content stream according to the Apple HTTP Live Streaming (HLS) specification.

For more information on being FPS compliant, please refer to [Apple's FairPlay documentation](https://developer.apple.com/streaming/fps/).

#### Implementation

In order to play FairPlay encrypted HLS, the class in your app which communicates with your FairPlay Key Server must adhere to the JWDrmDataSource protocol and be set to the JWPlayerController's drmDataSource property, as in: `self.player.drmDataSource = self;`. 

When an FPS-specific tag is included in the playlist of a media stream that the Apple device is asked to play, the JW Player SDK will ask your application for the necessary information to prepare an encrypted key request:

* the fetchContentIdentifierForRequest delegate method gets called, requesting that the content identifier (also known as Asset ID) be passed in through its completion block.


```Objective-C
- (void)fetchContentIdentifierForRequest:(NSURL *)loadingRequestURL forEncryption:(JWEncryption)encryption withCompletion:(void (^)(NSData *))completion
{
        if(encryption == JWEncryptionFairPlay) {
            NSString *assetId;
            // obtain asset Id here.
            NSData *assetIdData = [NSData dataWithBytes: [assetId cStringUsingEncoding:NSUTF8StringEncoding]
                                                 length: [assetId lengthOfBytesUsingEncoding:NSUTF8StringEncoding]];
            completion(assetIdData);
        }
}
```
```swift
func fetchContentIdentifier(forRequest loadingRequestURL: URL?, for encryption: JWEncryption, withCompletion completion: @escaping (Data?) -> Void) 
{
        if encryption == .fairPlay {
            // obtain asset Id here.
            let assetId: String = "YOUR_ASSET_ID"
            let assetIdData = Data(bytes: assetId.cString(using: .utf8),
                                   count: assetId.lengthOfBytes(using: .utf8))
        }
    }
```

* the fetchAppIdentifierForRequest delegate method is called, prompting for an Application Certificate which must get passed via the completion block. The Application Certificate must be encoded with the X.509 standard with distinguished encoding rules (DER). It is obtained when registering an FPS playback app with Apple, by supplying an X.509 Certificate Signing Request linked to your private key.
 
```Objective-C
    - (void)fetchAppIdentifierForRequest:(NSURL *)loadingRequestURL forEncryption:(JWEncryption)encryption withCompletion:(void (^)(NSData *))completion
    {
        if (encryption == JWEncryptionFairPlay) {
            NSData *applicationId; 
            // obtain application Id here.
            completion(applicationId);
        }
    }
```
```swift
func fetchAppIdentifier(forRequest loadingRequestURL: URL?, for encryption: JWEncryption, withCompletion completion: @escaping (Data?) -> Void) {
        if encryption == .fairPlay {
            // obtain application Id here.
            let applicationId: Data? = YOUR_APPLICATION_ID
            completion(applicationId)
        }
}
```

When the key request is ready:

* the fetchContentKeyWithRequest delegate method is called, providing you with the key request data (also known as SPC - Server Playback Context message) which you need to retrieve the CKC (Content Key Context) message from your key server. The CKC message must be returned via the completion block, under the response parameter. When your app sends the request to the server, the FPS code on the server wraps the required key in an encrypted message and sends it to the app. Your app then provides the JW Player SDK with the encrypted message, which is used to unwrap the message and decrypt the stream, so the iOS device can play the media. 
	* For resources that may expire, you can specify a renewal date in the completion block.
	* We suggest also specifying the content type (the UTI indicating the type of data contained by the response) when a renewal date is set.

```Objective-C
    - (void)fetchContentKeyWithRequest:(NSData *)requestBytes forEncryption:(JWEncryption)encryption withCompletion:(void (^)(NSData *, NSDate *, NSString *))completion
    {
        if(encryption == JWEncryptionFairPlay) {
            NSData *key = [self.serverLink keyFromRequest:requestBytes]; // obtain key here from server by providing the request.
            NSDate *renewalDate; // (optional)
            NSString *contentType = @"application/octet-stream"; // (optional)
            completion(key, renewalDate, contentType);
        } 
    }
```  

```swift
func fetchContentKey(withRequest requestBytes: Data?, for encryption: JWEncryption, withCompletion completion: @escaping (Data?, Date?, String?) -> Void) 
{
        if encryption == .fairPlay {
            let key: Data? = serverLink.key(fromRequest: requestBytes) // obtain key here from server by providing the request.
            let renewalDate: Date? // (optional)
            let contentType = "application/octet-stream" // (optional)
            completion(key, renewalDate, contentType)
        }
}
```

!!!
FairPlay decryption only works on a physical device; it will not work on a simulator.
!!!

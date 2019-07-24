# Advanced Features

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

## Picture in Picture

*IMPORTANT*: Picture and Picture is deprecated beginning from SDK 2.8.6

To enable Picture in Picture, access your project's capabilities list and under Background Modes enable the "Audio, AirPlay and Picture in Picture" setting. Picture in Picture is only available on iPad Pro, iPad Air (or later), and iPad mini 2 (or later) running iOS 9.
You may disable Picture in Picture at any time by setting the JWPlayerController's pictureInPictureDisabled property to YES. This property is set to NO by default.'
Note: Picture in Picture will only be instantiated if your device supports it; you do not need to distinguish between different device models and OS versions to enable/disable this feature, the Picture in Picture API does this for you.

Known issues: We do not support Picture in Picture representation for ads played using Google IMA.'

## DVR

DVR functionality allows viewers to pause, play, and rewind live events. If viewers begin watching an event past the initial broadcast time, and do not want to miss any important content, this allows them to start at an earlier position. If DVR is supported and enabled on the streaming server, add "?DVR" to the video url (eg. http://mydomain.com/video.m3u8?DVR) to indicate to the player that the HLS Playlist is a DVR stream. JW Player will in turn adjust the visual elements on the control bar to support DVR and make it clear to the viewer that the live stream can be paused or rewound to a point in the past.

## Background Audio

If you have not enabled the "Audio, AirPlay and Picture in Picture" setting in the Background Modes of your project's capabilities list, add the UIBackgroundModes key in your app's Info.plist and set its value to an array containing the string "audio". Import the AVFoundation framework and add the following code to your app:

    AVAudioSession *audioSession = [AVAudioSession sharedInstance];

    NSError *setCategoryError = nil;
    BOOL success = [audioSession setCategory:AVAudioSessionCategoryPlayback error:&setCategoryError];

    NSError *activationError = nil;
    success = [audioSession setActive:YES error:&activationError];

In a Swift based project, please follow these steps to achieve the background audio capability:

Step 1- Add a key in your Info.plist called 'Required background modes'. Under this key, add a value called 'App plays audio or streams audio/video using AirPlay'.
Step 2- In your AppDelegate, import AVFoundation
Step 3- In your didFinishLaunchingWithOptions method add this:
    do
        { try AVAudioSession.sharedInstance().setCategory(AVAudioSessionCategoryPlayback) }
    catch
        { print("error coming back from background") }

Note: Per [Apple's documentation](https://developer.apple.com/library/ios/qa/qa1668/_index.html), adding the audio string to the UIBackgroundModes array in your Info.plist will also enable streaming via AirPlay.

## Lock Screen Controls

An application reproducing content with JW Player will display controls on the device's lockscreen by default as long as background audio is enabled.
* Play/Pause will always be displayed, and can be toggled with the Apple EarPod headphones.
* Previous and next will appear greyed out when playing single items and ads.
* Previous will be greyed out for the first item of a playlist.
* Next will **Not** be greyed out for the last item of a playlist; tapping next will load the first item of the playlist.

Additionally, information about the content being reproduced will be displayed:
* Information set to a JWPlaylistItem (title and image) will be displayed.
* If absent from the JWPlaylistItem, respective information from the JWConfig will be displayed. 
* If a title is not specified, the name of the application will be displayed as a title.
* When Google IMA ads are in reproduction, the title switches to "Advertisement".

If you wish to disable this feature and/or override it with your own settings, set the JWPlayerController's displayLockScreenControls property to NO.

Note: In order for Lock Screen controls to appear, the audioSession's categoryOptions property must include AVAudioSessionCategoryOptionDefaultToSpeaker or AVAudioSessionCategoryOptionAllowBluetooth, or return 0.

##Custom asset options

When initializing the player, an options dictionary for AVURLAsset customization can be specified, via the `assetOptions` property in JWConfig, JWSources or JWPlaylistItem.

The AVURLAsset customization options are described in [AVURLAsset documentation](https://developer.apple.com/library/mac/documentation/AVFoundation/Reference/AVURLAsset_Class/#//apple_ref/doc/constant_group/Initialization_Options).

For example:

    JWConfig *config = [[JWConfig alloc] initWithContentUrl:@"your url"];
    config.assetOptions = @{@"AVURLAssetHTTPHeaderFieldsKey":@{@"cookie": @"cookie data"}};

## DRM

### Apple FairPlay

#### Overview

FairPlay Streaming (FPS) securely delivers keys to Apple mobile devices, enabling the playback of encrypted video content. FPS allows a content provider to securely deliver an AES 128-bit content key from the provider’s key server. The content provider encryptsthe H.264 video content with the content key. Then, FPS decryptsthe encrypted video content with the content key. 

The JW Player SDK does not encrypt streams for you, and does not implement a key server. The JW Player SDK detects when a stream is FairPlay encrypted and asks your app to provide the necessary information and key to decrypt the content. This approach gives you the flexibility to encrypt your content and manage your keys the way you prefer.

In order for you to be FPS compliant you must:

* Write a Key Security Module that is installed in a key server's software. 
* Add code to allow your app to communicate with the server that can deliver the key needed to decrypt the content.
* Create the formatting and encryption software for the media content server. This software prepares the encrypted content stream according to the Apple HTTP Live Streaming (HLS) specification.

For more information on being FPS compliant, please refer to [Apple's FairPlay documentation](https://developer.apple.com/streaming/fps/).

#### Implementation

In order to play FairPlay encrypted HLS, the class in your app which communicates with your FairPlay Key Server must adhere to the JWDrmDataSource protocol and be set to the JWPlayerController's drmDataSource property.

    self.player.drmDataSource = self;

When an FPS-specific tag is included in the playlist of a media stream that the Apple device is asked to play, the JW Player SDK will ask your application for the necessary information to prepare an encrypted key request:
* the fetchContentIdentifierForRequest: delegate method gets called, requesting that the content identifier (also known as Asset ID) be passed in through its completion block. 
    - (void)fetchContentIdentifierForRequest:(NSURL *)loadingRequestURL forEncryption:(JWEncryption)encryption withCompletion:(void (^)(NSData *))completion
    {
        if(encryption == JWFairPlay) {
            NSString *assetId; // obtain asset Id here.
            NSData *assetIdData = [NSData dataWithBytes:[assetId cStringUsingEncoding:NSUTF8StringEncoding] length:[assetId lengthOfBytesUsingEncoding:NSUTF8StringEncoding]];
            completion(assetIdData);
        }
    }
* the fetchAppIdentifierForRequest: delegate method is called, prompting for an Application Certificate which must get passed via the completion block. The Application Certificate must be encoded with the X.509 standard with distinguished encoding rules (DER). It is obtained when registering an FPS playback app with Apple, by supplying an X.509 Certificate Signing Request linked to your private key.
    - (void)fetchAppIdentifierForRequest:(NSURL *)loadingRequestURL forEncryption:(JWEncryption)encryption withCompletion:(void (^)(NSData *))completion
    {
        if(encryption == JWFairPlay) {
            NSData *applicationId; // obtain application Id here.
            completion(applicationId);
        }
    }

When the key request is ready:
* the fetchContentKeyWithRequest: delegate method is called, providing you with the key request data (also known as SPC - Server Playback Context message) which you need to retrieve the CKC (Content Key Context) message from your key server. The CKC message must be returned via the completion block, under the response parameter. When your app sends the request to the server, the FPS code on the server wraps the required key in an encrypted message and sends it to the app. Your app then provides the JW Player SDK with the encrypted message, which is used to unwrap the message and decrypt the stream, so the iOS device can play the media. 
        * For resources that may expire, you can specify a renewal date in the completion block.
        * We suggest also specifying the content type (the UTI indicating the type of data contained by the response) when a renewal date is set.
    - (void)fetchContentKeyWithRequest:(NSData *)requestBytes forEncryption:(JWEncryption)encryption withCompletion:(void (^)(NSData *, NSDate *, NSString *))completion
    {
        if(encryption == JWFairPlay) {
            NSData *key = [self.serverLink keyFromRequest:requestBytes]; // obtain key here from server by providing the request.
            NSDate *renewalDate; // (optional)
            NSString *contentType = @"application/octet-stream"; // (optional)
            completion(key, renewalDate, contentType);
        } 
    }

Note: FairPlay decryption only works on devices; it will not work on a simulator.

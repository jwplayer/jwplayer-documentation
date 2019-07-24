# Google Cast Setup

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

To enable casting to Chromecast with the JW Player iOS SDK, you must import the Google Cast Framework and its dependent frameworks. For a list of necessary frameworks, please visit [https://developers.google.com/cast/docs/ios_sender_setup#xcode_setup](https://developers.google.com/cast/docs/ios_sender_setup#xcode_setup) and follow the steps under the "Xcode setup" subsection of the "Setup" section.

To begin casting, create a JWCastController object and set its delegate; the delegate must adhere to the JWCastingDelegate protocol and implement its delegate methods.

    - (void)setUpCastController
    {
        self.castController = [[JWCastController alloc] initWithPlayer:self.player];
        self.castController.chromeCastReceiverAppID = kGCKMediaDefaultReceiverApplicationID;
        self.castController.delegate = self;
    }

Once your JWCastController is setup, scan for devices by calling the `scanForDevices` method:
    `[self.castController scanForDevices];`

When devices become available, the JWCastingDelegate method `onCastingDevicesAvailable:` will be called and will provide an array of JWCastingDevices. Connect to a device by calling `connectToDevice:`.

    -(void)onCastingDevicesAvailable:(NSArray *)devices
    {
        JWCastingDevice *chosenDevice = devices[0];
        [self.castController connectToDevice:chosenDevice];
    }

When connection is established, the JWCastingDelegate method `onConnectedToCastingDevice:` will be called, signaling the ability to cast the video being reproduced by the JWPlayerController. To cast, call the `cast` method on your JWCastController.

    -(void)onConnectedToCastingDevice:(JWCastingDevice *)device
    {
        [self.castController cast];
    }

The JWPlayerController API controls the playback of the video being casted, and the JWPlayerDelegate will provide you with the playback callbacks while casting.

A best practice sample application demonstrating the code necessary for a proper casting experience can be found on [https://github.com/jwplayer/jwplayer-ios-bestPracticeApps](https://github.com/jwplayer/jwplayer-ios-bestPracticeApps). This repository contains several basic best practice apps that use the JW Player iOS SDK. The target containing the relevant code is named JWCasting. 

The JW Player SDK supports casting to the Default Media Receiver and to Styled Media Receivers. Custom Receivers are not yet officially supported, but may work if the video playback implements the same interface used in the Default Media Receiver. To specify a receiver, set the receiver's app ID to the `chromeCastReceiverAppID` property of the JWCastController.

## Known Issues
* Our implementation of Google Casting is at the player level (for convenience), not at the application-level recommended by Google's [Casting UI/UX guidelines](https://developers.google.com/cast/docs/ux_guidelines). For more involved casting requirements, we recommend implementing Google's Cast SDK directly at the application-level instead.
* Google IMA ads are not supported when casting.
* Multiple AudioTracks or AudioTrack switching is not supported when casting.
* Only WebVTT captions are supported.

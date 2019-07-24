# AirPlay

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

The JW Player iOS SDK supports playback via AirPlay. In order to cast via AirPlay your Apple device must be connected to an AirPlay receiver (i.e. Apple TV). Connecting to an AirPlay receiver can be done in the Control Center or by adding an AirPlay button in your app. The following code can be used to layer an AirPlay button on your JWPlayerController's view.

    - (void)setUpAirPlayButton
    {
        self.airPlayView =[[MPVolumeView alloc] initWithFrame:CGRectMake(x, y, width, height)];
        [self.airPlayView setShowsVolumeSlider:NO];
        self.airPlayView.backgroundColor = [UIColor clearColor];
        self.airPlayView.autoresizingMask = UIViewAutoresizingFlexibleLeftMargin;
        [self.player.view addSubview:self.airPlayView];
    }

For your convenience, a best practice app demonstrating how to layer an AirPlay button on your player's view can be found on [https://github.com/jwplayer/jwplayer-ios-bestPracticeApps](https://github.com/jwplayer/jwplayer-ios-bestPracticeApps). This repository contains several basic best practice apps that use the JW Player iOS SDK. The target containing the relevant code is called JWAirPlay.

## Not Supported
* VAST ads will not AirPlay.

## Known Issues
* WebVTT captions are displayed on the mobile device, not on the AirPlay receiver.

# Troubleshooting

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

!!!important
Use of the iOS SDK v3 requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/contact-us/?utm_source=developer&amp;utm_medium=CTA&amp;utm_campaign=player-docs) if you would like to upgrade your account.
!!!

## Known issues
* Unintended behavior may appear during Fullscreen on iPad devices if upside down orientation is enabled. For optimal behavior please disable the upside down device orientation.
![Disabling Upside Down](./images/disableUpsideDown.png)

For more information about JW Player Ads Edition features, see [http://support.jwplayer.com/customer/portal/articles/1403727-what-is-jw-player-](http://support.jwplayer.com/customer/portal/articles/1403727-what-is-jw-player-)

## FAQ

### Where can I find the JW Player demo app?

[https://github.com/jwplayer/jwplayer-sdk-ios-demo](https://github.com/jwplayer/jwplayer-sdk-ios-demo)


### Where can I find the CocoaPods for this SDK?

[https://cocoapods.org/?q=jwplayer](https://cocoapods.org/?q=jwplayer)


### Where can I find my SDK and license key?

Please log into your dashboard and click on 'Downloads & Keys'. You will find the SDK download and license
key under the 'Downloads' section.

### How do I change the information in the Control Center?

We recommend to avoid using the `MPNowPlayingInfoCenter` to modify the information in the Control Center when using the SDK; modifying it will lead to unpredictable behavior. Instead, allow the SDK to handle conveying your media's metadata to the Control Center.
If you nevertheless wish to override the Control Center yourself, make sure to inform the SDK by setting the JWPlayerController's `displayLockScreenControls` property to `false`.

### I received an error on my import header: 'JWPlayer-iOS-SDK/JWPlayerController.h' file not found. What should I do?

This error is most likely due to XCode not being able to find the path of the SDK framework. Please go to 'Build Settings', 'Search Paths' then 'Framework Search Path' and examine the path listed for the framework. 

### (a) Why is my app not playing any sound?
and
### (b) Why is my app playing another app's audio at the same time as mine? 

(a) This could be for a number of reasons, but check to see if your device is on silent mode, and if sound is restored when silent mode is off. If so, and also for issue (b), you just need to add a couple of lines of code to your project to let iOS know to handle your app for media playback – where your app is not silenced by the ring/silent switch or screen locking, and by default it interrupts a 'nonmixable' app's audio. Specifically, set the audio session's category to 'playback', and set your audio session to be the active one. See the overview and snippets on the  [Advanced Features](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/embedding/features/#background-audio) page in this guide.
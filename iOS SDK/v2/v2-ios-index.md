# Introduction

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

The JW Player SDK for iOS includes classes and methods to enable developers to add HLS and MP4 video playback functionality to iOS applications. The SDK also supports inclusion of VAST 3.0 video advertising in your applications, as well as reporting playback analytics to your JW Player dashboard, customizing video players using JW Player custom skins, and more.

The product also includes a demo application that you can install on your iOS device to illustrate the functionality that the SDK provides. 
Intended Audience
This guide assumes that you have the necessary Objective C or Swift and iOS development skills to build and compile advanced iOS applications using XCode. It also assumes that you are familiar with online media technologies such as Apple HTTP Live Streaming (HLS), MP4, and H.264/AAC.

## Supported Features
The JW Player SDK for iOS supports all the features of the JW Player Ads Edition for web, with the following **exceptions**:

* RTMP streaming  
* Playback of FLV, Vorbis or WebM formats  
* Google Analytics    
* Adobe SiteCatalyst  
* YouTube integration  
* VPAID 1.0 ads  

## Known issues
* We do not support Picture in Picture representation for ads played using Google IMA.
* Unintended behavior may appear during Fullscreen on iPad devices if upside down orientation is enabled. For optimal behavior please disable the upside down device orientation.
![Disabling Upside Down](./images/disableUpsideDown.png)

For more information about JW Player Ads Edition features, see [http://support.jwplayer.com/customer/portal/articles/1403727-what-is-jw-player-](http://support.jwplayer.com/customer/portal/articles/1403727-what-is-jw-player-)

## Intended Audience
This guide assumes that you have the necessary Objective C or Swift and iOS development skills to build and compile advanced iOS applications using XCode. It also assumes that you are familiar with online media technologies such as Apple HTTP Live Streaming (HLS), MP4, and H.264/AAC.

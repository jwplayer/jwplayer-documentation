# JW SDK for iOS Release Notes

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

##### Major Version Releases
* [Version 2.9.0 (Jun 18, 2018)](#2-9-0)
* [Version 2.8.0 (Dec 11, 2017)](#2-8-0)
* [Version 2.7.0 (Feb 23, 2017)](#2-7-0)
* [Version 2.6.0 (Dec 12, 2016)](#2-6-0)
* [Version 2.5.0 (Sep 14, 2016)](#2-5-0)
* [Version 2.4.0 (Jun 29, 2016)](#2-4-0)
* [Version 2.3.0 (Jun 06, 2016)](#2-3-0)
* [Version 2.2.0 (Apr 08, 2016)](#2-2-0)
* [Version 2.1.0 (Feb 02, 2016)](#2-1-0)
* [Version 2.0.33 (Dec 01, 2015)](#2-0-33)
* [Version 2.0.32 (Nov 17, 2015)](#2-0-32)
* [Version 1.x](#1-x)

<a name="2-9-1"></a>
## Version 2.9.1 (Build #sdk_build_number# - #date_short_month#)
### Bug Fixes
* Fixed an issue where the app could crash if FreeWheel returned an empty ad tag (undocumented by FreeWheel)

<a name="2-9-0"></a>
## Version 2.9.0 (Build 50 - Jun 18, 2018)
### Features
* We have integrated support for the FreeWheel ad-serving platform. Configure your FreeWheel Ad Manager settings in our new FreeWheel ad client to serve pre-rolls and mid-rolls with other features such as ad-skip and ad-click. Please refer to the new FreeWheel advertising section in our [developer guide documentation](https://developer.jwplayer.com/sdk/ios/docs/v2/developer-guide/advertising/freewheel/) to get started.

<a name="2-8-11"></a>
## Version 2.8.11 (Build 49 - May 21, 2018)
### Bug Fixes
* Fixed an issue where the onControlBarVisible event would trigger for Ad related controls

<a name="2-8-10"></a>
## Version 2.8.10 (Build 48 - May 4, 2018)
### Bug Fixes
* Fixed an issue where the app would crash if there was a problem with local player related files creation

### Enhancements
* Upgraded to support Google IMA SDK v3.7.0

<a name="2-8-9"></a>
## Version 2.8.9 (Build 47 - Apr 16, 2018)
### Bug Fixes
* Fixed a VAST issue where content would replay after completion of post-roll
* Fixed an issue where skipping a VMAP ad did not proceed to the content

<a name="2-8-8"></a>
## Version 2.8.8 (Build 46 - Mar 28, 2018)
### Bug Fixes
* Fixed an issue where media playback would stop when the app was sent to the background
* Fixed an issue where NowPlayingInfo (NPI) Center would not display the media's title & meta data, and NPI controls did not work

<a name="2-8-7"></a>
## Version 2.8.7 (Build 45 - Mar 20, 2018)
### Bug Fixes
* Fixed an HLS in-manifest webVTT captions issue where the list of available tracks was not showing when CC button was selected

<a name="2-8-6"></a>
## Version 2.8.6 (Build 44 - Feb 27, 2018)
### Bug Fixes
* ***IMPORTANT UPDATE*** Apple recently tightened their iOS app store submission restrictions. They started to flag the use of non-public APIs and rejecting apps using them - ***even if these apps were accepted previously without issue***. Our team performed a full code audit and this release removes ***all*** use of non-public APIs. As a result, we temporarily removed picture-in-picture (PiP) for iPad and background audio support. We will work towards adding these features back in a subsequent release. ***We strongly recommend all users to update to this version to avoid this issue. If you're upgrading from SDK 2.7.x please refer to the [Migration Guide](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/troubleshooting/migration/)***

<a name="2-8-5"></a>
## Version 2.8.5 (Build 43 - Feb 09, 2018)
### Bug Fixes
* Fixed minor bugs

<a name="2-8-4"></a>
## Version 2.8.4 (Build 42 - Feb 07, 2018)
### Bug Fixes
* Fixed an issue where a 'Library not loaded' error message would appear during an Ad Hoc build
* Fixed an issue where after a VMAP ad error, the player wouldn't gracefully recover and resume media playback

<a name="2-8-3"></a>
## Version 2.8.3 (Build 41 - Jan 23, 2018)
### Bug Fixes
* Fixed an issue where after a VAST ad error, the player wouldn't gracefully recover and resume media playback

<a name="2-8-2"></a>
## Version 2.8.2 (Build 39 - Jan 09, 2018)
### Bug Fixes
* Fixed an issue where SDKVersion returned an incorrect value

<a name="2-8-1"></a>
## Version 2.8.1 (Build 38 - Dec 20, 2017)
### Bug Fixes
* Fixed an issue where Chromecast and IMA libraries were required to build the app. Reminder: A migration is required from 2.7.x versions, please refer to the [Migration Guide](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/troubleshooting/migration/).

<a name="2-8-0"></a>
## Version 2.8.0 (Build 36 - Dec 11, 2017)
### Enhancements
* JW Player SDK for iOS is now a [Dynamic Library](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html) and is no longer static. A migration is required from 2.7.x versions, please refer to the [Migration Guide](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/troubleshooting/migration/). Please note this version contains a known issue: Chromecast and IMA libraries are required to build the app. We recommend version 2.8.1.

<a name="2-7-11"></a>
## Version 2.7.11 (Build 35 - Nov 17, 2017)
### Enhancements
* Renamed symbol _PLAYABLE_KEY to avoid conflicts with other exposed var / consts / symbols that may have the same name

### Bug Fixes
* Fixed an issue where the onControlBarVisible delegate was not called when the player status is "paused"
* Fixed an issue where playbackPosition() always reported 0 when called immediately after onSeeked()
* Fixed an issue where two playlist items having an identical video file would cause the player to buffer indefinitely on the second item

<a name="2-7-10"></a>
## Version 2.7.10 (Build 34 - Nov 15, 2017)
### Features
* All CDN assets, including JS files, are now packaged with the SDK and loaded locally if the CDN is not available

### Bug Fixes
* Fixed an issue where the player did not resize correctly in fullscreen/ landscape view for the iPhone X simulator
* Fixed an issue in CocoaPods where the player controls would appear after an IMA preroll even if config.controls was set to false

<a name="2-7-9"></a>
## Version 2.7.9 (Build 32 - Oct 03, 2017)
### Bug Fixes
* Fixed all remaining XCode 9 threading warnings
* Fixed an issue playing ad tags pointing to media addresses that do not have a URI scheme

<a name="2-7-8"></a>
## Version 2.7.8 (Build 31 - Sep 19, 2017)
### Bug Fixes
* Prevents UIKit instance methods from being called on a background thread when the player is deallocated 

<a name="2-7-7"></a>
## Version 2.7.7 (Build 30 - Sep 15, 2017)
### Features
* onAdImpression: now includes click-through URL parameter

### Enhancements
* Upgraded SDK to use JW Player 7.12.6

<a name="2-7-6"></a>
## Version 2.7.6 (Build 29 - Aug 4, 2017)
### Enhancements
* Enabled seeking in DVR streams using the JWPlayerController seek: method

<a name="2-7-5"></a>
## Version 2.7.5 (Build 28 - July 21, 2017)
### Features
* Added a new onFullscreenRequested() delegate callback to trigger when fullscreen is requested, but before the animation takes place

### Enhancements
* Upgraded SDK to use JW Player 7.12.1

### Bug Fixes
* Fixed an issue where the CC options would not display when replaying a video
* Fixed an issue where the first frame of media flashes right before an IMA pre-roll ad played
* Fixed an issue where the player would freeze after you seeked past two IMA ads in a video

<a name="2-7-4"></a>
## Version 2.7.4 (Build 27 - Jun 16, 2017)
### Enhancements
* Upgraded SDK to use JW Player 7.11.3

### Bug Fixes
* Fixed an issue where OnControlbarVisibilityChanged fired when the player was in buffering state and inaccurately reported as true

<a name="2-7-3"></a>
## Version 2.7.3 (Build 26 - Apr 7, 2017)
### Features
* New onAdschedule: callback for the VAST ad client that provides detailed information of a VMAP ad schedule.

### Enhancements
* Upgraded SDK to use JW Player 7.10.4
* onAdImpression: now includes VMAP ad schedule details

### Bug Fixes
* Fixed an issue where VMAP breakstart/breakend callbacks would not fire when no ad source was present.

<a name="2-7-2"></a>
## Version 2.7.2 (Build 25 - Mar 24, 2017)
### Bug Fixes
* Fixes bug where a file is downloaded on the main thread

<a name="2-7-1"></a>
## Version 2.7.1 (Build 24 - March 10, 2017)
### Bug Fixes
* Fixes bug where the onAdSkipped and onAdMeta delegate methods would not fire

<a name="2-7-0"></a>
## Version 2.7.0 (Build 23 - Feb 23, 2017)
### New Features
* Added the ability to programmatically setup the JW Player license key in JWPlayerController. Useful for developers who integrate our framework into their own and want to obfuscate the license key from users.
* Added bitRateUpperBound property to set the maximum bitrate level during automatic quality switching. Useful in limiting bandwidth consumption for viewers.

### Enhancements 
* Adaptive bitrate switching for HLS streams will now be managed directly by AV Player and will behave like "auto". The HD button in this case will not display and manual quality switching is no longer supported. As a result, this resolves issues regarding multiple audio and caption tracks not behaving correctly for HLS streams and improves overall bitrate switching behavior. 

<a name="2-6-8"></a>
## Version 2.6.8 (Build 19 - Feb 21, 2017)
### Bug Fixes
* Fixes bug where controlBarIsVisible did not fire during vast ads
* Fixes bug where calling load: during a VAST ad does not load the requested file at time 0
* Fixes bug where preload would occasionally load the same file twice
* Fixes bug where occasionally buffer icon would stay on screen during playback

### Enhancements
* Supports Google IMA SDK version 3.3.1

<a name="2-6-7"></a>
## Version 2.6.7 (Build 18 - Feb 17, 2017)
### Bug Fixes
* Fixes bug where side loaded webVtt and SRT captions do not display

<a name="2-6-6"></a>
## Version 2.6.6 (Build 17 - Feb 7, 2017)
### New Features
* Added support for "preload" where media is preloaded after the player is setup but before the play button is pressed. This allows JW Player to fetch media information prior to playback and enhances perceived performance by users.
* The "mediafile" string is now returned in the onAdImpression() delegate, which represents the currently playing media item. Also returns a boolean indicating if ad is linear

<a name="2-6-5"></a>
## Version 2.6.5 (Build 16 - Jan 31, 2017)
### Features
* Added support for variable rate playback. Dynamically adjust the playback speed of the media to be slower or faster, for both forward and reverse playback.
* Enabled pausing and resuming IMA Ad playback with the Player's playback API
* Added support from the Google IMA SDK to specify the language to be used to localize ads

### Enhancements
* Supports Google ChromeCast version 3.3.0.11401

### Bug Fixes
* Fixed bug where playlist containing vast pre-rolls would occasionally load next playlist item at the wrong start time
* Fixed an out of bounds crash that would intermittently occur when loading a CSS Skin

<a name="2-6-4"></a>
## Version 2.6.4 (Build 15 - Jan 24, 2017)
### Bug Fixes
* Fixed bug where replaying a stream with a vast pre-roll would jump to the end after the ad completed
* Fixed IMA crash caused when switching between view controllers

<a name="2-6-3"></a>
## Version 2.6.3 (Build 14 - Jan 12, 2017)
### Bug Fixes
* Fixed firing of VMAP breakstart tracking event

<a name="2-6-2"></a>
## Version 2.6.2 (Build 12 - Jan 12, 2017)
### Bug Fixes
* Fixed bug where HD button would not display
* Fixed a crash when a poster image was set that returned a 404 status
* Fixed a bug where the onAdImpression delegate method would not get called when playing vast ads that did not contain wrappers
* Fixed a bug where the onAdImpression delegate method would incorrectly indicate "preroll" for some VAST ads played using the Google IMA ad client
* Fixed a bug preventing ATS compliance

<a name="2-6-1"></a>
## Version 2.6.1 (Build 11 - Dec. 22, 2016)
### Features
* Added onControlBarVisible callback that indicates when the player control bar's visibility changes. Sync your custom UI elements to display & hide with the player control bar.

<a name="2-6-0"></a>
## Version 2.6.0 (Build 9 - Dec. 12, 2016)
### Features
* Added onAdCompanion() callback for VAST client that returns companion ad data

### Enhancements
* Upgraded SDKs to use JW Player 7.8
* General improvements to SDK player UI
* More detailed error messaging to assist debugging
* onMeta() now includes bitrate, frame rate, & dropped frames information
* Enhanced general fullscreen and rotation UI and behavior
* Improved accuracy of state changes when JWPlayerStateChangedNotification is fired

### Bug Fixes
* Fixed visual transitions to and from full screen, and on rotations for iPad devices
* Fixed an issue that would cause the player to exit fullscreen on a 180 degree rotation
* Fixed an issue where calling Load() during an IMA Ad does not dismiss the ad
* Fixed an issue where VPAID ads would start in Fullscreen

<a name="2-5-8"></a>
## Version 2.5.8 (Build 99 - Nov. 30, 2016)
### Bug Fixes
* Fixed a bug where a crash would occur during the deallocation of a JWPlayerController that had been playing ads with the Google IMA client
* Fixed a bug where occasionally a crash would occur during changes in Network Connectivity

<a name="2-5-7"></a>
## Version 2.5.7 (Build 97 - Nov. 22, 2016)
### Bug Fixes
* Fixed a bug where some JS and CSS files were downloading on the main thread
* Fixed a bug where setting a file and a playlist in the JWConfig would result in the playlist being ignored

<a name="2-5-6"></a>
## Version 2.5.6 (Build 96 - Nov. 8, 2016)
### Bug Fixes
* Fixed a bug where Ads rendered using the Google IMA client would not render on multi-source streams.

<a name="2-5-5"></a>
## Version 2.5.5 (Build 95 - Oct. 31, 2016)
### Bug Fixes
* Fixed a bug where the video would automatically replay after a Google IMA post roll
* FIxed a bug where seeking while offline would display the offline poster even though the video would continue playing in the background
* Fixed a bug preventing offline playback of local files
* Fixed a bug where setting the JWPlayerController pictureInPictureDisabled property to YES would not prevent entering Picture in Picture when exiting the app while in fullscreen
* Fixed a bug preventing playback of AES encrypted streams after switching stream qualities
* Fixed a bug preventing quality switching when reproducing DVR streams
* Fixed a bug preventing AutoStart after calling the JWPlayerController's load: method
* Fixed a bug where IMA VMAP post rolls would not replay after replaying the stream
* Fixed a bug where occasionally MP4 and MP3 streams would restart after seeking many consecutive times

### Enhancements
* Compatible with Google IMA SDK version 3.2.1

<a name="2-5-4"></a>
## Version 2.5.4 (Build 90 - Oct. 3, 2016)
### Bug Fixes
* Fixed a bug in iOS 10 where rotating to landscape on a view controller supporting all interface orientations (UIInterfaceOrientationMaskAll) with the player's forceFullScreenOnLandscape property set to True would display an incorrect fullscreen orientation

<a name="2-5-3"></a>
## Version 2.5.3 (Build 87 - Sep. 22, 2016)
### Bug Fixes
* Fixed an issue where uploading to the App Store without the Google IMA or Google Cast SDKs would result in a rejection

<a name="2-5-2"></a>
## Version 2.5.2 (Build 86 - Sep. 22, 2016)
### Bug Fixes
* Fixed an issue where certain enums were not compatible with Swift

<a name="2-5-1"></a>
## Version 2.5.1 (Build 84 - Sep. 21, 2016)
### Bug Fixes
* Fixed an issue where certain HLS streams wouldn't be recognized correctly by the SDK
* Fixed an issue in playlists where the HD button would appear even if some items in the playlist did not support multiple qualities
* Fixed an issue where the HD button wouldn't appear after 'load:' was called
* Fixed an issue where ads with a '#' in the URL would produce an error

### Enhancements
* Enums are now compatible with Swift

<a name="2-5-0"></a>
## Version 2.5.0 (Build 83 - Sep. 14, 2016)
### New Features
* Added support for Related Feeds player setup options
* Added support for custom HTTP headers for video streams (including signed cookies or tokens) via AVURLAsset Options dictionary
* New and updated delegate callbacks (eg. onAdStarted) for parity with HTML5 player
* Added a media ID property to JWPlaylistItem to allow developers to specify the JW Media ID for an externally hosted media file in the JW Platform in order to track analytics for that video

### Enhancements
* Compatible with iOS 10
* Improved onTime to ping every 100 ms
* Poster image for lock screen is now fetched on the background thread
* The player now detects the "Video Override" option from the users's "General -> Accessibiity -> Subtitles & Captioning -> Style" settings to determine whether to have the video settings override the user's accessibility settings

### Bug Fixes
* Fixed an issue where setting an adBreak tag with setter instead of using AdBreak's initWithTag custom initializer caused a crash
* Fixed an issue where toggling displayLockScreenControls did not update correctly
* Fixed an issue for multiple IMA midrolls where if one midroll should fail and return an ad error, the next scheduled midroll would erroneously play out of turn instead of resuming media playback
* Fixed an issue where playlists with IMA or VAST ads would erroneously display "Live Stream" in the status bar after ending
* Fixed an issue where captions from the media were displayed during ad playback

<a name="2-4-5"></a>
## Version 2.4.5 (Build 79 - Sep. 6, 2016)
### Enhancements
* Optimized asset loading to be asynchronous on the background thread
### Bug Fixes
* Fixed an issue where if several instances of the player were created concurrently, only the last player instantiated would play

<a name="2-4-4"></a>
## Version 2.4.4 (Build 77 - Aug. 26, 2016)
### Bug Fixes
* Fixed an issue where unsupported/incompatible ad creative file types were not being ignored (e.g. Flash ads)

<a name="2-4-3"></a>
## Version 2.4.3 (Build 74 - Aug. 15, 2016)
### Bug Fixes
* Fixed an issue where a crash would occur upon player deallocation on iOS 8

<a name="2-4-2"></a>
## Version 2.4.2 (Build 73 - Aug. 10, 2016)
### New Features
* Player specific volume control

### Known Issues
* Volume control does not apply to Google IMA ads or casting at this time

<a name="2-4-1"></a>
## Version 2.4.1 (Build 58 - Jul. 08, 2016)
### Bug Fixes
* Fixed an issue where OnAdPlay() was not fired for IMA ads when ad resumed
* Fixed an issue where VAST ads would loop if called during playback of a DRM encrypted file
* Fixed an issue where the player incorrectly shows a "play" state when returning from background
* Fixed an issue where IMA ads didn't play in playlists if the IMA tag contained percent-encoding within the optional "cust_params" query string parameter.
* Fixed an issue where adClick would open Safari even if openSafariOnAdClick was set to "NO"
* Fixed an issue where the ad would continue playing in the background after an ad click opens Safari
* Fixed an issue where a paused video would resume playing when app sent to background

<a name="2-4-0"></a>
## Version 2.4.0 (Build 56 - Jun. 29, 2016)
### New Features
* Playback of HLS streams protected with Apple FairPlay Streaming (FPS) is now supported
* Free, Premium, and Platinum license editions are now supported
* Ad impression limits are now checked when ad playback is requested in order to prevent ad impression overage charges

<a name="2-3-2"></a>
## Version 2.3.2 (Build 55 - Jun. 27, 2016)
### Bug Fixes
* Fixed an issue where Google IMA prerolls would not play in simulator
* Fixed an issue where Google IMA prerolls would not play in certain devices
* Fixed an issue where Google IMA VMAP midrolls would not play

<a name="2-3-1"></a>
## Version 2.3.1 (Build 53 - Jun. 08, 2016)
### Bug Fixes
* Fixed an issue where the onError callback was not getting called
* Fixed an issue preventing bit coding for cocoapods

<a name="2-3-0"></a>
## Version 2.3.0 (Build 52 - Jun. 06, 2016)
### New Features
* VPAID 2.0 Support
* Audio playback control for app in background

### Bug Fixes
* Fixed an issue where IMA ad callback events were fired twice
* Fixed an issue where specifying a title would cause a crash when attempting to cast to certain devices
* Fixed an issue where reload screen would disapper after locking and unlocking device
* Fixed a general casting issue where casting to certain devices would fail
* Fixed an issue where the letter "x" would appear in front of the default quality level label if attribute name was undefined
* Fixed an issue where the playerController returned the playback position from the previous item during the first second of playback when a new file was loaded
* Fixed an issue where some audio MP3 ID3 metadata would cause a crash
* Fixed an issue where loadConfig was not working

<a name="2-2-1"></a>
## Version 2.2.1 (Build 50 - Apr. 27, 2016)
### Bug Fixes
* Fixed issue where when submitting to Apple App Store, iTunes would complain about using private APIs
* Fixed issue where sometimes buffering animation would not appear at video start
* Fixed issue where background sound would be disabled
* Enabled bit coding

<a name="2-2-0"></a>
## Version 2.2.0 (Build 49 - Apr. 08, 2016)
### New Features
* Apple AirPlay Support
* Google Chromecast Support
* Local Media File Playback (Offline)
* CEA-608 Captions in HLS
* HLS In-Manifest WebVTT subtitles

### Bug Fixes
* Fixed an issue where VOD videos would briefly display “Live Broadcast” if the duration of the video couldn't be calculated

<a name="2-1-0"></a>
## Version 2.1.0 (Build 36 - Feb. 02, 2016)
### New Features
* HLS Live DVR
* ID3 Timed Metadata
* Picture in Picture (iOS 9 iPad only)
* HLS Multiple Track Audio

### Bug Fixes
* Fixed issue where video did not restart from beginning after 'repeat' button was tapped

### Known Issues
* iPads will display in-band text tracks (captions) within the m3u8 manifest if they exist and cannot be turned off

<a name="2-0-33"></a>
## Version 2.0.33 (Build 33 - Dec. 01, 2015)
### Bug Fixes
* Fixed an issue where the rotation observer wasn't properly updated if multiple players were created, resulting in a crash

<a name="2-0-32"></a>
## Version 2.0.32 (Build 32 - Nov. 17, 2015)
2.0 marks a significant step toward our goal of “One JW Player”. The developer-facing APIs in the SDK are native iOS classes (Objective-C/Swift), but they are wrappers around the newest version of our flagship JW Player 7 JavaScript/HTML5 library (jwplayer.js), powering new player customization options like CSS skinning and a DPI-responsive player UI optimized for mobile. Check out our [blog post](http://www.jwplayer.com/blog/ "JW Blog") to learn more about our "One JW Player" vision.

### New Features
* Updated to JW Player 7
  * CSS Skinning Model
  * DPI-responsive player UI with mobile optimization
    * Devices with a smaller viewing area will now see a more mobile-friendly control bar UI. Font size has been increased and secondary control bar elements have been relocated to an overflow menu
* New API Calls
  * getBuffer
  * getVisualQuality
  * get/set Controls
  * stop
  * getSafeRegion
* Dynamically load media sources within existing player for playlists or videos
* Captions styling from iOS Accessibility options
* Offline Error Handling & Custom Messaging
* Advertising
  * Non-Linear Ads (Overlays)
  * Ad Tag variable support
* JW SDK for iOS available via [CocoaPods](https://cocoapods.org/?q=jwplayer "JWPlayer CocoaPod")
* Supports 608 captions and in-line captions
* Supports accessibility styling for both 608 captions and in-line captions
* Supports custom styling for in-line captions

### Bug Fixes
* Fixed bug that prevented full screen on rotation when player view is added to a view that is not the root view of the presented view controller
* Fixed bug where MP3 & MP4 media loaded slower than expected
* Fixed bug where the player would crash the app when opened for the first time while offline

### Known Issues
* Playlist icon does not display on the control bar on some phones
* Ad Message will occasionally span 2 lines on some phones
* For Google IMA prerolls, sometimes the media will appear briefly before the preroll begins
* Calling playAd after a VMAP has been loaded using Google IMA will cause the completed ads to replay when the requested ad finishes reproducing
* When reproducing a stream containing multiple qualities, if the viewer switches from a quality that contains embedded captions (608 captions or in-line captions) to a quality that does not contain embedded captions, the Closed Caption button might not be removed from the control bar. Toggling the Closed Caption button will have no effect
* Occasionally toggling play/pause on lock screen will cause playback information to briefly disappear and then reappear


---
<a name="1-x"></a>
## Version 1.x
Release Notes prior to JW SDK version 2.0 (1.x) are available in the readme.txt file included in the 1.x download packages

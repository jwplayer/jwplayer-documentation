#JW Player 7 Release Notes

This page lists all changes for the various JW Player 7 releases. JW Player 6 release notes can be found [here](http://support.jwplayer.com/customer/portal/articles/1403726).

## Major Version Releases

*   [Version 7.9](#version79) - 02/02/2017
*   [Version 7.8](#version78) - 11/30/2016
*   [Version 7.7](#version77) - 10/4/2016
*   [Version 7.6](#version76) - 8/15/2016
*   [Version 7.5](#version75) - 7/26/2016
*   [Version 7.4](#version74) - 4/25/2016
*   [Version 7.3](#version73) - 2/1/2016
*   [Version 7.2](#version72) - 11/18/2015
*   [Version 7.1](#version71) - 9/16/2015
*   [Version 7.0](#version70) - 7/20/2015

## Release Channel Status

Read [Using Release Channels](http://support.jwplayer.com/customer/portal/articles/2149561-using-player-release-channels) for guidance on which release channel to use and for an overview of how often each channel gets updated. The table below will update when a new version is pushed to any of the channels. The Beta channel will update more frequently as a release is coming.

Sign up to our [release-candidate](http://www.jwplayer.com/release-candidate-sign/) list to get notified when we update the beta channel so you can test and verify new functionality. These messages are only sent to indicate an upcoming release and provide a target for when the production channel will be updated with a minor version. Patch updates are quick bug fixes that do not get notified on the mailing list. We are however working on a way to get notified for when all channels get updated.


|Channel|Player Version|Release Date|Notes|
|---|---|---|---|
|Production|7.9.1|02/09/2017|Fixes|
|Beta|7.9.1|2/08/2017|Fixes|

* * *
<a name="version79"></a>
### **JW 7.9.1** - 2/08/2017
####Fixes
* Fixed several issues with HLS where midrolls could case the stream to restart from the beginning or freeze on a black screen and prevent playback from resuming.
* Fixed an issue where some DVR streams were starting from the beginning and not Live edge.
* Resolved an issue in Edge where stopping an HLS stream programmatically could result in an error.
* Fixed issues with the load() API that caused errors in IE11 and Edge.

### **JW 7.9.0** - 02/02/17
In JW 7.9, the UI has been updated to embrace small player sizes on mobile and desktop. Additionally, the Casting feature has been overhauled to handle both Google’s Chromecast and Apple’s Airplay. Lastly, support for playback of 360 Video has been added - no additional plugin required.

####UI Updates
* Improved usability of controls at small player sizes:
	* Moved the timeslider above (instead of inline) the control bar buttons to make the timeslider more functional and reduce clutter in the control bar.
	* Moved the Play/Pause, Rewind, and Next buttons onto the player view.
	* Moved dock buttons closer to the top right corner.
	* Updated the controlbar during ad playback to have a fixed height and fit ad text in a single line.
	* Removed the video description text that was visible before media playback starts.
	* Display a countdown instead of the current time and duration at player sizes below 320px.
* Added a configuration option “timeSliderAbove: true” that moves the timeslider above the control bar buttons at all  player sizes.
* Updated player controls on mobile so that users can tap on the view to hide/show the controls while paused to facilitate taking screenshots of the content being watched.
* Overhauled premium skins to provide better consistency.

####Casting Updates
JW 7.9 no longer uses the custom receiver application hosted by JW Player. Instead, once casting is enabled the player will connect to the default receiver application hosted by Google. Because of this, you no longer need to register an application ID with Google and all existing setups will function correctly.

The following changes have also been implemented:

* AirPlay is now supported in Safari and iOS from within the Player.
* Cast configuration options have been removed from the Dashboard.
* Non VP9 DASH streams can be cast to Cast enabled devices.

####Advertising Updates
* Added configuration option “vpaidcontrols: true” for VPAID ads to force the controlbar to show.

####Streaming Updates
* Added support for Azure’s PlayReady AES functionality.
* Performance improvements to HLS in HTML5.
* Added support for playback of 360 Video.  Both magic window and VR modes are supported when streaming a spherical 360-degree video.
* Updated FreeWheel slot-end event handling.

####Fixes
* Fixed firing of VMAP breakstart tracking event.
* Fixed an issue with the handling of VPAID wrapper clickthrough.
* Fixed an issue where adcomplete was firing on one ad in an ad pod on skip in certain situations.
* Fixed issues around DVR playback and starting from the Live point.
* Fixed an HLS playback stutter issue which occurred in streams that defined unusually short segments.
* Fixed an issue with ad pods with both VPAIDs and Vast linear ads where all pod items were not being played.
* Fixed an issue with HLS live streams where an empty child manifest would crash the player.
* Fixed an issue with playing IMA ad content via the API.
* Added better error handling for situations where IMA returns an empty xml.
* Fixed an issue where an IMA skippable ad was not skippable if immediately preceded by a VPAID.
* Fixed an issue that caused  “preload: none” to break IMA ads.
* Fixed an issue where firstframe was firing before playback started with “preload:auto”
* Fixed an issue where the VisualQuality event did not return the index that corresponds with the quality level in getQualityLevels.
* Added configuration option to advertising block for IMA's "enablePreloading" setting. "enablePreloading = false" disables ad preloading and resolves issues with back-to-back VPAIDs in pods. VPAIDs are not fully supported in IMA when using "enablePreloading = true".


<a name="version78"></a>
### **JW 7.8.7** - 01/04/17
####Fixes
* Updated HLS in HTML5 to restrict maxium quality chosen in adaptive playback to be based on the player width and height. This reduces bandwidth and improves system performance.

### **JW 7.8.6** - 12/21/16
####Fixes
* Fixed a syncing issue with HLSv4 VTT subtitle tracks and discontinuities.
* Fixed an intermittent issue with duplicate HLS 608 captions.

### **JW 7.8.5** - 12/20/16

Note that 7.8.5 was never promoted to production and all of these fixes are wrapped into 7.8.6.

####Fixes
* Improved accessibility for Next Up Close button by adding an Aria label.
* The API calls setVolume() and getMute() now work correctly when the player is muted for autoplay on mobile.
* Fixed an issue with HLS 608 captions truncating captions over 32 characters.
* Fixed an issue where sideloaded VTT captions were not displaying after prerolls.


### **7.8.4** - 12/16/16

####Fixes
* Fixed an issue where preroll ads on iOS played with Google IMA would pause and stall when preload was set to none.
* Aligned captions to correct time with streams that had ads stitched from Uplynk.
* Returned the embed code to the Sharing overlay for player sizes that can fit it.
* Fixed an issue with ad time events not firing between midrolls with FreeWheel.
* Added functionality to  play only the second midroll if a viewer skips past two midrolls with FreeWheel.


### **7.8.3** - 12/08/16

Note that 7.8.3 was never promoted to production and all of these fixes are wrapped into 7.8.4.

####Fixes
* Fixed an issue in HLS where gaps caused by segments not starting with keyframes was causing the stream to jump ahead.
* Fixed an issue in HLS where gaps were caused by #EXT-INF numbers not having a leading digit (having fragment durations less than one second).
* Updated logic regarding VPAID ads to not pause on click-through so VPAIDs without native controls don’t get stuck in a pause state.
* Fixed an issue with IMA ads and playlists where moving to the next playlist item via the Next button or Next Up Overlay would prevent ads from playing on that playlist item and subsequent ones.
* Fixed an issue where ads clicked on Android could not be resumed via the play display icon, only the controlbar.
* Fixed an issue with switching playlists via the API when using FreeWheel.
* Fixed an issue where streams with discontinuities were not always getting proper VisualQuality events.
* Fixed an issue where the VisualQuality event was misreporting height and width on a level change.
* Added beta MP3 support to HLS streaming.


### **7.8.2** - 12/03/16

####Fixes
* Fixed intermittent tab crashes in Chrome when Flash is selected as the primary mode of playback.
* Fixes the accuracy of the time slider in Android Chrome when the viewport is zoomed.
* Seeking outside the buffer in an HLS stream now properly updates the state to buffering.
* Fixed cases where audio tracks did not show up for certain HLS v4 manifests.
* Fixed parsing of HLS manifests containing sub-second durations starting with decimal points.

### **7.8.1** - 11/30/16

In JW Player 7.8 HLS will be played in HTML5 as default in Chrome, Firefox, Safari, and Edge without the need to set a separate configuration. This update comes on the heels of Chrome updating to turn [all Flash into click-to-play](https://www.jwplayer.com/blog/deprecation-flash/). JW 7.8 also adds support for autoplay on mobile, including a new interface element to unmute autostarted videos on mobile, as well as a FreeWheel advertising plugin.

**Please Note:** Since the player will now be rendering HLS streams in HTML5 in most browsers, we suggest that you make sure the CORS headers on the domains hosting your streams are set up properly to allow your domain access. Otherwise, your HLS streams may fail to play. Please see our [Cross-domain File Loading support article](https://support.jwplayer.com/customer/en/portal/articles/1403679-crossdomain-file-loading) for more information.

####Streaming Updates
* Added failover support to load the player via HTML5 when Flash is chosen as the primary setting but is blocked or not available
* Added support for multiple audio track renditions using #EXT-X-MEDIA and TYPE equal to AUDIO in HTML5.
* Added support for subtitles in HTTP Live Streaming using WebVTT with #EXT-X-MEDIA and TYPE equal to SUBTITLES in HTML5
* Improved time to switch to a higher quality.
* Updated UI to show bitrate when multiple adaptive qualities with the same width are present.


####FreeWheel HTML5 Integration
* Created built in FreeWheel Ad Manager for HTML5.
* Added support for all primary use cases around ad formats, pre/mid/post-roll slots, analytics, Javascript creatives (Flash creatives are not supported).


####Mobile Autoplay and UI
* Added support for inline autoplay while muted on iOS and Android
* Added mute/unmute button to controlbar on mobile
* Provided the configuration `autoplayadsmuted:true` to allow ads to autoplay muted on mobile
* Updated sharing overlay for improved usability at smaller player sizes

####Sharing Overlay
* Created small player and mobile-friendly overlay that scales based on player size
* Removed video title that was previously being truncated for most title lengths
* Removed Iframe/embed icon and text from overlay to reduce clutter
* Removed URL text to reduce clutter in favor of a button that copies the URL

####Fixes
* Fixed display of accented characters with 608 captions
* Better handling of aspect ratios with HLS streams

<a name="version77"></a>
### **7.7.6** - 11/2/16

#### Streaming Updates
* Fixed stability of HLS streaming in HTML5

### **7.7.4** - 10/28/16

#### UI Updates
* Adjusted player breakpoints to optimize experience for small players
* Scaled and adjusted padding for dock buttons at small player sizes
* Made a change to truncate controlbar text instead of adjusting height to accommodate multiple rows
* Adjusted margins around premium skins at small player sizes to maximize usable space
* Next Up overlay is hidden at smaller player sizes
* Removed watermark from trial edition

#### Advertising Updates
* Support forceNonLinearFullSlot config in IMA

### **7.7.3** - 10/20/16

#### Improvements to HLS HTML5
* Fixed an issue in HLS where streams that had the same resolution but different bitrates were filtered out as redundant fallback streams. HD menu will now display these streams and their respective bitrate.

### **7.7.2** - 10/18/16

#### Improvements to HLS HTML5
* Fixed an issue where certain audio streams containing a final short AAC segment were not going to a “complete” state.
* Fixed an issue in Safari where on(‘meta’) was not outputting ID3 metadata after advertisements.
* Fixed an issue where adjacent keyframes could cause stalls if the sample duration of the audio was longer than 2 keyframes.
* Fixed an issue where switching qualities multiple times in a non-self instantiating stream could cause stalls.
* Fixed an issue in Firefox where 608/708 captions would not appear with DVR streams.
* Fixed an issue in Google IMA where setting “mute” configuration to true would play audio on certain ads for a split-second.

### **7.7.1** - 10/10/16

#### Improvements to HLS HTML5
* Fixed an issue with live streams with inconsistent gaps in encoding that would desync and fail to play.
* Fixed audio sync issues with live streams
* Fixed an issue where HLS streams with a short final segment would not play the last segment
#### Discovery Overlay Fixes
* Fixed an issue where additional pause events were firing when an item was chosen from the playlist overlay
* Fixed an issue with discovery overlay where unplayed items were incorrectly marked as played
#### Captions Fixes
* Fixed an issue in Firefox where HLS 708 captions were displaying in the bottom-left region
* Fixed an issue in Firefox where sideloaded captions were not selectable when used in combination with 608 captions
* Fixed an issue in Safari where embedded 608/708 captions were not available after a linear ad
#### DRM Fixes
* Fixed an issue in Safari where Fairplay DRM was not triggering a player error when a keyerror was fired
* Fixed an issue in Firefox where replaying a DRM DASH stream would not play ads


### **7.7.0** - 10/4/16

JW Player 7.7 has a new interface for displaying playlist content and a new flow for transitioning into discovery mode to showcase recommended content. The tile layout introduced in JW 7.6 will now also be used to display curated playlist content, replacing the visual playlist in the controlbar. After the last playlist item, if there are JW Platform powered recommendations, the UI will transition seamlessly into discovery mode which continuously recommends new videos to help viewers discover new content.

This release also enhances the controlbar UI with a new default rewind 10 second element, a new “Next Up” button which shows a tooltip for the next video to be played when hovered over, and the option for the Next Up element to display before the next video begins.

**Note:** JW Player 7.7 removes support for mp3 audio in HLS HTML5. HLS streams should use AAC audio instead.

#### New in Streaming and DRM
* H.264 video and aac audio encoded HLS streams are now supported in HTML5 in Firefox
* Updated to a new DASH library that will start faster as well upswitch qualities quicker
* Multi-period streams are now supported
* Support for custom functions when requesting key and certificates for Apple FairPlay Streaming
* Added the ability to set custom HTTP headers for Widevine and PlayReady key requests

#### New Playlist Overlay and Next Up Changes
* Added the ability to flip through pages of feeds in both curated playlist and discovery mode within the Next Up video overlay
* New configuration options to set localization text for Next Up and Playlist overlay title
* New Next Up tooltip will show the playlist item or the next recommended item
* Updated the icon used for related dock items to be consistent with playlists
* Added a nextupoffset that can be used to trigger a moment in the video to display the Next Up item. The default value is 10 seconds before the item ends.

#### New in Advertising
* No longer using IMA 3 Flash SDK, all IMA ads will render using the HTML5 IMA SDK

#### Changes
* Improved compatibility with RequireJS
* When the player errors, a viewer can now access the playlist overlay and navigate to new content
* Ability to set the minimum configurable length for when DVR controls are enabled
* Removed previous button from controlbar
* Created a new 30 second seek back icon and controlbar element
* Right-click menu will automatically close after 3 seconds
* MP3 audio is no longer supported in HLS HTML5:
	* TS files that include video and mp3 audio will have audio removed
	* Segmented MP3 files and TS files that use the mp3 audio codec will not play

#### Fixes
* Fixed an issue with unmarked discontinuities in HLS streams causing the player to hang
* Fixed player API to not trigger pause when seeking is happening
* Fixed multiple issues with PlayReady streams not playing
* Fixed ads being skippable in an ad pod before the allotted skipoffset was reached
* Fixed HTML5 HLS not broadcasting stalled when it is stalled.


<a name="version76"></a>

### **7.6.1** - 8/29/16

#### Fixes:
* VPAID ads can now be used inside of ad pods if they are sequenced in following patterns: (1) The pod starts with a VPAID creative and can be followed by multiple VPAID units, (2) The pod can end switch from VPAID to standard linear ad, (3) The pod cannot switch from linear ad to a VPAID creative
* Fixed an issue where captions would need to be re-enabled after a preroll
* VMAP requests will initially use withCredentials=true and fall back to withCredentials=false
* Added support for embedded 608 captions in HLS streams for Microsoft Edge
* Fixed multiple issues with timing and appearance of 608 captions after discontinuities in an HLS stream
* Fixed captions in live streams turning off after pausing and resuming the stream
* Fixed an issue where side-loaded tracks were not loading in IE9
* Fixed an issue where next up related item was repeated instead of cycling to a new video
* Updated style for video titles wrapping in related video overlay
* Nan/Nan no longer appears as the duration and current time if the player takes an extended time to set up

### **7.6.0** - 8/15/16

JW Player 7.6 has a mobile optimized design for displaying recommended content during and after a video ends. This new overlay is called “Next Up” and retains all of the functionality the related overlay. Next Up pairs seamlessly with feeds from JW Platform to allow your viewers to continue watching and discovering great content.

#### New Features:

* Updated design for showing recommended and related content

#### Fixes:

* Fixed issue in Google IMA where adTime was not being returned in HTML5

### **7.5.2** - 8/4/16

#### Fixes:
* Captions will no longer move when controls are disabled and player is moused over
* DFXP captions will now be read correctly when using colons to separate seconds and frames
* Player will now prioritize sequenced ads within an ad buffet
* Native captions no longer display twice when using thumbnails with HTML5 Provider
* Player will now display multiple captions that use the same timestamp
* 608 captions should now wrap correctly in IE
* DFXP/SRT captions should now wrap correctly in all browsers
* Fixed issue where background color styles could incorrectly be applied to captions


<a name="version75"></a>

### **7.5.0** - 7/26/16

JW Player 7.5 adds DRM compatibility for two additional browsers (Firefox and Safari Desktop) as well as improvements to captions positioning, handling, and styling. Aria integration improves accessibility by adding support for screen readers. Finally, we've exposed additional tracking information via our API, and made VMAP ad scheduling more robust. All changes/improvements can be seen below:

#### New Features:

####[DRM](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#drm) and Streaming Improvements
* withCredentials can now be added to HLS HTML5 manifest requests by including “withCredentials”: true to a playlist item
* Added support for redundant HLS streams in HLS HTML5
* Preload options now supported in HLS HTML5
* Widevine DRM now functional in Firefox 47+
* Fairplay DRM now functional in Safari Desktop
* Various fixes/improvements to Playready DRM
* Increased speed of Dash quality upswitching
####Advertising Improvements
* Support for ad tag macros with VMAP ad schedule URLs
* Different VMAPs can be used on individual playlist items
* CreativeView tracking pixels now returned with adCompanions API event
* Ad Impression will now return the mediafile type as creative type
* Information about ad wrappers will now be exposed with adImpression event
####Captions Refactor + Accessibility Improvements
* VTT positions now supported in Flash and HTML5
* Required caption polyfills will be loaded on-the-fly when required (Based on browser support)
* “C” keyboard shortcut will now toggle captions display
* Change caption appearance/style on the fly with new [setCaptions() API](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#captions)
* Support for embedded 708 Captions (In HLS HTML5)
* Support for VTT positions
* Improved screen reader support with Aria implementation (Credit to [francoismassart](https://github.com/francoismassart))

#### Changes:
* Providers will now be loaded separately only when required
* New default "Seven" Skin
* CC button will show active color whenever captions are not off
* Skinning model improvements/cleanup
* Adaptive streaming qualities now ordered in API and menus based on bandwidth
* A single ad error will no longer error out an entire ad pod

#### Fixes:
* HLS JS now correctly returns mpegts data with ‘time’ event
* Cursor will now hide with controls in HTML5 mode
* If within a certain threshold, posters will snap to the full player size
* Fixed issue with VPAID 2 resizing while toggling fullscreen
* Player now correctly obeys stretching options in fullscreen Flash
* VPAID 2 ad will no longer display control bar with Google IMA plugin
* Audio HLS streams will now properly play with captions
* Mailto and Download links should no longer affect playback
* Ad pods will now fire correct complete events
* Improved 608 caption handling with discontinuity periods in Flash
* Improved segment error handling in HLS HTML5
* jwplayer.defaults now correctly sets advertising block to all players on page
* Default 8px margin no longer added to body of VPAID 2 iFrames
* AES key URLs are now parsed correctly when additional quotes were used

### **7.4.4** - 6/21/2016

* HLS JS - Tokenized child manifests were not being parsed properly when url search params contained slashes
* Added support for JW Platform JSON feeds in related plugin

### **7.4.3** - 5/25/2016

* Audio mode with Shaka is now supported
* adImpression now returns the mediaFile URL of the chosen creative
* HLS HTML5 - Player would occasionally stall on quality upswitches
* HLS HTML5 - Multiple forward seeks could stall playback
* HLS HTML5 - M3U8 manifests with capital letters were not handled correctly
* getDuration() returned duration of the previous playist item, if called before metadata was loaded
* load() was not choosing the correct provider when changing playlist items or loading media via API
* CSS list item styles could affect right click menu styling
* Player volume was not persisting on page reloads
* Stopping and replaying in HTML5 could cause an error

### **7.4.2** - 5/11/2016

* Added hlshtml configuration option to control use of HLS HTML5

### **7.4.1** - 5/6/2016

* Caption styling will now work with native HTML5 tracks in Chrome Desktop
	* When rendering captions in Chrome natively, "fontSize" in the "captions" block will not be obeyed, due to font scaling
* Changed how player fonts are loaded to prevent false positives with certain firewalls
* Progressive live streams should now change states correctly
* Google IMA ad schedules should now play properly
* Fixed an issue in IE11/Firefox where captions may display during ads
* “Default” sideloaded captions should now display in Safari automatically

<a name="version74"></a>

### **7.4.0** - 4/25/2016

HLS in HTML5 support in JW Player is currently only for Chrome 34 and above. We recommend updating to the latest version of Chrome to get the most out of HLS. Specifically support for High Efficiency Advanced Audio Codec (HE-AAC) was only introduced in Chrome 50.

The following functionality is supported in JW 7.4:

####Features
* Adaptive bitrate switching for Live, DVR and VOD streams
* Extensive support for streams with discontinuities
* 608 embedded captions
* Playback AES encrypted streams over HTTP and HTTPS
* AES tokens
* ID3 timed metadata
* Fast, frame accurate seeking
* Audio only streams with MP3 or AAC
* MPEG 2 Layer 3 and MPEG 1 Layer 3 for MP3 is supported
* HE-AAC in Chrome 50+
* H.264 main and baseline profiles
* High profile is dependent on hardware

####Not yet functional
* Multi-track audio
* Embedded WebVTT captions
* Redundant CDN switching

####Verified Encoders and CDNs
* Akamai
* Edgecast
* Fastly
* Zencoder
* Amazon Web Services
* Wowza
* Azure
* Unified Streaming

####Changes
In addition to adding HLS in HTML5, 7.4 has the following updates:

* Google IMA ad tags will automatically get duration and video title added to the request url for more enhanced ad targeting.
* WebVTT captions are rendered using the native &lt;track&gt; element in Chrome.
    * Note: Caption styling from player setup is not yet supported with HTML5 video in Chrome. This will be released with JW 7.5.
* DASH streams will now play in FireFox 45 and up. Still no reliable Safari support.
* Shaka Provider has been updated to version 1.6.5

####Fixes
* Using the API to trigger captions was not updating UI correctly.
* Relative urls were not working in FireFox.
* Mobile chrome was sending an additional play event.
* Closed-captions no longer appear during ad playback.
* Fixed an issue that could cause Google IMA ads to play behind content

### **7.3.6** - 4/1/2016

*   Fixed an HLS Flash issue where artifacts could appear after discontinuity breaks

### **7.3.5** - 3/18/2016

*   TXXX Metadata will now appear properly with Flash provider
*   Captions in audio mode will now render above the control bar

### **7.3.4** - 2/25/2016

*   Fixed issue where certain video streams were interpreted as audio-only in iOS
*   Fixed issue where thumbnail VTTs were appearing as captions in iOS

### **7.3.3** - 2/24/2016

*   Fixed iOS issue with playlists when preload was set to 'none'.

### **7.3.2** - 2/22/2016

*   Fixed issue with captions and advertising on iOS
*   Captions now display properly on IE 10
*   Ads on IE 10 should now function correctly

### **7.3.1** - 2/16/2016

*   Visual Quality API will now function on iOS
*   Flash loading errors will now provide more accurate information
*   VAST Flash companions now display properly on Firefox
*   Improved Chromecast reliability with mixed playlists
*   608 Captions will now work on DVR streams in Flash
*   608 Captions should now toggle correctly on iOS for live streams
*   Fixed regression with audio player fading during playback
*   Corrected regression where DRM streams required ‘customData’
*   Fixed regression with poster images not loading inside of playlists

<a name="version73"></a>

### **7.3.0** - 2/1/2016

JW Player 7.3 offers a variety of improvements and bugfixes. Exclusively on iOS devices, we now utilize the native [HTML5 tracks element](http://www.html5rocks.com/en/tutorials/track/basics/), allowing for fullscreen captions on iOS devices. Additional DRM options have also been added, along with other improvements and changes. The full list is below:

#### Features/Improvements:

#### PlayReady DRM Support

*   PlayReady DRM now supported on IE11/Edge browsers for Win 8.1+
*   Clearkey DRM now functions with DASH

#### HTML5 HLS Safari Improvements

*   ID3 timed metadata can now be accessed with the on('meta') listener
*   HLS DVR streams can now be viewed and controlled on JW Player controlbar
*   HLS embedded captions can now be controlled with JW Player control bar
*   Native HTML5 caption tracks are now used for iOS devices, allowing for fullscreen subtitles.
*   Multiple audio tracks can now be accessed in Safari.

#### Misc.

*   Player supports playlists in JSON file format
*   Ads rendered with Google IMA SDK now use JW Player control bar UI

#### Changes:

*   Custom logo is now a CSS-styled div element
*	New on('adBlock') API call to detect when an adblocker is installed on a viewer's browser
*	skipoffset can now be applied on a per-adbreak basis
*   Logo position options from JW6 have been restored (bottom-left, bottom-right, top-left, top-right)
*   Margins can also be specified
*   When highlighted, the player’s border color is now handled by browser styling
*   DASH streams will now use representation width pixel value as default label method
*   Small player UI now includes playlist navigation
*   Related overlay shows longer titles + larger sized thumbnails
*   Player will no longer encode urls and expects to be given a properly formatted URL for external assets.
*   In live HLS streams, if JW Player detects an empty chunklist of a certain quality, it will automatically attempt to switch qualities.
*   Non-linear fullslot ad creatives in IMA HTML5 and Flash can now be scheduled at any time during video playback.
*   New API event and getter for detecting if there is an ad blocker on the page.
*   JW Player will pass videoSlotCanAutoPlay in initAd for VPAID 2.0 creatives.
*   Seeking past multiple midrolls will only trigger and play the last midroll.

#### Fixes:

*   QoE events are now properly accounting for preroll advertising on mobile devices
*   Cuepoint text styling has been improved
*   Seeking to the live portion of a DVR stream will now properly account for buffer
*   608 captions now wrap correctly
*   RTMP streams will no longer restart when midroll ads are viewed
*   Hiding controls will now work properly when dock buttons are configured
*   Scrubbing after a final playlist completes no longer triggers playback of first playlist item
*   Control bar no longer appears between playlist items
*   Fixed an issue where JW Player was sending a flash plugin in error in an inactive tab of Chrome.
*   Audio only HLS streams now show poster image instead of black viewport.
*   Captions are no longer displayed over ads
*   Fixed an issue where the load method was unable to reload the same playlist.
*   JW Player no longer resizes during a Casting session.
*   Fixed an issue where JW Player was not skipping over non-playble media formats in a VAST response.
*   VPAID 2.0 creatives were not properly getting a mute property.

### **7.2.4** - 12/16/2015

*   VAST flash creatives will now be properly ignored when player renders in HTML5
*   Fixed “Cannot set property 'blocking' of null” VPAID console error
*   Player now renders correctly if browser cookies are blocked
*   Player now renders correctly in certain older browser versions
    *   Fixes “JSON.stringify cannot serialize cyclic structures” error

### **7.2.3** - 12/7/2015

*   Fixed issues with scrolling and Chrome throttling Flash.
*   Due to publisher feedback, when Chrome throttles Flash, JW Player will no longer sends an error event.
*   Fixed overlap between Logos and Related/Sharing close icon.
*   Fixed a regression with pseudo streaming.
*   Fixed on(‘adComplete’) event behavior with Flash VPAID creatives.
*   Improved right click overlay to be less prone to styling conflicts
*   Fixed manual quality toggling in Firefox.

<a name="version72"></a>

### **7.2.0** - 11/18/2015

JW Player 7.2 features a variety of exciting new features and updates to your video experiences. We’ve modernized our Sharing and Related plugins to coincide with our JW7 skinning principles. In addition, JW Player now supports using preload with its media. This allows the player to gather playback information about media prior to playback and may improve time to first frame.

In addition, we’ve fixed many pesky bugs, improving experiences for both viewers and publishers.

#### Features

#### Sharing Plugin

*   CSS-based design
*   New API to triggers and hides display as well as showing which networks get clicked.
*   Add your own custom social networks. Default networks include - Facebook, Twitter, Pinterest, Email, Tumblr, Google Plus, Reddit, LinkedIn

#### Related Plugin

*   CSS-based design with responsive Grid layout
*   Automatic Related Playback with configurable countdown timer and message.
*   Added support for related feeds in JSON file format
*   New API to triggers and hide display as well as show which video gets watched.

#### Support for Content Preload

*   Provides faster video startup by preloading media metadata, parsing manifest on page load, and/or starting to download the actual media.
*   Default value is none.

#### Changes

*   Right click customizations are now part of Free Edition and have an updated design.
*   When seeking with DVR, we now show a tooltip displaying the time.
*   HLS AES Key request frequency decreased.
*   dash configuration no longer needed to play MPEG-DASH streams.
*   DASH provider updated to Shaka 1.5.1.
*   PRIV ID3 metadata will now be exposed in HLS streams.
*   On mobile, display icon will appear on pause and tapping video area will now toggle playback.
*   play() and pause() now work for VPAID 2 JS creatives.
*   Custom logos will no longer hide with controls set to false.
*   Settings are no longer saving via Cookies. JW Player now uses local storage.
*   DASH sources will not attempt to play on non-chrome or edge browsers
*   Increased setup timeout from 10 to 30 seconds
*   Adjusted the placement of captions to react to controlbar being shown.
*   Updated Audio mode behavior to not get throttled by Chrome power saving.

#### Fixes

*   Player should now respond to touch events properly on iOS 7.
*   ID3 Metadata was not synching to the correct timestamp in HLS.
*   ID3 WXXX fields were not parsed correctly.
*   Multiple Youtube players on a single page will now play properly.
*   Youtube videos will now play properly on Android devices.
*   VPAID 2 Prerolls now work properly on Android devices
*   Dash live streams will display correct live controlbar UX.
*   Errors will now be properly displayed when title or description are hidden
*   Fixed resume behavior after Google IMA midroll.
*   Improved dash playback experience on Android Chrome.
*   Fixed an issue where the API was not firing on('seeked') events in Flash
*   Improved HLS performance for certain streams
*   Fixed issue with thumbnails not disappearing when moused over
*   Fixed on(‘pause’) event not firing correctly in iOS Fullscreen
*   Fixed on('beforePlay') event not firing correctly in iOS
*   Flash audio content can now be initiated when blocked in Chrome
*   Fixed an issue where androidhls was not being honored inside of a playlist
*   Fixed playback of HLS on Chromecast when the primary source is DASH. (DASH is not supported on Chromecast.)
*   Fixed an issue with clicking on flash ads in FireFox on OSX.
*   Fixed playback content not resuming after mid-roll ad-pods.

### **7.1.4** - 10/7/2015

*   VPAID 2.0 JavaScript creatives will render even when Flash is used as the main content video provider. Priority of creative choice is given to the order that they appear in the VAST response.
*   When the player is rendering in Flash mode, SWF-based VPAID 1.0 ads will play if they are listed as the first or only creative source.
*   Flash Throttling detection for Chrome.
*   Controls now fade properly even without user interaction
*   Unknown CC track was appearing in captions menu when 608 captions and WebVTT captions were part of an HLS stream.
*   Api call getVisualQuality() is now returning correct value instead of undefined.
*   Ad complete API is now firing correctly for Flash VPAID ad creatives.
*   Better handling of a Flash exception that occurs when calling setup on a bad flash embed.
*   Certain VPAID 2.0 JavaScript creatives were showing JW Player controls instead of the controls that came with the creative.
*   When Flash was blocked or not able to load the player would show a buffering icon, it now shows the native browser UI instead of JW Player UI until Flash is started.
*   When using Autoplay, player would not resumed correctly after Chrome begins Power Save throttling.
*   Fixed support for WebVTT captions in HLS live streams that were trailing behind timecodes.

<a name="version71"></a>

### **7.1.0** - 9/16/2015

JW Player 7.1.0 is our first major feature update to JW7\. This new version offers new UI changes and stability fixes. For advertising users, 7.1.0 allows Interactive VPAID 2.0 JavaScript creatives to be used on in HTML5 video players. This release also changes the behavior to the control bar when it is rendered either smaller than 300 px wide or when the interface elements get cluttered.

#### Features:

#### VPAID 2.0

HTML5/JavaScript Creatives will render on the following desktop browsers when the JW Player is using an HTML5 video provider.

|Supported Browsers|
|--|
|Chrome|
|Safari|
|FireFox|
|Opera|

*Internet Explorer is not yet supported.

*Chrome on Android is not yet supported

Fullscreen iOS browsers will play VPAID 2.0 creatives but will not have interactive elements due to no native fullscreen API support. Chrome on Android devices is not yet supported.

Fullscreen iOS browsers will play VPAID 2.0 creatives but will not have interactive elements due to a lack of native fullscreen API support.

#### Small Player UI/UX

Devices with a smaller viewing area will now see a more mobile-friendly control bar UI. Font size has been increased and secondary control bar elements have been relocated to an overflow menu.

#### Changes:

*   **on(‘adStarted’)** event added to listen for VPAID adStarted event.
*   **on(‘adImpression’)** is fired when the VPAID ad impression event is fired instead of the adStarted event.
*   Apostrophes are now accepted in image file names.

#### Fixes:

*   Youtube videos will now correctly begin when our play button is touched on mobile devices.
*   Long lists of captions will now be properly selectable in overlay menu.
*   Improved menu visibility behavior when options are selected.
*   Fixed player behavior when certain HTTP/HTTPS files were combined.
*   Bug fixes and improvements with updated DASH provider.

### **7.0.3** - 9/1/2015

*   Changed provider logic to render based on provider availability.
*   Fixed touch events on Windows 10 devices to show controls appropriately.
*   Fixed certain livestreams with 608 captions to display the captions at correct times.
*   Fixed a display issue with poster images in audio only players.
*   Fixed multi-line WebVTT captions that were not rendering.
*   Fixed support for DISCONTINUITY-SEQUENCE in HLS.
*   Fixed an HLS stream that would not play due to targetduration being incorrectly set to a negative value.

### **7.0.2** - 8/26/2015

*   **Chromecast** functionality has been re-added and is now available for Premium users. **Note:** Advertising functions are no longer available while casting
*   **vpaidmode** has been added for Google IMA VPAID 2 configuration to allow for friendly iframes.
*   Because JW7 controls are not rendered in Flash, stagevideo configuration is no longer needed and has been removed.
*   play() and pause() will now control ad playback with our VAST plugin
*   Ad skip button will now fully inherit skin styles
*   Continuing improvements to player file size and performance
*   Fixed issue with relative paths with our Flash provider
*   Player errors will now differentiate between a missing, invalid, or expired key
*   Corrected poster behavior with audio files
*   Fixed issue with multiple embedded players sharing plugins
*   Vapor skin should now display correctly on Firefox for Windows
*   Fixed titles not appearing correctly with related plugin
*   subscribe, securetoken and bufferlength have been re-added as RTMP config options.

### **7.0.1** - 8/5/2015

*   displaytitle has been re-added as a configuration option
*   displaydescription can be used to toggle the display of a file’s description field
*   visualplaylist has been add as a configuration option. The default value is true, setting this to false will remove the visual playlist from the controlbar
*   Improved replay icon appearance in seven skin.
*   Player skins are now loaded via CDN instead of being built directly into the player
*   Removed legacy GA events
*   Custom providers can now be implemented in Premium edition players
*   Added support for Akamai HDS provider. Contact Akamai for the latest version.
*   Clicking “Live” will bring you to the Live position in a DVR stream
*   Updated DASH support streams with startNumber with values of 0
*   HLS is now enabled by default for Android devices. To turn HLS off set androidhls:false
*   Hovering over the player in HTML5 shows mouseover cursor.
*   Corrected buffer display prior to ad playback
*   Improved ad schedule handling
*   Removed unstyled icon appearances during player setup
*   More reliable handling of ad errors

<a name="version70"></a>

### **7.0.0** - 7/20/2015

#### General Updates and enhancements

*   All embeds require a valid license key to work.
*   All interface elements are rendered in HTML regardless of media provider. Flash media playback will get HTML controls.
*   JW Player will dynamically change media providers between playlist items for optimal video playback.
*   You can disable all cookies by setting cookies:”false” in player embed settings.
*   Flash cookies are no longer set by the player for storing any player states between sessions.
*   Adobe Sitecatalyst built in integration has been removed in favor of creating API level integrations.
*   Analytics.js is the only supported method of Google Analytics usage.
*   The player will timeout and fire a setup error if it takes longer than 10 seconds to load.
*   Download fallback has been removed
*   Minimum version of [Adobe Flash Player](http://get.adobe.com/flashplayer/) is **11.2**
*   YouTube will only render in HTML5.
*   Semantic naming of player versions and plugins. Expect faster releases!

#### Advertising Updates

*   New **on('adRequest')** event is triggered when an ad is requested through VAST. This does not work with Google IMA ads.
*   JW Player 7 will intelligently choose VAST creatives based on player size. This means that smaller player sizes will load smaller video files.

#### API Updates

*   New **on('event')** method to attach event handlers to a player instance.
*   New **off('event')** method to remove event handlers that are attached to a player instance.
*   New **once('event')** method to add one or more event handlers to a selected player instance. This handler can only be triggered once per element.
*   New **trigger('event')** method to trigger all events bound to the selected player instance.
*   New **on('all')** as an argument to listen to all events triggered.
*   New **getProvider()** method to find out which media provider is currently being used to render video.
*   All time events are reported to the full precision available and are no longer trimmed to three decimal places.

#### Quality of Experience API

*   New event called **firstFrame** triggered when the first frame of a video is played.
*   New event called **seeked** triggered when playback resumes after seeking
*   Built in Quality of Experience API that contains **firstFrame**, the total time for a player to set up, as well as the total time spent **loading**, **paused**, **playing** and **idle**.
*   New **on('visualQuality')** event triggered when the visual quality of a video changes during playback. This only works for HLS media files and contains the bitrate, width of the player, and the reason why the quality change happened.
*   Use **getVisualQuality()** to get the quality of the video currently playing.

#### Additional API Enhancements

*   play events only fire once.
*   Original DOM container will be restored when removing player.

#### Updated CSS Skinning Model

*   All JW Player 6 skins have been rebuilt in CSS and are included within the player.
*   Set the name of the your custom skin within JW Player embed configuration to apply custom styles to the player.
*   Use inactive, active, and background configuration options to quickly set the color styles to any skin.
*   Any JW7 setup that uses a premium skin name from JW6 will automatically get the CSS version applied.
*   All icons in JW7 are built using a font. See docs on creating fonts.

More information can be found in our following articles:

*   [Using JW Player Skins](http://support.jwplayer.com/customer/portal/articles/1406968)
*   [Building JW Player Skins](http://support.jwplayer.com/customer/portal/articles/1412123)
*   [JW Player CSS Reference](http://support.jwplayer.com/customer/portal/articles/2067702)

#### Advertising Enhancements

*   JW Player will pick the best VAST Ad creative based on the size of the player when the request was made.

#### MPEG-DASH Support

*   Stream Live and VOD in HTML5 in modern browsers with MPEG-DASH. See [Using DASH Streaming](http://support.jwplayer.com/customer/portal/articles/2020483) for full list of supported features. Available in **Premium** Editions only.
*   Protect your content with Widevine DRM in Chrome. Available in **Enterprise** and **Ads** Editions only.

### Known Issues and Upcoming Features

*   Due to JW7's new skinning model, IE8 is **not** officially supported with JW7.
*   Chromecast functionality is not currently functioning. Expect this soon.
*   Logo can only be positioned in the top right corner.
*   Using Advertising and DASH may cause issues. HLS is highly recommended if you intend on monetizing your content.

#### See also [JW6 to JW7 Migration FAQ](http://support.jwplayer.com/customer/portal/articles/2037989-migration-from-jw6-to-jw7)

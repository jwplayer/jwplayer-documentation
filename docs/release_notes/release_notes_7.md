#JW Player 7 Release Notes

This page lists all changes for the various JW Player 7 releases. JW Player 6 release notes can be found [here](http://support.jwplayer.com/customer/portal/articles/1403726).

## Table Of Contents

*   [Version 7.4](#version74) - 4/25/2016 [+](#version74x)
*   [Version 7.3](#version73) - 2/1/2016 [+](#version73x)
*   [Version 7.2](#version72) - 11/18/2015 [+](#version72x)
*   [Version 7.1](#version71) - 9/16/2015 [+](#version71x)
*   [Version 7.0](#version70) - 7/20/2015 [+](#version70x)

## Release Channel Status

Read [Using Release Channels](http://support.jwplayer.com/customer/portal/articles/2149561-using-player-release-channels) for guidance on which release channel to use and for an overview of how often each channel gets updated. The table below will update when a new version is pushed to any of the channels. The Beta channel will update more frequently as a release is coming.

Sign up to our [release-candidate](http://www.jwplayer.com/release-candidate-sign/) mailing list to get notified when we update these channels.  


|Channel|Player Version|Release Date|Notes|
|---|---|---|---|
|Production|7.4.2|5/11/2016|HLS in HTML5|
|Staging/Pre-release|7.4.3|5/25/2016|Various HLS fixes|
|Beta|7.4.3|5/25/2016|Various HLS fixes|

* * *

<a name="version74"></a>

## JW Player 7.4

HLS in HTML5 support in JW Player is currently only for Chrome 34 and above. We recommend updating to the latest version of Chrome to get the most out of HLS. Specifically support for High Efficiency Advanced Audio Codec (HE-AAC) was only introduced in Chrome 50. 

The following functionality is supported in JW 7.4:

###Features
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

####Coming Soon in 7.5
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

###Changes
In addition to adding HLS in HTML5, 7.4 has the following updates:

* Google IMA ad tags will automatically get duration and video title added to the request url for more enhanced ad targeting.
* WebVTT captions are rendered using the native &lt;track&gt; element in Chrome.
    * Note: Caption styling from player setup is not yet supported with HTML5 video in Chrome. This will be released with JW 7.5.
* DASH streams will now play in FireFox 45 and up. Still no reliable Safari support.
* Shaka Provider has been updated to version 1.6.5

###Fixes
* Using the API to trigger captions was not updating UI correctly.
* Relative urls were not working in FireFox.
* Mobile chrome was sending an additional play event.
* Closed-captions no longer appear during ad playback.
* Fixed an issue that could cause Google IMA ads to play behind content

* * *

<a name="version74x"></a>

### Additional 7.4 Releases:

#### **7.4.1** - 5/6/2016

* Caption styling will now work with native HTML5 tracks in Chrome Desktop
	* When rendering captions in Chrome natively, "fontSize" in the "captions" block will not be obeyed, due to font scaling
* Changed how player fonts are loaded to prevent false positives with certain firewalls
* Progressive live streams should now change states correctly
* Google IMA ad schedules should now play properly
* Fixed an issue in IE11/Firefox where captions may display during ads
* “Default” sideloaded captions should now display in Safari automatically

#### **7.4.2** - 5/11/2016

* Added hlshtml configuration option to control use of HLS HTML5

#### **7.4.3** - 5/11/2016

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


* * *

<a name="version73"></a>

## JW Player 7.3

JW Player 7.3 offers a variety of improvements and bugfixes. Exclusively on iOS devices, we now utilize the native [HTML5 tracks element](http://www.html5rocks.com/en/tutorials/track/basics/), allowing for fullscreen captions on iOS devices. Additional DRM options have also been added, along with other improvements and changes. The full list is below:

### Features/Improvements:

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

### Changes:

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

### Fixes:

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

* * *

<a name="version73x"></a>

### Additional 7.3 Releases:

#### **7.3.1** - 2/16/2016

*   Visual Quality API will now function on iOS
*   Flash loading errors will now provide more accurate information
*   VAST Flash companions now display properly on Firefox
*   Improved Chromecast reliability with mixed playlists
*   608 Captions will now work on DVR streams in Flash
*   608 Captions should now toggle correctly on iOS for live streams
*   Fixed regression with audio player fading during playback
*   Corrected regression where DRM streams required ‘customData’
*   Fixed regression with poster images not loading inside of playlists

#### **7.3.2** - 2/22/2016

*   Fixed issue with captions and advertising on iOS
*   Captions now display properly on IE 10
*   Ads on IE 10 should now function correctly

#### **7.3.3** - 2/24/2016

*   Fixed iOS issue with playlists when preload was set to 'none'.

#### **7.3.4** - 2/25/2016

*   Fixed issue where certain video streams were interpreted as audio-only in iOS
*   Fixed issue where thumbnail VTTs were appearing as captions in iOS

#### **7.3.5** - 3/18/2016

*   TXXX Metadata will now appear properly with Flash provider
*   Captions in audio mode will now render above the control bar

#### **7.3.6** - 4/1/2016

*   Fixed an HLS Flash issue where artifacts could appear after discontinuity breaks

* * *

<a name="version72"></a>

## JW Player 7.2

JW Player 7.2 features a variety of exciting new features and updates to your video experiences. We’ve modernized our Sharing and Related plugins to coincide with our JW7 skinning principles. In addition, JW Player now supports using preload with its media. This allows the player to gather playback information about media prior to playback and may improve time to first frame.

In addition, we’ve fixed many pesky bugs, improving experiences for both viewers and publishers.

### Features

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

### Changes

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

### Fixes

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

* * *

<a name="version72x"></a>

### Additional 7.2 Releases:

#### **7.2.3** - 12/7/2015

*   Fixed issues with scrolling and Chrome throttling Flash.
*   Due to publisher feedback, when Chrome throttles Flash, JW Player will no longer sends an error event.
*   Fixed overlap between Logos and Related/Sharing close icon.
*   Fixed a regression with pseudo streaming.
*   Fixed on(‘adComplete’) event behavior with Flash VPAID creatives.
*   Improved right click overlay to be less prone to styling conflicts
*   Fixed manual quality toggling in Firefox.

#### **7.2.4** - 12/16/2015

*   VAST flash creatives will now be properly ignored when player renders in HTML5
*   Fixed “Cannot set property 'blocking' of null” VPAID console error
*   Player now renders correctly if browser cookies are blocked
*   Player now renders correctly in certain older browser versions
    *   Fixes “JSON.stringify cannot serialize cyclic structures” error

* * *

<a name="version71"></a>

## JW Player 7.1

JW Player 7.1.0 is our first major feature update to JW7\. This new version offers new UI changes and stability fixes. For advertising users, 7.1.0 allows Interactive VPAID 2.0 JavaScript creatives to be used on in HTML5 video players. This release also changes the behavior to the control bar when it is rendered either smaller than 300 px wide or when the interface elements get cluttered.

### Features:

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

### Changes:

*   **on(‘adStarted’)** event added to listen for VPAID adStarted event.
*   **on(‘adImpression’)** is fired when the VPAID ad impression event is fired instead of the adStarted event.
*   Apostrophes are now accepted in image file names.

### Fixes:

*   Youtube videos will now correctly begin when our play button is touched on mobile devices.
*   Long lists of captions will now be properly selectable in overlay menu.
*   Improved menu visibility behavior when options are selected.
*   Fixed player behavior when certain HTTP/HTTPS files were combined.
*   Bug fixes and improvements with updated DASH provider.

* * *

<a name="version71x"></a>

### Additional 7.1 Releases:

#### **7.1.4** - 10/7/2015

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

* * *

<a name="version70"></a>

## JW Player 7.0

### General Updates and enhancements

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

* * *

<a name="version70x"></a>

### Additional 7.0 Releases:

#### **7.0.1** - 8/5/2015

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

#### **7.0.2** - 8/26/2015

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

#### **7.0.3** - 9/1/2015

*   Changed provider logic to render based on provider availability.
*   Fixed touch events on Windows 10 devices to show controls appropriately.
*   Fixed certain livestreams with 608 captions to display the captions at correct times.
*   Fixed a display issue with poster images in audio only players.
*   Fixed multi-line WebVTT captions that were not rendering.
*   Fixed support for DISCONTINUITY-SEQUENCE in HLS.
*   Fixed an HLS stream that would not play due to targetduration being incorrectly set to a negative value.
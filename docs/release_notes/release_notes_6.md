#JW Player 6 Release Notes

This page enumerates all changes for the various JW Player 6 releases. Due to the launch of JW Player 7 in July of 2015, JW Player 6 is no longer being updated. Please use JW7 for any bug fixes and feature enhancements.

## JW Player 6 Release History

*   [Version 6.12](#version612) - 2/24/2015
*   [Version 6.11](#version611) - 11/20/2014
*   [Version 6.10](#version610) - 08/20/2014
*   [Version 6.9](#version69) - 06/30/2014
*   [Version 6.8](#version68) - 02/06/2014
*   [Version 6.7](#version67) - 11/07/2013
*   [Version 6.6](#version66) - 08/14/2013
*   [Version 6.5](#version65) - 06/12/2013
*   [Version 6.4](#version64) - 04/24/2013
*   [Version 6.3](#version63) - 03/13/2013
*   [Version 6.2](#version62) - 02/06/2013
*   [Version 6.1](#version61) - 12/17/2012
*   [Version 6.0](#version60) - 11/09/2012


<a name="version612"></a>

## JW Player 6.12

The release improves functionality, performance, and UX in a few different ways, with features including:

*   Improved adaptive heuristics for HLS.
*   HLS playback now supported on Chromecast.
*   Updated UX in the Chromecast Receiver application.
*   Key-value pair replacement for Google IMA ad requests.
*   Support for Microsoft HLS Azure Clearkey + Playready AES tokenization.

### Chromecast Updates

*   The following HLS v3 streams can now be played on Chromecast -
    *   AES Encrypted streams
    *   Live and DVR Streams
    *   VOD streams
*   Control playback and volume directly from the Google Cast extension.
*   The receiver application will disconnect after 20 minutes in an idle state instead of ?.

### General Updates

*   Key value pair variable replacement support in HTML5 and Flash for Google IMA ad requests.
*   The text for advertising cuepoints can now be customized.

### Bug Fixes

*   Fixed a regression with using onReady() to trigger play() in Flash.
*   Fixed an issue for VPAID ad playback that was not sized correctly when using logo position bottom-right.
*   Added support for autostart with a VMAP ad schedule.
*   Fixed the display play button in HTML5 to correctly display hover states.
*   Removed a console error for VPAID ads that was not affecting ad playback.
*   Fixed controlbar fading issue when using SMIL manifests.
*   Fixed an issue with Google IMA tags not refreshing SCOR and COR values between playlist items.
*   Fixed an issue where the player being embedded in a form causes a postback on mobile.
*   Fixed an issue where play() being set onReady() caused infinite buffering on mobile devices.
*   Fixed an issue where some HLS streams would freeze when entering/exiting fullscreen on Windows FireFox.
*   Fixed an issue where IE11 YouTube HTML5 mode would not show any controls.

#### 6.12.4956 Patch with bug fixes.

The following items were fixed on 4/6/2015:

*   Added support for HLS WebVTT captions with MPEGTS offsets to ensure closed captions appear when they should.
*   Updated the pause behavior during livestreams to be a pause instead of a stop.
*   Fixed a visual stutter in HLS playback due to AAC parsing of multi-audio track streams.
*   Fixed an issue where a failed ad tag was stopping video playback to resume.
*   Fixed an issue where some HLS streams would play in the background while ads were playing.
*   Fixed an issue with players using RTMP as a media source and autostart with prerolls, the RTMP stream did not resume after the ad ended.
*   Fixed an issue with players not rendering correctly when css padding and border were styled inline on the player element.

#### Google IMA Patch

The following items were fixed on 6/1/2015:

Accounting for Google's recent IMA SDK [changes](https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/history), a patch to our Google IMA advertising plugin was pushed on June 1, 2015\. Therefore, JW Player 6.12 or higher **must** be used to serve HTML5 ads with our Google IMA plugin.

In addition to the above changes, the following features and improvements have been added:

*   Improved ad scheduling, allowing for the use of <playlist> ad rules and VMAP schedules within Google IMA.
*   Added support for nonlinear creatives in HTML5 mode for non-iPhone devices.
*   Improved timing for video prerolls, preventing content from being played back prior to advertising.
*   playAd() API call will work in HTML5 mode when using Google IMA.

<a name="version611"></a>

## JW Player 6.11

The release improves functionality, performance, and UX in a few different ways, with features including:

*   Support for HLS Protocol Version 6 features
*   A new model for sending events to Google Analytics with the built in plugin
*   Casting mp4 videos from a Flash Player via our Chromecast integration

### HLS Changes

*   Support for HLS Protocol 6 Draft version 13 features:
    *   Multiple audio track renditions using #EXT-X-MEDIA with TYPE equal to AUDIO
    *   Subtitles in HTTP Live Streaming using WebVTT with #EXT-X-MEDIA with TYPE equal to SUBTITLES
*   Flash player will detect timed metadata in ID3 format when embedded in the MPEG-2 transport stream and bubble up in the onMeta() API event
*   When the #EXT-X-PROGRAM-DATE-TIME tag is present, onMeta() will fire when the applicable segment plays.
*   The JW Player will automatically select an audio track based on system language
*   Improved delivery of 608 caption payload
*   Ability to seek within the buffer without having to rebuffer
*   Ability to re-seek while media is buffering
*   DVR sliding control bar appears once the available length is 2 minutes instead of 1 minute.

### HLS v5 features not supported

*   Sample-AES decryption
*   iFrame thumbnail tracks
*   byterange requests
*   Any timed metadata that is an image.

### Chromecast

*   Casting controls are now available when JW Player renders in Flash to play mp4 videos.
*   The Cast icon won’t show when source is not playable on the receiver application.
*   The Cast icons have been updated for design compliance.

### General Updates

*   IE9 is now only supported in Flash, HTML5 support has been removed.
*   net proxy connection type can be set for rtmps connections
*   Poster image will not be loaded when autostart:true, improving player startup speed.
*   webkit-playsinline was added as an attribute of the video tag that JW Player uses when rendered on iOS devices.

### Bug Fixes

*   Fixed setuperror not firing in certain situations when setting up the player in Flash.
*   Fixed fullscreen button in Internet Explorer.
*   Fixed an issue where failed VPAID were breaking waterfalling to other VAST ads.
*   When an ad is paused in Android Chrome, clicking it no longer opens clickthrough target but resumes playback.
*   Fixed the volume slider for ad playback in Flash.
*   Fixed tag variable replacement item-duration was not getting replaced for mid or post rolls.
*   Fixed using .play() after an ad was watched in Flash.
*   Fixed an issue with autostart being broken for providers.
*   Fixed a crossdomain loading issue with VPAID ads.

* * *

<a name="version610"></a>

## JW Player 6.10

This feature release contains brand new functionality specific to JW Player Ads and Enterprise editions of JW Player.

### Chromecast Support

*   Cast videos from Chrome on iOS using built in casting controls.
*   Control closed captions with the JW Player support. Includes FCC caption styling support.
*   Setting up the player for Chromecast requires publishers to configure their application with JW Player Chromecast receiver URL.

### Advertising

*   Schedule ads per playlist item instead of having a global schedule for an entire playlist.
*   Schedule ads in content more accurately using a new format - hh:mm:ss.mmm.
*   The ads control bar no longer blocks content during ad playback. It fades away after the ad starts playing.
*   Waterfalling between ad tags is now even easier with built in support. You can now pass in multiple ads into an advertising block as well as into the playAd() API to fall back to multiple ad tags.
*   Support for the updated Googima IMA API* (HTML5 support dropped in prior versions)

### Fixed

*   Fixed a bug setting up Youtube in HTML5 mode.
*   VMAP should support VASTAdData as well as VASTData.
*   Fixed an issue where VPAID ad creatives were taking up more space than defined.

* * *

<a name="version69"></a>

## JW Player 6.9

JW Player 6.9 has many new features and updates that are available in all editions - keyboard shortcuts and YouTube HTML5 support. Google Universal Analytics is now supported while maintaining support for older formats. The Enterprise edition has turnkey integration with Google Chromecast. Along with these updates many of your favorite bugs have been squashed.

### New

*   Support for Google Universal Analytics in the built in GA plugin. Maintains support for older data models.
*   JW Player will now supports YouTube HTML5 chromeless player! This allows HTML5 YouTube videos to played in the JW Player on mobile and desktop!
*   Keyboard shortcuts! JW Player can now be controlled with simple keyboard controls in both Flash and HTML5\. Tab into the player and use space to begin playback, arrow keys to seek and adjust volume, and the ability quickly and enter/exit fullscreen.
*   Second precise seeking in HLS. When seeking in an HLS stream, instead of seeking to the beginning of a fragment you can seek directly to a second.
*   On Android Chrome fullscreen video playback is customizable with JW Player skins.

### Updated

*   onMeta returns ID3 metadata for the current fragment playing of an AAC HLS audio stream.
*   JW Player now supports AES decryption of high quality HD HLS streams. The player decrypts and plays encrypted HD content 6x faster than previously, making it possible to stream high quality protected content.
*   JW Player recognizes HLS from Azure without any additional configuration.
*   JW Player would sometimes fail to load if it could not reach the CDN where external plugins were hosted. The player will now start up even if certain plugins can’t be loaded.
*   Updated FullScreen usage to comply with deprecated browser API calls.
*   Updated the Twitter logo in the sharing plugin to comply with brand standards.

### Advertising

*   onAdPlay() - API call to determine when ad is played, returns the adtag, the position of the ad if it is in an adpod, and the state it is moving from which would be PLAYING or PAUSED.
*   onAdPause() api event for when an ad is paused.
*   Time slider cues no longer show for non-linear ads.
*   onAdImpression contains AdTitle attribute from VAST.
*   Clicking on a VPAID ad no longer forces a pause of video playback. Pausing of video playback on click is left to the VPAID creative.
*   playAd() for googima in flash

### Beta Support for Chromecast

*   Enterprise and Ads customers can cast mp4 content to a JW Player Chromecast Receiver application with a seamless integration.
*   Supports linear VAST advertising.
*   Has support for basic customization and branding of the receiver application.

### Bugs

*   Fixed 608 captions becoming out of sync after a seek action.
*   Fixed iPad controls appearing after exiting playback when more than one video is played (Playlists, ads).
*   Fixed for VPAID ads taking up the entire player including the visual playlist and not just the player window.
*   Fix seek issue when clicking on time slider marker for ads.
*   Certain VAST calls were being cached for playlists. This caching no longer happens.
*   Fixed an issue where VTT captions were overflowing instead of line breaking.
*   Fixed logos were not showing when autostart:true was set.
*   Fixed an alignment issue with full screen video playback in Safari.
*   Fixed playback alignment in HLS with exact fit in full screen.
*   Fixed advertising playback in HTML5 when a VAST response had no MediaFile.
*   Fixed labels for multiple source files were not formatted correctly.
*   VPAID 1.1 tags that were having issues playing back because of a missing getVPAID method. The player will play these types of VPAID tags.

* * *

<a name="version68"></a>

## Version 6.8

**02-06-2014:** JW Player 6.8 brings major updates to advertising with support of **VAST 3.0 and VMAP** specifications. Next, the player includes fully **Redesigned Pro Skins** and support for **FCC Compliant** captions styling.

### New Features

*   VAST 3.0 Compliance, including:
    *   Skippable ads
    *   Ad Podding
    *   Progress & skip trackers
    *   Compliant error codes
    *   Wrapper parsing updates
*   VMAP 1.0 compliance: able to parse ad schedules from a VMAP tag.
*   Newly designed and imagined Pro skins (8 in total).
*   FCC Captions Compliance by supporting further customization of caption styling options.
*   HTML5 video renders up to 4x faster.
*   Ability to extract ID3 metadata from RTMP streams.

### Updates and Enhancements

*   Mid-roll ad markers now display on the timeslider.
*   Audio only mp3 creatives play in the JW Player.
*   Volume API calls work with VPAID ads.
*   Improved HLS Adaptive switching algorithm that provides less buffering and more viewing.
*   Customizable ad skip countdown message.
*   Volume slider thumb no longer disappears when at zero volume.
*   Improved click tracking on VAST 1.0 tags to reflect wrapped tags.
*   API updates to determine which ads are currently playing, skipped, and completed.

### Bug Fixes

*   onresize() was not firing correctly in HTML5, this now fires when the player is resized.
*   Removed hd toggle that appeared in the ad playback control bar.
*   Fixed hd/cc toggle in flash mode that made it so a viewer could not tell if the HD was on or off.
*   Fixed playback issues with certain VPAID ad tags that used adparameters.
*   Fixed positioning issues with certain DFP nonlinear overlay takeover ads.
*   Fixed timeslider thumbnails that were not formatted correclty when using multiple sprites in Flash.
*   Fixed an issue with Adobe SiteCatalyst where extra information was being pinged.
*   YouTube iframe fallback on iOS 7 is now formatted correctly.

* * *

<a name="version67"></a>

## Version 6.7

**11-07-2013:** The 6.7 release introduces **Ad Skipping** for VAST 2.0 ad tags, **nonlinear overlays** in HTML5, and **Chapter Markers** in the player control bar.

### New Features

*   VAST 2.0 and 1.0 ads can now be skipped after preprogramming timed offset.
*   Nonlinear creatives can now be used in the HTML5 player.
*   Chapter markers points can be added with the WebVTT standard track file.
*   Native fullscreen support in HTML5 for IE11.

### Updates and Enhancements

*   Created an API event for when an ad is skipped that will allow publishers to further customize ad interactions.
*   When iFrames are supported, the JW Player can be played in fullscreen.
*   The fontFamily for captions can now be configured to non-latin fonts.
*   When only one language or video quality is present, the player skin shows HD/CC as a toggle instead of an overlay options menu.
*   Advanced HLS features have been moved to the Ads edition of the JW Player.

### Bug Fixes

*   AAC Audio streams with ID3 tags no longer cause errors. Stay tuned for ID3 metadata provided in the API.
*   Removed a flash memory leak that was present during HLS playback.
*   Several fixes to HLS flash provider to allow videos that were either playing audio or were encrypted and not playing.
*   A fix to prevent midrolls from causing playback to buffer indefinitely.
*   Fixed an issue with onDisplayClick for IE10 for ad clickthroughs.

* * *

<a name="version66"></a>

## Version 6.6

**08-14-2013**: The 6.6 release introduces **Mobile Skinning** and **HLS updates** as well as a number of enhancements and bug fixes.

### New Features

*   Mobile players now use customizable skins instead of the device default controls.
*   Support for 2x retina skins across desktop and mobile.
*   Support for DVR seeking in HLS streams.
*   Support for CEA-608 captions in HLS streams.
*   Support for elementary AAC/MP3 audio streams in HLS.

### Updates and Enhancements

*   Playlist on mobile is now scrollable with one finger.
*   Related sharing tooltips can now be customized.
*   onDisplayClick() works on mobile.
*   Controls API also function during ad playback.
*   Doubleclick on display now toggles fullscreen.
*   Option to add horizontal volume slider in audio mode.
*   New “basic” listbar layout that only shows titles.
*   Dock buttons are also displayed in the idle state.
*   Proper primary mode and fallback selection for RSS feeds.
*   VAST linear ad interface consolidated into the control bar.
*   Advertising API calls now available for Google IMA (except playAd).
*   Support for VAST 1.0 tags in HTML5 mode.
*   Support for custom HD labels with SMIL/M3U8 manifests.
*   404 on HLS playlist won’t error out entire stream.
*   For HLS live streaming only the active playlist is pulled from CDN.
*   For live streaming the redundant time slider is now replaced with the event title.
*   Video aspect ratio is detected for single bit rate HLS streams.

### Bug Fixes

*   Skin divider elements now appear correctly.
*   When removing dock button its tooltip also hides in Flash.
*   Offset issues with seekbar on display relative pages in WebKit.
*   playIcon now hides in HTML5 when removed from skin.
*   More robust hiding of the time slider in skins.
*   Listbar description colors now picked up in HTML5 mode.
*   Built-in IE popup blocker no longer blocks clicks in Flash for VAST ads.
*   VAST playAd and onBeforePlay fixes in Flash mode.
*   More tolerant VAST 2.0 parsing in HTML5 mode.
*   VAST xml parsing on Android.
*   Parsing xml namespace in DFXP captions.
*   Parsing of HLS live streams with program datetime tag.
*   Support for encrypted HLS streams with uppercase initialization vector.
*   HLS playback in Flash with a server-absolute key file path.

* * *

<a name="version65"></a>

## Version 6.5

**06-12-2013**: The 6.5 release introduces an **Adobe SiteCatalyst integration** and **Advertising JavaScript API**, as well as a number of smaller updates and bug fixes:

*   New: The 8 premium skins are now available to Pro users (Pro edition).
*   New: Integration with Adobe SiteCatalyst for easy setup of advanced video analytics (Premium edition).
*   New: JavaScript API for VAST Advertising, for verification, waterfalling, scheduling and companions (Ads edition).

*   Update: Hiding the title from the play icon, using the "displaytitle" option.
*   Update: An onSetupError() callback that gets called when the player cannot be setup.
*   Update: A getPlaylistIndex() API call, which returns the index of the active item.
*   Update: Live Closed Captions rendering using RTMP and the Wowza or Adobe media servers.
*   Update: Setting of custom dimensions of the related videos thumbnails (Premium edition).
*   Update: Support for AES128 decryption of HLS fragments (Premium edition).
*   Update: Several new VAST tag replacement variables, including playlistItem options (Ads edition).

*   Fix: Smooth scaling of poster and playlist thumbnails in Flash mode.
*   Fix: Picking the high-quality thumbnail from YouTube RSS feeds.
*   Fix: Seeks inside the buffer for Flash pseudo-streaming don't trigger a re-fetch.
*   Fix: RSS setups now fallback to Flash if the format isn't supported in HTML5.
*   Fix: Skipping of HLS for a multi-source setup on Android 4.0.
*   Fix: Playback of YouTube videos with non-alphanumeric characters on iOS/Android.
*   Fix: Correct display of YouTube error messages.
*   Fix: Support for VAST creatives without filename extension or with MOV extension.
*   Fix: JW Player inside a form stopped triggering a postback.
*   Fix: The listbar now correctly redraws itself upon resize in a responsive setup.
*   Fix: The video element in HTML5 mode now correctly resizes itself upon player resize.
*   Fix: Controlbar audio-mode now correctly kicks in with a listbar and ignores max-width.
*   Fix: Embedding of JW Player on pages that have a "direction:rtl" CSS rule.
*   Fix: Proper handling of timecode gaps in HLS discontinuities.
*   Fix: Proper handling of comments in RSS feeds in HTML5 mode.
*   Fix: Parsing for certain PMT tables and ADTS headers for HLS in Flash.
*   Fix: Seeks beyond the duration don't enter an infinite buffer anymore for HLS in Flash.
*   Fix: Inconsistencies in the onSeek(), onPlay() and onResize() event callbacks.
*   Fix: Playback of MP3-only HLS streams in TS now works OK..
*   Fix: Bottom-left and bottom-right logo now placed correctly, just above the controlbar.
*   Fix: Inconsistencies in Complete, Mute and Fullscreen tracking for VAST in Flash.
*   Fix: Triggering of lowest bitrate for RTMP streams with no/partial width attributes.

* * *

<a name="version64"></a>

## Version 6.4

**04-24-2013**: The 6.4 release introduces support for **VAST advertising in HTML5** and **Responsive Design**, as well as a number of smaller updates and bug fixes:

*   New: Added support for VAST 2.0 linear non-interactive ads in the HTML5 player
*   New: Added support embedding the player in a responsive design via a new _aspectratio_ parameter and percentage-based width.

*   Update: Option-based disabling of Stage Video acceleration for MP4/FLV, RTMP and HLS in Flash.

*   Fix: Issue where multiple subtitle tracks don’t always load when using other JavaScript libraries (such as Ember.js).
*   Fix: Issue where the download fallback would not render with multiple sources where the first was RTMP or HLS.
*   Fix: Issue where players would not setup if the Ember.js library was used on the same page.
*   Fix: Issue where tracking requests are not triggered when a VAST tag’s duration is set to 0.
*   Fix: Issue where ads sometimes won’t play while in fullscreen mode.
*   Fix: Issue where server-absolute links do not work on hosted players.
*   Fix: Issue in Flash where multiple mid-rolls would not play in Chrome.
*   Fix: Issue in Flash where some IMA tags won’t load.
*   Fix: Issue in HTML5 where ads don’t play when the player falls back from Flash.

* * *

<a name="version63"></a>

## Version 6.3

**03-13-2013**: The 6.3 release introduces support for **Tooltip Thumbnails** and **VPAID Overlays**, as well as some smaller updates and bug fixes:

*   New: Added support for tooltip thumbnails in the time slider.
*   New: Added support for publishers and users to set the default quality level and caption track.
*   New: Added support for VPAID non-linear overlays (Ads edition).

*   Update: Introduced Apple Airplay support by setting flag on video element.
*   Update: Introduced support for RTMP 302 redirects
*   Update: Added Envivio HLS stream support (Premium edition).
*   Update: Improved advertising UX by showing a buffering icon while ads load (Ads edition).

*   Fix: Issue where some HLS streams don’t start with a black screen
*   Fix: Issue where certain VAST XML causes the player to crash
*   Fix: Issue where HLS type detection in HTML5 mode doesn’t work
*   Fix: Issue where the time slider tooltip mismatches the actual seek time in Flash mode
*   Fix: Issue where sometimes RTMP application / id were not detected.
*   Fix: Removed buffer icon after seeking is complete in IE10.
*   Fix: Issue where captions don’t initially render in the correct position
*   Fix: Issue where captions disappear after switching to fullscreen
*   Fix: Issue where setting controls:false does not hide controls on mobile devices
*   Fix: Issue where VPAID non-linear overlays don't go away
*   Fix: Issue where VAST ad volume is not changed
*   Fix: Issue where VPAID non-linear overlays toggle the video to play if it’s paused
*   Fix: Issue where an onReady event fires even if player fails to set up
*   Fix: Issue with FireFox in Flash mode where the play icon stays highlighted
*   Fix: Issue in HTML5 mode where the controls can still be clicked when disabled
*   Fix: Issue in Flash mode where mouse cursor is not hidden in fullscreen
*   Fix: Issue in Chrome where preview images do not load with a 302 redirect
*   Fix: Issue where clicking on the commercial player’s logo would not play/pause the video
*   Fix: Issue where mimetypes are not detected in RSS
*   Fix: Removed undocumented fields from returning via the playlist API
*   Fix: Issue where playlist types are not filtered out based on the player’s mode
*   Fix: Issue where poster images are not refreshed when loading a new playlist
*   Fix: Issue where embedding with sources would not load items into the active playlist

* * *

<a name="version62"></a>

## Version 6.2

**02-06-2013**: The 6.2 release introduces support for Google IMA3 in HTML5 mode, as well as a number of fixes:

*   New: Single binary for all player editions, so re-downloads are not needed after upgrading.
*   New: Support for the Google IMA3 SDK in HTML5 mode, in particular iOS/Android (Ads edition).

*   Update: Basic mechanism to set global defaults for embeds in player library.
*   Update: Introduced the ability to set custom URLs for html5/flash players.
*   Update: Support for discontinuities in HLS streams (Premium edition).

*   Fix: Player not loading in IE7
*   Fix: Fixed an issue which caused certain HLS streams to fail
*   Fix: Added aliases for RTMP (smil) and HLS (m3u8) type values
*   Fix: HLS now always resumes from live head after pause
*   Fix: Disabled analytics plugin no longer gets loaded
*   Fix: Some HLS live streams eventually error out on #1010
*   Fix: Fixed an issue where and HLS stream would fail with error code #2006
*   Fix: When stop() called onComplete, player no longer advances to next playlist item
*   Fix: Fixes an issue where calling seek() on Android devices would restart playback.
*   Fix: HLS should buffer instead of complete when ending live playlist
*   Fix: Certain HLS streams with MP3 don't have audio

* * *

<a name="version61"></a>

## Version 6.1

**12-17-2012**: The 6.1 release bundles a few HLS enhancements and a number of bug fixes:

*   New: Faster HLS starts and seeks, by starting playback while still downloading (Premium edition).
*   New: Improved, less bandwidth maximizing HLS quality switching (Premium edition).
*   New: Explicit omission of Android from HLS support, due to critical bugs (Premium edition).

*   Fix: Player is broken in IE7 due to trailing commas in the JavaScript code.
*   Fix: Centering CSS is not reset inside JW Player, leading to broken player designs.
*   Fix: Cross-origin errors when loading JW Player in cross-domain iFrame.
*   Fix: After interacting with a player, no more text can be selected on a page.
*   Fix: Elapsed and remaining time cannot be hidden in skins.
*   Fix: The combination of RTMP dynamic streaming and live FC Subscribing breaks.
*   Fix: Manual RTMP quality switching is not instant.
*   Fix: Ordering of quality levels is not consistent across modes and formats.
*   Fix: Generation of quality labels is not consistent across modes and formats.
*   Fix: When fallback is disabled, the player still clears the original DIV.
*   Fix: Page scrollbar still visible in IE9 fake-fullscreen.
*   Fix: Returning from fullscreen sometimes results in scaled video on iPad.
*   Fix: In Flash mode in fullscreen, the controls don't fade out.
*   Fix: Relative paths to MP4 not working on IE8.
*   Fix: Title in display not appearing in Premium player.
*   Fix: API calls in HTML5 mode in onReady() queue not working.
*   Fix: Media errors not exposed to API in HTML5 mode.
*   Fix: Cross-domain loaded captions fail in IE9 in HTML5 mode.

* * *

<a name="version60"></a>

## Version 6.0

**11-09-2012**: Initial release of JW6.
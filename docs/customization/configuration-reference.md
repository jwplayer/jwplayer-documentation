#JW Player Configuration Reference

This article acts a reference to all configuration options JW Player supports. Configuration options tell a player instance which media to play and how to layout and behave on your page.

## Table Of Contents


*   [Basic Options](#basic)
*   [The Playlist](#playlist)
*   [Skin](#skin)
*   [Captions](#captions)
*   [RTMP](#rtmp)
*   [Logo](#logo)
*   [Sharing](#sharing)
*   [GA](#ga)
*   [Related](#related)
*   [Advertising](#advertising)
*   [DRM](#drm)
*   [Other Options](#other)



## Introduction

JW Player contains a large number of configuration options. Some of these options (like _width_ or _file_) are directly placed into an embed code. Other, more advanced options are grouped into config options blocks (like _playlist_ or _advertising_). Here is an example setup that contains both flavors:

<pre style="width: 480px;">
var playerInstance = jwplayer("myElement");
playerInstance.setup({
	file: "http://example.com/myVideo.mp4",
	height: 360,
	width: 640,
	advertising: {
		client: "vast",
		tag: "http://adserver.com/vastTag.xml"
	}
});
</pre>

Web developers will recognize the JavaScript Object Notation (JSON) syntax of these setup blocks. While writing player setups, beware of common JSON requirements, like the need for a comma after all but the last element in a list.

<a name="basic"></a>

## Basic Options

These are the basic options for configuring the layout and playback behavior of a player:

####Media

|Setting|Type|Default|Description|
|--|--|--|--|
|file|String|-|**(Required)** URL to a single video file, audio file, YouTube video or live stream to play. Can either be configured directly inside of setup, inside of a playlist array, or in a sources array|
|image|String|-|URL to a poster image to display before playback starts. Can either be configured directly inside of setup, or inside of a playlist|

A file can exist in one of three places:

Inside of setup
Inside of a playlist item
Inside of a sources array inside of a playlist

|File Location|Single Playlist Item|Multiple Playlist Items|Tracks|Multiple Sources|
|-|-|-|-|-|
|Setup|Yes|No|Yes|Yes|
|Playlist|Yes|Yes|Yes|No|
|Sources|Yes|Yes|Yes|Yes|

####Behavior

|Setting|Type|Default|Description|
|--|--|--|--|
|mute|Boolean|false|Configures if the player should be muted during playback|
|autostart|Boolean|false|Whether the player will attempt to begin playback automatically when a page is loaded|
|repeat|Boolean|false|Configures if the player should loop content after a playlist completes|
|controls|Boolean|true|Whether to display the video controls (controlbar, display icons and dock buttons)|

####Appearance

|Setting|Type|Default|Description|
|--|--|--|--|
|aspectratio|String|-|Maintains proportions when width is a percentage. Will not be used if the player is a static size|
|height|Number|270|The desired height of your video player (In pixels). Can be omitted when aspectratio is configured|
|width|Number or String|480|The desired height of your video player (In pixels or percentage)|

####Rendering

|Setting|Type|Default|Description|Options|
|--|--|--|--|--|
|primary|String| "html5" | Sets the default player rendering mode. |**"flash" &vert; "html5"** |
|preload|String|-|Tells the player if content should be loaded prior to playback. If no setting is specified, default browser behavior will be used. |**"none" &vert; "auto" &vert; "metadata"** |

####hlslabels

By default, the JW Player will set video quality levels using information from the manifest files. Use this configuration option to apply custom quality labels to adaptive streams.

|Setting|Type|Default|Description|
|--|--|--|--|
|base|String|"/"|Configures an alternate base path for skins and providers|


<a name="playlist"></a>

## The Playlist

The playlist is a powerful feature of JW Player, used to load multiple items of content into a single player. For each item, the playlist can carry metadata, multiple media sources (e.g. for HD toggle) and multiple text tracks (e.g. for CC toggle).

The playlist can act both as an option and as a block. In the first case, the playlist is pointed to an RSS feed that contains all content items and their properties. For example:

<pre>
jwplayer("myElement").setup({
  playlist: "http://example.com/myPlaylist.json"
});
</pre>

When acting as a block, the playlist contains an array of items instead of a straight options list. Also, every playlist item in turn contains array for sources and/or tracks. Here is a quick example setup with a playlist block containing one item with one media source and one text track:

<pre>var playerInstance = jwplayer("myElement");
playerInstance.setup({
    playlist: [{
        image: "/assets/sintel.jpg",
        sources: [{ 
          file: "/assets/sintel.mp4"
        }],
        title: "Sintel Movie Trailer",
        tracks: [{
          file: "/assets/captions.vtt"
        }]
    }]
});
</pre>

Some basic playlist information are:

|Setting|Type|Description|
|--|--|--|
|playlist[].file|String|**(Required)** If no file is specified in your setup or sources, this is a required configuration option|
|playlist[].title|String|Title of the item. This is displayed inside of the player prior to playback, as well as in the visual playlist. This can be hidden with the displaytitle option|
|playlist[].description|String|Short description of the item. It is displayed below the title. This can be hidden with the displaydescription option.|
|playlist[].mediaid|String|Unique identifier of this item. Used by advertising, analytics and discovery services.|
|playlist[].image|String|Poster image URL. Displayed before and after playback.|

## Sources

Sources are inserted into playlist objects and are lists of files. Sources serve a dual purpose:

####If using different file types, sources prioritizes which file to play, based on order. For example:

<pre>
sources: [{
file: "myVideo.m3u8"
},{
file: "myVideo.mp4"
}]
</pre>

In the above example, the player will attempt to play myVideo.m3u8 as a first choice. In the event that a browser cannot play an m3u8, the player is intelligent enough to choose myVideo.mp4 instead.

####Can be used for multiple qualities for a single static video file, for example:

<pre>
sources: [{
file: "myVideo-720p.mp4",
label: "HD"
},{
file: "myVideo-480p.mp4",
label: "SD"
}]
</pre>

In the above example, the player will add an "HD" button, allowing a user to toggle their desired video quality. If more than two sources are used, the player will include a quality selection menu, rather than a quality toggle.

|Format|Example|
|---|---|
|String| "title": "My video's title!" |

|Type|Example|
|---|---|
|String| "description": "Hello! This is my video's description!" |

|Type|Example|
|---|---|
|String| "mediaid": "12ab45cd" |

###playlist[].image

|Type|Example|
|---|---|
|String| "image": "http://www.website.com/assets/image.png" |

###playlist[].sources[].file

URL to the video file, audio file, YouTube video or live stream of this playlist item source. See the [HD Quality Toggle](/customer/portal/articles/1428524-hd-quality-toggling) article for an example setup.

|Config|Type|Example|
|---|---|---|
|sources[].file|String|URL to the video file, audio file, YouTube video or live stream of this playlist item source.|
|sources[].label|String|Label of the media source, displayed in the manual HD selection menu. Set this if you have more than 2 qualities of your video.|
|sources[].type|String|Forces a media type. Only required when a file extension is missing or not recognized (Using .php or certain tokens, for example|
|sources[].default|Boolean|Set this to _true_ for the media source you want to play on startup. If this isn't set for any source, the first one is used. Note the option should be placed in quotes because "default" is a reserved JavaScript keyword in IE8|



###playlist[].tracks[].file

URL to the captions, chapters or thumbnails text track file. See [Adding Closed Captions](/customer/portal/articles/1407438-adding-closed-captions) for an example setup.

###playlist[].tracks[].kind

The kind of text track. Possible values are _captions_ (the default), _chapters_ and _thumbnails_.

###playlist[].tracks[].label

Label of the text track.Is only used in setups with multiple captions, where the label is displayed in the CC selection menu.

###playlist[].tracks[].default

Only for captions. Set this to _true_ if you want the captions track to display by default. If no default is set, captions are not shown on startup. Note the option should be placed in quotes because "default" is a reserved JavaScript keyword in IE8.

###playlist[].adschedule[].adbreak[]

This is used to set a unique ad schedule per playlist item.

###playlist[].adschedule[].adbreak[].offset

This is used to set the offset for each adbreak within the ad schedule of a playlist item.

###playlist[].adschedule[].adbreak[].tag

This is used to set the ad tag for each adbreak within the ad schedule of a playlist item.

When using the playlist to load an RSS feed, all these options are set in the feed. See the [Media Formats Reference](/customer/portal/articles/1403635-media-format-reference) for an mapping of all playlist options to RSS format.

<a name="skin"></a>

## Skin Block

New to JW 7, the skin block replaces the singular skin configuration option. Due to JW7's CSS skinning model, this allows for more customization of individual skin elements.


###skin.name

The skin to use for styling the player. If not configured, we'll default our player to use the seven skin. Other available premade skins include six, five, beelden, vapor, roundster, bekle, stormtrooper, and glow. A live example showing each of these, as well as a deeper explanation of custom colors, can be found on our JW Player [skin configuration](http://support.jwplayer.com/customer/portal/articles/1406968-using-jw-player-skins) page.

###skin.active

The color of active skin elements. This should be entered in either [hex](http://www.w3schools.com/tags/ref_colorpicker.asp) or [x11 color](https://en.wikipedia.org/wiki/X11_color_names) format.

|Format|Example|
|---|---|
|String| "red" &vert; "#ff0000" |

###skin.inactive

The color of inactive skin elements. Like the above active config, this should be entered in either [hex](http://www.w3schools.com/tags/ref_colorpicker.asp) or [x11 color](https://en.wikipedia.org/wiki/X11_color_names) format.

|Format|Example|
|---|---|
|String| "white" &vert; "#ffffff" |

###skin.background

The color of a skin's background portion. Like the above active config, this should be entered in either [hex](http://www.w3schools.com/tags/ref_colorpicker.asp) or [x11 color](https://en.wikipedia.org/wiki/X11_color_names) format.

|Format|Example|
|---|---|
|String| "black" &vert; "#000000" |

###skin.url

If using an external CSS file to style your player, this can be specified here. Note that with this configuration:

*   You will still need to specify the name of your skin.
*   This may negatively impact the speed which your JW Player loads

For more information regarding custom skins, as well as best practices, see our article about [creating custom skins](http://support.jwplayer.com/customer/portal/articles/1412123-building-jw-player-skins).

More information regarding skins, as well as previews of their appearance, can be found on our [Using JW Player Skins](http://support.jwplayer.com/customer/portal/articles/1406968-using-jw-player-skins) page.


<a name="captions"></a>

## Captions Block

This options block configures the styling of closed captions in the player for desktop browsers. On iOS/Android, a system settings menu provides exactly the same settings, as these are mandated by the FCC. It is available in All JW Player 7 Editions.

###captions.color

Hex color of the captions text. Is ffffff by default.

###captions.fontSize

Size of the captions text. Is 15 points by default.

###captions.fontFamily

Family of the captions text. Is sans by default.

###captions.fontOpacity

Alpha value of the captions text. Is 100 by default.

###captions.backgroundColor

Hex color of the caption characters background. Is 000000 by default.

###captions.backgroundOpacity

Alpha value of the caption characters background. Is 75 by default.

###captions.edgeStyle

Method by which the captions characters are separated from their background. Is none by default.

###captions.windowColor

Hex color of the background of the entire captions area. Is 000000 by default.

###captions.windowOpacity

Alpha value of the background of the entire captions area. Is 0 by default.


See [Styling Captions for FCC Compliance](/customer/portal/articles/1482067-styling-captions-for-fcc-compliance) for more information.

<a name="rtmp"></a>

## RTMP Block

This options block controls the more esoteric functionalities of the RTMP streaming protocol. It is available in All JW Player 7 Editions.

###rtmp.bufferlength

This option controls how much buffer, in seconds, to load before playing back. A small buffer means faster starts/seeks, but a higher chance of re-buffering. 

|Format|Default|
|---|---|
|Number| 3 |

###rtmp.subscribe

This option enables the FC Subscribe mechanism use by older streaming servers to manage load balancing. The default is false (don't use it).

|Format|Default|
|---|---|
|Boolean| false |

###rtmp.securetoken

This option, supported for older Wowza instances, provides a security token to JW Player, which then amends this option to the RTMP application URL. Nothing is included by default.

|Format|Example|
|---|---|
|String| "abc123000456" |


See [Using RTMP Streaming](/customer/portal/articles/1430358-using-rtmp-streaming) for more information.

<a name="logo"></a>

## Logo Block

This options block configures a clickable watermark that is displayed over the video. It is available in All JW Player 7 Editions.

###logo.file

The URL of an external JPG, PNG or GIF image to be used as watermark (e.g. /assets/logo.png). We recommend using 24 bit PNG images with transparency, since they blend nicely with the video.

|Format|Example|
|---|---|
|String| "http://www.mywebsite.com/assets/logo.png" |

###logo.hide

When this option is set to true, the logo will automatically show and hide along with the other player controls.

|Format|Default|
|---|---|
|Boolean| false |

###logo.link

The URL to visit when the watermark image is clicked. If it is not set, a click on the watermark does nothing.

|Format|Example|
|---|---|
|String| "http://www.mywebsite.com/" |

###logo.margin

The distance, in pixels, of the logo from the edges of the display.

|Format|Default|
|---|---|
|Number| 8 |

###logo.position

This sets the corner in which to display the watermark. It can be top-right (the default), top-left, bottom-right or bottom-left. Note the default position is preferred, since the logo won't interfere with the controlbar, captions, overlay ads and dock buttons.

|Format|Options|
|---|---|
|String| "top-left" &vert; "top-right" &vert;"bottom-left"&vert; "bottom-right"|


See [Branding Your Player](/customer/portal/articles/1406865-branding-your-player) for more information.

<a name="sharing"></a>

## Sharing Block

This options block controls an overlay with social sharing options: copy embed code, copy video link and share video to social networks. It is available in All JW Player 7 Editions.



###sharing

Setting an empty _sharing{}_ options block will already enable the social sharing overlay. Without the nested config options, it will show the page URL link, but no embed code.

###sharing.link

URL to display in the video link field. If no link is set, the URL of the current page is used. Example:

<pre>http://example.com/videos/12345/
</pre>



###sharing.code

Embed code to display in the embed code field. If no code is set, the field is not shown. Example:

<pre>
  &lt;iframe src="http://example.com/12345.html" / &gt;
</pre>



###sharing.heading

Short, instructive text to display at the top of the sharing screen. The default is Share Video. Also is displayed as a tooltip for the sharing icon.

###sharing.sites

New in JW Player 7.2.0, this setting allows for the customization of social icons. By default, we display Facebook, Twitter, and email. However, sites can be added, removed, or reordered based on your preference. Within the sites block, you can specify any number of our built-in sharing options, including:

|Social Network|Configuration Value|
|-|-|
|Facebook|facebook|
|Twitter|twitter|
|Pinterest|interest|
|Email|email|
|Tumblr|tumblr|
|Google Plus|googleplus|
|Reddit|reddit|
|LinkedIn|linkedin|

####Example:

<pre>"sites": ["reddit","facebook","twitter"]
</pre>



See [Social Sharing Overlay](/customer/portal/articles/1409823-social-sharing-overlay) for more information.

<a name="ga"></a>

## GA Block

This options block configures the built-in integration with Google Analytics. It is available in All JW Player 7 Editions.



###ga

Setting an empty ga{} options block will already enable the Google Analytics integration. None of the nested config options are required. Note: Google's Analytics.js JavaScript library and config needs to be included in your page.

###ga.idstring

By default, JW Player sets the action of a play/complete event to the file [playlist property](#playlist). This option allows setting the action to a different playlist item property, like title or mediaid.

###ga.label

By default, JW Player sets the event label for any of event actions to the file [playlist property](#playlist). This option allows setting the action to a different playlist item property, like title or mediaid.



See [Connecting Google Analytics](/customer/portal/articles/1417179-integration-with-google-analytics) for more information.

<a name="related"></a>

## Related Block

This options block controls an overlay with related videos. It is available in All JW Player 7 Editions.

###related.file ( _required_ )

Location of an RSS or JSON file containing a feed of related videos, e.g. http://example.com/related.json.

|Format|Example|
|---|---|
|String| |

###related.onclick

This determines what to do when the user clicks a thumbnail: jump to the page URL of the related video (link) or play the related video inline (play). The default is link.

###related.oncomplete

Designates the behavior of our related videos overlay when a single video or playlist is completed. When set to hide, the replay button + icon will appear. When set to show (Default), we display the overlay. When set to autoplay, we will automatically play the next video in your related feed after 10 seconds. Note: If autoplay is used, we override onclick behavior to 'play'

###related.heading

Single line heading displayed above the grid with related videos. Generally contains a short call-to-action. The default is Related Videos. This heading also displays as a tooltip on the related icon.

|Format|Example|
|---|---|
|String| "Select a related video!"|

###related.autoplaytimer

The number of seconds to wait before playing the next related video in your content list. Set to 0 to have your next related content to play immediately.

|Format|Default|
|---|---|
|number|5|

###related.autoplaymessage

A custom message that appears during autoplay. Uses xx as a replacement for the countdown timer.  
A macro can also be used to replace aspects of the message, based on the next title included in the related feed with __title__.

|Format|Example|
|---|---|
|String| "__title__ will start in xx seconds"|

See [Display Related Videos](/customer/portal/articles/1409745-display-related-videos) for more information.

<a name="advertising"></a>

## Advertising Block

This options block configures the video advertising capabilities of JW Player. It is available in the Ads Edition of JW Player 7.


|Option|Description|Format|Example/Options|
|---|---|---|---|
|client|Chooses the ad client that will be used to display advertisements|String| vast &vert; googima|
|tag|The URL of the VAST tag to display|String|"http://www.mywebsite.com/vast.xml"|


###advertising.tag

Set this to URL of the VAST or IMA pre-roll ad tag to play. Use the _advertising.schedule_ option to setup midrolls, postrolls and overlays. See [Basic Preroll Video Ads](/customer/portal/articles/1431665-basic-preroll-video-ads) for more info.

|Format|Options|
|---|---|
|String| "http://www.mywebsite.com/vast.xml"|

###advertising.schedule

Use this option to load an entire advertising schedule to JW Player, containing multiple ads. The option can be the URL to a VMAP schedule or an inline JSON block with ads. Note the _advertising.tag_ options is ignored if this option is set. See [Scheduling Ad Breaks](/customer/portal/articles/1432024-scheduling-ad-breaks-) for more info.

|Format|Options|
|---|---|
|String| "http://www.mywebsite.com/vmap.xml"|

###advertising.admessage

(VAST only) During linear ad playback, JW Player shows the following message in the controlbar: Ad: your video resumes in XX seconds. Use this option to [customize that message](/customer/portal/articles/1433868-custom-ad-countdown-message).

###advertising.companiondiv

This is a configuration block with 3 properties: id, width and height. Set these to have JW Player load companion ads from your VAST/IMA tag into your page. See [Companion Ads](/customer/portal/articles/1433869-companion-ads) for more info.

###advertising.skipoffset

By default, linear video ads cannot be skipped. Set this option to the number of seconds in the ad, after which you want an ad to be skipped. See [Skipping Ads](/customer/portal/articles/1433818-configuring-ad-skipping) for more info.

###advertising.cuetext

Use this to specify the text that appears when a user mouses over a scheduled advertisement. By default, we will display "Advertisement". Note: This cannot be customized on a per-ad basis within a schedule.

###advertising.skipmessage

This is used to provide a customized countdown message. Use the form Skip ad in xx seconds..

###advertising.skiptext

This sets the text of the Skip button after the countdown is over.

###advertising.vpaidmode

Used exclusively for [Google IMA VPAID ads](https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.ImaSdkSettings.VpaidMode). Can be set to the following:

|Option|Description|
|--|--|
|disabled|VPAID ads will not play and an error will be returned if VPAID is requested. (default)|
|enabled|VPAID is enabled using a cross domain iframe. The VPAID ad cannot access the site. VPAID ads that depend on friendly iframe access may not play.|
|insecure|The VPAID ad will load in a friendly iframe. This allows the ad access to the site via javascript.|





For an overview of JW Player's advertising capabilities, see its dedicated [Video Ads section](/customer/portal/topics/605644-video-ads/articles).

<a name="drm"></a>

## DRM Block

Configuration options related to DRM for MPEG DASH streams. As of JW 7.3.0, both WideVine and PlayReady are supported and can be configured independently within a single setup. See our [Using DASH Streaming](http://support.jwplayer.com/customer/portal/articles/2020483-using-dash-streaming) article for more configuration information and examples.



###drm.playready

Configuration block specifying Microsoft's Playready DRM options:

*   drm.playready.url (Required) - The URL of the PlayReady license server.
*   drm.playready.customData - Security data that should be passed in a request header.



###drm.widevine

Configuration block specifying Google's Widevine DRM options:

*   drm.widevine.url (Required) - The URL of the WideVine license server.
*   drm.widevine.customData - Security data that should be passed in a request header.



###drm.clearkey

A basic form of DRM that lists a decryption key inside of your player configuration. This is the least secure form of DRM, though it is the simplest to implement across browsers. There are no additional server resources required to decrypt content with this method.

*   drm.clearkey.key (Required) - The key required to decrypt DRM content.





<a name="other"></a>

## Other Options

These are more obscure one-off options, available to tweak the internals of JW Player:

###visualplaylist

By default, JW Player will display a visual playlist icon when a playlist is set. This icon can be hidden by setting visualplaylist to false.

###abouttext

Custom text to display in the right-click menu. Can only be set for the Premium and Ads Editions. See our [Branding](http://support.jwplayer.com/customer/portal/articles/1406865-branding-your-player) page for more information.

###aboutlink

Custom URL to link to when clicking the right-click menu. Can only be set for the Premium and Ads Editions. The default is http://www.jwplayer.com/learn-more/.See our [Branding](http://support.jwplayer.com/customer/portal/articles/1406865-branding-your-player) page for more information.

###displaytitle

By default, JW Player will display the title of an audio/video file in the top left corner of the player. If you have set a title, but don't want it to display here, set this option to false.

###displaydescription

By default, JW Player will display your video's description below its title. If you have set a description, but don't want it to display here, set this option to false. Note: Setting both displaytitle and displaydescription to false will remove the gradient that appears behind the title/description.

###flashplayer

Alternative location from where to load _jwplayer.flash.swf_. By default, this file is in the same location as _jwplayer.js_. In certain edge cases though (e.g. CDN-ing the players), you may want to host them separately.

###stretching

How to resize images and video to fit the display. If stretching is not set within your embed, JW Player defaults to uniform.

uniform - Will fit JW Player dimensions while maintaining original aspect ratio (Black bars)  
![](/customer/portal/attachments/298206)​

exactfit - Will fit JW Player dimensions without maintaining aspect ratio  
![](/customer/portal/attachments/298203)​

fill - Will stretch and zoom video to fill dimensions, while maintaining aspect ratio  
![](/customer/portal/attachments/298204)​

none - Displays the actual size of the video file. (Black borders)  
![](/customer/portal/attachments/298207)​


# JW Player Configuration Reference

This article acts a reference to all configuration options JW Player supports. Configuration options tell a player instance which media to play and how to layout and behave on your page.

!!!important
Certain JW Player features may require a specific license. Please [contact our team](//www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=player-docs) to upgrade your account.
!!!

|Table Of Contents| | |
|--|--|--|
|[Setup Options](#setup)|[The Playlist](#playlist)|[Skin](#skin)|
|[Captions](#captions)|[RTMP](#rtmp)|[Logo](#logo)|
|[Sharing](#sharing)|[Google Analytics](#ga)|[Related](#related)|
|[Advertising](#advertising)|[DRM](#drm)|[Localization](#localization)|

## Introduction

JW Player contains a large number of features and options that can be configured inside of the player setup.  Some options, like **width** or **mute**, are directly placed into the setup. Other, more advanced options, are grouped into nested blocks, like **skin** or **advertising**.

Here is an example setup that contains both **setup** options and specific **advertising** options:

```
jwplayer("myElement").setup({
  "file": "https://example.com/myVideo.mp4",
  "height": 360,
  "width": 640,
  "autostart": "viewable",
  "advertising": {
		"client": "vast",
		"tag": "http://adserver.com/vastTag.xml"
	}
});
```
Web developers will recognize the JavaScript Object Notation ([JSON](https://en.wikipedia.org/wiki/JSON)) syntax of these setup blocks. While configuring player setups, beware of common JSON requirements, like the need for a comma after all but the last element in a list.

<a name="setup"></a>

* * *

## Setup Options

These are the options for configuring the layout and playback behavior of a player. Each is placed directly into the **setup** of the player.

The following properties are related to media that is loaded into the player.

If only a single playlist item is used, this information can either be configured directly inside of **setup**. If you are planning on using multiple media items, these can also be used inside of a **[playlist](#playlist)** array.

<br/>

### Media

|Setting|Type|Description|Default|
|--|--|--|--|
|**file**|String|**(Required)** URL to a single video file, audio file, or live stream to play. Can also be configured inside of a [sources](#playlist-sources) array|-|
|**image**|String|URL to a poster image to display before playback starts. |-|
|**title**|String|The title of your video or audio item|-|
|**description**|String|A description of your video or audio item|-|
|**mediaid**|String|Unique identifier of this item. Used by advertising, analytics and discovery services|-|

!!!
YouTube and RTMP media formats are no longer supported.<sup>8.0+</sup>
!!!

<br/>

### Behavior

|Setting|Type|Description|Default|
|--|--|--|--|
|**mute**|Boolean|Configures if the player should be muted during playback|false|
|**autostart**|String|Whether the player will attempt to begin playback automatically when a page is loaded. Set to 'viewable' to have player autostart if 50% is viewable. |false|
|**nextupoffset**|Number|Configures when the Next Up card displays when transitioning between playlist items. A positive value is an offset from the start of the video. A negative number is an offset from the end of the video|-10|
|**repeat**|Boolean|Configures if the player should loop content after a playlist completes|false|
|**abouttext**|String|Custom text to display in the right-click menu|-|
|**aboutlink**|String|Custom URL to link to when clicking the right-click menu|"https://www.jwplayer.com/learn-more"|
|**playbackRateControls**|Boolean|Whether to display a settings menu to adjust playback speed. If true, the pre-defined options available in the menu are 0.5x, 1x, 1.25x, 1.5x, and 2x. An array can be passed to customize the menu options using `playbackRates`.|false|
|**playbackRates** <sup>8.0+</sup>|Array of Numbers|(Optional) Custom playback rate options to display in the settings menu.|[0.25, 0.75, 1, 1.25]|

<br/>

### Appearance

|Setting|Type|Description|Default|
|--|--|--|--|
|**controls**|Boolean|Whether to display the video controls (control bar, display icons and dock buttons)|true|
|**localization**|Object|Changes text for the player in certain locations|-|
|**aspectratio**|String|Maintains proportions when width is a percentage. Will not be used if the player is a static size. <br/> **Must be entered in ratio "x:y" format.**|-|
|**height**|Number|The desired height of your video player (In pixels). Can be omitted when aspectratio is configured|360|
|**width**|Number or String|The desired height of your video player (In pixels or percentage)|640|
|**displaytitle**|Boolean|Configures if the title of a media file should be displayed|true|
|**displaydescription**|Boolean|Configures if the description title of a media file should be displayed|true|
|**stretching**|String| Resize images and video to fit player dimensions. See graphic below for examples <br/> **"uniform"** — Fits JW Player dimensions while maintaining aspect ratio <br/> **"exactfit":** Will fit JW Player dimensions without maintaining aspect ratio <br/>**"fill"**— Will zoom and crop video to fill dimensions, maintaining aspect ratio <br/> **"none"** — Displays the actual size of the video file. (Black borders)|"uniform"|
|**nextUpDisplay**|Boolean|Configures whether the Next Up modal is displayed |-|
|**qualityLabels**|Array|By default, the JW Player will set video quality levels using information from the manifest files. Use this configuration option to apply a custom quality label to a desired bandwidth in kbps, works for HLS and DASH. For example: "qualityLabels":{"2500":"High","1000":"Medium"} |-|

!!!
`timeSliderAbove`, which configures whether the timeslider dynamically appears above the control bar, has been deprecated. <sup>8.0+</sup>
!!!

#### Stretching Examples

![](//support-static.jwplayer.com/images/stretch-options.png)

<br/>

### Rendering and Loading

|Setting|Type|Description|Default|
|--|--|--|--|
|**base**|String|Configures an alternate base path for skins and providers|"/"|
|**preload**|String|Tells the player if content should be loaded prior to playback. Useful for faster playback speed or if certain metadata should be loaded prior to playback: <br/>**"none"** — Player will explicitly **not** preload content. **(Recommended if you are concerned about excess content usage.)**<br/>**"metadata"** — Loads the manifest and buffers a maximum of one segment of media for HLS and Dash streams.<br/> **"auto"** — Loads the manifest and buffers approximately 30 seconds worth of media segments.|"metadata"|
|**flashplayer**|String|Specifies an alternate directory of **jwplayer.flash.swf**|"/"|

!!!
`primary`, which set the default player rendering mode, has been deprecated.<sup>8.0+</sup> Flash is no longer supported in JW Player except to play HLS streams in IE11 on Windows 7.
<br/>
<br/>
The default `preload` configuration has been updated to "metadata", and the _metadata_ and _auto_ settings have been redefined.<sup>8.0+</sup>
!!!

<a name="playlist"></a>

* * *

## Playlist

The playlist is a powerful feature of JW Player, used to play multiple video or audio files.

A playlist can be either a **string**, referring to the URL of an RSS feed or JSON file, or an **array** of media objects.

#### Configuring Playlist as a String

```
jwplayer("myElement").setup({
  "playlist": "http://example.com/myPlaylist.json"
});
```

#### Configuring Playlist as an Array

```
jwplayer("myElement").setup({
    "playlist": [{
        "file": "/assets/sintel.mp4",
        "image": "/assets/sintel.jpg",
        "title": "Sintel Trailer",
        "mediaid": "ddra573"
    },{
        "file": "/assets/bigbuckbunny.mp4",
        "image": "/assets/bigbuckbunny.jpg",
        "title": "Big Buck Bunny Trailer",
        "mediaid": "ddrx3v2"
    }]
});
```

|Setting|Type|Description|
|--|--|--|
|**playlist[_index_].file**|String|**(Required)** If no file is specified in your setup or sources, this is a required configuration option|
|**playlist[_index_].withCredentials**|Boolean|If true, "withCredentials" will be used to request a media file rather than CORS|false|
|**playlist[_index_].title**|String|Title of the item. This is displayed inside of the player prior to playback, as well as in the visual playlist. This can be hidden with the displaytitle option|
|**playlist[_index_].description**|String|Short description of the item. It is displayed below the title. This can be hidden with the displaydescription option.|
|**playlist[_index_].image**|String|Poster image URL. Displayed before and after playback.|
|**playlist[_index_].mediaid**|String|Unique identifier of this item. Used by advertising, analytics and discovery services|
|**playlist[_index_].recommendations**|String|URL to a feed that contains related items for a particular playlist item|
|**playlist[_index_].minDvrWindow**|Number|**HLS-only** In seconds, the minimum amount of content in an M3U8 required to trigger DVR mode. Set to 0 to always display DVR mode.(Defaults to **120**)|
|**playlist[index].stereomode**|String|Used for playback of a spherical 360 Video. "Monoscopic" is the value supported at this time.|
|[playlist&#91;_index_&#93;.sources&#91;&#93;](#playlist-sources) |Array|Used for quality toggling and alternate sources|
|[playlist&#91;_index_&#93;.tracks&#91;&#93;](#playlist-tracks) |Array|Include **captions**, **chapters**, and **thumbnails** for media|
|[playlist&#91;_index_&#93;.adschedule](#playlist-adschedule)|Object|Schedule advertising for a specific media file|

In addition to standard media information, ("title", "description", "mediaid") it is also possible to insert additional metadata, using custom properties. This information **must** be entered inside of a playlist, and cannot be set directly inside of a setup block.

<br/>

<a name="playlist-sources"></a>
### playlist[_index_].sources[]

Sources are inserted into playlist objects and are lists of files. Sources serve a dual purpose, depending on the files used:

 * **Use different file types:** Alternate "fallback" media sources
 * **Use the same file type:** Toggle quality with static video files

#### Alternate Media Sources

If using different file types, sources prioritizes which file to play, based on order. For example, the player will attempt to play myVideo.m3u8 as a first choice. In the event that a browser cannot play an m3u8, the player is intelligent enough to choose myVideo.mp4 instead. In the event that an mp4 cannot be played, the player will attempt the webm format before producing an error.

```
jwplayer("myElement").setup({
  "playlist": [{
    "title":"One Playlist Item With Multiple Sources",
    "description":"Three Sources - One Playlist Item",
    "image": "myImage.png",
    "mediaid": "ddrx3v2",
    "sources": [{
      "file": "myVideo.m3u8"
    },{
      "file": "myVideo.mp4"
    },{
      "file": "myVideo.webm"
    }]
  }]
});
```
#### Sources with DRM

When using DRM, we highly suggest placing the drm block inside of the appropriate media source. This ensures the correct media and DRM pair gets chosen for the appropriate browser. For example:

```
  "sources": [{
      "file": "myFairplayStream.m3u8",
      "drm": {
        "fairplay": {
          "certificateUrl": "http://myfairplay.com/fairplay/cert",
          "processSpcUrl": "http://myfairplay.com/fairplay/ckc"
        }
      }
    },{
      "file": "myWidevineStream.mpd",
      "drm": {
        "widevine": {
          "url": "http://mywidevineurl.com/drm"
          }
      }
    },{
      "file": "myPlayreadyStream.mpd",
      "drm": {
        "playready": {
          "url": "http://myplayreadyurl.com/drm"
          }
      },{
      "file": "myClearkeyStream.mpd",
      "drm": {
        "clearkey": {
          "key": "1234clear5678key",
          "keyId": "fefde00d-efde-adbf-eff1-baadf01dd11d"
          }
      }
    }]
```
See our [drm](#drm) section for more information.

#### Quality Settings for Video Files

In the event that a streaming technology like HLS or DASH cannot be used, listing video files of different qualities will enable a quality selection settings menu in the player. Compared to other streaming methods, it has the following drawbacks:

* No automatic switching, based on bandwidth or download speed
* Changing qualities may cause playback stuttering
* [Pseudostreaming](https://support.jwplayer.com/customer/portal/articles/1430518-pseudo-streaming-in-flash) may need to be configured in cases where Flash is used

```
jwplayer("myElement").setup({
  "playlist": [{
    "title":"One Playlist Item With Multiple Qualities",
    "description":"Two Qualities - One Playlist Item",
    "sources": [{
      "file": "myVideo-720p.mp4",
      "label": "HD"
    },{
    "file": "myVideo-480p.mp4",
    "label": "SD"
    }]
  }]
});
```

|Config|Type|Description|
|---|---|---|
|**playlist[_index_].sources[].file**|String|URL to the video file, audio file, YouTube video or live stream of this playlist item source.|
|**playlist[_index_].sources[].label**|String|Label of the media source, displayed in the manual quality selection menu. Set this if you have more than 2 qualities of your video.|
|**playlist[_index_].sources[].type**|String|Forces a media type. Only required when a file extension is missing or not recognized (Using .php or certain tokens, for example|
|**playlist[_index_].sources[].default**|Boolean|Set this to **true** for the media source you want to play on startup. If this isn't set for any source, the first one is used|
|**playlist[_index_].sources[].drm**|Object|An object containing DRM information for a particular source|

<br/>

<a name="playlist-tracks"></a>
### playlist[_index_].tracks[]

Tracks can be attached to media for three possible reasons: **captions**, **thumbnails**, or **chapters**. Thumbnail and chapter files **must** be in WEBVTT format. Captions accept **WEBVTT**, **SRT**, and **DFXP** format, though JW Player strongly suggests using **WEBVTT** if possible.

|Config|Type|Description|Default|
|---|---|---|---|
|**playlist[_index_].tracks[].file**|String|URL to the captions, chapters or thumbnails text track file. See [Adding Closed Captions](https://support.jwplayer.com/customer/portal/articles/1407438-adding-closed-captions) for an example setup.|-|
|**playlist[_index_].tracks[].kind**|String|The kind of text track. <br/> **"captions":** Captions that display during video playback<br/>**"chapters":** Places markers on the video er, displaying different sections<br/>**"thumbnails":** A list of thumbnails that appear when the mouse cursor hovers on the timeslider|"captions"|
|**playlist[_index_].tracks[].label**|String|Label of the text track. Is only used in setups with multiple captions, where the label is displayed in the CC selection menu.|index|
|**playlist[_index_].tracks[].default**|Boolean|Only for **captions**. Set this to **true** if you want a captions track to display by default|-|

When using the playlist to load an RSS feed, these options are set in the feed. See the [Media Formats Reference](https://support.jwplayer.com/customer/portal/articles/1403635-media-format-reference) for an mapping of all playlist options to RSS format.

<br/>

<a name="playlist-adschedule"></a>
!!!important
Video ad insertion requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/contact-us/?utm_source=developer&utm_medium=CTA&utm_campaign=player-docs) to upgrade your account.
!!!

### playlist[_index_].adschedule

The **playlist[_index_].adschedule** block is used for scheduling ad breaks throughout specific playlist items. Each **adbreak** should be given a unique name, and needs to be nested inside of an **adschedule** block.

|Config|Type|Information|
|---|---|---|
|**playlist[_index_].adschedule.*adbreak*.offset**|String or Number|Specifies when the included tag should play during content. Can be **pre** for a preroll, **post** for a postroll, or a **%** or **number**(In seconds), for a midroll|
|**playlist[_index_].adschedule.*adbreak*.tag**|String|This is used to set the ad tag for each adbreak within the ad schedule of a playlist item.|
```
jwplayer("myElement").setup({
  "playlist": [{
  "title":"One Media Item",
  "description":"Only One media item in a playlist!",
  "file": "myFile.mp4",
  "mediaid": "ddrx3v2",
  "image": "myImage.png",
    "adschedule": {
      "myPreroll": {
      "offset": "pre",
      "tag": "myAdTag.xml"
      },
    "myMidroll": {
      "offset": 10,
      "tag": "myMidroll.xml"
      }
    }
  }]
});
```
See our [Advertising](https://support.jwplayer.com/customer/portal/topics/605644-advertising/articles) section for more articles and examples

<a name="skin"></a>

* * *

## Skin

#### Color Customization

JW8 comes with 11 new skin configuration options out of the box. With such granular control over brand identity, it’s easier than ever to customize the player. Color can be specified as a [hex value](http://www.w3schools.com/colors/colors_picker.asp), [RGBA color value](https://www.w3schools.com/css/css3_colors.asp), or [color name](http://www.w3schools.com/colors/colors_names.asp).<sup>8.0+</sup>

|Config|Type|Description|Default|
|---|---|---|---|
|**skin.controlbar.text**|String|The color of any plain text in the control bar, such as the time. |"#F2F2F2"|
|**skin.controlbar.icons**|String|The default, inactive color of all icons in the control bar. This option also controls the color of the play, pause, and replay icons in the inactive and complete states.|"#CCCCCC"|
|**skin.controlbar.iconsActive**|String|The color of hovered or selected icons in the control bar.|"#FFFFFF"|
|**skin.controlbar.background**|String|TThe background color of the control bar and the volume slider. The default background is transparent.|"rgba(255,255,255,0)"|
|**skin.timeslider.progress**|String|The color of the bar in the time slider filled in from the beginning of the video through the current position. The buffer region of the control bar is 50% of the opacity of this color. The color of the volume slider is also controlled by this option.|"#F2F2F2"|
|**skin.timeslider.rail**|String|The color color of the base of the timeslider, known as the rail.|"rgba(255,255,255,0.3)"|
|**skin.menus.text**|String|The color of inactive, default text in menus and the Next Up overlay. |"#F2F2F2"|
|**skin.menus.textActive**|String|The color of hovered or selected text in menus. This option also controls the text color in the Discover overlay and the hover state text color in the Next Up overlay.|"#FFFFFF"|
|**skin.menus.background**|String|The background color of menus and the Next Up overlay.|"#333333"|
|**skin.tooltips.text**|String|The text color of tooltips.|"#333333|
|**skin.tooltips.background**|String|The background color of tooltips. |"#FFFFFF"|

#### Backward Compatability 
JW8 continues to support the three [color customization options](/jw7/customization/configuration-reference/#skin) from 7.x, `skin.active`, `skin.inactive`, `skin.background`, though the colors may map slightly differently in the new major version. 

The table below shows how the three JW7 customization options map to the new JW8 options. You can use both JW7 and JW8 options in an 8 player, with the more specific JW8 configurations overriding JW7 ones when both apply to the same element. Note that there’s no JW7 mapping to the new `skin.timeslider.rail` option.

|New JW8 Config|skin.active|skin.inactive|skin.background|
|---|-|-|-|
|**skin.controlbar.iconsActive**|X| | |
|**skin.timeslider.progress**|X| | |
|**skin.menus.textActive**|X| | |
|**skin.controlbar.text**| | X | |
|**skin.controlbar.icons**| | X | |
|**skin.menus.text**| | X | |
|**skin.tooltips.text**| | X | |
|**skin.tooltips.background**| | | X |
|**skin.controlbar.background**| | | X |
|**skin.menus.background**| | | X |
|**skin.timeslider.rail**| does not map |

#### Custom Skins

For more information regarding custom skins, see: [Creating a Skin for JW Player](/customization/css-skinning/skins_creating/).

|Config|Type|Description|Default|
|---|---|---|---|
|**skin.url**|String|If using an external CSS file to style your player, this must be specified here.|-|
|**skin.name**|String|The name of your custom skin to use for styling the player. If you are specifying **skin.url**, you must specify **skin.name**, which must match the class name in your CSS file.|-|

!!!
The nine skins available in JW7 have been deprecated.<sup>8.0+</sup>
!!!


<a name="captions"></a>

* * *

## Captions

This options block configures the styling of closed captions in the player for desktop browsers. On iOS/Android, a system settings menu provides exactly the same settings, as these are mandated by the FCC.

|Config|Type|Description|Default|
|---|---|---|---|
|**captions.color**|String|Hex color of the captions text|"#ffffff"|
|**captions.fontSize**|Number|Size of the captions text (Will not affect text size when rendering captions via browser)|15|
|**captions.fontFamily**|String|[Font Family](http://www.w3schools.com/cssref/pr_font_font-family.asp) of the captions text|"sans"|
|**captions.fontOpacity**|Number|Alpha percentage of the captions text|100|
|**captions.backgroundColor**|String|Hex color of the caption characters background|"#000000"|
|**captions.backgroundOpacity**|Number|Alpha percentage of the caption characters background|75|
|**captions.edgeStyle**|String|Method by which the captions characters are separated from their background|"none"|
|**captions.windowColor**|String|Hex color of the background of the entire captions area|"#000000"|
|**captions.windowOpacity**|Number|Alpha percentage of the background of the entire captions area|0|

!!!
When setting caption styles, color *must* be specified as a [hex value](http://www.w3schools.com/colors/colors_picker.asp)
!!!

See [Styling Captions for FCC Compliance](https://support.jwplayer.com/customer/portal/articles/1482067-styling-captions-for-fcc-compliance) for more information.

<a name="rtmp"></a>

* * *

## RTMP

!!!
The RTMP format was deprecated in JW8.<sup>8.0+</sup> For 7.x players, see the [JW7 RTMP Configuration Reference](/jw7/configuration-reference/#rtmp) documentation.
!!!

<a name="logo"></a>

* * *

## Logo

This options block configures a clickable watermark that is overlayed on the video.

|Config|Type|Description|Default|
|---|---|---|---|
|**logo.file**|String|The URL of an external JPG, PNG or GIF image to be used as watermark (e.g. /assets/logo.png). We recommend using 24 bit PNG images with transparency|-|
|**logo.hide**|Boolean|When this option is set to true, the logo will automatically show and hide along with the other player controls|false|
|**logo.link**|String|The URL to visit when the watermark image is clicked. Clicking a logo will have no affect unless this is configured|-|
|**logo.margin**|Number|The distance, in pixels, of the logo from the edges of the display|20|
|**logo.position**|String|This sets the corner in which to display the watermark. **"control-bar"** adds the logo as the leftmost icon in the right grouping of buttons in the control bar.<sup>8.0+</sup> <br/> **"top-left" <br/> "top-right" <br/>"bottom-left"<br/> "bottom-right" <br/> "control-bar"**| "top-right" |

See [Branding Your Player](https://support.jwplayer.com/customer/portal/articles/1406865-branding-your-player) for more information.

<a name="sharing"></a>

* * *

## Sharing

This options block controls a settings submenu with social sharing options: copy embed code, copy video link and share video to social networks.

Setting an empty **"sharing":{}** options block will enable the social sharing menu and icon in the control bar. Without the nested config options, it will show the page URL link with default sharing sites, but no embed code.

|Config|Type|Description|Default|
|---|---|---|---|
|**sharing.link**|String|URL to display in the video link field|URL of the current page|
|**sharing.code**|String|Embed code to display in the embed code field. If no code is set, the field is not shown|-|
|**sharing.heading**|String|Short, instructive text to display at the top of the sharing screen|"Share Video"|
|**sharing.sites**|Array|Allows for the customization of social icons|["facebook","twitter","email"]|

#### Available Built-In Social Networks

|Social Network|Configuration Value| |Social Network|Configuration Value|
|-|-|-|-|-|
|**Facebook**|"facebook"| |**Tumblr**|"tumblr"|
|**Twitter**|"twitter"| |**Google Plus**|"googleplus"|
|**Pinterest**|"interest"| |**Reddit**|"reddit"|
|**Email**|"email"| |**LinkedIn**|"linkedin"|

#### Example

```
jwplayer("myElement").setup({
  "file": "http://example.com/myVideo.mp4",
  "sharing": {
    "sites": ["reddit","facebook","twitter"]
  }
});
```

See our [Social Sharing](https://support.jwplayer.com/customer/portal/articles/1409823-social-sharing-overlay#fndtn-dashboard) support article for more information.

<a name="ga"></a>

* * *

## Google Analytics (ga)

This options block configures the built-in integration with Google Analytics.

|Config|Type|Description|Default|
|---|---|---|---|
|**ga.label**|String|Send another playlist property, like "title" or "mediaid", as your event label in Google Analytics|"file"|

Google's separate [analytics.js](https://developers.google.com/analytics/devguides/collection/analyticsjs/) JavaScript library and config needs to be included in your page's head in order to send events with JW Player. Setting an empty **"ga":{}** options block will enable basic Google Analytics integration. No additional nested config options are required.

See [Connecting Google Analytics](https://support.jwplayer.com/customer/portal/articles/1417179-integration-with-google-analytics) for more information.

<a name="related"></a>

* * *

## Related

This options block controls an overlay with related videos.

|Config|Type|Description|Default|
|---|---|---|---|
|**related.file**|String|**(Required)** Location of an RSS or JSON file containing a feed of related videos|-|
|**related.oncomplete**|String|The behavior of our related videos overlay when a single video or playlist is completed <br/> **"hide"**: Replay button and related icon will appear <br/> **"show"**: Display the related overlay <br/> **"autoplay"**: automatically play the next video in your related feed after 10 seconds. Automatically sets onclick behavior to **"play"**|"show"|
|**related.heading**|String|Single line heading displayed above the grid with related videos. Generally contains a short call-to-action|"Related Videos"|
|**related.autoplaytimer**|Number|The number of seconds to wait before playing the next related video in your content list. Set to 0 to have your next related content to play immediately|10|
|**related.autoplaymessage**|String|A custom message that appears during autoplay. <br/> **xx** will be replaced by the countdown timer<br/> **__title__** will be replaced by the next title in the related feed.| "&#95;_title__ will play in xx seconds"|

See [Display Related Videos](https://support.jwplayer.com/customer/portal/articles/1409745-display-related-videos) for more information.

<a name="advertising"></a>

* * *

## Advertising

!!!important
Video ad insertion requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/get-started/) to upgrade your account.
!!!

This options block configures the video advertising capabilities of JW Player. If no **schedule** is specified, the ad will play as a preroll by default.

|Option|Type|Description|Default|
|---|---|---|---|
|**advertising.client**|String|**(Required for Advertising)**<br/> Chooses the ad client that will be used to display advertisements:<br/>**"vast":** Use the JW Player VAST client <br/> **"googima"**: Use the Google IMA SDK - Required for certain ad tags <br/> **"freewheel"**: Use the FreeWheel client|-|
|**advertising.tag**|String|The URL of the VAST tag to display, or custom string of the FreeWheel tag to display|-|
|**advertising.admessage**|String|Text that displays during ad playback|"The ad will end in xx seconds"|
|**advertising.skipoffset**|Number|If not present in the VAST file, adds a skip offset to static VAST ads|-|
|**advertising.cuetext**|String|Specify the text that appears when a user mouses over a scheduled advertisement|"Advertisement"|
|**advertising.skipmessage**|String|This is used to provide a customized countdown message|"Skip ad in xx"|
|**advertising.skiptext**|String|This sets the text of the Skip button after the countdown is over|"Skip"|
|**advertising.vpaidmode**|String|Used exclusively for [Google IMA VPAID ads](https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.ImaSdkSettings.VpaidMode)<br/>**"disabled":** VPAID ads will not play and an error will be returned if VPAID is requested <br/> **"enabled"**: VPAID is enabled using a cross domain iframe. The VPAID ad cannot access the site. VPAID ads that depend on friendly iframe access may not play<br/>**"insecure":** The VPAID ad will load in a friendly iframe. This allows the ad access to the site via javascript <br/> Not supported in FreeWheel|"insecure"|
|**[advertising.schedule](#advertising-schedule)**|String or Object|Load an ad schedule from an external VMAP XML or JSON block. **advertising.tag** is ignored if this option is set|-|
|**[advertising.companiondiv](#advertising-schedule)**|Object|Gives information to the player related to which div(s) to populate with companion ads. <br/> Not supported in FreeWheel|-|
|**advertising.autoplayadsmuted**|Boolean|For inline players that start muted when viewed on mobile devices, allows ads to play muted|-|
|**advertising.enablepreloading**|Boolean|For disabling ad preloading when using IMA|-|
|**advertising.vpaidcontrols**|Boolean|For forcing controls to show for VPAID ads. If the VPAID creative has built-in controls, showing the controls may be redundant|-|
|**advertising.forceNonLinearFullSlot**|Boolean|(Only supported when using IMA) For forcing nonlinear ads to be fullsot ads rather than overlays.|-|
|**advertising.setLocale**|String|(Only supported when using IMA) Two-letter language code for localization of skip-button language. Two-letter language code must be valid.|-|
|**advertising.creativeTimeout**|String|(Only supported when using VAST) In milliseconds, the time between the VAST XML being returned and the adstart event. |15000|
|**advertising.requestTimeout**|String|(Only supported when using VAST) In milliseconds, the time between the ad request and a returned VAST file.|5000|

<br/>

<a name="advertising-schedule"></a>
### advertising.schedule

Use this option to load an entire advertising schedule to JW Player, containing multiple ad breaks. The option can be a URL to a VMAP schedule or an inline JSON block with ads. This schedule will then be applied to each playlist item. For scheduling ads for individual playlist items, see [scheduling ads for playlist items](#playlist-adschedule).

#### Ad Schedules with VMAP Files

If you are planning on using a VMAP file, simply link to a VMAP .xml file within the advertising block.
```
jwplayer("myElement").setup({
  "file": "http://example.com/myVideo.mp4",
  "advertising": {
    "client": "vast",
    "schedule": "myvmap.xml"
  }
});
```

The VMAP schedule will then be applied to each playlist item. See our article about VMAP schedules for more information.

#### Embedded Ad Schedules with JSON

In order to use a JSON-formatted schedule, you'll need at least one **ad break** configured inside of an **advertising** block. Each ad break is required to have a unique name, and should include a tag and offset.

|Option|Type|Description|Default|
|---|---|---|---|
|**advertising.schedule.*adbreak*.tag**|String|The ad tag that is called during the configured ad break|-|
|**advertising.schedule.*adbreak*.offset**|String or Number|When to play the configured ad tag<br/>**"pre":** Ad plays as a preroll <br/>**"post":** Ad plays as a postroll<br/>**"xx%":** Ad plays after xx% of the content<br/>**number:** Ad plays after the specified number of seconds|"pre"|
```
jwplayer("myElement").setup({
  "file": "http://example.com/myVideo.mp4",
  "advertising": {
    "client": "vast",
    "schedule": {
      "adbreak-preroll":{
        "tag": "myPreroll.xml",
        "offset": "pre"
      },
      "adbreak-midroll":{
        "tag": "myMidroll.xml",
        "offset": "50%"
      }
    }
  }
});
```

|Option|Type|Description|Default|
|---|---|---|---|
|**advertising.schedule.*adbreak*.custParams**|Object|Allows for passing custom parameters to an ad break, which then pass through to the URL requested from the ad server|-|
```
"advertising": {
        "client": "googima",
        "adscheduleid": "12345",
        "schedule": {
            "preroll": {
                "custParams": {
                    "testkey1": "testval1",
                    "testkey2": "testval2"
                },
                "tag": "myPreroll.xml",
                "offset": "pre"
            }
        }
    }
```
<br/>

<a name="advertising-companiondiv"></a>
### advertising.companiondiv

This is a configuration block object with 3 properties: id, width and height. Set these to have JW Player load a companion ad from your VAST/IMA tag into a div on your page. See [Companion Ads](https://support.jwplayer.com/customer/portal/articles/1433869-companion-ads) for more info.

|Option|Type|Description|
|---|---|---|
|**advertising.companiondiv.height**|Number|The targeted desired height of a companion ad that exists in a VAST ad|
|**advertising.companiondiv.width**|Number|The targeted desired width of a companion ad that exists in a VAST ad|
|**advertising.companiondiv.id**|String|The ID of the div to replace with a companion ad|


For an overview of JW Player's advertising capabilities, see its dedicated [Video Ads section](https://support.jwplayer.com/customer/portal/topics/605644-video-ads/articles).

<a name="drm"></a>

* * *

## DRM

!!!important
Video content protection requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/get-started/) to upgrade your account.
!!!

Configuration options related to DRM for MPEG DASH (Playready, Widevine, Clearkey) and HLS streams (Fairplay).

JW Player includes the ability to add DRM to a specific playlist source. Using this method will allow your browser to choose the correct DRM method when multiple DRM types are configured. We **highly** suggest updating any configurations to use this new method.

For more information regarding DRM, and for examples, please view our [support article](https://support.jwplayer.com/customer/portal/articles/2561182-drm-digital-rights-management)

###drm.playready

Playready DRM is specific to Internet Explorer 11 and Edge on Windows 8.1 or higher operating systems.

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.playready.url**|String|**(Required)** The URL of the PlayReady license server|-|
|**drm.playready.headers**|Array| Specifies the custom http headers to send to your playready license server. See [headers](#headers) for more information|-|

<br/>

### drm.widevine

Widevine DRM is specific to Google Chrome on non-iOS devices. Widevine will also function on Firefox browsers for desktop systems.

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.widevine.url**|String|**(Required)** The URL of the WideVine license server|-|
|**drm.widevine.serverCertificateUrl**|String|**(Required)** The URL of the WideVine service certificate|-|
|**drm.widevine.headers**|Array| Specifies the custom http headers to send to your widevine license server requests. See [headers](#headers) for more information |-|

<br/>

<a name="headers"></a>
### drm.[widevine/playready].headers

Adding customized HTTP header data to license requests is possible with the "headers" configuration. This replaces the static "customData" configuration option in both widevine and playready scenarios. It is also possible to add multiple custom http headers by including multiple objects in the "headers" array.

DRM can be configured in the following way:

```
"drm": {
  "playready": {
  "url": "mydrmserver.com"
  "headers": [{
    "name": "customData",
    "value": "hereismycustomdatastring"
    }]
  }
}
```
In previous versions, adding "customData" would look like the following:

```
"drm": {
  "playready": {
  "url": "mydrmserver.com"
  "customData": "hereismycustomdatastring"
  }
}
```

|Option|Type|Description|
|---|---|---|
|**headers.name**|String|The name of the http header that will be included|
|**headers.value**|String|The value of the http header that will be included|

<br/>

### drm.fairplay

JW Player includes configuration options for custom Fairplay integrations. For more information and examples regarding custom Fairplay DRM integrations, please view our [support article](https://support.jwplayer.com/customer/portal/articles/2561182-drm-digital-rights-management-#fairplay).

|Option|Type|Description|
|---|---|---|
|**drm.fairplay.certificateUrl**|String|**(Required)** The path to the certificate which is part of the session data used to initialize the keySession.certificateUrl|
|**drm.fairplay.processSpcUrl**|String or Function|**(Required)** The path to the license server (server playback context) which provides the ckc. Expects a direct url to the server. If the url needs to be constructed dynamically, a custom function can be passed to this configuration option which returns the url|
|**drm.fairplay.extractContentId**|Function|Expects a function that receives the initData uri (converted to a string) from the needkey event, and returns the contentId which is part of the session data used to initialize the keySession|
|**drm.fairplay.licenseRequestHeaders**|Array|Expects an Array of Objects containing header “name” and “value” properties to be included in the request to the license server|
|**drm.fairplay.licenseResponseType**|String|Specifies the data type returned by the XHR request to the license server. The default value is 'arraybuffer'. Other options include 'blob', 'json', and 'text'. This option impacts how “licenseRequestMessage” will be processed|
|**drm.fairplay.licenseRequestMessage**|Function|Expects a function that receives the license key message and returns the message to be sent to the license server. With the default “licenseResponseType” of ArrayBuffer this function passes through keymessage event message property without any changes|
|**drm.fairplay.extractKey**|Function|Expects a function that receives the ckc returned by the license server and returns the key used to update the active key session. If the key can only be extracted asynchronously (for example reading bytes from a ‘blob’ response), this function can return a promise|

<br/>

### drm.clearkey

A basic form of DRM that lists a decryption key inside of your player configuration. This is the least secure form of DRM, though it is the simplest to implement across browsers. There are no additional server resources required to decrypt content with this method. Clearkey is supported in both Chrome and Firefox browsers.

|Option|Type|Description|
|---|---|---|
|**drm.clearkey.key**|String|**(Required)** The key required to decrypt DRM content|
|**drm.clearkey.keyId**|String|**(Required)** The key ID specified in the mpd's **default_KID** value  |

<a name="localization"></a>

* * *

## Localization

Using the localization block in a player configuration allows you to configure certain words and phrases in the JW Player Next Up interface. The available options are below.

|Option|Type|Description|Default|
|---|---|---|---|
|**localization.airplay**|String|Title of the tooltip for the Airplay icon in the control bar |"Airplay"|
|**localization.audioTracks**|String|Title of the tooltip for the audio track menu |"Audio tracks"|
|**localization.buffer**|String|Title of the buffer state |"Loading"|
|**localization.cast **|String|Title of the tooltip for the Chromecast icon in the control bar |"Chromecast"|
|**localization.cc**|String|Title of the tooltip for the captions menu  |"Closed captions"|
|**localization.close**|String|Title of tooltip on close icon in Related mode  |"Close"|
|**localization.fullscreen**|String|Title of tooltip to enter fullscreen mode |"Fullscreen"|
|**localization.hd **|String|Title of the tooltip for the quality menu |"Quality"|
|**localization.liveBroadcast**|String|Override for the state of a live stream |"Live broadcast"|
|**localization.loadingAd**|String|Override for the text shown when an ad is loading |"Loading ad"|
|**localization.more**|String|Override for uses of a prompt to load addition items  |"More"|
|**localization.next**|String|Title of the right arrow in paginated overlays  |"Next"|
|**localization.nextUp**|String|Override for the "Next Up" prompt |"Next Up"|
|**localization.nextUpClose**|String|Title of the tooltip to close the "Next Up" prompt  |"Next Up Close"|
|**localization.pause**|String|Tooltip for the pause button  |"Pause"|
|**localization.play**|String|Tooltip for the play button |"Play"|
|**localization.playback**|String|Override for the play button in an idle state |"Start playback"|
|**localization.playbackRates**|String|Title of the tooltip for the playback rate controls menu  |"Playback rates"|
|**localization.player**|String|Override for the player application |"Video Player"|
|**localization.playlist**|String|Title of the Next Up tooltip in Playlist mode |"Playlist"|
|**localization.prev**|String|Title of the left arrow in paginated overlays |"Previous"|
|**localization.related**|String|Title of the Next Up tooltip in Related mode  |"Discover"|
|**localization.replay**|String|Title of the tooltip for the replay button shown on completion  |"Replay"|
|**localization.rewind**|String|Title of tooltip for the rewind button in the control bar |"Rewind 10s"|
|**localization.volume**|String|Tooltip for the volume controls |"Volume"|

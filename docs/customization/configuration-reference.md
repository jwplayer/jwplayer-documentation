#JW Player Configuration Reference

This article acts a reference to all configuration options JW Player supports. Configuration options tell a player instance which media to play and how to layout and behave on your page.

|Table Of Contents| | |
|--|--|--|
|[Setup Options](#setup)|[The Playlist](#playlist)|[Skin](#skin)|
|[Captions](#captions)|[RTMP](#rtmp)|[Logo](#logo)|
|[Sharing](#sharing)|[Google Analytics](#ga)|[Related](#related)|
|[Advertising](#advertising)|[DRM](#drm)||

## Introduction

JW Player contains a large number of features and options that can be configured inside of the player setup.  Some options, like **width** or **mute**, are directly placed into the setup. Other, more advanced options, are grouped into nested blocks, like **skin** or **advertising**.

Here is an example setup that contains both **setup** options and specific **advertising** options:

```
jwplayer("myElement").setup({
  "file": "http://example.com/myVideo.mp4",
  "height": 360,
  "width": 640,
  "autostart": true,
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

These are the options for configuring the layout and playback behavior of a player. Each is placed directly into the **setup** of the player

###Media

Media properties can either be configured directly inside of **setup**, or inside of a [playlist](#playlist). The below configurations can only be used for single media files.

|Setting|Type|Description|Default|
|--|--|--|--|
|**file**|String|**(Required)** URL to a single video file, audio file, YouTube video or live stream to play. Can also be configured inside of a [sources](playlist-sources) array|-|
|**image**|String|URL to a poster image to display before playback starts. |-|
|**title**|String|The title of your video or audio item|-|
|**description**|String|A description of your video or audio item|-|

###Behavior

|Setting|Type|Description|Default|
|--|--|--|--|
|**mute**|Boolean|Configures if the player should be muted during playback|false|
|**autostart**|Boolean|Whether the player will attempt to begin playback automatically when a page is loaded|false|
|**repeat**|Boolean|Configures if the player should loop content after a playlist completes|false|
|**abouttext**|String|Custom text to display in the right-click menu|-|
|**aboutlink**|String|Custom URL to link to when clicking the right-click menu|"https://www.jwplayer.com/learn-more"|

###Appearance

|Setting|Type|Description|Default|
|--|--|--|--|
|**controls**|Boolean|Whether to display the video controls (controlbar, display icons and dock buttons)|true|
|**aspectratio**|String|Maintains proportions when width is a percentage. Will not be used if the player is a static size|-|
|**height**|Number|The desired height of your video player (In pixels). Can be omitted when aspectratio is configured|270|
|**width**|Number or String|The desired height of your video player (In pixels or percentage)|480|
|**visualplaylist**|Boolean|Configure whether to display the visual playlist icon|true|
|**displaytitle**|Boolean|Configures if the title of a media file should be displayed|true|
|**displaydescription**|Boolean|Configures if the description title of a media file should be displayed|true|
|**stretching**|String| Resize images and video to fit player dimensions. See graphic below for examples <br/> **"uniform":** Fits JW Player dimensions while maintaining aspect ratio <br/> **"exactfit":** Will fit JW Player dimensions without maintaining aspect ratio <br/>**"fill":** Will zoom and crop video to fill dimensions, maintaining aspect ratio <br/> **"none":** Displays the actual size of the video file. (Black borders)|"uniform"|

####Stretching Examples:
![](//support-static.jwplayer.com/images/stretch-options.png)

####Rendering and Loading

|Setting|Type|Description|Default|
|--|--|--|--|
|**primary**|String| Sets the default player rendering mode.<br/>**"flash":** Player will attempt to render with Flash<br/>**"html5":** Player will attempt to render in HTML5| "html5" |
|**flashplayer**|String|Specifies an alternate directory of **jwplayer.flash.swf**|"/"|
|**base**|String|Configures an alternate base path for skins and providers|"/"|
|**preload**|String|Tells the player if content should be loaded prior to playback. Useful for faster playback speed or if certain metadata should be loaded prior to playback: <br/>**"none":** Player will explicitly **not** preload content <br/>**"metadata":** Only basic playback information will be loaded<br/> **"auto":** Browser attempts to load more of the video <br/>If you are concerned about excess content usage, we suggest setting **"preload":"none"**|*|

#### *If no preload option is selected in HTML5 mode, JW Player will rely on a browser's default &lt;video&gt; preload behavior

<a name="playlist"></a>
* * *

## Playlist

The playlist is a powerful feature of JW Player, used to play multiple video or audio files.

A playlist can be either a **string**, referring to the URL of an RSS feed or JSON file, or an **array** of media objects.

####Configuring Playlist as a String
```
jwplayer("myElement").setup({
  "playlist": "http://example.com/myPlaylist.json"
});
```

####Configuring Playlist as an Array
```
jwplayer("myElement").setup({
    "playlist": [{
        "file": "/assets/sintel.mp4",
        "image": "/assets/sintel.jpg",
        "title": "Sintel Trailer"
    },{
        "file": "/assets/bigbuckbunny.mp4",
        "image": "/assets/bigbuckbunny.jpg",
        "title": "Big Buck Bunny Trailer"
    }]
});
```

Basic playlist information is as follows:

|Setting|Type|Description|
|--|--|--|
|**playlist[].file**|String|**(Required)** If no file is specified in your setup or sources, this is a required configuration option|
|**playlist[].title**|String|Title of the item. This is displayed inside of the player prior to playback, as well as in the visual playlist. This can be hidden with the displaytitle option|
|**playlist[].description**|String|Short description of the item. It is displayed below the title. This can be hidden with the displaydescription option.|
|**playlist[].mediaid**|String|Unique identifier of this item. Used by advertising, analytics and discovery services.|
|**playlist[].image**|String|Poster image URL. Displayed before and after playback.|
|[playlist&#91;&#93;.sources&#91;&#93;](#playlist-sources) |Array|Used for quality toggling and alternate sources|
|[playlist&#91;&#93;.tracks&#91;&#93;](#playlist-tracks) |Array|Include **captions**, **chapters**, and **thumbnails** for media|
|[playlist&#91;&#93;.adschedule](#playlist-adschedule)|Object|Schedule advertising for a specific media file|

<a name="playlist-sources"></a>

### playlist[].sources[]

Sources are inserted into playlist objects and are lists of files. Sources serve a dual purpose, depending on the files used: 

 * **Use different file types:** Alternate "fallback" media sources
 * **Use the same file type:** Toggle quality with static video files

####Alternate Media Sources
If using different file types, sources prioritizes which file to play, based on order. For example, the player will attempt to play myVideo.m3u8 as a first choice. In the event that a browser cannot play an m3u8, the player is intelligent enough to choose myVideo.mp4 instead. In the event that an mp4 cannot be played, the player will attempt the webm format before producing an error.

```
jwplayer("myElement").setup({
  "playlist": [{
    "title":"One Playlist Item With Multiple Sources",
    "description":"Three Sources - One Playlist Item",
    "image": "myImage.png",
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

####Quality Toggle for Video Files

In the event that a streaming technology like HLS or DASH cannot be used, listing video files of different qualities will enable a quality selection menu in the player control bar. Compared to other streaming methods, it has the following drawbacks:

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

In the above example, the player will add an "HD" button, allowing a user to toggle their desired video quality. If more than two sources are used, the player will instead overlay a quality selection menu, rather than a quality toggle.

|Config|Type|Description|
|---|---|---|
|**playlist[].sources[].file**|String|URL to the video file, audio file, YouTube video or live stream of this playlist item source.|
|**playlist[].sources[].label**|String|Label of the media source, displayed in the manual HD selection menu. Set this if you have more than 2 qualities of your video.|
|**playlist[].sources[].type**|String|Forces a media type. Only required when a file extension is missing or not recognized (Using .php or certain tokens, for example|
|**playlist[].sources[].default**|Boolean|Set this to **true** for the media source you want to play on startup. If this isn't set for any source, the first one is used|

<a name="playlist-tracks"></a>

### playlist[].tracks[]

Tracks can be attached to media for three possible reasons: **captions**, **thumbnails**, or **chapters**. Thumbnail and chapter files **must** be in WEBVTT format. Captions accept **WEBVTT**, **SRT**, and **DFXP** format, though JW Player strongly suggests using **WEBVTT** if possible.

|Config|Type|Description|Default|
|---|---|---|---|
|**playlist[].tracks[].file**|String|URL to the captions, chapters or thumbnails text track file. See [Adding Closed Captions](https://support.jwplayer.com/customer/portal/articles/1407438-adding-closed-captions) for an example setup.|-|
|**playlist[].tracks[].kind**|String|The kind of text track. <br/> **"captions":** Captions that display during video playback<br/>**"chapters":** Places markers on the video control bar, displaying different sections<br/>**"thumbnails":** A list of thumbnails that appear when the mouse cursor hovers on the control bar|"captions"|
|**playlist[].tracks[].label**|String|Label of the text track. Is only used in setups with multiple captions, where the label is displayed in the CC selection menu.|index|
|**playlist[].tracks[].default**|Boolean|Only for **captions**. Set this to **true** if you want a captions track to display by default|-|


When using the playlist to load an RSS feed, these options are set in the feed. See the [Media Formats Reference](https://support.jwplayer.com/customer/portal/articles/1403635-media-format-reference) for an mapping of all playlist options to RSS format.


<a name="playlist-adschedule"></a>
### playlist[].adschedule

The **playlist[].adschedule** block is used for scheduling ad breaks throughout specific playlist items. Each **adbreak** should be given a unique name, and needs to be nested inside of an **adschedule** block. 

####Note: An [advertising](#advertising) block, which requires a [JW Player Ads license](https://www.jwplayer.com/pricing/), must be configured to specify your desired ad client before **adschedule** can be configured.

|Config|Type|Information|
|---|---|---|
|**playlist[].adschedule.*adbreak*.offset**|String or Number|Specifies when the included tag should play during content. Can be **pre** for a preroll, **post** for a postroll, or a **%** or **number**(In seconds), for a midroll|
|**playlist[].adschedule.*adbreak*.tag**|String|This is used to set the ad tag for each adbreak within the ad schedule of a playlist item.|
```
jwplayer("myElement").setup({
  "playlist": [{
  "title":"One Media Item",
  "description":"Only One media item in a playlist!",
  "file": "myFile.mp4",
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
<a name="skin"></a>

* * *

## Skin

Used for configuring JW Player's skins. The below default color values assume that the default **"seven"** skin is being used

#### Note: In these examples, color can be specified as [hex value](http://www.w3schools.com/colors/colors_picker.asp) values or as a [color name](http://www.w3schools.com/colors/colors_names.asp).

|Config|Type|Description|Default|
|---|---|---|---|
|**skin.name**|String|The skin to use for styling the player. JW Player includes [9 premade skins](https://support.jwplayer.com/customer/portal/articles/1406968-using-jw-player-skins)|"seven"|
|**skin.active**|String|The color of "active" skin elements.|"#ff0046"|
|**skin.inactive**|String|The color of "inactive" skin elements|"#ffffff"|
|**skin.background**|String|The color of a skin's background portion|"#000000"|
|**skin.url**|String|If using an external CSS file to style your player, this can be specified here*|-|

*If you are specifying **skin.url**, you will still need to specify **skin.name** and it must match the name in your .css file

More information regarding skins, see the following articles:

 * [Creating a Skin for JW Player](/customization/css-skinning/skins_creating/)
 * [Creating your own Font with JW Player](/customization/css-skinning/skins_fonts/)

<a name="captions"></a>

* * *

## Captions

This options block configures the styling of closed captions in the player for desktop browsers. On iOS/Android, a system settings menu provides exactly the same settings, as these are mandated by the FCC.

#### Note: In these examples, color can be specified as [hex value](http://www.w3schools.com/colors/colors_picker.asp) values or as a [color name](http://www.w3schools.com/colors/colors_names.asp).

|Config|Type|Description|Default|
|---|---|---|---|
|**captions.color**|String|Color of the captions text|"#ffffff"|
|**captions.fontSize**|Number|Size of the captions text|15|
|**captions.fontFamily**|String|[Font Family](http://www.w3schools.com/cssref/pr_font_font-family.asp) of the captions text|"sans"|
|**captions.fontOpacity**|Number|Alpha percentage of the captions text|100|
|**captions.backgroundColor**|String|Color of the caption characters background|"#000000"|
|**captions.backgroundOpacity**|Number|Alpha percentage of the caption characters background|75|
|**captions.edgeStyle**|String|Method by which the captions characters are separated from their background|"none"|
|**captions.windowColor**|String|Hex color of the background of the entire captions area|"#000000"|
|**captions.windowOpacity**|Number|Alpha percentage of the background of the entire captions area|0|


See [Styling Captions for FCC Compliance](https://support.jwplayer.com/customer/portal/articles/1482067-styling-captions-for-fcc-compliance) for more information.

<a name="rtmp"></a>

* * *

## RTMP

This options block controls the **specific** functions of the RTMP streaming protocol. These settings do not apply to HLS or DASH.

####Note: RTMP *requires* the installation of [Adobe Flash](https://get.adobe.com/flashplayer/) and will not work on mobile devices

|Config|Type|Description|Default|
|---|---|---|---|
|**rtmp.bufferlength**|Number|This option controls how much buffer, in seconds, to load before playing back. A small buffer means faster starts/seeks, but a higher chance of re-buffering. |3|
|**rtmp.subscribe**|Boolean|This option enables the FC Subscribe mechanism use by older streaming servers to manage load balancing|false|
|**rtmp.securetoken**|String|This option, supported for older Wowza instances, provides a security token to JW Player, which then amends this option to the RTMP application URL|-|

See [Using RTMP Streaming](https://support.jwplayer.com/customer/portal/articles/1430358-using-rtmp-streaming) for more information.

<a name="logo"></a>

* * *

## Logo

This options block configures a clickable watermark that is overlayed on the video.

|Config|Type|Description|Default|
|---|---|---|---|
|**logo.file**|String|The URL of an external JPG, PNG or GIF image to be used as watermark (e.g. /assets/logo.png). We recommend using 24 bit PNG images with transparency|-|
|**logo.hide**|Boolean|When this option is set to true, the logo will automatically show and hide along with the other player controls|false|
|**logo.link**|String|The URL to visit when the watermark image is clicked. Clicking a logo will have no affect unless this is configured|-|
|**logo.margin**|Number|The distance, in pixels, of the logo from the edges of the display|8|
|**logo.position**|String|This sets the corner in which to display the watermark. <br/> **"top-left" <br/> "top-right" <br/>"bottom-left"<br/> "bottom-right"**| "top-right" |

See [Branding Your Player](https://support.jwplayer.com/customer/portal/articles/1406865-branding-your-player) for more information.

<a name="sharing"></a>

* * *

## Sharing

This options block controls an overlay with social sharing options: copy embed code, copy video link and share video to social networks.

Setting an empty **sharing** options block will enable the social sharing overlay. Without the nested config options, it will show the page URL link with default sharing sites, but no embed code.

|Config|Type|Description|Default|
|---|---|---|---|
|**sharing.link**|String|URL to display in the video link field|URL of the current page|
|**sharing.code**|String|Embed code to display in the embed code field. If no code is set, the field is not shown|-|
|**sharing.heading**|String|Short, instructive text to display at the top of the sharing screen|"Share Video"|
|**sharing.sites**|Array|Allows for the customization of social icons|["facebook","twitter","email"]|

####Available Built-In Social Networks
|Social Network|Configuration Value|
|-|-|
|**Facebook**|"facebook"|
|**Twitter**|"twitter"|
|**Pinterest**|"interest"|
|**Email**|"email"|
|**Tumblr**|"tumblr"|
|**Google Plus**|"googleplus"|
|**Reddit**|"reddit"|
|**LinkedIn**|"linkedin"|

####Example:

```
jwplayer("myElement").setup({
  "file": "http://example.com/myVideo.mp4",
  "sharing": {
    "sites": ["reddit","facebook","twitter"]
  }
});
```

See [Social Sharing Overlay](https://support.jwplayer.com/customer/portal/articles/1409823-social-sharing-overlay#fndtn-dashboard) for more information.

<a name="ga"></a>

* * *

## Google Analytics (ga)

This options block configures the built-in integration with Google Analytics.

####Note: Google's separate [analytics.js](https://developers.google.com/analytics/devguides/collection/analyticsjs/) JavaScript library and config needs to be included in your page's head in order to send events with JW Player.

Setting an empty **"ga":{}** options block will enable basic Google Analytics integration. No additional nested config options are required. 

|Config|Type|Description|Default|
|---|---|---|---|
|**ga.label**|String|Send another playlist property, like "title" or "mediaid", as your event label in Google Analytics|"file"|

See [Connecting Google Analytics](https://support.jwplayer.com/customer/portal/articles/1417179-integration-with-google-analytics) for more information.

<a name="related"></a>

* * *

## Related

This options block controls an overlay with related videos.

|Config|Type|Description|Default|
|---|---|---|---|
|**related.file**|String|**(Required)** Location of an RSS or JSON file containing a feed of related videos|-|
|**related.onclick**|String|What to do when the user clicks a thumbnail <br/> **"link"**: Jump to the page URL of the related video <br/> **"play"**: Play the related video inline.<br/> **Note: If oncomplete is configured to "autoplay", we override onclick behavior to "play"**|"link"|
|**related.oncomplete**|String|The behavior of our related videos overlay when a single video or playlist is completed <br/> **"hide"**: Replay button and related icon will appear <br/> **"show"**: Display the related overlay <br/> **"autoplay"**: automatically play the next video in your related feed after 10 seconds. Automatically sets onclick behavior to **"play"**|"show"|
|**related.heading**|String|Single line heading displayed above the grid with related videos. Generally contains a short call-to-action|"Related Videos"|
|**related.autoplaytimer**|Number|The number of seconds to wait before playing the next related video in your content list. Set to 0 to have your next related content to play immediately|10|
|**related.autoplaymessage**|String|A custom message that appears during autoplay. <br/> **Note:** **xx** will be replaced by the countdown timer<br/> **Note:** **__title__** will be replaced by the next title in the related feed.| "&#95;_title__ will play in xx seconds"|

See [Display Related Videos](https://support.jwplayer.com/customer/portal/articles/1409745-display-related-videos) for more information.


<a name="advertising"></a>

* * *

## Advertising

###[JW Player Ads License](https://www.jwplayer.com/pricing/) Required

This options block configures the video advertising capabilities of JW Player. If no **schedule** is specified, the ad will play as a preroll by default. 

|Option|Type|Description|Default|
|---|---|---|---|
|**advertising.client**|String|**(Required for Advertising)**<br/> Chooses the ad client that will be used to display advertisements:<br/>**"vast":** Use the JW Player VAST client <br/> **"googima"**: Use the Google IMA SDK - Required for certain ad tags|-|
|**advertising.tag**|String|The URL of the VAST tag to display|-|
|**advertising.admessage**|String|Text that displays during ad playback|"The ad will end in xx seconds"|
|**advertising.skipoffset**|Number|If not present in the VAST file, adds a skip offset to static VAST ads|-|
|**advertising.cuetext**|String|Specify the text that appears when a user mouses over a scheduled advertisement|"Advertisement"|
|**advertising.skipmessage**|String|This is used to provide a customized countdown message|"Skip ad in xx"|
|**advertising.skiptext**|String|This sets the text of the Skip button after the countdown is over|"Skip"|
|**advertising.vpaidmode**|String|Used exclusively for [Google IMA VPAID ads](https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.ImaSdkSettings.VpaidMode)<br/>**"disabled":** VPAID ads will not play and an error will be returned if VPAID is requested <br/> **"enabled"**: VPAID is enabled using a cross domain iframe. The VPAID ad cannot access the site. VPAID ads that depend on friendly iframe access may not play<br/>**"insecure":** The VPAID ad will load in a friendly iframe. This allows the ad access to the site via javascript |"disabled"|
|**[advertising.schedule](#advertising-schedule)**|String or Object|Load an ad schedule from an external VMAP XML or JSON block. **advertising.tag** is ignored if this option is set|-|
|**[advertising.companiondiv](#advertising-schedule)**|Object|Gives information to the player related to which div(s) to populate with companion ads|-|

* * *

<a name="advertising-schedule"></a>

###advertising.schedule

Use this option to load an entire advertising schedule to JW Player, containing multiple ad breaks. The option can be a URL to a VMAP schedule or an inline JSON block with ads. This schedule will then be applied to each playlist item. For scheduling ads for individual playlist items, see [scheduling ads for playlist items](#playlist-adschedule)

####Ad Schedules with VMAP Files

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

####Embedded Ad Schedules with JSON

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
* * *
<a name="advertising-companiondiv"></a>

###advertising.companiondiv

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

###[JW Player Enterprise License](https://www.jwplayer.com/pricing/) Required

Configuration options related to DRM for MPEG DASH streams. As of JW 7.3.0, both WideVine and PlayReady are supported and can be configured independently within a single setup. See our [Using DASH Streaming](http://support.jwplayer.com/customer/portal/articles/2020483-using-dash-streaming) article for more configuration information and examples.

###drm.playready

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.playready.url**|String|**(Required)** The URL of the PlayReady license server|-|
|**drm.playready.customData**|String| Security data that should be passed in a request header |-|

###drm.widevine

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.widevine.url**|String|**(Required)** The URL of the WideVine license server|-|
|**drm.widevine.customData**|String| Security data that should be passed in a request header |-|

###drm.clearkey

A basic form of DRM that lists a decryption key inside of your player configuration. This is the least secure form of DRM, though it is the simplest to implement across browsers. There are no additional server resources required to decrypt content with this method.

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.widevine.key**|String|**(Required)** The key required to decrypt DRM content|-|
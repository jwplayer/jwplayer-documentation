!!!
This page has been updated for JW Player 8. Click here to go to the [JW7 Configuration Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/configuration-reference/).
!!!

# JW Player Configuration Reference
<sup>Last Updated: March 1, 2019</sup>

This article contains all configuration options JW Player supports.

!!!important
Certain JW Player features may require a specific license. Please [contact our team](//www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=player-docs) if your license does not support the features or configuration options you need.
!!!

|Table Of Contents| | |
|--|--|--|
|[Setup Options](#setup)|[Playlists](#playlist)|[Skin](#skin)|
|[Captions](#captions)|[RTMP](#rtmp)|[Logo](#logo)|
|[Sharing](#sharing)|[Google Analytics](#ga)|[Related](#related)|
|[Advertising](#advertising)|[DRM](#drm)|[Internationalization](#internationalization)|

## Introduction

JW Player contains a number of configurable options.  Some options, like **width** or **mute**, are top level, while other more advanced options may be nested, such as the ones used for skin customizations and advertising.

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
|**type**|String|Defining the video file type is required when using a media file url that does not have an extension. Possible values: aac, mp4, f4v, m4v, mov, mp3, mpeg, ogv, ogg, oga, vorbis, webm, f4a, m3u8, m3u, hls. |-|

!!!
YouTube and RTMP media formats are no longer supported.<sup>8.0+</sup>
!!!

<br/>

### Behavior

|Setting|Type|Description|Default|
|--|--|--|--|
|**mute**|Boolean|Configures if the player should be muted during playback|false|
|**autostart**|String|Whether the player will attempt to begin playback automatically when a page is loaded. Set to 'viewable' to have player autostart if 50% is viewable. |false|
|**nextupoffset**|Number|Configures when the Next Up card displays during playback. A positive value is an offset from the start of the video. A negative number is an offset from the end of the video|-10|
|**repeat**|Boolean|Configures if the player should loop content after a playlist completes|false|
|**abouttext**|String|Custom text to display in the right-click menu|-|
|**aboutlink**|String|Custom URL to link to when clicking the right-click menu|"https://www.jwplayer.com/learn-more"|
|**playbackRateControls**|Boolean|Whether to display a settings menu to adjust playback speed. If true, the pre-defined options available in the menu are 0.5x, 1x, 1.25x, 1.5x, and 2x. An array can be passed to customize the menu options using `playbackRates`. **Note:** This feature is not currently supported in Android with HLS streams.|false|
|**playbackRates** <sup>8.0+</sup>|Array of Numbers|Custom playback rate options to display in the settings menu.|[0.25, 0.75, 1, 1.25]|
|**defaultBandwidthEstimate** <sup>8.3+</sup>|Number|Sets an initial bandwidth estimate, in bits per second, for all viewers. All values, including negative ones, below the minimum of 1 will be rounded up. To set the highest quality as an initial estimate, reference the highest bitrate from your manifest. |-|

<br/>

### Appearance

|Setting|Type|Description|Default|
|--|--|--|--|
|**controls**|Boolean|Whether to display the video controls (control bar and display icons)|true|
|**aspectratio**|String|Maintains proportions when width is a percentage. Will not be used if the player is a static size. <br/> **Must be entered in ratio "x:y" format.**|-|
|**height**|Number|The desired height of your video player (in pixels). Should be omitted when `aspectratio` is configured|360|
|**width**|Number or String|The desired width of your video player (in pixels or percentage)|640|
|**displaytitle**|Boolean|Configures if the title of a media file should be displayed|true|
|**displaydescription**|Boolean|Configures if the description title of a media file should be displayed|true|
|**stretching**|String| Resize images and video to fit player dimensions. See graphic below for examples <br/> **"uniform"** — Fits JW Player dimensions while maintaining aspect ratio <br/> **"exactfit":** Will fit JW Player dimensions without maintaining aspect ratio <br/>**"fill"**— Will zoom and crop video to fill dimensions, maintaining aspect ratio <br/> **"none"** — Displays the actual size of the video file. (Black borders)|"uniform"|
|**nextUpDisplay**|Boolean|Configures whether the Next Up modal is displayed |-|
|**qualityLabels**|Array|By default, the JW Player will set video quality levels using information from the manifest files. Use this configuration option to apply a custom quality label to a desired bandwidth in kbps, works for HLS and DASH. For example: "qualityLabels":{"2500":"High","1000":"Medium"} |-|
|**displayPlaybackLabel** <sup>8.6.0+</sup>|Boolean|Enables call-to-action text beneath the play button on the player idle screen.<br/><br/> When set to `true`, you can potentially see up to a 5% increase in the number of times viewers click the play button to watch a video. <br/><br/>The default call-to-action text is "Play." You can also [localize](#intlplayback) this message for your viewers.|false|

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
|**hlsjsdefault**|Boolean|Makes HLSjs the default provider when supported. Disable to use the browser's default provider.|true|
|**liveTimeout** <sup>8.1.9+</sup>|Number|Configure how a stalled live manifest is handled. Accepts a positive number in seconds, but values between 1-10 are ignored. Set to 0 to configure a stream to never time out. The player will continue requesting manifests until it times out. If a live manifest does not update after being requested for longer than liveTimeout, the stream will end with an error event. If you want a stream to end immediately, include an end tag in the manifest. This configuration option only handles stalled manifests, not issues with segment loading. A chunk that results in a 404, for example, will still error out. |30|

!!!
`primary`, which set the default player rendering mode, has been deprecated.<sup>8.0+</sup> Flash is no longer supported in JW Player except to play HLS streams in IE11 on Windows 7.
<br/>
<br/>
The default `preload` configuration has been updated to "metadata", and the _metadata_ and _auto_ settings have been redefined.<sup>8.0+</sup>
!!!

### Casting

Casting enables a viewer to use Google Cast or Apple AirPlay technologies to stream video and audio content to a compatible TV or sound system. By enabling the casting feature for a player, a viewer can tap an icon in the control bar to stream your content on a cast-compatible device. If no compatible device is detected by the player, no cast icon appears.

See also: [FAQs](https://support.jwplayer.com/articles/how-to-enable-casting-and-airplay/#faqs)

To enable casting, add an empty `cast` object in your setup.

```
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/1a2Bc3d4",
  "height": "auto"
  "width": "100%",
  "cast": {}
});
```
If you are using a custom receiver, assign the identifier of the custom receiver to the `cast.customAppId` property.

```
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/1a2Bc3d4",
  "height": "auto"
  "width": "100%",
  "cast": {
    "customAppId": "XXXXXX"
  }
});
```
| Property | Type | Description |
| --- | --- | --- |
| `customAppId` | String | (Optional) When using a [custom receiver](https://developers.google.com/cast/docs/registration), the identifier of the receiver app |

<a name="playlist"></a>

* * *

## Playlists

The playlist is a powerful feature of JW Player, used to play multiple video or audio files.

A playlist can be either a **string**, referring to the URL of an RSS feed or JSON file, or an **array** of media objects.


#### Configuring Playlist as a String

```
jwplayer("myElement").setup({
  "playlist": "http://example.com/myPlaylist.json"
});
```
<br/>

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
|<a name="starttime"></a>**playlist[_index_].starttime** |Number|Time in seconds to start a media item.<br><br> **NOTE**: When used with an MP4 video file, both [seek](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronseek) and [seeked](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronseeked) events are triggered. Neither event is triggered when used with a DASH or HLS stream.|
|**playlist[_index_].minDvrWindow**|Number|**HLS-only** In seconds, the minimum amount of content in an M3U8 required to trigger DVR mode. Set to 0 to always display DVR mode.(Defaults to **120**)|
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

If using different file types, sources prioritizes which file to play only in the case when a provider (HTML5, HLS, or DASH) fails to load. If there is an error with a stream, the player will not failover to the next provider. In the example below, the player will attempt to play myVideo.m3u8 as a first choice.

In the event that a browser cannot play an m3u8, the player is intelligent enough to choose myVideo.mp4 instead. In the event that an mp4 cannot be played, the player will attempt the webm format before producing an error.

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

<br/>

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

<br/>

#### Manifest and Segment Requests with Custom Headers

You can add custom headers to media XHR requests by using the `onXhrOpen` callback. This gets executed after `XMLHTTPRequest.open()` and before `XMLHTTPRequest.send()` for HLS manifest, key and segment requests made by the player. This is not available in Safari browsers where HLS is played natively.

```
jwplayer().setup({
    playlist: [{
        sources: [{
            file: 'video.m3u8',
            onXhrOpen: function(xhr, url) {
                xhr.setRequestHeader('customHeader', 'customHeaderValue');
            }
        }]
    }]
})
```

!!!
For HLSjs playback only.
!!!

<br/>

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

<a name="playlist-360"></a>

### 360 videos

!!!important
360/VR videos require a playlist block in order to work, even for single items. They will not work at the global level using "file." Playlists can contain a mix of 360 and non-360 items.
!!!

Playlist configuration options described above can be used with spherical videos. Below are 360-specific options.

|Config|Type|Description|Default|
|---|---|---|---|
|**playlist.stereomode**|String| **(Required)** This field is required for each 360 item in a playlist. If it is undefined, the video will not render in 360 mode. Supported values are "monoscopic", "stereoscopicTopBottom", and "stereoscopicLeftRight".|-|


<a name="skin"></a>

* * *

## Skin

JW8 comes with 11 new skin configuration options out of the box. With such granular control over brand identity, it’s easier than ever to customize the player.


#### Color Customization

Color can be specified as a [hex value](http://www.w3schools.com/colors/colors_picker.asp), [RGBA color value](https://www.w3schools.com/css/css3_colors.asp), or [color name](http://www.w3schools.com/colors/colors_names.asp).<sup>8.0+</sup>

|Config|Type|Description|Default|
|---|---|---|---|
|**skin.controlbar.text**|String|The color of any plain text in the control bar, such as the time. |"#FFFFFF"|
|**skin.controlbar.icons**|String|The default, inactive color of all icons in the control bar. This option also controls the color of the play, pause, and replay icons in the inactive and complete states.|"rgba(255,255,255,0.8)"|
|**skin.controlbar.iconsActive**|String|The color of hovered or selected icons in the control bar.|"#FFFFFF"|
|**skin.controlbar.background**|String|TThe background color of the control bar and the volume slider. The default background is transparent.|"rgba(0,0,0,0)"|
|**skin.timeslider.progress**|String|The color of the bar in the time slider filled in from the beginning of the video through the current position. The buffer region of the control bar is 50% of the opacity of this color. The color of the volume slider is also controlled by this option.|"#F2F2F2"|
|**skin.timeslider.rail**|String|The color of the base of the timeslider, known as the rail.|"rgba(255,255,255,0.3)"|
|**skin.menus.text**|String|The color of inactive, default text in menus and the Next Up overlay. |"rgba(255,255,255,0.8)"|
|**skin.menus.textActive**|String|The color of hovered or selected text in menus. This option also controls the text color in the Discover overlay and the hover state text color in the Next Up overlay.|"#FFFFFF"|
|**skin.menus.background**|String|The background color of menus and the Next Up overlay.|"#333333"|
|**skin.tooltips.text**|String|The text color of tooltips.|"#000000"|
|**skin.tooltips.background**|String|The background color of tooltips. |"#FFFFFF"|

<br/>

#### Backward Compatability
JW8 continues to support the three [color customization options](../../jw7/configuration-reference/#skin) from 7.x, `skin.active`, `skin.inactive`, `skin.background`, though the colors may map slightly differently in the new major version.

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

<br/>

#### Custom Skins

For more information regarding custom skins, see: [Creating a Skin for JW Player](../css-skinning/skins_creating/).

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
|**renderCaptionsNatively**|Boolean|If true, captions render using the browser's renderer. If false, the player's renderer will be used in all browsers, except for Safari. **Note:** This configuration is not contained within the captions block.|false<sup>&nbsp; 8.0.1+</sup>|
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
When setting caption styles, color *must* be specified as a [hex value](http://www.w3schools.com/colors/colors_picker.asp).
!!!

See [Styling Captions for FCC Compliance](https://support.jwplayer.com/customer/portal/articles/1482067-styling-captions-for-fcc-compliance) for more information.

<a name="rtmp"></a>

* * *

## RTMP

!!!
The RTMP format was deprecated in JW8. For 7.x players, see the [JW7 RTMP Configuration Reference](../../jw7/configuration-reference/#rtmp) documentation.
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
|**logo.margin**|Number|The distance, in pixels, of the logo from the edges of the display|8|
|**logo.position**|String|This sets the corner in which to display the watermark. **"control-bar"** adds the logo as the leftmost icon in the right grouping of buttons in the control bar.<sup>8.0+</sup> <br/> **"top-left" <br/> "top-right" <br/>"bottom-left"<br/> "bottom-right" <br/> "control-bar"**| "top-right" |

#### Example

```
jwplayer("myElement").setup({
  "file": "http://example.com/myVideo.mp4",
  "logo": {
    "file": "/assets/jw-logo-red-46px.png",
    "link": "https://www.jwplayer.com",
    "hide": "true",
    "position": "top-left"
  }
});
```

!!!
We highly recommend using low-resolution images for logos in the player, as Internet Explorer may not resize an image, especially if it is high-resolution.
!!!

<a name="sharing"></a>

* * *

## Sharing

This options block controls a settings submenu with social sharing options: copy embed code, copy video link and share video to social networks.

Setting an empty **"sharing":{}** options block will enable the social sharing menu and icon in the control bar. Without the nested config options, it will show the page URL link with default sharing sites, but no embed code.

|Config|Type|Description|Default|
|---|---|---|---|
|**sharing.link** <sup>< 8.6.0</sup>|String|URL to display in the video link field<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intllink) to set this property.|URL of the current page|
|**sharing.code**|String|Embed code to display in the embed code field. If no code is set, the field is not shown|-|
|**sharing.heading** <sup>< 8.6.0</sup>|String|Short, instructive text to display at the top of the sharing screen<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intlheading) to set this property.|"Share Video"|
|**sharing.sites**|Array|Allows for the customization of social icons|["facebook","twitter","email"]|

<br/>

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

Google's separate [JavaScript library](https://developers.google.com/analytics/devguides/collection/gtagjs/) and config needs to be included in your page's head in order to send events with JW Player. Setting an empty **"ga":{}** options block will enable basic Google Analytics integration. No additional nested config options are required.

See [Connecting Google Analytics](https://support.jwplayer.com/customer/portal/articles/1417179-integration-with-google-analytics) for more information.

<a name="related"></a>

* * *

## Related

This options block controls an overlay with related videos.

|Config|Type|Description|Default|
|---|---|---|---|
|`file`|String|**(REQUIRED)** Location of an RSS or JSON file containing a feed of related videos<br/><br/>You can find the `file` URL in the dashboard:<br/>1. Click **MANAGE > Recommendations**. <br/>2. Click the playlist name. <br/>3. On the **DEVELOPER RESOURCES** tab, copy either the **RSS URL** or **JSON URL**.|-|
|`autoplaymessage` <sup>< 8.6.0</sup>|String|A custom message that appears during autoplay. <br/><br/> `xx` will be replaced by the countdown timer<br/> `__title__` will be replaced by the next title in the related feed.<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intlautoplaymessage) to set this property.| "&#95;_title__ will play in xx seconds"|
|`autoplaytimer`|Number|The number of seconds to wait before playing the next related video in your content list. Set to `0` to have your next related content to play immediately|`10`|
|`displayMode` <sup>8.1.9+</sup>|String| Configure the recommendations user interface. Does not apply to manual playlists. <br/><br/>`overlay`: Adds a "more videos" icon to the control bar. When clicked, an overlay takes over the player and pauses playback. <br/><br/>`shelf`: Adds a horizontal bar of thumbnails above the control bar that allows viewers to browse recommended videos during the playback experience. The shelf can be collapsed into a "More Videos" button, which appears above the control bar. Due to size constraints, small players fall back to "overlay" mode. <br/><br/><a name="shelfwidget"></a>`shelfWidget`<sup>8.5.0+</sup>: Adds a persistent horizontal bar of thumbnails outside and beneath the player that allows viewers to browse recommended videos during the playback experience. Use [`selector`](#relatedselector) to configure shelf location.|`shelf`|
|`onclick`|String|The behavior when a related video is selected.<br/><br/> `play`: Plays the next video within the current player. <br/><br/> `link`: Redirects the page to the url specified in the related item's link field.|`play`|
|`oncomplete`|String|The behavior of our related videos overlay when a single video or playlist is completed.<br/><br/> `hide`: Replay button and related icon will appear <br/><br/> `show`: Display the related overlay <br/><br/> `autoplay`: Automatically play the next video in your related feed after 10 seconds. Automatically sets onclick behavior to **"play"**|`show`|
|<a name="relatedselector"></a>`selector`  <sup>8.6.0+</sup>|String|CSS selector that points to an HTML element that is used as the container when `displayMode` is set to [`shelfWidget`](#shelfwidget). <br/><br/> This property can be configured in the following ways:<br/><br/>**Undefined HTML element and selector**: An element with `id="{playerID}-shelf-widget"` is created. By default, the shelf widget displays in `<div id="{playerID}-shelf-widget">` directly below the player. The shelf widget size is responsive to the player.<br/><br/>You can also assign this ID to a different HTML element on your page. This allows you to set the widget location without defining a new selector. If you assign this ID to a different HTML element, the shelf widget size is responsive to the HTML element.<br/><br/>**Defined HTML element and selector**: If the HTML element has an ID (`myDefinedID`) and `"selector": "#myDefinedID"`, shelf widget is placed inside the of HTML element with `id="myDefinedId"`. The shelf widget size is responsive to the HTML element.|-|

<!-- removed until this functionality comes back |**related.heading**|String|Single line heading displayed above the grid with related videos. Generally contains a short call-to-action|"Related Videos"| -->

See [Display Related Videos](https://support.jwplayer.com/articles/how-to-enable-the-discovery-overlay) for more information.

<a name="advertising"></a>

* * *

## Advertising

!!!important
Video ad insertion requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/get-started/) to upgrade your account.
!!!

This object configures the video advertising capabilities of JW Player and overrides advertising settings configured in the dashboard. If no **schedule** is specified, the ad will play as a preroll by default.

|Property|Type|Description|Client|Default|
|---|---|---|---|---|
|`client`|String|**(Required)** Chooses the ad client that will be used to display advertisements<br/><br/>Possible values include:<br/>`vast`: Use the JW Player VAST client <br/><br/>`googima`: Use the Google IMA SDK - Required for certain ad tags <br/><br/> `freewheel`: Use the Freewheel client|All|-|
|`adscheduleid`|String|**(Recommended)** Unique identifier for an ad (break) schedule<br/><br/> This ID also enables comprehensive analytics to be generated.<br/><br/> This ID is located on the ADVANCED tab of the Ad Schedule Detail page. If you do not have ad schedules created via the dashboard, a randomly-generated, eight character, alpha-numeric value can be set.|All|-|
|`admessage` <sup>< 8.6.0</sup>|String|Text that displays during ad playback<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intladmessage) to set this property.|All|"The ad will end in xx seconds"|
|`autoplayadsmuted`|Boolean|For inline players that start muted when viewed on mobile devices, allows ads to play muted|All|-|
|`bids` |Object|Enable video player bidding with the given settings and bidders<br/><br/>See: [advertising.bids](#advertising-bids)|IMA|-|
|`companiondiv`|Object|Gives information to the player related to which div(s) to populate with companion ads <br/><br/> See: [advertising.companiondiv](#advertising-companiondiv)|IMA,<br/> VAST|-|
`conditionaladoptout`|Boolean|(VPAID-only) Used to tell the player to not play ads with the **conditionalAd** attribute inside of the VAST response|VAST|false|
|`cuetext` <sup>< 8.6.0|String|Specify the text that appears when a user mouses over a scheduled advertisement<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intlcuetext) to set this property.|All|"Advertisement"|
`creativeTimeout`|Number|In milliseconds, the maximum amount of time between the VAST XML being returned and the adStart event before timing out|VAST|15000|
|`forceNonLinearFullSlot`|Boolean|For forcing nonlinear ads to be fullsot ads rather than overlays|IMA|-|
`freewheel.adManagerURL`|String|Freewheel-supplied Ad Manager URL|FreeWheel|-|
`loadVideoTimeout`|Number|In milliseconds, the maximum amount of time between the VAST XML being returned and the adstart event before timing out|FreeWheel,<br/> IMA|15000|
`locale`|String|Valid two-letter language code for localization of skip-button language|IMA|-|
`maxRedirects`|Number|The maximum number of redirects the player should follow before timing out|IMA|4|
`podmessage` <sup>< 8.6.0</sup>|String|Text that displays during playback of an ad pod. <br/><br/>Use `__AD_POD_CURRENT__` to denote the currently playing item in the pod and `__AD_POD_LENGTH__` for the total number of ads in the pod.<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intlpodmessage) to set this property.|VAST|"Ad xx of yy."|
`preloadAds`|Boolean|Enable pre-loading of prerolls, midrolls and postrolls in click-to-play and `autostart: 'viewable'` <br><br> **NOTE:** The preroll of subsequent playlist items is also pre-loaded, but only for VAST.|IMA,<br/> VAST|"false"|
`requestTimeout`|Number|For VAST, the maximum amount of time, in milliseconds, between the ad request and a returned VAST file before timing out. <br/><br/> For IMA and Freewheel, the maximum amount of time, in milliseconds, between the ad request and the ad impression being fired.|All|5000 (VAST), 10000 (IMA), 15000 (FW)|
|`rules`|Object|Enable ad rules with the given settings and bidders.<br/><br/>See: [advertising.rules](#advertising-rules)|IMA,<br/> VAST|-|
|`schedule`|Array or String|Load an ad schedule from an external JSON block (array) or VAMP XML (string) <br/><br/>`advertising.tag` is ignored if this option is set<br/><br/>See: [advertising.schedule](#advertising-schedule)|All|-|
|`skipmessage` <sup>< 8.6.0</sup>|String|This is used to provide a customized countdown message<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intlskipmessage) to set this property.|FreeWheel, VAST|"Skip ad in xx"|
|`skipoffset`|Number|If not present in the VAST file, adds a skip offset to static VAST ads|FreeWheel,<br/> VAST|-|
|`skiptext` <sup>< 8.6.0</sup>|String|This sets the text of the Skip button after the countdown is over<br/><br/><font color="red">**WARNING**</font>: Starting with JW Player 8.6.0, use the [intl object](#intlskiptext) to set this property.|FreeWheel,<br/> VAST|"Skip"|
|`tag`|String or Array|The URL of the VAST tag to display or custom string of the Freewheel tag to display|All|-|
`vastLoadTimeout`|Number|In milliseconds, the maximum amount of time between the ad request and a returned VAST file before timing out|IMA|10000|
|`vpaidcontrols`|Boolean|For forcing controls to show for VPAID ads <br/><br/>If the VPAID creative has built-in controls, showing the controls may be redundant|IMA,<br/> VAST|-|
|`vpaidmode`|String|[(IMA VPAID-only)](https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.ImaSdkSettings.VpaidMode)<br/><br/>`disabled`: VPAID ads will not play and an error will be returned if VPAID is requested <br/><br/>`enabled`: VPAID is enabled using a cross domain iFrame. The VPAID ad cannot access the site. VPAID ads that depend on friendly iFrame access may not play<br/><br/>`insecure`: The VPAID ad will load in a friendly iFrame. This allows the ad access to the site via javascript <br/> Not supported in Freewheel|IMA|"insecure"|

<a name="advertising-bids"></a>
### advertising.bids

Use this property to enable and configure [Video Player Bidding](../../advertising/video_player_bidding_advanced_guide) with supported bidders.

```
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  "advertising": {
    ...
    "bids": {
      "bidOnBreaks": 3,
      "settings": {...},
      "bidders": [...]
    }
  ...
  }
});
```

|Property|Type|Description|
|---|---|---|
|`bidders` | Array| **(Required)** Defines each bidding partner<br/><br/>See: [advertising.bids.bidders](#advertising-bids-bidders)|
|`settings` | Object | **(Required)** Defines the mediation layer, floor price, and timeout<br/><br/>See: [advertising.bids.settings](#advertising-bids-settings)|
|`bidOnBreaks` | Number | Number of ad breaks for which bid requests are sent.<br/><br/> **NOTE**: For content with more than three ad breaks, change the default setting to `3` and adjust this value depending on performance. <br/><br/>By default, a bid request is made for each ad break.|

<a name="advertising-bids-bidders"></a>

### advertising.bids.bidders[]

```
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  "advertising": {
    "bids": {
      ...
      "bidders": [
        {
          "name": "SpotX",
          "id": "85394"
        }
      ]
    }
  ...
  }
});
```

|Property|Type|Description|
|---|---|---|
|`id`| String | **(Required)** Identifier issued by the bidding partner that represents a segment of a publisher's inventory|
|`name`| String | **(Required)** Ad partner from which the bid is received<br/><br/>Possible values include:<br/><br/>`Facebook`<br/><br/>`SpotX`|

<a name="advertising-bids-settings"></a>

### advertising.bids.settings
```
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  "advertising": {
    ...
    "bids": {
      ...
      "settings": {
        "mediationLayerAdServer": "jwp",
        "floorPriceCents": 10,
        "floorPriceCurrency": "usd",
        "bidTimeout": 1000  
      }
    }
  ...
  }
});
```

|Property|Type|Description|
|---|---|---|
|`mediationLayerAdServer` | String | **(Required)** Mediation layer that decides which ad runs<br/><br/> `jwp`: (VAST/IMA) An auction is conducted by the player. You must specify a floor price. If a winner is selected, the winner's ad is called. If no winner is selected, the fallback tag is called.<br/><br/> `jwpspotx`: (VAST) No auction is conducted by the player. The player asks SpotX for a bid and calls the returned ad response regardless of price. This option is equivalent to using JW Player mediation with a $.01 floor price. You must <a href="https://developer.spotxchange.com/content/local/docs/HeaderBidding/lisa.md" target="_blank">set up SpotX line items</a>.<br/><br/>`dfp`: (IMA) No auction is conducted by the player. All bids are sent to Google Ad Manager (GAM) and rendered as line items that compete against other line items. GAM serves the winning line item.<br/><br/>`jwpdfp`: (IMA) An initial auction is conducted by the player. You must specify a floor price. If a winner is selected, that winner's ad will is called. If no winner is selected, the fallback tag is called serve. If no winner is selected for any reason, all valid bids are sent to DFP where the bid values are rendered as line items to compete against other line items. The winning line item is served by DFP.<br/><br/>Default value: `jwp`|
|`bidTimeout` | String | Timeout for bid response after the user clicks to play, in milliseconds<br/><br/>Default value: `2000`|
|`floorPriceCents` | Number | Price in cents (CPM) that a bid has to beat in order to win<br/><br/>This property does not need to be set when `mediationLayerAdServer` is set to `dfp` or `jwpspotx`.|
|`floorPriceCurrency`| String | Currency of the `floorPriceCents` <br/><br/>Currently only usd is supported with `jwp` as the mediation layer.|

<a name="advertising-companiondiv"></a>

### advertising.companiondiv

This is an object with 3 properties: `id`, `width` and `height`. Set these to have JW Player load a companion ad from your VAST/IMA tag into a div on your page. See [Companion Ads](https://support.jwplayer.com/articles/how-to-monetize-content-with-video-ads#companion-ads) for more info.

|Property|Type|Description|
|---|---|---|
|`height`|Number|The targeted desired height of a companion ad that exists in a VAST ad|
|`width`|Number|The targeted desired width of a companion ad that exists in a VAST ad|
|`id`|String|The ID of the div to replace with a companion ad|


<!-- NOTE: Need to figure out where to link the following.

For an overview of JW Player's advertising capabilities, see its dedicated [Video Ads section](https://support.jwplayer.com/customer/portal/topics/605644-video-ads/articles). -->

<a name="advertising-rules"></a>
### advertising.rules

Use this property to control how frequently ads play back. See our [Ad Rules Reference support article](https://support.jwplayer.com/articles/ad-rules-reference) for more information.

```
jwplayer("myElement").setup({
  "playlist": [...],
  "advertising": {
    ...
    "rules": {
      "startOn": 2,
      "frequency": 1,
      "timeBetweenAds": 300,
      "startOnSeek": "pre"
    }
  }
});
```

|Property|Type|Ad client|Description|Default|
|---|---|---|---|---|
|`startOn`|Number|IMA, <br> VAST|First playlist item allowing ad playback.  <br><br>In the dashboard, this is one of the **Ad Frequency Rules**.|1|
|`frequency`|Number|IMA, <br> VAST|Regularity of ads within a playlist. For example, if `frequency: 3`, ads play before every third playlist item. <br><br>Use 0 to only play ads on the first playlist item.<br><br>In the dashboard, this is one of the **Ad Frequency Rules**.|1|
|`startOnSeek` <sup>8.5.0+</sup>|String|VAST|Setting that defines if a returning visitor is served a pre-roll ad when resuming previously-watched video content. <br/><br/> `pre`: Player shows returning visitor a pre-roll ad before resuming video playback.<br/><br>`none`: Player shows returning visitor no ads and resumes video playback. <br/><br/>In the dashboard, this is one of the **Long-form Engagement Rules**.<br><br> **NOTE**: Each of the following must be tracked: the unique viewer, the unique piece of content the viewer was watching, and the time when the viewer left the page during playback of the video content. During the player setup, this information must be passed into the player. Use [starttime](#starttime) to pass the time location to resume playback.|-|
|`timeBetweenAds`|Number|VAST|Minimum time in seconds that must elapse after displaying an ad in a schedule before playing the next scheduled ad.<br><br>In the dashboard, this is one of the **Long-form Engagement Rules**.|0|

<a name="advertising-schedule"></a>

### advertising.schedule

Use this property to load an entire advertising schedule to JW Player, containing multiple ad breaks. The property value can be a URL to a VMAP schedule or an inline JSON block with ads. This schedule will then be applied to each playlist item. For scheduling ads for individual playlist items, see [scheduling ads for playlist items](#playlist-adschedule).

#### Ad Schedules with VMAP Files

If you are planning on using a VMAP file, add the link to a VMAP .xml file as the value for `schedule`:

```
jwplayer("myElement").setup({
  "playlist": [
    {
      "file": "http://example.com/myVideo.mp4"
    }
  ],
  "advertising": {
    "client": "vast",
    "adscheduleid": "t4Xk5tsF",
    "schedule": "myvmap.xml"
  }
});
```

The VMAP schedule will then be applied to each playlist item. See our article about VMAP schedules for more information.


#### Embedded Ad Schedules with JSON

In order to use a JSON-formatted schedule, you must define at least **one** ad break configured inside of the `schedule` property. Each ad break should include an `offset` and a `tag` or `vastxml`.

```
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/a12bc3D4",
  "advertising": {
    "client": "vast",
    "adscheduleid": "p4Xk5lsZ",
    "schedule": [
      {
        "tag": "myPreroll.xml",
        "offset": "pre",
        "custParams": {
          "testkey1": "testval1",
          "testkey2": "testval2"
        },
      },
      {
        "vastxml": "<VAST version='2.0'> ... </VAST>",
        "offset": "50%"
      }
    ]
  }
});
```

|Property|Type|Description|Default|
|---|---|---|---|
|`custParams`|Object|Allows for passing custom parameters to an ad break, which then pass through to the URL requested from the ad server|-|
|`offset`|String or Number|When to play the configured ad tag<br/><br/>`pre`: Ad plays as a preroll <br/><br/>`post`: Ad plays as a postroll<br/><br/>`xx%`: Ad plays after xx% of the content<br/><br/>`number`: Ad plays after the specified number of seconds|`pre`|
|`tag`|String or Array|URL location of the ad tag that is requested during the configured ad break<br/><br/>Do not use this property and `vastxml` within the same ad break.|-|
|`type`|String|Property indicating the format of the ad to be served within the ad break<br/><br/>`linear`: Video ad that interrupts video content playback <br/><br/>`nonlinear`: Static display ad that overlays a portion of the player and does not interrupt playback. No advertisting cuepoint is shown for this ad break.<br/><br/>If a mix of linear and non-linear ads will serve within an ad break, do not set this property. The player will interrupt video playback for linear ads and will not interrupt video playback for non-linear ads.|`linear`|
|`vastxml`|String|VAST XML ad tag that is requested during the configured ad break<br/><br/>Do not use this property and `tag` within the same ad break.|-|

<br/>

<a name="drm"></a>

* * *

## DRM

!!!important
Video content protection requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/get-started/) to upgrade your account.
!!!

Configuration options related to DRM for MPEG DASH (Playready, Widevine, Clearkey) and HLS streams (Fairplay).

JW Player includes the ability to add DRM to a specific playlist source. Using this method will allow your browser to choose the correct DRM method when multiple DRM types are configured. We **highly** suggest updating any configurations to use this new method.

!!!
HTTPS is required for all DRM-protected content.
!!!

For more information regarding DRM, and for examples, please view our [support article](https://support.jwplayer.com/customer/portal/articles/2561182-drm-digital-rights-management).

###drm.playready

Playready DRM is specific to Internet Explorer 11 and Edge on Windows 8.1 or higher operating systems.

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.playready.url**|String|**(Required)** The URL of the PlayReady license server|-|
|**drm.playready.headers**|Array| Specifies the custom http headers to send to your playready license server. See [headers](#headers) for more information|-|
|**drm.playready.licenseRequestFilter**|Function| Expects a function which takes a single request argument. License request filters intercept license requests before 'licenseRequestHeaders' are added.|-|
|**drm.playready.licenseResponseFilter**|Function| Expects a function which takes a single response argument. License response filters intercept license responses before updating the session with the license key.|-|

<br/>

### drm.widevine

Widevine DRM is specific to Google Chrome on non-iOS devices. Widevine will also function on Firefox browsers for desktop systems.

|Option|Type|Description|Default|
|---|---|---|---|
|**drm.widevine.url**|String|**(Required)** The URL of the WideVine license server|-|
|**drm.widevine.serverCertificateUrl**|String|The URL of the WideVine service certificate|-|
|**drm.widevine.headers**|Array| Specifies the custom http headers to send to your widevine license server requests. See [headers](#headers) for more information |-|
|**drm.widevine.licenseRequestFilter**|Function| Expects a function which takes a single request argument. License request filters intercept license requests before 'licenseRequestHeaders' are added.|-|
|**drm.widevine.licenseResponseFilter**|Function| Expects a function which takes a single response argument. License response filters intercept license responses before updating the session with the license key.|-|

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
|**drm.fairplay.licenseRequestFilter**|Function| Expects a function which takes a single request argument. License request filters intercept license requests before 'licenseRequestHeaders' are added.|-|
|**drm.fairplay.licenseResponseFilter**|Function| Expects a function which takes a single response argument. License response filters intercept license responses before updating the session with the license key.|-|

<br/>

### drm.clearkey

A basic form of DRM that lists a decryption key inside of your player configuration. This is the least secure form of DRM, though it is the simplest to implement across browsers. There are no additional server resources required to decrypt content with this method. Clearkey is supported in both Chrome and Firefox browsers.

|Option|Type|Description|
|---|---|---|
|**drm.clearkey.key**|String|**(Required)** The key required to decrypt DRM content|
|**drm.clearkey.keyId**|String|**(Required)** The key ID specified in the mpd's **default_KID** value  |

<a name="internationalization"></a>
<a name="localization"></a>

* * *

## Internationalization <sup>8.6.0+</sup>

The `intl` object allows you to add new language translations, customize translations for player text and `aria-label` values, and access the benefits of the [automated player localization](https://support.jwplayer.com/articles/translate-video-player-text) feature.

!!!important
Any existing language customizations or translations made outside of the `intl` object will override both automated player localization and `intl` object customizations. If you have configured language customizations or translations outside of the `intl` object, use the [table](#intltranstable) below to copy those values into the corresponding `intl.{lang}.{property}`.
!!!

For each language, use a two-letter or locale-specific language code to define language-specific objects. Use the code example and tables below to configure the `intl` object.

```
jwplayer("myElement").setup({
  . . .
  "intl": {
    // Quebec french sub-block
    "fr-ca": {
      "play": "reproduire"
    },
    // french sub-block
    "fr": {
      "replay": "Repeter",
      "play": "jouer"
    },  
    // spanish sub-block
    "es": {
      "replay": "Repetir"
    }
    // frisian sub-block
    "fy": {
      "advertising": {
        "loadingAd": "Advertinsje lade"
      }
    }
  }
});
```

|Option|Type|Description|Default|
|---|---|---|---|
|`advertising`|Object|See: [advertising object](#intladvertising).| - |
|`airplay`|String|Tooltip text and `aria-label` for Apple AirPlay casting icon in the control bar|Airplay|
|`audioTracks`|String|Tooltip text for and `aria-label` HTML attribute of the audio tracks menu icon|Audio Tracks|
|`auto`|String|Label text and `aria-label` HTML attribute of the default quality selection option that allows the player to automatically select the best quality level for the viewer|Auto|
|`buffer`|String|`aria-label` for when player is in buffering state |Loading|
|`cast`|String|Tooltip text for and `aria-label` HTML attribute of the Google Chromecast casting icon in the control bar|Chromecast|
|`cc`|String|Tooltip text for and `aria-label` HTML attribute of the closed captions menu icon|Closed Captions|
|`close`|String|Tooltip text for and `aria-label` HTML attribute of the icon to close a menu or overlay.|Close|
|`errors`|Object|See: [errors object](#intlerrors).|-|
|`exitFullscreen` <sup>8.7.0 +</sup>|String|When in fullscreen mode, tooltip text for and `aria-label` HTML attribute of the fullscreen icon in the control bar|Exit Fullscreen|
|`fullscreen`|String|Tooltip text for and `aria-label` HTML attribute of the fullscreen icon in the control bar|Fullscreen|
|`hd`|String|Tooltip text for and `aria-label` HTML attribute of the video **Quality** options menu icon|Quality|
|`liveBroadcast`|String|In the control bar, label text and `aria-label` HTML attribute for live streams|Live|
|`logo`|String|`aria-label` HTML attribute of the logo in the player|Logo|
|`mute` <sup>8.7.0 +</sup>|String|When the player is not muted, tooltip text for and `aria-label` HTML attribute of the volume icon in the control bar|Mute|
|`next`|String|`aria-label` HTML attribute of the right arrow in overlays with multiple pages of videos|Next|
|`nextUp`|String|Title text and `aria-label` HTML attribute of the overlay that displays the next item to automatically play in a playlist|Next Up|
|`notLive`|String|In the control bar, label text and `aria-label` HTML attribute that indicates the current video position in a live stream lags behind the real-time stream|Not Live|
|`off`|String|Menu option text for turning an option off|Off|
|`pause`|String|`aria-label` HTML attribute of the pause icon in the control bar|Pause|
|`play`|String|`aria-label` HTML attribute of the play icon in the control bar|Play|
|<a name="intlplayback"></a>`playback`|String|Call-to-action text beneath the play button on the player idle screen.|Play|
|`playbackRates`|String|Tooltip text for and `aria-label` HTML attribute of the playback rate controls menu|Playback Rates|
|`player`|String|`aria-label` HTML attribute of the video player application|Video Player|
|`playlist`|String|Tooltip text for, overlay heading for, and `aria-label` HTML attribute of a playlist overlay|Playlist|
|`poweredBy`|String|Text displayed before the JW Player name and logo on a button in the Right-click menu.|Powered by|
|`prev`|String|`aria-label` HTML attribute of the left arrow in overlays with multiple pages of videos|Previous|
|`related`|Object|See: [related object](#intlrelated).|-|
|`replay`|String|Tooltip text for and `aria-label` HTML attribute of the replay button in the control bar, displayed at the completion of video playback.|Replay|
|`rewind`|String|Tooltip text for and `aria-label` HTML attribute of the rewind button in the control bar|Rewind 10 Seconds|
|`settings`|String|Tooltip text for and `aria-label` HTML attribute of the **Settings** menu icon|Settings|
|`sharing`|Object|See: [sharing object](#intlsharing).|-|
|`slider`|String|`aria-label` HTML attribute of the video scrub bar|Seek Slider|
|`stop`|String|`aria-label` HTML attribute of the stop button in the control bar for live streams.|Stop|
|`unmute` <sup>8.7.0 +</sup>|String|When the player is muted, tooltip text for and aria-label HTML attribute of the volume icon in the control bar|Unmute|
|`videoInfo`|String|Label text and `aria-label` HTML attribute of the Right-click menu button.|About This Video|
|`volume`|String|Tooltip text for and `aria-label` HTML attribute of the volume in the control bar.|Volume|
|`volumeSlider`|String|`aria-label` HTML attribute of the volume slider in the control bar.|Volume Slider|

<a name="intladvertising"></a>

### advertising object

This object localizes the player text and ARIA labels of the [advertising object](#advertising).

|Option|Type|Description|Default|
|---|---|---|---|
|<a name="intladmessage"></a>`admessage`|String|Countdown message text that displays the remaining duration of an ad|This ad will end in xx|
|<a name="intlcuetext"></a>`cuetext`|String|Tooltip text for and `aria-label` HTML attribute that indicates the content is an advertisement. Appears when a user mouses over a scheduled advertisement cue marker in the time slider.|Advertisement|
|<a name="intlloadingad"></a>`loadingAd`|String|Text displayed when an ad is loading|Loading ad|
|<a name="intlpodmessage"></a>`podmessage`|String|Text that displays during playback of an ad pod. <br/><br/>Use `__AD_POD_CURRENT__` to denote the currently playing item in the pod and `__AD_POD_LENGTH__` for the total number of ads in the pod.|Ad xx of yy|
|<a name="intlskipmessage"></a>`skipmessage`|String|Skip countdown message text that displays the remaining duration before an ad can be skipped|Skip ad in xx|
|<a name="intlskiptext"></a>`skiptext`|String|Button text for and `aria-label` HTML attribute that indicates when an ad can be skipped|Skip|

<a name="intlerrors"></a>

### errors object

This object localizes the error messages displayed in the player.

Option|Type|Description|Default|
|---|---|---|---|
|`badConnection`|String|Error message text displayed when a connection issue prevents playback|This video cannot be played because of a problem with your internet connection.|
|`cantLoadPlayer`|String|Error message text displayed when a player fails to instantiate due to a non-network reason. For example: incorrect JSON or license keys|Sorry, the video player failed to load.|
|`cantPlayInBrowser`|String|Error message text displayed when a video fails to start playback due to a browser support reason. For example:  such as Flash or DASH error or browser support|The video cannot be played in this browser.|
|`cantPlayVideo`|String|Error message text displayed when a media item fails to load|This video file cannot be played.|
|`errorCode`|String|Label text for a numeric error code. (For example: Error code: 50244402)|Error code|
|`liveStreamDown`|String|Error message text displayed when a live stream has technical issues or has ended|The live stream is either down or has ended.|
|`protectedContent`|String|Error message text displayed when DRM or protected content fails|There was a problem providing access to protected content.|
|`technicalError`|String|Fallback error message text displayed when no other error message is applicable|This video cannot be played because of a technical error.|

<a name="intlrelated"></a>

### related object

This object localizes the player text and ARIA labels of the [related object](#related).

|Option|Type|Description|Default|
|---|---|---|---|
|<a name="intlautoplaymessage"></a>`autoplaymessage`|String|Countdown message text that displays the remaining duration before the next video begins to play|Next up in xx|
|`heading`|String|Button text for, overlay heading for, and `aria-label` HTML attribute of recommended video interfaces|More Videos|

<a name="intlsharing"></a>

### sharing object

This object localizes the player text and ARIA labels of the [sharing object](#sharing).

|Option|Type|Description|Default|
|---|---|---|---|
|`copied`|String|In the **Sharing** menu, tooltip text and `aria-label` HTML attribute for when a link is copied to the clipboard|Copied|
|`email`|String|In the **Sharing** menu, label text for and `aria-label` HTML attribute of the option to email a video link in the sharing menu|Email|
|`embed`|String|In the **Sharing** menu, label text for and `aria-label` HTML attribute of the option to copy embed code to clipboard|Embed|
|<a name="intlheading"></a>`heading`|String|Tooltip text for and `aria-label` HTML attribute of the Sharing button in the control bar|Share|
|<a name="intllink"></a>`link`|String|In the **Sharing** menu, label text for and `aria-label` HTML attribute of the option to copy a link to clipboard|Link|

<a name="intltranstable"></a>

### Transition table

Use the table below to copy old customization or translation values to the corresponding `intl.{lang}.{property}`.

|Old property | New property|
|---|---|
|`advertising.admessage`|`intl.{lang}.advertising.admessage`|
|`advertising.cuetext`|`intl.{lang}.advertising.cuetext`|
|`advertising.podmessage`|`intl.{lang}.advertising.podmessage`|
|`advertising.skipmessage`|`intl.{lang}.advertising.skipmessage`|
|`advertising.skiptext`|`intl.{lang}.advertising.skiptext`|
|`localization.airplay`|`intl.{lang}.airplay`|
|`localization.audioTracks`|`intl.{lang}.audioTracks`|
|`localization.buffer`|`intl.{lang}.buffer`|
|`localization.cast`|`intl.{lang}.cast`|
|`localization.cc`|`intl.{lang}.cc`|
|`localization.close`|`intl.{lang}.close`|
|`localization.copied` <sup>8.1.8+</sup>|`intl.{lang}.sharing.copied`|
|`localization.errors.badConnection`<sup>8.4.0+</sup>|`intl.{lang}.errors.badConnection`|
|`localization.errors.cantLoadPlayer` <sup>8.4.0+</sup>|`intl.{lang}.errors.cantLoadPlayer`|
|`localization.errors.cantPlayInBrowser` <sup>8.4.0+</sup>|`intl.{lang}.errors.cantPlayInBrowser`|
|`localization.errors.cantPlayVideo` <sup>8.4.0+</sup>|`intl.{lang}.errors.cantPlayVideo`|
|`localization.errors.errorCode` <sup>8.4.0+</sup>|`intl.{lang}.errors.errorCode`|
|`localization.errors.liveStreamDown` <sup>8.4.0+</sup>|`intl.{lang}.errors.liveStreamDown`|
|`localization.errors.protectedContent` <sup>8.4.0+</sup>|`intl.{lang}.errors.protectedContent`|
|`localization.errors.technicalError` <sup>8.4.0+</sup>|`intl.{lang}.errors.technicalError`|
|`localization.fullscreen`|`intl.{lang}.fullscreen`|
|`localization.hd`|`intl.{lang}.hd`|
|`localization.liveBroadcast`|`intl.{lang}.liveBroadcast`|
|`localization.loadingAd`|`intl.{lang}.advertising.loadingAd`|
|`localization.more`|`intl.{lang}.next`|
|`localization.next`|`intl.{lang}.next`|
|`localization.nextUp`|`intl.{lang}.nextUp`|
|`localization.nextUpClose`|`intl.{lang}.close`|
|`localization.pause`|`intl.{lang}.pause`|
|`localization.play`|`intl.{lang}.play`|
|`localization.playback`|`intl.{lang}.playback`|
|`localization.playbackRates`|`intl.{lang}.playbackRates`|
|`localization.player`|`intl.{lang}.player`|
|`localization.playlist`|`intl.{lang}.playlist`|
|`localization.prev`|`intl.{lang}.prev`|
|`localization.related`|`intl.{lang}.related.heading`|
|`localization.replay`|`intl.{lang}.replay`|
|`localization.rewind`|`intl.{lang}.rewind`|
|`localization.stop`|`intl.{lang}.stop`|
|`localization.videoInfo`|`intl.{lang}.videoInfo`|
|`localization.volume`|`intl.{lang}.volume`|
|`related.autoplaymessage`|`intl.{lang}.related.autoplaymessage`|
|`sharing.heading`|`intl.{lang}.sharing.heading`|
|`sharing.link`|`intl.{lang}.sharing.link`|

<br/><br/>
<div id="wufoo-mff60sc1xnn4cu">
Use this <a href="https://jwplayerdocs.wufoo.com/forms/mff60sc1xnn4cu">form</a> to provide your feedback.
</div>
<script type="text/javascript">var mff60sc1xnn4cu;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'jwplayerdocs',
'formHash':'mff60sc1xnn4cu',
'autoResize':true,
'height':'288',
'async':true,
'host':'wufoo.com',
'header':'show',
'ssl':true,
'defaultValues': 'field118=' + location.pathname};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { mff60sc1xnn4cu = new WufooForm();mff60sc1xnn4cu.initialize(options);mff60sc1xnn4cu.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');</script>

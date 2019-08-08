!!!
This page has been updated for JW Player 8. Click here to go to the [JW7 JavaScript API Reference](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/jw7/).
!!!


# Introduction
<sup>Last Updated: August 9, 2019</sup>

This article provides a reference to all available JW Player JavaScript API calls. For an introduction to JW8's API, see our [Introduction to the JavaScript API](//developer.jwplayer.com/jw-player/docs/developer-guide/api/javascript_api_introduction/). For more in-depth instructions on implementation, see our [JW Player Developer Guide](//developer.jwplayer.com/jw-player/docs/developer-guide/). To see example code for each API call, visit our [JW Player Demos](//developer.jwplayer.com/jw-player/demos/) and search by call.

The Events in this reference use the `on` listener; however, it is also possible to register or remove each event with `on`, `once`, or `off`, or register custom events with `trigger`.

The following timeline illustrates the core subset of events, in chronological order, that are fired by a player configured to play on-demand videos with captions, audio tracks, casting, and advertising. The event order and the events that fire may differ for players configured differently.

![Core subset of events, in a timeline, fired for a player that has been configured to play on-demand videos, with captions, audio tracks, casting, and advertising](images/player-event-lifecycle-basic.svg)
<sup>_Core subset of events fired for a player that has been configured to play on-demand videos, with captions, audio tracks, casting, and advertising._</sup>

Happy coding!

* * *

## Setup

These API calls are used to create players and provide setup information.

### jwplayer( _div_ ).setup( _options_ )
Creates a new JW Player on your web page.

|Attribute(s)|Description|Type| Required|
|--|--------|---|--|
|div| The target div that JW Player will replace | String |Yes|
|options| Configuration options that will tell your player how to render itself | JSON |Yes|

 The only required option when setting up a JW Player embed is the _file_ property. See the [Configuration Options Reference](//developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/) for a full list of all JW Player configuration options.

**Sample**

```
<div id="myDiv">This text will be replaced with a player.</div>
<script>
jwplayer("myDiv").setup({
	"file": "http://example.com/myVideo.mp4",
	"image": "http://example.com/myImage.png",
	"height": 360,
	"width": 640
});
</script>
```

Clicking an HTML element can also instantiate and immediately begin playback. By calling setup() followed by play(), the user interaction on the element gets propagated through to the instantiated player. This eliminates the need to interact with the player to play media post setup.


### jwplayer().remove()

The reverse of the `setup()` call, this call will remove a JW Player from the page. It ensures the player stops playback, the DOM is re-set to its original state and all event listeners and timers are cleaned up. Any event listeners will need to be re-instantiated if another player is set up.

### jwplayer().setConfig()

Set one or more of the following video attributes after the player has already setup.

| Setting | Description | Type | Default |
| --- | --- | --- | --- |
| `aspectratio` | Maintains proportions when width is a percentage<br/><br/>Will not be used if the player is a static size. **Must be entered in ratio `x:y` format**. | String | - |
| `autostart` |When `true`, playback will start automatically on desktop devices or when the player is 50% visible on mobile devices. When set to `viewable`, playback will start automatically on desktop devices when the player is more than 50% visible in the active tab. | String | `false` |
| `height` | Desired height of your video player (in pixels)<br/><br/> Should not be used with `aspectratio`. | Number | `360` |
| `mute` | Toggles the player's mute attribute | Boolean | `false` |
| `repeat` | When `true`, starts playing the first playlist item after the playlist completes | Boolean | `false` |
| `stretching` | Resize images and video to fit player dimensions<br/><br/>&nbsp;&nbsp;`uniform`: Fits JW Player dimensions while maintaining aspect ratio<br/><br/>&nbsp;&nbsp;`exactfit`: Fits JW Player dimensions without maintaining aspect ratio<br/><br/>&nbsp;&nbsp;`fill`: Zooms and crops video to fill dimensions, maintaining aspect ratio<br/><br/>&nbsp;&nbsp;`none`: Displays the actual size of the video file<br/>(Black borders) | String | `uniform` |
| `volume` | Sets the volume of the player between 1-100 | Number | - |
| `width` | Desired width of your video player (in pixels or percentage) | Number or String | `640` |

**Sample**

```
setConfig([{
  repeat: true,
  autostart: 'viewable',
  mute: false,
  volume: 25
}]);
```

### jwplayer().getProvider()

Returns the provider being utilized by JW Player for a particular media file. JW Player will always technically render in HTML5 mode, even if it is using a Flash-based provider.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|name | The name of the provider currently being used|String|

**List of possible providers:**

|Values|Description|
|----|--------|
|html5 | Displays whenever content renders natively within a video tag|
|shaka | MPEG Dash Provider|
|hlsjs | HLS content rendering with HLS HTML5 provider|
|flash_video | Static video file with our Flash provider|
|flash_adaptive | Streaming HLS using Adobe Flash|
|flash_sound | Static audio file with Flash provider|

### jwplayer().getContainer()

Returns the entire HTML of the div in which a JW Player instance exists. This includes all IDs, styles, classes, and content.

### jwplayer().getEnvironment() <sup>8.0+</sup>

!!!
In JW8, we've removed our browser/OS inspection utils, is* (isChrome, isAndroid, etc.), and have replaced them with this Environment object.
!!!

Returns the browser and operating system information in which the player thinks it's in.

**Sample**

```
{
  "Browser": {
    "chrome": true,
    "edge": false,
    "facebook": false,
    "firefox": false,
    "ie": false,    // Used for IE 11+
    "msie": false,    // Used for IE 10 and below
    "safari": false,
    "version": {
      "version": "60.0.3112.113",
      "major": 60,
      "minor": 0
    }
  },
  "OS": {
    "android": false,   // Android Chrome
    "androidNative": false,   // Android native browser
    "iOS": false,
    "mobile": false,
    "mac": true,
    "iPad": false,
    "iPhone": false,
    "windows": false,
    "version": {
      "version": "10_12_6",
      "major": 10,
      "minor": 12
    }
  },
  "Features": {
    "flash": true,   // Does the browser environment support Flash?
    "flashVersion": 26,
    "iframe": false    // Is the session in an iframe?
  }
}
```

### jwplayer().getPlugin()

Targets a particular plugin for API calls. Currently functions with our [Sharing](#sharing) and [Related](#related) plugins.

### jwplayer().on('ready')

Signifies when the player has been initialized and is ready for playback. This is the earliest point at which any API calls should be made.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|setupTime | The amount of time (in milliseconds) for the player to go from setup() to ready.|Number|
|viewable |If the player is viewable or not.|Number|

### jwplayer().on('setupError')

Fired when neither the player could be set up.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|message | The error message that describes why the player could not be set up|String|

### jwplayer().on('remove')

Triggered when the player is taken off of a page via `jwplayer().remove();`

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

* * *

## All

### jwplayer().on('all')

This singular API call can be used to listen to all events from the player's API that are listed in the following sections on this page.

!!!warning
This will output a large amount of information and may degrade browser performance if it is used for an extended period of time.!!!

* * *

## Viewability

!!!
We do not recommend using viewability API with iframes.
!!!

### jwplayer().getViewable()

This getter will return 1 if 50% of the player is in view and is in the active tab. If it is below 50% or is in an inactive tab, it will return 0.

### jwplayer().on('viewable')

When the player is viewable, a _viewable_ event is fired with a viewable value of 1. When hidden, it fires with a value of 0.

* * *

## Playlist

These API calls are used for loading and retrieving the current playlist (of one or more items), as well as for navigating between playlist items. When accessed via the API, a playlist is an Array, containing one or more objects. Each of these objects contains the following:

|Value|Description|Type|
|----|--------|---|
| description | A description specified inside of the playlist | String |
| mediaid | A unique media identifier for a particular piece of content, regardless of the format used | String |
| file | Provides a shortcut to sources[0].file.  Alternative files are listed in the _allSources_ array | String |
| image | The poster image file loaded inside of the player | String |
| preload | Preload status for current item. Can be: metadata &#124; auto &#124; none | String |
| title | The title of the playlist item | String |
| tracks | The full array of tracks included with the playlist item, similar to getCaptionsList() | Array |
| sources | An array that contains a single object with information about the currently utilized source | Array |
| allSources | An array of all configured sources for the current playlist item | Array |

!!!
Each playlist item has a file property at the highest level, which acts as a shortcut to the file of the first entry in the sources object.
!!!

**The `sources` array contains a single object with information about the currently utilized source:**

|Value|Description|Type|
|----|--------|---|
|file|The file used in the source array item|String|
|label|A label assigned to a particular quality|String|
|type|The media type|String|
|default|If this media source has been defined as a default for playback|Boolean|

**The `tracks` array contains a list of objects based on any configured tracks:**

|Value|Description|Type|
|----|--------|---|
|file|The file used containing any utilized tracks|String|
|label|If using captions, the configured label assigned to a particular quality|String|
|kind|The type of tracks assigned to the video. Can be: captions &#124; chapters &#124; thumbnails |String|

### jwplayer().next();

Tells JW Player to immediately play the next playlist item

### jwplayer().getPlaylist()

Returns an array of objects from a playlist. Any additional custom playlist properties will also be returned. See the [playlist](#playlist) section above for the structure of these objects.

|Description|Type|
|--------|---|
|An array of objects from the current playlist| Array |

### jwplayer().getPlaylistItem(_index_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Retrieves the same information as `getPlaylist()`, but for a single playlist item| Number |No|

**If no number is specified, the current playlist item's information will be returned.**

### jwplayer().getPlaylistIndex()

|Description|Type|
|--------|---|
|The numerical index of the currently loaded playlist item.| Number |

### jwplayer().load(_playlist_)

Loads a new playlist into the player.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|playlist| The playlist to load into the player. |Array &#124; String |Yes|

**Types of Playlists**

|Description|Type|
|--------|---|
| An array of playlist item objects. See above for correct syntax|Array|
| A URL referencing the location of an RSS/XML/JSON file|String|

**JSON Playlist Example**

```
  jwplayer('myElement').load([{
	"file": "/videos/myVideo.mp4",
	"image": "/images/myImage.png",
	"title": "My Favorite Video!",
	"description": "This has lots of kittens in it!"
}]);
```

**Playlist URL Example**
```
jwplayer().load("https://mywebsite.com/myplaylist.json");
```

### jwplayer().playlistItem(_index_)
Start playback of the playlist item at the specified index.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| The index of a playlist item you wish to play |Number|Yes|

### jwplayer().on('playlist')

Fired when an entirely new playlist has been loaded into the player.

!!!
This event is not fired as part of the initial playlist load. Please use `on('ready')` in these cases.
!!!

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| playlist | The new playlist array; Provides the same output as getPlaylist() | Array |

### jwplayer().on('playlistItem')

Fired when the playlist index changes to a new playlist item. This event occurs before the player begins playing the new playlist item.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| index | Index of the currently playing playlist item | Number |
| item | The current playlist item; Provides the same output as getPlaylistItem() | Object |

### jwplayer().on('playlistComplete')
Fired when the player is done playing all items in the playlist. If the repeat option is set true, this will not be triggered.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

* * *

## Cast

This API call allows a developer to listen for `cast` events.

### jwplayer().on('cast')

Triggered when a `cast` property changes

```json
{
  "available": true,
  "active": true,
  "deviceName": "ViewerTV",
  "type": "cast"
}
```

|Value|Description|Type|
|----|--------|---|
| `active` | Indicates that casting has started (`true`) or has stopped (`false`) | Boolean |
| `available` | Indicates a device is (`true`) or is not (`false`) available for casting<br/><br/>When a device is available to be cast to, the cast icon appears in the player control bar. | Boolean |
| `deviceName`| Name that the viewer assigns to device (receiver)<br/><br/>This property is only populated when `"cast.active": "true"`. | String |
| `type` | Category of player event<br/><br/>This is always `cast` for this event. | String |

* * *

## Buffer

These API calls are used to update clients with the percentage of a file that is buffered into the player. This only applies to VOD media; live streaming media (_HLS/DASH_) does not expose this behavior.

### jwplayer().getBuffer()

|Description|Type|
|--------|---|
| A percentage (0-100) of the video's current loaded amount | Number |

### jwplayer().on('bufferChange')

Fired when the currently playing item loads additional data into its buffer.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| duration | Current media's duration (In seconds) | Number |
| bufferPercent | Percentage between 0 and 100 of the current media that is buffered. | Number |
| position | Current position of the media file (In seconds) | Number |
| metadata <sup>Flash HLS-Only</sup> | Contains _bandwidth_ and _droppedFrames_ values. See below for more info. | Object |

**Metadata Object**

|Value|Description|Type|
|----|--------|---|
| bandwidth | Current download speed in bits per second. | Number |
| droppedFrames | Amount of dropped frames caused by a buffer change. | Number |

* * *

## Playback

These API calls are used to retrieve and change the current playback state of the player.

### jwplayer().play()

Sets the play state of the JW Player. Calling `play()` while media is playing does nothing.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().pause()

Pauses playback, changing the state of JW Player from playing to paused. Calling `pause()` while media is already paused does nothing.

Note: When using this method with a non-DVR live stream, the player will appear paused. After this, when `play()` is called, the stream restarts from the live edge.


|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().stop()

Stops the player, returning it to the idle state.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().getState()

Returns the player's current playback state.

|Returns|Description|Type|
|----|--------|--|
|idle |Either playback has not started or playback was stopped due to a stop() call or an error. In this state, either the play or the error icon is visible in the display.| String|
|buffering|The user pressed play, but sufficient data to start playback has not yet loaded. The buffering icon is visible in the display.| String|
|playing|The video is currently playing. No icon is visible in the display.| String|
|paused|The video is currently paused. The play icon is visible in the display.| String|

### jwplayer().on('autostartNotAllowed')

Fired when the player is configured to autostart but the browser's settings are preventing it.

**Returns an object with the following:**

|Value|Description|Possible Outputs|Type|
|---|---|---|---|
|error|An object containing the error, most likely an `AbortError`.|-|Object|
|reason|The reason why the player could not autostart.|"autoplayDisabled"|String|
|type|The type of event that is fired.|"autostartNotAllowed"|String|

### jwplayer().on('play')

Fired when the player enters the playing state.

**Returns an object with the following:**

|Value|Description|Possible Outputs|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing |String|
|viewable |If the player is viewable or not.|0 &#124; 1 |Number|
|playReason |The reason for the play, such as interaction, API, external, or a custom reason.|String|

### jwplayer().on('pause')

Fired when the player enters the paused state.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing |String|
|viewable |If the player is viewable or not.|0 &#124; 1 |Number|
|pauseReason |The reason for the pause, such as interaction, API, external, or a custom reason.|String|

### jwplayer().on('playAttemptFailed')

Fired when playback is aborted or blocked. A failed play attempt does not result in a play. Pausing the video or changing the media results in play attempts being aborted. In mobile browsers play attempts are blocked when not started by a user gesture.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|--|
|error |The error that resulted from the play promise. |Object|
|item |Returns everything in the playlist item.|Object|
|playReason |The reason for the play, such as interaction, API, external, or a custom reason.|String|

### jwplayer().on('buffer')

Fired when the player starts playback and when the player enters a buffering state.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing |String|
|newstate |The state the player moved to.|idle &#124; playing &#124; paused|String|
|reason |The reason why a buffer event occurred.|loading &#124; complete &#124; stalled &#124; error|String|

### jwplayer().on('idle')

Fired when the player enters the idle state.

**Returns an object with the following:**

|Value|Description|Possible Outputs|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing &#124; paused|String|

### jwplayer().on('complete')

Fired when an item completes playback.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().on('firstFrame')

Use this to determine the period of time between a user pressing play and the same user viewing their content. Triggered by a video's first frame event (or the instant an audio file begins playback). This event pinpoints when content playback begins.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| loadTime | The amount of time (In milliseconds) it takes for the player to transition from a play attempt to a firstFrame event.  | Number |
|viewable |If the player is viewable or not.|Number|

### jwplayer().on('error')

Signals a critical error in the playback process.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| `code` | Identifier for the error<br/> See [JW Player Errors Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference/) for a list of possible errors.   | Number  
| `message` | Text for the detected error<br/> See [JW Player Errors Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference/) for a list of possible errors.  | String |
| `sourceError` | Lower level error or event, caught by the player, which resulted in this error | Object or null |
| `type` | Category of error<br/>This will always return `error`. |  String |



### jwplayer().on('warning')

Signals a failure that is not critical to the setup or playback process.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| `code` | Identifier for the warning<br/> See [JW Player Errors Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference/) for a list of possible warnings.   | Number  
| `message` | Text for the detected warning<br/> See [JW Player Errors Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference/) for a list of possible warnings.  | String |
| `sourceError` | Lower level error or event, caught by the player, which resulted in this warning | Object or null |
| `type` | Category of warning<br/>This will always return `warning`. |  String |

### jwplayer().on('playbackRateChanged')

Fired when the playback rate has been changed.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| playbackRate | The new playback rate  | Number |
| position | The position of the video when the playback rate was changed  | Number |

### jwplayer().getPlaybackRate()

|Returns|Type|
|--------|---|
|The current playback rate. | Number |

### jwplayer().setPlaybackRate(_rate_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|rate| Accepts any numeric value between 0.25 and 4. The playback rate is clamped if rate is out of range. |Number|No|


* * *

## Seek

These API calls are used to retrieve and update the current media playback position.

### jwplayer().getPosition()

Intended to return the viewer's current position in a media file. Values may vary depending on the type of media. See the table below for more information.

|Media Type|Description|Type|
|----------|--------|---|
|VOD| The current playback position for a VOD file, in seconds | Number |
|Live| How long the current stream has been playing, in seconds | Number |
|DVR| A negative value, indicating how far behind the viewer is from the stream's live position.<sup>1</sup> | Number |

!!!
<sup>1</sup> Seeking to a live position will include a buffer of approximately -30 seconds.
!!!

### jwplayer().getDuration()

The total length of the media file. This varies depending on VOD or live content. See the table below for more information.

|Media Type|Description|Type|
|----------|--------|---|
|VOD| The length of a loaded VOD file, in seconds | Number |
|Live| Live streams will always return a duration of _infinity_ | Number |
|DVR| The total amount of buffer in the DVR stream, in seconds | Number |

### jwplayer().seek(_position_)

Jump to the specified position within the currently playing item.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|position| The position (in seconds) to seek to |Number |Yes|

### jwplayer().on('seek')

Fired after a seek has been requested either by scrubbing the control bar or through the API.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| position | The position of the player before the player seeks (in seconds).  | Number |
| offset | The position that has been requested to seek to (in seconds). | Number |

!!!
Seeking is often based on keyframe availability. The actual position the player will eventually seek to may differ from what was specified.
!!!

### jwplayer().on('seeked')

Triggered when video position changes after seeking, as opposed to `on('seek')` which triggers as a seek occurs.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().on('time')

While the player is playing, this event is fired as the playback position gets updated. This may occur as frequently as 10 times per second.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| duration | Duration of the current playlist item in seconds.  | Number |
| position | Playback position in seconds. | Number |
|viewable |If the player is viewable or not.|Number|

* * *

## Volume

These API calls are used to change the playback volume of the player.

!!!
Setting volume will only work on desktop browsers, not on mobile devices.
!!!

### jwplayer().getMute()

|Description|Type|
|--------|---|
|If the player is currently muted or not | Boolean |

!!!
This may be independent from the volume value. Volume 0 does not mean that content is set to mute.
!!!

### jwplayer().getVolume()

|Returns|Type|
|--------|---|
|The current playback volume, as a percentage from 0 to 100. | Number |

### jwplayer().setMute(_state_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|state| Set the mute state of the player. If the state is undefined, mute is toggled. |Boolean|No|

### jwplayer().setVolume(_volume_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|volume| Set the volume of the player between 1-100 |Number |Yes|

!!!
Decimal-point values are allowed to be passed in to the method, but they will be rounded when the player sets the volume.
!!!

### jwplayer().on('mute')

Triggered when the player has gone in or out of a mute state.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| mute | The player's new mute state  | Boolean |

### jwplayer().on('volume')

Triggered when the player's volume is changed.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| volume | New volume percentage (0-100)  | Number |

* * *

## Resize

These API calls are used to retrieve and update the current player dimensions and fullscreen state.

### jwplayer().getFullscreen()

|Returns|Type|
|--------|---|
| The current fullscreen state; true if fullscreen, false if not | Boolean |

### jwplayer().getHeight()

|Returns|Type|
|--------|---|
| The player's current height, in pixels | Number |

### jwplayer().getWidth()

|Returns|Type|
|--------|---|
| The player's current width, in pixels | Number |

### jwplayer().resize(_width_, _height_)

Resizes the player to the specified width and height.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|width| The new desired width of the player in pixels (number) or percent (string) |Number &#124; String|Yes|
|height| The new desired height of the player. Must be specified in pixels (number)|Number |Yes|

!!!
Decimal-point values are allowed to be passed in to the method, but they will be rounded when the player sets the size.
!!!


**Example:**

```
jwplayer().resize('50%', 250)
```

### jwplayer().on('fullscreen')

Fired when the player toggles to/from fullscreen.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| fullscreen | The player's new fullscreen state | Boolean |

### jwplayer().on('resize')

Fired when the player's on-page dimensions have changed. Is not fired in response to a fullscreen change.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| width | The new width of the player | Number |
| height | The new height of the player | Number |

* * *

## Quality

These API calls are used to listen to or update the video quality if multiple quality levels of a video are provided. Quality levels are sorted and given index numbers.

!!!
An index of 0 will _always_ be "Auto".
!!!

### jwplayer().getQualityLevels()

|Description|Type|
|--------|---|
| Returns an array of objects based on each quality level of a media item | Array |

**Each object contains the following:**

|Value|Description|Type|
|----|--------|---|
| bitrate | The bitrate of the media file  | Number |
| height | The height of the media file  | Number |
| width | The width of the media file  | Number |
| label | The label used for a quality  | String |

### jwplayer().getCurrentQuality()

Returns the index of the current active quality level. The indexes provided vary based on the amount of available qualities. See the table below to understand how quality indexes function

|Description|Type|
|--------|---|
| Index of the current quality | Number |

### jwplayer().getVisualQuality()

Returns an object containing information about the current quality of a video stream.

|Value|Description|Type|
|----|--------|---|
| mode | The current quality mode. Can be _auto_ if adaptive is enabled or _manual_ if a static quality is set | String |
| level | Information about the current selected quality. See getQualityLevels for the full list of available information| Object |
| reason | The reason that a quality was selected. See table below for more information | String |

**List of Reasons**

|Reason|Description|
|--------|---|
|initial choice| The user had this quality set as a default and did not change it |
|auto| An automatic quality change occurred|
|api| The user chose a static quality after playback began, or an API was used to set it |

### jwplayer().setCurrentQuality(_index_)

Change the quality level to the provided index. The index must not exceed the amount of available qualities.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Sets stream quality to a specified index |Number|Yes|

### jwplayer().on('levels')

Fired when the list of available quality levels is updated. Happens e.g. shortly after a playlist item starts playing.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|width|The new width of the player  | Number |
|levels|The full array of qualities, including the new additions. Includes the same information as getQualityLevels() | Array|

### jwplayer().on('levelsChanged')

Fired when the active quality level is changed. Happens in response to e.g. a user clicking an option in the quality menu or a script calling `setCurrentQuality`.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| currentQuality | index of the new quality level in the getQualityLevels() array | Number |

### jwplayer().on('visualQuality')

Fired when the active quality level is changed for HLS. This is different than _levelsChanged_ since this will trigger when adaptive streaming automatically shifts quality.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| mode | The current type of quality selection. auto = automatic quality switching &#124; manual = static quality  | String |
| label | Information about the new quality that was switched to. This returns the same information as getVisualQuality()  | String |
| reason | Why the quality was changed. See table below for possible reasons  | String |

**Possible Reasons**

|reason|Description|
|--------|---|
|initial choice| The user had this quality set as a default and did not change it |
|auto| An automatic quality change occurred|
|api| The user chose a static quality after playback began, or an API was used to set it |

* * *

## Audio Tracks

These API calls are used to listen to or update the audio track if multiple audio tracks of a video are provided.

### jwplayer().getAudioTracks()

|Returns|Type|
|--------|---|
| An array of each audio track object. These are based on information listed in the M3U8 manifest | Array |

|Value|Description|Type|
|----|--------|---|
| autoselect | If no explicit preference is chosen, can be chosen based on system language | Boolean |
| defaulttrack | Returns true if the track should be chosen by default | Boolean |
| language | The two-letter [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the chosen audio track | String |
| name | The given name for the chosen audio track | String |

### jwplayer().getCurrentAudioTrack()

|Returns|Type|
|--------|---|
|The index of the currently active audio track. Will return -1 if there are no alternative audio tracks| Number |

### jwplayer().setCurrentAudioTrack(_index_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Change the audio track to the provided index. |Number|Yes|

### jwplayer().on('audioTracks')

Fired when the list of available audio tracks is updated. Happens shortly after a playlist item starts playing.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| levels | An array containing the new audio track objects. Returns the same information as getAudioTracks() | Array |

### jwplayer().on('audioTrackChanged')

Fired when the active audio track is changed. Happens in response to e.g. a user clicking the audio tracks menu or a script calling setCurrentAudioTrack().

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| currentTrack | Index of the new quality level in the getAudioTracks() array.  | Number |

* * *

## Captions

These API calls are used to listen to or update the active captions track if one or more closed captions tracks are provided with a video. The JavaScript API can be used to log captions usage or build your own CC menu outside JW Player. It is also possible to set caption styles dynamically using `setCaptions()` without having to reload the player.

!!!
An index of 0 implies that captions are off.
!!!

### jwplayer().setCaptions(_styles_)

Changes the appearance of captions without having to reload the player. All colors should be in hex value.

|Attribute|Description|Type| Required|
|---|--------|---|--|
|styles|An object containing the desired caption styles and values (See example below) |Object|Yes|

|Value|Description|Type|Default|
|---|--------|---|--|
|color|Text color|String|#ffffff|
|fontSize|The size of text. _Note: Does not affect cases where native rendering occurs_|Number|20|
|fontFamily|The style of text to use|String|Arial, sans-serif|
|fontOpacity|Adjusts the transparency of text as a percentage|Number|100|
|backgroundColor|The color of the text background|String|#000000|
|backgroundOpacity|Adjusts the transparency of the text background as a percentage|Number|100|
|edgeStyle| Surrounds text with a particular style. Can be: **none &#124; dropshadow &#124; raised &#124; depressed &#124; uniform**|String|none|
|windowColor| Surrounds text box with chosen color from edge to edge of the video|String|-|
|windowOpacity| Sets the transparency of the window as a percentage|Number|-|

**Example:**

```
jwplayer().setCaptions({"color": "#ffffff", "backgroundColor": "#000000"});
```

### jwplayer().getCaptionsList()

Returns an array of objects based on available captions. Information for each object may vary depending on the caption types.

!!!
The event is only triggered when captions are present. The list is cleared on each `.on('playlistItem')` event.
!!!

**Sideloaded Captions (VTT, SRT, DFXP)**

|Value|Description|Type|
|----|--------|---|
| id | The URL of the sideloaded caption file | String |
| label | The label that is configured in the player setup. | String |

**Stream-Embedded Captions**

|Value|Description|Type|
|----|--------|---|
| id | The index of the caption. | Number |
| label | The label specified within the embedded captions | String |

### jwplayer().getCurrentCaptions()

|Description|Type|
|--------|---|
| The index of the currently active captions track. | Number |

### jwplayer().setCurrentCaptions(_index_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Change the visible captions track to the provided index  |Number|Yes|

### jwplayer().on('captionsList')

Fired when the list of available captions tracks changes. This event is the ideal time to set default captions with the API.

!!!
'captionsList' will always return an array of at least **1** item due to **off**, but will trigger again once captions are fully loaded. We suggest only changing captions when the tracks array length exceeds **1**.
!!!

**Returns an array with the following:**

|Value|Description|Type|
|----|--------|---|
| tracks | An array with all included captions tracks(Including "off"). Includes the same information as getCaptionsList() | Array |

### jwplayer().on('captionsChanged')

Triggered whenever the active captions track is changed manually or via API.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| currentTrack | Index of the new active captions track  | Number |

* * *

## Controls

This API call allows developers to interact with the built-in player controls (control bar and display icons).

!!!
Controls will still fade out during playback if the video has no keyboard/mouse focus. When controls are disabled, JW Player is completely chrome-less.
!!!

### jwplayer().getControls()

|Description|Type|
|--------|---|
| Returns whether or not the built-in controls are currently enabled | Boolean |

### jwplayer().getSafeRegion()

Used to ensure that any visual assets don't overlap with JW Player controls.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| x | Starting point on the X axis with JW Player. Will always be 0. | Number |
| y | Starting point on the Y axis with JW Player. Will always be 0.  | Number |
| width | Current viewable container width  | Number |
| height | Current viewable container height, subtracting control bar height  | Number |

### jwplayer().addButton(_img, tooltip, callback, id, btnClass_)

Adds a custom button to the player's control bar.

**Placement:**
Buttons are added to the righthand-side grouping of icons in the control bar. Buttons are added all the way to the left of the grouping, except if there is a logo in the control bar. In this case, buttons will be added to the right of the logo. Multiple buttons are added from right to left in the order they are entered.

**Styling:**
While the `icon` attribute will display any image provided as a URL, we recommend inlining SVGs here instead of providing an external path. This allows the button to map to `skin.controlbar.icons` and `skin.controlbar.iconsActive` [customization options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#skin).

|Attribute|Description|Type|Required|
|---|--------|---|--|
|img|The image that will be used as the button icon. Can be the url to an image or the content of an SVG in string. Monochromatic, white icons of 24x24 pixels work well. |String|Yes|
|tooltip|A tooltip label to display when the button is hovered.|String|Yes|
|callback|The JavaScript function that is called when the button is clicked.|Function|Yes|
|id|The string used to identify the button. It must be unique across all buttons (an error is thrown otherwise).|String|Yes|
|btnClass|An optional CSS class name added to the button element.|String|No|

### jwplayer().removeButton(_id_)

Removes a custom button from the control bar.

|Attribute|Description|Type|Required|
|----|--------|---|-|
|id|The id used to identify the button to remove.|String|Yes|

### jwplayer().setControls(_state_)

|Attribute|Description|Type|Required|
|----|--------|---|-|
|state|Sets the display of the built-in JW Player controls. Not including a state will toggle the appearance.|Boolean|No|

### jwplayer().on('controls')

Fired when controls are enabled or disabled by a script.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
| controls | New state of the controls.  | Boolean |

### jwplayer().on('displayClick')

Fired when a user clicks the video display. Especially useful for wiring your own controls when the built-in ones are disabled.

!!!
The default click action (toggling play/pause) will still occur if controls are enabled.
!!!

|Value|Description|Type|
|----|--------|---|
| -| No value returned | - |

* * *

## Advertising

!!!important
Video ad insertion requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/contact-us/?utm_source=developer&utm_medium=CTA&utm_campaign=player-docs) to upgrade your account.
!!!

This API provides developers with more control over the functionality of the Advertising edition of JW Player. For VAST and IMA plugins, this API allows for things like impression verification, custom scheduling, and multiple companions.

### jwplayer().playAd(tag)

Used to play an ad immediately, which is primarily useful for situations where the built-in ad schedule of JW Player cannot be used.(e.g. for live streaming or dynamic ads for playlist items)

|Attribute|Description|Type|Required|
|----|--------|---|--|
|tag|The VAST tag URL that should be loaded into the player.|String|Yes|

We recommend to call playAd() in one of these following situations:
1.  Inside a JW Player event handler for beforePlay(), to trigger a pre-roll.
2.  Inside a JW Player event handler for onTime(), to trigger a mid-roll.
3.  Inside a event handler for onBeforeComplete(), to trigger a post-roll.
4.  Outside of event handlers, only when the player is in the playing state.


!!!
`playAd` is not supported when using Video Player Bidding due to the potential impact on performance and user experience while the player is waiting for the bidding process to complete.<br/><br/>`playAd()` is also not supported with ad preloading. Since calling `playAd()` immediately plays an ad, there is no time to preload an ad.
!!!

### jwplayer().pauseAd(state)

Used to pause or resume ad playback.

|Attribute|Description|Type|Required|
|----|--------|---|--|
|state|Set whether or not the ad playback should be paused.

### jwplayer().getAdBlock()

Used to determine whether or not the player is detecting the presence of an ad blocker.

|Returns|Type|
|---|---|
|If the player detects an ad blocker|Boolean|

### jwplayer().on('adBlock')

 This event is fired when an ad plugin (Either VAST or Google IMA) is configured inside of the JW Player setup, and an ad blocker is detected on a viewer's browser. It is then possible to request a user disable their ad blocker to proceed.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().on('beforePlay')

Fired just before the player begins playing. Unlike the `onPlay event`, the player will not have begun playing or buffering when triggered, which makes this the right moment to insert preroll ads using `playAd()`.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().on('beforeComplete')

Fired just before the player completes playing. Unlike the onComplete event, the player will not have moved on to either showing the replay screen or advancing to the next playlistItem, which makes this the right moment to insert post-roll ads using `playAd()`.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### jwplayer().on('adBidRequest')
Fired when header bidding starts requesting for bids.

**Returns an object with the following:**

|Value|Description|PossibleValues|Type|
|----|--------|---|---|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|type | The type of the event|"adBidRequest"|String|
|offset | The offset of the ad|-|String|
|mediationLayerAdServer| The mediation layer, which is the decision-maker in what ad to run|"jwp" &#124; "jwpspotx" &#124; "dfp" &#124; "jwpdfp"|String|
|floorPriceCents| Floor price that the return bids need to beat to play. Not returned when using "dfp" mediation layer|-|Number|
|floorPriceCurrency| The currency of the floor price cents value. Needs to be "usd" for Facebook. Only used for Facebook bids when mediation layer is set to "jwp".|-|String|
|bidTimeout| The amount of milliseconds it will wait for the bids to return after user clicks to play.|-|Number|
|bidders| An array of all bidders in the current bid request.|-|Array|

**Each bidder object contains the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|---|
|name | The name of the bidder|"SpotX"|String|
|id | The publisher id used for header bidding for each of the bidder|-|Number|

### jwplayer().on('adBidResponse')
Fired when header bidding returns response.

**Return an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|------|---|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|type | The type of the event|"adBidRequest"|String|
|offset | The offset of the ad|-|String|
|mediationLayerAdServer|The mediation layer, which is the decision-maker in what ad to run|"jwp" &#124; "jwpspotx" &#124; "dfp" &#124; "jwpdfp"|String|
|floorPriceCents| Floor price that the return bids need to beat to play. Not returned when using "dfp" mediation layer|-|Number|
|floorPriceCurrency| The currency of the floor price cents value. Needs to be "usd" for Facebook. Only used for Facebook bids when mediation layer is set to "jwp".|-|String|
|bidTimeout| The amount of milliseconds it will wait for the bids to return after user clicks to play.|-|Number|
|bidders| An array of all bidders in the current bid request.|-|Array|

#### Bidder Object
**Each bidder object contains the following:**

|Value|Description|Possible Values|Type|
|----|--------|-----|---|
|name | The name of the bidder|"SpotX"|String|
|id | The publisher id used for header bidding for each of the bidder|-|Number|
|result | The result of the bidder's bid|"bid" &#124; "noBid" &#124; "timeout"|String|
|timeForBidResponse | Time taken for the bid to return in milliseconds|-|Number|
|priceInCents | The price of the bid. Only used when JW is the mediation layer|-|Number|
|tagKey | The tagKey of the bid returned. Only used for SpotX bidder|-|Number|
|winner | Set to true when the bidder is the winning bid|true &#124; false|Boolean|

### jwplayer().on('adClick')

VAST and IMA. Fired whenever a user clicks an ad to be redirected to its landing page.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | The type of ad that is being played|-|String|
|tag | The URL of the ad tag that was clicked|-|String|

### jwplayer().on('adCompanions')

VAST and IMA. Fired whenever an ad contains companions.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|companions | An array with available companion information|Array|
|tag | The URL of the ad tag that is currently playing|String|

**Every companion will return the following object:**

|Value|Description|Type|
|----|--------|---|
|click | URL to link to when clicking the companion. Only available if the type is static|String|
|height | The height of the companion in pixels|Number|
|resource | The URL to the static/iframe resource, or the raw HTML content|String|
|type | The type of the creative: static, iframe, or HTML|String|
|width | The width of the companion in pixels|Number|
|creativeview | An array of included creativeview event tracking pixels|Array|

### jwplayer().on('adComplete')

VAST and IMA. Fired whenever an ad has completed playback.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | The type of ad that is just completed|-|String|
|tag | The URL of the ad tag that just completed|-|String|

### jwplayer().on('adSkipped')
VAST and IMA. Fired whenever an ad has been skipped.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | The type of ad that was skipped|-|String|
|tag | The URL of the ad tag that was skipped|-|String|

### jwplayer().on('adError')

VAST and IMA. Fired whenever an error prevents the ad from playing.

!!!
This may fire multiple times for a single ad tag if Google IMA is being used.
!!!

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|message | The ad error message. See table below|String|
|tag | The URL of the ad tag that produced the error|String|

|Possible Error Messages|Causes|
|-----------------------|-----------|
|ad tag empty |No ad was available after searching wrapped ad tags|
|error playing creative |404 on a creative file|
|error loading ad tag|All additional ad errors|
|invalid ad tag|Invalid XML, Improperly formatted VAST syntax|
|no compatible creatives|FLV video creative or VPAID SWF is attempting to play in HTML5 player|
|bidders | **IMA-only** An array of bidders who made bids on the ad slot. Only added if header bidding happened|-|Array|

**Look at [bidder object](/#bidder-object) for what is contained in each bidder object.**

### jwplayer().on('adRequest')

VAST only. Fired whenever an ad is requested by the player.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|adposition | An ad's position.|"pre" &#124; "mid" &#124; "post"|String|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|offset | An ad's position. Will return a number (in seconds) of a midroll's position|"pre" &#124; "post" &#124; number|String&#124;Number|
|tag | The URL of the ad tag that is being requested|-|String|

### jwplayer().on('adStarted')
!!!
VPAID-only
!!!

 This API will trigger when a VPAID ad creative signals to our player that it is starting. This differs from an adImpression, since the advertisement may not yet be visible.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|tag | The URL of the  ad tag that was started.|String|
|creativetype | The MIME type of the VPAID creative|String|

### jwplayer().on('adImpression')
VAST and IMA. Fired based on the IAB definition of an ad impression. This occurs the instant a video ad begins to play.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|adposition | An ad's position.|"pre" &#124; "mid" &#124; "post"|String|
|adsystem | AdSystem referenced inside of the VAST XML |-|String|
|adtitle | AdTitle referenced inside of the VAST XML|-|String|
|clickThroughUrl| The URL of the page the user lands on when clicking the ad|-|String|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|-|String|
|linear | Returns if an ad is "linear" or "nonlinear"|-|String|
|mediafile | **VAST-only** An object containing "file", which is the currently playing media item|-|Object|
|tag | The URL of the ad tag that was started|-|String|
|vastversion | **VAST-only** The version of VAST referenced in the VAST XML|-|Number|
|wrapper | **VAST-only** An array of the AdSystems specified in any utilized ad wrappers; index denotes level of wrapper|-|Array|
|bidders | **IMA-only** An array of bidders who made bids on the ad slot. Only added if header bidding happened|-|Array|

**Look at [bidder object](/#bidder-object) for what is contained in each bidder object.**


### jwplayer().on('adPlay')
Fired whenever an ad starts playing or when an ad is unpaused.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|String|
|newstate | The new state of the player|String|
|oldstate | The state of the player prior to ad playback|String|
|tag | The URL of the ad tag that is currently playing.|String|

### jwplayer().on('adPause')
Fired whenever an ad is paused.

**Returns an object with the following:**

|Value|Description|Type|
|----|--------|---|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|String|
|newstate | The new state of the player. This should be "paused"|String|
|oldstate | The state of the player prior to ad pause|String|
|pauseReason <sup>8.7.0 +</sup>| Reason ad playback has been paused<br/><br/>- `clickthrough`: Pause caused by viewer clicking an ad<br/><br/>- `external`: Pause caused by using native VPAID controls or `jwplayer().pauseAd()`<br/><br/>- `interaction`: Pause caused by viewer clicking the pause control on the player|String|
|tag | The URL of the ad tag that is currently playing.|String|

### jwplayer().on('adTime')
Fired while ad playback is in progress.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|-|String|
|duration|The total duration of the ad creative|-|Number|
|position|The current playback position in the ad creative|-|Number|
|sequence|Returns the sequence number the ad is a part of|-|Number|
|tag     |The URL of the ad tag that is currently playing|-|String|

### jwplayer().on('adBreakStart')

Fires after the ad request and immediately before the ad is loaded into the player. Only fires before the first ad inside of an ad break.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|--|--|--|--|
|adposition|Whether the ad is a pre-roll, mid-roll or post-roll.|"pre" &#124; "mid" &#124; "post"|String|
|client|The ad client in use for the ad break.|"vast" &#124; "googima" &#124; "freewheel"|String|
|type|The type of event that is firing.|"adBreakStart"|String|
|viewable|Will return 1 if 50% of the player is in view and is in the active tab. If it is below 50% or is in an inactive tab, it will return 0.|0 &#124; 1|Number|

### jwplayer().on('adBreakEnd')

Fires when control is passed back to the player from the ad.

**Returns an object with the following:**

|Value|Description|Possible Values|Type|
|--|--|--|--|
|adposition|Whether the ad is a pre-roll, mid-roll or post-roll.|"pre" &#124; "mid" &#124; "post"|String|
|client|The ad client in use for the ad break.|"vast" &#124; "googima" &#124; "freewheel"|String|
|type|The type of event that is firing.|"adBreakEnd"|String|
|viewable|Will return 1 if 50% of the player is in view and is in the active tab. If it is below 50% or is in an inactive tab, it will return 0.|0 &#124; 1|Number|

### jwplayer().on('adManager')

Freewheel only. Fires when the Freewheel ad manager is loaded into the player. Allows publishers using Freewheel to have access to the ad manager before ad playback, in order to integrate with other aspects of Freewheel.

**Returns an object with the following:**

|Value|Description|Type|
|--|--|--|
|adManager|An object containing the ad manager configuration.|Object|

### jwplayer().on('adMeta')

Continuously triggers when new metadata has been received from the ad by the player. Values may vary based on the ad itself.

**Returns an object with the following:**

|Value|Description|Type|
|--|--|--|
|metadata|Object containing the metadata from the ad. The values contained within the object will vary based on the ad.|Object|

### jwplayer().on('adSchedule')

VAST only. Fires when the ad schedule is loaded and parsed by the plugin.

**Returns an object with the following:**

|Value|Description|Type|
|--|--|--|
|tag|The URL of the ad schedule.|String|
|client|The ad client in use for the ad schedule.|String|
|adbreaks|An array of objects, each containing information about an ad break.|Array|

* * *

## Metadata

This API call allows developers to listen for metadata embedded in the media file (e.g. dimensions or ID3 timed metadata in HLS streams).

### jwplayer().on('meta')

Triggered when playback enters the time range where new metadata becomes active. Metadata can be returned in one of the following formats listed below.

#### Date range metadata

Fires when playback enters the section of an HLS stream tagged with `#EXT-X-DATERANGE`

```json
{
  "type": "meta",
  "metadataType": "date-range",
  "metadataTime": 10,
  "metadata": {
    "tag": "EXT-X-DATERANGE",
    "content": "ID=309726842,PLANNED_DURATION=30.000,START_DATE=2018-10-30 20:45:29.216158+00:00,SCTE35-OUT=TBD",
    "attributes": [
      {
        "name": "ID",
        "value": "309726842"
      },
      {
        "name": "PLANNED_DURATION",
        "value": 30
      },
      {
        "name": "START_DATE",
        "value": "2018-10-30 20:45:29.216158+00:00"
      },
      {
        "name": "SCTE35-OUT",
        "value": "TBD"
      }
    ],
    "start": 10,
    "end": 40,
    "startDate": "2018-10-30 20:45:29.216158+00:00",
    "endDate": null,
    "duration": 30.0
  }     
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS `#EXT-X-DATERANGE` tag<br/><br/>`attributes`: (Array) `EXT-X-DATERANGE:<attribute-list>`<br/><br/>`content`: (String) Content following the HLS tag<br/><br/>`duration`: (Number) Duration of the `EXT-X-DATERANGE`<br/><br/>`end`: (Number) End time of the cue in seconds, relative to `currentTime` of stream<br/><br/>`endDate`: (String) `EXT-X-DATERANGE` end date in UTC<br/><br/>`start`: (Number) Start time of the cue in seconds, relative to `currentTime` of stream<br/><br/>`startDate`: (String) `EXT-X-DATERANGE` start date in UTC<br/><br/>`tag`: (String) Name of the HLS manifest tag<br/>This is always `EXT-X-DATERANGE` for this event.|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `date-range` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### ID3 metadata

Fires when playback enters the section of an HLS stream containing ID3 tags

```json
{
  "type": "meta",
  "metadataType": "id3",
  "metadataTime": 0,
  "metadata": {
    ...          
  }
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS ID3 tag|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `id3` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### Media metadata

Fires when the initial metadata of a video has loaded

```json
{
  "type": "meta",
  "metadataType": "media",
  "duration": 60,
  "height": 1280,
  "width": 720,
  "seekRange": {
    "start": 0,
    "end": 60
  }
}
```

|Value|Description|Type|
|---|---|---|
|`duration`|Length of the media asset|Number|
|`height`|Height dimension of the media asset|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `media` for this event subcategory.|String|
|`seekRange`|Time range representing how much video is available to buffer in live stream or for seeking in DVR<br/><br/>`end`: (Number) End time of the time range in seconds, relative to `currentTime` of stream<br/><br/>`start`: (Number) Start time of the time range in seconds, relative to `currentTime` of stream|Object|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|
|`width`|Width dimension of the media asset|Number|

#### Program-date-time metadata

Fires when playback enters the section of an HLS stream tagged with `#EXT-X-PROGRAM-DATE-TIME`

```json
{
  "type": "meta",
  "metadataType": "program-date-time",
  "programDateTime": "2018-09-28T16:50:46Z",
  "metadataTime": 19.9,
  "metadata": {
    "programDateTime": "2018-09-28T16:50:46Z",
    "start": 19.9,
    "end": 29.9
  }
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS `#EXT-X-PROGRAM-DATE-TIME` tag<br/><br/>`end`: (Number) End time of the cue in seconds, relative to `currentTime` of stream<br/><br/>`programDateTime`: (String) Date and time of the program metadata in UTC<br/><br/>`start`: (Number) Start time of the cue in seconds, relative to `currentTime` of stream|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `program-date-time` for this event subcategory.|String|
|`programDateTime`|Date and time of the program metadata in UTC|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### SCTE-35 metadata

Fires when playback enters a section of an HLS stream tagged with `#EXT-X-CUE-OUT`, `#EXT-X-CUE-IN`

```json
{
  "type": "meta",
  "metadataType": "scte-35",
  "metadataTime": 10,
  "metadata": {
    "tag": "EXT-X-CUE-OUT",
    "content": "...",
    "start": 10,
    "end": 40
  }
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS `#EXT-X-CUE-OUT`, `#EXT-X-CUE-IN` tags<br/><br/>`content`: (String) Content following the HLS manifest tag<br/><br/>`end`: (Number) End time of the cue in seconds, relative to `currentTime` of stream<br/><br/>`start`: (Number) Start time of the cue in seconds, relative to `currentTime` of stream<br/><br/>`tag`: (String) Name of the HLS manifest tag<br/>This is always `EXT-X-CUE-OUT` or `EXT-X-CUE-IN` for this event.|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `scte-35` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### Unknown metadata

Indicates that a meta event from a third-party media provider or legacy Flash has fired

```json
{
  "type": "meta",
  "metadataType": "unknown",
  ...
}
```

|Value|Description|Type|
|---|---|---|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `unknown` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

### jwplayer().on('metadataCueParsed')

Triggered once the metadata cue point is buffered

#### Date range metadata

Fires when the player buffers a section of an HLS stream tagged with `#EXT-X-DATERANGE`

```json
{
  "type": "meta",
  "metadataType": "date-range",
  "metadataTime": 10,
  "metadata": {
    "tag": "EXT-X-DATERANGE",
    "content": "ID=309726842,PLANNED_DURATION=30.000,START_DATE=2018-10-30 20:45:29.216158+00:00,SCTE35-OUT=TBD",
    "attributes": [
      {
        "name": "ID",
        "value": "309726842"
      },
      {
        "name": "PLANNED_DURATION",
        "value": 30
      },
      {
        "name": "START_DATE",
        "value": "2018-10-30 20:45:29.216158+00:00"
      },
      {
        "name": "SCTE35-OUT",
        "value": "TBD"
      }
    ],
    "start": 10,
    "end": 40,
    "startDate": "2018-10-30 20:45:29.216158+00:00",
    "endDate": null,
    "duration": 30.0
  }     
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS `#EXT-X-DATERANGE` tag<br/><br/>`attributes`: (Array) `EXT-X-DATERANGE:<attribute-list>`<br/><br/>`content`: (String) Content following the HLS tag<br/><br/>`duration`: (Number) Duration of the `EXT-X-DATERANGE`<br/><br/>`end`: (Number) End time of the cue, in seconds, relative to `currentTime` of stream<br/><br/>`endDate`: (String) `EXT-X-DATERANGE` end date in UTC<br/><br/>`start`: (Number) Start time of the cue, in seconds, relative to `currentTime` of stream<br/><br/>`startDate`: (String) `EXT-X-DATERANGE` start date in UTC<br/><br/>`tag`: (String) Name of the HLS manifest tag<br/>This is always `EXT-X-DATERANGE` for this event.|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `date-range` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### ID3 metadata

Fires when playback buffers a section of an HLS stream containing ID3 tags

```json
{
  "type": "meta",
  "metadataType": "id3",
  "metadataTime": 0,
  "metadata": {
    ...          
  }
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS ID3 tag|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `id3` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### Program-date-time metadata

Fires when the player buffers a section of an HLS stream tagged with `#EXT-X-PROGRAM-DATE-TIME`

```json
{
  "type": "meta",
  "metadataType": "program-date-time",
  "programDateTime": "2018-09-28T16:50:46Z",
  "metadataTime": 19.9,
  "metadata": {
    "programDateTime": "2018-09-28T16:50:46Z",
    "start": 19.9,
    "end": 29.9
  }
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS `#EXT-X-PROGRAM-DATE-TIME` tag<br/><br/>`end`: (Number) End time of the cue, in seconds, relative to `currentTime` of stream<br/><br/>`programDateTime`: (String) Date and time of the program metadata in UTC<br/><br/>`start`: (Number) Start time of the cue, in seconds, relative to `currentTime` of stream|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `program-date-time` for this event subcategory.|String|
|`programDateTime`|Date and time of the program metadata in UTC|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

#### SCTE-35 metadata

Fires when the player buffers a section of an HLS stream tagged with `#EXT-X-CUE-OUT`, `#EXT-X-CUE-IN`

```json
{
  "type": "meta",
  "metadataType": "scte-35",
  "metadataTime": 10,
  "metadata": {
    "tag": "EXT-X-CUE-OUT",
    "content": "...",
    "start": 10,
    "end": 40
  }
}
```

|Value|Description|Type|
|---|---|---|
|`metadata`|Object containing all of the information relevant to the HLS `#EXT-X-CUE-OUT`, `#EXT-X-CUE-IN` tags<br/><br/>`content`: (String) Content following the HLS manifest tag<br/><br/>`end`: (Number) End time of the cue, in seconds, relative to `currentTime` of stream<br/><br/>`start`: (Number) Start time of the cue, in seconds, relative to `currentTime` of stream<br/><br/>`tag`: (String) Name of the HLS manifest tag<br/>This is always `EXT-X-CUE-OUT` or `EXT-X-CUE-IN` for this event.|Object|
|`metadataTime`|Start time, in seconds, of the metadata cue|Number|
|`metadataType`|Subcategory of `meta` event<br/><br/>This is always `scte-35` for this event subcategory.|String|
|`type`|Category of player event<br/><br/>This is always `meta` for this event.|String|

* * *

## Sharing

 Sharing API calls work in conjunction with our `getPlugin() method`. For instance, all of our sharing instances are using the `getPlugin(‘sharing’)` API call to refer to this particular plugin. The following will target our sharing plugin:

```
jwplayer().on('ready', function(event){
sharingPlugin = jwplayer().getPlugin('sharing');
});
```

All sharingPlugin references below will assume that the above code is implemented on your page.

### sharingPlugin.open()
Opens the sharing plugin. This will also pause content if it is triggered during playback.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### sharingPlugin.close()
Closes the sharing plugin if it is opened. This will resume playback if the sharing overlay was triggered during content.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### sharingPlugin.on('open')
Listens for the opening of the plugin.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### sharingPlugin.on('close')
Listens for the closing of the plugin.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### sharingPlugin.on('click')
Triggered whenever somebody shares content from within the sharing plugin.

**Returns an object with the following:**

|Value|Description|Type|
|-------|-----------|----|
|method|Label of the sharing method that was used|String|

## Related

Similar to sharing, the related API examples below will assume that one of the following code samples is implemented:

<strong>JW 8.9.0+</strong>

```
jwplayer().on('relatedReady', function(event){
  relatedPlugin = jwplayer().getPlugin('related');
});
```

<strong>&#8804; JW 8.8.6</strong>

```
jwplayer().on('ready', function(event){
relatedPlugin = jwplayer().getPlugin('related');
});
```

### relatedPlugin.open();
Opens the recommendations user interface. If the `displayMode` is set to overlay, this will pause content if it is currently playing.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### relatedPlugin.close();
Closes the recommendations user interface. This will resume content.

|Value|Description|Type|
|----|--------|---|
|- | No value returned | - |

### relatedPlugin.on('open');
Triggers when the recommendations interface is opened.

**Returns an object with the following:**

|Value|Description|Type|
|-------|-----------|----|
|method|The method used to open the plugin. (api, complete, or click)|String|
|url|URL of the feed that was loaded into the player.|String|
|items|An object of all objects that have been loaded into the related plugin.|Object|

### relatedPlugin.on('close');
Triggers when the recommendations interface is closed.

**Returns an object with the following:**

|Value|Description|Type|
|-------|-----------|----|
|method|The method used to open the plugin. (api, complete, or click)|string|

### relatedPlugin.on('play');
Triggers when a user selects an object in a related feed.

**Returns an object with the following:**

|Value|Description|Type|
|-------|-----------|----|
|item|Metadata for the chosen item specified in the feed.|Object|
|auto|Returns true if started via autoplay; false if manually started.|Boolean|
|position|Ordinal position of the related video that has been chosen.|Number|

<br/>

## v7 API Reference

View the [JW7 Javascript API Reference](jw7/index.md).

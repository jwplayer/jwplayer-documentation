#Javascript API Reference

This article provides a reference to all available JW Player [JavaScript API](http://www.jwplayer.com/products/jwplayer/javascript/) calls.

## Table Of Contents


* [Setup & Misc](#setup)
* [All](#all)
* [Playlist](#playlist)
* [Buffer](#buffer)
* [Playback](#playback)
* [Seek](#seek)
* [Volume](#volume)
* [Resize](#resize)
* [Quality](#quality)
* [Audio](#audio)
* [Captions](#captions)
* [Controls](#controls)
* [Advertising](#advertising)
* [Metadata](#metadata)
* [Sharing](#sharing)
* [Related](#related)


Also, note that all Events below are using the on listener, however it is also possible to register or remove each event with on, once, or off. The use of trigger may also be used for custom events. For an introduction to JW7's API, see the [JavaScript API Quick Start](/api/javascript_api_introduction/).

Happy coding!

* * *

## <a name="setup"></a>Setup

These API calls are used to create players and provide setup information. Both setup() and remove() fall under Miscellaneous due to the fact that they are not actually setting, but are rather building and removing players.

###jwplayer( _div_ ).setup( _options_ )
Creates a new JW Player on your web page.

|Attribute(s)|Description|Type| Required|
|--|--------|---|--|
|div| The target div that JW Player will replace | String |Yes|
|options| Configuration options that will tell your player how to render itself | JSON |Yes|

 The only required option when setting up a JW Player embed is the __file__ property. See the [Configuration Options Reference](/customization/configuration-reference/) for a full list of all JW Player configuration options.
####Sample
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


###jwplayer().remove()

Being the reverse of the setup() call, this call will remove a JW Player from the page. It ensures the player stops playback, the DOM is re-set to its original state and all event listeners and timers are cleaned up. Any event listeners will need to be reinstantiated if another player is set up.

###jwplayer().getProvider()

Returns the provider being utilized by JW Player for a particular media file. This replaces JW6's getRenderingMode(), as JW7 will always technically render in html5 mode, even if it is using a flash-based provider.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|name | The name of the provider currently being used|String|

####List of possible providers:
|Values|Description|
|----|--------|
|flash_video |Static video file with our Flash provider|
|flash_rtmp |Streaming media, utilizing Adobe's RTMP protocol|
|flash_adaptive |Streaming HLS using Adobe Flash|
|flash_sound |Static audio file with Flash provider|
|html5 |Displays whenever content renders natively within a video tag|
|shaka <sup>7.0+</sup>|MPEG Dash Provider|
|caterpillar <sup>7.4+</sup> |HLS content rendering with HLS HTML5 provider|

###jwplayer().getContainer()

Returns the entire HTML of the div in which a JW Player instance exists. This includes all IDs, styles, classes, and content.

###jwplayer().getPlugin()

Targets a particular plugin for API calls. Currently functions with our [Sharing](#sharing) and [Related](#related) plugins.

* * *

###jwplayer().on('ready')

Signifies when the player has been initialized in either Flash or HTML5 and is ready for playback. This is the earliest point at which any API calls should be made.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|setupTime | The amount of time (in milliseconds) for the player to go from setup() to ready.|Number|


###jwplayer().on('setupError')

Fired when neither the Flash nor HTML5 player could be set up.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|message | The error message that describes why the player could not be set up|String|


###jwplayer().on('remove')

Triggered when the player is taken off of a page via jwplayer().remove();

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

* * *


## <a name="all"></a>All

###jwplayer().on('all')

This singular API call can be used to gather all events from the player's API. 
####Note: This will output a large amount of information and may degrade browser performance if it is used for an extended period of time.

* * *

## <a name="playlist"></a>Playlist

These API calls are used for loading and retrieving the current playlist (of one or more items), as well as for navigating between playlist items. When accessed via the API, a playlist is an Array, containing one or more objects. Each of these objects contains the following:

|Value|Description|Type|
|----|--------|---|
| description | A description specified inside of the playlist | String |
| mediaid | A unique media identifier for a particular piece of content, regardless of the format used | String |
| file | Provides a shortcut to sources[0].file.  Alternative files are listed in the __allSources__ array | String |
| image | The poster image file loaded inside of the player | String |
| preload | Preload status for current item. Can be: metadata &#124; auto &#124; none | String |
| title | The title of the playlist item | String |
| tracks | The full array of tracks included with the playlist item, similar to getCaptionsList() | Array |
| sources | An array that contains a single object with information about the currently utilized source | Array |
| allSources | An array of all configured sources for the current playlist item | Array |

####Note: Each playlist item has a file property at the highest level, which acts as a shortcut to the file of the first entry in the sources object.

####The __sources__ array contains a single object with information about the currently utilized source:

|Value|Description|Type|
|----|--------|---|
|file|The file used in the source array item|String|
|label|A label assigned to a particular quality|String|
|type|The media type|String|
|default|If this media source has been defined as a default for playback|Boolean|

####The __tracks__ array contains a list of objects based on any configured tracks:

|Value|Description|Type|
|----|--------|---|
|file|The file used containing any utilized tracks|String|
|label|If using captions, the configured label assigned to a particular quality|String|
|kind|The type of tracks assigned to the video. Can be: captions &#124; chapters &#124; thumbnails |String|

* * *

###jwplayer().getPlaylist()

Returns an array of objects from a playlist. Any additional custom playlist properties will also be returned. See the [playlist](#playlist) section above for the structure of these objects.

|Description|Type|
|--------|---|
|An array of objects from the current playlist| Array |

###jwplayer().getPlaylistItem(__index__)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Retrieves the same information as getPlaylist(), but for a single playlist item| Number |No|

####If no number is specified, the current playlist item's information will be returned. 

###jwplayer().getPlaylistIndex()

|Description|Type|
|--------|---|
|The numerical index of the currently loaded playlist item.| Number |

###jwplayer().load(__playlist__)

Loads a new playlist into the player.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|playlist| The playlist to load into the player. |Array &#124; String |Yes|

####Types of Playlists

|Description|Type|
|--------|---|
| An array of playlist item objects. See above for correct syntax|Array|
| A URL referencing the location of an RSS/XML/JSON file|String|

####JSON Playlist Example

```
  jwplayer('myElement').load([{
	"file": "/videos/myVideo.mp4",
	"image": "/images/myImage.png",
	"title": "My Favorite Video!",
	"description": "This has lots of kittens in it!"
}]);
```

####Playlist URL Example
```
jwplayer().load("https://mywebsite.com/myplaylist.json");
```

###jwplayer().playlistItem(__index__)
Start playback of the playlist item at the specified index.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| The index of a playlist item you wish to play |Number|Yes|

* * * 

###jwplayer().on('playlist')

Fired when an entirely new playlist has been loaded into the player. 
####Note: This event is not fired as part of the initial playlist load. Please use on('ready') in these cases.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| playlist | The new playlist array; Provides the same output as getPlaylist() | Array |

###jwplayer().on('playlistItem')

Fired when the playlist index changes to a new playlist item. This event occurs before the player begins playing the new playlist item. 

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| index | Index of the currently playing playlist item | Number |
| item | The current playlist item; Provides the same output as getPlaylistItem() | Object |

###jwplayer().on('playlistComplete')
Fired when the player is done playing all items in the playlist. If the repeat option is set true, this will not be triggered.

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

* * *

## <a name="buffer"></a>Buffer

These API calls are used to update clients with the percentage of a file that is buffered into the player. This only applies to VOD media; live streaming media (_HLS/RTMP/YouTube/DASH_) does not expose this behavior.

###jwplayer().getBuffer()

|Description|Type|
|--------|---|
| A percentage (0-100) of the video's current loaded amount | Number |

* * * 

###jwplayer().on('bufferChange')

Fired when the currently playing item loads additional data into its buffer.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| duration | Current media's duration (In seconds) | Number |
| bufferPercent | Percentage between 0 and 100 of the current media that is buffered. | Number |
| position | Current position of the media file (In seconds) | Number |
| metadata <sup>Flash HLS-Only</sup> | Contains __bandwidth__ and __droppedFrames__ values. See below for more info. | Object |

####Metadata Object
|Value|Description|Type|
|----|--------|---|
| bandwidth | Current download speed in bits per second. | Number |
| droppedFrames | Amount of dropped frames caused by a buffer change. | Number |


* * *

## <a name="playback"></a>Playback

These API calls are used to retrieve and change the current playback state of the player. Playback controllers are listed under Miscellaneous, as they directly control playback rather than the player state.

####Note: JW7 will return playback states in lower case. If you are using JW6, states will be returned in all capital letters. We suggest using [toUpperCase()](http://www.w3schools.com/jsref/jsref_touppercase.asp) if this affects your API setup.

###jwplayer().play(__state__)

Sets the play state of the JW Player.

|Attribute|Description|Type|Required|
|--|--------|---|--|
|state|The desired __play__ state. Setting this to false will put the player into a __paused__ state. Omitting __state__ will toggle playback| Boolean | No|


###jwplayer().pause(__state__)

The opposite of play(); sets the pause state of JW Player. 

|Attribute|Description|Type|Required|
|--|--------|---|--|
|state|The desired __pause__ state. Setting this to false will put the player into a __playing__ state. Omitting __state__ will toggle playback| Boolean | No|

###jwplayer().stop()

Stops the player (returning it to the idle state) and unloads the currently playing media file.

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###jwplayer().getState()

Returns the player's current playback state.

|Returns|Description|Type|
|----|--------|--|
|idle |Either playback has not started or playback was stopped due to a stop() call or an error. In this state, either the play or the error icon is visible in the display.| String|
|buffering|The user pressed play, but sufficient data to start playback has not yet loaded. The buffering icon is visible in the display.| String|
|playing|The video is currently playing. No icon is visible in the display.| String|
|paused|The video is currently paused. The play icon is visible in the display.| String|

* * * 

###jwplayer().on('play')

Fired when the player enters the playing state.

####Returns an object with the following:

|Value|Description|Possible Outputs|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing |String|

###jwplayer().on('pause')

Fired when the player enters the paused state.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing |String|

###jwplayer().on('buffer')

Fired when the player enters the buffering state.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing |String|
|newstate |The state the player moved to.|idle &#124; playing &#124; paused|String|
|reason |The reason why a buffer event occurred.|loading &#124; complete &#124; stalled &#124; error|String|

###jwplayer().on('idle')

Fired when the player enters the idle state.

####Returns an object with the following:

|Value|Description|Possible Outputs|Type|
|----|--------|--|--|
|oldstate |The state the player moved from.|buffering &#124; playing &#124; paused|String|

###jwplayer().on('complete')

Fired when an item completes playback.

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###jwplayer().on('firstFrame')

Use this to determine the period of time between a user pressing play and the same user viewing their content. Triggered by a video's first frame event (Or the instant an audio file begins playback). This event pinpoints when content playback begins.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| loadTime | The amount of time (In milliseconds) it takes for the player to transition from a play attempt to a firstFrame event.  | Number |

###jwplayer().on('error')

Fired when a media error has occurred, causing the player to stop playback and go into idle mode.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| message | The error message that has been detected. See [Troubleshooting your Setup](http://support.jwplayer.com/customer/portal/articles/1403682-troubleshooting-your-setup) for a list of possible media errors.  | String |

####Note: A media error event is not fired when a player setup error occurs. We suggest using setupError to catch these types of issues.

* * *

## <a name="seek"></a>Seek

These API calls are used to retrieve and update the current media playback position.


###jwplayer().getPosition()

Intended to return the viewer's current position in a media file. Values may vary depending on the type of media. See the table below for more information.

|Media Type|Description|Type|
|----------|--------|---|
|VOD| The current playback position for a VOD file, in seconds | Number |
|Live| How long the current stream has been playing, in seconds | Number |
|DVR| A negative value, indicating how far behind the viewer is from the stream's live position.<sup>1</sup> | Number |

####<sup>1</sup> Seeking to a live position will include a buffer of approximately -30 seconds.

###jwplayer().getDuration()

The total length of the media file. This varies depending on VOD or live content. See the table below for more information.

|Media Type|Description|Type|
|----------|--------|---|
|VOD| The length of a loaded VOD file, in seconds | Number |
|Live| Live streams will always return a duration of __infinity__ | Number |
|DVR| The total amount of buffer in the DVR stream, in seconds | Number |


###jwplayer().seek(_position_)

Jump to the specified position within the currently playing item.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|position| The position (in seconds) to seek to |Number |Yes|

* * *

###jwplayer().on('seek')

Fired after a seek has been requested either by scrubbing the controlbar or through the API.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| position | The position of the player before the player seeks (in seconds).  | Number |
| offset | The position that has been requested to seek to (in seconds). | Number |

####Note: Seeking is often based on keyframe availability. The actual position the player will eventually seek to may differ from what was specified. 

###jwplayer().on('seeked')

Triggered when video position changes after seeking, as opposed to on('seek') which triggers as a seek occurs.

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###jwplayer().on('time')

While the player is playing, this event is fired as the playback position gets updated. This may occur as frequently as 10 times per second.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| duration | Duration of the current playlist item in seconds.  | Number |
| position | Playback position in seconds. | Number |

* * *

## <a name="volume"></a>Volume

These API calls are used to change the playback volume of the player. 

####Note: Setting volume will only work on desktop browsers, not on mobile devices.

###jwplayer().getMute()

|Description|Type|
|--------|---|
|If the player is currently muted or not | Boolean |

####Note: This may be independent from the volume value. Volume 0 does not mean that content is set to mute.

###jwplayer().getVolume()

|Returns|Type|
|--------|---|
|The current playback volume, as a percentage from 0 to 100. | Number |

###jwplayer().setMute(_state_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|state| Set the mute state of the player. If the state is undefined, mute is toggled. |Boolean|No|

###jwplayer().setVolume(_volume_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|volume| Set the volume of the player between 1-100 |Number |Yes|

* * *

###jwplayer().on('mute')

Triggered when the player has gone in or out of a mute state.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| mute | The player's new mute state  | Boolean |

###jwplayer().on('volume')

Triggered when the player's volume is changed.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| volume | New volume percentage (0-100)  | Number |

* * *

## <a name="resize"></a>Resize

These API calls are used to retrieve and update the current player dimensions and fullscreen state. 

####Note: There is no API call to set fullscreen, due to phishing-related security restrictions in both Flash and HTML5.

###jwplayer().getFullscreen()

|Returns|Type|
|--------|---|
| The current fullscreen state; true if fullscreen, false if not | Boolean |

###jwplayer().getHeight()

|Returns|Type|
|--------|---|
| The player's current height, in pixels | Number |

###jwplayer().getWidth()

|Returns|Type|
|--------|---|
| The player's current width, in pixels | Number |


###jwplayer().resize(__width__, __height__)

Resizes the player to the specified width and height.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|width| The new desired width of the player in pixels (number) or percent (string) |Number &#124; String|Yes|
|height| The new desired height of the player. Must be specified in pixels (number)|Number |Yes|

####Example:
```
jwplayer().resize('50%', 250)
```

* * *

###jwplayer().on('fullscreen')

Fired when the player toggles to/from fullscreen.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| fullscreen | The player's new fullscreen state | Boolean |

###jwplayer().on('resize')

Fired when the player's on-page dimensions have changed. Is not fired in response to a fullscreen change.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| width | The new width of the player | Number |
| height | The new height of the player | Number |


* * *

## <a name="quality"></a>Quality

These API calls are used to listen to or update the video quality if multiple quality levels of a video are provided. Quality levels are sorted and given index numbers. 

####Note: An index of 0 will __always__ be "Auto".

###jwplayer().getQualityLevels()

|Description|Type|
|--------|---|
| Returns an array of objects based on each quality level of a media item | Array |

####Each object contains the following:

|Value|Description|Type|
|----|--------|---|
| bitrate | The bitrate of the media file  | Number |
| height | The height of the media file  | Number |
| width | The width of the media file  | Number |
| label | The label used for a quality  | String |

###jwplayer().getCurrentQuality()

Returns the index of the current active quality level. The indexes provided vary based on the amount of available qualities. See the table below to understand how quality indexes function

|Description|Type|
|--------|---|
| Index of the current quality | Number |

###jwplayer().getVisualQuality()

Returns an object containing information about the current quality of a video stream. 

|Value|Description|Type|
|----|--------|---|
| mode | The current quality mode. Can be __auto__ if adaptive is enabled or __manual__ if a static quality is set | String |
| level | Information about the current selected quality. See getQualityLevels for the full list of available information| Object |
| reason | The reason that a quality was selected. See table below for more information | String |

####List of Reasons
|Reason|Description|
|--------|---|
|initial choice| The user had this quality set as a default and did not change it |
|auto| An automatic quality change occurred|
|api| The user chose a static quality after playback began, or an API was used to set it |

###jwplayer().setCurrentQuality(_index_)

Change the quality level to the provided index. The index must not exceed the amount of available qualities.

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Sets stream quality to a specified index |Number|Yes|

* * *

###jwplayer().on('levels')

Fired when the list of available quality levels is updated. Happens e.g. shortly after a playlist item starts playing. 

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|width|The new width of the player  | Number |
|levels|The full array of qualities, including the new additions. Includes the same information as getQualityLevels() | Array|

###jwplayer().on('levelsChanged')

Fired when the active quality level is changed. Happens in response to e.g. a user clicking the controlbar quality menu or a script calling setCurrentQuality.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| currentQuality | index of the new quality level in the getQualityLevels() array | Number |

###jwplayer().on('visualQuality')

Fired when the active quality level is changed for HLS. This is different than __levelsChanged__ since this will trigger when adaptive streaming automatically shifts quality.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| mode | The current type of quality selection. auto = automatic quality switching &#124; manual = static quality  | String |
| label | Information about the new quality that was switched to. This returns the same information as getVisualQuality()  | String |
| reason | Why the quality was changed. See table below for possible reasons  | String |

####Possible Reasons

|reason|Description|
|--------|---|
|initial choice| The user had this quality set as a default and did not change it |
|auto| An automatic quality change occurred|
|api| The user chose a static quality after playback began, or an API was used to set it |

* * *

## <a name="audio"></a>Audio Tracks API

These API calls are used to listen to or update the audio track if multiple audio tracks of a video are provided.

###jwplayer().getAudioTracks()

|Returns|Type|
|--------|---|
| An array of each audio track object. These are based on information listed in the M3U8 manifest | Array |

|Value|Description|Type|
|----|--------|---|
| autoselect | If no explicit preference is chosen, can be chosen based on system language | Boolean |
| defaulttrack | Returns true if the track should be chosen by default | Boolean |
| language | The two-letter [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the chosen audio track | String |
| name | The given name for the chosen audio track | String |

###jwplayer().getCurrentAudioTrack()

|Returns|Type|
|--------|---|
|The index of the currently active audio track. Will return -1 if there are no alternative audio tracks| Number |

###jwplayer().setCurrentAudioTrack(_index_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Change the audio track to the provided index. |Number|Yes|

* * *

###jwplayer().on('audioTracks')

Fired when the list of available audio tracks is updated. Happens shortly after a playlist item starts playing.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| levels | An array containing the new audio track objects. Returns the same information as getAudioTracks() | Array |

###jwplayer().on('audioTrackChanged')

Fired when the active audio track is changed. Happens in response to e.g. a user clicking the audio tracks menu or a script calling setCurrentAudioTrack().

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| currentTrack | Index of the new quality level in the getAudioTracks() array.  | Number |

* * *

## <a name="captions"></a>Captions

These API calls are used to listen to or update the active captions track if one or more closed captions tracks are provided with a video. This API can be used to log captions usage or build your own CC menu outside JW Player. Using setCaptions(), which is new in JW 7.5, it is also possible to set caption styles dynamically, without having to reload the player.
####Note: An index of 0 implies that captions are off.

###jwplayer().setCaptions(_styles_)<sup>7.5+</sup>

Changes the appearance of captions without having to reload the player. All colors should be in hex value. 

|Attribute|Description|Type| Required|
|---|--------|---|--|
|styles|An object containing the desired caption styles and values (See example below) |Object|Yes|

|Value|Description|Type|Default|
|--------|---|--|
|color|Text color|String|#ffffff|
|fontSize|The size of text. _Note: Does not affect cases where native rendering occurs_|Number|20|
|fontFamily|The style of text to use|String|Arial, sans-serif|
|fontOpacity|Adjusts the transparency of text as a percentage|Number|100|
|backgroundColor|The color of the text background|String|#000000|
|backgroundOpacity|Adjusts the transparency of the text background as a percentage|Number|100|
|edgeStyle| Surrounds text with a particular style. Can be: **none &#124; dropshadow &#124; raised &#124; depressed &#124; uniform**|String|none|
|windowColor| Surrounds text box with chosen color from edge to edge of the video|String|-|
|windowOpacity| Sets the transparency of the window as a percentage|Number|-|


**Example:** jwplayer().setCaptions({"color": "#ffffff", "backgroundColor": "#000000"});

###jwplayer().getCaptionsList()

Returns an array of objects based on available captions. Information for each object may vary depending on the caption types.
**Note:** The index of [0] will always be **off** and will always be returned even if no captions are present.

####Sideloaded Captions(VTT, SRT, DFXP)

|Value|Description|Type|
|----|--------|---|
| id | The URL of the sideloaded caption file | String |
| label | The label that is configured in the player setup. | String |

####Stream-Embedded Captions

|Value|Description|Type|
|----|--------|---|
| id | The index of the caption. | Number |
| label | The label specified within the embedded captions | String |

###jwplayer().getCurrentCaptions()

|Description|Type|
|--------|---|
| The index of the currently active captions track. | Number |

###jwplayer().setCurrentCaptions(_index_)

|Attribute|Description|Type| Required|
|--|--------|---|--|
|index| Change the visible captions track to the provided index  |Number|Yes|

* * *

###jwplayer().on('captionsList')

Fired when the list of available captions tracks changes. This event is the ideal time to set default captions with the API.

**Note:** 'captionsList' will always return an array of at least **1** item due to **off**, but will trigger again once captions are fully loaded. We suggest only changing captions when the tracks array length exceeds **1**.

####Returns an array with the following:

|Value|Description|Type|
|----|--------|---|
| tracks | An array with all included captions tracks(Including "off"). Includes the same information as getCaptionsList() | Array |

###jwplayer().on('captionsChanged')

Triggered whenever the active captions track is changed manually or via API.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| currentTrack | Index of the new active captions track  | Number |

* * *

## <a name="controls"></a>Controls

This API call allows developers to interact with the built-in player controls (dock buttons, controlbar and display icons). 

####Note: Controls will still fade out during playback if the video has no keyboard/mouse focus. When controls are disabled, JW Player is completely chrome-less.

###jwplayer().getControls()

|Description|Type|
|--------|---|
| Returns whether or not the built-in controls are currently enabled | Boolean |

###jwplayer().getSafeRegion()

Used to ensure that any visual assets don't overlap with JW Player controls. 

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| x | Starting point on the X axis with JW Player. Will always be 0. | Number |
| y | Starting point on the Y axis with JW Player. Will always be 0.  | Number |
| width | Current viewable container width  | Number |
| height | Current viewable container height, subtracting control bar height  | Number |

###jwplayer().addButton(_icon, label, handler, id_)

Adds a button to the player's dock. Can be used to add multiple buttons.

|Attribute|Description|Type|Required|
|----|--------|---|
|icon|The URL to a GIF, JPG or PNG image that is displayed in the button. Monochromatic, white icons of about 20x20 pixels work well with many skins.|String|Yes|
|label|The label that appears as a tooltip when the button is moused over.|String|Yes|
|Handler|The JavaScript function that is called when the button is clicked.|String|Yes|
|id|The string used to identify the button. It must be unique across all buttons (an error is thrown otherwise).|String|Yes|

###jwplayer().removeButton(_id_)

Removes a button from the dock.

|Attribute|Description|Type|Required|
|----|--------|---|-|
|id|The id used to identify the button to remove.|String|Yes|

###jwplayer().setControls(_state_)

|Attribute|Description|Type|Required|
|----|--------|---|-|
|state|Sets the display of the built-in JW Player controls. Not including a state will toggle the appearance.|Boolean|No|

* * *

###jwplayer().on('controls')

Fired when controls are enabled or disabled by a script.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
| controls | New state of the controls.  | Boolean |

###jwplayer().on('displayClick')

Fired when a user clicks the video display. Especially useful for wiring your own controls when the built-in ones are disabled. 
####Note: The default click action (toggling play/pause) will still occur if controls are enabled.

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

* * *

## <a name="advertising"></a>Advertising

!!!important
Video ad insertion requires a JW Player Platinum or Enterprise license. Please [contact our team](https://www.jwplayer.com/get-started/) to upgrade your account.
!!!

This API provides developers with more control over the functionality of the Advertising edition of JW Player. For VAST and IMA plugins, this API allows for things like impression verification, custom scheduling, and multiple companions.

###jwplayer().playAd(_tag_)

Used to play an ad immediately, which is primarily useful for situations where the built-in ad schedule of JW Player cannot be used.(e.g. for live streaming or dynamic ads for playlist items)

|Attribute|Description|Type|Required|
|----|--------|---|--|
|tag|The VAST tag URL that should be loaded into the player.|String|Yes|


We recommend to call playAd() in one of these following situations:

1.  inside a JW Player event handler for beforePlay(), to trigger a pre-roll.
2.  inside a JW Player event handler for onTime(), to trigger a mid-roll.
3.  inside a event handler for onBeforeComplete(), to trigger a post-roll.
4.  Outside of event handlers, only when the player is in the playing state.

####Note: As of JW Player 7.0.0, playAd() supports waterfalling via arrays of different ad tags. This will only work when our VAST client is utilized.

* * *

###jwplayer().on('adBlock') <sup>JW 7.3+</sup>

 This event is fired when an ad plugin (Either VAST or Google IMA) is configured inside of the JW Player setup, and an ad blocker is detected on a viewer's browser. It is then possible to request a user disable their ad blocker to proceed.

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>


###jwplayer().on('beforePlay')

Fired just before the player begins playing. Unlike the onPlay event, the player will not have begun playing or buffering when triggered, which makes this the right moment to insert preroll ads using playAd().

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>


###jwplayer().on('beforeComplete')

Fired just before the player completes playing. Unlike the onComplete event, the player will not have moved on to either showing the replay screen or advancing to the next playlistItem, which makes this the right moment to insert post-roll ads using playAd(). 

<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###jwplayer().on('adClick')

VAST and IMA. Fired whenever a user clicks an ad to be redirected to its landing page.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | The type of ad that is being played|-|String|
|tag | The URL of the ad tag that was clicked|-|String|

###jwplayer().on('adCompanions')

VAST and IMA. Fired whenever an ad contains companions.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|companions | An array with available companion information|Array|
|tag | The URL of the ad tag that is currently playing|String|

####Every companion will return the following object:

|Value|Description|Type|
|----|--------|---|
|click | URL to link to when clicking the companion. Only available if the type is static|String|
|height | The height of the companion in pixels|Number|
|resource | The URL to the static/iframe resource, or the raw HTML content|String|
|type | The type of the creative: static, iframe, or HTML|String|
|width | The width of the companion in pixels|Number|
|creativeview <sup>7.5</sup> | An array of included creativeview event tracking pixels|Array|


###jwplayer().on('adComplete')

VAST and IMA. Fired whenever an ad has completed playback.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | The type of ad that is just completed|-|String|
|tag | The URL of the ad tag that just completed|-|String|

###jwplayer().on('adSkipped')
VAST and IMA. Fired whenever an ad has been skipped.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | The type of ad that was skipped|-|String|
|tag | The URL of the ad tag that was skipped|-|String|


###jwplayer().on('adError')

VAST and IMA. Fired whenever an error prevents the ad from playing. 

####Note: This may fire multiple times for a single ad tag if Google IMA is being used.  

####Returns an object with the following:

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


###jwplayer().on('adRequest')

VAST only. Fired whenever an ad is requested by the player.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|adposition | An ad's position.|"pre" &#124; "mid" &#124; "post"|String|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|offset | An ad's position. Will return a number (in seconds) of a midroll's position|"pre" &#124; "post" &#124; number|String&#124;Number|
|tag | The URL of the ad tag that is being requested|-|String|

###jwplayer().on('adStarted') <sup>VPAID-only</sup>

 This API will trigger when a VPAID ad creative signals to our player that it is starting. This differs from an adImpression, since the advertisement may not yet be visible.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|tag | The URL of the  ad tag that was started.|String|
|creativetype | The MIME type of the VPAID creative|String|

###jwplayer().on('adImpression')
VAST and IMA. Fired based on the IAB definition of an ad impression. This occurs the instant a video ad begins to play.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|adposition | An ad's position.|"pre" &#124; "mid" &#124; "post"|String|
|adsystem | AdSystem referenced inside of the VAST XML |-|String|
|adtitle | AdTitle referenced inside of the VAST XML|-|String|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|-|String|
|linear | Returns if an ad is "linear" or "nonlinear"|-|String|
|mediafile <sup>7.4.3</sup> | **VAST-only** An object containing "file", which is the currently playing media item|-|Object|
|tag | The URL of the ad tag that was started|-|String|
|vastversion | The version of VAST referenced in the VAST XML|-|Number|
|wrapper <sup>7.5.0</sup>| An array of the AdSystems specified in any utilized ad wrappers; index denotes level of wrapper|-|Array|

###jwplayer().on('adPlay')
Fired whenever an ad starts playing or when an ad is unpaused.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|String|
|newstate | The new state of the player|String|
|oldstate | The state of the player prior to ad playback|String|
|tag | The URL of the ad tag that is currently playing.|String|

###jwplayer().on('adPause')
Fired whenever an ad is paused.

####Returns an object with the following:

|Value|Description|Type|
|----|--------|---|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|String|
|newstate | The new state of the player. This should be "paused"|String|
|oldstate | The state of the player prior to ad pause|String|
|tag | The URL of the ad tag that is currently playing.|String|

###jwplayer().on('adTime')
Fired while ad playback is in progress.

####Returns an object with the following:

|Value|Description|Possible Values|Type|
|----|--------|---|--|
|client | The client that is currently being used|"vast" &#124; "googima"|String|
|creativetype | **VAST-only** The MIME type of the current media file specified in the VAST XML|-|String|
|duration|The total duration of the ad creative|-|Number|
|position|The current playback position in the ad creative|-|Number|
|sequence|Returns the sequence number the ad is a part of|-|Number|
|tag     |The URL of the ad tag that is currently playing|-|String|


* * *

## <a name="metadata"></a>Metadata

This API call allows developers to listen for metadata embedded in the media file (e.g. dimensions or TX3G cues in MP4 files). It is intended debugging purposes. Do not rely on this API in production environments, since metadata callbacks are subject to sudden change!

###jwplayer().on('meta')

Continuously triggered when new metadata has been received by the player. Values may vary based on the stream itself.

####Returns an object with the following:

|Value|Description|Type|
|-------|-----------|----|
|metadata|Object containing the metadata. This can be metadata in the media (XMP, ID3, keyframes) or metadata from the playback provider (bandwidth, quality switches, etc.)|Object|

* * *

## <a name="sharing"></a>Sharing<sup>7.2+</sup>

 Sharing API calls work in conjunction with our getPlugin() method. For instance, all of our sharing instances are using the getPlugin(‘sharing’) API call to refer to this particular plugin. The following will target our sharing plugin:

```
jwplayer().on('ready', function(event){
sharingPlugin = jwplayer().getPlugin('sharing');
});
```

All sharingPlugin references below will assume that the above code is implemented on your page.

###sharingPlugin.open()
Opens the sharing plugin. This will also pause content if it is triggered during playback.
<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###sharingPlugin.close()
Closes the sharing plugin if it is opened. This will resume playback if the sharing overlay was triggered during content.
<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

* * *

###sharingPlugin.on('open')
Listens for the opening of the plugin.
<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###sharingPlugin.on('close')
Listens for the closing of the plugin.
<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###sharingPlugin.on('click')
Triggered whenever somebody shares content from within the sharing plugin.

####Returns an object with the following:

|Value|Description|Type|
|-------|-----------|----|
|method|Label of the sharing method that was used|String|

## <a name="related"></a>Related <sup>7.2+</sup>

Similar to sharing, the related api examples below will assume that the following code is implemented:

```
jwplayer().on('ready', function(event){
relatedPlugin = jwplayer().getPlugin('related');
});
```

###relatedPlugin.open();  
Opens the related plugin overlay. This will pause content if it is currently playing.
<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

###relatedPlugin.close();  
Closes the related plugin overlay. This will resume content.
<table>
  <tr>
    <td>-</td>
    <td>No value returned</td> 
    <td>-</td>
  </tr>
</table>

* * *

###relatedPlugin.on('open');  
Triggers when the related plugin is opened.

####Returns an object with the following:

|Value|Description|Type|
|-------|-----------|----|
|method|The method used to open the plugin. (api, complete, or click)|String|
|url|URL of the feed that was loaded into the player.|String|
|items|An object of all objects that have been loaded into the related plugin.|Object|

###relatedPlugin.on('close');  
Triggers when the related plugin is closed.

####Returns an object with the following:

|Value|Description|Type|
|-------|-----------|----|
|method|The method used to open the plugin. (api, complete, or click)|string|

###relatedPlugin.on('play');  
Triggers when a user selects an object in a related feed.  

####Returns an object with the following:

|Value|Description|Type|
|-------|-----------|----|
|item|Metadata for the chosen item specified in the feed.|Object|
|auto|Returns true if started via autoplay; false if manually started.|Boolean|
|position|Ordinal position of the related video that has been chosen.|Number|
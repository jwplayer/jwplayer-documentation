# JW Player Errors Reference

Placeholder for exciting introduction to our new Player Errors Reference.

<br/>

## Jump to Specific Error Event

|Category|Types|
|---|---|
|[Setup Errors](#setup)|[Misc](#misc) \| [Loading JS Component](#loading-js) \| [Loading External Playlist](#loading-external-playlist) \| [Empty Playlist](#empty-playlist)|
|[Player Errors](#player)|[Loading New Playlist](#loading-new-playlist) \| [Playlist Item](#playlist-item) \| [Media Playback Setup](#media-setup) \| [Flash](#media-flash) \| [HTML5](#media-html5) \| [HLS.JS](#media-hlsjs) \| [Shaka Player](#media-shaka)|

<br/>
<a name="setup"></a>

## Setup Errors

These errors are dispatched in a "setupError" error event, after calling jwplayer().setup() when an error occurs. These errors prevent the player from setting up successfully. In these scenarios the player will not dispatch a "ready" event.

<a name="misc"></a>
### Miscellaneous
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|
|"setupError" | <a name='100000'></a> 100000 | An unknown setup error occurred. | <none>|
|"setupError" | <a name='100001'></a> 100001 | Setup took longer than 30 seconds to complete. | Setup Timeout Error: Setup took longer than <SETUP_TIMEOUT_SECONDS> seconds to complete.|
|"setupError" | <a name='100011'></a> 100011 | Missing license key. "key" not found in config or "jwplayer.key" global. | Error setting up player: Missing license key|
|"setupError" | <a name='100012'></a> 100012 | Invalid license key. | Error setting up player: Invalid license key|
|"setupError" | <a name='100013'></a> 100013 | Expired license key. | Error setting up player: Invalid license key|

<a name="loading-js"></a>
### Loading JS Component
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="loading-external-playlist"></a>
### Loading External Playlist
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|

<a name="empty-playlist"></a>
### Empty Playlist
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|

<br/>
<a name="player"></a>

## Player Errors

These errors are dispatched in an "error" event after the player is setup and after the "ready" event. In these scenarios, any active playback is stopped, and an error message is displayed in the video player to the viewer.

<a name="loading-new-playlist"></a>
### Loading New Playlist
These errors are dispatched after calling jwplayer().load(content) when the content cannot be loaded or played.

|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="playlist-item"></a>
### Playlist Item
These errors occur when the player attempts to set, load or play a new playlist item. This can be the result of calling jwplayer().load(content) or normal playlist progression (one item ends and another is about to begin).

Note: Technically these only fire with "Playlist error: " as a result of calling load() but that should change. The player could get into a bad state inbetween items if these are not cause (playAttemptFailed).

|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="media-setup"></a>
### Media Playback Setup
These errors occur when then player has trouble streaming content.

|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="media-flash"></a>
### Media Playback Flash
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="media-html5"></a>
### Media Playback HTML5
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="media-hlsjs"></a>
### Media Playback HLS.JS
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


<a name="media-shaka"></a>
### Media Playback Shaka Player
|Event|Error Code|Reason|Deprecated Error Message (Prior to v8.4.0)|
|---|---|---|---|


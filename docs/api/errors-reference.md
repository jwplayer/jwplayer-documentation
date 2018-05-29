# JW Player Errors Reference

Placeholder for exciting introduction to our new Player Errors Reference.

<br/>
## Jump to Specific Error Event

|Category|Types|
|---|---|
|[Setup Errors](#setup)|[Timeout](#timeout) \| [License Key](#license-key)|
|[Player Errors](#player)|[Loading New Playlist](#load-new-playlist) \| [Empty Playlist](#empty-playlist)|
|[Warnings](#warning)|[Loading JS Component](#load-js-component)|

<br/>
<a name="setup"></a>
## Setup Errors

These errors are dispatched in a "setupError" error event, after calling jwplayer().setup() when an error occurs. These errors prevent the player from setting up successfully. In these scenarios the player will not dispatch a "ready" event.

<a name="timeout"></a>
### Timeout
|Event|Error Code|Reason|
|---|---|---|
|"setupError"|100001|Setup took longer than 30 seconds to complete.|

<a name="license-key"></a>
### License Key
|Event|Error Code|Reason|
|---|---|---|
|"setupError"|100011|Missing license key. "key" not found in config or "jwplayer.key" global.|

<br/>
<a name="player"></a>
## Player Errors

These errors are dispatched in an "error" event after the player is setup and after the "ready" event. In these scenarios, any active playback is stopped, and an error message is displayed in the video player to the viewer.

<a name="load-new-playlist"></a>
### Loading New Playlist
These errors are dispatched after calling jwplayer().load(content) when the content cannot be loaded or played.

|Event|Error Code|Reason|
|---|---|---|
|"error"|202002|The browser failed to make the request because XMLHttpRequest not supported.|

<a name="empty-playlist"></a>
### Empty Playlist
|Event|Error Code|Reason|
|---|---|---|
|"error"|202630|Happens when the playlist is empty: <ul><li>before filtering items and source</li><li>after filtering items and source</li></ul>|

<br/>
<a name="warning"></a>
## Warnings

These errors are dispatched in a "warning" event after the player is setup and after the "ready" event. In these scenarios, the viewer is not notified of the error. Video player functionality is not inturrupted, but may be degraded, depending on the error.

<a name="load-js-component"></a>
### Loading JS Component
|Event|Error Code|Reason|
|---|---|---|
|"warning"|xxxxxx|vttparser.js failed to load. VTT captions cannot be displayed.|


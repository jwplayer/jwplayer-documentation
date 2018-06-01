# JW Player Errors Reference (JW Player 8.4+)

JW Player 8.4 introduces a new and improved error system in the player. We have revamped error codes from the ground up to be more comprehensive, descriptive, and consistent. For developers this will enable faster troubleshooting and programmatic handling of errors, and for viewers the experience will be enriched thanks to clearer messages accompanied by the specific codes.
To summarize, our new error system:

* Assigns unique error codes to all errors
* Provides explanations for all error codes in this document
* Assigns a viewer friendly message to each error
* Supports localization of error messages
* Displays errors to developers in log events with hyperlinks to this document
* Displays the error code on the Player's Error screen to facilitate error reporting by viewers


<br/>
<a name='error-object'></a>

## Player Error Object

### Properties
|Name|Type|Attributes|Description|
|---|---|---|---|
|message|string| |The error message.|
|code|number|optional|The error code.|
|sourceError|Error|optional|The lower level error, caught by the player, which resulted in this error.|

### Example
```javascript
{
  "code": 104153,
  "message": "Sorry, the video player failed to load.",
  "sourceError": null,
  "type": "setupError"
}
```

<br/>
<a name='error-msgs'></a>

## Error Messages

Each error contains a `message`, which is the viewer-friendly text displayed on the player's error screen. The range of error codes that map to a specific error message are detailed below, along with the localization property used to customize that message.

|Error Message | Error Codes | Localization Property|
|---|---|---|
|This video file cannot be played. | 102630, 102640, 203100-214154 | localization.errors.cantPlayVideo|
|This video cannot be played because of a problem with your internet connection. | 230002, 232002 | localization.errors.badConnection|
|Sorry, the video player failed to load. | 100000-100013, 101100-101120, 102000-102621, 104100-104154, 202000-202630 | localization.errors.cantLoadPlayer|
|The video cannot be played in this browser. | 210001 | localization.errors.cantPlayInBrowser|
|The live stream is either down or has ended. | 220001, 230001 | localization.errors.liveStreamEnded|
|There was a problem providing access to protected content. | 225400-226599 | localization.errors.protectedContent|
|This video cannot be played because of a technical error. | 221000-224003, 232000, 232011-233599, 240000-241599 | localization.errors.technicalError|


<br/>

## Jump to Specific Error Type

|Category|Types|
|---|---|
|[Setup Errors](#setup)|[Misc](#misc) \| [Loading Javascript Components](#loading-js) \| [Playlist Parsing](#playlist-parsing) \| [Empty Playlist](#empty-playlist)|
|[Player Errors](#player)|[Loading New Playlist](#loading-new-playlist) \| [Playlist Item](#playlist-item) \| [Media Playback Setup](#media-setup) \| [Flash](#media-flash) \| [HTML5](#media-html5) \| [HLS.JS](#media-hlsjs) \| [Shaka Player](#media-shaka)|


<br/>
<a name="setup"></a>

## Setup Errors

These errors prevent the player from setting up successfully; they occur after jwplayer().setup() is called, are dispatched in a "setupError" event and prevent the dispatch of the "ready" event.

<a name="misc"></a>
### Miscellaneous
|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='100000'></a> 100000 | An unknown setup error occurred. | none|
|<a name='100001'></a> 100001 | Setup took longer than 30 seconds to complete. | Setup Timeout Error: Setup took longer than 30 seconds to complete.|
|<a name='100011'></a> 100011 | Missing license key: the key was not found in the setup config or the "jwplayer.key" global. | Error setting up player: Missing license key|
|<a name='100012'></a> 100012 | Invalid license key. | Error setting up player: Invalid license key|
|<a name='100013'></a> 100013 | Expired license key. | Error setting up player: Invalid license key|

<a name="loading-js"></a>
### Loading Javascript Components
Setup failed because the player could not load a necessary javascript component.

|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='101100'></a> 101100 | A component of the player failed to load. | Network error|
|<a name='101101'></a> 101101 | Failed to load the `jwplayer.core` component | Network error|
|<a name='101102'></a> 101102 | Failed to load the `jwplayer.core.controls` component | Network error|
|<a name='101103'></a> 101103 | Failed to load the `jwplayer.core.controls.polyfills` component | Network error|
|<a name='101104'></a> 101104 | Failed to load the `jwplayer.core.controls.html5` component | Network error|
|<a name='101105'></a> 101105 | Failed to load the `jwplayer.core.controls.polyfills.html5` component | Network error|
|<a name='101120'></a> 101120 | Failed to load the `polyfills.intersection-observer` component | Network error|
|<a name='104100'></a> 104100 | A playback component of the player (provider) failed to load | Failed to load media|
|<a name='104151'></a> 104151 | The `provider.flash.js` playback component of the player (Flash provider) failed to load | Failed to load media|
|<a name='104152'></a> 104152 | The `provider.html5.js` playback component of the player (HTML5 provider) failed to load | Failed to load media|
|<a name='104153'></a> 104153 | The `provider.hlsjs.js` playback component of the player (HLS.JS provider) failed to load | Failed to load media|
|<a name='104154'></a> 104154 | The `provider.shaka.js` playback component of the player (Shaka provider) failed to load | Failed to load media|

<a name="playlist-parsing"></a>
### Playlist Parsing
Setup failed because the requested playlist could not be parsed.

|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='102000'></a> 102000 | Unknown error. This is generally caused by an unknown XHR error or an exception thrown while parsing the content; for more context we recommend checking the source error. | Error loading playlist: Error loading file|
|<a name='102001'></a> 102001 | The XHR request exceeded the timeout argument or the default of 60 seconds. | Error loading playlist: Timeout|
|<a name='102002'></a> 102002 | The browser failed to make the XHR request because it does not support `XMLHttpRequest`. | Error loading playlist: Error loading file|
|<a name='102003'></a> 102003 | An exception was thrown while calling `xhr.open`. The reason varies depending on the browser, but the cause is usually a malformed URL. | Error loading playlist: Error loading file|
|<a name='102004'></a> 102004 | An exception was thrown while calling `xhr.send`. The reason varies depending on the browser. | Error loading playlist: Error loading file|
|<a name='102005'></a> 102005 | An exception was thrown in the XHR `requestFilter`. | Error loading playlist: Error loading file|
|<a name='102400-102599'></a> 102400-102599 | The XHR request failed and returned a valid HTTP status error (eg. 102404 is HTTP status code 404). | Error loading playlist: File not found (http status code 404) or Error loading playlist: <xhr.status> (<xhr.statusText>)|
|<a name='102600'></a> 102600 | The XHR request failed with a status code outside of the 400 and 500 ranges. | Error loading playlist: <xhr.status> (<xhr.statusText>)|
|<a name='102601'></a> 102601 | The DOMParser could not parse the XML; it must be malformed. | Error loading playlist: Invalid XML|
|<a name='102602'></a> 102602 | The XML did not return a response; it must be malformed. | Error loading playlist: Invalid XML|
|<a name='102611'></a> 102611 | The JSON could not be parsed; it must be invalid. | Error loading playlist: Invalid JSON|
|<a name='102621'></a> 102621 | The requested playlist is not a valid RSS or JSON feed. | Error loading playlist: Not a valid RSS/JSON feed|

<a name="empty-playlist"></a>
### Empty Playlist
Setup failed because an invalid playlist was requested.

|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='102630'></a> 102630 | Either an empty playlist was requested or none of the items passed our filter for valid files. | No playable sources found|
|<a name='102640'></a> 102640 | The playlist item could not be loaded because it is undefined or missing a valid source. | No media|


<br/>
<a name="player"></a>

## Player Errors

These errors are dispatched in an "error" event after the player is setup and after the "ready" event. In these scenarios, any active playback is stopped, and an error message is displayed in the video player to the viewer.

<a name="loading-new-playlist"></a>
### Loading New Playlist
These errors are dispatched after calling jwplayer().load(content) when the content cannot be loaded or played.

|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='202000'></a> 202000 | Exception thrown parsing content or XHR error unknown. | Error loading playlist: Error loading file|
|<a name='202001'></a> 202001 | Request exceeded timeout argument or default of 60 seconds. | Error loading playlist: Timeout|
|<a name='202002'></a> 202002 | The browser failed to make the request because:XMLHttpRequest not supported IE 8-9 XDomainRequest cannot be used with crossdomain URL (deprecated in 8.3.0-beta.4) | Error loading playlist: Error loading file|
|<a name='202003'></a> 202003 | Exception thrown calling xhr.open. Reasons vary depending on browser. This one is usually a malformed URL. | Error loading playlist: Error loading file|
|<a name='202004'></a> 202004 | Exception thrown calling xhr.send. Reasons vary depending on browser. | Error loading playlist: Error loading file|
|<a name='202005'></a> 202005 | Exception thrown calling requestFilter. | Error loading playlist: Error loading file|
|<a name='202006'></a> 202006 | XHR request failed with status code outside of 400 and 500 range | Error loading playlist: Error loading file|
|<a name='202400-202599'></a> 202400-202599 | HTTP status error (eg. 202404 is HTTP status code 404). Limit error handling to xhr.status >= 400 && xhr.status < 600. | Error loading playlist: File not found (http status code 404) or Error loading playlist: <xhr.status> (<xhr.statusText>)|
|<a name='202601'></a> 202601 | DOMParser parser error. | Error loading playlist: Invalid XML|
|<a name='202602'></a> 202602 | No xml response. | Error loading playlist: Invalid XML|
|<a name='202611'></a> 202611 | JSON.parse(response) threw an exception. | Error loading playlist: Invalid JSON|
|<a name='202621'></a> 202621 | The response did not contain a valid playlist. | Error loading playlist: Not a valid RSS/JSON feed|
|<a name='202630'></a> 202630 | Happens when the playlist is empty: before filtering items and source after filtering items and source | Playlist error: No playable sources found|

<a name="playlist-item"></a>
### Playlist Item
These errors occur when the player attempts to set, load or play a new playlist item. This can be the result of calling jwplayer().load(content) or normal playlist progression (one item ends and another is about to begin).

Note: Technically these only fire with "Playlist error: " as a result of calling load() but that should change. The player could get into a bad state inbetween items if these are not cause (playAttemptFailed).

|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='203100'></a> 203100 | A playback component of the player (the provider) failed to load between playlist items. | Playlist error: Failed to load media|
|<a name='203151'></a> 203151 | A playback component of the player (the provider) failed to load between playlist items: provider.flash.js | Playlist error: Failed to load media|
|<a name='203152'></a> 203152 | A playback component of the player (the provider) failed to load between playlist items: provider.html5.js | Playlist error: Failed to load media|
|<a name='203153'></a> 203153 | A playback component of the player (the provider) failed to load between playlist items: provider.hlsjs.js | Playlist error: Failed to load media|
|<a name='203154'></a> 203154 | A playback component of the player (the provider) failed to load between playlist items: provider.shaka.js | Playlist error: Failed to load media|
|<a name='203640'></a> 203640 | The playlist item could not be loaded because it is undefined or missing a valid source. (Usually caused by a regression in playlist loading and filtering). | Playlist error: No media|

<a name="media-setup"></a>
### Media Playback Setup
These errors occur when then player has trouble streaming content.

|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='204100'></a> 204100 | A playback component of the player (the provider) failed to load after calling load(playlist). | Could not play video: Failed to load media|
|<a name='204151'></a> 204151 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.flash.js | Could not play video: Failed to load media|
|<a name='204152'></a> 204152 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.html5.js | Could not play video: Failed to load media|
|<a name='204153'></a> 204153 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.hlsjs.js | Could not play video: Failed to load media|
|<a name='204154'></a> 204154 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.shaka.js | Could not play video: Failed to load media|

<a name="media-flash"></a>
### Media Playback Flash
|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='210000'></a> 210000 | A playback error occurred in the flash player. | <event.message>|
|<a name='210001'></a> 210001 | The flash player could not setup properly using the given player config in the current browser. | Failed to setup flash|
|<a name='214000'></a> 214000 | an unknown media error occurred in the flash player. | <event.message>|

<a name="media-html5"></a>
### Media Playback HTML5
|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='220001'></a> 220001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using config.liveTimeout. | The live stream is either down or has ended|
|<a name='221000'></a> 221000 | video.error.code = 2MEDIA_ERR_NETWORK | Error loading media: Unknown network error|
|<a name='224000'></a> 224000 | Other video.error.code. | Error loading media: Unknown|
|<a name='224001'></a> 224001 | video.error.code = 1MEDIA_ERR_ABORTED | Error loading media: Unknown operation aborted|
|<a name='224002'></a> 224002 | video.error.code = 3MEDIA_ERR_DECODE | Error loading media: Unknown decode error|
|<a name='224003'></a> 224003 | video.error.code = 4MEDIA_ERR_SRC_NOT_SUPPORTED | Error loading media: File could not be played|
|<a name='225400-225599'></a> 225400-225599 | The drm.fairplay.certificateUrl could not be loaded. (jwplayer ajax XHR Error) | Error loading media: Failed to retrieve the server certificate|
|<a name='225650'></a> 225650 | Safari dispatched a "webkitkeyerror" event. | Error loading media: Decryption key error was encountered|
|<a name='226400-226599'></a> 226400-226599 | XHR error loading the drm.fairplay.processSpcUrl | Error loading media: The license request failed|

<a name="media-hlsjs"></a>
### Media Playback HLS.JS
|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='230001'></a> 230001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using config.liveTimeout. | The live stream is either down or has ended|
|<a name='230002'></a> 230002 | Playback stalled after going offline. | Network Error: No Internet Connection|
|<a name='232000'></a> 232000 | Unhandled manifest loading error. | Cannot load M3U8: <data.reason>Cannot load M3U8: <data.details>Cannot load M3U8: Unknown Network Error|
|<a name='232002'></a> 232002 | A manifest request failed as the result of going offline. | Network Error: Internet Connection Lost|
|<a name='232011'></a> 232011 | A manifest request was made without proper crossdomain credentials. | Cannot load M3U8: Crossdomain access denied|
|<a name='232012'></a> 232012 | A manifest request was made to an HTTP resource from HTTPS. | Cannot load M3U8: Unable to fetch HTTP resource over HTTPS|
|<a name='232400-232599'></a> 232400-232599 | A manifest request returned with an HTTP status indicating failure. | Cannot load M3U8: <statusCode> <responseText>Cannot load M3U8: You do not have permission to access this content Cannot load M3U8: 404 Not Found|
|<a name='233000'></a> 233000 | Unhandled media loading error. | Media Error: <data.reason> Media Error: <data.details> Media Error: Unknown Network Error|
|<a name='233011'></a> 233011 | A media request was made without proper crossdomain credentials. | Media Error: Crossdomain access denied|
|<a name='233012'></a> 233012 | A media request was made to an HTTP resource from HTTPS. | Media Error: Unable to fetch HTTP resource over HTTPS|
|<a name='233400-233599'></a> 233400-233599 | A media request returned with an HTTP status indicating failure (eg. 233404 is HTTP status code 404). | Media Error: <statusCode> <responseText> Media Error: You do not have permission to access this content Media Error: 404 Not Found|

<a name="media-shaka"></a>
### Media Playback Shaka Player
|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|
|<a name='240000'></a> 240000 | Unhandled shaka-player error. Note: We should look at Shaka's error list, and assign specific codes for errors we do not handle (DRM errors for example.) | Error playing file: Unknown playback error|
|<a name='241000'></a> 241000 | Unhandled network error. | Error loading media: File could not be played|
|<a name='241010'></a> 241010 | Unhandled network error with bad http status code. (shakaCode.BAD_HTTP_STATUS) | Error loading media: Unknown Network Error|
|<a name='241011'></a> 241011 | A network request was made without proper crossdomain credentials. | Error loading media: Crossdomain access denied|
|<a name='241012'></a> 241012 | A network request was made to an HTTP resource from HTTPS. | Error loading media: Unable to fetch HTTP resource over HTTPS|
|<a name='241400-241599'></a> 241400-241599 | A network request returned with an HTTP status indicating failure (eg. 241404 is HTTP status code 404). | Error loading media: <statusCode> <responseText> Error loading media: You do not have permission to access this content Error loading media: 404 Not Found|

# JW Player Errors Reference (JW Player 8.4+)

JW Player 8.4 introduces a new and improved error system in the player.  We have revamped error codes from the ground up to be more comprehensive, descriptive, and consistent.  This will enable faster troubleshooting and programmatic handling of errors by developers. Here's a summary of our new JW Player error system:
* Designed a new system of classifying errors into error codes & categories
* Identified all existing player errors and categorized them
* Applied error codes to all identified errors and mapped them to friendlier, relevant messages displayed to the viewer
* Provide a call-to-action or suggestion for recoverable errors so that users can get the player back to a playable state
* Maintain this document for referencing error codes and understanding what they mean
* Display errors to developers in log events with hyperlinks to this document

<br/>

## Jump to Specific Error Type

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
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"setupError" | <a name='100000'></a> 100000 | An unknown setup error occurred. | none |
|"setupError" | <a name='100001'></a> 100001 | Setup took longer than 30 seconds to complete. | Setup Timeout Error: Setup took longer than <SETUP_TIMEOUT_SECONDS> seconds to complete.|
|"setupError" | <a name='100011'></a> 100011 | Missing license key. "key" not found in config or "jwplayer.key" global. | Error setting up player: Missing license key|
|"setupError" | <a name='100012'></a> 100012 | Invalid license key. | Error setting up player: Invalid license key|
|"setupError" | <a name='100013'></a> 100013 | Expired license key. | Error setting up player: Invalid license key|

<a name="loading-js"></a>
### Loading JS Component
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"setupError" | <a name='101100'></a> 101100 | A component of the player failed to load. | Network error|
|"setupError" | <a name='101101'></a> 101101 | A component of the player failed to load: jwplayer.core | Network error|
|"setupError" | <a name='101102'></a> 101102 | A component of the player failed to load: jwplayer.core.controls | Network error|
|"setupError" | <a name='101103'></a> 101103 | A component of the player failed to load: jwplayer.core.controls.polyfills | Network error|
|"setupError" | <a name='101104'></a> 101104 | A component of the player failed to load: jwplayer.core.controls.html5 | Network error|
|"setupError" | <a name='101105'></a> 101105 | A component of the player failed to load: jwplayer.core.controls.polyfills.html5 | Network error|
|"setupError" | <a name='101120'></a> 101120 | A component of the player failed to load: polyfills.intersection-observer | Network error|
|"setupError" | <a name='104100'></a> 104100 | A playback component of the player (the provider) failed to load during setup. | Failed to load media|
|"setupError" | <a name='104151'></a> 104151 | A playback component of the player (the provider) failed to load during setup: provider.flash.js | Failed to load media|
|"setupError" | <a name='104152'></a> 104152 | A playback component of the player (the provider) failed to load during setup: provider.html5.js | Failed to load media|
|"setupError" | <a name='104153'></a> 104153 | A playback component of the player (the provider) failed to load during setup: provider.hlsjs.js | Failed to load media|
|"setupError" | <a name='104154'></a> 104154 | A playback component of the player (the provider) failed to load during setup: provider.shaka.js | Failed to load media|


<a name="loading-external-playlist"></a>
### Loading External Playlist
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"setupError" | <a name='102000'></a> 102000 | Exception thrown parsing content or XHR error unknown. | Error loading playlist: Error loading file|
|"setupError" | <a name='102001'></a> 102001 | Request exceeded timeout argument or default of 60 seconds. | Error loading playlist: Timeout|
|"setupError" | <a name='102002'></a> 102002 | The browser failed to make the request because:XMLHttpRequest not supported IE 8-9 XDomainRequest cannot be used with crossdomain URL (deprecated in 8.3.0-beta.4) | Error loading playlist: Error loading file|
|"setupError" | <a name='102003'></a> 102003 | Exception thrown calling xhr.open. Reasons vary depending on browser. This one is usually a malformed URL. | Error loading playlist: Error loading file|
|"setupError" | <a name='102004'></a> 102004 | Exception thrown calling xhr.send. Reasons vary depending on browser. | Error loading playlist: Error loading file|
|"setupError" | <a name='102005'></a> 102005 | Exception thrown calling requestFilter. | Error loading playlist: Error loading file|
|"setupError" | <a name='102006'></a> 102006 | XHR request failed with status code outside of 400 and 500 range. | Error loading playlist: Error loading file|
|"setupError" | <a name='102400-102599'></a> 102400-102599 | HTTP status error (eg. 102404 is HTTP status code 404). Limit error handling to xhr.status >= 400 && xhr.status < 600. | Error loading playlist: File not found (http status code 404) or Error loading playlist: <xhr.status> (<xhr.statusText>)|
|"setupError" | <a name='102601'></a> 102601 | DOMParser parser error. | Error loading playlist: Invalid XML|
|"setupError" | <a name='102602'></a> 102602 | No xml response. | Error loading playlist: Invalid XML|
|"setupError" | <a name='102611'></a> 102611 | JSON.parse(response) threw an exception. | Error loading playlist: Invalid JSON|
|"setupError" | <a name='102621'></a> 102621 | The response did not contain a valid playlist. | Error loading playlist: Not a valid RSS/JSON feed|

<a name="empty-playlist"></a>
### Empty Playlist
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"setupError" | <a name='102630'></a> 102630 | Happens when the playlist is empty: before filtering items and source after filtering items and source | No playable sources found|
|"setupError" | <a name='102640'></a> 102640 | The first playlist item could not be loaded because it is undefined or missing a valid source. | No media|

<br/>
<a name="player"></a>

## Player Errors

These errors are dispatched in an "error" event after the player is setup and after the "ready" event. In these scenarios, any active playback is stopped, and an error message is displayed in the video player to the viewer.

<a name="loading-new-playlist"></a>
### Loading New Playlist
These errors are dispatched after calling jwplayer().load(content) when the content cannot be loaded or played.

|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='202000'></a> 202000 | Exception thrown parsing content or XHR error unknown. | Error loading playlist: Error loading file|
|"error" | <a name='202001'></a> 202001 | Request exceeded timeout argument or default of 60 seconds. | Error loading playlist: Timeout|
|"error" | <a name='202002'></a> 202002 | The browser failed to make the request because:XMLHttpRequest not supported IE 8-9 XDomainRequest cannot be used with crossdomain URL (deprecated in 8.3.0-beta.4) | Error loading playlist: Error loading file|
|"error" | <a name='202003'></a> 202003 | Exception thrown calling xhr.open. Reasons vary depending on browser. This one is usually a malformed URL. | Error loading playlist: Error loading file|
|"error" | <a name='202004'></a> 202004 | Exception thrown calling xhr.send. Reasons vary depending on browser. | Error loading playlist: Error loading file|
|"error" | <a name='202005'></a> 202005 | Exception thrown calling requestFilter. | Error loading playlist: Error loading file|
|"error" | <a name='202006'></a> 202006 | XHR request failed with status code outside of 400 and 500 range | Error loading playlist: Error loading file|
|"error" | <a name='202400-202599'></a> 202400-202599 | HTTP status error (eg. 202404 is HTTP status code 404). Limit error handling to xhr.status >= 400 && xhr.status < 600. | Error loading playlist: File not found (http status code 404) or Error loading playlist: <xhr.status> (<xhr.statusText>)|
|"error" | <a name='202601'></a> 202601 | DOMParser parser error. | Error loading playlist: Invalid XML|
|"error" | <a name='202602'></a> 202602 | No xml response. | Error loading playlist: Invalid XML|
|"error" | <a name='202611'></a> 202611 | JSON.parse(response) threw an exception. | Error loading playlist: Invalid JSON|
|"error" | <a name='202621'></a> 202621 | The response did not contain a valid playlist. | Error loading playlist: Not a valid RSS/JSON feed|
|"error" | <a name='202630'></a> 202630 | Happens when the playlist is empty: before filtering items and source after filtering items and source | Playlist error: No playable sources found|

<a name="playlist-item"></a>
### Playlist Item
These errors occur when the player attempts to set, load or play a new playlist item. This can be the result of calling jwplayer().load(content) or normal playlist progression (one item ends and another is about to begin).

Note: Technically these only fire with "Playlist error: " as a result of calling load() but that should change. The player could get into a bad state inbetween items if these are not cause (playAttemptFailed).

|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='203100'></a> 203100 | A playback component of the player (the provider) failed to load between playlist items. | Playlist error: Failed to load media|
|"error" | <a name='203151'></a> 203151 | A playback component of the player (the provider) failed to load between playlist items: provider.flash.js | Playlist error: Failed to load media|
|"error" | <a name='203152'></a> 203152 | A playback component of the player (the provider) failed to load between playlist items: provider.html5.js | Playlist error: Failed to load media|
|"error" | <a name='203153'></a> 203153 | A playback component of the player (the provider) failed to load between playlist items: provider.hlsjs.js | Playlist error: Failed to load media|
|"error" | <a name='203154'></a> 203154 | A playback component of the player (the provider) failed to load between playlist items: provider.shaka.js | Playlist error: Failed to load media|
|"error" | <a name='203640'></a> 203640 | The playlist item could not be loaded because it is undefined or missing a valid source. (Usually caused by a regression in playlist loading and filtering). | Playlist error: No media|


<a name="media-setup"></a>
### Media Playback Setup
These errors occur when then player has trouble streaming content.

|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='204100'></a> 204100 | A playback component of the player (the provider) failed to load after calling load(playlist). | Could not play video: Failed to load media|
|"error" | <a name='204151'></a> 204151 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.flash.js | Could not play video: Failed to load media|
|"error" | <a name='204152'></a> 204152 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.html5.js | Could not play video: Failed to load media|
|"error" | <a name='204153'></a> 204153 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.hlsjs.js | Could not play video: Failed to load media|
|"error" | <a name='204154'></a> 204154 | A playback component of the player (the provider) failed to load after calling load(playlist): provider.shaka.js | Could not play video: Failed to load media|

<a name="media-flash"></a>
### Media Playback Flash
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='210000'></a> 210000 | A playback error occurred in the flash player. | <event.message>|
|"error" | <a name='210001'></a> 210001 | The flash player could not setup properly using the given player config in the current browser. | Failed to setup flash|
|"error" | <a name='214000'></a> 214000 | an unknown media error occurred in the flash player. | <event.message>|

<a name="media-html5"></a>
### Media Playback HTML5
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='220001'></a> 220001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using config.liveTimeout. | The live stream is either down or has ended|
|"error" | <a name='221000'></a> 221000 | video.error.code = 2MEDIA_ERR_NETWORK | Error loading media: Unknown network error|
|"error" | <a name='224000'></a> 224000 | Other video.error.code. | Error loading media: Unknown|
|"error" | <a name='224001'></a> 224001 | video.error.code = 1MEDIA_ERR_ABORTED | Error loading media: Unknown operation aborted|
|"error" | <a name='224002'></a> 224002 | video.error.code = 3MEDIA_ERR_DECODE | Error loading media: Unknown decode error|
|"error" | <a name='224003'></a> 224003 | video.error.code = 4MEDIA_ERR_SRC_NOT_SUPPORTED | Error loading media: File could not be played|
|"error" | <a name='225400-225599'></a> 225400-225599 | The drm.fairplay.certificateUrl could not be loaded. (jwplayer ajax XHR Error) | Error loading media: Failed to retrieve the server certificate|
|"error" | <a name='225650'></a> 225650 | Safari dispatched a "webkitkeyerror" event. | Error loading media: Decryption key error was encountered|
|"error" | <a name='226400-226599'></a> 226400-226599 | XHR error loading the drm.fairplay.processSpcUrl | Error loading media: The license request failed|

<a name="media-hlsjs"></a>
### Media Playback HLS.JS
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='230001'></a> 230001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using config.liveTimeout. | The live stream is either down or has ended|
|"error" | <a name='230002'></a> 230002 | Playback stalled after going offline. | Network Error: No Internet Connection|
|"error" | <a name='232000'></a> 232000 | Unhandled manifest loading error. | Cannot load M3U8: <data.reason>Cannot load M3U8: <data.details>Cannot load M3U8: Unknown Network Error|
|"error" | <a name='232002'></a> 232002 | A manifest request failed as the result of going offline. | Network Error: Internet Connection Lost|
|"error" | <a name='232011'></a> 232011 | A manifest request was made without proper crossdomain credentials. | Cannot load M3U8: Crossdomain access denied|
|"error" | <a name='232012'></a> 232012 | A manifest request was made to an HTTP resource from HTTPS. | Cannot load M3U8: Unable to fetch HTTP resource over HTTPS|
|"error" | <a name='232400-232599'></a> 232400-232599 | A manifest request returned with an HTTP status indicating failure. | Cannot load M3U8: <statusCode> <responseText>Cannot load M3U8: You do not have permission to access this content Cannot load M3U8: 404 Not Found|
|"error" | <a name='233000'></a> 233000 | Unhandled media loading error. | Media Error: <data.reason> Media Error: <data.details> Media Error: Unknown Network Error|
|"error" | <a name='233011'></a> 233011 | A media request was made without proper crossdomain credentials. | Media Error: Crossdomain access denied|
|"error" | <a name='233012'></a> 233012 | A media request was made to an HTTP resource from HTTPS. | Media Error: Unable to fetch HTTP resource over HTTPS|
|"error" | <a name='233400-233599'></a> 233400-233599 | A media request returned with an HTTP status indicating failure (eg. 233404 is HTTP status code 404). | Media Error: <statusCode> <responseText> Media Error: You do not have permission to access this content Media Error: 404 Not Found|

<a name="media-shaka"></a>
### Media Playback Shaka Player
|Event|Error Code|Reason|Deprecated Error Message (Prior to 8.4.0)|
|---|---|---|---|
|"error" | <a name='240000'></a> 240000 | Unhandled shaka-player error. Note: We should look at Shaka's error list, and assign specific codes for errors we do not handle (DRM errors for example.) | Error playing file: Unknown playback error|
|"error" | <a name='241000'></a> 241000 | Unhandled network error. | Error loading media: File could not be played|
|"error" | <a name='241010'></a> 241010 | Unhandled network error with bad http status code. (shakaCode.BAD_HTTP_STATUS) | Error loading media: Unknown Network Error|
|"error" | <a name='241011'></a> 241011 | A network request was made without proper crossdomain credentials. | Error loading media: Crossdomain access denied|
|"error" | <a name='241012'></a> 241012 | A network request was made to an HTTP resource from HTTPS. | Error loading media: Unable to fetch HTTP resource over HTTPS|
|"error" | <a name='241400-241599'></a> 241400-241599 | A network request returned with an HTTP status indicating failure (eg. 241404 is HTTP status code 404). | Error loading media: <statusCode> <responseText> Error loading media: You do not have permission to access this content Error loading media: 404 Not Found|


<br/>

## Viewer-Friendly Error Messages

|Viewer-Friendly Message | Error Codes | Localization Property|
|---|---|---|
|This video file cannot be played. | 102630, 102640, 203100-214154 | localization.errors.cantPlayVideo|
|This video cannot be played because of a problem with your internet connection. | 230002, 232002 | localization.errors.badConnection|
|Sorry, the video player failed to load. | 100000-100013, 101100-101120, 102000-102621, 104100-104154, 202000-202630 | localization.errors.cantLoadPlayer|
|The video cannot be played in this browser. | 210001 | localization.errors.cantPlayInBrowser|
|The live stream is either down or has ended. | 220001, 230001 | localization.errors.liveStreamEnded|
|There was a problem providing access to protected content. | 225400-226599 | localization.errors.protectedContent|
|This video cannot be played because of a technical error. | 221000-224003, 232000, 232011-233599, 240000-241599 | localization.errors.technicalError|


<br/>

## PlayerError Class

Class used to create `setupError` and `error` event instances
```javascript
class PlayerError(string, ErrorCode, Error){}
```
### Parameters
|Name|Type|Attributes|Description|
|---|---|---|---|
|string|message| |The error message.|
|ErrorCode|code|optional|The error code.|
|Error|sourceError|optional|The lower level error, caught by the player, which resulted in this error.|



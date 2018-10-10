# JW Player Errors Reference

All errors and warnings relating to the player are returned in a player error object. 

```javascript
{
  "code": 104153,
  "message": "Sorry, the video player failed to load.",
  "sourceError": { Error object or null },
  "type": "setupError"
}
```

|Name|Type|Description|
|---|---|---|
|`code` | Number | Identifier for the error <br/><br/>Error code descriptions are listed on this page.|
|`message` | String | Viewer-friendly error text displayed displayed to the user<br/><br/> This property can be [localized](../customization/configuration-reference/#intlerrors). |
|`sourceError` | Object or null | Lower level error or event, caught by the player, which resulted in this error |
|`type` | String | Category of error or warning <br/><br/> Possible values include: <br/><br/> - `error`<br/><br/>- `playAttemptFailed`<br/><br/>- `setupError`<br/><br/>- `warning` 

An _error_ has the following behaviors:

* Stops player functionality
* Displays the `code` and `message` to the viewer
* In log events, displays the `code` with a link to this document
* Returns a `type` value of `error` or `setupError` 

An _warning_ has the following behaviors:

* In log events, displays the `code` with a link to this document 
* May degrade player functionality
* Does not display the `code` and `message` to the viewer
* Returns a `type` value of `playAttemptFailed` or `warning`


Use the sections below to help you troubleshoot and programmatically handle player-related issues. 

|Type | Category|
|---|---|
|[Setup Errors (`setupError`)](#setup)|[Misc](#misc) \| [Loading Javascript Components](#loading-js) \| [Playlist Parsing](#playlist-parsing) \| [Empty Playlist](#empty-playlist)|
|[Player Errors (`error`)](#player)|[Misc](#misc-error) \| [Loading New Playlist](#loading-new-playlist) \| [Playlist Item](#playlist-item) \| [Loading Javascript Components](#player-loading-js) \| [Flash](#media-flash) \| [HTML5](#media-html5) \| [HLS.JS](#media-hlsjs) \| [Shaka](#media-shaka)|
|[playAttemptFailed warnings (`playAttemptFailed`)](#playattemptedfailed-warnings)||
|[Warnings (`warning`)](#warnings)| [Loading Javascript Components](#loading-js-warnings) \|  [Related](#related-warnings) \| [Captions](#captions-warnings) \| [VR](#vr-warnings) \| [Localization](#localization-warnings) \| [Casting](#casting-warnings) |


<br/>
<a name="setup"></a>

## Setup Errors

These errors prevent the player from setting up successfully; they occur after `jwplayer().setup()` is called, are dispatched in a "setupError" event and prevent the dispatch of the "ready" event.

<a name="misc"></a>

### Miscellaneous

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='100000'></a> 100000 | An unknown setup error occurred. | none| Sorry, the video player failed to load.|
|<a name='100001'></a> 100001 | Setup took longer than 30 seconds to complete. | Setup Timeout Error: Setup took longer than 30 seconds to complete.| Sorry, the video player failed to load.|
|<a name='100011'></a> 100011 | Missing license key: the key was not found in the setup config or the `jwplayer.key` global. | Error setting up player: Missing license key| Sorry, the video player failed to load.|
|<a name='100012'></a> 100012 | Invalid license key. | Error setting up player: Invalid license key| Sorry, the video player failed to load.|
|<a name='100013'></a> 100013 | Expired license key. | Error setting up player: Invalid license key| Sorry, the video player failed to load.|

<a name="loading-js"></a>

### Loading Javascript Components
Setup failed because the player could not load a necessary javascript component.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='101100'></a> 101100 | A component of the player failed to load. | Network error| Sorry, the video player failed to load.|
|<a name='101101'></a> 101101 | Failed to load the `jwplayer.core` component | Network error| Sorry, the video player failed to load.|
|<a name='101102'></a> 101102 | Failed to load the `jwplayer.core.controls` component | Network error| Sorry, the video player failed to load.|
|<a name='101103'></a> 101103 | Failed to load the `jwplayer.core.controls.polyfills` component | Network error| Sorry, the video player failed to load.|
|<a name='101104'></a> 101104 | Failed to load the `jwplayer.core.controls.html5` component | Network error| Sorry, the video player failed to load.|
|<a name='101105'></a> 101105 | Failed to load the `jwplayer.core.controls.polyfills.html5` component | Network error| Sorry, the video player failed to load.|
|<a name='101120'></a> 101120 | Failed to load the `polyfills.intersection-observer` component | Network error| Sorry, the video player failed to load.|
|<a name='104100'></a> 104100 | A playback component of the player (provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104151'></a> 104151 | The `provider.flash.js` playback component of the player (Flash provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104152'></a> 104152 | The `provider.html5.js` playback component of the player (HTML5 provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104153'></a> 104153 | The `provider.hlsjs.js` playback component of the player (HLS.JS provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104154'></a> 104154 | The `provider.shaka.js` playback component of the player (Shaka provider) failed to load | Failed to load media| Sorry, the video player failed to load.|

<a name="playlist-parsing"></a>

### Playlist Parsing
Setup failed because the requested playlist could not be parsed.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='102000'></a> 102000 | Unknown error. This is generally caused by an unknown XHR error or an exception thrown while parsing the content; for more context we recommend checking the source error. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='102001'></a> 102001 | The XHR request exceeded the timeout argument or the default of 60 seconds. | Error loading playlist: Timeout| Sorry, the video player failed to load.|
|<a name='102002'></a> 102002 | The browser failed to make the XHR request because it does not support `XMLHttpRequest`. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='102003'></a> 102003 | An exception was thrown while calling `xhr.open`. The reason varies depending on the browser, but the cause is usually a malformed URL. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='102004'></a> 102004 | An exception was thrown while calling `xhr.send`. The reason varies depending on the browser. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='102005'></a> 102005 | An exception was thrown in the XHR `requestFilter`. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='102006'></a> 102006 | The XHR request failed with a status code outside of the 400 and 500 ranges. | Error loading playlist: <xhr.status> (<xhr.statusText>)| Sorry, the video player failed to load.|
|<a name='102400-102599'></a> 102400-102599 | The XHR request failed and returned a valid HTTP status error (eg. 102404 is HTTP status code 404). | * Error loading playlist: File not found (http status code 404) <br/>* Error loading playlist: `<xhr.status>` (`<xhr.statusText>`)| Sorry, the video player failed to load.|
|<a name='102601'></a> 102601 | The DOMParser could not parse the XML; it must be malformed. | Error loading playlist: Invalid XML| Sorry, the video player failed to load.|
|<a name='102602'></a> 102602 | The XML did not return a response; it must be malformed. | Error loading playlist: Invalid XML| Sorry, the video player failed to load.|
|<a name='102611'></a> 102611 | The JSON could not be parsed; it must be invalid. | Error loading playlist: Invalid JSON| Sorry, the video player failed to load.|
|<a name='102621'></a> 102621 | The requested playlist is not a valid RSS or JSON feed. | Error loading playlist: Not a valid RSS/JSON feed| Sorry, the video player failed to load.|

<a name="empty-playlist"></a>

### Empty Playlist
Setup failed because an invalid playlist was requested.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='102630'></a> 102630 | Either an empty playlist was requested or none of the items passed our filter for valid files. | No playable sources found|This video file cannot be played.|
|<a name='102640'></a> 102640 | The playlist item could not be loaded because it is undefined or missing a valid source. | No media|This video file cannot be played.|


<br/>
<a name="player"></a>

## Player Errors
These errors stop playback and display an error message on the player's UI. They occur after the "ready" event is triggered, and are dispatched in an "error" event.

<a name="misc-error"></a>

### Miscellaneous
|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='200001'></a> 200001 | An exception occurred while completing the player's setup. | none| This video cannot be played because of a technical error.|

<a name="loading-new-playlist"></a>

### Loading New Playlist
These errors are dispatched when `jwplayer().load(content)` is called and the content cannot be loaded or played.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='202000'></a> 202000 | Unknown error. This is generally caused by an unknown XHR error or an exception thrown while parsing the content; for more context we recommend checking the source error. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='202001'></a> 202001 | Request exceeded timeout argument or default of 60 seconds. | Error loading playlist: Timeout| Sorry, the video player failed to load.|
|<a name='202002'></a> 202002 | The browser failed to make the XHR request because it does not support `XMLHttpRequest`. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='202003'></a> 202003 | An exception was thrown while calling `xhr.open`. The reason varies depending on the browser, but the cause is usually a malformed URL. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='202004'></a> 202004 | An exception was thrown while calling `xhr.send`. The reason varies depending on the browser. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='202005'></a> 202005 | An exception was thrown in the XHR `requestFilter`. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='202006'></a> 202006 | The XHR request failed with a status code outside of the 400 and 500 ranges. | Error loading playlist: Error loading file| Sorry, the video player failed to load.|
|<a name='202400-202599'></a> 202400-202599 | The XHR request failed and returned a valid HTTP status error (eg. 202404 is HTTP status code 404). | * Error loading playlist: File not found (http status code 404) <br/>* Error loading playlist: `<xhr.status>` (`<xhr.statusText>`)| Sorry, the video player failed to load.|
|<a name='202601'></a> 202601 | The DOMParser could not parse the XML; it must be malformed. | Error loading playlist: Invalid XML| Sorry, the video player failed to load.|
|<a name='202602'></a> 202602 | The XML did not return a response; it must be malformed. | Error loading playlist: Invalid XML| Sorry, the video player failed to load.|
|<a name='202611'></a> 202611 | The JSON could not be parsed; it must be invalid. | Error loading playlist: Invalid JSON| Sorry, the video player failed to load.|
|<a name='202621'></a> 202621 | The requested playlist is not a valid RSS or JSON feed. | Error loading playlist: Not a valid RSS/JSON feed| Sorry, the video player failed to load.|
|<a name='202630'></a> 202630 | Either an empty playlist was requested or none of the items passed our filter for valid files. | Playlist error: No playable sources found| Sorry, the video player failed to load.|

<a name="playlist-item"></a>

### Playlist Item
These errors occur when the player attempts to switch playlist items, either via normal playlist progression (an item ends and the following one loads) or when calling `jwplayer().next()`.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='203000'></a> 203000 | An error occurred when switching playlist items. | N/A| This video file cannot be played.|
|<a name='203100'></a> 203100 | A playback component of the player (the provider), required to play the requested item, failed to load between playlist items. | Playlist error: Failed to load media| This video file cannot be played.|
|<a name='203640'></a> 203640 | The playlist item could not be loaded because it is undefined or missing a valid source. | Playlist error: No media| This video file cannot be played.|

<a name="player-loading-js"></a>

### Loading Javascript Components
These errors occur when `jwplayer().load(content)` is called but the provider required to reproduce the media failed to load.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='204100'></a> 204100 | A playback component of the player (the provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204151'></a> 204151 | The `provider.flash.js` playback component of the player (Flash provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204152'></a> 204152 | The `provider.html5.js` playback component of the player (HTML5 provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204153'></a> 204153 | The `provider.hlsjs.js` playback component of the player (HLS.JS provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204154'></a> 204154 | The `provider.shaka.js` playback component of the player (Shaka provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|

<a name="media-flash"></a>

### Media Playback Flash
An error occured while reproducing content with our Flash Provider.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='210000'></a> 210000 | An unknown error occurred in the Flash player. | `<event.message>`| This video file cannot be played.|
|<a name='210001'></a> 210001 | The Flash player could not setup properly using the given player config. This error is generally browser specific. | Failed to setup flash| The video cannot be played in this browser.|
|<a name='210002'></a> 210002 | The Flash plugin was blocked from loading by the browser; the viewer must unblock the plugin to allow playback. This error is most likely to occur on IE11 for Windows 7, or when using a legacy media type that can only be played with Flash (e.g. FLV files). | Flash plugin failed to load| The video cannot be played in this browser.|
|<a name='214000'></a> 214000 | A media playback error occurred in the flash player. | `<event.message>`| This video file cannot be played.|

<a name="media-html5"></a>

### Media Playback HTML5
An error occured while reproducing content with our HTML5 Provider.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='220001'></a> 220001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using `config.liveTimeout`. | The live stream is either down or has ended| The live stream is either down or has ended.|
|<a name='221000'></a> 221000 | An unknown network error occurred. Equivalent to the HTML5 `MEDIA_ERR_NETWORK` mediaError. | Error loading media: Unknown network error| This video cannot be played because of a problem with your internet connection.|
|<a name='224000'></a> 224000 | An unknown media error occurred. | Error loading media: Unknown| This video cannot be played because of a technical error.|
|<a name='224001'></a> 224001 | Failed to fetch the associated resource. Equivalent to the HTML5 `MEDIA_ERR_ABORTED` mediaError. | Error loading media: Unknown operation aborted| This video file cannot be played.|
|<a name='224002'></a> 224002 | Failed to decode the associated resource. Equivalent to the HTML5 `MEDIA_ERR_DECODE` mediaError. | Error loading media: Unknown decode error| This video file cannot be played.|
|<a name='224003'></a> 224003 | Failed to reproduce the associated resource because its playback is not supported by this provider. Equivalent to the HTML5 `MEDIA_ERR_SRC_NOT_SUPPORTED` mediaError. | Error loading media: File could not be played| This video file cannot be played.|
|<a name='224005'></a> 224005 | The video tag `src` was set to empty (`""`) which resolved to the current page URL.  | - |This video file cannot be played.|
|<a name='225006'></a> 225006 | The License required to decrypt a Fairplay stream could not be loaded. The XHR request failed with a status code outside of the 400 and 500 ranges. | Error loading media: The license request failed| There was a problem providing access to protected content.|
|<a name='225400-225599'></a> 225400-225599 | The Server Certificate required to decrypt a Fairplay stream could not be loaded. The last 3 digits of the error code indicate the HTTP status code (eg. 225404 is HTTP status code 404). | Error loading media: Failed to retrieve the server certificate| There was a problem providing access to protected content.|
|<a name='225650'></a> 225650 | An error occurred when attempting to decrypt the Fairplay stream with the session key. Equivalent to Safari's "webkitkeyerror" event. | Error loading media: Decryption key error was encountered| There was a problem providing access to protected content.|
|<a name='226400-226599'></a> 226400-226599 | The License required to decrypt a Fairplay stream could not be loaded. The last 3 digits of the error code indicate the HTTP status code (eg. 226404 is HTTP status code 404). | Error loading media: The license request failed| There was a problem providing access to protected content.|

<a name="media-hlsjs"></a>

### Media Playback HLS.JS
An error occured while reproducing content with our HLS.JS Provider.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='230000'></a> 230000 | An unknown error occurred handling HLS media.| - | This video file cannot be played.|
|<a name='230001'></a> 230001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using `config.liveTimeout`. | The live stream is either down or has ended| The live stream is either down or has ended.|
|<a name='230002'></a> 230002 | Playback stalled after going offline, resulting in an unrecoverable error. | Network Error: No Internet Connection| This video cannot be played because of a problem with your internet connection.|
|<a name='232000'></a> 232000 | Unknown manifest loading error. | * Cannot load M3U8: `<data.reason>` <br/>* Cannot load M3U8: `<data.details>` <br/>* Cannot load M3U8: Unknown Network Error| This video cannot be played because of a technical error.|
|<a name='232001'></a> 232001 | An HLS manifest request timed out.| - | This video file cannot be played. |
|<a name='232002'></a> 232002 | A manifest request failed as a result of having been offline. | Network Error: Internet Connection Lost| This video cannot be played because of a problem with your internet connection.|
|<a name='232006'></a> 232006 | A manifest request returned with an HTTP status indicating failure. The code was outside of the 400 and 500 ranges. | Cannot load M3U8: <statusCode> <responseText>| This video cannot be played because of a technical error.|
|<a name='232011'></a> 232011 | A manifest request was made without proper crossdomain credentials. | Cannot load M3U8: Crossdomain access denied| This video cannot be played because of a technical error.|
|<a name='232012'></a> 232012 | A manifest request was made to an HTTP resource from HTTPS. | Cannot load M3U8: Unable to fetch HTTP resource over HTTPS| This video cannot be played because of a technical error.|
|<a name='232400-232599'></a> 232400-232599 | A manifest request returned with an HTTP status indicating failure. | * Cannot load M3U8: `<statusCode>` `<responseText>` <br/>* Cannot load M3U8: You do not have permission to access this content <br/>* Cannot load M3U8: 404 Not Found| This video cannot be played because of a technical error.|
|<a name='232600'></a> 232600 | The parent HLS manifest could not be parsed. | - |This video file cannot be played. |
|<a name='232631'></a> 232631 | The HLS rendition manifest did not contain playable media. | - | This video file cannot be played. |
|<a name='232632'></a> 232632 | The HLS manifest did not contain levels with compatible codecs. | - | The video cannot be played in this browser. |
|<a name='233000'></a> 233000 | An unknown media loading error occurred. | * Media Error: `<data.reason>` <br/>* Media Error: `<data.details>` <br/>* Media Error: Unknown Network Error| This video cannot be played because of a technical error.|
|<a name='233001'></a> 233001 | An HLS media request timed out. | - | This video file cannot be played. |
|<a name='233006'></a> 233006 | A media request returned with an HTTP status indicating failure. The code was outside of the 400 and 500 ranges. | Media Error: `<statusCode>` `<responseText>`| This video cannot be played because of a technical error.|
|<a name='233011'></a> 233011 | A media request was made without proper crossdomain credentials. | Media Error: Crossdomain access denied| This video cannot be played because of a technical error.|
|<a name='233012'></a> 233012 | A media request was made to an HTTP resource from HTTPS. | Media Error: Unable to fetch HTTP resource over HTTPS| This video cannot be played because of a technical error.|
|<a name='233400-233599'></a> 233400-233599 | A media request returned with an HTTP status indicating failure (eg. 233404 is HTTP status code 404). | * Media Error: `<statusCode>` `<responseText>` <br/>* Media Error: You do not have permission to access this content <br/>* Media Error: 404 Not Found| This video cannot be played because of a technical error.|
|<a name='233600'></a> 233600 | A media fragment could not be parsed. | - | This video file cannot be played. |
|<a name='233650'></a> 233650 | An AES encoded fragment could not be decrypted. | - |This video file cannot be played. |
|<a name='234001'></a> 234001 | HLS playback has stalled because not enough media is buffered. | - | This video file cannot be played. |
|<a name='234002'></a> 234002 | An error occurred appending HLS media to the buffer. | - | This video file cannot be played. |
|<a name='235001'></a> 235001 | An HLS AES key request timed out. | - | This video file cannot be played. |
|<a name='239000'></a> 239000 | An internal error occurred handling an event callback during HLS playback. | - | This video file cannot be played. |

<a name="media-shaka"></a>

### Media Playback Shaka
An error occured while reproducing content with our Shaka Provider.

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='240000'></a> 240000 | A miscellaneous and uncategorized DASH related error occurred. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='241000'></a> 241000 | Unknown network error. | Error loading media: File could not be played|This video cannot be played because of a technical error.|
|<a name='241001'></a> 241001 | A DASH-related network request timed out.|Error loading media: File could not be played | This video file cannot be played. |
|<a name='241004'></a> 241004 | A DASH-related network request could not be made because the url is malformed. | Error loading media: File could not be played | This video file cannot be played.|
|<a name='241005'></a> 241005 | An error was thrown inside a DASH-related network filter. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='241010'></a> 241006 | A network request returned with an HTTP status indicating failure; the code was outside of the 400 and 500 ranges. | Error loading media: Unknown Network Error|This video cannot be played because of a technical error.|
|<a name='241011'></a> 241011 | A network request was made without proper crossdomain credentials. | Error loading media: Crossdomain access denied|This video cannot be played because of a technical error.|
|<a name='241012'></a> 241012 | A network request was made to an HTTP resource from HTTPS. | Error loading media: Unable to fetch HTTP resource over HTTPS|This video cannot be played because of a technical error.|
|<a name='241400-241599'></a> 241400-241599 | A network request returned with an HTTP status indicating failure (eg. 241404 is HTTP status code 404). | * Error loading media: `<statusCode>` `<responseText>` <br/>* Error loading media: You do not have permission to access this content <br/>* Error loading media: 404 Not Found|This video cannot be played because of a technical error.|
|<a name='242600'></a> 242600 | A miscellaneous DASH-related manifest parsing error occurred. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='242601'></a> 242601 | An invalid XML DASH-related manifest parsing error occurred. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='242632'></a> 242632 | The DASH manifest does not contain any content supported by the current browser. | Error loading media: File could not be played | The video cannot be played in this browser. |
|<a name='242635'></a> 242635 | Key system restrictions prevented playback of a DASH manifest.|Error loading media: File could not be played | This video file cannot be played. |
|<a name='244000'></a> 244000 | A miscellaneous DASH-related media error occurred.|Error loading media: File could not be played | This video file cannot be played. |
|<a name='244001-244003'></a> 244001-244003 | The video element reported an error during DASH playback. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='244604'></a> 244604 | The MP4 SIDX parser found the wrong box type.<br/><br/>JW Player attempts to switch levels when this occurs but triggers this error when there are no other levels to select. | Error loading media: File could not be played|This video file cannot be played. |
|<a name='246000'></a> 246000 | A miscellaneous DASH-related DRM error occurred. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='249000'></a> 249000 | A miscellaneous DASH-related player error occurred. | Error loading media: File could not be played | This video file cannot be played. |
|<a name='340000'></a> 340000  |A recoverable DASH-related error has been thrown. | Error loading media: File could not be played | This video file cannot be played. |


<br/>

## playAttemptFailed Warnings
<a name="playattemptedfailed-warnings"></a>

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='303200'></a> 303200 | The play attempt failed for unknown reasons. | - | - | 
|<a name='303210'></a> 303210 | The play attempt was interrupted for unknown reasons. | - | - | 
|<a name='303212'></a> 303212 | The play attempt was interrupted by a new load request. | - | - | 
|<a name='303213'></a> 303213 | The play attempt was interrupted by a call to pause(). | - | - | 
|<a name='303220'></a> 303220 | The play attempt failed because the user didn't interact with the document first, or disabled auto-play completely. | - | - | 
|<a name='303230'></a> 303230 | The play attempt failed because no supported source was found. | - | - |


<br/>
<a name="warnings"></a>

## Warnings
When a warning occurs, video player functionality is not interrupted, but may be degraded.

<a name="loading-js-warnings"></a>

### Loading Javascript Components

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='301121'></a> 301121 | The polyfills.webvtt.js file failed to load. VTT captions cannot be displayed. | Captions renderer failed to load | - |
|<a name='301129'></a> 301129 | The related.js file failed to load. | - | - |
|<a name='301130'></a> 301130 | The jwplayer.controls.js failed to load. Controls will not be displayed. | Controls failed to load | - |
|<a name='301131'></a> 301131 | The vttparser.js file failed to load. VTT captions cannot be displayed. | Captions failed to load | - |
|<a name='301161'></a> 301161 | The provider.cast.js file failed to load. Chromecast cannot be enabled. | Casting failed to load | - |
|<a name='301162'></a> 301162 | The provider.airplay.js file failed to load. Airplay cannot be enabled. | Casting failed to load | - |
|<a name='305000'></a> 305000 | An unknown plugin file failed to load. | - | - |
|<a name='305001'></a> 305001 | The jwpsrv.js file failed to load. | - | - |
|<a name='305002'></a> 305002 | The googima.js file failed to load. | - | - |
|<a name='305003'></a> 305003 | The vast.js file failed to load. | - | - |
|<a name='305004'></a> 305004 | The freewheel.js file failed to load. | - | - |
|<a name='305005'></a> 305005 | The dai.js file failed to load. | - | - |
|<a name='305006'></a> 305006 | The gapro.js file failed to load. | - | - |
|<a name='305100'></a> 305000 | An unknown plugin file loaded, but was not registered. | - | - |
|<a name='305001'></a> 305001 | The jwpsrv.js file loaded, but was not registered. | - | - |
|<a name='305002'></a> 305002 | The googima.js file loaded, but was not registered. | - | - |
|<a name='305003'></a> 305003 | The vast.js file loaded, but was not registered. | - | - |
|<a name='305004'></a> 305004 | The freewheel.js file loaded, but was not registered. | - | - |
|<a name='305005'></a> 305005 | The dai.js file loaded, but was not registered. | - | - |
|<a name='305006'></a> 305006 | The gapro.js file loaded, but was not registered. | - | - |

<a name="related-warnings"></a>

### Related

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='302001'></a> 302001 | Request exceeded timeout argument or default of 60 seconds. | - | - |
|<a name='302002'></a> 302002 | The browser failed to make the request because `XMLHttpRequest` is not supported. | - | - |
|<a name='302003'></a> 302003 | An exception was thrown calling `xhr.open`. This is usually due to a malformed URL. | - | - |
|<a name='302004'></a> 302004 | An exception was thrown calling `xhr.send`. | - | - |
|<a name='302400-302599'></a> 302400-302599 |An HTTP status error occurred. | - | - |
|<a name='302601'></a> 302601 |Playlist was a malformed XML file. | - | - |
|<a name='302602'></a> 302602 |Playlist XML was empty. | - | - |
|<a name='302611'></a> 302611 |Playlist was a malformed JSON file. | - | - |

<a name="captions-warnings"></a>

### Captions

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='306001'></a> 306001 | Request exceeded timeout argument or default of 60 seconds. | Captions failed to load | - |
|<a name='306002'></a> 306002 | The browser failed to make the request because `XMLHttpRequest` is not supported. | Captions failed to load | - |
|<a name='306003'></a> 306003 | An exception was thrown calling `xhr.open`. This is usually due to a malformed URL. | Captions failed to load | - |
|<a name='306004'></a> 306004 | An exception was thrown calling `xhr.send`. | Captions failed to load | - |
|<a name='306400-306599'></a> 306400-306599 |An HTTP status error occurred. | Captions failed to load | - |
|<a name='306005'></a> 306005 | DFXP captions could not be parsed due to an invalid DFXP file. | Captions failed to load | - |
|<a name='306006'></a> 306006 | XML could not be parsed from the DFXP file. | Captions failed to load | - |
|<a name='306007'></a> 306007 | The DFXP file did not contain XML. | Captions failed to load | - |
|<a name='306008'></a> 306008 | VTT captions could not be parsed due to an invalid VTT file. | Captions failed to load | - |
|<a name='306009'></a> 306009 | An unknown captions parsing error occurred.|Captions failed to load | - |

<a name="vr-warnings"></a>

### VR

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='307001'></a> 307001 | The browser does not support WebGL, which is required to render 360 video. Video will be rendered without 3D transformation. | 360° video playback is not supported in this browser. | - |

<a name="localization-warnings"></a>

### Localization

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='308000'></a> 308000 |An unknown error occurred while trying to load one of the translation JSON files. | - | - |
|<a name='308001'></a> 308001 |Request exceeded timeout argument or default of 60 seconds. | - | - |
|<a name='308400-308599'></a> 308400-308599 |An attempt to load a translation JSON file resulted in an HHTP status error | - | - |
|<a name='308611'></a> 308611 |A translation JSON file could not be parsed. | - | - |
|<a name='308640'></a> 308640 |An attempt to load a translation JSON file resulted in an empty response. | - | - |

<a name="casting-warnings"></a>

### Casting

|Code|Reason|Deprecated Error Message (Prior to 8.4.0)|Displayed Message|
|---|---|---|---|
|<a name='350000'></a> 350000 | A cast server error has occurred. | - | - |

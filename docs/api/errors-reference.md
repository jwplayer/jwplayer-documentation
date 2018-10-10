# Error event object

(Intro)

<a name='error-object'></a>

```javascript
{
  "code": 104153,
  "message": "Sorry, the video player failed to load.",
  "sourceError": {
    Error object or null 
  },
  "type": "setupError"
}
```

|Property|Type|Description|
|---|---|---|
|code|Number|ID of the error or warning|
|message|string|Error message displayed to the user<br/><br/>You can localize these messages.|
|sourceError|Object|The lower level error or event, caught by the player, which resulted in this error.|
|type|String|Category of error or warning<br/><br/>Possible values include:<br/>- error: (definition)<br/>- playAttemptFailed: (definition)<br/>- [setupError](#setuperror): (definition)<br/>- warning: (definition)|


<br/><br/>
<a name='setuperror'></a>

## setupError property

<table style="width:400px">

|Code|Reason|`message` <sup>< 8.4.0</sup>|`message` <sup> 8.4.0+|
|---|---|---|---|
|<a name='100000'></a> 100000 | An unknown setup error occurred. | none| Sorry, the video player failed to load.|
|<a name='100001'></a> 100001 | Setup took longer than 30 seconds to complete. | Setup Timeout Error: Setup took longer than 30 seconds to complete.| Sorry, the video player failed to load.|
|<a name='100011'></a> 100011 | Missing license key: the key was not found in the setup config or the `jwplayer.key` global. | Error setting up player: Missing license key| Sorry, the video player failed to load.|
|<a name='100012'></a> 100012 | Invalid license key. | Error setting up player: Invalid license key| Sorry, the video player failed to load.|
|<a name='100013'></a> 100013 | Expired license key. | Error setting up player: Invalid license key| Sorry, the video player failed to load.|
|<a name='101100'></a> 101100 | A component of the player failed to load. | Network error| Sorry, the video player failed to load.|
|<a name='101101'></a> 101101 | Failed to load the `jwplayer.core` component | Network error| Sorry, the video player failed to load.|
|<a name='101102'></a> 101102 | Failed to load the `jwplayer.core.controls` component | Network error| Sorry, the video player failed to load.|
|<a name='101103'></a> 101103 | Failed to load the `jwplayer.core.controls.polyfills` component | Network error| Sorry, the video player failed to load.|
|<a name='101104'></a> 101104 | Failed to load the `jwplayer.core.controls.html5` component | Network error| Sorry, the video player failed to load.|
|<a name='101105'></a> 101105 | Failed to load the `jwplayer.core.controls.polyfills.html5` component | Network error| Sorry, the video player failed to load.|
|<a name='101120'></a> 101120 | Failed to load the `polyfills.intersection-observer` component | Network error| Sorry, the video player failed to load.|
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
|<a name='102630'></a> 102630 | Either an empty playlist was requested or none of the items passed our filter for valid files. | No playable sources found|This video file cannot be played.|
|<a name='102640'></a> 102640 | The playlist item could not be loaded because it is undefined or missing a valid source. | No media|This video file cannot be played.|
|<a name='104100'></a> 104100 | A playback component of the player (provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104151'></a> 104151 | The `provider.flash.js` playback component of the player (Flash provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104152'></a> 104152 | The `provider.html5.js` playback component of the player (HTML5 provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104153'></a> 104153 | The `provider.hlsjs.js` playback component of the player (HLS.JS provider) failed to load | Failed to load media| Sorry, the video player failed to load.|
|<a name='104154'></a> 104154 | The `provider.shaka.js` playback component of the player (Shaka provider) failed to load | Failed to load media| Sorry, the video player failed to load.|

</table>
<br/><br/>
***
<a name='setuperror'></a>

## error property

These errors stop playback and display an error message on the player's UI. They occur after the "ready" event is triggered, and are dispatched in an "error" event.
<table>
<col width="10%">
<col width="30%">
<col width="30%">
<col width="30%">

|Code|Reason|`message` <sup>< 8.4.0</sup>|`message` <sup> 8.40+|
|---|---|---|---|
|<a name='200001'></a> 200001 | An exception occurred while completing the player's setup. | none| This video cannot be played because of a technical error.|
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
|<a name='203000'></a> 203000 | An error occurred when switching playlist items. | N/A| This video file cannot be played.|
|<a name='203100'></a> 203100 | A playback component of the player (the provider), required to play the requested item, failed to load between playlist items. | Playlist error: Failed to load media| This video file cannot be played.|
|<a name='203640'></a> 203640 | The playlist item could not be loaded because it is undefined or missing a valid source. | Playlist error: No media| This video file cannot be played.|
|<a name='204100'></a> 204100 | A playback component of the player (the provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204151'></a> 204151 | The `provider.flash.js` playback component of the player (Flash provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204152'></a> 204152 | The `provider.html5.js` playback component of the player (HTML5 provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204153'></a> 204153 | The `provider.hlsjs.js` playback component of the player (HLS.JS provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='204154'></a> 204154 | The `provider.shaka.js` playback component of the player (Shaka provider) failed to load. | Could not play video: Failed to load media| This video file cannot be played.|
|<a name='210000'></a> 210000 | An unknown error occurred in the Flash player. | `<event.message>`| This video file cannot be played.|
|<a name='210001'></a> 210001 | The Flash player could not setup properly using the given player config. This error is generally browser specific. | Failed to setup flash| The video cannot be played in this browser.|
|<a name='210002'></a> 210002 | The Flash plugin was blocked from loading by the browser; the viewer must unblock the plugin to allow playback. This error is most likely to occur on IE11 for Windows 7, or when using a legacy media type that can only be played with Flash (e.g. FLV files). | Flash plugin failed to load| The video cannot be played in this browser.|
|<a name='214000'></a> 214000 | A media playback error occurred in the flash player. | `<event.message>`| This video file cannot be played.|
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
|<a name='230000'></a> 230000 | An unknown error occurred handling HLS media.| - | This video file cannot be played.|
|<a name='230001'></a> 230001 | Occurs when a live stream has stalled for more than 30 seconds. The timeout can be configured at setup using `config.liveTimeout`. | The live stream is either down or has ended| The live stream is either down or has ended.|
|<a name='230002'></a> 230002 | Playback stalled after going offline, resulting in an unrecoverable error. | Network Error: No Internet Connection| This video cannot be played because of a problem with your internet connection.|
|<a name='232000'></a> 232000 | Unknown manifest loading error. | * Cannot load M3U8: `<data.reason>` <br/>* Cannot load M3U8: `<data.details>` <br/>* Cannot load M3U8: Unknown Network Error| This video cannot be played because of a technical error.|
|<a name='232002'></a> 232002 | A manifest request failed as a result of having been offline. | Network Error: Internet Connection Lost| This video cannot be played because of a problem with your internet connection.|
|<a name='232006'></a> 232006 | A manifest request returned with an HTTP status indicating failure. The code was outside of the 400 and 500 ranges. | Cannot load M3U8: <statusCode> <responseText>| This video cannot be played because of a technical error.|
|<a name='232011'></a> 232011 | A manifest request was made without proper crossdomain credentials. | Cannot load M3U8: Crossdomain access denied| This video cannot be played because of a technical error.|
|<a name='232012'></a> 232012 | A manifest request was made to an HTTP resource from HTTPS. | Cannot load M3U8: Unable to fetch HTTP resource over HTTPS| This video cannot be played because of a technical error.|
|<a name='232400-232599'></a> 232400-232599 | A manifest request returned with an HTTP status indicating failure. | * Cannot load M3U8: `<statusCode>` `<responseText>` <br/>* Cannot load M3U8: You do not have permission to access this content <br/>* Cannot load M3U8: 404 Not Found| This video cannot be played because of a technical error.|
|<a name='233000'></a> 233000 | An unknown media loading error occurred. | * Media Error: `<data.reason>` <br/>* Media Error: `<data.details>` <br/>* Media Error: Unknown Network Error| This video cannot be played because of a technical error.|
|<a name='233006'></a> 233006 | A media request returned with an HTTP status indicating failure. The code was outside of the 400 and 500 ranges. | Media Error: `<statusCode>` `<responseText>`| This video cannot be played because of a technical error.|
|<a name='233011'></a> 233011 | A media request was made without proper crossdomain credentials. | Media Error: Crossdomain access denied| This video cannot be played because of a technical error.|
|<a name='233012'></a> 233012 | A media request was made to an HTTP resource from HTTPS. | Media Error: Unable to fetch HTTP resource over HTTPS| This video cannot be played because of a technical error.|
|<a name='233400-233599'></a> 233400-233599 | A media request returned with an HTTP status indicating failure (eg. 233404 is HTTP status code 404). | * Media Error: `<statusCode>` `<responseText>` <br/>* Media Error: You do not have permission to access this content <br/>* Media Error: 404 Not Found| This video cannot be played because of a technical error.|
|<a name='240000'></a> 240000 | Unknown shaka error; for more context we recommend checking the source error. | Error playing file: Unknown playback error|This video cannot be played because of a technical error.|
|<a name='241000'></a> 241000 | Unknown network error. | Error loading media: File could not be played|This video cannot be played because of a technical error.|
|<a name='241010'></a> 241006 | A network request returned with an HTTP status indicating failure; the code was outside of the 400 and 500 ranges. | Error loading media: Unknown Network Error|This video cannot be played because of a technical error.|
|<a name='241011'></a> 241011 | A network request was made without proper crossdomain credentials. | Error loading media: Crossdomain access denied|This video cannot be played because of a technical error.|
|<a name='241012'></a> 241012 | A network request was made to an HTTP resource from HTTPS. | Error loading media: Unable to fetch HTTP resource over HTTPS|This video cannot be played because of a technical error.|
|<a name='241400-241599'></a> 241400-241599 | A network request returned with an HTTP status indicating failure (eg. 241404 is HTTP status code 404). | * Error loading media: `<statusCode>` `<responseText>` <br/>* Error loading media: You do not have permission to access this content <br/>* Error loading media: 404 Not Found|This video cannot be played because of a technical error.|

</table>

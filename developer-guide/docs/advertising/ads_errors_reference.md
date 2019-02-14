# Ads Errors Reference

JW Player is excited to help you monetize your content. With that being said, the complex nature of video advertising means that ad-related errors will happen from time to time. We hope that this list of error codes provides some insight into possible reasons that you are seeing these errors. We also have included possible solutions that may lead you to being able to resolve the issue.

If you are still seeing ad-related issue after trying any applicable solutions, we highly recommend contacting your ad provider for further troubleshooting. This is because the player is primarily making the ad request using the URL you embed in the player and it is the responsibility of the ad provider to respond with a VAST-compatible response that the player can then display to your viewers. If they determine that they believe the issue is with the player, please open a case with [our Support Team](https://support.jwplayer.com/).

<br/>
## Ad Client Specifications

Errors often happen because ad tags or creatives are out of spec with either VAST or Google IMA. For this reason, we encourage publishers to refer to the respective specifications for the ad client they are using below:

[VAST 3.0 Specification](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-3-0/)<br/>
[VAST 4.0 Specification](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-4-0/)<br/>
[Google IMA SDK for HTML5 v3](https://developers.google.com/interactive-media-ads/docs/sdks/html5/)

<br/>
## Ad Error Code Categories

|Code Range|Category|
|---|---|
|[1xxxx](#vast)|[VAST (General)](#vast)|
|[2xxxx](#ima)|[IMA](#ima)|
|[5xxxx](#vpaid)|[VAST (VPAID-Specific)](#vpaid)|
|[6xxxx](#jw)|[JW Player-Specific Errors](#jw)|

<br/>
<a name="vast"></a>
## VAST General Error Codes (1xxxx)
Updated January 30, 2018

|VAST Error Code|JW Error Code|Error|Possible Causes|Possible Solutions|
|---|---|---|---|---|
|`100`|`10100`|XML parsing error|<p>VAST supplied is not a valid XML document.</p><p>URL supplied does not resolve to a valid XML document.</p><p>Perhaps a CORS issue.</p>|<p>Check the CORS headers of the domain hosting the XML to make sure they are configured to allow the domain of the page access.</p>|
|`101`|`10101`|VAST schema validation error|<p>The VAST validates as XML, but does not validate per the VAST schema. This could due to missing mandatory elements/attributes, or combinations of elements/attributes that are not permissible.</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p><p>Some ad providers use empty VAST 3.0 responses to show that they have received the request but do not wish to fill it.</p>|
|`102`|`10102`|VAST version of response not supported|<p>Bidder did not respect the VAST version(s) in the bid request.</p><p>Exchange is sending the wrong VAST version(s) in the bid request.</p><p>The VAST does not contain the version. This could also be considered a schema validation issue.</p>|<p>JW Player 8 does not provide support for VAST 1.0 ads.</p>|
|`301`|`10301`|Timeout of VAST URI provided in Wrapper element, or of VAST URI provided in a subsequent Wrapper element|<p>Invalid URI</p><p>Unreachable or request timeout for URI</p><p>Security or other exceptions related to requesting a VAST URI</p><p>This can be caused by requesting a secure (HTTPS) resource on a non-secure (HTTP) page</p>|<p>Check that the VAST URI is valid and reachable</p><p>Check whether this occurs more on mobile devices</p><p>Check whether or not issue is reproducible on a non-secure (HTTP) version of your page</p><p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience</p>|
|`303`|`10303`|No ads VAST response after one or more Wrappers. Also includes the number of empty VAST responses from fallback.|<p>No Ad element in VAST document after following wrappers</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p>|
|`400`|`10400`|General linear error. Video player is unable to display the linear ad.|<p>MediaFile is not a valid video file of the specified format</p>|<p>Check to see if MediaFile’s format is valid and supported</p><p>Does the MediaFile’s URI actually return a video asset?</p>|
|`401`|`10401`|File not found. Unable to find Linear/MediaFile from URI|<p>URI of Linear/MediaFile is not valid</p>|<p>Does the Linear/MediaFile’s URI actually return a valid asset?</p>|
|`402`|`10402`|Timeout of MediaFile URI|<p>Issue with CDN server</p><p>Timeout (in milliseconds) when loading a video ad media file. If loading takes longer than this timeout, the ad playback is canceled</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the media file</p><p>Can occur when a video auto-plays in a mobile environment, since it should be click-to-play (there are some exceptions)</p>|<p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience</p>|
|`403`|`10403`|Could not find MediaFile that is supported by this video player, based on the attributes of the MediaFile element.|<p>Bidder did not respect the MIME types in the bid request</p><p>Exchange did not send the correct MIME types</p><p>This may indicate that the wrong creative type attempted to play. For example, a Flash creative attempted to play on a mobile device or a browser that does not support Flash.</p><p>Ad is inline but no compatible media file is found. Generally, if the player reaches a point where it sees no MediaFiles in the array of mediafiles considered eligible.</p>|<p>Reach out to your ad provider to request only HTML5-compatible creatives.</p>|
|`405`|`10405`|Problem displaying MediaFile|<p>CORS issue on CDN server</p><p>Unsupported codecs</p><p>Mismatch between MIME type and video file type</p><p>Unsupported delivery method</p>||
|`408`|`10408`|Conditional ad rejected|<p>This is not so much an error as it is expected when the `conditionaladoptout` configuration option is enabled and a conditional ad is found.</p>||
|`502`|`10502`|Unable to fetch NonLinearAds/NonLinear resource|<p>Issue with CDN server</p>||
|`900`|`10900`|Undefined error|<p>This error is usually fired when the error does not match the criteria of any of the other errors.</p>||
|`1000`|`11000`|VMAP schema error|<p>The VPAID validates as XML, but does not validate per the VPAID schema. This could due to missing mandatory elements/attributes, or combinations of elements/attributes that are not permissible.</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p><p>Some ad providers use empty VAST 3.0 responses to show that they have received the request but do not wish to fill it.</p>|
|`1002`|`11002`|VMAP parsing error|<p>This error can be fired when the error does not match the criteria of any of the other VMAP-related errors.</p>||
|`1007`|`11007`|Ad response document retrieval timeout|<p>Issue with CDN server</p><p>Timeout (in milliseconds) when loading an ad response. If loading takes longer than this timeout, the ad playback is canceled.</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the ad response.</p>|<p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.</p>|
|`1008`|`11008`|Ad response document retrieval error|<p>CDN responsed with an error code.</p>||

<br/>
<a name="vpaid"></a>
## VAST VPAID Error Codes (5xxxx)
Updated January 30, 2018

|VAST Error Code|JW Error Code|Error|Possible Causes|Possible Solutions|
|---|---|---|---|---|
|`100`|`50100`|VPAID parsing error|<p>VAST supplied is not a valid XML document.</p><p>URL supplied does not resolve to a valid XML document.</p><p>Perhaps a CORS issue.</p>|<p>Check on the CORS headers of the domain hosting the XML to make sure they are properly configured to allow the domain of the page access.</p>|
|`400`|`50400`|VPAID general linear error|<p>MediaFile is not a valid video file of the specified format.</p>|<p>Check to see if MediaFile’s format is valid and supported.</p><p>Does the MediaFile’s URI actually return a video asset?</p>|
|`401`|`50401`|VPAID file not found|<p>URI of Linear/MediaFile is not valid.</p>|<p>Does the Linear/MediaFile’s URI actually return a valid asset?</p>|
|`402`|`50402`|VPAID playback timed out|<p>Issue with CDN server.</p><p>Timeout (in milliseconds) when loading a VPAID ad. If loading takes longer than this timeout, the ad playback is canceled.</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the VPAID ad.</p>|<p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.</p>|
|`405`|`50405`|VPAID file could not be played|||
|`900`|`50004`|VPAID ad request reached a timeout|<p>Issue with CDN server.</p><p>Timeout (in milliseconds) when loading a VPAID ad. If loading takes longer than this timeout, the ad playback is canceled.</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the VPAID ad.</p>|<p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.</p>|
|`901`|`50901`|VPAID general error|<p>This is a general error that may be fired for a number of reasons due to the fact that VPAID ads often do not provide the player with a lot of information about errors.</p>||

<br/>
<a name="ima"></a>
## IMA Error Codes (2xxxx)
Updated January 30, 2018

|IMA Error Code|JW Error Code|Error|Possible Causes|Possible Solutions|
|---|---|---|---|---|
|-|`20000`|IMA SDK download failed|<p>Ad blocker caused the IMA SDK not to download</p>||
|`100`|`20100`|`VAST_MALFORMED_RESPONSE`<br/><br/>The ad response was not recognized as a valid VAST ad.|<p>VAST supplied is not a valid XML document.</p><p>URL supplied does not resolve to a valid XML document.</p><p>Perhaps a CORS issue.</p>|<p>Check on the CORS headers of the domain hosting the XML to make sure they are properly configured to allow the domain of the page access.</p>|
|`101`|`20101`|`VAST_SCHEMA_VALIDATION_ERROR`|<p>The VAST validates as XML, but does not validate per the VAST schema. This could due to missing mandatory elements/attributes, or combinations of elements/attributes that are not permissible.</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p><p>Some ad providers use empty VAST 3.0 responses to show that they have received the request but do not wish to fill it.</p>|
|`102`|`20102`|`VAST_UNSUPPORTED_VERSION`|<p>Bidder did not respect the VAST version(s) in the bid request.</p><p>Exchange is sending the wrong VAST version(s) in the bid request.</p>|<p>JW Player 8 does not provide support for VAST 1.0 ads.</p>|
|`200`|`20200`|`VAST_TRAFFICKING_ERROR`|<p>The player received an ad type that it was not expecting and/or cannot display.</p>||
|`201`|`20201`|`VAST_UNEXPECTED_LINEARITY`|<p>Ad linearity is different from what the video player is expecting.</p>||
|`202`|`20202`|`VAST_UNEXPECTED_DURATION_ERROR`|<p>VAST duration is different from the actual media file duration.</p>||
|`300`|`20300`|`VAST_WRAPPER_ERROR`|<p>General VAST wrapper error.</p>||
|`301`|`20301`|`VAST_LOAD_TIMEOUT`|<p>Invalid URI</p><p>Unreachable or request timeout for URI</p><p>Security or other exceptions related to requesting a VAST URI.</p><p>This can be caused by requesting a secure (HTTPS) resource on a non-secure (HTTP) page.</p>|<p>Check that the VAST URI is valid and reachable.</p><p>Check whether this occurs more on mobile devices.</p><p>Check whether or not issue is reproducible on a non-secure (HTTP) version of your page.</p><p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.</p>|
|`302`|`20302`|`VAST_TOO_MANY_REDIRECTS`|<p>The maximum number of VAST wrapper redirects has been reached.</p>||
|`303`|`20303`|`VAST_NO_ADS_AFTER_WRAPPER`|<p>No Ad element in VAST document after following wrappers.</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p>|
|`400`|`20400`|`VIDEO_PLAY_ERROR`|<p>MediaFile is not a valid video file of the specified format.</p>|<p>Check to see if MediaFile’s format is valid and supported.</p><p>Does the MediaFile’s URI actually return a video asset?</p>|
|`402`|`20402`|`VAST_MEDIA_LOAD_TIMEOUT`|<p>Issue with CDN server.</p><p>Timeout (in milliseconds) when loading a video ad media file. If loading takes longer than this timeout, the ad playback is canceled.</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the media file.</p><p>Can occur when a video auto-plays in a mobile environment, since it should be click-to-play (there are some exceptions).</p>|<p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.</p>|
|`403`|`20403`|`VAST_LINEAR_ASSET_MISMATCH`|<p>Bidder did not respect the MIME types in the bid request.</p><p>Exchange did not send the correct MIME types.</p><p>This may indicate that the wrong creative type attempted to play. For example, a Flash creative attempted to play on a mobile device or a browser that does not support Flash.</p><p>Ad is inline but no compatible media file is found. Generally, if the player reaches a point where it sees no MediaFiles in the array of mediafiles considered eligible.</p>|<p>Reach out to your ad provider to request only HTML5-compatible creatives.</p>|
|`405`|`20405`|`VAST_PROBLEM_DISPLAYING_MEDIA_FILE`|<p>CORS issue on CDN server.</p><p>Unsupported codecs.</p><p>Mismatch between MIME type and video file type.</p><p>Unsupported delivery method.</p>||
|`500`|`20500`|`OVERLAY_AD_PLAYING_FAILED`|<p>An overlay ad failed to render.</p>||
|`501`|`20501`|`NONLINEAR_DIMENSIONS_ERROR`|<p>Unable to display NonLinear ad because creative dimensions do not align with creative display area (i.e. creative dimension too large).</p>||
|`502`|`20502`|`OVERLAY_AD_LOADING_FAILED`|<p>Issue with CDN server</p>||
|`503`|`20503`|`VAST_NONLINEAR_ASSET_MISMATCH`|<p>Assets were found in the VAST ad response for nonlinear ad, but none of them matched the video player's capabilities.</p>||
|`602`|`20602`|`COMPANION_REQUIRED_ERROR`|<p>Unable to display one or more required companions. The master ad is discarded since the required companions could not be displayed.</p>||
|`603`|`20603`|`COMPANION_AD_LOADING_FAILED`|<p>A companion ad failed to load or render.</p>||
|`900`|`20900`|`UNKNOWN_ERROR`|<p>An unexpected error occurred and the cause is not known. Refer to the inner error for more information.</p><p>This error is usually fired when the error does not match the criteria of any of the other errors.</p>||
|`901`|`20901`|`VPAID_ERROR`|<p>A VPAID error occurred. Refer to the inner error for more information.</p>||
|`1005`|`21005`|`FAILED_TO_REQUEST_ADS`|<p>There was a problem requesting ads from the server.</p>||
|`1007`|`21007`|`VAST_ASSET_NOT_FOUND`|<p>No assets were found in the VAST ad response.</p><p>Issue with CDN server.</p><p>Timeout (in milliseconds) when loading an ad response. If loading takes longer than this timeout, the ad playback is canceled.</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the ad response.</p>|The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.|
|`1009`|`21009`|`VAST_EMPTY_RESPONSE`|<p>Empty VAST response</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p>|
|`1010`|`21010`|`UNKNOWN_AD_RESPONSE`|<p>The ad response was not understood and cannot be parsed.</p>||
|`1011`|`21011`|`UNSUPPORTED_LOCALE`|<p>The language specified in the setLocale configuration option does not match any of the [two-letter ISO 639-1 country codes](https://www.loc.gov/standards/iso639-2/php/English_list.php).</p>||
|`1012`|`21012`|`ADS_REQUEST_NETWORK_ERROR`|<p>Issue with the CDN server.</p>||
|`1013`|`21013`|`INVALID_AD_TAG`|<p>The encoding of the ad tag URL is incorrect.</p>|<p>Check the encoding of special characters in the URL of your ad tag.</p>|
|`1020`|`21020`|`STREAM_INITIALIZATION_FAILED`|<p>The stream that contains server-side ad insertion fails to play.</p>|<p>Contact your streaming provider.</p>|
|`1021`|`21021`|`ASSET_FALLBACK_FAILED`|<p>The ad provider did not return a valid ad using the fallback.</p>|<p>Contact your ad provider.</p>|
|`1101`|`21101`|`INVALID_ARGUMENTS`|<p>You probably will not see this error when using JW Player.</p>||
|`1105`|`21105`|`INVALID_ADX_EXTENSION`|<p>An invalid AdX extension was found.</p>||
|`1205`|`21205`|`AUTOPLAY_DISALLOWED`|<p>The viewer’s autoplay settings in their browser prevented the ad from autoplaying.</p>|<p>Configure your player to be click-to-play.</p>|

<br/>
<a name="jw"></a>
## JW Player-specific Error Codes (6xxxx)
Updated January 30, 2018

|VAST Error Code|JW Error Code|Error|Possible Causes|Possible Solutions|
|---|---|---|---|---|
|`900`|`60001`|Empty VAST response|<p>No Ad element in VAST document after following wrappers.</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p><p>Some ad providers use empty VAST 3.0 responses to show that they have received the request but do not wish to fill it.</p>|
|-|`60002`|Ad limit reached|<p>The amount of ad impressions your account has generated in the calendar month exceeds the specified limit.</p>|<p>Contact your JW Player sales representative for more details or for upgrade options.</p>|
|-|`60003`|Ad blocker|<p>The viewer has an ad blocker app or extension installed for their browser.</p>||
|-|`60004`|Tag download timeout|<p>Issue with CDN server.</p><p>Timeout (in milliseconds) when loading a VPAID ad response. If loading takes longer than this timeout, the ad playback is canceled.</p><p>Can be caused by low bandwidth, or poor website implementation with competing requests that delay the loading of the VPAID ad response.</p>|<p>The timeout is configurable for using the [creativeTimeout and requestTimeout configuration options](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#advertising). However, increasing the timeout could potentially negatively affect user experience.</p>|
|`1002`|`60005`|Empty VMAP response|<p>No Ad element in VAST document after following wrappers.</p>|<p>When working with third-party networks, the fill-rate can be less than 100%. If so, this is an expected error. For example, if the third-party expects to fill 60% of the time, you should expect 40% errors. You can check to ensure that the error rate is in line with the fill-rate of the third-party network.</p><p>Some ad providers use empty VAST 3.0 responses to show that they have received the request but do not wish to fill it.</p>|
|`900`|`60006`|Ad tag failed to download|<p>An ad tag failed to download, but not inside of a wrapper.</p>||
|`900`|`60007`|Failed to play because of an unsupported operating system.|<p>An ad tag failed to play because of an unsupported operating system.</p>||
|-|`60900`|Unknown error|||

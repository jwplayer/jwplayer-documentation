# Ad Tag Variables

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

Ad Tag Variables are supported in the iOS SDK. Many VAST servers use "tag variables" to optimize fill and provide more information on how ads are being viewed. JW Player supports a number of variables that can be added to your VAST tag URL. Once an ad call is made by JW Player, the variables will be replaced accordingly.


## Supported Ad Tag Variables in VAST

`__domain__`
The domain name the player is embedded on.

`__player-height__`
By defaults this always returns 100%.

`__player-width__`
By defaults this always returns 100%.

`__random-number__`
Typically used as a cache-buster, to ensure there is no local caching of the VAST response.

`__page-url__`
The file path of the video.

`__timestamp__`
The current time of the user's computer, as a UNIX timestamp.

!!!
Please note that unlike the web player, the `__companion-div__` and `__referrer__` tag variables are not supported by the iOS SDK at the moment.
!!!

<br/>

## Playlist Item Properties

Playlist item properties allow publishers to send any metadata from the JW Player Playlist to an ad server. Assuming that you had something entered in your playlist XML like:

`<jwplayer:artist>Leonardo</jwplayer:artist>`
You would then be able to use the `__item-artist__` variable in your ad tag. When making a call to an ad server, we will automatically fill this in as Leonardo. This is helpful to target ads to metadata keywords or to target different ads to each item in a playlist. 

Here are a few more example properties:

`__item-file__`: the file URL of the currently playing video.

`__item-duration__`: the duration in seconds of the currently playing video. (Only works with midroll and postroll ads)

The following ad tag variables must be specified inside of the playlist XML:

`__item-title__`: the title of the currently playing video.

`__item-description__`: the short description of the currently playing video.

`__item-mediaid__`: the custom media id of the currently playing video.
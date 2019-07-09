# Specify your content source type

By default the Delivery API includes all our recommended sources in the order best suited for JW Player playback. In order to give publishers more control of source selection and ordering, v2 of the Delivery API allows customize which source(s) you would like to include when serving or syndicating video. This allows publishers to restrict streaming to adaptive formats only, or ensure that only a specific quality level in included when syndicating content via RSS.

## Specifying Sources
The [/v2/media/](https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/#!/media/get_v2_media_media_id) and [/v2/playlists/](https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/#!/playlists/get_v2_playlists_playlist_id) endpoints accept a `sources` parameter. This parameter can be filled with a comma separated list of sources. The resulting JSON object or RSS feed will be populated with sources in the order specified in the sources parameter. Valid source specifications include:

* Named source types:
	* `dash`: To include a link to a platform hosted VP9-DASH adaptive streaming manifest. (This source is only created for Enterprise accounts with this feature enabled.)
	* `hls`: Includes a link to an HLS adaptive streaming manifest.
	* `mp4`: Includes links to all progressive h.264 .mp4 sources.
	* `aac`: Includes a link to an AAC encoded .m4a audio source
	* `mp3`: Includes a link to an mp3 audio source (note that the property must be configured to generate .mp3 sources)
* Height or width based mp4 source specification     
!!!warning
    Note that depending on the size and aspect ratio of the original video you upload, sources of particular heights and widths may not exist for all videos.
!!!
	* Video height based sources can be specified using the height in pixels followed by a 'p' for example: `1080p`
	* Video width based sources can be specified by using the width in pixels followed by 'px' for example `1920px`
* Transcoding template id source specification.
	*  For publishers needing continued access to legacy generated sources (e.g. flv, ogg, webm) a legacy 8 character template id can be used. These ids are property specific and can be found with an [/v1/accounts/templates/list](https://developer.jwplayer.com/jw-platform/reference/v1/methods/accounts/templates/list.html) call to the Management API.


## Filtering Behavior and the `default_source_fallback` option
When the `sources` parameter is used, the Delivery API uses strict filtering to ensure that only requested source(s) are returned. If no sources remain after filtering available sources for those specified in the `sources` parameter, the entire media item will be removed from the JSON object or RSS feed. If you would prefer to have all ready media items included even if the specified source(s) don't exist, you can use the `default_source_fallback` parameter with a value of `true` to instruct the Delivery API to include an available source (all hosted media assets in a `ready` state have at least one progressive .mp4 source available for streaming).

## Examples
A 2 item manual playlist without sources specified (includes all JW Player recommended sources ordered for best playback):
[https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb](https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb)

The same playlist with only the HLS source included:
[https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=hls](https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=hls)

The same playlist specifying 406p progressive mp4 video (note only one video is included because of strict source selection based on height):
[https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=406p](https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=406p)

Again specifying 406p but now allowing for default source fallback to ensure the inclusion of both videos:
[https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=406p&default_source_fallback=true](https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=406p&default_source_fallback=true)
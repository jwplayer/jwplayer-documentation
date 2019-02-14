# JW Player HLS HTML5 Beta Program
With JW Player 7.4, HLS streams will use MSE extensions to render video and audio streams in HTML5. HTML5 playback of HLS will work in Chrome on Desktop. In all other instances, we will either use native HTML5 HLS support (Safari, Edge, Android Chrome) or our Flash provider (IE9-11, Firefox). Support will be investigated as the stability of streams in other browsers can be verified.

## Release History
|Version           | Release Date   | Notes                  |
|----------------------------------|-----------------------------|-----------------------------------------------------|
|7.4.0-RC1     |April 15, 2016    |Performance improvements and bug fixes|
|7.4.0-beta.4     |April 14, 2016    |Continued improvements and better feature coverage|
|7.4.0-beta.3     |April 12, 2016    |Performance improvements and better feature coverage|
|7.4.0-beta.2     |April 2, 2016    |Performance improvements and better feature coverage|
|7.4.0-beta.1    | March 18, 2016         |Initial beta with broad encoder support                       |


## Features in 7.4.0
* Adaptive bitrate switching for Live, DVR and VOD streams
* Extensive support for streams with discontinuities
* 608 embedded captions
* Playback AES encrypted streams over HTTP and HTTPS
* AES tokens
* ID3 timed metadata
* Fast, frame accurate seeking
* Audio only streams with MP3 or AAC
* MPEG 2 Layer 3 and MPEG 1 Layer 3 for MP3 is supported
* HE-AAC in Chrome 50
* H.264 main and baseline profiles
** High profile is dependent on hardware

## Known Issues
* Manually switching quality levels in some live streams cause the player to hang
* Visual Quality API event properties are not properly updated when in HTML5

## Verified Encoders and CDNs
* Akamai
* Edgecast
* Fastly
* Zencoder
* Amazon
* Wowza - some adaptive VOD streams are having issues with quality switching.

## Features planned for 7.5
* HLS v4 support for WebVTT captions and Multi-audio tracks
* Reduntant streams
* Using MSE for HTML5 playback in FireFox
* 708 Captions
* Custom quality labels
* Choosing audio track based on system language

# FAQ
#### Q: Why is my HLS stream still rendering in Flash?

In order to enable HLS HTML5, set your default rendering mode to html5 in player setup or via your dashboard. If your player is still using Flash, please ensure that you are testing on the latest version of Google Chrome.

#### Q: Does this require any additional configuration for my M3U8 files?

No, your existing M3U8 files will work between Flash and HTML5, provided that they follow our guidelines above. However, please ensure that your CORS and crossdomain.xml are both set correctly to allow interoperability between Flash and HTML5.

#### Q: Why doesn’t my HLS stream play?
As mentioned above, this beta is only supporting specific VOD and Live streams. If your streams meet our criteria, and still fail to play, we highly encourage you to fill out our form and send us a bug report.

#### Q: Will [HLS feature] ever be supported? I don’t see it in your roadmap.
If you see a feature missing from our timeline above, let us know! Much like our Flash HLS provider, we will always be adding new functionality to keep up with both trends and specs.
#### Q: Why is this not supported in [browser]? It’s my favorite browser!
We are currently developing and troubleshooting on Google Chrome due to its market share and stable MSE implementation. Firefox is the next planned browser to work with HLS HTML5.
#### Q: Will my Flash VPAID ads work with HTML5 HLS when it’s launched?
No, Flash ads will only render when the player is in Flash mode. We suggest using VPAID 2 Javascript ads or HTML5 compatible VAST.

# Reporting Issues

If you are experiencing issues while testing your HLS streams, please follow the steps below to submit your feedback:

**1 - Confirm that your HLS stream is currently compatible**

We are currently beta testing standard VOD and Live streams. Many features, such as multitrack audio and advertising are not yet available. Please see our compatibility list above for our current support. If there is a missing feature that you would like supported, please let us know.

**2 - If your stream should be compatible, use our feedback form**

[Click here](https://docs.google.com/a/jwplayer.com/forms/d/15G39urrGd7QEQEbjfyRYeEM5-G31tFaRj0OARZfricA/viewform) to visit our Google form and submit feedback to our team. We’ll be in contact with any updates.


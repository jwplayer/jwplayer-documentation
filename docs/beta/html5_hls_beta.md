# JW Player HLS HTML5 Beta
Welcome to our beta program for JW Player 7.4! The goal of this program is to gather feedback and ensure that we launch our HLS HTML5 product with the best possible HLS support.

## Supported and Upcoming Features
With JW Player 7.4, HLS streams will use MSE extensions to render video and audio streams in HTML5. HTML5 playback of HLS will work in Chrome on Desktop. In all other instances, we will either use native HTML5 HLS support (Safari, Edge, Android Chrome) or our Flash provider (IE9-11, Firefox). Support will be investigated as the stability of streams in other browsers can be verified. 

## Current Beta Features 

|7.4 Beta Release (Now)            | Full 7.4 Release (April)    | Future Enhancement (Q2 - Q3 2016)                   |
|----------------------------------|-----------------------------|-----------------------------------------------------|
|Adaptive VOD streams               |Robust error messaging    |Choosing audio track based on system language|
|Single quality Live/DVR streams    |M3U8 WebVTT captions          |Custom quality labels                                |
|Desktop Google Chrome only        |Adaptive quality in Live     |708 captioning                    |
|Basic error message support       |                              |AES decryption via HTTP   |
|608 caption support               |                              |Mozilla Firefox support   |
|AES 128 decryption over HTTPS only|                              |Byte-range requests       |
|AAC/MP3 audio fragment support    |                              |                                  |
|Timed ID3 MetaData                |                              |                                  |
|AAC/MP3 audio support             |                              |                                  |
|Timed ID3 MetaData                |                              |                                  |


## Current Limitations
* HE-AAC has a known issue with working in Chrome. For information on its resolution, please see the ticket in the [Chromium Project](https://bugs.chromium.org/p/chromium/issues/detail?id=534301).
* Midrolls when played with Google IMA ad manager are not currently pausing the main video content.
* Midrolls after replaying the current item are not working correctly.
* Video only streams, streams without any audio, stall.
* 608 caption timing is slightly off.

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

## 1 - Confirm that your HLS stream is currently compatible
We are currently beta testing standard VOD and Live streams. Many features, such as multitrack audio and advertising are not yet available. Please see our compatibility list above for our current support. If there is a missing feature that you would like supported, please let us know.
## 2 - If your stream should be compatible, use our feedback form
Click here to visit our Google form and submit feedback to our team. We’ll be in contact with any updates.


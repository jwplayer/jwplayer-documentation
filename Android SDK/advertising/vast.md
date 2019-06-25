# VAST

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<!-- ## Overview

The JW Player SDK for Android supports VAST advertising and follows the standards set by the IAB.  -->

!!!warning
As of version 2.3 of the JW Player SDK for Android, your VAST advertisements must have CORS configured for: 

Access-Control-Allow-Origin: http://intercept.jw/ 

This configuration is described in the IAB VAST specification on page 16: [http://www.iab.com/wp-content/uploads/2015/06/VASTv3_0.pdf](http://www.iab.com/wp-content/uploads/2015/06/VASTv3_0.pdf)
!!!

<!--
## Supported Features

* VAST 4
* Ad Tag Waterfalls
* Non-Linear Banner Ads
* Playlist Item Level Advertising
* Playlist Level Advertising
* VMAP
* Ad Pods
* VPAID 2.0
* Ad Tag Variables
* Skip Offset

-->

## Ad tag waterfalls

When using `AdSource.VAST` you have the ability to define an ad tag waterfall. Ad tag waterfalls allow you to set several ad tags to a single ad break and the player will play the first ad that returns a valid response.

**Code Example:**

```java
// Create waterfall string array
String[] waterfall = new String[]{
        "http://demo.jwplayer.com/android/vast-tags/pbadreroll.xml",
        "http://demo.jwplayer.com/android/vast-tags/preroll.xml"
};
    
// Create your ad schedule
AdBreak adBreak = new AdBreak("pre", AdSource.VAST, waterfall);
List<AdBreak> adSchedule = new ArrayList<AdBreak>();
adSchedule.add(adBreak);
    
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Set the ad schedule to your video
video.setAdSchedule(adSchedule);


// Create a playlist
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();
playlist.add(video);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

## Non-linear Overlay Ads

In addition to standard, linear video advertising, JW Player also supports the display of banner ads as an overlay over the video content. This means that advertisements can appear without disrupting playback. This method of advertising is known as a non-linear overlay ads.

Non-linear ads are set up just like regular linear ads, with the only difference being that you must call setAdType() on your `AdBreak` and set it to `AdType.NONLINEAR`.

**Code Example:**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");
    
// Set the ad break offset
AdBreak adBreak = new AdBreak("pre", AdSource.VAST, "http://playertest.longtailvideo.com/adtags/nonlinear.xml");
    
// Specify the AdType as NONLINEAR
adBreak.setAdType(AdType.NONLINEAR);
List<AdBreak> adSchedule = new ArrayList<AdBreak>();
adSchedule.add(adBreak);

// Set the ad schedule to your video
video.setAdSchedule(adSchedule);

// Create a playlist
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();
playlist.add(video);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

## Assign an ad schedule to a playlist item

You can also define playlist item specific ad schedules to further customize your ad strategy.

**Code Example:**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Create advertising schedule
List<AdBreak> adSchedule = new ArrayList<AdBreak>();

AdBreak adBreak = new AdBreak("pre", AdSource.VAST, "http://www.adotube.com/php/services/player/OMLService.php?avpid=oRYYzvQ&platform_version=vast20&ad_type=linear&groupbypass=1&HTTP_REFERER=http://www.longtailvideo.com&video_identifier=longtailvideo.com,test");

adSchedule.add(adBreak);

// Set advertising schedule to your video
video.setAdSchedule(adSchedule);


// Create second video
PlaylistItem video2 = new PlaylistItem("http://playertest.longtailvideo.com/jwpromo/jwpromo.m3u8");

// Create different advertising schedule
List<AdBreak> adSchedule2 = new ArrayList<AdBreak>();

AdBreak adBreak2 = new AdBreak("10", AdSource.VAST, "http://demo.jwplayer.com/android/vast-tags/preroll.xml");

adSchedule2.add(adBreak2);

// Set advertising schedule to your video
video2.setAdSchedule(adSchedule2);

List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();
playlist.add(video);
playlist.add(video2);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

<!--
## Assign an ad schedule to the entire playlist

When using `AdSource.VAST` you have the option of setting an ad schedule for the entire playlist by creating an `Advertising` object.

**Code Example:**

```java
// Create your ad schedule
List<AdBreak> adSchedule = new ArrayList<AdBreak>();

AdBreak adBreak = new AdBreak("pre", AdSource.VAST, "http://www.adotube.com/php/services/player/OMLService.php?avpid=oRYYzvQ&platform_version=vast20&ad_type=linear&groupbypass=1&HTTP_REFERER=http://www.longtailvideo.com&video_identifier=longtailvideo.com,test");

adSchedule.add(adBreak);

// Set your ad schedule to your advertising object
Advertising advertising = new Advertising(AdSource.VAST, adSchedule);

advertising.setSkipOffset(3);
advertising.setAdMessage("Text that appears in the control bar");
advertising.setCueText("Text that appears when you hover over the ad marker");
advertising.setSkipMessage("Text that appears before skip is available");
advertising.setSkipText("Text that appears when skip is available");

// Create a playlist, you'll need this to build your player config
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();

PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");
PlaylistItem video2 = new PlaylistItem("http://playertest.longtailvideo.com/jwpromo/jwpromo.m3u8");

playlist.add(video);
playlist.add(video2);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .advertising(advertising)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```
-->

## VMAP Advertising

Currently, `VMAP` advertising schedules can only be assigned to the entire playlist using our `VMAPAdvertising` object. The added benefit of using `VMAP` is the fact that it contains its own ad schedule which can be served across different platforms.

**Code Example:**

```java
// Set the url to the VMAP tag
VMAPAdvertising vmapAdvertising = new VMAPAdvertising(AdSource.VAST,"https://playertest.longtailvideo.com/adtags/vmap2.xml");

// Create a playlist, you'll need this to build your player config
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();

PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");
PlaylistItem video2 = new PlaylistItem("http://playertest.longtailvideo.com/jwpromo/jwpromo.m3u8");

playlist.add(video);
playlist.add(video2);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .advertising(vmapAdvertising)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```
## Ad Pods

VAST 3 Ad Pods allow ad networks to deliver multiple ads in a single ad break.

!!!warning
When configuring ad pods that contain both VPAID 2.0 and regular linear ads it is important that you schedule the VPAID 2.0 ads first, followed by your linear ads. You CANNOT mix the sequence.
!!!

**Code Example:**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Set the ad break offset
AdBreak adBreak = new AdBreak("pre", AdSource.VAST, "https://s3.amazonaws.com/demo.jwplayer.com/advertising/assets/vast3_jw_ads.xml");
List<AdBreak> adSchedule = new ArrayList<AdBreak>();
adSchedule.add(adBreak);

// Set the ad schedule to your video
video.setAdSchedule(adSchedule);

// Create a playlist
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();

playlist.add(video);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

## VPAID 2.0

As of version 2.3.0 the JW Player SDK for Android supports VPAID 2 creatives. This version of VPAID can deliver JavaScript ad creatives.

**Code Example:**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Set the ad break offset
AdBreak adBreak = new AdBreak("pre", AdSource.VAST, "http://search.spotxchange.com/vast/2.00/85394?VPAID=js&content_page_url=www.testing123.com&cb=__random-number__&device[devicetype]=1&device[dnt]=0");
List<AdBreak> adSchedule = new ArrayList<AdBreak>();
adSchedule.add(adBreak);

// Set the ad schedule to your video
video.setAdSchedule(adSchedule);

// Create a playlist
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();

playlist.add(video);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

**Caution:**

* **Only VPAID 2.0 JavaScript creatives are supported**. Flash and Silverlight creatives are not supported.
* HTML5 Fullscreen API's are currently **NOT** supported since the JW Player SDK for Android has its own fullscreen behavior.
* Because of this you must make sure that your ad creatives are responsive and are able to handle dynamic changes in width and height, which occur when a user rotates their device.

We recommend you to test your VPAID creatives with our SDK before distributing them as they may throw errors or not work as expected when rendered by the JW Player SDK for Android.


## Ad tag variables

Ad tag variables are special macros which expand to provide your ad request additional details about your content such as its title, description or the player's height and width.

For a complete list of supported macros please visit:
[https://support.jwplayer.com/customer/portal/articles/1434340-ad-tag-targeting-macros](https://support.jwplayer.com/customer/portal/articles/1434340-ad-tag-targeting-macros)

**Code Example**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Make sure to set the item information you'll be expanding later
video.setDescription("BipBop");

// Set the ad break offset
AdBreak adBreak = new AdBreak("pre", AdSource.VAST, "https://playertest.longtailvideo.com/adtags/vmap2.xml?descr=__item-description__&height=__player-height__&width=__player-width__");
List<AdBreak> adSchedule = new ArrayList<AdBreak>();
adSchedule.add(adBreak);

// Set the ad schedule to your video
video.setAdSchedule(adSchedule);

// Create a playlist
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();

playlist.add(video);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

## Setting the skip offset

When using `AdSource.VAST` you can set the time it takes to show a skip button for the ad provided. You can set it for both playlist level advertising and playlist item level advertising. Below is a code example for the playlist item level advertising scenario.

**Code Example:**

```java
// Construct a new AdBreak containing the Ad tag
// This AdBreak will play a midroll at 10%
AdBreak adBreak = new AdBreak("10%", AdSource.VAST, "http://demo.jwplayer.com/android/vast-tags/preroll.xml");

// Add the AdBreak to a List
List<AdBreak> adSchedule = new ArrayList<>();
adSchedule.add(adBreak);

// Build a PlaylistItem and assign adSchedule
PlaylistItem video = new PlaylistItem.Builder()
					.file("http://url.with.content/file.mp4")
					.adSchedule(adSchedule)
					.build();

// Add the PlaylistItem to a List 
List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(video);

// Create an empty list for the Advertising object
List<AdBreak> emptyList = new ArrayList<>();

// Construct the Advertising Object
Advertising advertising = new Advertising(AdSource.VAST,emptyList);

// Set the skip offset in seconds
advertising.setSkipOffset(3);

// Build the PlayerConfig
PlayerConfig playerConfig = new PlayerConfig.Builder(this)
							.playlist(playlist)
							.advertising(advertising)
							.build();

// Setup the player
mPlayerView.setup(playerConfig);
```

<!--
## Timing your ads

Timing your ads is accomplished with the [`AdBreak`](http://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/media/ads/AdBreak.html) object and its offset variable.

Values permitted include:

-	`pre`: specifies that the AdBreak should be played before the video content.
-	`post`: specifies that the AdBreak should be played after the video content.
-	A time value specified in one of the following formats:
	-	Seconds: `50`
	-	Fractional seconds: `50.5`
	-	Percentage of the entire video: `50%`
	-	Timecode (hh:mm:ss.mmm): `01:55:30:000`

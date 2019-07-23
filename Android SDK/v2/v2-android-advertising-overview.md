# Advertising

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

## Overview
In this document we will list all advertising features supported by the JW Player SDK for Android along with some short code examples of the three basic ways you can schedule an advert to play with your content.

## Supported Features
The JW Player SDK for Android supports the following advertising features:

* VAST 3
* Google IMA
* VMAP
* Ad Pods
* FreeWheel
* VPAID 2.0 *(Google IMA Unsupported)*
* Non-Linear Banner Ads *(Google IMA Unsupported)*
* Ad Tag Waterfalls 
* Ad Tag Macros 
* Skip Offset 

For more information on what the Google IMA SDK for Android supports out of the box, please visit:

[https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility](https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility)

## Scheduling ads for an entire playlist

Playlist level advertising allows you to set the same ad schedule for every item in a playlist. When setting up a player for playlist level advertising you have two options:

**Option 1**
### Create an Advertising object

```java
// Create your ad schedule
List<AdBreak> adSchedule = new ArrayList<AdBreak>();

Ad ad = new Ad(AdSource.VAST, "http://www.adotube.com/php/services/player/OMLService.php?avpid=oRYYzvQ&platform_version=vast20&ad_type=linear&groupbypass=1&HTTP_REFERER=http://www.longtailvideo.com&video_identifier=longtailvideo.com,test");
AdBreak adBreak = new AdBreak("pre", ad);

adSchedule.add(adBreak);

// Set your ad schedule to your advertising object
Advertising advertising = new Advertising(AdSource.VAST, adSchedule);

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


**Option 2**

### Create a VMAPAdvertising object

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

## Scheduling ads per playlist item

Playlist item advertising allows you to set specific ad schedules for each of your playlist items.

**Code Example:**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Create advertising schedule
List<AdBreak> adSchedule = new ArrayList<AdBreak>();

Ad ad = new Ad(AdSource.VAST, "http://www.adotube.com/php/services/player/OMLService.php?avpid=oRYYzvQ&platform_version=vast20&ad_type=linear&groupbypass=1&HTTP_REFERER=http://www.longtailvideo.com&video_identifier=longtailvideo.com,test
");
AdBreak adBreak = new AdBreak("pre", ad);

adSchedule.add(adBreak);

// Set advertising schedule to your video
video.setAdSchedule(adSchedule);


// Create second video
PlaylistItem video2 = new PlaylistItem("http://playertest.longtailvideo.com/jwpromo/jwpromo.m3u8");

// Create different advertising schedule
List<AdBreak> adSchedule2 = new ArrayList<AdBreak>();

Ad ad2 = new Ad(AdSource.VAST, "http://demo.jwplayer.com/android/vast-tags/preroll.xml");
AdBreak adBreak2 = new AdBreak("10", ad2);

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

## Play ads on the fly during playback
Our API also allows developers to insert an ad as the content is playing by calling the `playAd()` method. For this to work however you must first set an advertising object with an empty `List<AdBreak>` to your `PlayerConfig` to let the player know which `AdSource` you will be using.

**Code Example:**

```java
// Create your empty ad schedule
List<AdBreak> adSchedule = new ArrayList<AdBreak>();

// Set your ad schedule to your advertising object
Advertising advertising = new Advertising(AdSource.VAST, adSchedule);

// Create a playlist, you'll need this to build your player config
List<PlaylistItem> playlist = new ArrayList<PlaylistItem>();
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");
playlist.add(video);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .advertising(advertising)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);

// During playback you can now call the playAd() method
mPlayerView.playAd("http://www.adotube.com/php/services/player/OMLService.php?avpid=oRYYzvQ&platform_version=vast20&ad_type=linear&groupbypass=1&HTTP_REFERER=http://www.longtailvideo.com&video_identifier=longtailvideo.com,test
");
```

## Unsupported Features

### VPAID 1.0
!!!warning
VPAID 1.0 IS NOT SUPPORTED
!!!

This mode of advertising delivers Flash creatives as the ad content. We do not support Flash playback on Android. Please make sure your ad networks do not serve these type of creatives to your mobile audience as you will lose ad opportunities.

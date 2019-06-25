# Google IMA

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<!-- ## Overview
The JW Player SDK for Android is integrated with Google's IMA SDK v#ima_sdk_version# and supports VAST and VMAP advertising. In this document we will set up your project with Google Play Services Ads and demonstrate all supported features of the Google IMA implementation.

## Supported Features

* ImaSdkSettings
* Playlist level advertising
* Playlist item level advertising
* VMAP
* Ad Pods

## Setting up your project for Google IMA

### Building with Gradle
To use the Google IMA SDK you must add the following dependencies to your application's `build.gradle` file:

```groovy
compile 'com.longtailvideo.jwplayer:jwplayer-ima:#sdk_version_simple#'
```

### Building with AAR

Add the jwplayer-ima aar dependency to your project then add the following to your application's `build.gradle`

```groovy
compile 'com.google.android.gms:play-services-ads:#play_services_ads_version#'
compile 'com.google.ads.interactivemedia.v3:interactivemedia:#ima_sdk_version#'
```

## Assign an ad schedule to the entire playlist

As of version 2.6.x of the JW Player SDK for Android, you have the option of setting an ad schedule for the entire playlist by creating an `ImaAdvertising` object.

**Code Example:**

```java
// Create your ad schedule
List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak("pre", AdSource.IMA, "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=");

adSchedule.add(adBreak);

// Set your ad schedule to your advertising object
ImaAdvertising imaAdvertising = new ImaAdvertising(adSchedule);

// Create a playlist, you'll need this to build your player config
List<PlaylistItem> playlist = new ArrayList<>();

PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");
PlaylistItem video2 = new PlaylistItem("http://playertest.longtailvideo.com/jwpromo/jwpromo.m3u8");

playlist.add(video);
playlist.add(video2);

// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
        .playlist(playlist)
        .advertising(imaAdvertising)
        .build();
        
// Setup your player with the config
mPlayerView.setup(playerConfig);
```

###Note:
The following methods have no effect on the `ImaAdvertising` object as the IMA advertising UI is inherited by the Google IMA SDK.

```java
imaAdvertising.setSkipOffset(3);
imaAdvertising.setAdMessage("Text that appears in the control bar");
imaAdvertising.setCueText("Text that appears when you hover over the ad marker");
imaAdvertising.setSkipMessage("Text that appears before skip is available");
imaAdvertising.setSkipText("Text that appears when skip is available");
```
-->
	
## Assign an ad schedule to a playlist item

Setting up an ad schedule for your videos is simple, create the ad, set the AdSource as `AdSource.IMA` then assign your `List<AdBreak>` to your media.

**Code Example:**

```java
// Construct a new AdBreak containing the Ad Tag
// This AdBreak will play a midroll at 10%
AdBreak adBreak = new AdBreak("10%", AdSource.IMA, "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=");

// Add the AdBreak to a List
List<AdBreak> adSchedule = new ArrayList<>();
adSchedule.add(adBreak);

// Build a PlaylistItem and assign adSchedule
PlaylistItem video = new PlaylistItem.Builder()
					.file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
					.adSchedule(adSchedule)
					.build();

// Add the PlaylistItem to a List 
List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(video);

// Build the PlayerConfig
PlayerConfig playerConfig = new PlayerConfig.Builder()
					.playlist(playlist)
					.build();

// Setup the player
mPlayerView.setup(playerConfig);
```

## Custom Parameters

Use the `AdBreak` object to customize your IMA ad request.

**Code Example:**

```java
Map<String, String> customParams = new HashMap<>();
customParams.put("age", "18");
customParams.put("gender", "male");

AdBreak adBreak = new AdBreak("pre", AdSource.IMA, "YOUR_TAG");
adBreak.setCustomParams(customParams);
```

Alternatively, you can use the `adschedule` object to customize your IMA request.

**Code Example:**
 
```java
"adschedule": {
	"adBreak1": {
		"offset": "pre",
		"custParams" : {
			"age" : "18",
			"gender" : "male"
		},
		"ad": {
		        "source": "googima",
		        "tag": "YOUR_TAG"
		}
	}
}
```

## VMAP Advertising

Currently, VMAP advertising schedules can only be assigned to the entire playlist by using our `VMAPAdvertising` object. The added benefit of using VMAP is the fact that it contains its own ad schedule which can be easily served across different platforms.

**Code Example:**

```java
// Create a new ImaVMAPAdvertising
ImaVMAPAdvertising imaVMAPAdvertising = new ImaVMAPAdvertising("https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&cmsid=496&vid=short_onecue&correlator=");

// Construct a PlaylistItem
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Add the PlaylistItem to a List 
List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(video);

// Build the PlayerConfig
PlayerConfig playerConfig = new PlayerConfig.Builder()
							.playlist(playlist)
							.advertising(imaVMAPAdvertising)
							.build();

// Setup the player
mPlayerView.setup(playerConfig);
```

## Ad Pods

Ad Pods allow ad networks to deliver multiple ads within a single ad break.

**Code Example:**

```java
// Create video
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");

// Set the ad break offset and tag
AdBreak adBreak = new AdBreak("pre", AdSource.IMA, "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=sample_ar%3Dpreonlybumper&cmsid=496&vid=short_onecue&correlator=");
List<AdBreak> adSchedule = new ArrayList<>();
adSchedule.add(adBreak);

// Set the ad schedule to your video
video.setAdSchedule(adSchedule);

// Add the PlaylistItem to a List 
List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(video);

// Build the PlayerConfig
PlayerConfig playerConfig = new PlayerConfig.Builder()
							.playlist(playlist)
							.build();

// Setup the player
mPlayerView.setup(playerConfig);
```

### IMA SDK Settings

As of version 2.6.x of the JW Player SDK for Android, settings for the IMA SDK can be configured by creating a new instance of `ImaSdkSettings`. Developers can then assigning it to an `ImaAdvertising` or `ImaVMAPAdvertising` instance by calling `setImaSdkSetting()` or by passing it into the constructor.

For more information on the `ImaSdkSettings` class and its features please refer to the official Google documentation:

[https://developers.google.com/interactive-media-ads/docs/sdks/android/v3/api/reference/com/google/ads/interactivemedia/v3/api/ImaSdkSettings](https://developers.google.com/interactive-media-ads/docs/sdks/android/v3/api/reference/com/google/ads/interactivemedia/v3/api/ImaSdkSettings)

**Code Example:**

```java
// Create two videos with separate ad schedules
List<AdBreak> adSchedule = new ArrayList<>();
AdBreak adBreak = new AdBreak("pre", AdSource.IMA, "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=");
adSchedule.add(adBreak);
PlaylistItem video = new PlaylistItem("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8");
video.setAdSchedule(adSchedule);

List<AdBreak> adSchedule2 = new ArrayList<>();
AdBreak adBreak2 = new AdBreak("pre", AdSource.IMA, "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=");
adSchedule2.add(adBreak2);
PlaylistItem video2 = new PlaylistItem("http://playertest.longtailvideo.com/jwpromo/jwpromo.m3u8");
video2.setAdSchedule(adSchedule2);

// Add your videos to a playlist
List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(video);
playlist.add(video2);

// Setup the IMA SDK Settings and localize the advertising UI
ImaSdkSettings imaSdkSettings = ImaSdkFactory.getInstance().createImaSdkSettings();
imaSdkSettings.setLanguage("nl");


// Set an empty List<AdBreak> to ImaAdvertising
// This will allow the imaSdkSettings to take effect while having playlist item specific ad schedules
// You could set the ad schedule to the ImaAdvertising object if you want the same schedule for each item
ImaAdvertising imaAdvertising = new ImaAdvertising(new ArrayList<AdBreak>(), imaSdkSettings);


// Create your player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
		.playlist(playlist)
		.advertising(imaAdvertising)
		.build();

// Setup your player with the config
mPlayerView.setup(playerConfig);
```

## Unsupported Features

### Ad tag waterfalls

When using `AdSource.IMA` you do not have the ability to define an ad tag waterfall in your code. An ad tag waterfall analog is instead defined in your Google Dashboard.

### Non-linear Overlay Ads

Non-linear ads are not currently supported via `AdSource.IMA`. This is a limitation of the Google IMA SDK for Android. For more information please refer to the documentation here:

[https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility](https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility)

### Ad skip offset

The ad skip offset is always set within the ad response of a Google IMA ad tag and we do not override the value. To configure your skip offset please contact your ad network.

### Ad tag variables

The ad tag variables specified in our VAST documentation are not supported when using `AdSource.IMA`. Instead we suggest contacting Google IMA to provide you with a list of ad tag variables supported in the Google IMA SDK.

### VPAID

The Google IMA SDK does not support VPAID 1.0 or VPAID 2.0 ads. This is a limitation of the Google IMA SDK for Android. For more information please refer to the documentation here:

[https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility](https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility)

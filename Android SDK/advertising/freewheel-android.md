# FreeWheel

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<!--
## Overview
The JW Player SDK for Android is integrated with FreeWheel Ad Manager and supports VAST and VPAID advertising. In this document we will set up your project with FreeWheel and demonstrate all supported features of the FreeWheel implementation.

## Supported Features
* Pre-rolls
* Mid-rolls
* VPAID
* Ad Skip Offset
* Ad Click-through
* Multiple Ad Instances
* Custom Parameters

## Setting up your project for FreeWheel SDK

### Building with Gradle
Add the following dependencies to your application's `build.gradle` file:

```groovy
compile 'com.longtailvideo.jwplayer:jwplayer-freewheel:#sdk_version_simple#'
```

### Building with AAR
Add the `jwplayer-freewheel` AAR dependency to your project. No additional dependencies are required.

## FreeWheel Parameters
Setting up a FreeWheel campaign requires the following parameters: 

|Parameter|Value  |
|--|--|
**networkId** | 42015
**serverId** | http://demo.v.fwmrm.net/
**profileId** | fw_tutorial_android
**sectionId** | fw_tutorial_android
**mediaId** | fw_simple_tutorial_asset

## Assign an ad schedule to the entire playlist
JW Player SDK for Android versions 2.9.x and higher have the option of setting an ad schedule for the entire playlist by creating an `FwAdvertising` object.

**Code Example:**

```java
// Create your FreeWheel advertising settings
int networkId = 42015;
String serverId = "http://7cee0.v.fwmrm.net/";
String profileId = "fw_tutorial_android";
String sectionId = "fw_tutorial_android";
String mediaId = "fw_simple_tutorial_asset";
FwSettings settings = new FwSettings(networkId, serverId, profileId, sectionId, mediaId);
 
// Create your ad schedule
List<AdBreak> schedule = new ArrayList<>();
AdBreak adBreak = new AdBreak("pre", AdSource.FW, "placeholder_preroll");
schedule.add(adBreak);
// Set your ad schedule to your advertising object
FwAdvertising advertising = new FwAdvertising(settings, schedule);
 
// Create a playlist, you'll need this to build your player config
List<PlaylistItem> playlist = new ArrayList<>();
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

## Assign an Ad Schedule to a Playlist Item
To setup an ad schedule for an individual playlist item, create an `AdBreak` object with a specific offset and assign a list of the ad breaks to the media. Note: the `FwAdvertising` object must be created and the FreeWheel settings configuration provided there.

**Code Example:**

```java
// Create your FreeWheel advertising settings
int networkId = 42015;
String serverId = "http://7cee0.v.fwmrm.net/";
String profileId = "fw_tutorial_android";
String sectionId = "fw_tutorial_android";
String mediaId = "fw_simple_tutorial_asset";
FwSettings settings = new FwSettings(networkId, serverId, profileId, sectionId, mediaId); 
 
// Create advertising object
FwAdvertising advertising = new FwAdvertising(settings);
 
// Construct a new AdBreak with a specific offset
// This AdBreak will play a midroll at 10%
AdBreak adBreak = new AdBreak("10%", AdSource.FW, "placeholder_string");
 
// Add the AdBreak to a List
List<AdBreak> schedule = new ArrayList<>();
schedule.add(adBreak);
 
// Build a PlaylistItem and assign the schedule
PlaylistItem video = new PlaylistItem.Builder()
                     .file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
                    .adSchedule(schedule)
                    .build();
 
// Add the PlaylistItem to a List 
List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(video);
 
// Build the PlayerConfig
PlayerConfig playerConfig = new PlayerConfig.Builder()
                    .playlist(playlist)
         .advertising(advertising)
                    .build();
 
// Setup the player
mPlayerView.setup(playerConfig);
```
<!--
## Ad Offset
FreeWheel supports defining advertising offsets. The following formats are available:

|Type|Example  |
|--|--|
**Seconds** | AdBreak adBreak = new AdBreak("15");
**Percentage** | AdBreak adBreak = new AdBreak("30%");
**Time Stamp** | AdBreak adBreak = new AdBreak("01:55:30:000");

-->

## Custom Parameters
Use the `setCustomParams` method of the `FwSettings` object to customize your FreeWheel ad request.

**Code Example:**

```java
FwSettings settings = new FwSettings(networkId, serverId, profileId, sectionId, mediaId);

// Create custom parameters
Map<String, String> parameters = new HashMap<>();
parameters.put("key1", "value1");
parameters.put("key2", "value2");

settings.setCustomParams(parameters);
```

## VPAID
No additional setup required to use VPAID. FreeWheel configuration for VPAID and VAST are the same. However, the FreeWheel campaign should be configured to use VPAID. 

## Unsupported Features

### Postroll
Post-rolls are not supported at this time but is planned as a future addition.

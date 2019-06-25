# Enable FreeWheel Ad Manager

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<sup>Last Updated: June 26, 2019</sup>

The JW Player SDK for Android integrates FreeWheel's SDK. With this SDK integration, you can use the FreeWheel Ad Manager to request and track ads.

## Get required items

Before you add the FreeWheel Ad Manager to your app, you need the following values from your FreeWheel account.  If you do not know where to find these values, contact your FreeWheel account representative.

| Parameter | Description | Example |
| --- | --- | --- |
| `mediaId` | FreeWheel identifier of a particular media item | `fw_simple_tutorial_asset` |
| `networkId` | FreeWheel identifier of a network | `42015` |
| `profileId` | FreeWheel identifier of a particular application environment | `fw_tutorial_android` |
| `sectionId` | FreeWheel identifier of a location where the video content plays | `fw_tutorial_android` |
| `serverId` | URL of FreeWheel ad server | `http://7cee0.v.fwmrm.net/` |

<br/>

## Add the FreeWheel Ad Manager dependency

To begin using the FreeWheel Ad Manager you must first add the dependency to your app.

### Gradle

1. In the **build.gradle** file of your app, add the `com.longtailvideo.jwplayer:jwplayer-freewheel:x.x.x` dependency. Be sure to replace `x.x.x` with the dependency version number.
2. Sync Gradle.

```java
dependencies {
  ...
  implementation 'com.longtailvideo.jwplayer:jwplayer-core:x.x.x'
  implementation 'com.longtailvideo.jwplayer:jwplayer-common:x.x.x'
  implementation 'com.longtailvideo.jwplayer:jwplayer-freewheel:x.x.x'
}
```

### Local

#### Add the module to your project

1. With your app open in Android Studio, click **File > New > New Module... > Import .JAR / .AAR Package**.
2. Click **Next**.
3. Select **jwplayer-freewheel-x.x.x.aar** from your computer.
4. Click **Finish**.

#### Add the SDK dependency

1. Click **File > Project Structure... > Dependencies**. Under **Modules**, be sure that your app is selected.
2. Click the plus sign in the main panel.
3. Select **Module dependency**.
4. Select **jwplayer-freewheel-x.x.x**.
5. Click **OK**.
6. Click **Apply**.
7. Click **OK**.

<br/>

## Add a pre-roll ad to a playlist

Use the following steps to add a pre-roll ad to [the player you added to your activity]():

1. In **app/java/MainActivity.java**, create a `FwSettings` object called `settings` that contains your FreeWheel account settings.
2. Create a `List<AdBreak>` object called `adSchedule`.
3. Create an <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/ads/AdBreak.Builder.html" target="_blank">AdBreak</a> object named `adBreak`. At the minimum, you must pass an ad tag to the `tag` property and pass `AdSource.FW` to the `source` property.
4. Add `adBreak` to `adSchedule`.
5. Create a `FwAdvertising` object named `advertising`. Use `settings` (which defines the FreeWheel Ad Manager settings) and `adSchedule` (which defines the ad schedule to use) as the arguments.
6. Add `advertising(advertising)` to the `config` object of the player. This adds the ad schedule to the player.

```java

mPlayerView = findViewById(R.id.jwplayer);

int networkId = 42015;
String serverId = "http://7cee0.v.fwmrm.net/";
String profileId = "fw_tutorial_android";
String sectionId = "fw_tutorial_android";
String mediaId = "fw_simple_tutorial_asset";
FwSettings settings = new FwSettings(networkId, serverId, profileId, sectionId, mediaId);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .source(AdSource.FW)
    .build();
        
adSchedule.add(adBreak);

FwAdvertising advertising = new FwAdvertising(settings, adSchedule);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);

PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(advertising)
    .build();

mPlayerView.setup(config);
```
You can build upon this basic implementation by [adding multiple ad breaks](#add-multiiple-ad-breaks-to-a-player).

<br/>

<a name="add-multiiple-ad-breaks-to-a-player"></a>

## Add multiple ad breaks to a player

Use the following steps to add multiple ad breaks to the previous VAST pre-roll example:

1. Define an additional `AdBreak` object.
2. Pass an ad tag to the `tag` property. 
3. When defining the <a href="https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/media/ads/AdBreak.Builder.html#offset-java.lang.String-" target="_blank">offset</a> property, choose one of the following values to schedule a mid-roll ad. **Post-roll ads are not currently supported for FreeWheel ad implementations**.<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (String) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{timecode}**: (String) Ad plays at a specific time, in `hh:mm:ss:mmm` format.<br/><br/>
4. Pass `AdSource.FW` to the `source` property.
5. Add the additional `AdBreak` object to `adSchedule`.

```java
mPlayerView = findViewById(R.id.jwplayer);

int networkId = 42015;
String serverId = "http://7cee0.v.fwmrm.net/";
String profileId = "fw_tutorial_android";
String sectionId = "fw_tutorial_android";
String mediaId = "fw_simple_tutorial_asset";
FwSettings settings = new FwSettings(networkId, serverId, profileId, sectionId, mediaId);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .offset("pre")
    .source(AdSource.FW)
    .build();

AdBreak adBreak2 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll1.xml")
    .offset(10)
    .source(AdSource.FW)
    .build();

AdBreak adBreak3 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll2.xml")
    .offset("00:00:15:000")
    .source(AdSource.FW)
    .build();

AdBreak adBreak4 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll3.xml")
    .offset("25%")
    .source(AdSource.FW)
    .build();
        
adSchedule.add(adBreak);
adSchedule.add(adBreak2);
adSchedule.add(adBreak3);
adSchedule.add(adBreak4);

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .source(AdSource.FW)
    .build();
        
adSchedule.add(adBreak);

FwAdvertising advertising = new FwAdvertising(settings, adSchedule);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);

PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(advertising)
    .build();

mPlayerView.setup(config);
```

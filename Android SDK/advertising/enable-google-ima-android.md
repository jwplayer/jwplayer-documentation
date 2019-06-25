# Enable Google IMA

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<sup>Last Updated: June 26, 2019</sup>

The JW Player SDK for Android integrates <a href="https://developers.google.com/interactive-media-ads/docs/sdks/android/compatibility" target="_blank">Google's IMA Android SDK</a>. With this SDK integration, you can use the Google IMA ad client to request ads.

<br/>

## Add the Google IMA dependency

To begin using the Google IMA ad client, you must acquire an IMA ad tag and add a dependency to your app.

### Gradle

1. In the **build.gradle** file of your app, add the `com.longtailvideo.jwplayer:jwplayer-ima:x.x.x` dependency. Be sure to replace `x.x.x` with the dependency version number.
2. Sync Gradle.

```groovy
dependencies {
  ...
  implementation 'com.longtailvideo.jwplayer:jwplayer-core:x.x.x'
  implementation 'com.longtailvideo.jwplayer:jwplayer-common:x.x.x'
  implementation 'com.longtailvideo.jwplayer:jwplayer-ima:x.x.x'
}
```

### Local

#### Add the module to your project

1. With your app open in Android Studio, click **File > New > New Module... > Import .JAR / .AAR Package**.
2. Click **Next**.
3. Select **jwplayer-ima-x.x.x.aar** from your computer.
4. Click **Finish**.

#### Add SDK dependencies

1. Click **File > Project Structure... > Dependencies**. Under **Modules**, be sure that your app is selected.
2. Click the plus sign in the main panel.
3. Select **Module dependency**.
4. Select **jwplayer-ima-x.x.x**.
5. Click **OK**.
6. Click **Apply**.
7. Click **OK**.
8. In the **build.gradle** file of your app, add the `com.google.android.gms:play-services-ads:x.x.x` and `com.google.ads.interactivemedia.v3:interactivemedia:x.x.x` dependencies with the correct dependency version numbers.

```java
dependencies {
  ...
  implementation 'com.google.android.gms:play-services-ads:x.x.x'
  implementation 'com.google.ads.interactivemedia.v3:interactivemedia:x.x.x'
}
```

<br/>

## Add a pre-roll ad to a playlist

Use the following steps to add a pre-roll ad to the player you added to your activity:

1. In **app/java/MainActivity.java**, create a `List<AdBreak>` object called `adSchedule`.
2. Create an <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/ads/AdBreak.Builder.html" target="_blank">AdBreak</a> object named `adBreak`. At the minimum, you must pass an ad tag to the `tag` property.
3. Add `adBreak` to `adSchedule`.
4. Create an <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/ads/ImaAdvertising.html" target="_blank">ImaAdvertising</a> object named `imaAdvertising`. Use `AdSource.IMA` (which defines the ad client) and `adSchedule` (which defines the ad schedule to use) as the arguments.
5. Add `advertising(imaAdvertising)` to the `config` object of the player. This adds the ad schedule to the player.

```java
mPlayerView = findViewById(R.id.jwplayer);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .build();
        
adSchedule.add(adBreak);

ImaAdvertising imaAdvertising = new ImaAdvertising(AdSource.IMA, adSchedule);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);

PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(imaAdvertising)
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
3. When defining the <a href="https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/media/ads/AdBreak.Builder.html#offset-java.lang.String-" target="_blank">offset</a> property, choose one of the following values to schedule a mid-roll or post-roll ad.<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (String) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{timecode}**: (String) Ad plays at a specific time, in `hh:mm:ss:mmm` format.<br/><br/>**Post-roll**<br/>&nbsp;&nbsp;- `post`: (String) Ad plays after the content.<br/><br/>
5. Add the additional `AdBreak` object to `adSchedule`.

```java
mPlayerView = findViewById(R.id.jwplayer);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .offset("pre")
    .build();

AdBreak adBreak2 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll1.xml")
    .offset(10)
    .build();

AdBreak adBreak3 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll2.xml")
    .offset("00:00:15:000")
    .build();

AdBreak adBreak4 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll3.xml")
    .offset("25%")
    .build();

AdBreak adBreak5 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-post-roll.xml")
    .offset("post")
    .build();
        
adSchedule.add(adBreak);
adSchedule.add(adBreak2);
adSchedule.add(adBreak3);
adSchedule.add(adBreak4);
adSchedule.add(adBreak5);

ImaAdvertising imaAdvertising = new ImaAdvertising(AdSource.IMA, adSchedule);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);

PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(imaAdvertising)
    .build();

mPlayerView.setup(config);
```

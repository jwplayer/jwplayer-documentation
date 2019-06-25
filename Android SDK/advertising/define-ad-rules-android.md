# Define ad rules

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

<sup>Last Updated: June 13, 2019</sup>

After [adding ads](../monetize-your-content) to your content, you can define ad rules that control how often a viewer sees ads while viewing your video content. <strong>Ad rules can be used only when using a VAST (`AdSource.VAST`) ad client</strong>.

* If you are publishing playlists that consist of short-duration videos, like tutorials or product reviews, you can define `startOn` (the first playlist item allowing ad playback) and `frequency` (the regularity of ads within a playlist). 
* If you are publishing long-form content, like webinars or interviews, you can define `startOnSeek` (which determines if a returning visitor is served a pre-roll before resuming content playback) and `timeBetweenAds` (which sets the minimum time that must elapse between ads playback).

You can read [Ad rules reference](https://support.jwplayer.com/articles/ad-rules-reference) to learn more about how each ad rule impacts a user's experience.

<br/>

## Implementation

Use the following steps and code samples to define ad rules for the [player your added to your activity](../../getting-started/add-a-player-to-an-activity) with an [ad schedule](../monetize-your-content).

1. Create an <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/ads/AdRules.Builder.html" target="_blank">AdRules</a> object named `adRules`.
2. Configure the properties of the `adRules` object for your use case.
3. Add `adRules` to `adSchedule`.

<br/>

## Examples

### Example 1: Short-form content

The following example illustrates a short-form media item with a pre-roll. The first ad plays before the first playlist item (`startOn: 1`). Then, subsequent pre-rolls appear for every third playlist item (`frequency: 3`), starting with the fourth playlist item.

```java
mPlayerView = findViewById(R.id.jwplayer);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("//playertest.longtailvideo.com/pre.xml")
    .offset("pre")
    .build();
        
adSchedule.add(adBreak);

Advertising advertising = new Advertising(AdSource.VAST, adSchedule);
AdRules adRules = new AdRules.Builder()
    .startOn(1)
    .frequency(3)
    .build();
advertising.setAdRules(adRules);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .mediaId("123acb4e")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);


PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(advertising)
    .autostart(true)
    .build();

mPlayerView.setup(config);
```

### Example 2: Long-form content

The following example illustrates a long-form media item with multiple ad breaks. The `startOnSeek` and `timeBetweenAds` (set to 300 seconds) ad rules have been defined.

```java
mPlayerView = findViewById(R.id.jwplayer);

List<AdBreak> adSchedule = new ArrayList<>();

AdBreak adBreak = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag.xml")
    .offset("pre")
    .build();

AdBreak adBreak2 = new AdBreak.Builder()
    .tag("https://www.domain.com/adtag-mid-roll1.xml")
    .offset("10")
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

Advertising advertising = new Advertising(AdSource.VAST, adSchedule);
AdRules adRules = new AdRules.Builder()
    .startOnSeek("pre")
    .timeBetweenAds(300)
    .build();
advertising.setAdRules(adRules);

PlaylistItem playlistItem = new PlaylistItem.Builder()
    .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
    .mediaId("123acb4e")
    .build();

List<PlaylistItem> playlist = new ArrayList<>();
playlist.add(playlistItem);


PlayerConfig config = new PlayerConfig.Builder()
    .playlist(playlist)
    .advertising(advertising)
    .autostart(true)
    .build();

mPlayerView.setup(config);
```

<br/><br/>
<div id="wufoo-mff60sc1xnn4cu">
Use this <a href="https://jwplayerdocs.wufoo.com/forms/mff60sc1xnn4cu">form</a> to provide your feedback.
</div>
<script type="text/javascript">var mff60sc1xnn4cu;(function(d, t) {
var s = d.createElement(t), options = {
'userName':'jwplayerdocs',
'formHash':'mff60sc1xnn4cu',
'autoResize':true,
'height':'288',
'async':true,
'host':'wufoo.com',
'header':'show',
'ssl':true,
'defaultValues': 'field118=' + location.pathname};
s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
try { mff60sc1xnn4cu = new WufooForm();mff60sc1xnn4cu.initialize(options);mff60sc1xnn4cu.display(); } catch (e) {}};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');</script>

# Define ad rules

<sup>Last Updated: May 29, 2019</sup> 

After [adding ads](../monetize-your-content) to your content, you can define ad rules that control how often a viewer sees ads while watching your video content. 

* If you are publishing playlists that consist of short-duration videos, like tutorials or product reviews, you can define `startOn` (the first playlist item allowing ad playback) and `frequency` (the regularity of ads within a playlist). 
* If you are publishing long-form content, like webinars or interviews, you can define `startOnSeek` (which determines if a returning visitor is served a pre-roll before resuming content playback) and `timeBetweenAds` (which sets the minimum time that must elapse between ads playback).

You can read [Ad rules reference](https://support.jwplayer.com/articles/ad-rules-reference) to learn more about how each ad rule impacts a user's experience.

!!!important
&bull; When using a VAST (`vast`) ad client, you can define any of the four `advertising.rules` properties.<br/><br/>&bull; When using an IMA (`googima`) or a FreeWheel (`freewheel`) ad client, you can only define `startOn` and `frequency`. <br/><br/>&bull; When using Google's Dynamic Ad Insertion (`dai`) ad client, **none** of the `advertising.rules` properties are applicable. 
!!!

<br/>

## Implementation

Use the following steps and code samples to define ad rules for an [embedded player](../../getting-started/add-an-html5-player) with an [ad schedule](../monetize-your-content).

!!!tip
If you are using a cloud-hosted player, you can define the ad rules for an [ad schedule](https://support.jwplayer.com/articles/how-to-schedule-ad-breaks) in your JW Player dashboard and associate the ad schedule with your cloud-hosted player. The ad schedule will play in every instance of the embedded player.
!!!

1. Add a <a href="../../customization/configuration-reference/#advertising-rules" target="_blank">rules</a> object within the `advertising` object.
2. Configure the properties of the `rules` object for your use case.

<br/>

## Examples

### Example 1: Short-form content

The following example illustrates a short-form media item with a pre-roll. The first ad plays before the first playlist item (`startOn: 1`). Then, subsequent pre-rolls appear for every third playlist item (`frequency: 3`), starting with the fourth playlist item.

```html
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4",
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag: "https://www.domain.com/adtag.xml"
      }
    ],
    rules: {
      startOn: 1,
      frequency: 3
    }
  }
});
```

### Example 2: Long-form content

The following example illustrates a long-form media item with multiple ad breaks. The `startOnSeek` and `timeBeetweenAds` (set to 300 seconds) ad rules have been defined.

```html
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/media/ZYz1Lb0t",
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag: "https://www.domain.com/adtag.xml"
      },
      {
        offset: 10,
        tag: "https://www.domain.com/adtag-mid-roll1.xml"
      },
      {
        offset: "00:00:15:000",
        tag: "https://www.domain.com/adtag-mid-roll2.xml"
      },
      {
        offset: "25%",
        tag: "https://www.domain.com/adtag-midroll3.xml"
      },
      {
        offset: "post",
        tag: "https://www.domain.com/adtag-midroll3.xml"
      }
    ],
    rules: {
      startOnSeek: "pre",
      timeBetweenAds: 300
    }
  }
});
```

You can build upon this basic implementation by configuring [Video Player Bidding](../video_player_bidding_advanced_guide).

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
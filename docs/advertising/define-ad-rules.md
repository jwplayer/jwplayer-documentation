# Define ad rules

<sup>Last Updated: May 27, 2019</sup>

In addition to adding ads to your content, you can define ad rules that control how often a viewer sees ads while viewing your video content. 

* If you are publishing playlists that consist of short-duration videos, like tutorials or product reviews, you can define `startOn` (the first playlist item allowing ad playback) and `frequency` (the regularity of ads within a playlist). 
* If you are publishing long-form content, like webinars or interviews, you can define `startOnSeek` (which determines if a returning visitor is served a pre-roll before resuming content playback) and `timeBetweenAds` (which sets the minimum time that must elapse between ads playback).

You can read [Ad rule reference](https://support.jwplayer.com/articles/ad-rules-reference) to learn more how each ad rule impacts a user's experience.

!!!important
&bull; When using a VAST (`vast`) ad client, you can define any of the four `advertising.rules` properties.<br/><br/>&bull; When using an IMA (`googima`) or a FreeWheel (`freewheel`) ad client, you can only define `startOn` and `frequency`. <br/><br/>&bull; When using a dynamic ad insertion (`dai`), **none** of the `advertising.rules` properties are applicable. 
!!!

<br/>

## Implementation

Use the following steps and code samples to define ad rules for an embedded player with an ad schedule.

!!!tip
If you are using a cloud-hosted player, you can create define the ad rules for an [ad schedule](https://support.jwplayer.com/articles/how-to-schedule-ad-breaks) in your JW Player dashboard and associate the ad schedule with your cloud-hosted player. The ad schedule will play in every instance of the embedded player.
!!!

1. Add a <a href="../../customization/configuration-reference/#advertising-rules" target="_blank">rules</a> object within the `advertising` object.
2. Configure the properties of the `rules` object for your use case.

<br/>

## Examples

### Example 1: Short-form content

DESCRIPTION: The following example illustrates a short-form media item with a pre-roll. Additionally, the first ad plays before the first playlist item (`startOn: 1`). Then, subsequent pre-rolls appear for every third playlist item (`frequency: 3`), starting with the fourth playlist item.

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

DESCRIPTION: The following example illustrates a long-form media item with multiple ad breaks. Additionally, the `startOnSeek` and `timeBeetweenAds` (set to 300 seconds) ad rules have been defined.

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

You can build upon this basic implementation by configuring [Video Player Bidding](../advertising/video_player_bidding_advanced_guide).
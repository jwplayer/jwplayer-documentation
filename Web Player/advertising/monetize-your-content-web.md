# Monetize your content

<sup>Last Updated: May 29, 2019</sup>

The most basic advertising implementation is to run a single VAST ad tag as a pre-roll before each playlist item.

!!!tip
If you are using a cloud-hosted player, you can [create an ad schedule](https://support.jwplayer.com/articles/how-to-schedule-ad-breaks) in your JW Player dashboard and associate the ad schedule with your cloud-hosted player. The ad schedule will play in every instance of the embedded player.
!!!

<br/>

## Add a pre-roll ad break to a player

Use the following steps to add a pre-roll to an [embedded player](../../getting-started/add-an-html5-player): 

1. Within `setup()` of an embedded JW Player, add an <a href="../../customization/configuration-reference#advertising" target="_blank">advertising</a> object.
2. Define the `client` property within the `advertising` object as `vast` (VAST).
3. Define the `adscheduleid` property within the `advertising` object. Assign a randomly-generated, eight character, alpha-numeric value to this property.
4. Define a <a href="../../customization/configuration-reference/#advertising-schedule" target="_blank">schedule</a> array within the `advertising` object. At the minimum, you must assign an ad tag to the `tag` property. You can also assign the URL of a VMAP tag to the `schedule` property.

!!!tip
As a shortcut, you can define `advertising.tag` (String) to create a single pre-roll ad break. If you use this shortcut, you cannot add multiple ad breaks.<br/><br/> The `advertising.tag` property and `advertising.schedule[]` property cannot be used in the same `advertising` object.
!!!

<br/>

```html
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "vast",
    adscheduleid: "Az87bY12",
    schedule: [
      {
        tag: "https://www.domain.com/adtag.xml"
      }
    ]
  }
});
```

You can build on this basic implementation by [adding multiple ad breaks](#multiple-ad-breaks), [defining ad rules](../define-ad-rules) or configuring [Video Player Bidding](../video_player_bidding_advanced_guide/).

<br/>
<a name="multiple-ad-breaks"></a>

## Add multiple ad breaks to a player

Use the following steps to add multiple ad breaks to the previous VAST pre-roll example:

1. Define an additional index within the <a href="../../customization/configuration-reference/#advertising-schedule" target="_blank">advertising.schedule</a> array. 
2. Assign an ad tag to the `tag` property. 
3. When defining the `offset` property, choose one of the following values to schedule a mid-roll or post-roll ad:<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (Number) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{timecode}**: (String) Ad plays at a specific time, in `hh:mm:ss:mmm` format.<br/>&nbsp;&nbsp;- **{xx%}**: (String) Ad plays after xx% of the content has played.<br/><br/>**Post-roll**<br/>&nbsp;&nbsp;- `post`: (String) Ad plays after the content.

```html
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/media/123acb4e",
  advertising: {
    client: "vast",
    adscheduleid: "Az87bY12",
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
        tag: "https://www.domain.com/adtag-mid-roll3.xml"
      },
      {
        offset: "post",
        tag: "https://www.domain.com/adtag-post-roll.xml"
      }
    ]
  }
});
```

You can build on this basic implementation by [defining ad rules](../define-ad-rules) or [setting up Video Player Bidding](../set-up-video-player-bidding).
# Monetize your content

<sup>Last Updated: May 27, 2019</sup>

JW Player's advertising features help you to monetize your content with video ads while keeping your viewers engaged. JW Player supports standard ad types (VAST, VPAID, VMAP), accommodates third-party technologies (Google IMA SDK, FreeWheel SDK), and supports any ad server. You can customize your viewers' ad experiences with ad rules, ad breaks, and localized player messaging. With Video Player Bidding, you can improve the yield from programmatic advertisers. 

!!!important
To monetize your content with advertising, you must have a JW Player Business or Enterprise license. Please [contact our team](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) to upgrade your account.
!!!

<br/>

## Get the required items

To begin running advertising through your JW Player, you need the items in the following table.

| Item | Description |
| -- | -- |
| An embedded JW Player | A JW Player with content<br/><br/>If you have not already embedded a player or need to embed a new player, review [Add an HTML5 player](../../getting-started/add-an-html5-player).|
| JW Player Business or Enterprise license | Account plan that enables access to advanced video player features like advertising<br/><br/>[Upgrade](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) to a Business or Enterprise license if you would like to access JW Player's advertising features. |
| An ad tag | URL of the ad tag for VAST and IMA plugins, or a string placeholder for FreeWheel<br/><br/>The ad tag should be an active tag generated from an advertising platform. |

<br/>

## Add a pre-roll ad break to a player

The most basic advertising implementation is to run a single VAST ad tag as a pre-roll that runs before each playlist.

!!!tip
If you are using a cloud-hosted player, you can [create an ad schedule](https://support.jwplayer.com/articles/how-to-schedule-ad-breaks) in your JW Player dashboard and associate the ad schedule with your cloud-hosted player. The ad schedule will play in every instance of the embedded player.
!!!

<br/>

Use the following steps to add a pre-roll to an [embedded player](../../getting-started/add-an-html5-player): 

1. Within `setup()` of an embedded JW Player, add an <a href="../../customization/configuration-reference#advertising" target="_blank">advertising</a> object.
2. Define the `client` property within the `advertising` object as `vast` (VAST).
3. Define the `adscheduleid` property within the `advertising` object. Assign a randomly-generated, eight character, alpha-numeric value to this property.
4. Define a <a href="../../customization/configuration-reference/#advertising-schedule" target="_blank">schedule</a> array within the `advertising` object. At the minimum, you must assign an ad tag to the `tag` property and assign `pre` to the `offset` property. You can also assign the URL of a VMAP tag to the `schedule` property.

!!!
As a shortcut, you can define `advertising.tag` (String) to create a single pre-roll ad break. If you use this shortcut, you cannot add multiple ad breaks.<br/><br/> The `advertising.tag` property and `advertising.schedule[]` property cannot be used in the same `advertising` object.
!!!

```html
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "vast",
    adscheduleid: "Az87bY12",
    schedule: [
      {
        offset: "pre",
        tag: "https://www.domain.com/adtag.xml"
      }
    ]
  }
});
```

<br/>

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

You can build on this basic implementation by defining ad rules or configuring [Video Player Bidding](../video_player_bidding_advanced_guide/).
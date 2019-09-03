# Set up Video Player Bidding

Last Updated: September 6, 2019

Video Player Bidding (VPB) connects your digital video inventory directly to advertising demand sources, increasing competition for your inventory to boost your ad yield. By making an addition to the `advertising` object of the player, you can access the benefits of player bidding. You can use either a cloud-hosted or self-hosted player.

<br />

## Requirements
* JW Player 8.8.4+ with either a VAST or Google IMA ad client<sup>1</sup>
* JW Player Enterprise or Developer license
* An ad schedule
* An account with at least one supported SSP ad partner
* (Google IMA ad client only) If using DFP (Google Ad Manager) for mediation, DFP line items configured for VPB
* (GDPR only) If you need to send GDPR consent through your bids, the <a href="https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework" target="_blank">IAB Europe Transparency and Consent Framework</a>

<sup>1</sup> FreeWheel is not a supported ad client.

<br />

## Implementation

!!!important
&bull; If you plan to use DoubleClick for Publishers (DFP) as your mediation layer, be sure to set up line items within your Google Ad Manager account **[<===LINK BACK TO SUPPORT SITE]**.

&bull; Due to the potential impact on performance and user experience, while the player is waiting for the bidding process to complete, the `playAd()` method is not supported when using Video Player Bidding.
!!!

Use the following steps and code example to enable Video Player Bidding:

**1**. Within `setup()` of an embedded JW Player, add an `advertising` object.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {

  }
});
```

**2**. Define the `client` property within the `advertising` object.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima"
  }
});
```

**3**. Define the `adscheduleid` property within the `advertising` object. Assign a randomly-generated, eight-character, alpha-numeric value to this property.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima",
    adscheduleid: "Az87bY12"
  }
});
```

**4**. Define a `schedule` array within the `advertising` object. At the minimum, you must assign an ad tag to the `tag` property and assign `pre` to the `offset` property. <br /><br />Alternatively, you can assign the URL of a VMAP tag to the `schedule` property.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima",
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

**5**. Choose one of the following `bids.settings` objects. Use the [advertising.bids.settings](../../customization/configuration-reference/#advertising-bids-settings) to configure this object.

```javascript

// JW Player
bids: {
   settings: {
      mediationLayerAdServer: "jwp",
      floorPriceCents: 1000,
      floorPriceCurrency: "usd"
   },
}

// SpotX as Primary Adserver
bids: {
   settings: {
      mediationLayerAdServer: "jwpspotx"
   },
}

// DoubleClick for Publishers
bids: {
   settings: {
      mediationLayerAdServer: "dfp"
   },
}

// JW Player + DFP
bids: {
  settings: {
    mediationLayerAdServer: "jwpdfp",
    floorPriceCents: 1000,
    buckets: [
      {
        min: 0,
        max: 25,
        increment: 0.50
      }
    ]
  },
}
```

**6**. Add the configured `bids` object to the `advertising` object. If you use DFP for mediation, be sure to set up line items within your <a href="https://support.jwplayer.com/articles/set-up-video-player-bidding#google-ad-manager-required-setup" target="_blank">Google Ad Manager account</a> **[<== links to the new support VPB article]**.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima",
    adscheduleid: "Az87bY12",
    schedule: [...],
    bids: {
      settings: {
        mediationLayerAdServer: "jwpdfp",
        floorPriceCents: 1000,
        buckets: [
          {
            min: 0,
            max: 25,
            increment: 0.50
          }
        ]
      },
    }
  }
});
```

**7**. Add a `bidders` array to the `bids` object that defines the applicable `name`, `id`, `pubid`, and `type` for one or more ad partners. Use the [advertising.bids.bidders](../../customization/configuration-reference/#advertising-bids-bidders) to configure this object.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima",
    schedule: [...],
    adscheduleid: "Az87bY12",
    bids: {
      settings: {...},
      bidders: [
        {
          name: "EMX",
          pubid: "12345",
          id: "12346",
          type: "OpenRTB",
        }
      ]
    }
  }
});
```

**8**. (Optional) If you use SpotX as an ad partner, you can add an `optionalParams` object to append custom parameters to the ad tag.

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima",
    adscheduleid: "Az87bY12",
    schedule: [...],
    bids: {
      settings: {...},
      bidders: [
        {...},
        {
          name: "SpotX",
          id: "85394",
          optionalParams: {
            custom: {
              name: "custom_param_name_goes_here",
              value: "custom_param_value_goes_here"
            }
          }
        }
      ]
    }
  }
});
```

**9**. (Optional) Use the [Player configuration reference](../../customization/configuration-reference) to add additional Video Player Bidding options.

<br />
<br />

## Full code sample

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  advertising: {
    client: "googima",
    adscheduleid: "Az87bY12",
    schedule: [
      {
        offset: "pre",
        tag: "https://www.domain.com/adtag.xml"
      }
    ],
    bids: {
      settings: {
        mediationLayerAdServer: "jwpdfp",
        floorPriceCents: 1000,
        buckets: [
          {
            min: 0,
            max: 25,
            increment: 1
          }
        ]
      },
      bidders: [
        {
          name: "EMX",
          pubid: "12345",
          id: "12346",
          type: "OpenRTB"
        },
        {
          name: "SpotX",
          id: "85394",
          optionalParams: {
            custom: {
              name: "custom_param_name_goes_here",
              value: "custom_param_value_goes_here"
            }
          }
        }
      ]
    }
  }
});
```

<br />

## Best practices

Advertisers want to know that viewers have a great experience seeing their ads. In addition to video ad best practices, follow these best practices to improve the performance of your players that use Video Player Bidding.

* Configure your player to have a width greater than 640px.
* Make sure that the player is the main element on the page.
* If you embed the player in an article, consider using the [floating](../../customization/configuration-reference#float-on-scroll-880) property.
* Embed only one player on a page.
* If you embed more than one player on a page, do not embed an outstream and an instream implementation on the same page.

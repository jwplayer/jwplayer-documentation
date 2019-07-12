# Enable FreeWheel Ad Manager
 
 <sup>July 24, 2019</sup>

If you have an existing relationship with FreeWheel, you can configure JW Player's FreeWheel plugin to gain access to their video ad inventory.

<br/>

## Get required items

Before you add the FreeWheel Ad Manager to your app, you need the following values from your FreeWheel account.  If you do not know where to find these values, contact your FreeWheel account representative.

| Parameter | Description | Example |
| --- | --- | --- |
| `adManagerURL` | URL of the FreeWheel Ad Manager | `https://mssl.fwmrm.net/libs/adm/6.24.0/AdManager.js` |
| `fwassetid` | FreeWheel identifier of a particular media item | `DemoVideoGroup.01` |
| `networkid` | FreeWheel identifier of a network | `96749` |
| `profileid` | FreeWheel identifier of a particular application environment | `global-js` |
| `sectionid` | FreeWheel identifier of a location where the video content plays | `DemoSiteGroup.01` |
| `serverid` | URL of FreeWheel ad server | `http://demo.v.fwmrm.net/ad/g/1` |

<br/>

## Add a pre-roll ad to a player

Use the following steps and code samples to add a pre-roll ad to an [embedded player](../../getting-started/add-an-html5-player).

1. Within `setup()` of an embedded JW Player web player, define the `fwassetid` property as the name of your FW asset id. 
2. Add an <a href="../../customization/configuration-reference/#advertising" target="_blank">advertising</a> object.
3. Define the `client` property within the `advertising` object as `freewheel`.
4. Add the `freewheel` object within the `advertising` object. Define the `networkid`, `serverid`, `profileid`, `sectionid`, and `adManagerURL` properties with your FreeWheel account settings.
5. (Optional) If you have custom key-value pairs that you want to send with your ad call, add a `custom` object and define each key-value pair.
6. Define the `adscheduleid` property within the `advertising` object. Assign a randomly-generated, eight character, alpha-numeric value to this property. This allows you to analyze performance data by ad schedule.
7. Add a <a href="../../customization/configuration-reference/#advertising-schedule" target="_blank">schedule</a> array within the `advertising` object. Assign `fw-preroll` to the tag property. This creates an ad tag placeholder.

!!!tip
As a shortcut, you can define `advertising.tag` (String) to create a single pre-roll ad break. If you use this shortcut, you cannot add multiple ad breaks.<br/><br/> 
The `advertising.tag` property and `advertising.schedule[]` property cannot be used in the same `advertising` object.
!!!

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/a12bc3D4", 
  fwassetid: "DemoVideoGroup.01",
  advertising: {
    client: "freewheel",
    freewheel: {
      networkid: 96749,
      serverid: "http://demo.v.fwmrm.net/ad/g/1",
      profileid: "global-js",
      sectionid: "DemoSiteGroup.01"
      adManagerURL: "https://mssl.fwmrm.net/libs/adm/6.24.0/AdManager.js",
      custom: {
        key1: "val1",
        key2: "val2"
      }  
    },
    adscheduleid: "Az87bY12",
    schedule: [
      {
        tag: "fw-preroll"
      }
    ]
  }
});
```

You can build upon this basic implementation by adding adding multiple ad breaks or [defining ad rules](../define-ad-rules). Currently, Video Player Bidding cannot be configured when using FreeWheel.

<br/>

## Add multiple ad breaks to a player

Use the following steps to add multiple ad breaks to the previous FreeWheel pre-roll example:

1. In the existing `advertising.schedule` index, define the `offset` property as `pre`. When setting multiple ad breaks, each index must have an explicitly defined `offset`.
2. Define an additional index within the `advertising.schedule` array. 
3. Assign a placeholder to the `tag` property. Each ad break should have a different placeholder name (`fw-midroll1`, `fw-midroll2`, `fw-postroll`).
4. When defining the <a href="../../customization/configuration-reference/#embedded-ad-schedules-with-json" target="_blank">offset</a> property, choose one of the following values to schedule a mid-roll ad. **Post-roll ads are not currently supported for FreeWheel ad implementations**.<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (String) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{timecode}**: (String) Ad plays at a specific time, in `hh:mm:ss:mmm` format.<br/><br/>

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/media/123acb4e",
  fwassetid: "DemoVideoGroup.01",
  advertising: {
    client: "freewheel",
    freewheel: {
      networkid: 96749,
      serverid: "http://demo.v.fwmrm.net/ad/g/1",
      profileid: "global-js",
      sectionid: "DemoSiteGroup.01"
      adManagerURL: "https://mssl.fwmrm.net/libs/adm/6.24.0/AdManager.js",
      custom: {
        key1: "val1",
        key2: "val2"
      } 
    },
    adscheduleid: "Az87bY12",
    schedule: [
      {
        offset: "pre",
        tag: "fw-preroll"
      },
      {
        offset: 10,
        tag: "fw-midroll1"
      },
      {
        offset: "00:00:15:000",
        tag: "fw-midroll2"
      },
      {
        offset: "25%",
        tag: "fw-midroll3"
      },
      {
        offset: "post",
        tag: "fw-postroll"
      }
    ]
  }
});
```

You can build upon this implementation by [defining ad rules](../define-ad-rules). Currently, Video Player Bidding cannot be configured when using FreeWheel.


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
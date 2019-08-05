# Set up Recommendations

<sup>Last Updated: August 6, 2019</sup>

If you have hundreds of videos hosted on or registered with your account, Recommendations automates the generation of a playlist based on a seed video and provides you options to customize the appearance and behavior of that playlist.

!!!important
This feature requires an Enterprise license. To access these features, [upgrade now](https://www.jwplayer.com/pricing/?utm_source=support&utm_medium=CTA&utm_campaign=Inline%20Upgrade) and ask your JW Player representative to enable Recommendations.
!!!

<br/>

Use one of the following approaches to add Recommendations to an embedded web player and configure the viewing experience. You must be using a cloud-hosted or self-hosted player library that has been added to the `<head>` of your page.

<br/>

- **Associate Recommendations to specific content**: This option provides the most flexibility.
- **Associate Recommendations to a player**: This option allows you to associate the same recommendations playlist logic to all content viewed in a player. However, you cannot customize the `related.autoplaymessage` or `related.heading` for localization.

<br/>

You can also [set up Recommendations](https://support.jwplayer.com/articles/set-up-recommendations) from your JW Player dashboard.

<br/>

## Associate Recommendations to specific content

**1.** Make a call to `api.jwplatform.com/v1` using `GET /channels/create?type=feed&title={title_name}` to create a playlist. Replace `{title_name}` with a name for the playlist. If this is your first time using the Management API, read our documentation on <a href="https://developer.jwplayer.com/jw-platform/reference/v1/authentication.html" target="_blank">authentication</a> and <a href="https://developer.jwplayer.com/jw-platform/reference/v1/call_syntax.html" target="_blank">call syntax</a>.

```bash
GET https://api.jwplatform.com/v1/channels/create?type=feed&title=An+awesome+feed
&api_nonce=80684843&api_timestamp=1237387851&api_format=json
&api_signature=fbdee51a45980f9876834dc5ee1ec5e93f67cb89&api_key=abC432d1
```

<br/>

**2.** Locate the eight-character, alphanumeric `channel.key` in the response. This is the unique identifier for the playlist that you just created.

!!!tip
As an alternative to these previous steps you can use the following steps:<br/><br/>&nbsp;&nbsp;**1.** You can [create a recommendations playlist](https://support.jwplayer.com/articles/create-a-playlist) within your JW Player dashboard.<br/>&nbsp;&nbsp;**2.** Copy the **Playlist ID** from the **DEVELOPER RESOURCES** tab of the recommendations playlist.
!!!

<br/>

**3.** In the `playlist` parameter of your player code, add a query string for the recommendation playlist (`?recommendations_playlist_id={channel.key}`) to the existing playlist or video URL. Be sure to replace `{channel.key}` with the key from the API response or **Playlist ID**.

```javascript
playlist: "https://cdn.jwplayer.com/v2/media/Ly53q8A1?recommendations_playlist_id={key}"
```

You can append the same recommendations playlist to multiple players. And, you can also incorporate additional features to the <a href="https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/#/Media/get_v2_media__media_id_" target="_blank">media URL</a> (`/v2/media/{media_id}`) or <a href="https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/#/Playlists/get_v2_playlists__playlist_id_" target="_blank">playlist URL</a> (`/v2/playlists/{playlist_id}`) endpoint.

<br/>

**4.** (Optional) Define the <a href="https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#behavior" target="_blank">nextupoffset</a> property to define when the Next Up pop-up appears. The Next Up display shows the name, thumbnail, and duration of the next video. When the default value (`10`) is not changed, the Next Up display appears 10 secs before the current video ends.

<img src="../../img/recommendations/recommendations-nextup.png" width="400" />

<br/>

**5.** <a name="displayMode"></a>Define the `related.displayMode` property. This property controls how the recommended video thumbnails are displayed. Choose between the options in the following table.

| Option | Description |
| --- | --- |
| `shelf` | (Default) Adds a horizontal bar of thumbnails above the control bar that allows viewers to browse recommended videos during the playback experience and when playback is paused <br/><br/>The shelf appears when a viewer clicks the recommendation icon located above the control bar during playback or pauses playback. |
| `shelfWidget` | Adds a persistent horizontal bar of thumbnails beneath the player that allows viewers to browse recommended videos during the playback experience |

<img src="../../img/recommendations/recommendations-shelf-shelf-widget.jpg"/>

<br/>

**6.** (Optional) Define the `related.autoplaytimer` as `10`. This creates a 10-second break between the playback of videos and enables the countdown overlay to appear.

<br/>

**7.** (Optional) Define the `related.oncomplete` as `autoplay`. This property helps to extend a user's viewing session.

<br/>

**8.** (Optional) Use the `intl.en.related.autoplaymessage` property to define the message that displays when the countdown overlay appears. We suggest using `__title__ will play in xx seconds`.

The countdown message appears above the title and description of the next video to play. The default message is *Next up in X*. X represents the number of seconds remaining in the countdown as defined by `related.autoplaytimer`.  As shown in the full code sample at the end of this article, you can [customize this text for other languages](../../customization/configuration-reference/#internationalization) by adding additional language objects: `intl.{lang}.related.autoplaymessage`.

<img src="../../img/recommendations/recommendations-nextup-overlay.png"/>

<br/>

**9.** (Optional) Define the `intl.en.related.heading` property to customize the title of Recommendations videos. You can customize this text for other languages by adding additional language objects: `intl.{lang}.related.heading`. The location of this text depends upon the value of [displayMode](#displayMode).

| Display mode | Locations |
| --- | --- |
| `shelf` | &bull; Next to the Recommendations icon above the control bar<br/>&bull; Title of the countdown overlay |
| `shelfWidget` | &bull; Above the horizontal bar of thumbnails beneath the player<br/>&bull; Title of the countdown overlay |

<br/>

**10.** (Optional) Add other <a href="https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#related" target="_blank">related</a> properties to customize the viewing experience.

<br/>

### Full code sample

```javascript
jwplayer("myElement").setup({
  playlist: "https://cdn.jwplayer.com/v2/media/Ly53q8A1?recommendations_playlist_id=n29tZc01",
  nextupoffset: -10,
  related: {
    displayMode: "shelf",
    autoplaytimer: 10,
    oncomplete: "autoplay"
  },
  intl: {
    en: {
      related: {
        autoplaymessage: "__title__ will play in xx seconds",
        heading: "More Amazing Videos"
      }
    },
    fr: {
      related: {
        autoplaymessage: "__title__ commencera dans xx secondes",
        heading: "Plus de vidéos étonnantes"
      }
    }
  }
});
```

!!!tip
You can also use <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#related">JavaScript API</a> calls to enhance the functionality of your JW Recommendations viewer experience.
!!!

***

## Associate Recommendations to a player

If you use the same cloud-hosted player in multiple locations on your site, you can add Recommendations to the player. This allows you to configure Recommendations in one location and to apply those settings to all content that is viewed in the player. 

<br/>

Use the following steps to add Recommendations to a player:

<br/>

**1.** Make a call to `api.jwplatform.com/v1` using `GET /players/list`.  If this is your first time using the Management API, read our documentation on <a href="https://developer.jwplayer.com/jw-platform/reference/v1/authentication.html" target="_blank">authentication</a> and <a href="https://developer.jwplayer.com/jw-platform/reference/v1/call_syntax.html" target="_blank">call syntax</a>.

```bash
GET https://api.jwplatform.com/v1/players/list?api_nonce=80684812&api_timestamp=1237387841&api_format=json
&api_signature=fbdee51a45980f9876834dc5ee1tz5e93f67cb89&api_key=abC432d1
```

<br/>

**2.** Locate and save the eight-character, alphanumeric `player.key` in the API response for the player that you want to update.

<br/>

**3.** Make a `GET /channels/create?type=feed&type={title_name}` call to create a playlist. Replace `{title_name}` with a name for the playlist.

```bash
GET https://api.jwplatform.com/v1/channels/create?type=feed&title=An+awesome+feed&api_nonce=80684843&api_timestamp=1237387851&api_format=json
&api_signature=fbdee51a45980f9876834dc5ee1ec5e93f67cb89&api_key=abC432d1
```

<br/>

**4.** Locate the eight-character, alphanumeric `channel.key` in the API response. This is the unique identifier for the playlist that you just created.

<br/>

**5.** Make a <a href="https://developer.jwplayer.com/jw-platform/reference/v1/methods/players/update.html#parameters" target="_blank">POST /player/update</a> call to associate the recommendations playlist you created to the existing player.

```bash
POST https://api.jwplatform.com/v1/player/update?
api_nonce=80684843
&api_timestamp=1237387851&api_format=json
&api_signature=fbdee51a45980f9876834dc5ee1ec5e93f67cb89&api_key=abC432d1

{
  "related_displaymode": "shelf",
  "related_autoplaytimer": "10",
  "related_videos": "autoplay",
  "related_autoplaymessage": "__item-title__ will play in xx seconds",
  "related_heading": "More Amazing Videos"
}
```

!!!tip
You can also use <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#related">JavaScript API</a> calls to enhance the functionality of your JW Recommendations viewer experience.
!!!

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

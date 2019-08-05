# Set the dimensions of a player

<sup>Last Updated: August 6, 2019</sup>

Regardless of your use case, JW Player allows you to easily set fixed or responsive dimensions for your web player. 

If you embed a self-hosted player or create a player with an API call to `/players/create`, your player is configured to be a **fixed** player with the dimensions of **640x360**, by default. A fixed player is a good solution if you plan to embed videos in a sidebar, table, or iframe with fixed dimensions. Otherwise, you should configure your player to be a responsive player.

When you configure your player to be a responsive player, you define the width as a percentage and an aspect ratio. The width of the player dynamically adjusts to the available width on the page. The height of the player adjusts proportionally to the width of the player, maintaining the aspect ratio of your video. 

<br/>

## Set the dimensions of a player instance

To set the dimensions for a single instance of a responsive or fixed dimension web player, define the appropriate properties within the JSON object when you call `setup()`. Using this approach to set the dimensions of a player will override the default settings (self-hosted players) or the globally defined settings (cloud-hosted players).

### Responsive player

When creating a responsive web player, the `responsive` and `aspectratio` properties are required. The `width` property is optional.

```javascript
jwplayer("myElement").setup({ 
  playlist: "https://cdn.jwplayer.com/v2/playlists/xxxxYYYY",
  width: "50%",
  aspectratio: "16:9",
});
```

### Fixed-dimension player

When setting the dimensions of a fixed player, both the `height` and `width` properties are required.

```javascript
jwplayer("myElement").setup({ 
  playlist: "https://cdn.jwplayer.com/v2/playlists/xxxxYYYY",
  width: 480,
  height: 270
});
```

### Fixed-dimension player after setup

After a player has been instantiated on a page, you can use `resize(width, height)` to change the fixed dimensions of a player. Both the `height` and `width` arguments are required.

```javascript
jwplayer("myElement").resize(480, 270);
```

<br/>

***

## Set the dimensions of a cloud-hosted player

Use the following steps to set the dimensions for a cloud-hosted responsive or fixed dimension web player. This method allows you to control all instances of the cloud-hosted player.

You can also use your JW Player dashboard to [set the dimensions](https://support.jwplayer.com/articles/set-the-dimensions-of-player) of a player.

<br/>

**1.** Make a call to `api.jwplatform.com/v1` using `GET /players/list`. If this is your first time using the Management API, read our documentation on <a href="https://developer.jwplayer.com/jw-platform/reference/v1/authentication.html" target="_blank">authentication</a> and <a href="https://developer.jwplayer.com/jw-platform/reference/v1/call_syntax.html" target="_blank">call syntax</a>.

```bash
GET https://api.jwplatform.com/v1/players/list?api_nonce=80684812&api_timestamp=1237387841&api_format=json
&api_signature=fbdee51a45980f9876834dc5ee1tz5e93f67cb89&api_key=abC432d1
```

<br/>

**2.** Locate and save the eight-character, alphanumeric `player.key` in the API response for the player that you want to update.

<br/>

**3.** Make a <a href="https://developer.jwplayer.com/jw-platform/reference/v1/methods/players/update.html#parameters" target="_blank">POST /player/update</a> call to set the dimensions of your player.

<br/>

**Responsive player example**

When creating a responsive web player, the `responsive` and `aspectratio` properties are required. The `width` property is optional.

```bash
POST https://api.jwplatform.com/v1/player/update?
api_nonce=80684843&api_timestamp=1237387851&api_format=json&
api_signature=fbdee51a45980f9876834dc5ee1ec5e93f67cb89&api_key=abC432d1

{
  "responsive": "true",
  "width": "50%"
  "aspectratio": "16:9"
}
```

<br/>

**Fixed-dimensions player example**

When setting the dimensions of a fixed player, both the `height` and `width` properties are required.

```bash
POST https://api.jwplatform.com/v1/player/update?
api_nonce=80684843&api_timestamp=1237387851&api_format=json&
api_signature=fbdee51a45980f9876834dc5ee1ec5e93f67cb89&api_key=abC432d1

{
  "width": 640
  "height": 360,
}
```

<br/>

!!!tip
When setting the dimensions of a web player, remember the following points:<br/><br/>&bull; The dimensions of a web player should be greater than 0x0.<br/>&bull; If you are embedding a web player into an iframe, the dimensions of the iframe should be greater than 0x0.<br/>&bull; Responsive web players should be placed into responsive iframes.<br/>&bull; Fixed-dimension players should be placed into fixed-dimensions iframes.
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
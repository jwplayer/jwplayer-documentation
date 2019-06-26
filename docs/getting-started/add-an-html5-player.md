# Add an HTML5 player to a site

<sup>Last Updated: June 26, 2019</sup>

To add a player to your site, you must add a reference to the player library, embed the player, and configure the player with content.

<br/>

## Get a player library

 You can get a player library in several ways. The following table explains the cloud-hosted and self-hosted approaches that you can use. Review the approaches and follow the process for the approach that suits your implementation needs.

| Approach | Process |
|---|---|
| Cloud-hosted by JW Player without API calls | 1. From your <a href="https://dashboard.jwplayer.com/" target="_blank">dashboard</a>,  click **Players > Downloads & Keys**.<br/>2. In the **Cloud Hosted Player Libraries** section, select a **Player Title** from the dropdown menu.<br/>3. Copy the **Cloud Player Library Url**.|
| Cloud-hosted by JW Player with API calls | 1. Make a call to `api.jwplatform.com` using `GET /players/list` to list the players in your account. If this is your first time using the Management API, read our documentation on [authentication](https://developer.jwplayer.com/jw-platform/reference/v1/authentication.html) and [call syntax](https://developer.jwplayer.com/jw-platform/reference/v1/call_syntax.html).<br/><br/>2. Locate the `key` in the response, for example: `{key: "aBCdE12G"}`.<br/><br/>3. Construct the cloud-hosted player library URL with the `key`: `https://cdn.jwplayer.com/libraries/{key}.js`.|
| Self-hosted | Use of a self-hosted JW Player library requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/contact-us/?utm_source=developer&utm_medium=CTA&utm_campaign=player-docs) if you would like to upgrade your account.<br/><br/>1. From your dashboard,  click **Players > Downloads & Keys**.<br/>2. In the **Downloads** section, select a **VERSION** of the self-hosted JW Player library from the dropdown menu.<br/>3. Click the icon in the **DOWNLOAD** column.<br/>4. Copy the **LICENSE KEY** for the JW Player library.<br/>5. Rename and upload the unzipped library folder to your server. When renaming the folder, remove the periods from the folder name.

<br/>

## Add library reference and embed player to a page

Now that you have the URL for your player library, you can add a library reference to a page and embed a player.

1. In the `<head>` of your page, add a reference to the player library JavaScript file. If you are self-hosting your player, also add your license key: `jwplayer.key="{license_key}"`.
2. Create a named `<div>` in the `<body>` of your page in the location where the player should appear.
3. Call `setup()` with the <a href="https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#playlist" target="_blank">playlist</a> property to instantiate the player in the named `<div>`.<br/><br/>In addition to instantiating an instance of a player, `setup()` allows you to [enable and configure player features](../customization/configuration-reference.md). `setup()` is one of <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/" target="_blank">several methods</a> that can be used to interact with the player.

<br/>
Use the [Code examples](#code-examples) section to validate your implementation.
<br/>
<hr/>

<a name="code-examples"></a>
## Code examples

The following code examples illustrate the code structure of a cloud-hosted or self-hosted player that has been implemented correctly.

**Example 1: Cloud-hosted player with playlist defined by a URL referring to a JSON file containing a list of videos**

```html
<html>
  <head>
    ...
    <script src="https://cdn.jwplayer.com/libraries/aBCdE12G.js"></script>
    ...
  </head>
  <body>
    ...

    <div id="myElement"></div>

    <script type="text/JavaScript">

      jwplayer("myElement").setup({ 
        "playlist": "https://cdn.jwplayer.com/v2/media/xxxxYYYY"
      });

    </script>

    ...
  </body>
</html>
```
<br/><br/>

**Example 2: Self-hosted player with playlist defined by an array of videos**
```html
<html>
  <head>
    ...
    <script src="https://www.yourdomain.com/jwplayer863/jwplayer.js"></script>
    <script>jwplayer.key="ABCdeFG123456SeVenABCdeFG123456SeVen=="></script>
    ...
  </head>
  <body>
    ...

    <div id="myElement"></div>

    <script type="text/JavaScript">

      jwplayer("myElement").setup({ 
        "playlist": [{
            "file": "/assets/sintel.mp4",
            "mediaid": "ddra5731"
        },{
            "file": "/assets/bigbuckbunny.mp4",
            "mediaid": "ddrx3v2a"
        }]
      });

    </script>

    ...
  </body>
</html>
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

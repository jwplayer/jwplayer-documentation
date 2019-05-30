# Custom Skins

JW Player skins change the appearance of the player, adding a customizable interactive layer to your player embeds. All visual components of the player (the controlbar, display, tooltip, dock and playlist) can be skinned in accordance to our skin reference page. Skins will be displayed on desktop and mobile browsers, with the exception of Youtube embeds prior to playback.

Compared to JW6's XML model, JW Player 7 CSS-based skins. Due to this change, skin modifications can be easily made on-the-fly. See our skin-swapping example below for more information. Note that due to the fundamental changes in our skinning model, JW6 skins are not compatible with JW7.


## Using JW Player Skins

This section explains JW Player's built-in methods for configuring skins. If you are looking for information on how to design and create a skin yourself, see [Creating Your Own Skin](#creating-your-own-skin).

The 8 skins included in JW7 can be chosen by simply inserting the skin name into your player's skin.name config. The available premade skin names include six, five, beelden, vapor, roundster, bekle, stormtrooper, and glow. Example code, which will load our bekle skin, is shown here:

```
var playerInstance = jwplayer("myElement");
playerInstance.setup({
  file: "/upload/myVideo.mp4",
  skin: {
  name: "bekle"
  }
});
```

Because JW7 utilizes CSS for its skinning model, we can easily switch between skins on-the-fly. Below is an example player which allows you to dynamically view our different available skinning options.

<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/six.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/five.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/beelden.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/vapor.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/bekle.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/roundster.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/stormtrooper.css" rel="stylesheet" type="text/css" />
<link href="//ssl.p.jwpcdn.com/player/v/7.2.3/skins/glow.css" rel="stylesheet" type="text/css" />
<div id="skins" style="width: 640px;">
<div id="player">&nbsp;</div>
<script src="https://content.jwplatform.com/libraries/x9fWGui0.js"></script>
<p style="position: relative; text-align: center; margin-left: 80px;"><a href="javascript:getClass('seven')">Seven</a> | <a href="javascript:getClass('six')">Six</a> | <a href="javascript:getClass('five')">Five</a> | <a href="javascript:getClass('glow')">Glow</a> | <a href="javascript:getClass('beelden')">Beelden</a><br />
<a href="javascript:getClass('vapor')">Vapor</a> | <a href="javascript:getClass('bekle')">Bekle</a> | <a href="javascript:getClass('roundster')">Roundster</a> | <a href="javascript:getClass('stormtrooper')">Stormtrooper</a></p>
</div>

<script type="text/javascript" language="javascript">
	var playerInstance = jwplayer("player");
	playerInstance.setup({
		image: "//demo.jwplayer.com/homepage/homepage_preroll.jpg",
		title: "JW Player Skins",
		autostart: false,
description: "Click on the different skins below!",
		file: "//content.jwplatform.com/videos/HkauGhRi-640.mp4",
		width: 640,
		height: 360,
		skin: {
			//background: 'blue'
		}
	}); 
function getClass(skin){
var className =  document.getElementById("player").className;
var res = className.split(" ");
var currentSkin;
var newSkin = "jw-skin-"+skin;
if ($.inArray('jw-skin-seven', res)>=0) {
  	currentSkin = 'jw-skin-seven';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  } 
  else if($.inArray('jw-skin-six', res)>=0){
  	currentSkin = 'jw-skin-six';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }
  else if($.inArray('jw-skin-bekle', res)>=0){
  	currentSkin = 'jw-skin-bekle';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }
 else if($.inArray('jw-skin-vapor', res)>=0){
 	currentSkin = 'jw-skin-vapor';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }
  else if($.inArray('jw-skin-roundster', res)>=0){
  	currentSkin = 'jw-skin-roundster';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }  
  else if($.inArray('jw-skin-five', res)>=0){
  	currentSkin = 'jw-skin-five';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }  
  else if($.inArray('jw-skin-beelden', res)>=0){
  	currentSkin = 'jw-skin-beelden';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }
	 else if($.inArray('jw-skin-glow', res)>=0){
  	currentSkin = 'jw-skin-glow';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }	
  	 else if($.inArray('jw-skin-stormtrooper', res)>=0){
  	currentSkin = 'jw-skin-stormtrooper';
  	$("#player").toggleClass(''+ currentSkin + ' '+newSkin+'');
  }	
}
</script>

### Setting Custom Colors
Once you've chosen a skin to use with your player, it is possible to further customize the skin by setting up to three colors in the JW Player configuration:

|Option|Details|
|-----|-------|
|skin.active|Active skin elements. This includes active and highlighted labels, as well scrubber time that has elapsed.|
|skin.inactive|Skin elements that are not active. This includes scrubber time that has not yet elapsed.|
|skin.background|The background portion of the control bar.|

Fully configuring a player embed with a custom skin, as well as custom skin colors, can be seen below:

```
playerInstance.setup({
    file: "/uploads/example.mp4",
    height: 360,
    width: 640,
    image: "/uploads/example.jpg",
    skin: {
       name: "bekle",
       active: "red",
       inactive: "white",
       background: "black"
    }
});
```
<br/>
## Creating Your Own Skin

First you will need to give your custom skin a name, which will be used to enable it within a player. The given name will be added into the jwplayer element and can be used to overwrite styles. The actual skin name should be appeneded to the **.jw-skin-** prefix. Our below example is altering our display icon container, and is going to be called **myskin**:

```
.jwplayer.jw-skin-myskin .jw-display-icon-container {
    border-style: solid;
    border-width: medium;
    border-radius: 50%;
    padding:1em;
}
```

Loading a custom skin will replace all elements with our basic **core** skin unless they are explicitly styled. Because of this, we suggest using an existing skin as a starting point for your CSS skinning needs.

Upon embedding the player, you *must* ensure to set your "skin" configuration option to the name specified in your skin. Read more in our [configuration options reference](../configuration-reference)

### Implementing your CSS

There are currently **two** options to implement the above CSS modifications with JW7\. One of these methods is **much** preferred to maintain optimal rendering performance:

#### Option 1: Referencing the CSS on the page itself (Best Practice)

Directly embedding your CSS allows for your styles to load at the same time as your page. If we've placed the above CSS into a file (Which we'll call **myskinfile.css**), we can reference our .css file by placing the following in our HTML page's head:

```
<link rel="stylesheet" type="text/css" href="//yoursite.com/yourstyles/myskinfile.css"> </link>
```

Once the above is loaded, your player configuration will still need to reference the style appended to **.jw-skin-** within the **skin.name** configuration. In this case, we've called this **myskin**

```
jwplayer('myElement')setup({
	"skin": {
	"name": "myskin"
	}
});
```

#### Option 2: Configuring the CSS URL within **skin.url**

It is possible to reference your CSS file's **url** within the **skin** block of your JW Player embed. This is less preferred, as it requires the player to load your CSS file during setup. Because of this, the rendering of your player may slow down.

```
jwplayer('myElement').setup({
	"skin" : {
	"url":"//yoursite.com/yourstyles/myskinfile.css",
	"name": "myskin"
	}
});
```

Due to possibly impacting rendering speed, option 2 should only be used if you do not have access to the HTML on the page where your player will be rendered.

<br/>

## Advanced Skinning

For advanced skin customization, we suggest editing a premade skin and then rebuilding it. The first time you do this, you will need to install [LESS](http://lesscss.org/). Afterwards you will be able to build a skin by navigating to jwplayer/src/css and running the command:

```
lessc jwplayer.less > output.css
```

For a complete list of class names that are able to be overridden see CSS Skin Classes, please see our [CSS Skin Reference](/customization/css-skinning/skins_reference.md).

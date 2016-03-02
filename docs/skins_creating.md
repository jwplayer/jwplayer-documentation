#Creating your Style

First you will need to give your custom skin a name, which will be used to enable it within a player. The given name will be added into the jwplayer element and can be used to overwrite styles. The actual skin name should be appeneded to the **.jw-skin-** prefix. Our below example is altering our display icon container, and is going to be called **myskin**:

<pre>.jwplayer .jw-skin-myskin .jw-display-icon-container {
    border-style: solid;
    border-width: medium;
    border-radius: 50%;
    padding:1em; 
}
</pre>

Loading a custom skin will replace all elements with our basic **core** skin unless they are explicitly styled. Because of this, we suggest using an existing skin as a starting point for your CSS skinning needs.

## Implementing your CSS

There are currently **two** options to implement the above CSS modifications with JW7\. One of these methods is **much** preferred to maintain optimal rendering performance:

### Option 1: Referencing the CSS on the page itself (Best Practice)

Directly embedding your CSS allows for your styles to load at the same time as your page. If we've placed the above CSS into a file (Which we'll call **myskinfile.css**), we can reference our .css file by placing the following in our HTML page's head:

<pre>
&lt;link rel="stylesheet" type="text/css" href="//yoursite.com/yourstyles/myskinfile.css>&lt;/link>
</pre>

Once the above is loaded, your player configuration will still need to reference the style appended to **.jw-skin-** within the **skin.name** configuration. In this case, we've called this **myskin**

<pre>
var playerInstance = jwplayer('myElement');
playerInstance.setup({
	skin : {
	name:"myskin"
	}
});
</pre>

### Option 2: Configuring the CSS URL within **skin.url**

It is possible to reference your CSS file's **url** within the **skin** block of your JW Player embed. This is less preferred, as it requires the player to load your CSS file during setup. Because of this, the rendering of your player may slow down.

<pre>
var playerInstance = jwplayer('myElement');
playerInstance.setup({
	skin : {
	url:"//yoursite.com/yourstyles/myskinfile.css",
	name:"myskin"
	}
});
</pre>

Due to possibly impacting rendering speed, option 2 should only be used if you do not have access to the HTML on the page where your player will be rendered.

## Advanced Skinning

For advanced skin customization, we suggest editing a premade skin and then rebuilding it. The first time you do this, you will need to install [LESS](http://lesscss.org/). Afterwards you will be able to build a skin by navigating to jwplayer/src/css and running the command:

<pre>
lessc jwplayer.less > output.css
</pre>

For a complete list of class names that are able to be overridden see CSS Skin Classes, please see our [CSS Skin Reference](http://support.jwplayer.com/customer/portal/articles/2067702-skin-css).
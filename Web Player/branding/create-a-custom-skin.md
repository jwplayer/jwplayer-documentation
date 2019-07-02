!!!
This page has been updated for JW Player 8. Click here to go to the [JW7 Custom Skins reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/skins_creating/).
!!!

# Create a custom skin

<sup>Last Updated: April 15, 2019</sup>

The nine complimentary skins offered in JW7 have been deprecated in JW8, but customizing JW Player is easy with JW Player 8's CSS-based skinning model. 

To configure colors only, our [11 skin color configuration options](../../configuration-reference/#skin), which can be defined inside the player setup, may be sufficient. For more advanced users, the rest of this page will explain how to create your own custom skin and load it into your JW Player.

## Creating your Style

First, you will need to give your custom skin a name, which will be used to enable it within a player. The given name will be added into the jwplayer element and can be used to overwrite styles. The actual skin name should be appeneded to the **.jw-skin-** prefix. Our below example is altering our display icon container, and is going to be called **myskin**:

```
.jwplayer.jw-skin-myskin .jw-display-icon-container {
    border-style: solid;
    border-width: medium;
    border-radius: 50%;
    padding: 1em;
}
```

Upon embedding the player, you *must* ensure to set your "skin" configuration option to the name specified in your skin. Read more in our [configuration options reference](../../configuration-reference). 

## Implementing your CSS

There are currently **two** options to implement the above CSS modifications with JW8. One of these methods is **much** preferred to maintain optimal rendering performance.

### Option 1: Referencing the CSS on the page itself (Best Practice)

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

### Option 2: Configuring the CSS URL within **skin.url**

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

For a complete list of class names that are able to be overridden, please see our [CSS Skin Reference](../css-skinning/skins_reference.md).

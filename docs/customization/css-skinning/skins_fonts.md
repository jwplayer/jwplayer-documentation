!!!
This page has been updated for JW Player 8. Click here to go to [JW7 Custom Icons and Fonts](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/skins_fonts/).
!!!

# Custom Icons

JW8 uses inline SVGs for all icons. This solution is performant, but is more advanced to customize than JW7's webfont implementation. We're working improving the ease of customizing icons in JW8 in 2018. In the meantime, here are two ways of switching out icons in your player.

## Option 1: Javascript with innerHTML

Here is an example of what a typical SVG icon looks like in the player:
```
<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240">
    <path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path>
</svg>
```

Our [skinning reference](http://127.0.0.1:8000/customization/css-skinning/skins_reference/) lists all the div container and SVG class names. You can use javascript to select the SVG's div container by class name. 
```
getElementsByClassName('jw-icon-fullscreen')[0]
```

Then, set the innerHTML to equal your new inlined SVG. The SVG should be set up like ours, ideally with the same viewbox. It's critical that all of the original classes present in that exact SVG are used, or else it may not work as expected. The specific class name differs by icon, but `jw-svg-icon` is a required class.

## Option 2: CSS with :after pseudo-element

An alternate method would be to target and hide the SVG's `path` in CSS with `display:none`. Then, add an `:after` pseudo-element with a background image. You'll also need to add a second `:after` pseudo-element for the hover state, using a separate background image.


!!!
This page has been updated for JW Player 8. Click here to go to [JW7 Custom Icons and Fonts](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/skins_fonts/).
!!!

# Add custom icons

JW8 uses inline SVGs for all player icons to allow for styling flexibility with CSS. Our [CSS Skinning Reference](/customization/css-skinning/skins_reference/) lists all SVG class names, and you can view our [Custom Icons Demo](https://developer.jwplayer.com/jw-player/demos/customization/custom-icons/) for an example of how to replace all icons in the player using the following guidelines.

## Replacing Default Icons with Custom Icons

To override the player's default icons, use CSS to target and hide the `<svg>`'s child `<path>` with `display:none`. Then, set the background image attribute on the SVG's selector to reference your own custom icon.

**Example for replacing the Play icon:**
```
.jw-svg-icon-play path {	
	display: none;
}
.jw-svg-icon-play {
	background-image: url('//icons.jwplayer.com/icons/play.svg');
	background-size: contain;
	background-repeat: no-repeat;
}
```
**Example for replacing the Buffer icon:**

(The rotating animation will still be applied to any custom icon.)
```
.jw-svg-icon-buffer path {
	display: none;
}

.jw-svg-icon-buffer {
	background-image: url('//icons.jwplayer.com/icons/buffer.svg');
	background-size: contain;
	background-repeat: no-repeat;
}
```
**Example for replacing the Replay icon:**
```
.jw-svg-icon-replay path {	
	display: none;
}

.jw-svg-icon-replay {
	background-image: url('//icons.jwplayer.com/icons/replay.svg');
	background-size: contain;
	background-repeat: no-repeat;
}
```

To isolate an icon in a specific state of the player that will not affect other instances of that icon, simply add a flag as a prefix. The following example shows how to replace the large play icon on idle state without affecting the play icon in the controlbar using the explicit flag `.jw-state-idle`. See our [CSS Skinning Reference](/customization/css-skinning/skins_reference/#player-states) for a list of all player states.

```
.jw-state-idle .jw-svg-icon-play path {	
	display: none;
}
.jw-state-idle .jw-svg-icon-play {
	background-image: url('//icons.jwplayer.com/icons/play.svg');
	background-size: contain;
	background-repeat: no-repeat;
}
```
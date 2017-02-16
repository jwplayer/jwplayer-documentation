# Example CSS File

Here is the CSS used by JW Player 7 to render the seven [skin](//jwplayer.com/video-solutions/branding/). This skin is designed to fit any website with just a few quick color changes and is built into the player itself. You can use this skin as a reference for building out your own custom CSS.

## Creating Your Own CSS

1.  Duplicate the CSS from this reference.
2.  Replace all mentions of "seven" with your custom skin name.
3.  Make any changes and customizations that you require.
4.  Host your CSS file on your web server.
5.  Include your CSS in the head of your page or provide JW Player with the URL in setup.
6.  Update your player embed to include the name of your custom skin.

!!!
This CSS does not take into account the state classes that were defined in the full class reference. If you want to override the style for a specific state you will need to include styles here with those classes.
!!!

!!!
Every skin file is included the download package found in the Downloads section of your player account.
!!!

## Sample Skin

```

.jw-icon {
    font-family: 'jw-icons';
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    background-color: transparent;
    font-variant: normal;
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    -o-font-feature-settings: "liga";
    font-feature-settings: "liga";
    -moz-osx-font-smoothing: grayscale
}

/* Use this class to set a global background color for all elemnts. */
.jw-skin-seven .jw-background-color {
  background: #000;
}

/* This is the class that houses all controls. Use this to adjust the appearance of the entire controlbar. */
.jw-skin-seven .jw-controlbar {
  border-top: #333 1px solid;
  height: 2.5em;
}

/* Vertically aligns the timeslider and icons in the center of the controlbar. */
.jw-skin-seven .jw-group {
  vertical-align: middle;
}

/* Sets the style for the visual playlist. */

.jw-skin-seven .jw-playlist {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Aligns the visual playlist above its icon. */

.jw-skin-seven .jw-playlist-container {
  left: -43%;
  background-color: rgba(0, 0, 0, 0.8);
}

/* Sets the style for the visual playlist items. */
.jw-skin-seven .jw-playlist-container .jw-option {
  border-bottom: 1px solid #444;
}

/* Allows you to adjust the color of the playlist item when hovering and has a different active style.*/

.jw-skin-seven .jw-playlist-container .jw-option:hover,
.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option {
  background-color: black;
}

/* Changes the color of the label when hovering.*/

.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label {
  color: #ff0046;
}

/* Aligns the playlist header icon with the items in the playlist. */
.jw-skin-seven .jw-playlist-container .jw-icon-playlist {
  margin-left: 0;
}

/* Sets the color of the play icon of the currently playing playlist item.*/
.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play {
  color: #ff0046;
}

/* Aligns the playlist play icon with the items in the playlist. */
.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before {
    padding-left: 0
}

/* Sets the color of the playlist title */
.jw-skin-seven .jw-tooltip-title {
    background-color: #000;
    color: #fff
}

/* Style for playlist item, current time, qualities, and caption text.*/
.jw-skin-seven .jw-text {
  color: #ffffff;
}

/* Color for all buttons when they are inactive. This is over-ridden with the
inactive configuration in the skin block.*/
.jw-skin-seven .jw-button-color {
  color: #ffffff;
}

/* Color for all buttons for when they are hovered on. This is over-ridden with the
active configuration in the skin block.*/

.jw-skin-seven .jw-button-color:hover {
  color: #ff0046;
}

/* Color for when HD/CD icons are toggled on. */
.jw-skin-seven .jw-toggle {
  color: #ff0046;
}

/* Color for when HD/CD icons are toggled off. */
.jw-skin-seven .jw-toggle.jw-off {
  color: #ffffff;
}

/* Sets spacing between controlbar icons and text */
.jw-skin-seven .jw-controlbar .jw-icon:before,
.jw-skin-seven .jw-text-elapsed,
.jw-skin-seven .jw-text-duration {
    padding: 0 .7em;
}

/* Removes icon padding to align the playlist header icon with the items in the playlist. */
.jw-skin-seven .jw-controlbar .jw-icon-prev:before {
    padding-right: .25em;
}

/* Removes icon padding to align the playlist header icon with the items in the playlist. */
.jw-skin-seven .jw-controlbar .jw-icon-playlist:before {
    padding: 0 .45em;
}

.jw-skin-seven .jw-controlbar .jw-icon-next:before {
    padding-left: .25em
}

/* Sets the style for the prev and next icons. */
.jw-skin-seven .jw-icon-prev,
.jw-skin-seven .jw-icon-next {
    font-size: .7em
}

/* Adds the spacer style to between the play icon and the previous icon. */
.jw-skin-seven .jw-icon-prev:before {
  border-left: 1px solid #666;
}

/* Adds the spacer style to between the next item and current time.  */
.jw-skin-seven .jw-icon-next:before {
  border-right: 1px solid #666;
}

/* Color of the display icon */
.jw-skin-seven .jw-icon-display {
  color: #fff;
}

/* Centers the display icon in it's container */
.jw-skin-seven .jw-icon-display:before {
  padding-left: 0;
}

/* Turns the display icon container into a circle. */
.jw-skin-seven .jw-display-icon-container {
    border-radius: 50%;
    border: 1px solid #333
}

/* Styles the timeslider rail */
.jw-skin-seven .jw-rail {
  background-color: #384154;
  box-shadow: none;
}

/* Sets the color for the buffer of the timeslider rail. */
.jw-skin-seven .jw-buffer {
    background-color: #666f82
}

/* Sets the style for the elaspesd progress. */
.jw-skin-seven .jw-progress {
    background: #ff0046
}

/* Sets the width of the knob's container */
.jw-skin-seven .jw-knob {
    width: .6em;
    height: .6em;
    background-color: #fff;
    box-shadow: 0 0 0 1px #000;
    border-radius: 1em
}

/* Sets the height for the horizontal slider container. */
.jw-skin-seven .jw-slider-horizontal .jw-slider-container {
    height: .95em
}

/* Sets the height for the horizontal slider elements. */
.jw-skin-seven .jw-slider-horizontal .jw-rail,
.jw-skin-seven .jw-slider-horizontal .jw-buffer,
.jw-skin-seven .jw-slider-horizontal .jw-progress {
    height: .2em;
    border-radius: 0
}

/* Centers the knob vertically. */
.jw-skin-seven .jw-slider-horizontal .jw-knob {
    top: -0.19999999999999998em
}

/* Cetners the timeslider cuepoints vertically. */
.jw-skin-seven .jw-slider-horizontal .jw-cue {
    top: -0.04999999999999999em;
    width: .3em;
    height: .3em;
    background-color: #fff;
    border-radius: 50%
}

/* Sets the width for the vertical slider elements. */
.jw-skin-seven .jw-slider-vertical .jw-rail,
.jw-skin-seven .jw-slider-vertical .jw-buffer,
.jw-skin-seven .jw-slider-vertical .jw-progress {
    width: .2em
}

/* Sets the position of the volume slider container. */
.jw-skin-seven .jw-volume-tip {
    width: 100%;
    left: -45%;
    padding-bottom: .7em
}

/* Sets the color of the duration text in the controlbar. */
.jw-skin-seven .jw-text-duration {
    color: #666f82
}

/* Adds a left border as a spacer between all controlbar icons. */
.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before,
.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before {
    border-left: 1px solid #666
}

/* Removes the border from the first icon after the time duration text. */
.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before {
    border: 0
}

/* This styles the dock icons into a circle. */
.jw-skin-seven .jw-dock .jw-dock-button {
    border-radius: 50%;
    border: 1px solid #333
}

/* This styles tooltip for dock text background. */
.jw-skin-seven .jw-dock .jw-overlay {
    border-radius: 2.5em
}

/*This sets the font color and background color for the active item in HD and CC menus. */
.jw-skin-seven .jw-icon-tooltip .jw-active-option {
    background-color: #ff0046;
    color: #fff
}

/* Sets a min width for the volume container so that when it changes between mute and volume, the controlbar does not shift. */
.jw-skin-seven .jw-icon-volume {
    min-width: 2.6em
}

/* Sets the style for the time tooltip, menu, volume. */
.jw-skin-seven .jw-time-tip,
.jw-skin-seven .jw-menu,
.jw-skin-seven .jw-volume-tip,
.jw-skin-seven .jw-skip {
    border: 1px solid #333
}

/* Sets the position for the time tooltip. */
.jw-skin-seven .jw-time-tip {
    padding: .2em;
    bottom: 1.3em
}

/* Sets the position for the vertical volume slider. */
.jw-skin-seven .jw-menu,
.jw-skin-seven .jw-volume-tip {
    bottom: .24em
}

/* Sets the shape of the skip icon. */
.jw-skin-seven .jw-skip {
    padding: .4em;
    border-radius: 1.75em
}

/* Sets the style for the skip text. */
.jw-skin-seven .jw-skip .jw-text,
.jw-skin-seven .jw-skip .jw-icon-inline {
    color: #fff;
    line-height: 1.75em
}
.jw-skin-seven .jw-skip.jw-skippable:hover .jw-text,
.jw-skin-seven .jw-skip.jw-skippable:hover .jw-icon-inline {
    color: #ff0046
}

```

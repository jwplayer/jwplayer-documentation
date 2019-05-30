# CSS Skinning Reference

This article acts as a reference for styling all interface components of JW Player 7. This skinning model uses CSS and web fonts, and all controls are overlaid on top of the player with HTML.

When styling these elements, there are a few conventions to keep in mind. All internal classes are prefixed with **jw-** in order to protect the player from external stylesheets. The original DOM element that we initialize is called the Main Div.

A [JW Player skin](//jwplayer.com/video-solutions/branding/) CSS file contains classes that are grouped into functional elements. This reference provides an elaborate overview the classes used. For additional information, check out a reference css file.

<a name="main"></a>

## Main Div

The main div will be given a class **jwplayer**. It is strongly advised to **not** add any additional inline styling on this div besides what is included in your skin css file.

## Skinning Namespace

All skin related styles should be namespaced with a class on the main div, of the form of:

`.jw-skin-SKINNAME`

If none are present on initialization, we will add **jw-skin-seven**, which uses the seven skin.

<a name="states"></a>

## Player States

The state of the player is reflected in the DOM by a class on the main div. It will always contain one of the following:

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-state-playing**| While content is playing|
|**.jw-state-paused**| While content is paused|
|**.jw-state-buffering**| While content is buffering|
|**.jw-state-idle**| Before pressing play|
|**.jw-state-complete**| After playlist completes|

## Flags

Sometimes the player needs to signify certain modes of the playback. These flags will be present on the main div and can be:

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-flag-fullscreen**| When the player is in fullscreen |
|**.jw-flag-live**| When the player is playing back live video|
|**.jw-flag-user-inactive**| Added after a few minutes of inactivity|
|**.jw-flag-controlbar-only**| Player is less than 30 pixels tall|
|**.jw-flag-media-audio**| Content being played is an audio file|
|**.jw-flag-dragging**| Mouse down with cursor over control bar|
|**.jw-flag-aspect-mode**| Enable a padding to create an aspect ratio|

<a name="colors"></a>

## Colors

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-background-color**|This is a class that will add a set of style to all interface elements without having to change it for each individual class.|

 We advise only using **.jw-background-color** for color and not other CSS properties. The player will add this class to the following elements:

*   **.jw-dock-button**
*   **.jw-icon-display-container**
*   **.jw-controlbar**
*   **.jw-menu**
*   **.jw-slider-volume**

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-button-color**|This is a class that player will add to specific elements when color is overridden from within the player configuration setup. You can also use this to easily change all button colors in your skin. The player will add this class all icons.|
|**.jw-button-color:hover**| This will adjust the color of all buttons when they are hovered on.|

<a name="posters"></a>

## Poster Images

These define how the poster image will be stretched to fill the space given. Internally this state is used to stretch the player using JS.

*   **.jw-stretch-none**
*   **.jw-stretch-uniform**
*   **.jw-stretch-fill**
*   **.jw-stretch-exactfit**

<a name="icons"></a>

## Icons

All JW Player icons are rendered using the font **jw-six-icons.eot**. Each icon has a character code that is mapped to a corresponding interface element.

|Icon          | Character Code |
|-------------------|-----------|
|**Play**|\e60e|
|**Replay**|\e610|
|**Pause**|\e60d|
|**Rewind**|\e900|
|**Next**|\e60c|
|**Cuepoint**|\e606|
|**Buffering**|\e601|
|**Cast**|\e602|
|**HD Off**|\e60a|
|**HD On**|\e609|
|**CC Off**|\e605|
|**CC On**|\e604|
|**Fullscreen**|\e608|
|**Menu Bullet**|\e606|
|**Audio Tracks**|\e600|
|**Volume On**|\e612|
|**Volume Off**|\e611|
|**More**|\e614|
|**Close**|\e615|

The easiest way to modify the default icons is to create a new font based on these character mappings. See [Custom Icons and Fonts](skins_fonts/) for more information.

<a name="controls"></a>

## Controls
All player controls are within the **.jw-controls** class. When JW Player is set to **controls: false**, this entire class has a visibility of hidden. To not include a specific item in your skin, you will need to override the style with a visibility or display of none.

|Group          | Definition |
|-------------------|-----------|
|**[Display](#display)**| The set of icons in the center of the player|
|**[Controlbar](#controlbar)**| The playback controls for the player|
|**[Menus](#menus)**| Extensions of the controlbar that display additional information|
|**[Dock](#dock)**| Buttons displayed at the top right of the player for plugin use|
|**Logo**| A logo displayed for branding purposes|
|**Preview**| The video's poster image|

## Display

The display component contains the main element container for the (re)play, buffer and error icons in the middle of the screen. To add styles to these containers based on states you will need to add the state classes in your stylesheet.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-display-icon-container**|Used to style the container in which the display icons are.|
|**.jw-icon-display**|Used to style icons that appear in the display container. The icon that is rendered depends on the state the player is in.|

## Controlbar

The controlbar component contains all elements for the video controls at the bottom of the player. It is built using three functional groups within the **.jw-controlbar** parent class. This diagram presents an overview:

![](//support-static.jwplayer.com/images/controlbar-update.png)

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-group**|Used to vertically align the timeslider and all icons in the center of the controlbar.|

## Left Group

The left group contains playback controls, the visual playlist, and elapsed time:

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-controlbar-left-group**|The main container that holds the play/pause elements as well as the previous/next and elapsed duration|
|**.jw-icon-playback**|The container that holds the play/pause icons. The icon is switched depending on the state the player is in|
|**.jw-icon-rewind**|The container that holds the "rewind" icon|
|**.jw-text-elapsed**|The container for the elapsed video time|

## Center Group

The center group contains the elements that make up the timeslider.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-controlbar-center-group**|The main container that holds the time slider|
|**.jw-slider-horizontal .jw-slider-container**|The containers that hold the timeslider elements|
|**.jw-rail**|Sets the style for the base layer of the slider|
|**.jw-buffer**| Sets the style for the how much of video has been buffered, which is layered on top of **.jw-rail**|
|**.jw-progress**|Sets the style for the elapsed video, which is layered on top of **.jw-buffer**|
|**.jw-knob**|This marks the tip of the progress rail, used to indicate where playback is currently|
|**.jw-slider-horizontal .jw-cue**|This class is used for timeslider cuepoints, like chapters and ad breaks|

## Right Group

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-controlbar-right-group**|The container that holds duration text and icons for various playback options|
|**.jw-text-duration**|Wrapper for the total duration of the file being played. This allows you style both current time and duration differently.|
|**.jw-icon-next**|The control to toggle to the next playlist item.|
|**.jw-icon-hd**|This is the class assigned to the div contains the HD icon. The player will automatically add a menu to the hover state of this div if there are more than 2 qualities provided per playlist item. Otherwise this div will have a state class .jw-toggle to indicate it was toggled on.|
|**.jw-icon-cc**|This is class assigned to the div contains the closed-caption CC icon. The player will automatically add a menu to the hover state of this div if there are more than 2 caption tracks per playlist item. Otherwise this div will have a state class .jw-toggle to indicate it was toggled on.|
|**.jw-icon-audio-tracks**|This is class assigned to the div contains the multiple audiotracks icon. The player will automatically add a menu to the hover state of this div if there are more than 2 qualities provided per playlist item.|
|**.jw-icon-cast**|This class is used to display the Chromecast icon.|
|**.jw-icon-volume**|This is class assigned to the div contains the volume icon. The player will automatically add a menu to the hover state of this div that contains the slider volume.|
|**.jw-icon-volume .jw-off**|When the player is muted the .jw-off class gets added to toggle the volume off icon.|
|**.jw-icon-fullscreen**|This is class assigned to the div contains the fullscreen icons. The player will add .jw-off class to toggle between fullscreen and exit fullscreen icons.|

## Dock

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-controls-right**|This is the parent container that positions the dock elements. In JW 7 the dock elements are on the upper right corner of the player.|
|**.jw-dock**|This is the container that houses all of the dock buttons.|
|**.jw-dock-button**|This is the class assigned to the div to style the interface button for dock elements.|
|**.jw-overlay**|This is the overlay tooltip that appears on hover of the dock buttons.|

<a name="breakpoints"></a>

## Break Points (7.7+)
Breakpoint classes are added to the player element based on the width of the player, not the device or browser. Because JW Player instances are embedded via an iframe, the usual @media query will not work for defining CSS declarations to make elements responsive. Breakpoints are global classes that can be used to make responsive CSS declarations for any customizable player element.

|Break Point        | Width Intervals (px) |
|-------------------|-----------|
|**.jw-breakpoint-0**|Player width: 0-319|
|**.jw-breakpoint-1**|Player width: 320-419|
|**.jw-breakpoint-2**|Player width: 420-539|
|**.jw-breakpoint-3**|Player width: 540-639|
|**.jw-breakpoint-4**|Player width: 640-799|
|**.jw-breakpoint-5**|Player width: 800-959|
|**.jw-breakpoint-6**|Player width: 960-1279|
|**.jw-breakpoint-7**|Player width: 1280+|

### Examples
Make font size smaller only when player width is under 420px wide:
```
.jw-breakpoint-0 .jw-related-item-description {
font-size: 11px;
}
```
For medium-sized player widths, make the font size bigger:
```
.jw-breakpoint-3 .jw-related-item-description,
.jw-breakpoint-4 .jw-related-item-description {
  font-size: 16px;
}
```

<a name="menus"></a>

## Menus and Overlays

JW Player will automatically populate overlay divs on mouseover/touch of certain interface elements. These overlays include the timeslider tooltip, closed-captions, video qualities, multiple audio-tracks, and the volume slider.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-overlay**|All overlays are wrapped in this class. It is not advised to modify this class but rather the containers within this class. This class when appended to the parent controlbar class will position the overlays.|


## Icon Tooltips

Icon tooltips are menus that appear when hovering over an one of the icon interface elements.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-icon-tooltip**|This class is added to icons that open menus.|
|**.jw-menu**|This class is added to an unordered list for HD, CC, and audio-tracks menus.|
|**.jw-text .jw-option .item-x .jw-active-option**|This sets the font color and background color for the active item in HD, CC and audio-track menus.|

## Title and Preview Image

The title and description configuration options are displayed in their own classes overlaid on the player.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-title**|This is the wrapper class the text overlays.|
|**.jw-title-primary**|This class is populated with content from the title configuration option from the player setup.|
|**.jw-title-secondary**|This class is populated with content from the description configuration option in the player setup per-playlist item.|
|**.jw-preview**|This class styles the preview image from the image configuration option in the player setup per-playlist item.|

## Discovery Overlay <sup>7.6</sup>

The discovery overlay replaces the "Related" plugin in JW 7.6, and shows information about other playlist items and recommended content. The overlay uses [breakpoints](#breakpoints) to select the proper format and amount of items to display.

### Customization

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-plugin-related**|Customize the background color of the related overlay|
|**.jw-related-item-content**|Customize the background and border color of related items|
|**.jw-related-item-content:hover**|Customize the background and border color of related items when hovering|
|**.jw-related-item-duration**|Customize the next-up related item duration text|
|**.jw-related-item-play**|Customize the next-up related item play button|
|**.jw-related-item-title strong**|Customize the next-up related item "Next Up" text|
|**.jw-related-item-title span**|Customize related item title text|
|**.jw-related-item-title .jw-item-index-text em**|Customize related item title (for playlists) text|
|**.jw-related-item-description**|Customize related item description text (Auto-advance only)|
|**.jw-related-autoplay-frame**|Customize related item autoplay progress (Auto-advance only)|
|**.jw-related-autoplay-frame-progress**|Customize related item autoplay progress (Auto-advance only)|
|**.jw-related-item-content:hover .jw-related-autoplay-frame-progress**|Customize elements in hover state (falls under .jw-related-item-content:hover)|

### Selectors

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-plugin-related**|Parent container for related overlay plugin that covers the player viewport when visible.|
|**.jw-related-close**|Related overlay close icon button|
|**.jw-related-item-content**|Item content area|
|**.jw-related-item-poster**|Poster image container (poster image is set via inline style background image on this element)|
|**.jw-related-item-duration**|Item duration text|
|**.jw-related-item-play**|Next-up item play button container|
|**.jw-related-item-play .jw-display-icon**|Next-up item play button icon|
|**.jw-related-item-title-content**|Title text|
|**.jw-related-item-description-content**|Description text|
|**.jw-related-autoplay-frame**|Item autoplay border|
|**.jw-related-autoplay-frame-progress**|Item autoplay progress border|

## Next Up Card <sup>7.7</sup>

The next up card displays prior to a video's completion, showing information about the following media item.

### Customization

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-nextup-header**| Customize the top bar with "Next Up" label|
|**.jw-nextup-body**|Customize the thumbnail/title group container|
|**.jw-nextup-thumbnail**|Customize the next up item thumbnail|
|**.jw-nextup-title**|Customize the next up item title|
|**.jw-nextup-close**|Customize the close button|
|**.jw-nextup-close:hover**|Customize the close button hover state|

### Selectors

|CSS Class          | Definition | Type |
|-------------------|-----------|--|
|**.jw-nextup-container**|Parent container for next up (hidden by default) that positions the next up display in the player.|default|
|**.jw-nextup-container-visible**|Add-on class for next up parent container that transitions the next up display to visible state.|state|
|**.jw-nextup**|Second container element for next up with `position: relative` CSS property set to enable absolute positioning of the close button.|default|
|**.jw-nextup-header**|Top bar element for next up that contains the "Next Up" label text.|default|
|**.jw-nextup-body**|Grouping container element for the next up thumbnail and title.|default|
|**.jw-nextup-thumbnail**|Thumbnail element for next up display (hidden by default). Element uses inline style `background-image: url(thumbnail.jpg);` in addition to `background-size: cover` to accommodate displaying any thumbnail size in an elegant way.|default|
|**.jw-nextup-thumbnail-visible**|Modifier class that makes the next up thumbnail element visible (set when next up item has a thumbnail).|state|
|**.jw-nextup-title**|Title text element for next up display.|default|
|**.jw-nextup-close**|Close button for next up (hidden by default) which hides the display when clicked.|default|
|**.jw-nextup-sticky .jw-nextup-close**|State to show close button for next up display (shown when nearing end of current video).|state|

## Visual Playlist Overlay (Deprecated in JW Player 7.7)

Prior to 7.7, the visual playlist is added by the player for all setups that have more than one playlist item.

!!!
The visual playlist has been removed in JW Player 7.7 and has been replaced with the Discovery overlay.
!!!

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-playlist**| Sets the background color for the entire wrapper of the the visual playlist.|
|**.jw-playlist-container**|This is used to position the entire container over the playlist icon.|
|**.jw-playlist-container .jw-option**|Sets the style for the visual playlist items.|
|**.jw-playlist-container .jw-option .jw-active-option**|Allows you to adjust the color of the playlist item when hovering and has a different active style.|
|**.jw-playlist-container .jw-option:hover .jw-label**|Changes the color of the label when hovering.|
|**.jw-icon-playlist**|Aligns the playlist header icon with the items in the playlist.|
|**.jw-label .jw-icon-play**|Sets the color of the play icon of the currently playing playlist item.|
|**.jw-label .jw-icon-play:before**|Aligns the playlist play icon with the items in the playlist.|
|**.jw-tooltip-title**|Sets the style for the the playlist title div.|

This article acts as a reference for styling all interface components of JW Player 7\. A major change between between JW Player 6 and 7 is that the skinning model uses CSS and web fonts. Regardless of rendering mode, all controls are overlaid on top of the player with HTML. When styling these elements, there are a few conventions to keep in mind. All internal classes are prefixed with **jw-** in order to protect the player from external stylesheets. The original DOM element that we initialize is called the Main Div here on out.

A [JW Player skin](http://www.jwplayer.com/products/jwplayer/skins/) CSS file contains classes that are grouped into functional elements. This reference provides an elaborate overview the classes used. For additional information, check out a reference css file.

<a name="main"></a>

Main Div
========

The main div will be given a class **jwplayer**. It is strongly advised to **not** add any additional inline styling on this div besides what is included in your skin css file.

Skinning Namespace
------------------

All skin related styles should be namespaced with a class on the main div, of the form of:

**.jw-skin-SKINNAME**

If none are present on initialization, we will add **jw-skin-seven**, which uses the seven skin.

<a name="states"></a>

# Player States

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
|**.jw-flag-compact-player**| When the player is rendering in small UI mode|

<a name="colors"></a>

# Colors

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

# Poster Images

These define how the poster image will be stretched to fill the space given. Internally this state is used to stretch the player using JS.

*   **.jw-stretch-none**
*   **.jw-stretch-uniform**
*   **.jw-stretch-fill**
*   **.jw-stretch-exactfit**

<a name="icons"></a>

# Icons

All JW Player icons are rendered using the font **jw-six-icons.eot**. Each icon has a character code that is mapped to a corresponding interface element.

|Icon          | Character Code |
|-------------------|-----------|
|**Play**|\e60e|
|**Replay**|\e610|
|**Pause**|\e60d|
|**Previous**|\e60f|
|**Next**|\e60c|
|**Cuepoint**|\e606|
|**Buffering**|\e601|
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

The easiest way to modify the default icons is to create a new font based on these character mappings. See Creating Web Font for more information.

<a name="controls"></a>

# Controls

All player controls are within the **.jw-controls** class. When JW Player is set to **controls: false**, this entire class has a visibility of hidden. To not include a specific item in your skin, you will need to override the style with a visibility or display of none. The controls section is split into Display, Controlbar, and Dock.

|Group          | Definition |
|-------------------|-----------|
|**Display**| The set of icons in the center of the player|
|**Controlbar**| Home to the controls for the player|
|**Menus**| These are part of the controlbar but deserve their own section|
|**Dock**| buttons overlaid on the player for plugins|
|**Logo**| a brands logo|
|**Preview**| the poster image|

## Display

The display component contains the main element container for the (re)play, buffer and error icons in the middle of the screen. To add styles to these containers based on states you will need to add the state classes in your stylesheet.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-display-icon-container**|Used to style the container in which the display icons are.|
|**.jw-icon-display**|Used to style icons that appear in the display container. The icon that is rendered depends on the state the player is in.|

# Controlbar

The controlbar component contains all elements for the video controls at the bottom of the player. It is built using three functional groups within the **.jw-controlbar** parent class. This diagram presents an overview:

![](//support-static.jwplayer.com/images/controlbar.png)

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-group**|Used to vertically align the timeslider and all icons in the center of the controlbar.|

## Left Group

The left group contains playback controls, the visual playlist, and elapsed time:

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-controlbar-left-group**|The main container that holds the play/pause elements as well as the previous/next and elapsed duration.|
|**.jw-icon-playback**|The container that holds the play/pause icons. The icon is switched depending on the state the player is in.|
|**.jw-icon-prev**|The control to toggle to the previous playlist item.|
|**.jw-icon-next**|The control to toggle to the next playlist item.|
|**.jw-text-elapsed**|The container for the elapsed video duration.|
|**.jw-icon-playlist**|The container for the visual playlist icon. The player will add the visual playlist overlay automatically when this element is hovered over.|

## Center Group

The center group contains the elements that make up the timeslider.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-slider-horizontal .jw-slider-container**|The containers that hold the timeslider elements.|
|**.jw-rail**|Sets the style for the base layer of the slider.|
|**.jw-buffer**| Sets the style for the how much of video has been buffered, which is layered on top of **.jw-rail**.|
|**.jw-progress**|Sets the style for the elapsed video, which is layered on top of **.jw-buffer**.|
|**.jw-knob**|This marks the tip of the progress rail, used to indicate where playback is currently.|
|**.jw-slider-horizontal .jw-cue**|This class is used for timeslider cuepoints, like chapters and ad breaks.|

## Right Group

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-text-duration**|Wrapper for the total duration of the file being played. This allows you style both current time and duration differently.|
|**.jw-icon-hd**|This is the class assigned to the div contains the HD icon. The player will automatically add a menu to the hover state of this div if there are more than 2 qualities provided per playlist item. Otherwise this div will have a state class .jw-toggle to indicate it was toggled on.|
|**.jw-icon-cc**|This is class assigned to the div contains the closed-caption CC icon. The player will automatically add a menu to the hover state of this div if there are more than 2 caption tracks per playlist item. Otherwise this div will have a state class .jw-toggle to indicate it was toggled on.|
|**.jw-icon-audio-tracks**|This is class assigned to the div contains the multiple audiotracks icon. The player will automatically add a menu to the hover state of this div if there are more than 2 qualities provided per playlist item.|
|**.jw-icon-volume**|This is class assigned to the div contains the volume icon. The player will automatically add a menu to the hover state of this div that contains the slider volume.|
|**.jw-icon-volume .jw-off**|When the player is muted the .jw-off class gets added to toggle the volume off icon.|
|**.jw-icon-fullscreen**|This is class assigned to the div contains the fullscreen icons. The player will add .jw-off class to toggle between fullscreen and exit fullscreen icons.|
|**.jw-icon-cast**|This class is used to display the Chromecast icon.|


## Dock

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-controls-right**|This is the parent container that positions the dock elements. In JW 7 the dock elements are on the upper right corner of the player.|
|**.jw-dock**|This is the container that houses all of the dock buttons.|
|**.jw-dock-button**|This is the class assigned to the div to style the interface button for dock elements.|
|**.jw-overlay**|This is the overlay tooltip that appears on hover of the dock buttons.|

<a name="menus"></a>

# Menus and Overlays

JW Player will automatically populate overlay divs on mouseover/touch of certain interface elements. These overlays are for the timeslider tooltip, closed-captions, video qualities, multiple audio-tracks, and the volume slider. There is also a new special menu for the visual playlist.

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

## Next Up Overlay <sup>7.6</sup>

The discovery overlay displays playlist items, as well as items related to the current playing media.

###Customization

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-nextup-header**| Customize the top bar with "Next Up" label|
|**.jw-nextup-body**|Customize the thumbnail/title group container|
|**.jw-nextup-thumbnail**|Customize the next up item thumbnail|
|**.jw-nextup-title**|Customize the next up item title|
|**.jw-nextup-close**|Customize the close button|
|**.jw-nextup-close:hover**|Customize the close button hover state|

###Selectors

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

The visual playlist is added by the player for all setups that have more than one playlist item. These are the elements used to build a visual playlist.

#### Note: The visual playlist has been removed in JW Player 7.7 and has been replaced with the Next Up overlay

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



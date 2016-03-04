This article acts as a reference for styling all interface components of JW Player 7\. A major change between between JW Player 6 and 7 is that the skinning model uses CSS and web fonts. Regardless of rendering mode, all controls are overlaid on top of the player with HTML. When styling these elements, there are a few conventions to keep in mind. All internal classes are prefixed with **jw-** in order to protect the player from external stylesheets. The original DOM element that we initialize is called the Main Div here on out.

A [JW Player skin](http://www.jwplayer.com/products/jwplayer/skins/) CSS file contains classes that are grouped into functional elements. This reference provides an elaborate overview the classes used. For additional information, check out a reference css file.

<a name="main"></a>

Main Div
========

The main div will be given a class **jwplayer**. It is strongly advised to **not** add any additional inline styling on this div besides what is included in your skin css file.

Skinning Namespace
------------------

All skin related styles should be namespaced with a class on the main div, of the form **jw-skin-SKINNAME**. If none are present on initialization we will add **jw-skin-seven**, which uses the seven skin.

<a name="states"></a>

# Player States

The state of the player is reflected in the DOM by a class on the main div. It will always contain one of the following:

*   **jw-state-playing**
*   **jw-state-paused**
*   **jw-state-buffering**
*   **jw-state-idle -** before pressing play
*   **jw-state-complete -** after playlist completes

## Flags

Sometimes the player needs to signify certain modes of the playback. These flags will be present on the main div and can be:

*   **jw-flag-fullscreen -** when the player is in fullscreen
*   **jw-flag-live -** when the player is playing back live video
*   **jw-flag-user-inactive -** added after a few minutes of inactivity
*   **jw-flag-controlbar-only -** player is less than 30 pixels tall
*   **jw-flag-media-audio -** content being played is an audio file
*   **jw-flag-dragging -** mouse down with cursor over control bar
*   **jw-flag-aspect-mode -** enable a padding to create an aspect ratio
*   **jw-flag-compact-player -** when the player is rendering in small UI mode

<a name="colors"></a>

# Colors

**.jw-background-color -** This is a class that will add a set of style to all interface elements without having to change it for each individual class. We advise only using jw-background-color for color and not other CSS properties. The player will add this class to the following elements:

*   **jw-dock-button**
*   **jw-icon-display-container**
*   **jw-controlbar**
*   **jw-menu**
*   **jw-slider-volume**

**.jw-button-color -** This is a class that player will add to specific elements when color is overridden from within the player configuration setup. You can also use this to easily change all button colors in your skin. The player will add this class all icons.

**.jw-button-color:hover -** This will adjust the color of all buttons when they are hovered on.

<a name="posters"></a>

# Poster Images

These define how the poster image will be stretched to fill the space given. Internally this state is used to stretch the player using JS.

*   **jw-stretch-none**
*   **jw-stretch-uniform**
*   **jw-stretch-fill**
*   **jw-stretch-exactfit**

<a name="icons"></a>

# Icons

All JW Player icons are rendered using the font **jw-six-icons.eot**. Each icon has a character code that is mapped to a corresponding interface element.

<table style="width:50%">

<tbody>

<tr>

<th>Icon</th>

<th>Character Code</th>

</tr>

<tr>

<td>Play</td>

<td>\e60e</td>

</tr>

<tr>

<td>Replay</td>

<td>\e610</td>

</tr>

<tr>

<td>Pause</td>

<td>\e60d</td>

</tr>

<tr>

<td>Previous</td>

<td>\e60f</td>

</tr>

<tr>

<td>Next</td>

<td>\e60c</td>

</tr>

<tr>

<td>Cuepoint</td>

<td>\e606</td>

</tr>

<tr>

<td>Buffering</td>

<td>\e601</td>

</tr>

<tr>

<td>HD Off</td>

<td>\e60a</td>

</tr>

<tr>

<td>HD On</td>

<td>\e609</td>

</tr>

<tr>

<td>CC Off</td>

<td>\e605</td>

</tr>

<tr>

<td>CC On</td>

<td>\e604</td>

</tr>

<tr>

<td>Fullscreen</td>

<td>\e608</td>

</tr>

<tr>

<td>Menu Bullet</td>

<td>\e606</td>

</tr>

<tr>

<td>Audio Tracks</td>

<td>\e600</td>

</tr>

<tr>

<td>Volume On</td>

<td>\e612</td>

</tr>

<tr>

<td>Volume Off</td>

<td>\e611</td>

</tr>

<tr>

<td>More</td>

<td>\e614</td>

</tr>

<tr>

<td>Close</td>

<td>\e615</td>

</tr>

</tbody>

</table>

The easiest way to modify the default icons is to create a new font based on these character mappings. See Creating Web Font for more information.

<a name="controls"></a>

# Controls

All player controls are within the **.jw-controls** class. When JW Player is set to **controls: false**, this entire class has a visibility of hidden. To not include a specific item in your skin, you will need to override the style with a visibility or display of none. The controls section is split into Display, Controlbar, and Dock.

*   **Display -** The set of icons in the center of the player
*   **Controlbar -** Home to the controls for the player
*   **Menus -** These are part of the controlbar but deserve their own section
*   **Dock -** buttons overlaid on the player for plugins
*   **Logo -** a brands logo
*   **Preview -** the poster image

## Display

The display component contains the main element container for the (re)play, buffer and error icons in the middle of the screen. To add styles to these containers based on states you will need to add the state classes in your stylesheet.

<dl>

<dt>.jw-display-icon-container</dt>

<dd>Used to style the container in which the display icons are.</dd>

<dt>.jw-icon-display</dt>

<dd>Used to style icons that appear in the display container. The icon that is rendered depends on the state the player is in.</dd>

</dl>

# Controlbar

The controlbar component contains all elements for the video controls at the bottom of the player. It is built using three functional groups within the .jw-controlbar parent class. This diagram presents an overview:

![](//support-static.jwplayer.com/images/controlbar.png)

<dl>

<dt>.jw-group</dt>

<dd>Used to vertically align the timeslider and all icons in the center of the controlbar.</dd>

</dl>

## Left Group

The left group contains playback controls, the visual playlist, and elapsed time:

<dl>

<dt>.jw-controlbar-left-group</dt>

<dd>The main container that holds the play/pause elements as well as the previous/next and elapsed duration.</dd>

<dt>.jw-icon-playback</dt>

<dd>The container that holds the play/pause icons. The icon is switched depending on the state the player is in.</dd>

<dt>.jw-icon-prev</dt>

<dd>The control to toggle to the previous playlist item.</dd>

<dt>.jw-icon-next</dt>

<dd>The control to toggle to the next playlist item.</dd>

<dt>.jw-text-elapsed</dt>

<dd>The container for the elapsed video duration.</dd>

<dt>.jw-icon-playlist</dt>

<dd>The container for the visual playlist icon. The player will add the visual playlist overlay automatically when this element is hovered over.</dd>

</dl>

## Center Group

The center group contains the elements that make up the timeslider.

<dl>

<dt>.jw-slider-horizontal .jw-slider-container</dt>

<dd>The containers that hold the timeslider elements.</dd>

<dt>.jw-rail</dt>

<dd>Sets the style for the base layer of the slider.</dd>

<dt>.jw-buffer</dt>

<dd>Sets the style for the how much of video has been buffered, which is layered on top of **.jw-rail**.</dd>

<dt>.jw-progress</dt>

<dd>Sets the style for the elapsed video, which is layered on top of **.jw-buffer**.</dd>

<dt>.jw-knob</dt>

<dd>This marks the tip of the progress rail, used to indicate where playback is currently.</dd>

<dt>.jw-slider-horizontal .jw-cue</dt>

<dd>This class is used for timeslider cuepoints, like chapters and ad breaks.</dd>

</dl>

## Right Group

<dl>

<dt>.jw-text-duration</dt>

<dd>Wrapper for the total duration of the file being played. This allows you style both current time and duration differently.</dd>

<dt>.jw-icon-hd</dt>

<dd>This is the class assigned to the div contains the HD icon. The player will automatically add a menu to the hover state of this div if there are more than 2 qualities provided per playlist item. Otherwise this div will have a state class .jw-toggle to indicate it was toggled on.</dd>

<dt>.jw-icon-cc</dt>

<dd>This is class assigned to the div contains the closed-caption CC icon. The player will automatically add a menu to the hover state of this div if there are more than 2 caption tracks per playlist item. Otherwise this div will have a state class .jw-toggle to indicate it was toggled on.</dd>

<dt>.jw-icon-audio-tracks</dt>

<dd>This is class assigned to the div contains the multiple audiotracks icon. The player will automatically add a menu to the hover state of this div if there are more than 2 qualities provided per playlist item.</dd>

<dt>.jw-icon-volume</dt>

<dd>This is class assigned to the div contains the volume icon. The player will automatically add a menu to the hover state of this div that contains the slider volume.</dd>

<dt>.jw-icon-volume .jw-off</dt>

<dd>When the player is muted the .jw-off class gets added to toggle the volume off icon.</dd>

<dt>.jw-icon-fullscreen</dt>

<dd>This is class assigned to the div contains the fullscreen icons. The player will add .jw-off class to toggle between fullscreen and exit fullscreen icons.</dd>

<dt>.jw-icon-cast</dt>

<dd>This class is used to display the Chromecast icon.</dd>

</dl>

## Dock

<dl>

<dt>.jw-controls-right</dt>

<dd>This is the parent container that positions the dock elements. In JW 7 the dock elements are on the upper right corner of the player.</dd>

<dt>.jw-dock</dt>

<dd>This is the container that houses all of the dock buttons.</dd>

<dt>.jw-dock-button</dt>

<dd>This is the class assigned to the div to style the interface button for dock elements.</dd>

<dt>.jw-overlay</dt>

<dd>This is the overlay tooltip that appears on hover of the dock buttons.</dd>

</dl>

<a name="menus"></a>

# Menus and Overlays

JW Player will automatically populate overlay divs on mouseover/touch of certain interface elements. These overlays are for the timeslider tooltip, closed-captions, video qualities, multiple audio-tracks, and the volume slider. There is also a new special menu for the visual playlist.

<dl>

<dt>.jw-overlay</dt>

<dd>All overlays are wrapped in this class. It is not advised to modify this class but rather the containers within this class. This class when appended to the parent controlbar class will position the overlays.</dd>

</dl>

## Icon Tooltips

Icon tooltips are menus that appear when hovering over an one of the icon interface elements.

<dl>

<dt>.jw-icon-tooltip</dt>

<dd>This class is added to icons that open menus.</dd>

<dt>.jw-menu</dt>

<dd>This class is added to an unordered list for HD, CC, and audio-tracks menus.</dd>

<dt>.jw-text .jw-option .item-x .jw-active-option</dt>

<dd>This sets the font color and background color for the active item in HD, CC and audio-track menus.</dd>

</dl>

## Title and Preview Image

The title and description configuration options are displayed in their own classes overlaid on the player.

<dl>

<dt>.jw-title</dt>

<dd>This is the wrapper class the text overlays.</dd>

<dt>.jw-title-primary</dt>

<dd>This class is populated with content from the title configuration option from the player setup.</dd>

<dt>.jw-title-secondary</dt>

<dd>This class is populated with content from the description configuration option in the player setup per-playlist item.</dd>

<dt>.jw-preview</dt>

<dd>This class styles the preview image from the image configuration option in the player setup per-playlist item.</dd>

</dl>

## Visual Playlist Overlay

The visual playlist is added by the player for all setups that have more than one playlist item. These are the elements used to build a visual playlist.

<dl>

<dt>.jw-playlist</dt>

<dd>Sets the background color for the entire wrapper of the the visual playlist.</dd>

<dt>.jw-playlist-container</dt>

<dd>This is used to position the entire container over the playlist icon.</dd>

<dt>.jw-playlist-container .jw-option</dt>

<dd>Sets the style for the visual playlist items.</dd>

<dt>.jw-playlist-container .jw-option .jw-active-option</dt>

<dd>Allows you to adjust the color of the playlist item when hovering and has a different active style.</dd>

<dt>.jw-playlist-container .jw-option:hover .jw-label</dt>

<dd>Changes the color of the label when hovering.</dd>

<dt>.jw-icon-playlist</dt>

<dd>Aligns the playlist header icon with the items in the playlist.</dd>

<dt>.jw-label .jw-icon-play</dt>

<dd>Sets the color of the play icon of the currently playing playlist item.</dd>

<dt>.jw-label .jw-icon-play:before</dt>

<dd>Aligns the playlist play icon with the items in the playlist.</dd>

<dt>.jw-tooltip-title</dt>

<dd>Sets the style for the the playlist title div.</dd>

</dl>
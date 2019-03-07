!!!
This page has been updated for JW Player 8. Click here to go to the [JW7 CSS Skinning Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/skins_reference/).
!!!

# CSS Skinning Reference
<sup>Last Updated: March 6, 2019</sup>

This article acts as a reference for styling all interface components of JW Player 8. This skinning model uses CSS, and all controls are overlaid on top of the player with HTML. JW8 uses inline SVGs for all icons.

When styling these elements, there are a few conventions to keep in mind. All internal classes are prefixed with **jw-** in order to protect the player from external stylesheets. The original DOM element that we initialize is called the Main Div.

A [JW Player skin](//jwplayer.com/video-solutions/branding/) CSS file contains classes that are grouped into functional elements. This reference provides an elaborate overview the classes used. For additional information, check out a reference css file.

<a name="main"></a>

## Main Div

The main div will be given a class **jwplayer**. It is strongly advised to **not** add any additional inline styling on this div besides what is included in your skin css file.

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
|<a name="floating-flag"></a>**.jw-flag-floating .jw-wrapper** <sup>8.8.0+</sup>| Wrapper for the floating player|

<a name="colors"></a>

## Colors

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-background-color**|This is a class that will add a set of style to all interface elements without having to change it for each individual class.|

 We advise only using **.jw-background-color** for color and not other CSS properties. The player will add this class to the following elements:

*   **.jw-display-icon-container**
*   **.jw-controlbar**

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

<a name="controls"></a>

## Controls
All player controls are within the **.jw-controls** class. When JW Player is set to **controls: false**, this entire class has a visibility of hidden. To not include a specific item in your skin, you will need to override the style with a visibility or display of none.

|Group          | Definition |
|-------------------|-----------|
|**[Display](#display)**| The set of icons in the center of the player|
|**[Controlbar](#controlbar)**| The playback controls for the player|
|**[Menus](#menus)**| Extensions of the controlbar that display additional information|
|**Logo**| A logo displayed for branding purposes|
|**Preview**| The video's poster image|

## Display

The display component contains the main element container for the (re)play, buffer and error icons in the middle of the screen, as well as the rewind and next buttons that appear on pause for small breakpoints. To add styles to these containers based on states you will need to add the state classes in your stylesheet.

The display component has a container and an additional inner wrapper. Both are required to contain the display icon containers below. 

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-display-icon-container**|Parent div used to style the container in which the display icons are.|
|**.jw-display-controls**|Child div of `.jw-display-icon-cotainer`. Used to style icons that appear in the display container. The icons thatrender depend on the state the player is in. |

At smaller breakpoints, up to three icons can be displayed in the middle of the screen at one time. The three slots for icons have a container, an inner div, and an SVG. Each element requires specific classes, as well as a class referencing the name of the icon:

|.jw-display-icon-container | .jw-icon <br> .jw-button-color| .jw-svg-icon|
|----------------------------------|---------------------------------|--------------------|
|**.jw-display-icon-rewind**|.jw-icon-rewind|.jw-svg-icon-rewind|
|**.jw-display-icon-display**|.jw-icon-display|.jw-svg-icon-buffer <br/> .jw-svg-icon-replay <br/> .jw-svg-icon-play <br/> .jw-svg-icon-pause|
|**.jw-display-icon-next**|.jw-icon-next|.jw-svg-icon-next|


## Controlbar

The controlbar component contains all elements for the video controls at the bottom of the player. All elements are contained within the **.jw-controlbar** parent class and broken out into two groups, **.jw-slider-time** and **.jw-button-container**.


|CSS Class          | Definition |
|----------------------------|-----------|
|**.jw-slider-time**|Used to position the player timeslider above playback controls|
|**.jw-button-container**|Used to group and position specific playback controls|

## Slider Time

The center group contains the elements that make up the player's timeslider.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-slider-horizontal .jw-slider-container**|The containers that hold the timeslider elements|
|**.jw-rail**|Sets the style for the base layer of the slider|
|**.jw-buffer**| Sets the style for the how much of video has been buffered, which is layered on top of **.jw-rail**|
|**.jw-progress**|Sets the style for the elapsed video, which is layered on top of **.jw-buffer**|
|**.jw-knob**|This marks the tip of the progress rail, used to indicate where playback is currently|
|**.jw-slider-horizontal .jw-cue**|This class is used for timeslider cuepoints, like chapters and ad breaks|


## Button Container

The button container contains playback controls, elapsed and duration time, and the settings menu. The additional classes `.jw-icon` `.jw-icon-inline` `.jw-button-color` are all required within the button container. Within the SVG element, `.jw-svg-icon` is required. 

|CSS Class |SVG Classes    |Definition|
|-------------|----------|-----------|
|**.jw-icon-playback**|.jw-svg-icon-pause <br/> .jw-svg-icon-play|Container that holds the play/pause icons. This icon will toggle depending on the state of the player.|
|**.jw-icon-rewind**|.jw-svg-icon-rewind| Container that holds the "rewind" icon|
|**.jw-icon-next**|.jw-svg-icon-next|Playback control to advance to the next playlist item.|
|**.jw-icon-volume**|.jw-svg-icon-volume-50<br/> .jw-svg-icon-volume-100|Container that holds the volume icon. The player will automatically add an overlay to the hover state of this div that contains the slider volume. The icon will toggle depending on the volume level: volume-100 displays when the volume is set to 75% or greater.|
|**.jw-icon-volume .jw-off**|.jw-svg-icon-volume-0| When the player is muted the .jw-off class gets added to toggle the volume off icon.|
|<sup>8.1.8+</sup> **.jw-text-live** |n/a|As of JW8.1.8, the live/DVR icons are plain text instead of SVGs.<br>Container for live and dvr buttons. This icon will toggle depending on the state of the player.|
|<sup><=8.1.7</sup> **.jw-icon-live**|.jw-svg-icon-live<br/>.jw-svg-icon-dvr|Container for live and dvr icons. This icon will toggle depending on the state of the player.|
|**.jw-text-elapsed**|n/a| Container for the elapsed video time.|
|**.jw-text-duration**|n/a| Container for the total duration of the media file.|
|**.jw-settings-sharing**|.jw-svg-icon-sharing|Container for the sharing icon. This will only show when sharing is enabled.|
|**.jw-playlist-btn**|.jw-svg-icon-playlist|Container for playlist icon. This icon represents the player using a manual playlist for related content.|
|**.jw-related-btn**|.jw-svg-icon-related|Container for discover icon. This icon represents the player using recommendations for related content based on the mediaID.|
|**.jw-icon-cc**|.jw-svg-icon-cc-on<br/>.jw-svg-icon-cc-off|Container for the closed-caption CC icon. This icon will toggle to an on and off state depending on whether closed captions are enabled or not.|
|**.jw-icon-cast**|n/a - does not follow pattern|This container will display the Chromecast icon if available.|
|**.jw-icon-airplay**|.jw-svg-icon-airplay-on|This container will display Airplay icon if it is connected.|
|**.jw-icon-airplay .jw-off**|.jw-svg-icon-airplay-off|This container will display the Airplay icon if it is available.|
|**.jw-icon-settings**|.jw-svg-icon-settings|Container for the settings menu icon.|
|**.jw-icon-fullscreen**|.jw-svg-icon-fullscreen-on<br/><br/>.jw-svg-icon-fullscreen-off|Container for entering and exiting fullscreen icons. This icon will toggle between fullscreen on and off depending on the state of the player.|


<a name="breakpoints"></a>

## Break Points
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

## Settings Menu and Submenus

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-settings-menu**|This container creates a menu based on what playback features are enabled for the player.|
|**.jw-settings-submenu**|A submenu is created to list available options for each menu feature.|
|**.jw-settings-content-item**|This container is populated with the options related to each submenu.|

The following icons are nested within `.jw-settings-topbar`, a child of `.jw-settings-menu`. Icons appear only if the submenu is enabled or avaialble The additional classes `.jw-icon` `.jw-icon-inline` `.jw-button-color` are all required within the button container. Within the SVG element, `.jw-svg-icon` is required.   

|CSS Classes |SVG Class    |Definition|
|-------------|----------|-----------|
|**.jw-settings-quality .jw-submenu-quality**|.jw-svg-icon-quality-100|Container for the quality icon.|
|**.jw-settings-playbackRates .jw-submenu-playbackRates**|.jw-svg-icon-playback-rate| Container for the playback rate icon. |
|**.jw-settings-captions .jw-submenu-captions**|.jw-svg-icon-cc-off| Container for the captions icon. |
|**.jw-settings-audioTracks .jw-submenu-audioTracks**|.jw-svg-icon-audio-tracks| Container for the audio tracks icon. |
|**.jw-settings-sharing .jw-submenu-sharing**|.jw-svg-icon-sharing| Container for the sharing icon. |

<a name="floating"></a>

## Float on scroll <sup>8.8.0+</sup>

|CSS Classes |SVG Classes    |Definition|
|-------------|----------|-----------|
|**.jw-float-icon**|.jw-svg-icon<br/>.jw-svg-icon-close|Container for the SVG icon to dismiss the floating player.|

## Tooltips and Overlays

JW Player will automatically populate overlay divs on mouseover/touch of certain interface elements. These include the timeslider thumbnail preview, volume slider and on-hover tooltips for controlbar icons.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-overlay**|All overlays are wrapped in this class. It is not advised to modify this class but rather the containers within this class. This class when appended to the parent controlbar class will position the overlays.|
|**.jw-tooltip**|On-hover tooltips containning labels for controlbar icons.|


## Title and Preview Image

The title and description configuration options are displayed in their own classes overlaid on the player.

|CSS Class          | Definition |
|-------------------|-----------|
|**.jw-title**|This is the wrapper class the text overlays.|
|**.jw-title-primary**|This class is populated with content from the title configuration option from the player setup.|
|**.jw-title-secondary**|This class is populated with content from the description configuration option in the player setup per-playlist item.|
|**.jw-preview**|This class styles the preview image from the image configuration option in the player setup per-playlist item.|

## Discovery Overlay

The discovery overlay displays recommended content related to the current media file. The overlay uses [breakpoints](#breakpoints) to select the proper format and amount of items to display.

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
|**.jw-related-item-content**|Item content area|
|**.jw-related-item-poster**|Poster image container (poster image is set via inline style background image on this element)|
|**.jw-related-item-duration**|Item duration text|
|**.jw-related-item-play**|Next-up item play button container|
|**.jw-related-item-play .jw-display-icon**|Next-up item play button icon|
|**.jw-related-item-title-content**|Title text|
|**.jw-related-item-description-content**|Description text|
|**.jw-related-autoplay-frame**|Item autoplay border|
|**.jw-related-autoplay-frame-progress**|Item autoplay progress border|

### Buttons
The following icons are nested within `.jw-related`. The additional class `.jw-button-color` is required within the button container. Within the SVG element, `.jw-svg-icon` is required.   

|Button Class |SVG Classes    |Definition|
|-------------|----------|-----------|
|**.jw-related-close**|.jw-svg-icon-close|Related overlay close icon button|
|**.jw-related-page-left**|.jw-svg-icon-arrow-left|Related overlay page left button|
|**.jw-related-page-right**|.jw-svg-icon-arrow-right|Related overlay page right button|

## Next Up Card

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

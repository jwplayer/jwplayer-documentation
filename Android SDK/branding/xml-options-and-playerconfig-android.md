# XML Attributes

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

The `JWPlayerView` supports the following (optional) custom XML attributes:

| Attribute | Description |
| --- | --- |
| `jw_file` | URL to a single video file, audio file or live stream to play |
| `jw_image` | URL to a poster image to display before playback starts. For audio-only media, the poster image stays visible during playback. |
| `jw_mute` | Whether the player should be muted initially.
| `jw_autostart` | Automatically start playing the video can be false or true |
| `jw_repeat` | Whether to loop playback of the playlist or not. Can be true (keep playing forever) or false (stop playback when completed). Defaults to false. |
| `jw_controls` | Whether to display the video controls, can be false or true |
| `jw_display_title` | Configures if the title of a media file should be displayed. |
| `jw_display_description` | Configures if the description title of a media file should be displayed. |
| `jw_stretching` | Resize images and video to fit player dimensions. Must be: "uniform", "exactfit", "fill", or "none" |
| `jw_nextUpDisplay` | Configures whether the Next Up modal is displayed. |
| `jw_preload` | Tells the player if content should be loaded prior to playback. Useful for faster playback speed. |
| `jw_captions_color` | Sets the caption color (hex code) |
| `jw_captions_fontSize` | Sets the font size of the captions |
| `jw_captions_fontFamily` | Sets the font family of the captions |
| `jw_captions_fontOpacity` | Sets the opacity of the font of the captions |
| `jw_captions_backgroundColor` | Sets the background color of the captions |
| `jw_captions_backgroundOpacity` | Sets the background opacity of the captions |
| `jw_captions_edgeStyle` | Sets the edge style of the captions |
| `jw_captions_windowColor` | Sets the window color of the captions |
| `jw_captions_windowOpacity` | Sets the window opacity of the captions |
| `jw_logo_file` | Location of an external JPG, PNG or GIF image to be used as watermark. We recommend using 24 bit PNG images with transparency, since they blend nicely with the video. |
| `jw_logo_hide` | By default (false), the logo remains visible all the time. When this option is set to true, the logo will automatically show and hide along with the other player controls. |
| `jw_logo_link` | HTTP URL to jump to when the watermark image is clicked (e.g. http://example.com/). If it is not set, a click on the watermark does nothing in particular. |
| `jw_logo_margin` | The distance of the logo from the edges of the display. The default is 8 pixels. |
| `jw_logo_position` | This sets the corner in which to display the watermark. Can be "top-left" (default), "top-right", "bottom-left", "bottom-right", or "control-bar".  Note the default position is preferred, since the logo won't interfere with the controlbar, captions, overlay ads and dock buttons. |
| `jw_skin_name` | The skin to use for styling the player. If not configured, we'll default our player to use the seven skin. |
| `jw_skin_url` | If using an external CSS file to style your player, this can be specified here. Note that with this configuration: * You will still need to specify the name of your skin. * This may negatively impact the speed which your JW Player loads |
| `jw_skin_controlbar_text` | The color of any plain text in the control bar, such as the time. |
| `jw_skin_controlbar_icons` | The default, inactive color of all icons in the control bar. This option also controls the color of the play, pause, and replay icons in the inactive and complete states.	|
| `jw_skin_controlbar_iconsActive` | The color of hovered or selected icons in the control bar. |
| `jw_skin_controlbar_background` | The background color of the control bar and the volume slider. The default background is transparent.	|
| `jw_skin_timeslider_progress` | The color of the bar in the time slider filled in from the beginning of the video through the current position. The buffer region of the control bar is 50% of the opacity of this color. The color of the volume slider is also controlled by this option. |
| `jw_skin_timeslider_rail` | The color of the base of the timeslider, known as the rail.	|
| `jw_skin_menus_text` | The color of inactive, default text in menus and the Next Up overlay. |
| `jw_skin_menus_textActive` | The color of hovered or selected text in menus. This option also controls the text color in the Discover overlay and the hover state text color in the Next Up overlay. |
| `jw_skin_menus_background` | The background color of menus and the Next Up overlay. |
| `jw_skin_tooltips_text` | The text color of tooltips. |
| `jw_skin_tooltips_background` | The background color of tooltips. |
| `jw_related_file` | Location of an RSS or JSON file containing a feed of related videos. |
| `jw_related_displayMode` | Configure the recommendations user interface. Does not apply to manual playlists.  Must be: "overlay", or "shelf" |
| `jw_related_onComplete` | The behavior of our related videos overlay when a single video or playlist is completed.  Must be: "hide", "show", or "autoplay" |
| `jw_related_onClick` | "The behavior when a related video is selected.  Must be: "play", or "link" |
| `jw_related_autoplayMessage` | A custom message that appears during autoplay. xx will be replaced by the countdown timer.  __title__ will be replaced by the next title in the related feed. |
| `jw_related_autoplayTimer` | The number of seconds to wait before playing the next related video in your content list. Set to 0 to have your next related content to play immediately. |
| `jw_sharing_link` | URL to display in the video link field. |
| `jw_sharing_code` | Embed code to display in the embed code field. If no code is set, the field is not shown. |
| `jw_sharing_heading` | Short, instructive text to display at the top of the sharing screen. |

## PlayerConfig

Besides adding the JWPlayerView to your layout it is also possible to programmatically instantiate a JWPlayerView

Programmatically instantiating requires that you build a player config first:

```java
PlayerConfig playerConfig = new PlayerConfig.Builder()
				.logoConfig(new LogoConfig.Builder()
					.file("jw_logo.png")
					.link("http://jwplayer.com")
					.build())
				.autostart(false)
				.repeat(false)
				.build();
```

After instantiating the playerConfig it's possible to construct the JWPlayerView

```java
JWPlayerView playerView = new JWPlayerView(context, playerConfig);
```

Now you have a handle to the playerView you can attach it to a ViewGroup, i.e. a FrameLayout:

```java
ViewGroup jwPlayerViewContainer = (ViewGroup) findViewById(R.id.jwPlayerContainer);
jwPlayerViewContainer.addView(p);
```

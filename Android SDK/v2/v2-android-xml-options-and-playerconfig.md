# XML Attributes

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

The `JWPlayerView` supports the following (optional) custom XML attributes:

| Attribute | Description |
| --- | --- |
| `jw_autostart` | Automatically start playing the video can be false or true |
| `jw_allow_cross_protocol_redirects` | Whether to allow the cross protocol redirect, can be false or true.
| `jw_repeat` | Whether to loop playback of the playlist or not. Can be true (keep playing forever) or false (stop playback when completed). Defaults to false. |
| `jw_controls` | Whether to display the video controls, can be false or true |
| `jw_file` | URL to a single video file, audio file or live stream to play |
| `jw_image` | URL to a poster image to display before playback starts. For audio-only media, the poster image stays visible during playback. |
| `jw_captions_color` | Sets the caption color (hex code) |
| `jw_captions_fontSize` | Sets the font size of the captions |
| `jw_captions_fontOpacity` | Sets the opacity of the font of the captions |
| `jw_captions_backgroundColor` | Sets the background color of the captions |
| `jw_captions_edgeStyle` | Sets the edge style of the captions |
| `jw_captions_windowColor` | Sets the window color of the captions |
| `jw_captions_windowOpacity` | Sets the window opacity of the captions |
| `jw_logo_file` | Location of an external JPG, PNG or GIF image to be used as watermark. We recommend using 24 bit PNG images with transparency, since they blend nicely with the video. |
| `jw_logo_hide` | By default (false), the logo remains visible all the time. When this option is set to true, the logo will automatically show and hide along with the other player controls. |
| `jw_logo_link` | HTTP URL to jump to when the watermark image is clicked (e.g. http://example.com/). If it is not set, a click on the watermark does nothing in particular. |
| `jw_logo_margin` | The distance of the logo from the edges of the display. The default is 8 pixels. |
| `jw_logo_position` | This sets the corner in which to display the watermark. Uses an enum that can be TOP_RIGHT (the default), TOP_LEFT, BOTTOM_RIGHT or BOTTOM_LEFT. Note the default position is preferred, since the logo won't interfere with the controlbar, captions, overlay ads and dock buttons. |
| `jw_skin_name` | The skin to use for styling the player. If not configured, we'll default our player to use the seven skin. |
| `jw_skin_active` | The color of active skin elements. This should be entered in either hex or x11 color format. |
| `jw_skin_inactive` | The color of inactive skin elements. Like the above active config, this should be entered in either hex or x11 color format. |
| `jw_skin_background` | The color of a skin's background portion. Like the above active config, this should be entered in either hex or x11 color format. |
| `jw_skin_url` | If using an external CSS file to style your player, this can be specified here. Note that with this configuration: * You will still need to specify the name of your skin. * This may negatively impact the speed which your JW Player loads |

## PlayerConfig

Besides adding the JWPlayerView to your layout it is also possible to programmatically instantiate a JWPlayerView

Programmatically instantiating requires that you build a player config first:

```java
PlayerConfig playerConfig = new PlayerConfig.Builder()
				.logoFile("jw_logo.png")
				.logoLink("http://jwplayer.com")
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

## Cross Protocol Redirects
ExoPlayer doesn't follow cross protocol redirects [by default](https://google.github.io/ExoPlayer/faqs.html#why-do-some-streams-fail-with-http-response-code-301-or-302). A cross-protocol redirect is one that redirects from HTTPS to HTTP or vice-versa (or less commonly, between another pair of protocols). If playback fails with `Response Code: 302` and you can't avoid cross protocol redirects on the server side, you can enable it with the following code: 

```java
PlayerConfig playerConfig = new PlayerConfig.Builder()
				.logoFile("jw_logo.png")
				.logoLink("http://jwplayer.com")
				.allowCrossProtocolRedirects(true)
				.autostart(false)
				.repeat(false)
				.build();
```

This setting is applied to the whole player configuration and cannot be applied to single media items. 

Please be aware that by default this setting is turned off for security reasons. Please use this setting with caution, because it might impact the security of your application. By overriding our default, you agree to take responsibility for any security issues that may arise.

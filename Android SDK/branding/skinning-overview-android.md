# Skinning Overview

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

JW Player skins change the appearance of the player, adding a customizable interactive layer to your player. All visual components of the player (the controlbar, display, tooltip, dock and playlist) can be skinned in accordance to our [Skin Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/css-skinning/skins_reference/) page.  Additional details can be found in our [Creating a Skin](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/css-skinning/skins_creating/) guide.

In order to use a custom skin you must set the skin name and URL during configuration of the player.

```
SkinConfig skinConfig = new SkinConfig.Builder()
        .name("skinName")
        .url("http://mysite.com/skins/myskin.css")
        .build();

PlayerConfig playerConfig = new PlayerConfig.Builder(this)
        .file("http://mysite.com/videos/myVideo.mp4")
        .skinConfig(skinConfig)
        .build();
```

You could also configure the the skin in the XML layout of your JWPlayerView by adding the attributes

`jw_skin_url`

`jw_skin_name` 

`jw_skin_controlbar_text`

`jw_skin_controlbar_icons`

`jw_skin_controlbar_iconsActive`

`jw_skin_controlbar_background`

`jw_skin_timeslider_progress`

`jw_skin_timeslider_rail`

`jw_skin_menus_text`

`jw_skin_menus_textActive`

`jw_skin_menus_background`

`jw_skin_tooltips_text`

`jw_skin_tooltips_background`

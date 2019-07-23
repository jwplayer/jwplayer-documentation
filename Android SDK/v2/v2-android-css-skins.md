# Skinning Overview

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

JW Player skins change the appearance of the player, adding a customizable interactive layer to your player. All visual components of the player (the controlbar, display, tooltip, dock and playlist) can be skinned in accordance to our [Skin Reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/css-skinning/skins_reference/) page.

If you would like to build your own skin please follow our [guide](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/skins_creating/) on the Support Portal.

Before building a new skin we suggest that you download the preset CSS files that come with the self-hosted version of JW7 to get you started. You can find them in the Content section of your Dashboard, under License Keys and Downloads located on the left side of the Content screen.

For demonstration purposes we'll walk you through editing the roundster.css file with a new skin name and some color to highlight the key changes you'll need to implement for this to work.

1) Rename the file roundster.css to ellipse.css

2) Open the file and search for all instances of "-roundster" and replace them with "-ellipse"

3) Host the file ellipse.css online.

Next, during your player configuration you'll have to set your `.skinUrl()` and `.skinName()` to load the skin.  In addition to that we will use `.skinActive()` , `.skinInactive()` and `.skinBackground()` to customize the colors. In the example below we are using the builder method to accomplish this.

```
PlayerConfig playerConfig = new PlayerConfig.Builder(this)
        .file("http://mysite.com/videos/myVideo.mp4")
        .skinUrl("http://mysite.com/skins/ellipse.css")
        .skinName("ellipse")
        .skinActive("#820101")
        .skinInactive("#ffffff")
        .skinBackground("#cf0000")
        .build();
```


The important thing to note here is the consistency of the skin name. You MUST set `.skinName()` to the suffix of the CSS class name that is defined within the CSS file *ellipse* in our example.

If you've used the Web Player, you know that you can easily configure the primary, highlight and background color of your skin either by using our [Player Builder](https://dashboard.jwplayer.com/#/players/basic_setup) or configuring them in the `skin:{}` block. You can do the same with the Android SDK.


To continue customizing your skin please refer to the documentation below:

[Using JW Player Skins](https://developer.jwplayer.com/jw-player/docs/developer-guide/jw7/skins_creating/)

[CSS Class reference](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/css-skinning/skins_reference/)

[Sample CSS file](https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/css-skinning/skins_example/)


Above we used the the `PlayerConfig.Builder` methods

`.skinUrl()`

`.skinName()`

You could also configure the the skin in the XML layout of your JWPlayerView by adding the attributes

`jw_skin_url`

`jw_skin_name` 


OR

By calling `.setSkin(String skinUrl)` on the instance of your JWPlayerView.

Skinning API Methods
====================

| Method                    | Description                                                                                                                                        |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| `setSkin(Skin skin)`      | Used to apply one of the default skins (`SEVEN`, `SIX`, `FIVE`, `GLOW`, `BEELDEN`, `VAPOR`, `BEKLE`, `ROUNDSTER`, or `STORMTROOPER`) to the player                                                                                                                           |
| `setSkin(String skinUrl)` | Used to apply the custom CSS skin located at `skinUrl` to the player                                                                               |
| `.skinActive(String color)`           | Active skin elements. This includes active and highlighted labels, as well scrubber time that has elapsed.                                                                                                                                                           |
| `.skinInactive(String color)`         | Skin elements that are not active. This includes scrubber time that has not yet elapsed.                                            |
| `.skinBackground(String color)`       | The background portion of the control bar.                                                                                             |

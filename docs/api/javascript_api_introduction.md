
<script src='//content.jwplatform.com/libraries/XeGdlzmk.js'></script>
# Introduction to the JW Player JavascriptAPI

This article explains how to use the [JavaScript API](http://www.jwplayer.com/products/jwplayer/javascript/) component of JW Player 7. This API can be used to enhance the functionality of your video embeds and/or to implement rich video-page interactions. It abstracts any differences between Flash and HTML5, so the code you write will work with both technologies.

We divide our API into three major sections:

|Get|Set|Event|
|---|---|-----|
|Returns information about the player and its current use|Tells the player to do something|Triggered when the player _does_ something|

|Blah|asdf|asdf|
|---|---|-----|
|Media Information<br/>Playback State<br/>Volume/Mute Status<br/>Content Metadata|Control playback<br/>Raise/Lower volume<br/>Play an ad<br/>Hide Controls|Goes into fullscreen<br/>Turns on captions<br/>Clicks on a player<br/>Buffers during a video|

###Get

This can include things like:

###Set

 This can include things like:



###Events

. This can happen for moments when a viewer:



###Note: We strongly suggest that all API calls be made after the player is considered ready.

##Require.js and JW Player

JW Player is not currently supported within require js due to JW Player needing to use jwplayer namespace. To avoid issues when require and jwplayer.js are on the same page, load jwplayer.js before the require.js script is loaded.

####Example:
<pre>
&lt;script src='jwplayer.js' &gt;
&lt;script src='requirejs.js' &gt;
</pre>

## JW Player API Events

JW Player 7 bases its event structure on [backbone.events](http://backbonejs.org/#Events). This allows a player instance to be used as an event router and gives developers better options and control.

Currently, JW Player events support the following ways of listening for events:

|Listener|Description|Example|
|---|---|---|
|on(_'event'_)|Using an _on_ listener will continually listen for an event for a specified player. If this player is removed and set up again, the listener will also need to be reinstated.|jwplayer().on(event, [callback], [context])|
|off(_'event'_)|Signifies to stop listening for a particular event|jwplayer().off(event, [callback], [context])|
|once(_'event'_)|Behaves similarly to on, however will only trigger for a single event, until it is set up again.|jwplayer().once(event, [callback], [context])|
|trigger(_'event'_)|Capable of firing events to a listener. This replaces dispatchEvent from JW6.|jwplayer().trigger(event, [*args])|

## Event Example

The below event triggers every time a volume change is initiated. As a result, Javascript will fire an alert dictating what the volume has been changed to.

<pre>jwplayer().on('volume', function(e) {
alert("Volume is changed to: "+ e.volume);
});
</pre>

## Getting Started

Before it is possible to interact with a player, a player setup is required. Our [Embedding Section](/customer/portal/topics/601065-embedding/articles) contains several examples. Here is the proper syntax for a basic player embed:

<pre>
&lt;div id='myElement'&gt;Loading the player...&lt;/div&gt;
&lt;script type='text/javascript'&gt;
  jwplayer("myElement").setup({ 
    "file": "/uploads/example.mp4", 
    "image": "/uploads/example.jpg"
  });
&lt;/script&gt;
</pre>

Once the player completes its setup, API calls can immediately be made. If you have one player on your page, it can always be accessed using the **playerInstance** reference function. For example:

<pre>
&lt;a onclick="jwplayer("myElement").play()"&gt;Toggle playback&lt;/a&gt;
&lt;a onclick="alert(jwplayer("myElement").getVolume())'&gt;Report volume&lt;/a&gt;
</pre>

Here is the combination of setup code and API links in action:
<div id="myElement"></div>
<script type="text/javascript">
jwplayer("myElement").setup({ "file": "https://content.jwplatform.com/videos/C4lp6Dtd-640.mp4"});
</script>

<p><a href="#" onclick="jwplayer("myElement").play(); return false;">Toggle playback</a> | <a href="#" onclick="alert('The volume of the player is: '+jwplayer("myElement").getVolume()); return false;">Report Volume</a></p>


## Targeting Multiple Players

When you have multiple players on a page, you must be specific about which player you want to interact with. Let's assume that we have embedded two different players:

<pre>
&lt;div id='myFirstPlayer'&gt;Loading the first player...&lt;/div&gt;
&lt;div id='mySecondPlayer'&gt;Loading the player...&lt;/div&gt;

&lt;script type='text/javascript'&gt;

jwplayer("myFirstPlayer").setup({ 
"file": "/uploads/example.mp4", 
"image": "/uploads/example.jpg"
});

jwplayer("mySecondPlayer").setup({ 
"file": "/uploads/example.mp4", 
"image": "/uploads/example.jpg"
});

&lt;/script&gt;
</pre>

There are two ways that we can target a player here.

#### 1- Include the id of the player div:
<pre>
// ID references the first player
jwplayer("myFirstPlayer").play();
</pre>

#### 2 - Include the index of player you wish to target
<pre>
// An index of 1 targets the second player on the page 
jwplayer(1).play();
</pre>

#### Note: Not including an ID or index with your API call will always target the first player on a page

## Setter and Getter API Calls

In addition t is possible to send and receive information from JW Player using its API

*   **Getter -** Provides a way to retrieve variables and information from the player. For example:

    <pre>playerInstance.getVolume();
    </pre>

    will return the player's current volume.

*   **Setter -** Refers to a way to **set** a player value. This can be similar to setting your player's volume, changing the player's dimensions, or controlling playback. For example:

    <pre>playerInstance.setVolume(80);
    </pre>

    will set your player's volume to 80.

## Cheat Sheet

The table below act as a cheat sheet of all API calls. The separate [JavaScript API Reference](/customer/portal/articles/1413089-javascript-api-reference) guide contains an listing of all parameters for all API calls. Click on the name of a class in the table to jump to the corresponding section in the API Reference. Also, for the sake of simplicity, we are only referencing **on** events here. As mentioned above, these can also utilize **off**, **once**, and **trigger**.

|Class|Getters|Setters|Events|
|-----|-------|-------|------|
|[Setup](javascript_api_reference/#setup)|getRenderingMode()|setup()<br/>remove()|on('ready')<br/>on('setupError')|
|[Playlist](javascript_api_reference/#playlist)|getPlaylist()<br/>getPlaylistIndex()<br/>getPlaylistItem()|load()<br/>playlistItem()|on('playlist')<br/>on('playlistItem')<br/>on('playlistComplete')|
|[Buffer](javascript_api_reference/#buffer)|getBuffer()|-|on('bufferChange')|
|[Playback](javascript_api_reference/#playback)|getState()|play()<br/>pause()<br/>stop()|on('play')<br/>on('pause')<br/>on('buffer')<br/>on('idle')<br/>on('complete')<br/>on('error')|
|[Seek](javascript_api_reference/#seek)|getPosition()<br/>getDuration()|seek()|on('seek')<br/>on('seeked')<br/>on('time')|
|[Volume](javascript_api_reference/#volume)|getMute()<br/>getVolume()|setMute()<br/>setVolume()|on('mute')<br/>on('volume')|
|[Resize](javascript_api_reference/#resize)|getWidth()<br/>getHeight()<br/>getFullscreen()|resize()|on('fullscreen')<br/>on('resize')|
|[Quality](javascript_api_reference/#quality)|getQualityLevels()<br/>getCurrentQuality()|setCurrentQuality()|on('levels')<br/>on('levelsChanged')|
|[Captions](javascript_api_reference/#captions)|getCaptionsList()<br/>getCurrentCaptions()|setCurrentCaptions()|on('captionsList')<br/>on('captionsChange')|
|[Controls](javascript_api_reference/#controls)|getControls()<br/>getSafeRegion()|addButton()<br/>removeButton()<br/>setControls()|on('controls')<br/>on('displayClick')|
|[Advertising](javascript_api_reference/#advertising)|-|playAd()|on('adClick')<br/>on('adCompanions')<br/>on('adComplete')<br/>on('adError')<br/>on('adImpression')<br/>on('adTime')<br/>on('adSkipped')<br/>on('beforePlay')<br/>on('beforeComplete')|
|[Metadata](javascript_api_reference/#metadata)|-|-|on('meta')|
|[Sharing](javascript_api_reference/#sharing)|-|getPlugin('sharing').open()<br/>getPlugin('sharing').close()|getPlugin('sharing').on('open')<br/>getPlugin('sharing').on('close')<br/>getPlugin('sharing').on('click')|
|[Related](javascript_api_reference/#related)|-|getPlugin('related').open()<br/>getPlugin('related').close()|getPlugin('related').on('open')<br/>getPlugin('related').on('close')<br/>getPlugin('related').on('play')|
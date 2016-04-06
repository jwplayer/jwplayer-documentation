
<script src='//content.jwplatform.com/libraries/XeGdlzmk.js'></script>
# Introduction to the Javascript API

This article explains the basics of how to use the [JavaScript API](http://www.jwplayer.com/products/jwplayer/javascript/) component of JW Player. This API can be used to enhance the functionality of your video embeds, or to implement rich page-level video interactions. Unless noted, there are no differences between Flash and HTML5 API calls, so the code you write will work across multiple technologies.

###Note: We strongly suggest that all API calls be made after the player is considered ready.

* * *

##Getting Information with the JW Player API

Certain API calls utilize a "get" prefix, which signifies that their express purpose is to return certain information. This may be in the form of an object, an array, a string, or a number. Each API call will have the expected output format listed in the full [JavaScript API Reference](/api/javascript_api_reference/). 

####"Get" API calls can return information like:

* An array of playlist items with __jwplayer().getPlaylist()__
* The duration of a video with __jwplayer().getDuration()__
* The current playback state of the video player with __jwplayer().getState()__
* The current pixel dimensions of a JW Player with __jwplayer().getHeight()__ and __jwplayer().getWidth()__

* * *

##Controlling and setting with the JW Player API
These types of API calls are used to control player behavior. Many of these calls expect a value to be passed along with it. For example, setVolume() expects a number from 1-100 to be included. 

####API calls can tell the player to do things like:

* Pause playback with __jwplayer().pause(true)__
* Set volume to 50% with __jwplayer().setVolume(50)__
* Seek to 2 minutes into a video with __jwplayer().seek(120)__

* * *

## Event listening with the JW Player API

Certain events are triggered when the player _does_ something. JW Player 7 bases its event structure on [backbone.events](http://backbonejs.org/#Events). This allows a player instance to be used as an event router and gives developers better options and control. Certain events also return information. We list this expected information in the full [JavaScript API Reference](/api/javascript_api_reference/) document.

Currently, JW Player events support the following event triggers:

|Listener|Description|Example|
|---|---|---|
|on(_'event'_)|Using an _on_ listener will continually listen for an event for a specified player. If this player is removed and set up again, the listener will also need to be reinstated.|jwplayer().on(event, [callback], [context])|
|off(_'event'_)|Signifies to stop listening for a particular event|jwplayer().off(event, [callback], [context])|
|once(_'event'_)|Behaves similarly to on, however will only trigger for a single event, until it is set up again.|jwplayer().once(event, [callback], [context])|
|trigger(_'event'_)|Capable of firing events to a listener. This replaces dispatchEvent from JW6.|jwplayer().trigger(event, [*args])|

The below event triggers every time a volume change is initiated, and will return a number called "volume" within an object.

<pre>jwplayer().on('volume', function(e) {
alert("Volume is changed to: "+ e.volume);
});
</pre>

* * *

## Example: Using the JW Player API

Before it is possible to interact with a player, a player setup is required. Our [Embedding Section](https://support.jwplayer.com/customer/portal/topics/601065-embedding/articles) contains several examples. Here is the proper syntax for a basic player embed:

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
&lt;script&gt;
jwplayer("myElement").on('complete', function(){
alert("Complete fired - Your content has completed!");
});
&lt;/script&gt;

&lt;a href="javascript:jwplayer('myElement').play();"&gt;Toggle playback&lt;/a&gt;
&lt;a href="javascript:alert('The volume of the player is: '+jwplayer('myElement').getVolume());"&gt;Report volume&lt;/a&gt;
</pre>

Here is a simple example of how our API functions, based on the above code:
<div id="myElement"></div>
<script type="text/javascript">
jwplayer("myElement").setup({ "file": "https://content.jwplatform.com/videos/C4lp6Dtd-640.mp4"});
jwplayer("myElement").on('complete', function(event){
alert("Complete fired - Your content has completed!");
});
</script>

<a href="javascript:jwplayer('myElement').play();">Toggle Playback</a> | 
<a href="javascript:alert('The volume of the player is: '+jwplayer('myElement').getVolume());">Return Player Volume</a>

* * *

## Targeting Multiple Players

When you have multiple players on a page, you must be specific about which player you want to interact with. Let's assume that we have embedded two different players on the same page:

<pre>
&lt;div id='myFirstPlayer'&gt;Loading the first player...&lt;/div&gt;
&lt;div id='mySecondPlayer'&gt;Loading the player...&lt;/div&gt;

&lt;script type='text/javascript'&gt;

jwplayer("myFirstPlayer").setup({ 
"file": "/uploads/example.mp4", 
"image": "/uploads/example.jpg"
});

jwplayer("mySecondPlayer").setup({ 
"file": "/uploads/example2.mp4", 
"image": "/uploads/example2.jpg"
});

&lt;/script&gt;
</pre>

There are two ways that we can target a player:

### 1 - Include the id of the player div:
<pre>
// ID references the first player
jwplayer("myFirstPlayer").play();
</pre>

### 2 - Include the index of player you wish to target
<pre>
// An index of 1 targets the second player on the page 
jwplayer(1).play();
</pre>

#### Note: Not including an ID or index with your API call will always target the first player on a page

* * *

##Require.js and JW Player

JW Player is not currently supported within require js due to JW Player needing to use jwplayer namespace. To avoid issues when require and jwplayer.js are on the same page, load jwplayer.js before the require.js script is loaded.

####Example:
<pre>
&lt;script src='jwplayer.js' &gt;
&lt;script src='requirejs.js' &gt;
</pre>

* * *

## Cheat Sheet Reference

The table below act as a cheat sheet of all API calls. The separate [JavaScript API Reference](/api/javascript_api_reference/) guide contains an listing of all parameters for all API calls. Click on the name of a class in the table to jump to the corresponding section in the API Reference. Also, for the sake of simplicity, we are only referencing **on** events here. As mentioned above, these can also utilize **off**, **once**, and **trigger**.

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



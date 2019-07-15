# Send JW Player events to Adobe Analytics

The JW Player Analytics extension enables you to create a configuration that allows JW Player events to be automatically sent to Adobe Analytics. 

The following table lists events that are automatically sent.

| Events | | |
| --- | --- | --- |
| <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronadbreakend" target="_blank">adBreakEnd</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronadbreakstart" target="_blank">adBreakStart</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronadcomplete" target="blank">adComplete</a> |
| <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronadskipped" target="_blank">adSkipped</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronadstarted" target="_blank">adStarted</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronbufferchange" target="_blank">bufferChange.position</a> |
| <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeroncomplete" target="_blank">complete</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#media-metadata" target="_blank">meta.seekRange.end</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#media-metadata" target="_blank">meta.seekRange.start</a> |
| <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronpause" target="_blank">pause</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronplay" target="_blank">play</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronplayattemptfailed" target="_blank">playAttemptFailed</a> |
| <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayerontime" target="_blank">time.duration</a> | <a href="https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronvisualquality" target="_blank">visualQuality</a>|

The following sections explain how to enable this functionality by configuring Adobe Launch and adding several lines of code on a page with an embedded JW Player web player.  

<br/>

## Intended audience

This article assumes that you are enabled within Adobe to configure Adobe Launch. Additionally, you should understand how to build a new Launch library.

<br/>

## Get required items

Before starting this process, you need the following information that can be found in your Adobe dashboard:

- Adobe Analytics tracking server
- Adobe Heartbeat tracking server
- Marketing Cloud Organization ID

You will also need to install the following Adobe Launch extensions.

| Extension | Description |
| --- | --- |
| Adobe Analytics | Adobe Analytics is an industry-leading solution that empowers you to understand your customers as people and steer your business with customer intelligence. |
| Adobe Media Analytics for Audio and Video | Adobe Media Analytics for Audio and Video is an add-on to the base Analytics offering that provides clients with robust video measurement for content, audio, and advertisements. |
| Core | Core provides default event, condition, and data element types available to all Adobe Launch users. |
| Experience Cloud ID Service | Experience Cloud ID Service implements the Experience Cloud ID Service which identifies visitors across all Experience Cloud solutions. |
| JW Player Analytics | JW Player Analytics connects JW Player events to Adobe Video Analytics |

The installation steps are explained in the following sections.

<br/>

## Configure Adobe Launch

!!!
<strong>*</strong> Throughout this documentation, links to Adobe's documentation are provided when applicable. If any of these become outdated, please search for the topic on the <a href="https://helpx.adobe.com/support/experience-cloud/core-services.html" target="_blank">Adobe Experience Cloud Core Services site</a>.
!!!

### Create a new property

1. From the Launch by Adobe dashboard, click **New Property**.
2. Enter a **Name**. 
3. For the **Platform**, choose **Web**.
4. Enter the **Domain** for your property.
5. Click **Save**.

### Configure property extensions

#### Adobe Analytics extension

1. From **Extensions > Catalog**, locate Adobe Analytics.
2. Click **Install**.
3. Enter the name of your Adobe Analytics report suite in the text box under **Production Report Suites**.
4. In the **General** section, enter your Adobe Analytics **Tracking Server**.
5. Click **Save**.

#### Adobe Media Analytics for Audio and Video extension

1. From **Extensions > Catalog**, locate Adobe Analytics.
2. Click **Install**.
3. Enter the video analytics Heartbeat **Tracking Server**. This is a different tracker server from the tracking server entered into the Adobe Analytics extension.
4. <a href="https://docs.adobe.com/help/en/launch/using/extensions-ref/adobe-extension/media-analytics-extension/overview.html" target="_blank">Configure the remaining fields</a>.* 
5. Click the **Debug Logging** toggle to view tracking messages within the web browser console log.
6. Click **Save**.

#### Experience Cloud ID Service  extension

1. From **Extensions > Catalog**, locate Experience Cloud ID Service.
2. Click **Install**.
3. Enter a <a href="https://docs.adobe.com/content/help/en/launch/using/extensions-ref/adobe-extension/id-service-extension/overview.html" target="_blank"><strong>Marketing Cloud Organization ID</strong></a>.*
4. Click **Save**.

#### JW Player Analytics

1. From **Extensions > Catalog**, locate JW Player Analytics.
2. Click **Install**.

### Define property rules

1. Click **Rules > Create New Rule**.
2. Enter a **Name**.
3. In the **If > EVENTS** section, click **Add**.
4. From the **Extension** drop-down menu, select **Core**.
5. From the **Event Type** drop-down menu, select **Library Loaded (Page Top)**.
6. Click **Keep Changes**.
7. In the **THEN > ACTIONS** section, click **Add**.
8. From the **Extension** drop-down menu, select **Core**.
9. From the **Action Type** drop-down menu, select **JW Player Adapter for Adobe > initializeAdapter**.
10. Click **Keep Changes**.
11. Click **Save**.

### Publish

1. Click **Publishing > Add New Library**.
2. Enter a **Name**.
3. From the **Environment** drop-down menu, select an environment.
4. In the **Library Contents** section, click **Add a Resource**.
5. Select the property rule that you defined.
6. Select the following five extensions: Adobe Analytics, Adobe Analytics for Video, Core, Experience Cloud ID, JW Player Adapter for Adobe.
7. Click **Save & Build for Development**.
8. Submit, approve, and publish based upon the <a href="https://docs.adobe.com/content/help/en/launch/using/reference/publish/approval-workflow.html" target="_blank">Approval Workflow</a>.*

<a name="copy-adobe-code"></a>

### Copy Adobe code

1. Click **Environment**.
2. In the **INSTALL** column, click the icon next to the production **ENVIRONMENT**.
3. Click the toggle to disable **Load Library Asynchronously**.
4. Copy the `<script>` tag. 

<br/>

## Add JW Player Analytics extension to a page

Use the following steps and code sample to add the JW Player Adapter for Adobe extension to your page:

<strong>1.</strong> Add the Adobe Analytics `<script>` tag from the [Copy the Adobe code](#copy-adobe-code) section to the <head> of your page.

```html
<script src="//assets.adobetm.com/launch-EN12345thisIsADummyValue6789-production.min.js"></script>
```

<br/>

<strong>2.</strong> Add IE11 `<script>` tag to the `<body>` of your page. This allows the extension to work in an IE11 browser.

```javascript
<script>
  (function () {
    if ( typeof window.CustomEvent === "function" ) return false;
    function CustomEvent ( event, params ) {
      console.log('Using custom code for event');
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
    }
                
    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  })();     
</script>
```

<br/>

<strong>3.</strong> Initialize the Adobe Launch extension when the player is ready.  On setup, the JW Player extension listens for the `jwplayerready` browser event. Then, the extension initializes itself with the player instance information.

If you instantiate your player using `jwplayer("myElement").setup`, we suggest assigning `jwplayer("myElement")` to a variable like `playerInstance` to simplify this implementation, as shown in the following example. 

```html
<div id="myElement"></div>    
<script type="text/javaScript">
    
  // Video player embed
  var playerInstance = jwplayer("myElement");
  playerInstance.setup({
    "playlist": "https://cdn.jwplayer.com/v2/media/ac12B3d4"
  };
            
  // Initialize Adobe Launch extension, after player fires 'ready' event.
  jwplayer("myElement").on('ready', function (e) {

    /* 
    Create 'jwplayerready' custom window event.
    Enable Launch extension to listen for player events by sending playerInstance to the Launch extension. 
    */
    var event = new CustomEvent('jwplayerready', {detail : {'jwplayer' : playerInstance}});
    window.dispatchEvent(event);            
  });
            
</script> 
```

The events from your embedded JW Player will be sent to your Adobe Analytics report. You can also use your browser's debugging console to see the event information sent to Adobe Analytics.

<br/>

## Full code sample

```html
<html>
  <head>
    <!-- Add Adobe Analytics <script> tag -->
    <script src="//assets.adobetm.com/launch-EN12345thisIsADummyValue6789-production.min.js"></script>        
        
    <!-- JW Player library -->
    <script type="text/javascript" src="https://content.jwplatform.com/libraries/aBCdE12G.js"> </script>
        
  </head>
  <body>
    <!-- Add IE11 code, so page can work in IE11 domain -->
    <script>
      (function () {
        if ( typeof window.CustomEvent === "function" ) return false;
        function CustomEvent ( event, params ) {
          console.log('Using custom code for event');
          params = params || { bubbles: false, cancelable: false, detail: undefined };
          var evt = document.createEvent( 'CustomEvent' );
          evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
          return evt;
        }
                
        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
      })();     
    </script>
            
        <!-- Video player DIV -->
    <div id="myElement"></div>    
    <script type="text/javaScript">
    
      // Video player embed
      var playerInstance = jwplayer("myElement");
      playerInstance.setup({
        "playlist": "https://cdn.jwplayer.com/v2/media/ac12B3d4"
      };
            
      // Initialize Adobe Launch extension, after player fires 'ready' event.
      jwplayer("myElement").on('ready', function (e) {

        /* 
        Create 'jwplayerready' custom window event.
        Enable Launch extension to listen for player events by sending playerInstance to the Launch extension.
        */
        var event = new CustomEvent('jwplayerready', {detail : {'jwplayer' : playerInstance}});
        window.dispatchEvent(event);            
      });
            
    </script>        
  </body>
</html>
```
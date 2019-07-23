# JWPlayerView

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

The [`JWPlayerView`](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/JWPlayerView.html) is the central UI component of our SDK. This class allows you to easily load new media into the player, manage video and audio playback via the Playback API and register multiple event listeners that could help you with custom analytics or error handling.

## Adding a JWPlayerView to your XML layout

The JWPlayerView is available in the Graphical Layout Editor of Android Studio by navigating to **Custom > Custom Views** in your palette.

You can also add the view to your layout by adding these lines to your XML layout

```xml
	<com.longtailvideo.jwplayer.JWPlayerView
		xmlns:jwp="http://schemas.android.com/apk/lib/com.longtailvideo.jwplayer"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:id="@+id/playerView"
		jwp:jw_autostart="true"/>

```
An important thing to notice here is the `jwp` namespace. It allows you to setup your player with default settings such as autostart, file, repeat and more. For a full list of available options have a look at our [XML options](https://developer.jwplayer.com/sdk/android/docs/developer-guide/customization/xml-options-and-playerconfig/) page.

Once you have the `JWPlayerView` in your layout, you can now get a reference to it by using `findViewById()`.

```java
	 JWPlayerView playerView = (JWPlayerView) findViewById(R.id.playerView);

```

## Instantiating a JWPlayerView programmatically

Instead of adding the JWPlayerView to your XML layout, you may also choose to programmatically instantiate it at any point.

Programmatic instantiation requires you to build a `PlayerConfig` first. The PlayerConfig tells the player which features you'd like to setup with.

```java
PlayerConfig playerConfig = new PlayerConfig.Builder()
				.file("http://www.site.com/video/clip.mp4")
				.autostart(true)
				.build();
```

After instantiating the PlayerConfig you can then construct a JWPlayerView

```java
JWPlayerView playerView = new JWPlayerView(context, playerConfig);
```

Finally, you must add the JWPlayerView to a ViewGroup

```java
ViewGroup jwPlayerViewContainer = (ViewGroup) findViewById(R.id.jwPlayerContainer);
jwPlayerViewContainer.addView(playerView);
```

## Activity Lifecycle Handling 

In order to properly handle the Activity Lifecycle and release the player from memory when necessary, you **must** override the `onPause()`, `onResume()` and `onDestroy()` methods of the Activity containing the JWPlayerView as shown below. This configuration is not necessary when using `JWPlayerFragment` or `JWPlayerSupportFragment` since we already handle the lifecycle methods in those scenarios.

```java
@Override
protected void onResume() {
    // Let JW Player know that the app has returned from the background
    super.onResume();
    playerView.onResume();
}
	
@Override
protected void onPause() {
    // Let JW Player know that the app is going to the background
    playerView.onPause();
    super.onPause();
}
	
@Override
protected void onDestroy() {
    // Let JW Player know that the app is being destroyed
    playerView.onDestroy();
    super.onDestroy();
}
```

## Orientation Changes and Fullscreen Handling

Handling orientation changes to enter fullscreen is fairly simple. 

We begin by overriding the `onConfigurationChanged()` method of the Activity containing the player and setting the player to fullscreen whenever the device is in landscape.

```java
@Override
public void onConfigurationChanged(Configuration newConfig) {
    // Set fullscreen when the device is rotated to landscape
    playerView.setFullscreen(newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE, true);
    super.onConfigurationChanged(newConfig);
}
```

Next, it is good practice to override the `onKeyDown()` method as well. This allow users to exit fullscreen whenever the back button is pressed.

```java
@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
    // Exit fullscreen when the user pressed the Back button
    if (keyCode == KeyEvent.KEYCODE_BACK) {
       if (playerView.getFullscreen()) {
           playerView.setFullscreen(false, false);
           return false;
       }
    }
    return super.onKeyDown(keyCode, event);
}
```

Lastly, you'll want to implement the `VideoPlayerEvents.OnFullscreenListener` on your Activity to receive a callback whenever the player is going to fullscreen. At that moment, you may need to hide the ActionBar and set any custom UI elements back to visible.

```java
@Override
public void onFullscreen(boolean state) {
    if (state) {
        getActionBar().hide();
        findViewById(R.id.custom_ui).setVisibility(View.VISIBLE);
    } else {
        getActionBar().show();
    }
    
    /*
        If the root layout of this activity is the coordinator layout (default for new projects created in Android Studio 2.0+)
        Then we also want to unset fitsSystemWindows
    */
    ((CoordinatorLayout)findViewById({ID_OF_ROOT_LAYOUT})).setFitsSystemWindows(!state);
}
```

Fullscreen in ListView or RecyclerView
--------------------------------------

Due to the way `ListView` and `RecyclerView` manage their own pools of views, we do not currently support fullscreen for players that are inside a `ListView` or `RecyclerView`.  We recommend that you disable fullscreen by setting up the player to use a `FullscreenHandler` that does not perform any actions.

For example:

```
FullscreenHandler fullscreenDisabledHandler = new FullscreenHandler() {
  @Override
  public void onFullscreenRequested() {

  }

  @Override
  public void onFullscreenExitRequested() {

  }

  @Override
  public void onResume() {
  }

  @Override
  public void onPause() {

  }

  @Override
  public void onDestroy() {

  }

  @Override
  public void onAllowRotationChanged(boolean allowRotation) {

  }

  @Override
  public void updateLayoutParams(ViewGroup.LayoutParams layoutParams) {

  }

  @Override
  public void setUseFullscreenLayoutFlags(boolean flags) {

  }
};

JWPlayerFragment fragment = (JWPlayerFragment) getFragmentManager().findFragmentById(R.id.playerFragment);

fragment.setFullscreenHandler(fullscreenDisabledHandler);
```

If you need fullscreen in your application, a good pattern to follow is to have a single player instance outside the `RecyclerView` or `ListView` and use the `RecyclerView`/`ListView` to display thumbnails of your content.

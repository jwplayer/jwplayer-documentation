# Chromecast

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

## Overview
Enabling Chromecast functionality for your Android application using the JW Player SDK is simple. 

**There are 6 steps to complete:**

1. (Not required for Maven users) Include Google's [CastCompanionLibrary](https://github.com/googlecast/CastCompanionLibrary-android) in your project.

2. Initialize JW Player's [CastManager](http://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/cast/CastManager.html) at the `Application` level

3. Create an activity that is a descendant of [FragmentActivity](http://developer.android.com/reference/android/support/v4/app/FragmentActivity.html) from the `android.support.v4` support library

4. Add a [JWPlayerFragment](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/JWPlayerFragment.html) or a [JWPlayerView](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/JWPlayerView.html) to your `Activity` 

5. Add a [MediaRouteButton](http://developer.android.com/reference/android/support/v7/app/MediaRouteButton.html) to the `ActionBar` or to your Activity's layout
 
6. Connect your device to the same WiFi network as your Chromecast

Now you can cast [compatible media formats](https://developers.google.com/cast/docs/media) that are currently playing in your application to the big screen!

## Including Google's CastCompanionLibrary (not required if your app uses mvn.jwplayer.com to add the JW Player SDK dependencies)

Since JW Player's SDK was built using **version #cast_companion_version#** of Google's `CastCompanionLibrary`

In your app's build.gradle, add the library from jCenter repo by adding the following line to your project's
dependencies:
```groovy
 dependencies {
    ...
    compile 'com.google.android.libraries.cast.companionlibrary:ccl:#cast_companion_version#'
 }
```


## Initializing the CastManager

Connecting to Chromecast devices is managed by the `CastManager` class. The `CastManager ` is a singleton class that must be initialized in the `onCreate()` method of the application.

### Initialization

Create a new class that extends from Android's `Application` class, and override the `onCreate()` method as shown below

```java
public class MyApplication extends Application {

	@Override
	public void onCreate() {
		super.onCreate();
		/*
		 * We need to initialize singletons in the global application object to prevent issues
		 * with garbage collection.
		 */
		CastManager.initialize(this);
        // You can now get a reference to the singleton by calling CastManager.getInstance();
	}
}
```

After you creating your `MyApplication` class, you should modify the  `AndroidManifest.xml` and set the fully qualified name within the `<application>` tag.

```xml
<application
		android:icon="@drawable/ic_launcher"
		android:label="@string/app_name"
		android:theme="@style/Theme.AppCompat"
		android:name="com.longtailvideo.jwplayer.example.MyApplication">
...
</application>
```

## Configuring your Activity

To enable casting, the activity in which JW Player exists must be a descendant of `FragmentActivity` of the `android.support.v4` support library. 

In our example we will be using [AppCompatActivity](http://developer.android.com/reference/android/support/v7/app/AppCompatActivity.html) from the `android.support.v7` support library, which satisfies the criteria.

```java
public class ChromecastActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chromecast);
    }

}
```

You now have two options

### Option A: Use JWPlayerFragment

The fastest way to get Chromecast up and running is by using the `JWPlayerFragment` or `JWPlayerSupportFragment`. The JWPlayerFragment will take care of adding the `MediaRouteButton` to your action bar which allows users to begin casting.

As a refresher, here's how to add a [JWPlayerFragment](https://developer.jwplayer.com/sdk/android/docs/developer-guide/usage/jwplayer-fragment/) to your Activity.

As soon as you completed the above steps and added the `JWPlayerFragment` to your Activity's layout you should now be ready to start Casting, just make sure you are on the same network as your casting device and the Cast button will appear on your `ActionBar`.

### Option B: Use JWPlayerView

Using `JWPlayerView` allows more granular control over the player and the `MediaRouteButton`

As a refresher, here's how to add a [JWPlayerView](https://developer.jwplayer.com/sdk/android/docs/developer-guide/usage/jwplayer-view/) to your Activity.

As soon as you completed the above steps and added the `JWPlayerView` to your activity you should now be ready to add your `MediaRouteButton`.

## Adding the MediaRouteButton


The `MediaRouteButton` allows users to select which device they'd like to start casting to. During the cast session it provides a customizable dialog that allows users to play, pause or cease casting at any time. Below we'll describe two ways of adding the MediaRouteButton to you application, either to the ActionBar or to your Activity's layout.

### Adding a MediaRouteButton to the ActionBar

You will only have to add the `MediaRouteButton` to your `ActionBar` when using the `JWPlayerView` as this is the default location of the `MediaRouteButton` when using the `JWPlayerFragment`.
 
There are two ways to add the `MediaRouteButton` to your `ActionBar`

#### Add to ActionBar via XML

Add the following item to your Activity's `menu_main.xml`:

```xml
<item android:id="@+id/media_route_menu_item"
    android:title="@string/media_route_menu_title"
    app:actionProviderClass="android.support.v7.app.MediaRouteActionProvider"
    app:showAsAction="always"
  />
```

In your Activity override `onCreateOptionsMenu()`:

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
  super.onCreateOptionsMenu(menu);
  // Inflate the menu
  getMenuInflater().inflate(R.menu.menu_main, menu);
  // Register the MediaRouterButton on the JWPlayer SDK
  CastManager.getInstance().addMediaRouterButton(menu, R.id.media_route_menu_item);
  return true;
}
```

#### Add to ActionBar Programmatically

It is also possible to add the `MediaRouteButton` to your ActionBar programmatically.

In your Activity override `onCreateOptionsMenu()` as shown below

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
  super.onCreateOptionsMenu(menu);
  // Create the button
  MenuItem castButton = menu.add(Menu.NONE, R.id.media_route_menu_item, Menu.NONE, R.string.ccl_media_route_menu_title);
  // Make the button always visible
  MenuItemCompat.setShowAsAction(castButton, MenuItemCompat.SHOW_AS_ACTION_ALWAYS);
  // Set the action provider to MediaRouteActionProvider
  MenuItemCompat.setActionProvider(castButton, new MediaRouteActionProvider(getActivity()));
  // Register the MediaRouterButton on the JW Player SDK
  CastManager.getInstance().addMediaRouterButton(menu, R.id.media_route_menu_item);
  return true;
}
```

The Cast button will now appear when your device is on the same wifi network as a Chromecast device.

!!!warning
Note: Since the ActionBar is usually hidden when in fullscreen mode, you may want to include the MediaRouteButton in your Activity's layout instead to allow users to begin casting when in fullscreen.
!!!

### Adding a MediaRouteButton to your ViewGroup

As mentioned in the above note, in some cases, you may want to add your `MediaRouteButton` to a `ViewGroup` rather than an `ActionBar`. 

#### Add to ViewGroup via XML

Add the code below to your xml layout

```xml
<android.support.v7.app.MediaRouteButton
        android:id="@+id/chromecast_btn"
        android:layout_width="50dp"
        android:layout_height="50dp" />
```

Then add this to your Activity

```java
MediaRouteButton chromecastBtn = (MediaRouteButton) findViewById(R.id.chromecast_btn);
CastManager.getInstance().addMediaRouterButton(chromecastBtn);	
```

#### Add to ViewGroup Programmatically

Once you assign an id to your `ViewGroup` you can easily add the `MediaRouteButton` to your layout as shown below

```java
ViewGroup container = (ViewGroup) findViewById(R.id.player_container);
MediaRouteButton chromecastBtn = new MediaRouteButton(this);
container.addView(chromecastBtn);
CastManager.getInstance().addMediaRouterButton(chromecastBtn);
```

## Ready to start casting

At this point your application is ready to start casting. Just make sure you are on the same WiFi network as your Chromecast device.

Prerequisites
-------------

The JW Player SDK supports casting to the Default Media Receiver and to Styled Media Receivers. Custom Receivers are not yet officially supported, but may work if the video playback implements the same interface used in the Default Media Receiver. To specify a receiver, specify a Media Receiver Application ID when initializing the CastManager.

# JWPlayerFragment

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

Instead of directly adding the `JWPlayerView` to your layout we encourage you to add a`JWPlayerFragment` (or `JWPlayerSupportFragment` if you are using the support package) to your `ViewGroup`.

The JWPlayerFragment makes it easier to get started with using the JWPlayer, it offers all the features that the JWPlayerView offers and on top of that it takes care of the JWPlayerView's lifecycle. Using the JWPlayerFragment is recommended, but for more control over the JWPlayerView lifecycle (eg. onResume) the JWPlayerView can be used directly.

Adding the JWPlayerFragment to Your Activity's Layout
-----------------------------------------------------

There are several ways to add a JWPlayerFragment to your Activity's layout. You can attach the fragment through the layout xml and through native java code using the FragmentManager.

### XML Layout Example

Add the fragment to your activities' layout xml:

`activity_fragment_example.xml`:

```
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
			 xmlns:tools="http://schemas.android.com/tools"
			 android:layout_width="match_parent"
			 android:layout_height="match_parent">

	<fragment
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:name="com.longtailvideo.jwplayer.JWPlayerFragment"
		android:id="@+id/playerFragment"
		tools:layout="@layout/jw_player_fragment_sample_layout"/>

</FrameLayout>
```

Retrieve a handle to the JWPlayerFragment in your activity's `onCreate` method.

If you want to see a preview of the fragment in your layout editor, add the [Android tools namespace](http://tools.android.com/tech-docs/tools-attributes) to your XML file and include `tools:layout="@layout/jw_player_fragment_sample_layout"` in your fragment.

`FragmentExampleActivity.java`:

```
public class FragmentExampleActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// Set the Activity's content view.
		setContentView(R.layout.activity_fragment_example);

		// Get a handle to the JWPlayerFragment
		JWPlayerFragment fragment = (JWPlayerFragment) getFragmentManager().findFragmentById(R.id.playerFragment);

		// Get a handle to the JWPlayerView
		JWPlayerView playerView = fragment.getPlayer();
		
		// Create a PlaylistItem 
		PlaylistItem video = new PlaylistItem("http://path/to/stream.mpd");
		
		// Load a stream into the player

		playerView.load(video);

	}
}
```

Please note that you need to load a stream into the player in order for it to become visible. If you followed the above steps correctly, you now have a working JWPlayer in your Activity.

### Programmatically Instantiating a JWPlayerFragment

It is also possible to programmatically instantiate a JWPlayerFragment.

First make sure you have a ViewGroup defined in your XML where you can load the Fragment into.

`activity_fragment_example.xml`:

```
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
			 android:layout_width="match_parent"
			 android:layout_height="match_parent"
			 android:id="@+id/fragmentContainer">

</FrameLayout>
```

Instantiate a JWPlayerFragment and programmatically add it to your layout.

`FragmentExampleActivity.java`:

```
public class FragmentExampleActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// Set the Activity's content view.
		setContentView(R.layout.activity_fragment_example);

        // Build a player configuration
		PlayerConfig playerConfig = new PlayerConfig.Builder()
        				.file("http://path/to/stream.mpd")
        				.build();

        // Instantiate a new JWPlayerFragment using the playerConfig
        JWPlayerFragment fragment = JWPlayerFragment.newInstance(playerConfig);

        // Add fragment to layout
        FragmentTransaction ft = getFragmentManager().beginTransaction();
        ft.add(R.id.fragmentContainer, fragment);
        ft.commit();
	}
}
```

Fullscreen
----------

By default, the JWPlayerFragment will automatically switch to fullscreen mode when the device is rotated into landscape mode. This behavior can be disabled (for example to support only manual fullscreen switches), using the `setFullscreenOnDeviceRotate` method.

```
public class FragmentExampleActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// Set the Activity's content view.
		setContentView(R.layout.activity_fragment_example);

		// Get a handle to the JWPlayerFragment
		JWPlayerFragment fragment = (JWPlayerFragment) getFragmentManager().findFragmentById(R.id.playerFragment);
		
		// Disable automatic fullscreen
		fragment.setFullscreenOnDeviceRotate(false);
	}
}
```

Fullscreen in ListView or RecyclerView
--------------------------------------

Due to the way `ListView` and `RecyclerView` manage their own pools of views, we do not currently support fullscreen for players that are inside a `ListView` or `RecyclerView`.  We recommend that you disable fullscreen by setting up the player to use a `FullscreenHandler` that does not perform any actions.  For example:

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

JWPlayerSupportFragment
-----------------------

If you are using Android's `SupportFragmentManager` you should use the `JWPlayerSupportFragment` instead of the `JWPlayerFragment`.

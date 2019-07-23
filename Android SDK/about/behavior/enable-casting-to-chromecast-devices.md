# Enable casting to Chromecast devices

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

The Google Cast framework enables a viewer to stream video and audio content to a compatible TV or sound system. By enabling the Google Cast framework in your app, a viewer can use a cast button to stream your content to a Chromecast-enabled device on a shared network connection.

!!!important
&bull; The JW Player SDK supports casting to the Default Media Receiver and to Styled Media Receivers.<br/><br/>&bull; Custom receivers are not officially supported. However, if the video playback implements the same interface used in the Default Media Receiver, you may be able to initiate a casting session with a custom receiver.<br/><br/>&bull; To specify a receiver, specify a media receiver app ID when initializing the CastManager.
!!!

The following sections explain how to enable the Google Cast framework for your Android app:

- Add SDK dependencies for Google Cast
- Configure you app for Google Cast 
- Add a cast button

After completing the steps in each section, a viewer with be able to begin a casting session from your app.

<br/>

## Add SDK dependency for Google Cast

To use the Google Cast framework, you must add a dependency to your app. You can use Maven or manually add the dependency. 

### Use Maven

1. In Android Studio, open the **build.gradle** file for your app.
2. Add the `com.longtailvideo.jwplayer:jwplayer-chromecast:x.x.x` dependency. Be sure the version number of the module (`x.x.x`) matches the version number you use for the `jwplayer-core` and `jwplayer-common` dependencies.
3. Sync Gradle.

```groovy
dependencies {
    ...
    implementation 'com.longtailvideo.jwplayer:jwplayer-chromecast:x.x.x'
 }
```

### Manually add the .aar dependency

1. In Android Studio, open your app.
2. Click **File > New > New Module... > Import .JAR / .AAR Package**.
3. Click **Next**.
4. Select **jwplayer-chromecast:x.x.x.aar** from your computer.
5. Click **Finish**.
6. Click **File > Project Structure... > Modules > App > Dependencies**.
7. Click the plus sign in the main panel.
8. Select **Module dependency**.
9. Select **jwplayer-chromecast:x.x.x**.
10. Click **OK**.

<br/>

## Configure your app for Google Cast

Now that you have added the Google Cast dependency, you must configure your app:

<br/>

**1.** Implement the `OptionsProvider` interface. This interface supplies options needed to initialize `CastContext`. `CastContext` is a global singleton object that coordinates all interactions of the framework.

This interface also creates an instance of `CastOptions` that defines the behavior of the framework. For example, `setReceiverApplicationId()` allows you to filter discovery results and to launch the receiver app when a cast session starts.

```java
public class CastOptionsProvider implements OptionsProvider {

    @Override
    public CastOptions getCastOptions(Context context) {
        CastOptions castOptions = new CastOptions.Builder()
            .setReceiverApplicationId(context.getString(R.string.app_id))
            .build();

        return castOptions;
    }

    @Override
    public List<SessionProvider> getAdditionalSessionProviders(Context context) {
        return null;
    }
}
```

<br/>

**2.** In the **AndroidManifest.xml** of the sender app, use a `<meta-data/>` element to declare the fully-qualified name of the implemented `OptionsProvider`.


```xml
<application>
    ...
    <meta-data
        android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"
        android:value="com.foo.CastOptionsProvider" />

</application>
```

<br/>

**3.**  Get a reference to your `CastContext` within the casting activity.

```java
public class CastActivity extends AppCompatActivity {

    @Override
    public void onCreate() {
        ...
        CastContext castContext = CastContext.getSharedInstance(this);
    }
}
```

<br/>

## Add a cast button

The `MediaRouteButton` allows your viewers to select a Chromecast-enabled device. During the cast session, the `MediaRouteButton` provides a customizable dialog that allows your viewers to play, pause, or stop a casting session.

To add a cast button to your app, use the following steps:

1. Add a menu item or a <a href="https://developer.android.com/reference/android/support/v7/app/MediaRouteButton.html" target="_blank">MediaRouteButton</a> in the .xml file that defines your menu.
2. Use <a href="https://developers.google.com/cast/docs/reference/android/com/google/android/gms/cast/framework/CastButtonFactory" target="_blank">CastButtonFactory</a> to wire it up with the framework. 

The following sections illustrate two approaches to complete the previous steps: 

- Approach 1: Add a `MediaRouteButton` to the ActionBar
- Approach 2: Add a a `MediaRouteButton` to the layout of an Activity<br/><sup>If you use this approach, you should include the `MediaRouteButton` in the layout of the Activity since the ActionBar is usually hidden when in fullscreen mode. This allows your viewers to begin a casting session when in fullscreen mode.</sup>

### Approach 1: Add a MediaRouteButton to the ActionBar

```xml
// To add a Cast button, add the following snippet.
// menu.xml
<item
    android:id="@+id/media_route_menu_item"
    android:title="@string/media_route_menu_title"
    app:actionProviderClass="android.support.v7.app.MediaRouteActionProvider"
    app:showAsAction="always" />
```

```java

// Then override the onCreateOptionMenu() for each of your activities.
// CastActivity.java
@Override public boolean onCreateOptionsMenu(Menu menu) {
    super.onCreateOptionsMenu(menu);
    getMenuInflater().inflate(R.menu.main, menu);

    CastButtonFactory.setUpMediaRouteButton(getApplicationContext(), menu, R.id.media_route_menu_item);
    return true;
}
```

<br/>

### Approach 2: Add a MediaRouteButton to the layout of an Activity

As mentioned above, if you use this approach, you should include the `MediaRouteButton` in the layout of the Activity since the ActionBar is usually hidden when in fullscreen mode. This allows your viewers to begin a casting session when in fullscreen mode.

<br/>

**1.** Add a `MediaRouteButton` to the layout of an Activity.

```xml
// activity_layout.xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center_vertical"
    android:orientation="horizontal" >

    <android.support.v7.app.MediaRouteButton
        android:id="@+id/media_route_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:mediaRouteTypes="user"
        android:visibility="gone" />

</LinearLayout>
```

```java

// CastActivity.java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_layout);

    mMediaRouteButton = (MediaRouteButton) findViewById(R.id.media_route_button);
    CastButtonFactory.setUpMediaRouteButton(getApplicationContext(), mMediaRouteButton);

    mCastContext = CastContext.getSharedInstance(this);
}
```
<br/>

**2.** Add a menu item to **menu_main.xml** to add the `MediaRouteButton` to the ActionBar.

```xml
<item android:id="@+id/media_route_menu_item"
    android:title="@string/media_route_menu_title"
    app:actionProviderClass="android.support.v7.app.MediaRouteActionProvider"
    app:showAsAction="always"
/>
```

<br/>

**3.** In the Activity, override `onCreateOptionsMenu()`.

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

<br/>

## Next step

Add [JWPlayerFragment](../../usage/jwplayer-fragment), [JWPlayerSupportFragment](../../usage/jwplayer-fragment), or [JWPlayerView](../../usage/jwplayer-view) to an activity. Be sure that the activity is a descendant of `FragmentActivity` of the android.support.v4 support library.

<br/>

## Additional resources

Visit <a href="https://developers.google.com/cast/docs/android_sender" target="_blank">Google Cast</a> to discover additional feature and customization options.

<br/>

## FAQ

**Which features are not supported when casting with an Android SDK player?**
<br/><br/>
The following features are not supported during a casting session with an Android SDK player:

* Advertising
* Multiple-audio tracks or AudioTrack switching<sup>1</sup>
* In-manifest WebVTT captions<sup>1</sup>
* 608 captions
* DVR and live streaming capabilities

<sup>1</sup>Chromecast does not support these features natively.
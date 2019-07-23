# Add a player to an activity

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

The <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/JWPlayerView.html" target="_blank">JWPlayerView</a> is the central UI component of our SDK. This class allows you to easily load new media into the player, manage video and audio playback, and register multiple event listeners that could help you with custom analytics or error handling.

!!!tip
Adding the `JWPlayerView` gives you more control over the `JWPlayerView` lifecycle. If you do not need this control, you can add the [JWPlayerFragment](https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/JWPlayerFragment.html) or [JWPlayerSupportFragment](https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/JWPlayerSupportFragment.html) to your app instead.
!!!

Use the following steps and code examples to add the `JWPlayerView` to the **app/res/layout/activity_main.xml** and **app/java/MainActivity.java** files of your app:

<br/>

1. In **app/res/layout/activity_main.xml**, add the `JWPlayerView`.
2. In **app/java/MainActivity.java**, define `mPlayerView` to reference the `JWPlayerView` in **app/res/layout/activity_main.xml**.
3. Create a <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/media/playlists/PlaylistItem.html" target="_blank">PlaylistItem</a> object named `playlistItem`. At the minimum, you **must include** the <a href="https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/media/playlists/PlaylistItem.Builder.html#file-java.lang.String-" target="_blank">file</a> and <a href="https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/media/playlists/PlaylistItem.Builder.html#mediaId-java.lang.String-" target="_blank">mediaId</a> properties.
4. Create a `List<PlaylistItem>` object called `playlist`. <br/><br/>For example: `List<PlaylistItem> playlist = new ArrayList<>();`<br/><br/>
5. Add `playlistItem` to `playlist`.
6. Use <a href="https://developer.jwplayer.com/sdk/android/reference/index.html?com/longtailvideo/jwplayer/configuration/PlayerConfig.Builder.html" target="_blank">PlayerConfig.Builder()</a> to create a `config` object that defines the properties of the player.
7. Assign `playlist` to `config`.
8. Set up `mPlayerView` with `config`.
9. Override `onDestroy()`, `onPause()`, `onResume()`, `onStart()`, and `onStop()`. This allows you to properly handle the Activity Lifecycle and to release the player from memory, when necessary.

<br/>

**app/res/layout/activity_main.xml**:

```xml
 <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="horizontal">

        <com.longtailvideo.jwplayer.JWPlayerView
            xmlns:jwp="http://schemas.android.com/apk/lib/com.longtailvideo.jwplayer"
            android:id="@+id/jwplayer"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintLeft_toLeftOf="parent"
            app:layout_constraintRight_toRightOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

    </LinearLayout>
```

<br/>

**app/java/MainActivity.java**:

```java
public class MainActivity extends AppCompatActivity {

    JWPlayerView mPlayerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mPlayerView = findViewById(R.id.jwplayer);
        PlaylistItem playlistItem = new PlaylistItem.Builder()
            .file("https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4")
            .mediaId("123acb4e")
            .build();

        List<PlaylistItem> playlist = new ArrayList<>();
        playlist.add(playlistItem);
        PlayerConfig config = new PlayerConfig.Builder()
            .playlist(playlist)
            .build();
        mPlayerView.setup(config);

    }
    @Override
    protected void onStart() {
        super.onStart();
        mPlayerView.onStart();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mPlayerView.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        mPlayerView.onPause();
    }

    @Override
    protected void onStop() {
        super.onStop();
        mPlayerView.onStop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mPlayerView.onDestroy();
    }
}
```
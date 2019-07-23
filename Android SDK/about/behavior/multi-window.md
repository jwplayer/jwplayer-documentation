# Multi-window mode

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

To ensure that your app supports multi-window mode, make the following changes to your code:

*  Add `JWPlayerView#onStart()` / `JWPlayerView#onResume()` / `JWPlayerView#onPause()` / `JWPlayerView#onStop()` invocations into your `Activity`'s or `Fragment`'s lifecycle.
* Add `configChanges` to all activities that are registered in your `AndroidManifest.xml`.

 ```xml
 <activity
  android:name=".MainActivity"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize|smallestScreenSize|screenLayout" />
```

For more information about multi-window mode please visit [Android Developers](https://developer.android.com/guide/topics/ui/multi-window?hl=en).
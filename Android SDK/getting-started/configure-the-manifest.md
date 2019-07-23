# Configure the manifest

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

To complete the SDK import process, use the following steps to configure the **AndroidManifest.xml** file:

<br/>

1. Open the **app/manifests/AndroidManifest.xml** file.
2. In the `<application>` element, use a `<meta-data/>` element to add your JW Player license key. If you are using the Demo app, be sure to uncomment the `<meta-data/>` element.
3. In all `<activity>` elements that will contain a player, add `android:configChanges="keyboard|keyboardHidden|orientation|screenSize"`.  This prevents the Activity from being destroyed when rotated. If you are using the Demo app, this is already included.
4. (Optional) If your app reads media content from the user's device, add `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>`. Android's <a href="https://developer.android.com/training/permissions/requesting" target="_blank">Request App Permissions</a> guide explains how requesting permissions works.

```xml
<application>
  ...
  <meta-data
    android:name="JW_LICENSE_KEY"
    android:value="abcD1234edf56GHiJK789lm0N" />
  <activity
    ...
    android:configChanges="keyboard|keyboardHidden|orientation|screenSize">
  </activity>
</application>
```

You have configured the manifest. You can now [add the player to your activity](../add-a-player-to-an-activity).
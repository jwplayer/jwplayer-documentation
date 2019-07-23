# Configure ProGuard

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

!!!
If you used the [Gradle](../download-the-sdk/#gradle) or [Demo](../download-the-sdk/#demo) approach to import the JW Player SDK for Android or the JW Player SDK for Android Open Source Demo, JW Player's `consumer-proguard.pro` configuration has been applied automatically. You can skip this article and [configure the manifest](../configure-the-manifest).
!!!

If you used the [Local](../download-the-sdk/#local) approach, no ProGuard configuration has been added. If you choose to obfuscate your code with ProGuard, add the following ProGuard configuration. This suggested ProGuard configuration ensures that the JW Player SDK for Android will work as intended.

```
ProGuard Configuration
-keepclassmembers class com.longtailvideo.jwplayer.** {
    @android.webkit.JavascriptInterface *;
}

# Block warnings about missing module classes
-dontwarn com.longtailvideo.jwplayer.**
-dontwarn com.google.ads.interactivemedia.**

# Classes get rejected without this when running the app if the app has been run through ProGuard
-keepattributes InnerClasses,EnclosingMethod

# Keep module indicator classes
-keep class com.longtailvideo.jwplayer.modules.** { *; }
```

You can now [configure the manifest](../configure-the-manifest).
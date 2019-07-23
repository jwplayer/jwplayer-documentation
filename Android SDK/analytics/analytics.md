# Analytics

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

The `setAnalyticsListener` function exposes ExoPlayer’s [AnalyticsListener](https://google.github.io/ExoPlayer/doc/reference/com/google/android/exoplayer2/analytics/AnalyticsListener.html). With access to the AnalyticsListener, plug-in developers can listen for analytics events.

**Code Example:**

```java
player.setAnalyticsListener(new AnalyticsListener() {
   ...
});
```

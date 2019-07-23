# QualityLevel

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

The `QualityLevel` class represents a quality variant in a HLS or DASH stream. Quality levels are sent to the developer via the `onQualityLevels()` callback.

## Quality API Methods

| Method                                  | Description                                                                                 |
|:----------------------------------------|:--------------------------------------------------------------------------------------------|
| `List<QualityLevel> getQualityLevels()` | Returns a list of the currently available quality levels                                    |
| `int getCurrentQuality()`               | Returns the index of the current quality level in the List returned by `getQualityLevels()` |
| `setCurrentQuality(int index)`          | Sets the quality level to the provided index                                                |

## Quality Callbacks

| Callback                                    | Description                                                                                                                               |
|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| `onLevels(final List<QualityLevel> levels)` | Fired when the list of quality levels is updated. Happens shortly after an item starts playing.                                           |
| `onLevelsChanged(int currentQuality)`       | Fired when the active quality level is changed. Happens in response to a user clicking the control bar or a call to `setCurrentQuality()` |

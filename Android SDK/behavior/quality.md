# QualityLevel

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

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
| onLevels([LevelsEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/LevelsEvent.html) levelsEvent) | Fired when the list of quality levels is updated. Happens shortly after an item starts playing.                                           |
| onLevelsChanged([LevelsChangedEvent](https://developer.jwplayer.com/sdk/android/reference/com/longtailvideo/jwplayer/events/LevelsChangedEvent.html) levelsChangedEvent)       | Fired when the active quality level is changed. Happens in response to a user clicking the control bar or a call to `setCurrentQuality()` |

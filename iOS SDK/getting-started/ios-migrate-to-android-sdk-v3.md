# JW Player iOS SDK Migration from v2.x to v3.x

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

This Migration Guide will walk you through all major changes from the 2.x versions of the JW Player iOS SDK.

## License Key & Download

Your 2.x license key will not work with the JW Player iOS SDK for versions 3.0 and above. You can get your new mobile-only license key from your JW Player account representative. You may currently use Cocoapods to update to 3.x.

## API Summary

The 3.x release of the JW Player iOS SDK contains some API changes, most importantly:

* All API callbacks now use the form `on<#CallbackName#>:(JWEvent *)event`. The `event` parameter will have the old callback's parameters as properties. This (as well as the introduction of the 'JWPlayerError' class) lays the groundwork for future updates.
  * For example, `onAdPause`'s `event` parameter has properties `tag`, `newState`, and `oldState`, which were previously passed in as parameters themselves.
* The player states are now represented with the `JWPlayerState` enum instead of strings.
* The `adConfig` property of the `JWConfig` has been renamed to `advertising` for consistency across all JW Player platforms.
* The `JWConfig`'s adSchedule property has been replaced with a `schedule` property in the config's `advertising` property.
* Skin customization is now handled with `JWSkinStyling` instead of the JWConfig's `premiumSkin` and `cssSkin` properties. See [Skinning section](../customization/building-skins.md) for more information.

## API Changes
### Added API
#### JWPlayerController

| Method                                    | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `pauseAd:(BOOL)state`                     | Pauses or resumes ad playback.                                                      |
| `loadFeed:(NSString *)feedUrl`            | Loads a new playlist feed into the player.                                          |
| `next`                                    | Tells JW Player to immediately play the next playlist item.                         |


#### JWConfig

| Property                                  | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `desc`                                    | A description of your video or audio item.                                          |
| `mediaId`                                 | Unique identifier of the item; applicable only when a a single file is set.         |
| `nextupOffset`                            | Configures when the Next Up card displays during playback.                          |
| `displayTitle`                            | Configures if the title of a media file should be displayed.                        |
| `displayDescription`                      | Configures if the description title of a media file should be displayed.            |
| `skin`                                    | The customization options for the player's skin.                                    |
| `logo`                                    | The configuration options for a clickable watermark that is overlayed on the video. |


#### JWAdConfig

| Property                                  | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `tag`                                     | The URL of the VAST tag to display.                                                 |
| `schedule`                                | An array of JWAdBreak objects that provides info about ad breaks.                  |
| `rules`                                   | Used to control the frequency of ad playback.                                       |


#### JWPlaylistItem

| Property                                  | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `recommendations`                         | URL to a feed that contains related items for a particular playlist item.           |


#### JWRelatedConfig

| Property                                  | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `displayMode`                             | Configure the recommendations user interface (Shelf or overlay).                    |

#### JWPlayerError
| Class                                  | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
|`JWPlayerError` | A subclass of `NSError`. A `JWPlayerError` can thus be safely cast as an `NSError` without needing to further modify your code.       |



### Modified API
#### Method Signature Changes
| 2.x                                       | 3.x                                     | Notes                          |
|:------------------------------------------|:----------------------------------------|:------------------------------------------------|
| `load:(NSString *)file`                   | `loadFeed:(NSString *)feedUrl`          |                         |
| `loadPlaylist:(NSArray *)playlist`        | `load:(NSArray <JWPlaylistItem *> *)playlist` |                   |
| `seek:(NSInteger)position`                | `seek:(NSUInteger)position`             | Changed parameter type.                         |


#### Name Changes
| 2.x                                       | 3.x                                     | Notes                           |
|:------------------------------------------|:----------------------------------------|:--------------------------------|
| `adClient`                                | `client`                                |                                 |
| `adConfig`                                | `advertising`                           |                                 |
| `adSchedule`                              | `schedule`                              |                                 |
| `captionStyling`                          | `captions`                              |                                 |
| `NSInteger currentQualityLevel`           | `NSUInteger currentQuality`             | Changed property name and type. | 
| `defaultValue`                            | `defaultTrack`                          |                                 |
| `fontColor`                               | `color`                                 |                                 |
| `imaSettings`                             | `googimaSettings`                       |                                 |
| `isInFullscreen`                          | `fullscreen`                            |                                 |
| `JWAdConfig`                              | `JWAdvertising`                         | Changed class name.             |
| `levels`                                  | `qualityLevels`                         |                                 |
| `BOOL nonlinear`                          | `JWAdType type`                         | Changed property name and type. |
| `NSNumber *playbackPosition`              | `CGFloat position`                      | Changed property name and type. |
| `playerState`                             | `state`                                 |                                 |
| `relatedConfig`                           | `related`                               |                                 |
| `stretch`                                 | `stretching`                            |                                 |
|

#### Type Changes
| Name                   |2.x           | 3.x                          | Notes                           |
|:-----------------------|:-------------|:-----------------------------|:--------------------------------|
| `bitRateUpperBound`    | `double`     | `CGFloat`                    |                                 |
| `buffer`               | `NSInteger`  | `NSUInteger`                 |                                 |
| `currentAudioTrack`    | `NSInteger`  | `NSUInteger`                 |                                 |
| `currentCaptions`      | `NSInteger`  | `NSUInteger`                 |                                 |
| `currentQualityLevel`  | `NSInteger`  | `NSUInteger currentQuality`  | Changed property name and type. | 
| `duration`             | `double`     | `CGFloat`                    |                                 |
| `nonlinear`            | `BOOL`       | `JWAdType type`              | Changed property name and type. |
| `playbackPosition`     | `NSNumber*`  | `CGFloat position`           | Changed property name and type. |
| `preload`              | `BOOL`       | `JWPreload`                  |                                 |
| `skipOffset`           | `NSInteger`  | `NSUInteger skipOffset`      |                                 |

### Removed API Methods

| Method                                    | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `loadConfig:`                             | Loads a new JWConfig object into the player.                                        |
| `pictureInPictureDisabled`                | Boolean value that determines whether the video should allow Picture In Picture display.|
| `enterFullScreen`                         | Switches the player to full screen mode.                                            |
| `exitFullScreen`                          | Switches the player to inline mode.                                                 |
| `togglePictureInPicture`                  | Toggles the player into and out of Picture In Picture display.                      |
| `timeSliderAbove`                         | Sets the timeslider above the control bar buttons at all player sizes.              |
| `premiumSkin`                             | Sets a premium JW Player skin to use with the player.                               |
| `cssSkin`                                 | A url to a CSS file that contains a skin to be used during player setup.            |


## Callback Changes
### Modified Callbacks

All callbacks now use the form `onCallbackName:(JWEvent *)event`.


### Renamed Callbacks

| 2.x                                       | 3.x                                     |
|:------------------------------------------|:----------------------------------------|
| `onOpenRelatedOverlay:`                   | `onRelatedOpen:`                        |
| `onCloseRelatedOverlay:`                  | `onRelatedClose:`                       | 


### Removed Callbacks

| Callback                                                   |
|:-----------------------------------------------------------|
| `onCaptionsChange:`                                        |
| `onQualityLevels:`                                         |
| `onQualityChange:`                                         |
| `onVisualQuality:`                                         |
| `onPictureInPicture:`                                      |

## Enum Changes
| 2.x                                       | 3.x                                     |
|:------------------------------------------|:----------------------------------------|
| `JWFairPlay` (JWEncryption)               | `JWEncryptionFairPlay`                  |
| `none` (JWEdgeStyle)                      | `JWEdgeStyleNone`                       |
| `dropshadow` (JWEdgeStyle)                | `JWEdgeStyleDropshadow`                 |
| `raised` (JWEdgeStyle)                    | `JWEdgeStyleRaised`                     |
| `depressed` (JWEdgeStyle)                 | `JWEdgeStyleDepressed`                  |
| `uniform` (JWEdgeStyle)                   | `JWEdgeStyleUniform`                    |
| `JWRelatedOpenMethod`                     | `JWRelatedMethod`                       |
| `JWRelatedCompleteAction`                 | `JWRelatedOnComplete`                   |
| `JWStretchUniform` (JWStretching)         | `JWStretchingUniform`                   |
| `JWStretchExactFit` (JWStretching)        | `JWStretchingExactFit`                  |
| `JWStretchFill` (JWStretching)            | `JWStretchingFill`                      |
| `JWStretchNone` (JWStretching)            | `JWStretchingNone`                      |
| `vastPlugin` (JWAdClient)                 | `JWAdClientVast`                        |
| `googIMA` (JWAdClient)                    | `JWAdClientGoogima`                     |
| `freewheel` (JWAdClient)                  | `JWAdClientFreewheel`                   |

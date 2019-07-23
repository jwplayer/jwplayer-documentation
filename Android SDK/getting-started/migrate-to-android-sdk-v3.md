# JW Player SDK for Android Migration from v2.x to v3.x

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

This Migration Guide will walk you through all major changes from the 2.x versions of the JW Player SDK for Android.

## License Key & Download

Your 2.x license key will not work with the JW Player SDK for Android 3.0 and above. You can get your new mobile-only license key from your JW Player account representative. You may currently use Maven to update to 3.x, or your account rep can also provide you an AAR file. Starting July 9th, 2018 both the AAR & 3.x license keys will be available for download in your JW Player Dashboard.

## API Summary

The 3.x release of the JW Player SDK for Android contain some API changes, most importantly:

* The time unit in `seek()`, `getPosition()`, `getDuration()`, `onTime(TimeEvent)`, `onAdTime(AdTimeEvent)`, `onSeek(SeekEvent)`, `onSeeked(SeekedEvent)`, and `onBufferChange(BufferChangeEvent)` has changed from milliseconds to seconds as a `double`.
* All API callbacks now use the form `onCallbackName(CallbackNameEvent callbackNameEvent)`.  This will allow JW Player to add more callback parameters without breaking existing implementations or maintaining several different implementations of the same callback.  If you were already using an OnCallbackNameV2 listener removing the V2 should make your code work with 3.x.
* The Ad class has been removed and rolled into the AdBreak class.  The AdBreak has a constructor `AdBreak(String offset, AdSource adSource, String... tags)` that can be used to easily combine Ad and AdBreak creation.

## API Changes
### Added API Methods

| Method                                    | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `void next()`                             | Tells JW Player to immediately play the next playlist item.                         |
| `void pauseAd()`                          | Pauses ad playback.                                                                 |
| `void pauseAd(boolean state)`             | Pauses or resumes ad playback.                                                      |
| `openSharingOverlay()`                    | Opens the sharing plugin. This will also pause content if it is triggered during playback. |
| `void closeSharingOverlay()`              | Closes the sharing plugin if it is opened. This will resume playback if the sharing overlay was triggered during content. |
| `PlaylistItem getPlaylistItem()`          | Returns the currently playing PlaylistItem.                                         |
| `int getBuffer()`                         | Gets the current buffer percentage of the loaded media.                             |



### Modified API Methods

| 1.x                                       | 2.x                                     | Description of Changes                          |
|:------------------------------------------|:----------------------------------------|:------------------------------------------------|
| `long getPosition()`                      | `double getPosition()`                  | Changed time unit from milliseconds to seconds. |
| `long getDuration()`                      | `double getDuration()`                  | Changed time unit from milliseconds to seconds. |
| `long getAdPosition()`                    | `double getAdPosition()`                | Changed time unit from milliseconds to seconds. |
| `void seek(long position)`                | `void seek(double position)`            | Changed time unit from milliseconds to seconds. |
| `VisualQuality getVisualQuality()`        | `VisualQualityEvent getVisualQuality()` | Changed class name.                             |



### Removed API Methods

| Method                                    | Description                                                                         |
|:------------------------------------------|:------------------------------------------------------------------------------------|
| `void play(boolean state)`                | Use `play()` to play and `pause()` to pause playback.                               |
| `void pause(boolean state)`               | Use `pause()` to pause and `play()` to play playback.                               |
| `void seek(int position)`                 | `seek()` uses seconds as a `double` now.                                            |


## Configuration Changes

* `CaptionsConfig`, `SkinConfig`, `LogoConfig`, and `RelatedConfig` have been broken out of `PlayerConfig`, these classes have their own builders and can be assigned to a `PlayerConfig`.
* `SharingConfig` has been added to allow configuration of the Sharing plugin.

### Added XML Configuration Options

| Option                                  | Description                                                                         |
|:----------------------------------------|:------------------------------------------------------------------------------------|
| `jw_nextUpOffset`                       | How many seconds before content playback ends should the Next Up display show for.  |
| `jw_display_title`                      | Whether to display the media title before playback.                                 |
| `jw_display_description`                | Whether to display the media description before playback.                           |
| `jw_nextUpDisplay`                      | Whether to display the Next Up popup before playback ends.                          |
| `jw_skin_controlbar_text`               | The color of any plain text in the control bar, such as the time.                   |
| `jw_skin_controlbar_icons`              | The default, inactive color of all icons in the control bar. This option also controls the color of the play, pause, and replay icons in the inactive and complete states. |
| `jw_skin_controlbar_iconsActive`        | The color of hovered or selected icons in the control bar.                          |
| `jw_skin_controlbar_background`         | The background color of the control bar and the volume slider. The default background is transparent. |
| `jw_skin_timeslider_progress`           | The color of the bar in the time slider filled in from the beginning of the video through the current position. The buffer region of the control bar is 50% of the opacity of this color. The color of the volume slider is also controlled by this option. |
| `jw_skin_timeslider_rail`               | The color of the base of the timeslider, known as the rail. |
| `jw_skin_menus_text`                    | The color of inactive, default text in menus and the Next Up overlay. |
| `jw_skin_menus_textActive`              | The color of hovered or selected text in menus. This option also controls the text color in the Discover overlay and the hover state text color in the Next Up overlay. |
| `jw_skin_menus_background`              | The background color of menus and the Next Up overlay. |
| `jw_skin_tooltips_text`                 | The text color of tooltips. |
| `jw_skin_tooltips_background`           | The background color of tooltips. |
| `jw_related_displayMode`                | Configure the recommendations user interface. Does not apply to manual playlists.  Must be one of the RELATED_DISPLAY_MODE_ constants. |
| `jw_related_onClick`                    | The behavior when a related video is selected.  Must be one of the RELATED_DISPLAY_ON_CLICK_ constants. | 
| `jw_sharing_link`                       | URL to display in the video link field. |
| `jw_sharing_code`                       | Embed code to display in the embed code field. If no code is set, the field is not shown. |
| `jw_sharing_heading`                    | Short, instructive text to display at the top of the sharing screen. |



### Modified XML Configuration Options

| Option                                  | Description                                                                         |
|:----------------------------------------|:------------------------------------------------------------------------------------|
| `jw_mute`                               | Changed type to boolean.                                                            |
| `jw_autostart`                          | Changed type to boolean.                                                            |
| `jw_repeat`                             | Changed type to boolean.                                                            |
| `jw_controls`                           | Changed type to boolean.                                                            |
| `jw_preload`                            | Changed type to boolean.                                                            |
| `jw_captions_fontSize`                  | Changed type to integer.                                                            |
| `jw_captions_fontOpacity`               | Changed type to integer.                                                            |
| `jw_captions_backgroundOpacity`         | Changed type to integer.                                                            |
| `jw_captions_windowOpacity`             | Changed type to integer.                                                            |
| `jw_logo_hide`                          | Changed type to boolean.                                                            |
| `jw_logo_margin`                        | Changed type to integer.                                                            |


## Callback Changes
### Added Callbacks

| Callback                                    | Description                                                                     |
|:--------------------------------------------|:--------------------------------------------------------------------------------|
| `void onReady(ReadyEvent)`                  | Signifies when the player has been initialized and is ready for playback. This is the earliest point at which any API calls should be made. |
| `void onAdBreakStart(AdBreakStartEvent)`    | Fires after the ad request and immediately before the ad is loaded into the player. Only fires before the first ad inside of an ad break. |
| `void onAdBreakEnd(AdBreakEndEvent)`        | Fires after the ad request and immediately before the ad is loaded into the player. Only fires before the first ad inside of an ad break. |
| `void onSharingOpen(SharingOpenEvent)`      | Fires when the Sharing plugin is opened.                                        |
| `void onSharingClose(SharingCloseEvent)`    | Fires when the Sharing plugin is closed.                                        |
| `void onSharingClick(SharingClickEvent)`    | Triggered whenever somebody shares content from within the sharing plugin.      |
| `void onSharingClick(SharingClickEvent)`    | Triggered whenever somebody shares content from within the sharing plugin.      |



### Modified Callbacks

All callbacks now use the form `onCallbackName(CallbackNameEvent callbackNameEvent)`.

### Removed Callbacks

| Callback                                                   |
|:-----------------------------------------------------------|
| `void onCaptionsChange(int track, List<Caption> captions)` |
| `void onAudioTrackChange(int currentTrack)`                |
| `void onQualityChange(int currentQuality)`                 |
| `void onQualityLevels(final List<QualityLevel> levels)`    |

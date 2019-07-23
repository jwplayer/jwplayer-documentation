# ExoPlayer customization

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

To customize the `ExoPlayer`, use the `ExoPlayerSettings` reference that can be retrieved from `JWPlayerView`.

## Look-Ahead buffer customization
To customize the look-ahead buffer size, you can create an object that implements `com.google.android.exoplayer2.LoadControl` and pass that object through `ExoPlayerSettings`

## Example of usage

```java
// Create a LoadControl object
LoadControl loadControl = new LoadControl() {
            @Override
            public void onPrepared() {
                
            }

            @Override
            public void onTracksSelected(Renderer[] renderers, TrackGroupArray trackGroups, TrackSelectionArray trackSelections) {

            }

            @Override
            public void onStopped() {

            }

            @Override
            public void onReleased() {

            }

            @Override
            public Allocator getAllocator() {
                return null;
            }

            @Override
            public long getBackBufferDurationUs() {
                return 0;
            }

            @Override
            public boolean retainBackBufferFromKeyframe() {
                return false;
            }

            @Override
            public boolean shouldContinueLoading(long bufferedDurationUs, float playbackSpeed) {
                return false;
            }

            @Override
            public boolean shouldStartPlayback(long bufferedDurationUs, float playbackSpeed, boolean rebuffering) {
                return false;
            }
        };
// Set it up to the player right before JWPlayer#setup() is called
player.getExoPlayerSettings().setLoadControl(loadControl);
// Setup the player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
	//...
	.build();
player.setup(playerConfig);
```

## Chunk less preparation
To enable chunk less preparation use the `ExoPlayerSettings` reference that can be retrieved from `JWPlayerView`. Chunk less preparation is disabled by default.

## Example of usage

```java
player.getExoPlayerSettings().enableChunkLessPreparation();
// Setup the player config
PlayerConfig playerConfig = new PlayerConfig.Builder()
	//...
	.build();
player.setup(playerConfig);

```

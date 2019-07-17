# Analytics

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

JW Player enables plugin developers to listen for media playback and VAST/VPAID native ads analytics events.

!!!important
Analytics events are not available for `AVPlayer` instances instantiated by IMA or FreeWheel plugins.
!!!

To receive analytics events, include the `JWAVPlayerAnalyticsDelegate` in a class that can be used as a delegate. Then, implement delegated methods. 

**Code Example:**

```Obj-C
@interface JWAVPlayerAnalyticsObserver : NSObject <JWAVPlayerAnalyticsDelegate>

// implement the methods
- (void)playbackRateDidChange:(CGFloat)rate {}
- (void)playerStatusDidChange:(AVPlayerStatus)status {}
- (void)playerItemDidChange:(AVPlayerItem *)item {}
- (void)playerErrorDidChange:(NSError *)error {}
- (void)playerLayerVideoRectDidChange:(CGRect)videoRect {}

//set the class as a delegate into the player
self.player.analyticsDelegate = [JWAVPlayerAnalyticsObserver new];
```

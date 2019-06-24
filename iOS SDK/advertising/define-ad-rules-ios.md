# Define ad rules

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=android">

<sup>Last Updated: June 26, 2019</sup>

After [adding ads](../monetize-your-content) to your content, you can define ad rules that control how often a viewer sees ads while viewing your video content. <strong>Ad rules can be used only when using a VAST (`AdSource.VAST`) ad client</strong>.

* If you are publishing playlists that consist of short-duration videos, like tutorials or product reviews, you can define `startOn` (the first playlist item allowing ad playback) and `frequency` (the regularity of ads within a playlist). 
* If you are publishing long-form content, like webinars or interviews, you can define `startOnSeek` (which determines if a returning visitor is served a pre-roll before resuming content playback) and `timeBetweenAds` (which sets the minimum time that must elapse between ads playback).

You can read <a href="https://support.jwplayer.com/articles/ad-rules-reference" target="_blank">Ad rules reference</a> to learn more about how each ad rule impacts a user's experience.

<br/>

## Implementation

Use the following steps and code samples to define ad rules for the [player your added to your view](../../getting-started/add-a-player-to-your-view) with an [ad schedule](../monetize-your-content).

1. Create an <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdRules.html" target="_blank">JWAdRules</a> object named `adRules`.
2. Configure the properties of the `adRules` object for your use case.
3. Assign `adRules` to the <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdConfig.html#//api/name/rules" target="_blank">rules</a> property of the `JWAdConfig`. This adds the ad schedule to the player's `config` property.

<br/>

## Examples

### Example 1: Short-form content

The following example illustrates a short-form media item with a pre-roll. The first ad plays before the first playlist item (`startOn: 1`). Then, subsequent pre-rolls appear for every third playlist item (`frequency: 3`), starting with the fourth playlist item.

```Obj-C

@property (nonatomic) JWPlayerController *player;
@property (nonatomic, weak) IBOutlet UIView *playerContainerView;
@end

@implementation ObjCViewController


- (void)viewDidLoad {
    [super viewDidLoad];

    JWAdBreak *adBreak = [JWAdBreak initWithTags:@"https://www.domain.com/adtag.xml" offset:@"pre"];

    JWAdRules *adRules = [JWAdRules new];
    adRules.startOn = 1;
    adRules.frequency = 3;

    JWPlaylistItem *item1 = [[JWPlaylistItem alloc] init];
    item1.file = @"https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4";
        
    JWPlaylistItem *item2 = [[JWPlaylistItem alloc] init];
    item2.file = @"https://content.jwplatform.com/videos/123acb4e-Ty98xW76.mp4";
        
    JWPlaylistItem *item3 = [[JWPlaylistItem alloc] init];
    item3.file = @"https://content.jwplatform.com/videos/234acb5f-Uvw98X76.mp4";
        
    JWPlaylistItem *item4 = [[JWPlaylistItem alloc] init];
    item4.file = @"https://content.jwplatform.com/videos/345gcb6f-Xpw91X77.mp4";
        
    JWPlaylistItem *item5 = [[JWPlaylistItem alloc] init];
    item5.file = @"https://content.jwplatform.com/videos/7gH89ij0-Q13r56ST.mp4";

    JWConfig *config = [JWConfig configWithContentURL:@"http://example.com/hls.m3u8"];
    config.advertising = [JWAdConfig new];
    config.advertisting.client = JWAdClientVast;
    config.advertising.schedule = @[adBreak];
    config.advertising.rules = adRules;
    config.playlist = @[item1, item2, item3, item4, item5];
    self.player = [[JWPlayerController alloc] initWithConfig:config];
}

- (void)viewDidAppear {
    [super viewDidAppear];
    [self.view addSubview:self.player.view];
}
```
```Swift

class ViewController: UIViewController {
    @IBOutlet weak var playerContainerView: UIView!
    var player: JWPlayerController?

    override func viewDidLoad() {
        super.viewDidLoad()

        var adBreak = JWAdBreak(tag: "https://www.domain.com/adtag.xml", offset: "pre")

        var adRules = JWAdRules()
        adRules.startOn = 1
        adRules.frequency = 3

        var item1 = JWPlaylistItem()
        item1.file = "https://content.jwplatform.com/videos/123acb4e-Zy98xW76.mp4"
                
        var item2 = JWPlaylistItem()
        item2.file = "https://content.jwplatform.com/videos/123acb4e-Ty98xW76.mp4"
        
        var item3 = JWPlaylistItem()
        item3.file = "https://content.jwplatform.com/videos/234acb5f-Uvw98X76.mp4"
        
        var item4 = JWPlaylistItem()
        item4.file = "https://content.jwplatform.com/videos/345gcb6f-Xpw91X77.mp4"
        
        var item5 = JWPlaylistItem()
        item5.file = "https://content.jwplatform.com/videos/rsjqlp4T-poiy5QyW.mp4"
        item5.title = "Origami birds"
        item5.image = "https://content.jwplatform.com/videos/7gH89ij0-Q13r56ST.mp4"

        var config = JWConfig(contentURL: "http://example.com/hls.m3u8")
        config.advertising = JWAdConfig()
        config.advertising.client = .vast
        config.advertising.schedule = [adBreak]
        config.advertising.rules = adRules
        config.playlist = [item1, item2, item3, item4, item5]
        player = JWPlayerController(config: config)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        playerContainerView.addSubview(player!.view)
    }
}
```

### Example 2: Long-form content

The following example illustrates a long-form media item with multiple ad breaks. The `startOnSeek` and `timeBetweenAds` (set to 300 seconds) ad rules have been defined.

```Obj-C
@property (nonatomic) JWPlayerController *player;
@property (nonatomic, weak) IBOutlet UIView *playerContainerView;
@end

@implementation ObjCViewController


- (void)viewDidLoad {
    [super viewDidLoad];

    JWAdBreak *adBreak = [JWAdBreak initWithTags:@"https://www.domain.com/adtag.xml" offset:@"pre"];

    JWAdBreak *adBreak2 = [JWAdBreak initWithTags:@"https://www.domain.com/adtag-mid-roll1.xml" offset:@"10"];

    JWAdBreak *adBreak3 = [JWAdBreak initWithTags:@"https://www.domain.com/adtag-mid-roll2.xml" offset:@"00:00:15:000"];

    JWAdBreak *adBreak4 = [JWAdBreak initWithTags:@"https://www.domain.com/adtag-mid-roll3.xml" offset:@"25%"];

    JWAdBreak *adBreak5 = [JWAdBreak initWithTags:@"https://www.domain.com/adtag-post-roll.xml" offset:@"post"];

    JWAdRules *adRules = [JWAdRules new];
    adRules.startOnSeek = 1;
    adRules.timeBetweenAds = JWAdShownPre;

    JWConfig *config = [JWConfig configWithContentURL:@"http://example.com/hls.m3u8"];
    config.advertising = [JWAdConfig new];
    config.advertising.client = JWAdClientVast;
    config.advertising.schedule = @[adBreak,
        adBreak2,
        adBreak3,
        adBreak4,
        adBreak5];
    config.advertising.rules = adRules;
    self.player = [[JWPlayerController alloc] initWithConfig:config];
}

- (void)viewDidAppear {
    [super viewDidAppear];
    [self.view addSubview:self.player.view];
```
```Swift
class ViewController: UIViewController {
    @IBOutlet weak var playerContainerView: UIView!
    var player: JWPlayerController?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        var adBreak = JWAdBreak(tag: "https://www.domain.com/adtag.xml", offset: "pre")

        var adBreak2 = JWAdBreak(tag: "https://www.domain.com/adtag-mid-roll1.xml", offset: "10")

        var adBreak3 = JWAdBreak(tag: "https://www.domain.com/adtag-mid-roll2.xml", offset: "00:00:15:000")

        var adBreak4 = JWAdBreak(tag: "https://www.domain.com/adtag-mid-roll3.xml", offset: "25%")

        var adBreak5 = JWAdBreak(tag: "https://www.domain.com/adtag-post-roll.xml", offset: "post")
        
        var adRules = JWAdRules()
        adRules.startOnSeek = .pre
        adRules.timeBetweenAds = 300
        
        var config = JWConfig(contentURL: "http://example.com/hls.m3u8")
        config.size = CGSize(width: 400, height: 300)
        config.advertising = JWAdConfig()
        config.advertising.client = .vast
        config.advertising.schedule = [adBreak, adBreak2, adBreak3, adBreak4, adBreak5]
        config.advertising.rules = adRules
        player = JWPlayerController(config: config)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        playerContainerView.addSubview(player!.view)
    }
}
```
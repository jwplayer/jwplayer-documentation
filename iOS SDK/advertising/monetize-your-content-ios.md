# Monetize your content

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

<sup>Last updated: June 26, 2019</sup>

The most basic advertising implementation is to run a single VAST ad tag as a pre-roll that runs before each playlist.

!!!important
If you are using IMA ad tags, follow the steps in [Enable Google IMA](../enable-google-ima). If you are using FreeWheel, follow the steps in [Enable FreeWheel Ad Manager](../enable-freewheel-ad-manager).
!!!

<br/>

## Add a pre-roll ad to a player

Use the following steps to add a pre-roll ad to <a href="../../getting-started/add-a-player-to-your-view" target="_blank">the player you added to your view</a>:

1. Instantiate a <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdBreak.html" target="_blank">JWAdBreak</a> object called `adBreak`. At a minimum, you must assign an ad tag URL to the `initWithTags` and `offset` properties.
2. Instantiate a <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdConfig.html" target="_blank">JWAdConfig</a> object and assign it to `config.advertising`.
3. Define `config.advertising.client` as `JWAdClientVast` (Obj-C) or `.vast` (Swift). This defines the ad client.
4. Add `adBreak` to the <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdConfig.html#//api/name/schedule" target="_blank">schedule</a> array property of the `JWAdConfig`. This adds the ad schedule to the player's `config` property.

<br/>

```Obj-C
@property (nonatomic) JWPlayerController *player; 
@property (nonatomic, weak) IBOutlet UIView *playerContainerView;
@end

@implementation ObjCViewController


- (void)viewDidLoad {
    [super viewDidLoad];

    JWAdBreak *adBreak = [JWAdBreak initWithTags:@"https://www.domain.com/adtag.xml" offset:@"pre"];

    JWConfig *config = [JWConfig configWithContentURL:@"http://example.com/hls.m3u8"];
    config.advertising = [JWAdConfig new];
    config.advertisting.client = JWAdClientVast;
    config.advertising.schedule = @[adBreak];
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

        var config = JWConfig(contentURL: "http://example.com/hls.m3u8")
        config.advertising = JWAdConfig()
        config.advertising.client = .vast
        config.advertising.schedule = [adBreak]
        player = JWPlayerController(config: config)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        playerContainerView.addSubview(player!.view)
    }
}
```

You can build upon this basic implementation by [adding more ad breaks](#add-multiple-ad-breaks-to-a-player) or [defining ad rules](../define-ad-rules).

<br/>

<a name="add-multiple-ad-breaks-to-a-player"></a> 

## Add multiple ad breaks to a player

Use the following steps to add multiple ad breaks to the previous VAST pre-roll example:

1. Instantiate an additional `JWAdBreak` object.
2. Assign an ad tag to the `tag` property.
3. When defining the <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdBreak.html#//api/name/offset" target="_blank">offset</a> property, choose one of the following values to schedule a mid-roll or post-roll ad:<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (String) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{timecode}**: (String) Ad plays at a specific time, in `hh:mm:ss:mmm` format.<br/>&nbsp;&nbsp;- **{xx%}**: (String) Ad plays after xx% of the content has played.<br/><br/>**Post-roll**<br/>&nbsp;&nbsp;- `post`: (String) Ad plays after the content.<br/><br/>
4. Add the additional `AdBreak` object to the `schedule` array.

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

    JWConfig *config = [JWConfig configWithContentURL:@"https://example.com/hls.m3u8"];
    config.advertising = [JWAdConfig new];
    config.advertising.client = JWAdClientVast;
    config.advertising.schedule = @[adBreak,
        adBreak2,
        adBreak3,
        adBreak4,
        adBreak5];
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

        var adBreak2 = JWAdBreak(tag: "https://www.domain.com/adtag-mid-roll1.xml", offset: "10")

        var adBreak3 = JWAdBreak(tag: "https://www.domain.com/adtag-mid-roll2.xml", offset: "00:00:15:000")

        var adBreak4 = JWAdBreak(tag: "https://www.domain.com/adtag-mid-roll3.xml", offset: "25%")

        var adBreak5 = JWAdBreak(tag: "https://www.domain.com/adtag-post-roll.xml", offset: "post")

        var config = JWConfig(contentURL: "https://example.com/hls.m3u8")
        config.advertising = JWAdConfig()
        config.advertising.client = .vast
        config.advertising.schedule = [adBreak, adBreak2, adBreak3, adBreak4, adBreak5]
        player = JWPlayerController(config: config)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        playerContainerView.addSubview(player!.view)
    }
}
```
You can build on this basic implementation by [defining ad rules](../define-ad-rules).

# Enable FreeWheel Ad Manager

The JW Player SDK for iOS integrates FreeWheel's SDK. With this SDK integration, you can use the FreeWheel ad client to request ads.

<br/>

## Get required items

Before you add the FreeWheel Ad Manager to your app, you need the following values from your FreeWheel account.  If you do not know where to find these values, contact your FreeWheel account representative.

| Parameter | Description | Example |
| --- | --- | --- |
| `mediaId` | FreeWheel identifier of a particular media item | `DemoVideoGroup.01` |
| `networkId` | FreeWheel identifier of a network | `96749` |
| `profileId` | FreeWheel identifier of a particular application environment | `96749:global-cocoa` |
| `sectionId` | FreeWheel identifier of a location where the video content plays | `DemoSiteGroup.01` |
| `serverId` | URL of FreeWheel ad server | `http://demo.v.fwmrm.net/ad/g/1` |

<br/>

## Add the FreeWheel Ad Manager dependency

To begin using the FreeWheel ad client, you must first add a dependency to your app.

!!!important
If you are using Swift instead of Objective-C, use the <a href="https://hub.freewheel.tv/display/techdocs/Use+AdManager+in+a+Swift+Project" target="_blank">FreeWheel guide</a> to set up your library.
!!!

1. From your FreeWheel representative, request the FreeWheel Ad Manager SDK for iOS that is bitcode-enabled with dynamic libraries.
2. From within Xcode, expand the project in the navigator.
3. Drag FreeWheel's **AdManager.framework** file from your desktop into the **Frameworks** folder in Xcode. In the pop-up screen that appears, be sure to select your target.
4. Click **Finish**.
5. Select the target in the project editor.
6. Click **General**.
7. Verify that the **AdManager.framework** appears in both the **Embedded Binaries** and **Linked Frameworks and Libraries** sections. <br/><br/>If the framework does not appear in both sections, delete the instance of the framework. Then, drag the **AdManager.framework** folder from the Xcode navigation to the **Embedded Binaries** section. The framework should appear in both sections.<br/>
8. Highlight your target and in **Build Settings > Linking > Other Linker Flags**, add `-ObjC`. This is <a href="https://hub.freewheel.tv/pages/viewpage.action?spaceKey=techdocs&title=How+to+Compile+FreeWheel+iOS+SDK+and+Optional+Modules+into+App#HowtoCompileFreeWheeliOSSDKandOptionalModulesintoApp-Enable-ObjCLinkerFlag" target="_blank">required to compile the app against the FreeWheel iOS SDK</a>.

<br/>

## Add a pre-roll ad to a player

Use the following steps to add a pre-roll ad to [the player you added to your view](../../getting-started/add-a-player-to-your-view/):

1. Instantiate a <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdBreak.html" target="_blank">JWAdBreak</a> object called adBreak. At a minimum, you must assign an ad tag URL to the `tag` property
2. Create a `JWFreeWheelConfig` object called `fwConf` that contains your FreeWheel account settings.
3. Instantiate a <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdConfig.html" target="_blank">JWAdConfig</a> object and assign it to `config.advertising`.
4. Define `config.advertising.client` as `JWAdClientFreewheel` (Obj-C) or `.freewheel` (Swift). This defines the ad client.
5. Assign `adBreak` to the <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdConfig.html#//api/name/schedule" target="_blank">schedule</a> property of the `JWAdConfig`. This adds the ad schedule to the player's `config` property.

```Obj-C
@property (nonatomic) JWPlayerController *player;
@property (nonatomic, weak) IBOutlet UIView *playerContainerView;
@end

@implementation ObjCViewController


- (void)viewDidLoad {
    [super viewDidLoad];

    JWAdBreak *adBreak = [JWAdBreak initWithTags:@"https://www.domain.com/adtag.xml" offset:@"pre"];

    JWFreewheelConfig *fwConf = [[JWFreewheelConfig alloc] init];
    fwConf.mediaId = @"DemoVideoGroup.01";
    fwConf.serverId = @"http://demo.v.fwmrm.net/ad/g/1";
    fwConf.profileId = @"96749:global-cocoa";
    fwConf.sectionId = @"DemoSiteGroup.01";
    fwConf.networkId = 96749;

    JWConfig *config = [JWConfig configWithContentURL:@"http://example.com/hls.m3u8"];
    config.advertising = [JWAdConfig new];
    config.advertisting.client = JWAdClientFreewheel;
    config.advertising.freewheel = fwConf;
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

        var fwConf = JWFreewheelConfig()
        fwConf.mediaId = "DemoVideoGroup.01"
        fwConf.serverId = "http://demo.v.fwmrm.net/ad/g/1"
        fwConf.profileId = "96749:global-cocoa"
        fwConf.sectionId = "DemoSiteGroup.01"
        fwConf.networkId = 96749

        var config = JWConfig(contentURL: "http://example.com/hls.m3u8")
        config.advertising = JWAdConfig()
        config.advertising.client = .freewheel
        config.advertising.schedule = [adBreak]
        player = JWPlayerController(config: config)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        playerContainerView.addSubview(player!.view)
    }
}
```

<br/>

## Add multiple ad breaks to a player

Use the following steps to add multiple ad breaks to the previous pre-roll example:

1. Instantiate an additional `JWAdBreak` object.
2. Assign an ad tag to the `tag` property.
3. When defining the <a href="https://developer.jwplayer.com/sdk/ios/reference/Classes/JWAdBreak.html#//api/name/offset" target="_blank">offset</a> property, choose one of the following values to schedule a mid-roll ad. **Post-roll ads are not currently supported for FreeWheel ad implementations.**<br/><br/>**Mid-roll**<br/>&nbsp;&nbsp;- **{number}**: (String) Ad plays after the specified number of seconds.<br/>&nbsp;&nbsp;- **{timecode}**: (String) Ad plays at a specific time, in `hh:mm:ss:mmm` format.<<br/><br/>
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

    JWFreewheelConfig *fwConf = [[JWFreewheelConfig alloc] init];
    fwConf.mediaId = @"DemoVideoGroup.01";
    fwConf.serverId = @"http://demo.v.fwmrm.net/ad/g/1";
    fwConf.profileId = @"96749:global-cocoa";
    fwConf.sectionId = @"DemoSiteGroup.01";
    fwConf.networkId = 96749;

    JWConfig *config = [JWConfig configWithContentURL:@"http://example.com/hls.m3u8"];
    config.advertising = [JWAdConfig new];
    config.advertisting.client = JWAdClientFreewheel;
    config.advertising.freewheel = fwConf;
    config.advertising.schedule = @[adBreak,
        adBreak2,
        adBreak3];
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

        var fwConf = JWFreewheelConfig()
        fwConf.mediaId = "DemoVideoGroup.01"
        fwConf.serverId = "http://demo.v.fwmrm.net/ad/g/1"
        fwConf.profileId = "96749:global-cocoa"
        fwConf.sectionId = "DemoSiteGroup.01"
        fwConf.networkId = 96749

        var config = JWConfig(contentURL: "http://example.com/hls.m3u8")
        config.advertising = JWAdConfig()
        config.advertising.client = .freewheel
        config.advertising.schedule = [adBreak, adBreak2, adBreak3]
        player = JWPlayerController(config: config)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        view.addSubview(player!.view)
    }
}
```
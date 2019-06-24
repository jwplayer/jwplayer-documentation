# FreeWheel

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

## Overview
The JW Player SDK for iOS is integrated with FreeWheel Ad Manager and supports VAST and VPAID advertising. In this document we will set up your project with FreeWheel and demonstrate all supported features of the FreeWheel implementation.

## Supported Features
* Pre-rolls
* Mid-rolls
* VPAID
* Ad Skip Offset
* Ad Click-through
* Multiple Ad Instances
* Custom Parameters

<!-- ## Setting up your project for FreeWheel SDK

### Building with the Framework
1. Add the FreeWheel `AdManager.framework` to your project. This can be downloaded from your [FreeWheel Hub](https://hub.freewheel.tv/) account (sign-in required). 
2. Place `AdManager.framework` in your project directory.
3. In **Build Phases > Link Binary With Libraries**, add `AdManager.framework`.
![Importing FW](../images/fw_intergration.png)

!!!important
As per [FreeWheel's documentation](https://hub.freewheel.tv/pages/viewpage.action?spaceKey=techdocs&title=How+to+Compile+FreeWheel+iOS+SDK+and+Optional+Modules+into+App#HowtoCompileFreeWheeliOSSDKandOptionalModulesintoApp-Enable-ObjCLinkerFlag), be sure that `-ObjC` is added to **Build Settings > Other Linker Flags**.
!!!

Now, you can configure FreeWheel ads in the JW Player SDK.

If you are using Swift instead of Objective-C, use to the [FreeWheel guide](https://hub.freewheel.tv/display/techdocs/Use+AdManager+in+a+Swift+Project) to set up your library.

## FreeWheel Parameters
Setting up a FreeWheel campaign requires the following parameters: 

|Parameter|Value  |
|--|--|
**networkId** | 96749
**serverId** | http://cue.v.fwmrm.net
**profileId** | 96749:global-cocoa
**sectionId** | DemoSiteGroup.01
**mediaId** | DemoVideoGroup.01

## FreeWheel Configuration
To configure Freewheel ads you have to use `JWConfig`, `JWAdConfig` and `JWFreewheelConfig` in the API.

**Code Example:**

    // Create JWFreewheelConfig instance and 
    
    set up FreeWheel parameters
    JWFreewheelConfig *fwConf = [[JWFreewheelConfig alloc] init];
    fwConf.mediaId = @"DemoVideoGroup.01";
    fwConf.serverId = @"http://demo.v.fwmrm.net/ad/g/1";
    fwConf.profileId = @"96749:global-cocoa";
    fwConf.sectionId = @"DemoSiteGroup.01";
    fwConf.networkId = 96749;

    // Create JWAdConfig, then assign ad client and JWFreewheelConfig instance created previously. Other parameters available.

    JWAdConfig *advertising = [[JWAdConfig alloc] init];
    advertising.client = JWAdClientFreewheel;
    advertising.adMessage = @"Ad message xx";
    advertising.skipMessage = @"Skip in xx";
    advertising.skipText = @"Move on";
    advertising.skipOffset = 3;
    advertising.freewheel = fwConf;

    // Assign JWAdConfig (with FreeWheel configuration) to JWConfig instance for player

    JWConfig *conf = [[JWConfig alloc] init];
    conf.advertising = advertising;
-->

## Assign an Ad Schedule to a Playlist Item
Set up an ad schedule for FreeWheel ads using the `JWAdBreak` API and assign it to the adSchedule property of the `JWConfig` instance.

**Code Example:**

    // Creating ad breaks: preroll + two midrolls
    JWAdBreak *prerollBreak = [JWAdBreak adBreakWithTag:@"custom_preroll_1" offset:@"pre"];
    JWAdBreak *midrollBreak_1 = [JWAdBreak adBreakWithTag:@"custom_midroll_1" offset:@"12"];
    JWAdBreak *midrollBreak_2 = [JWAdBreak adBreakWithTag:@"custom_midroll_2" offset:@“50%”];
    JWAdBreak *midrollBreak_3 = [JWAdBreak adBreakWithTag:@"custom_midroll_3" offset:@“00:00:45”];

    JWConfig *conf = [JWConfig alloc init];

    // Freewheel config goes here (described previously)

    // Adding JWAdBreak instances into adSchedule array
    conf.advertising.schedule = @[prerollBreak, midrollBreak_1, midrollBreak_2, midrollBreak_3];

Note: While creating the `JWAdBreak` instance you must to pass two parameters - tag and offset:
- `tag` - for FreeWheel it can be any string with any content - it is used for determining a particular ad break in the FreeWheel plugin internally. If you have multiple ad breaks placed in the ad schedule array, the tag value should be unique for each ad break.
- `offset` - position where ad break should be played. Use “pre” for the JWAdBreak offset value if you want to play pre-roll. Please reference the following section that describes how to set ad offsets for mid-rolls.

<!-- ## Ad Offset
FreeWheel supports defining advertising offsets. The following formats are available:

|Type|Example  |
|--|--|
**Seconds** | JWAdBreak *secBreak = [JWAdBreak adBreakWithTag:@"custom_midroll_1" offset:@"12"];
**Percentage** | JWAdBreak *percBreak = [JWAdBreak adBreakWithTag:@"custom_midroll_2" offset:@“50%”];
**Time Stamp** | JWAdBreak *timestampBreak = [JWAdBreak adBreakWithTag:@"custom_midroll_3" offset:@“00:00:45”];

-->

## Custom Parameters

Use the `custom` property of `JWFreewheelConfig` object to customize your FreeWheel ad request.

**Code Example:**

```
fwConf.custom = @{@"key1": @"val1", @"key2": @"val2"};
```

## VPAID
No additional setup required to use VPAID. FreeWheel configuration for VPAID and VAST are the same. However, the FreeWheel campaign should be configured to use VPAID. 

<!-- ## Unsupported Features

### Postroll
Post-rolls are not supported at this time but will be added in the future. -->

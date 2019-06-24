# Ad Scheduling

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

<!-- Ads can be scheduled in two ways:

## An adSchedule Object

Set an array of AdBreak objects to the schedule property of the config's advertising object:

```Objective-C
	config.advertising.schedule = @[[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"pre"],
	[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"0:00:05"],
	[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"50%"],
	[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"post"]];
```

```swift
	config.advertising.schedule = [JWAdBreak(tag: "/vast.xml", offset:"pre"),
	JWAdBreak(tag: "/vast.xml", offset:"5"),
	JWAdBreak(tag: "/vast.xml", offset:"50%"),
	JWAdBreak(tag: "/vast.xml", offset:"post")]
```
-->

## VMAP Advertisements

Set the VMAP tag to the adVmap property in your configuration's advertising object:
 
	config.advertising.adVmap = "http://adserver.example/vmap.xml";

Note that if you set both an adVmap and an ad schedule, the schedule array will be ignored. 
AdConfig properties specifying custom ad messages, skip offsets, and other properties are compatible with VMAPs.

## VPAID 2.0 Advertisements

VPAID 2.0 ads are scheduled in the same way as regular VAST advertisements:

JWAdBreak *vpaidAdBreak = [JWAdBreak adBreakWithTag:@"http://url-to-vpaid-tag.xml" offset:@"0:00:05"];

let vpaidAdBreak: JWAdBreak = JWAdBreak(tag: "http://url-to-vpaid-tag.xml", offset:"5")

### VPAID 2.0 support caveats

* Only VPAID 2.0 JavaScript creatives are supported, Flash or Silverlight creatives are not supported.
* HTML5 Fullscreen API's are currently **NOT** supported since the JW Player SDK takes care of it's own fullscreen behavior.
* Because of this you should make sure that your creatives are responsive, they should be able to handle dynamic changes in width and height, which occur for example when a user rotates their device.
* Google IMA does not currently support [VPAID 2.0 for iOS](https://developers.google.com/interactive-media-ads/docs/sdks/ios/compatibility).

We recommend you to test your VPAID creatives within our SDK before distributing them as creatives may throw errors or not work as expected when rendered by the JW Player iOS SDK.

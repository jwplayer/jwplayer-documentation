# Ad Scheduling

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

Ads can be scheduled in two ways:

## An adSchedule Object##

Set an array of AdBreak objects to the config's' adSchedule:

Objective C:

	config.adSchedule = @[[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"pre"],
	[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"0:00:05"],
	[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"50%"],
	[JWAdBreak adBreakWithTag:@"/vast.xml" offset:@"post"]];

Swift:

	config.adSchedule = [JWAdBreak(tag: "/vast.xml", offset:"pre"),
	JWAdBreak(tag: "/vast.xml", offset:"5"),
	JWAdBreak(tag: "/vast.xml", offset:"50%"),
	JWAdBreak(tag: "/vast.xml", offset:"post")]

## VMAP Advertisements##

Set the VMAP tag to the adVmap property in your configuration:
 
	config.adVmap = "http://adserver.example/vmap.xml";

Note that if you set both an adVmap and an adSchedule, the adSchedule array will be ignored. 
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

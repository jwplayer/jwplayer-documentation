# Ad Waterfalling 

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

To create an ad waterfall, an array of ad tags is passed to a JWAdBreak object:

	NSArray *tags = @[@"/firstVast.xml", @"/secondVast.xml"];
	JWAdBreak *adBreak = [JWAdBreak adBreakWithTags:tags offset:@”10%”];

If the first tag in the tags array fails to play, the player falls back to the second in the list and so on, until it finds one that can be played.

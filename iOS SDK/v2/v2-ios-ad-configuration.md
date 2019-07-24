TODO: Show basic ad embed

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

# Ad Configuration

If custom ad handling is necessary (for example, to enable ad skipping or to display a custom ad message), adConfig (which is an instance of JWAdConfig) can be passed:

Objective C:

	JWAdConfig *adConfig = [JWAdConfig new];
	adConfig.adMessage = @"Ad duration countdown xx";
	adConfig.skipMessage = @"Skip in xx";
	adConfig.skipText = @"Move on";
	adConfig.skipOffset = 3;
	config.adConfig = adConfig;

Swift: 

	var adConfig: JWAdConfig = JWAdConfig()
	adConfig.adMessage = "Ad duration countdown xx"
	adConfig.skipMessage = "Skip in xx"
	adConfig.skipText = "Move on"
	adConfig.skipOffset = 3
	config.adConfig = adConfig
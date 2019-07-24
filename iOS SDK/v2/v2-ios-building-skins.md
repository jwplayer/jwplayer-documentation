# Skinning

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

You can specify any of the eight JW Player premium skins using the skin name in **config.premiumSkin** property of your config (see “Configuration object” in the Code Examples section below for more information). The available skin values are:

* JWPremiumSkinSeven
* JWPremiumSkinBeelden  
* JWPremiumSkinBekle   
* JWPremiumSkinFive  
* JWPremiumSkinGlow  
* JWPremiumSkinRoundster  
* JWPremiumSkinStormtrooper  
* JWPremiumSkinVapor  
* JWPremiumSkinSix

To use your skin, specify its location using the config.cssSkin property in your config. For example:

    config.cssSkin = @"http://p.jwpcdn.com/iOS/Skins/nature01/nature01.css";
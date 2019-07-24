# Migration from older SDK versions

<img src="https://img.shields.io/badge/%20-iOS%20v2%20DEPRECATED-FFBA43.svg?logo=apple">

!!!important
The JW Player SDK for iOS v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for iOS soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for iOS v3](https://developer.jwplayer.com/sdk/ios/docs/developer-guide/). Please contact your JW Player representative if you have additional questions.
!!!

## Migrating from 2.7.x to 2.8.0
Beginning with version 2.8.0, the JW Player SDK for iOS will be a [dynamic library](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/OverviewOfDynamicLibraries.html). If you are updating from version 2.7.x to 2.8.0+ you should follow the migration process below.

### If you import the SDK manually
* Remove static *.a library file from project.
* Remove *.a library from project target **Build Phases -> Link Binary with Libraries.**
* Add **JWPlayer_iOS_SDK.framework** to project directory.
* In project target **Build Phases -> Link Binary with Libraries** press “+”, select **“Add Other”** and select **JWPlayer_iOS_SDK.framework.**
* In project target **General -> Embedded Binaries** press **“+”** and select **JWPlayer_iOS_SDK.framework.**
* Go to **Search** in project tree section, switch **Find** to **Replace**, in top input type **JWPlayer-iOS_SDK/** and in bottom input type **JWPLayer_iOS_SDK/**. Press **Replace All** button.
* Perform Clean project.
* Perform Clean Build Folder.
* Try to build.

### If you use **CocoaPods**
* Go to **Search** in project tree section, switch **Find** to **Replace**, in top input type **JWPlayer-iOS_SDK/** and in bottom input type **JWPlayer_iOS_SDK/**. Press **Replace All** button.
* Perform Clean project.
* Perform Clean Build Folder.
* Try to build.
* Prior to app submission, run this [script](https://stackoverflow.com/questions/42641806/check-and-remove-unsupported-architecture-x86-64-i386-in-ipa-archive) - more details below.

**Important** CocoaPods requires libraries to support all target platform architectures, including x86_64 and i386 simulators; this is convenient for testing. Apple, however, requires x86_64 and i386 targets to be removed prior to submitting the app to the App Store. This is a known issue and you can check its status in the [Apple Developer Forums](https://forums.developer.apple.com/thread/21496). To remove these two simulator architectures before pushing to the App Store, you can use [this script](https://stackoverflow.com/questions/42641806/check-and-remove-unsupported-architecture-x86-64-i386-in-ipa-archive).

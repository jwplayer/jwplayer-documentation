# Download the SDK

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

!!!important
Use of the iOS SDK v3 requires a JW Player Enterprise license. Please [contact our team](https://www.jwplayer.com/contact-us/?utm_source=developer&utm_medium=CTA&utm_campaign=player-docs) if you would like to upgrade your account.<br/><br/>
If you are using JW Player SDK for iOS 2.x.x, use this [SDK documentation](https://developer.jwplayer.com/sdk/ios/docs/v2/developer-guide/index.html).
!!!

To add a player to your app, you must import the JW Player SDK for iOS and then configure your project. To complete these tasks, review the table below and click the GET STARTED link for the approach that suits your implementation needs.

|Approach|Notes|
|---|---|
|[CocoaPods](#cocoapods)|- No SDK download is required.<br/> - Core and optional modules must be added to your app.<br/>- An existing app is required.<br/><br/>[GET STARTED with the CocoaPods approach](#cocoapods)|
|[Local](#local)|- JW Player SDK for iOS must be downloaded and unzipped.<br/>- Core and optional modules must be imported.<br/>- An existing app is required.<br/><br/>[GET STARTED with the Local appoach](#local)|
|[Demo](#demo)|- JW Player SDK for iOS Open Source Demo must be downloaded.<br/>- All modules are included. No modules need to be imported or set as dependencies.<br/>- An existing app is not required. The open source demo is a basic demonstration app that allows you to experiment with the SDK.<br/><br/>[GET STARTED with the Demo approach](#demo)|

<br/><br/>
<a name="cocoapods"></a>

## CocoaPods
In the following subsections, you will learn how to complete these tasks:

1. [Get required items](#cocoapods-reqitems).
2. [Add SDK to Xcode project](#cocoapods-addsdk).

If you have problems completing any of these tasks, [log a support](https://support.jwplayer.com/submit-support-case) ticket for assistance.


<a name="cocoapods-reqitems"></a>

### Get the required items

Before you begin this approach to add the SDK to your project, you need the items in the table below from JW Player.

|Item|Acquisition process|
|---|---|
|Enterprise or Developer license|JW Player SDK for iOS requires an [Enterprise](https://www.jwplayer.com/contact-us/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) or [Developer](https://developer.jwplayer.com/sign-up/) license.|
|Xcode| Download and install <a href="https://developer.apple.com/support/xcode/" target="_blank">Xcode<a/>.|
|License key | 1. From your <a href="https://dashboard.jwplayer.com/#/welcome" target="_blank">JW Player dashboard</a>, click **Players > Downloads & Keys**.<br/>2. In the **Downloads** section, copy the **LICENSE KEY** for the JW Player SDK for iOS.|


<a name="cocoapods-addsdk"></a>
### Add SDK to an Xcode project

Now that you have the required items listed in the previous subsection, you can import the JW Player SDK for iOS to your Xcode project.

#### Install CocoaPods and create a Podfile

1. At the Terminal prompt enter `$ gem install cocoapods` to install CocoaPods.
2. Enter `$ cd <path-to-your-project>/<your-project>/` to navigate to your project directory. 
3. Enter `$ pod init` to create a file named **Podfile**. **Podfile** defines the dependencies for your project.


#### Edit the Podfile
1. In a text editor, open **Podfile**.
2. Set the iOS version to `11.0` or greater.
3. If you are using Objective-C, you can comment out `use_frameworks!`. 
4. Add `JWPlayer-SDK` as a dependency. To add a specific version of the SDK, be sure to use the proper <a href="https://guides.cocoapods.org/using/the-podfile.html" target="_blank">Podfile syntax</a>.
5. Save Podfile and close the text editor. 

```groovy
# Uncomment the next line to define a global platform for your project
platform :ios, '11.0'

target 'MyAwesomeProject' do
  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
  use_frameworks!

  # Pods for MyAwesomeProject
  pod 'JWPlayer-SDK', '~> 3.0'
end
```
#### Install the SDK

1. At the terminal prompt of your project directory, enter `$ pod install` to install the JW Player SDK for iOS.
2. Open the **.xcworkspace** file for your project to launch Xcode.

You have retrieved your JW Player license key and imported the JW Player SDK for iOS into your project. You can now [configure your project](../configure-your-project).

---

<a name="local"></a>

## Local

In the following subsections, you will learn how to complete these tasks:

1. [Get required items](#local-reqitems).
2. [Add SDK to Xcode project](#local-addsdk).

If you have problems completing any of these tasks, [log a support](https://support.jwplayer.com/submit-support-case) ticket for assistance.


<a name="local-reqitems"></a>

### Get required items

Before you begin this approach to add the SDK to your project, you need the items in the table below from JW Player.

|Item|Acquisition process|
|---|---|
|Enterprise or Developer license|JW Player SDK for iOS requires an [Enterprise](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) or [Developer](https://developer.jwplayer.com/sign-up/) license.|
|Xcode| Download and install <a href="https://developer.apple.com/support/xcode/" target="_blank">Xcode<a/>.|
|JW Player SDK for iOS and license key | 1. From your <a href="https://dashboard.jwplayer.com/#/welcome" target="_blank">JW Player dashboard</a>, click **Players > Downloads & Keys**.<br/>2. In the **Downloads** section, select a **VERSION** of the iOS SDK from the dropdown menu.<br/>3. Click the icon in the **DOWNLOAD** column.<br/>4. Copy the **LICENSE KEY** for the JW Player SDK for iOS.<br/>5. On your computer, unzip the JW Player SDK for iOS .zip file.|

<a name="local-addsdk"></a>

### Import the SDK into your project

Now that you have the required items listed in the previous subsection, you can add JW Player SDK for iOS to your Xcode project.

1. From within Xcode, select your project from the project navigator.
2. Select the target in the left column of the project editor.
3. Click **General**.
4. In the **Linked Frameworks and Libraries**, click the plus sign (+).
5. Click **Add Other**.
6. Select **JWPlayer_iOS_SDK.framework** from the **jwplayer-ios-sdk/Framework** folder on your computer.
7. Click **Open**.

You have retrieved your JW Player license key and imported the JW Player SDK for iOS into your project. You can now [configure your project](../configure-your-project).

---

<a name="demo"></a>

## Demo

The JW Player SDK for iOS Open Source Demo is a basic demonstration app. In the following subsection, you will learn how to get required items that will enable you to experiment with the demo app.

If you have problems completing any of these tasks, [log a support](https://support.jwplayer.com/submit-support-case) ticket for assistance.

### Get the required items

Before you can start experimenting with the JW Player SDK for iOS Open Source Demo, you need the items in the table below from JW Player.

|Item|Acquisition process|
|---|---|
|Enterprise or Developer license|JW Player Open Source Demo for iOS. requires an [Enterprise](https://www.jwplayer.com/pricing/?utm_source=developer&utm_medium=CTA&utm_campaign=Developer%20Nav%20Upgrade) or [Developer](https://developer.jwplayer.com/sign-up/) license.|
|Xcode| Download and install <a href="https://developer.apple.com/support/xcode/" target="_blank">Xcode<a/>.|
|JW Player SDK for iOS Open Source Demo and license key | 1. Download the <a href="https://github.com/jwplayer/jwplayer-sdk-ios-demo" target="_blank">JW Player Open Source Demo for iOS</a>. <br/>2. From your <a href="https://dashboard.jwplayer.com/#/welcome" target="_blank">JW Player dashboard</a>, click **Players > Downloads & Keys**.<br/>3. In the **Downloads** section, copy the **LICENSE KEY** for the JW Player SDK for iOS.|

You have retrieved your JW Player license key and downloaded the JW Player SDK for iOS Open Source Demo. You can now [configure your project](../configure-your-project).
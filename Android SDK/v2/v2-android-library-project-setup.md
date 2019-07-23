# Library and project setup

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

## Overview

In this document we'll cover how to add the JW Player SDK to your Android Studio project and its initial configuration.

## Importing the JW Player SDK into your project

There are two ways to import the JW Player SDK into your Android Studio project. Either through our Maven repository, or by downloading the .aar file from your Dashboard and importing it from your local machine.

## Import using Maven

To add the SDK to your Android Studio project using Maven. You must first edit your project's build.gradle file and add our Maven repository url

```groovy
allprojects {
	repositories {
		...
		maven {
			url 'https://mvn.jwplayer.com/content/repositories/releases/'
		}
	}
}
```

Next, edit your application's build.gradle file and add the JW Player SDK dependencies:

```groovy
dependencies {
  ...
  compile 'com.longtailvideo.jwplayer:jwplayer-core:+'
  compile 'com.longtailvideo.jwplayer:jwplayer-common:+'
  compile 'com.longtailvideo.jwplayer:jwplayer-ima:+'        // Only required if using IMA features
  compile 'com.longtailvideo.jwplayer:jwplayer-chromecast:+' // Only required if using Chromecast
}
```

After syncing Gradle you should be able to use all JW Player SDK classes in your application.

## Import from your local file system

If you do not wish to use our Maven repository you can always download our SDK package from your Dashboard and import the SDK from your local file system.

### Downloading the JW Player SDK from your Dashboard

1.	Sign in to your JW Player dashboard at [https://account.jwplayer.com](https://account.jwplayer.com)

2.	Navigate to the **Players** section, center of the left navigation bar, then click on [Tools](https://dashboard.jwplayer.com/#/players/downloads)

3.	In the **Downloads** section, locate the Android SDK and click on the download button

4.	Unzip the SDK package to your local hard drive.

### Importing the SDK to your Android Studio Project

1.	Go to **File > New > New Module… > Import .JAR / .AAR Package**

2.	Navigate to the location where you unzipped the AAR file, select it, then click **Finish**

3.	Go to **File > Project Structure…**

4.	Make sure your **app** is selected in the left-hand pane, then click the **Dependencies** tab

5.	Click the **plus** sign in the lower left-hand corner of the dialog and choose **Module Dependency**

6.	Select the **jwplayer-core** module then click **OK**

7.	Click **OK** again to close the dialog, the JW Player SDK is now available in your project

8. Repeat this step again for the **jwplayer-common** module and any optional modules you are using (e.g. **jwplayer-ima**)

## Initial Project Configuration

To ensure proper player behavior the following entries need to be added to your AndroidManifest.xml

### License Key

First, you must add your JW License Key and nest it within the `<application>` element

```xml
<meta-data 
	android:name="JW_LICENSE_KEY"
	android:value="{YOUR_LICENSE_KEY}" />
```

`{YOUR_LICENSE_KEY}` should be replaced with the JW Player License Key that is shown in the **Tools** page of your Dashboard. 

####Note:

As an alternative to storing the license key in your AndroidManifest.xml you can set the it programmatically by calling JWPlayerView.setLicenseKey(Context, String) **before** the JWPlayerView is instantiated.

Valid license editions include **Ads**, **Enterprise** and  **Trial**. The player will throw an OnSetupError and display an Invalid License Key message on the screen if an invalid license key is provided.

###Activity Configuration

Next, modify the all `<activity>` tags that will contain a JW Player and add the below *configChanges*.

```xml
<activity
	...
	android:configChanges="keyboard|keyboardHidden|orientation|screenSize" >
```
This will allow you to handle orientation changes programmatically and will prevent Android from destroying the Activity upon rotation.

## Additional Features

### Google IMA Advertising

If you plan to use Google IMA advertising and you've chosen to import the JW Player SDK for Android from your local machine, add the line below to the dependencies section of your application’s build.gradle file.

```groovy
compile 'com.google.android.gms:play-services-ads:#play_services_ads_version#'
```

!!!warning
Adding the play-services dependency is not required if you've chosen to use the Maven import method as we import the dependency for you in that case.
!!!

Next, add the code below as a child of the <application> tag in your application’s AndroidManifest.xml:

```xml
<meta-data
	android:name="com.google.android.gms.version"
	android:value="@integer/google_play_services_version" />
```
The *meta-data* tag is required for both the Maven and local machine import methods.

### Loading local media

If your app will read media content from the device you must include the <uses-permission> tag in the application's AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>

```

As of Android 6.0 (API 23) you must request this permission from the user during runtime before loading any local files.

For more information read about requesting permissions at runtime, please check the Android documentation below:

[https://developer.android.com/training/permissions/requesting.html](https://developer.android.com/training/permissions/requesting.html)

## Using ProGuard

As a developer you may choose to obfuscate your code with ProGuard. Our `consumer-proguard.pro` configuration is automatically applied for developers using Maven to import our SDK. However, developers that have chosen to import our standalone AARs into their Android Studio project will need to add the followinig ProGuard configuration manually. 

Below is our suggested ProGuard configuration that will ensure our SDK works as intended.

### ProGuard Configuration

```groovy
-keepclassmembers class com.longtailvideo.jwplayer.** {
    @android.webkit.JavascriptInterface *;
}

# Block warnings about missing module classes
-dontwarn com.longtailvideo.jwplayer.**
-dontwarn com.google.ads.interactivemedia.**

# Classes get rejected without this when running the app if the app has been run through ProGuard
-keepattributes InnerClasses,EnclosingMethod

# Keep module indicator classes
-keep class com.longtailvideo.jwplayer.modules.** { *; }
```

### De-Obfuscating Stacktraces

Since ProGuard obfuscates your source code, all error logs will also be obfuscated which makes it hard for our team to debug. We suggest you de-obfuscate your stacktraces before sending them to our support team. You may find more information about this process on the [ReTrace Tool](https://www.guardsquare.com/en/proguard/manual/retrace) manual.

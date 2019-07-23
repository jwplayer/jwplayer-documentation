# Localization Overview

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

The JW Player SDK for Android supports localizing error strings and setting the language in the IMA SDK.

## Localized Error Messages

The following default error messages can be overridden by defining string resources in your application's strings.xml file.

| String ID                                       | Description                                                                                              |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| `jw_error_unrecognized_input_format_exception`  | Displayed when the content URL doesn't point to video, or is being redirected to a WiFi portal or proxy. |
| `jw_error_decoder_initialization_exception`     | Displayed when the device does not have a hardware decoder that can decode the video content.            |
| `jw_error_io_exception`                         | Displayed when any IO exception occurs - e.g. interrupted stream, failed to read local file.             |
| `jw_error_illegal_argument_exception`           | Displayed when an illegal argument is passed to ExoPlayer.                                               |
| `jw_error_invalid_response_code_exception`      | Displayed when an HTTP request recieves an unsupported response code - e.g. 500, 404.                    |
| `jw_error_http_data_source_exception`           | Displayed when ExoPlayer fails to fetch a segment of content - e.g. attempting to buffer while offline.  |
| `jw_error_cast_media_format_unsupported`        | Displayed when casting is attempted with an unsupported media type.                                      |
| `jw_error_cast_loading_failed`                  | Displayed when loading fails during casting.                                                             |
| `jw_error_cast_loading_failed_with_status_code` | Displayed when loading failed during casting and a status code is available.                             |
| `jw_error_cast_loading_failed_no_connection`    | Displayed when connecting to Chromecast fails                                                            |

## ImaSdkSettings

To localize the language used during IMA ads:

```java
	ImaSdkSettings imaSdkSettings = new ImaSdkSettings();
	// Use the 2-letter ISO 639-1 language code for your desired language 
	imaSdkSettings.setLanguage("NL");
	ImaAdvertising imaAdvertising = new ImaAdvertising();
	imaAdvertising.setImaSdkSettings(imaSdkSettings);
	playerConfig.setAdvertising(imaAdvertising);
```

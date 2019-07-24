# Captions

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

## Adding Closed captions

### Side Car Captions

Closed captions tracks are provided as an array of `JWTrack` objects:

```Objective-C
	config.tracks = @[[JWTrack trackWithFile:@"/sintel-en.srt" label:@"English" isDefault:YES],
	[JWTrack trackWithFile:@"/sintel-sp.srt" label:@"Spanish"],
	[JWTrack trackWithFile:@"/sintel-ru.srt" label:@"Russian"]];
```

```swift   
	config.tracks = [JWTrack (file: "/sintel-en.srt", label: "English", isDefault: true),
	JWTrack (file: "/sintel-sp.srt", label: "Spanish"),
	JWTrack (file: "/sintel-ru.srt", label: "Russian")]
```

### CEA-608 Captions in HLS & HLS In-Manifest WebVTT subtitles

In order to reproduce CEA-608 Captions in HLS and HLS In-Manifest WebVTT subtitles, simply set a stream containing either CEA-608 Captions in HLS or HLS In-Manifest WebVTT subtitles to the JWConfig's file property.

```Objective-C
    config.file = @”http://example.com/hlsWith608orInManifestWebVTT.m3u8”; 
```

```swift

    config.file = “http://example.com/hlsWith608orInManifestWebVTT.m3u8"
```

## Caption styling

To customize captions, a `JWCaptionStyling` object called `captionStyling` is passed to the player. This object enables the customization of the caption’s font, font color, window color, background color, and edge style.

```Objective-C
	JWCaptionStyling *captionStyling = [JWCaptionStyling alloc]init];
	captionStyling.font = [UIFont fontWithName:@"Zapfino" size:20];
	captionStyling.color = [UIColor blueColor];
	captionStyling.windowColor = [UIColor orangeColor];
	captionStyling.backgroundColor = [UIColor colorWithRed:0.3 green:0.6 
	                      blue:0.3 alpha:0.7];
	captionStyling.edgeStyle = JWEdgeStyleRaised;
	config.captions = captionStyling;
```
```swift
	var captionStyling: JWCaptionStyling = JWCaptionStyling()
	captionStyling.font = UIFont (name: "Zapfino", size: 20)
	captionStyling.color = UIColor.blueColor()
	captionStyling.edgeStyle = JWEdgeStyleRaised
	captionStyling.windowColor = UIColor.purpleColor()
	captionStyling.backgroundColor = UIColor(red: 0.3, green: 0.6, 
	                blue: 0.3, alpha: 0.7)
	config.captions = captionStyling
```

If `JWCaptionStyling` is not used, then the captions will be styled based on the user's preferences, which are determined in the device's Accessibility Subtitles & Captioning settings.

!!!
`JWCaptionStyling` supersedes the device's Accessibility Subtitles & Captioning settings in the case of side car captions and HLS In-Manifest WebVTT subtitles. 

`JWCaptionStyling` cannot be used on CEA-608 Captions; CEA-608 Captions will be styled in accordance to the device's Accessibility Subtitles & Captioning settings.
!!!
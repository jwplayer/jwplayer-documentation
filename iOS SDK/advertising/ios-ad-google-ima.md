# Google IMA

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

<!--
In order to play ads using Google Interactive Media Ads (Google IMA) you must import the Google IMA framework into your project ( Installing Google IMA ) and set your `JWAdConfig`’s `client` to `JWAdClientGoogima`.

    config.advertising.client = JWAdClientGoogima;

Ads are scheduled for Google IMA the same way they are scheduled using our default ad client (vastPlugin). --> 

The VMAP control ad insertion also overrides any adSchedule arrays when using Google IMA. Customization of ad messages and skipping are not handled with Google IMA at the moment, but can be done when creating an ad tag.

The Google IMA ad client can be used in playlists and supports waterfalling, bumpers, as well as standard and optimized ad pods.

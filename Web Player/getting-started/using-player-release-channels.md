# Using JW Player Release Channels

JW Player supports two release channels. Each channel is automatically updated with the latest player versions available.

* **Production channel:** This is the default and recommended channel for most customers. The production channel always hosts is the latest stable and tested version. The release has passed our QA team's rigorous manual and automated tests and was already live on the beta channel for a period of time.

* **Beta channel:** This channel has passed our automated tests, but has not been fully verified by the JW Player QA team yet. The beta channel is the place to be if you're interested in previewing releases before they're available to everyone, since the vast majority of players are set to use the the production channel.

Sign up for our [release candidate](https://www.jwplayer.com/release-candidate-sign/) mailing list to get notified when we update the beta channel with a new minor or major release, so you can test and verify new functionality. We don't want to overload your inbox, so we don't send out emails for patch releases.​

## Releases

Here is an outline of what our releases contain and approximately how often they occur.

|Type|Release frequency|Time on beta channel before production|Contents|Example version|
|--|--|-|--------|--|
|Major release|Every 1-2 years|4-8 weeks|Innovative new features, breaking changes|8.0.0|
|Minor release|Every 4-8 weeks|1-2 weeks|Improved and new features, bug fixes|8.1.0|
|Patch release|Every 1-4 weeks|1-3 days|Quick, generally urgent bug fixes with no new functionality|8.1.1|
 
## Selecting a Channel

Channels can easily be set at the player level directly within the Player Builder.

**Using JW8:**

1. Navigate to your Players.
1. Create or edit an existing player.
1. Select a channel beneath the player preview on the right side.

![](https://assistly-production.s3.amazonaws.com/150942/portal_attachments/830679/Screenshot_2017-10-30_16.18.00_original.png?AWSAccessKeyId=AKIAJNSFWOZ6ZS23BMKQ&Expires=1509798703&Signature=kRMVRYCD6Tjm7Qr3ySo6ge0Kro0%3D&response-content-disposition=filename%3D%22Screenshot_2017-10-30_16.18.00.png%22&response-content-type=image%2Fpng)

**Using JW7:**

1. Navigate to your Players.
1. Create or edit an existing player.
1. Select a channel under the Advanced tab.

![](http://support-static.jwplayer.com/images/developer/releasechannels.png)

You can also use our [Platform API](https://developer.jwplayer.com/jw-platform/reference/v1/methods/players/update.html) to set the channel for a particular player.

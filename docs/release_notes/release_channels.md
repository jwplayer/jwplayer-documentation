#Using JW Player Release Channels

JW Player supports a number of different release channels. We use these channels to roll out updates to cloud-hosted players for integration testing, starting with Beta channel builds every two weeks, all the way up to a Production channel releases that happens every 12 weeks roughly. Choosing a release channel from the Player Builder allows you try upcoming versions of JW Player earlier and gives you more insight into the new features and bug fixes applied throughout the development process.

New features and bug fixes are bundled into minor releases of JW Player. These are labeled as 7.x and can contain new API methods. Patches are only bug fixes and do not add any new functionality. These are indicated by incrementing the patch number 7.x.patch.  

Sign up to our [release-candidate](http://www.jwplayer.com/release-candidate-sign/) mailing list to get notified when we update these channels.

## Channels

Release channels for JW Player range from the most stable and tested version (Production channel) to early testing and likely least stable (Beta channel). Channels allow you to test and play with our latest code, without affecting your live cloud-hosted version of JW Player. Each channel is automatically updated with new player versions and generally adhere to the following rolling schedule:

*   **Production channel:** This channel has gotten the full testing and blessing of the JW Player QA team and was live on the staging channel for four weeks, allowing time for minor patches. It's only updated every 8-12 weeks for feature releases and the date the release happens is published four weeks prior to the update.
*   **Pre-Release/Staging channel:** This channel has gotten the full testing and blessing of the JW Player QA team and can be used for integration testing and production. It can be updated roughly every eight weeks with major feature releases and improvements (7.x) and every two weeks thereafter with minor patches (7.x.y). After four weeks, the build is promoted to production.
*   **Beta channel:** This channel has passed all automated tests but has not been fully verified by the JW Player QA team. If you are interested in seeing a preview of what's next, with minimal risk, Beta channel is the place to be. It's updated biweekly during the start of a feature release and more frequently as full testing progresses. Major updates are promoted to Beta every six weeks, two-three weeks before the Staging channel will get them.

## Choosing a Channel

Channels can easily be set at the player level, directly within the Player Builder.

1.  Navigate to your Players.
2.  Create or edit an existing player.
3.  Under the advanced tab you can select a channel.

![](http://support-static.jwplayer.com/images/developer/releasechannels.png)

You can also use our [Platform API](https://developer.jwplayer.com/jw-platform/reference/v1/methods/players/update.html) to set the channel for a particular player.
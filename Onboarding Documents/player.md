# Player Team


## Getting Familiar with the Player

### Lucid Charts
This is a good way to gain a high level understanding of the player ecosystem. Ask Rob for access.

### Testing Suite

Squash is used to test the player's functionality. It is the best way to see all features in action and gain a comprehensive understanding of the player's capabilities.

There are 4 environments:

* Your local environment
* [PR](https://player-pr-test-jenkins.longtailvideo.com/builds/lastSuccessfulBuild/archive/test/) - test PRs before they are merged into master
* [Dev](https://player-develop-test-jenkins.longtailvideo.com/builds/lastSuccessfulBuild/archive/test/) - test master after PRs are merged
* [Release](https://player-release-test-jenkins.longtailvideo.com/builds/lastSuccessfulBuild/archive/test/) - test builds for major/minor releases

You can find the build number at the top of the Squash test page - it links to the corresponding jenkins job. To go back to a previous build, replace ***lastSuccessfulBuild*** with the desired build number -  this is helpful when trying to find regressions. 

***Note***: the player has ~50% automated test coverage. 

### Project Setup

The player team maintains the following repos:

* Players
	* [Open Source](https://github.com/jwplayer/jwplayer) - public repository. The community frequently submits issues and the occassional PR. In general, we try to respond to these ASAP as time permits.
	* [Commercial](https://github.com/jwplayer/jwplayer-commercial) - has project setup instructions
* Plugins 
	* [Vast](https://github.com/jwplayer/jwplayer-ads-vast)
	* [Google IMA](https://github.com/jwplayer/jwplayer-ads-googima)
	* [Analytics](https://github.com/jwplayer/jwplayer-analytics)
	* [Google Analytics Pro](https://github.com/jwplayer/jwplayer-plguin-gapro)
	* [Related](https://github.com/jwplayer/jwplayer-plugin-related)
	* [Sharing](https://github.com/jwplayer/jwplayer-plugin-sharing)

### Feature Owners & Annotations
*IntelliJ IDEA* has an *Annotate* feature that makes it easy to determine who made changes and when they were made. The commit messages should be descriptive enough to tell you why changes were made.

To access git annotations:

* Right click in the line number column of the current file
* Click Annotate
* Click on a line to view the git commit message

### Tooling
* IDE - [Intellij IDEA](https://www.jetbrains.com/idea/)
* Dotfile - [YADR](https://github.com/skwp/dotfiles)
* Git Client - [Source Tree](https://www.sourcetreeapp.com/)
* Monitoring PRs/issues - [waffle.io](https://waffle.io/)
* Examining/manipulating network traffic - [Charles Proxy](https://www.charlesproxy.com/)
* FTP - [Cyberduck](https://cyberduck.io/?l=en) - upload assets to / access the S3 player-test bucket (using your lastpass login for S3)
* Automated builds / CI - [jenkins](https://jenkins.longtailvideo.com)

## Coding Guidelines
The [clean code cheat sheet](http://www.planetgeek.ch/wp-content/uploads/2013/06/Clean-Code-V2.1.pdf) should be used as a general coding guideline. Our top 3 priorities are:

* **Codebase size** - The goal is to keep the player as small as possible, which ensures the fastest possible load times. (eg. We use a subset of the underscore library and only add new methods as the need arises.)
* **Performance optimizations** - There are lots of factors that go into optimizations. A good grasp of algorithms is helpful. We generally end up with the best solutions through peer code review as PRs are submitted. However, feel free to ask for feedback early and often.
* **Code Readability** - Self commenting code is preferred. In cases where this isn't practical, comments should be used to explain what a function or code block does. Other principles such as DRY (Dont Repeat Yourself) or SRP (Single Responsibility Principle) are useful to keep in mind.

Additionally, a solid understanding of browser specs and other 3rd party technologies the player depends on will help guide solutions (Eg. Understanding browser reflows or considering device limitations).

Pay attention to:
* Browser releases
* Dev dependency releases
* Updates to the spec/documentation for:
	* HTML ([w3c](https://w3c.github.io/)) 
	* Browsers ([caniuse](http://caniuse.com/) is a good resource)
	* HLS
	* Ads APIs (Vast/Googima)
	* 

## Responsibilities & Priorities
Your first priority is always working on stories in the current sprint. Keeping abreast of PRs is good. As you gain experience working on the player, you're expected to contribute to reviewing and merging PRs. The open source project repo is public, so members of the community occassionally submit issues and PRs. Team members should share the load, ensuring that we respond in a timely manner. If you're not comfortable doing so, seek help from a more senior team member.


## Other Video Repos To Follow

* [Videojs](https://github.com/videojs/)
* [Daily Motion](https://github.com/dailymotion)
* [Shaka Player](https://github.com/google/shaka-player/)

## The Wider Ecosystem

### Specs

It's imperative that we keep up with changes in specs that pertain to video & ad playback. 

* [Video](https://www.w3.org/wiki/HTML/Elements/video)
* [Audio](https://www.w3.org/wiki/HTML/Elements/audio)
* [Tracks](https://www.w3.org/wiki/HTML/Elements/track)
* [Encrypted Media Extensions (EME)](https://w3c.github.io/encrypted-media/)
* [Media Source Extensions (MSE)](https://w3c.github.io/media-source/)
* [Http Live Streaming (HLS)](https://tools.ietf.org/html/draft-pantos-http-live-streaming-19)
* [VAST](http://www.iab.com/guidelines/digital-video-ad-serving-template-vast-4-0/)
* [Google IMA](https://developers.google.com/interactive-media-ads/)


### Browsers

It's good practice to keep up with browser releases. There will sometimes be features in the roadmap that have immediate impact on the work we're doing.

## The more you know...

The more you know about the company, the better - it helps put the work you're doing in perspective. Lunchroom conversations are great opportunity to interact with and learn form your coworkers.
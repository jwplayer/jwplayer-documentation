# Player Team


## Getting Familiar with the Player

### Lucid Charts
[Lucid chart](https://www.lucidchart.com) is a good way to gain a high level understanding of the player ecosystem. Ask Bruno for an account with access to the *"Player"* group.

### Testing Suite

Squash is used to test the player's functionality. It is the best way to see all features in action and gain a comprehensive understanding of the player's capabilities.

There are 4 environments for accessing test pages:

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
* [Intellij IDEA](https://www.jetbrains.com/idea/) - IDE
* [YADR](https://github.com/skwp/dotfiles) - Dotfile
* [Source Tree](https://www.sourcetreeapp.com/) - Git Client
* [waffle.io](https://waffle.io/) - Monitoring PRs/issues
* [Charles Proxy](https://www.charlesproxy.com/) - Examining/manipulating network traffic
* [Cyberduck](https://cyberduck.io/?l=en) - FTP - upload assets to / access the S3 player-test bucket (using your lastpass login for S3)
* Jenkins - Automated builds / CI + Test Pages
	* [In network](https://jenkins.longtailvideo.com) (Requires VPN connection when working remotely)
	* [Outside the network](https://jenkins.jwplayer.com)

## Coding Guidelines
The [clean code cheat sheet](http://www.planetgeek.ch/wp-content/uploads/2013/06/Clean-Code-V2.1.pdf) should be used as a general coding guideline. Our top 3 priorities are:

* **Codebase size** - The goal is to keep the player as small as possible, which ensures the fastest possible load times. (eg. We use a subset of the underscore library and only add new methods as the need arises.)
* **Performance optimizations** - There are lots of factors that go into optimizations. A good grasp of algorithms is helpful. We generally end up with the best solutions through peer code review as PRs are submitted. However, feel free to ask for feedback early and often. 

	Here are some general guidelines:
	* [Profile with Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/profile/?hl=en) to identify:
		*  [JavaScript execution bottlenecks](https://developers.google.com/web/tools/chrome-devtools/profile/rendering-tools/js-execution?hl=en)
		*  Loss in framerate due to layout and repaint caused by CSS styling and DOM manipulation
	* [Avoid optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)
	* [Don't guess it, test it](https://aerotwist.com/blog/dont-guess-it-test-it/)
	* [Performance optimisation with timeline profiles](https://addyosmani.com/blog/performance-optimisation-with-timeline-profiles/)
* **Code Readability** - Self commenting code is preferred. In cases where this isn't practical, comments should be used to explain what a function or code block does. Other principles such as DRY (Dont Repeat Yourself) or SRP (Single Responsibility Principle) are useful to keep in mind.

Additionally, a solid understanding of browser specs and other 3rd party technologies the player depends on will help guide solutions (Eg. Understanding browser reflows or considering device limitations).

## Responsibilities & Priorities
Your first priority is always working on stories in the current sprint. Keeping abreast of PRs is good. As you gain experience working on the player, you're expected to contribute to reviewing and merging PRs. The open source project repo is public, so members of the community occassionally submit issues and PRs. Team members should share the load, ensuring that we respond in a timely manner. If you're not comfortable doing so, seek help from a more senior team member.


## Other Video Repos To Follow

* [Videojs](https://github.com/videojs/)
* [Daily Motion](https://github.com/dailymotion)
* [Shaka Player](https://github.com/google/shaka-player/)

## The Wider Ecosystem

### Specs

It's imperative that we keep up with changes in specs that pertain to video & ad playback. 

* [HTML5 - W3C](http://w3c.github.io/html/) - contains info on video, audio and track elements.
	* We can participate in any of the repos at [github.com/w3c](https://github.com/w3c). More details [here](https://www.w3.org/2015/Talks/1217-github-w3c/#). 
* [WHATWG (Living Standard)](https://whatwg.org/) 
	* We currently use these features in Chrome:
		* [Fetch](https://fetch.spec.whatwg.org/)
		* [Streams](https://streams.spec.whatwg.org/)	 
* [W3C vs. WHATWG HTML5 Specs](http://developer.telerik.com/featured/w3c-vs-whatwg-html5-specs-differences-documented/)
* [Presentation API](https://w3c.github.io/presentation-api/)
* [Remote Playback API](https://w3c.github.io/remote-playback/)
* [Encrypted Media Extensions (EME)](https://w3c.github.io/encrypted-media/)
* [Media Source Extensions (MSE)](https://w3c.github.io/media-source/)
* [Http Live Streaming (HLS)](https://tools.ietf.org/html/draft-pantos-http-live-streaming-19)
* [Google IMA](https://developers.google.com/interactive-media-ads/docs/sdks/html5/)
* [IAB](http://www.iab.com/guidelines/)
	* [VAST](http://www.iab.com/guidelines/digital-video-ad-serving-template-vast-3-0/)
	* [VPAID](http://www.iab.com/guidelines/digital-video-player-ad-interface-definition-vpaid-2-0/)
	* [VMAP](http://www.iab.com/guidelines/digital-video-multiple-ad-playlist-vmap-1-0-1/)
* [caniuse.com](http://caniuse.com/)


### Browsers

It's good practice to keep up with browser releases. There will sometimes be features in the roadmap that have immediate impact on the work we're doing.

## The more you know...

The more you know about the company, the better - it helps put the work you're doing in perspective. Lunchroom conversations are great opportunity to interact with and learn form your coworkers.
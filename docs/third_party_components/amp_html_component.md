#JW Player AMP HTML Component

##Overview

The JW Player component for [AMP HTML](https://github.com/ampproject/amphtml) is available in the latest release of AMP JS (version [1459447315826](https://github.com/ampproject/amphtml/releases/tag/1459447315826)). The component is free and can be used with any JW Player edition.

For instructions on how to use `<amp-jwplayer>` in your AMP pages, see our [README in the AMP Github repository](https://github.com/ampproject/amphtml/tree/master/extensions/amp-jwplayer).

For information on why you need AMP HTML, see our [blog post](https://www.jwplayer.com/blog/jwplayer-amp-component/)

##Using the JW Player AMP HTML Component

As you will discover in our [JW Player for AMP example](https://github.com/ampproject/amphtml/blob/master/examples/jwplayer.amp.html), our component is super easy to use. However, due to the restrictions in AMP HTML, we had to place some restrictions on our AMP component, too:

* Only supports cloud-hosted JW Players
* Always loads the Player in an iFrame
* To play videos that do not originate from JW content servers (i.e., videos uploaded to JW Platform through our API or Dashboard), the videos must be registered as external URLs. For instructions on registering URLs in your JW Dashboard, see [this article](https://support.jwplayer.com/customer/portal/articles/2160275). For instructions on using the API, see the `sourcetype` option in the [/videos/create/ documentation](https://developer.jwplayer.com/jw-platform/reference/v1/methods/videos/create.html).
* You must specify a width and height in your `<amp-jwplayer>` tag. Optionally, you can use `layout="responsive"`, in which case the width and height specify the aspect ratio of the Player (for example, `width="16" height="9"` results in a 16:9 aspect ratio).

Using the JW Player AMP component is entirely optional. If you are not coding pages specifically for AMP HTML, your JW Players will continue to work the same way they always have, with no restrictions.

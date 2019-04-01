# Embed contextually relevant videos with Article Matching

<sup>Last Updated: April 1, 2019</sup>

<img src="https://img.shields.io/badge/%20-Beta-green.svg" />
	 <sup>If you would like to try this Beta product, please [contact our team](https://www.jwplayer.com/contact-us/).</sup>

Article Matching allows you to embed contextually relevant videos from your library into your articles. By making an addition to the playlist property, this feature provides you the following benefits:

<br/>

- An automated solution to embed contextually relevant videos into your articles with no additional editorial resources
- Increased reach and monetization opportunities for your videos with minimal editorial involvement
- Articles paired with a playlist of the most relevant videos from your hosted or registered videos
- Potential for increased video engagement

!!!important
You must be using either cloud-hosted or self-hosted JW Player 8.5.6+.
!!!

<br/>

Use the following steps to implement Article Matching:

1. Create an <a href="https://support.jwplayer.com/articles/create-a-playlist#create-an-article-matching-playlist" target="_blank">Article Matching playlist</a> in your <a href="https://dashboard.jwplayer.com/" target="_blank">JW Player dashboard</a>.
2. On the **DEVELOPER RESOURCES** tab of the Article Matching playlist, copy the **JSON URL**.
4. (Optional) Add parameters from the <a href="https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/#/Playlists/get_v2_playlists__playlist_id_" target="_blank">/v2/playlist/{playlist_id}</a> route to the JSON URL to refine results.<br/><br/>
**NOTE**: The `search=__CONTEXTUAL__` query **must not** be changed. This enables Article Matching and populates the Opengraph or HTML title at runtime. 
5. Add the JSON URL to the `playlist` object of a player that is in your article or template.

For example:

```json
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/1234abcd?search=__CONTEXTUAL__",
  "height": 360,
  "width": 640,
  "autostart": "viewable"
});
```
<br/>

Be sure to read these [FAQs](https://support.jwplayer.com/articles/embed-relevant-videos-with-article-matching#faqs) for more information about Article Matching.
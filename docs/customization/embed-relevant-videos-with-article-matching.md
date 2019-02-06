# Embed contextually relevant videos with Article Matching

<sup>Last Updated: February 6, 2019</sup>

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

1. Create a <a href="https://support.jwplayer.com/articles/create-a-playlist#create-a-video-search-playlist" target="_blank">video search playlist</a> in your <a href="https://dashboard.jwplayer.com/" target="_blank">JW Player dashboard</a>.
2. On the **DEVELOPER RESOURCES** tab of the video search playlist, copy the **JSON URL**.
3. In the JSON URL, replace `?search={video-name}` with `?contextual=true&search=__CONTEXTUAL__`. The `contextual` and `search` parameters **must not** be changed. <br/><br/>`contextual`: Query parameter that enables Article Matching<br/>Must always be `true`.<br/><br/>`search`: Search query that uses `__CONTEXTUAL__` to populate the Opengraph or HTML title at runtime.<br/><br/>Additional parameters from the <a href="https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/#/Playlists/get_v2_playlists__playlist_id_" target="_blank">/v2/playlist/{playlist_id}</a> route can be added to the URL to refine results.

4. Add the updated JSON URL to the `playlist` object of a player that is in your article or template.

For example:

```json
jwplayer("myElement").setup({
  "playlist": "https://cdn.jwplayer.com/v2/playlists/1234abcd?contextual=true&search=__CONTEXTUAL__",
  "height": 360,
  "width": 640,
  "autostart": "viewable"
});
```
<br/>

Be sure to read these [FAQs](https://support.jwplayer.com/articles/embed-relevant-videos-with-article-matching#faqs) for more information about Article Matching.
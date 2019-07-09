# Use legacy token signing to protect your content

The legacy (v1) Delivery API endpoints include a similar a security feature to [v2 URL token signing](https://developer.jwplayer.com/jw-platform/docs/developer-guide/delivery-api/url-token-signing/) that allows you to restrict public access to videos or to videos plus players. This feature is enabled in the dashboard. When enabled, content can only be requested by constructing so-called signed links. These links will expire after a short time, preventing unauthorized sharing or leeching of your content.

## Enabling Signing Enforcement

You can require URL token signing for assets related to your account through the Management API [/accounts/update](https://developer.jwplayer.com/jw-platform/reference/v1/methods/accounts/update.html) call using the `allow_downloads` and `allow_embeds` parameters or via the dashboard as documented in the [support article](https://support.jwplayer.com/articles/how-to-enable-url-token-signing).

!!!warning
Please make sure you start to use signing on your site before changing this security setting! Unsigned videos and/or players will **drop dead** the instant you change this setting.
!!!

## Signed Links

!!!note
Delivery API v2 endpoints use a different signing mechanism described [here](https://developer.jwplayer.com/jw-platform/docs/developer-guide/delivery-api/url-token-signing/)
!!!

A video or player URL can be signed by appending two querystring parameters to the regular URL. Here's two examples and a description of the parameters:

* http://cdn.jwplayer.com/videos/nPripu9l.mp4?exp=1371335018&sig=a0124258c73177029d09bb82c6608392
* http://cdn.jwplayer.com/players/nPripu9l-ALJ3XQCI.js?exp=1371335035&sig=f42664403879f61ece4f444d225ce507

### The `exp` Parameter

`exp` is the expiration date of the URL, as a UNIX timestamp (e.g. *1271338236*). Typically, generated URLs should be valid between a minute and a few hours.

### The `sig` Parameter

`sig` is a signature that is used to authorize the request. This signature is an MD5 digest of the  path, the expiration date and the account secret:

    md5(CONTENT_PATH:EXPIRATION_STAMP:ACCOUNT_SECRET)

Here's a small explanation of the three signature parameters:

`CONTENT_PATH` - This is only the path portion of the URL (e.g. *videos/nPripu9l.mp4*). No domain and no leading slash.

`EXPIRATION_STAMP` - This is the expiration date again (e.g. *1271338236*).

`ACCOUNT_SECRET` - This is the shared secret of your JW Platform account (e.g. *Ksi93hsy38sjKfha9JaheEMp*). It can be found in the *account* tab of the dashboard.


## Using signing

If you want to deny all public access to your videos or players, all you have to do is enable the security setting. There'll be no way for a third party to generate signed links, since they do not know your account secret. Your content will remain available for previewing / downloading within the dashboard.

If you want to secure your content, but still want to embed players or offer video downloads on your own site (e.g. if you have a pay-per-view site), then you should implement a small script on your site that automatically generates the signed links. For example, you could use a small PHP function like this one to always generate a valid signed URL:

```php
<?php
function get_signed_player($videokey,$playerkey) {
  $path = "players/".$videokey."-".$playerkey.".js";
  $expires = round((time()+3600)/300)*300;
  $secret = "Ksi93hsy38sjKfha9JaheEMp";
  $signature = md5($path.':'.$expires.':'.$secret);
  $url = 'http://cdn.jwplayer.com/'.$path.'?exp='.$expires.'&sig='.$signature;
  return $url;
};

echo "<p>Watch this cool video:</p>";
echo "<script type='text/javascript' src='".get_signed_player('nPripu9l','ALJ3XQCI')."'></script>";
?>
```

A couple of things to keep in mind when auto-generating signed links:

!!!warning
Signed links should always be generated serverside. Otherwise your shared secret will be exposed to the client. If you do want to use signed links in javascript or actionscript applications, setup a small serverside script to act as a proxy.
!!!

* The shorter you make the expiration dates, the more you lock down your content. If a link has expired, even download tools like Realplayer will not be able to grab the content. However, at a certain point you will run into expiration issues with slow-responding servers or small discrepancies in server time.
* If you have a high-volume website, the extra signature generation step might be a performance issue. In that case, you could cache signed URLs with an interval of e.g. 5 minutes. Signed requests do not have to be unique.

## Error handling

When unsigned content is requested while signing is enabled, the Delivery API will return a **403 Access forbidden** HTTP header.

When incorrectly signed content is requested, the Delivery API will also return a **403 Access forbidden** HTTP header. Signed URLs can be incorrect due to a wrong signature or due to an already expired timestamp.

Note that incorrectly signed URLs will always get a 403 returned and correctly signed URLs will always work. Use this to test and put in place your signing mechanism before actually enabling the security in the dashboard.


# Protecting your content with URL Token Signing

Delivery API includes a security feature that allows you to restrict public access to videos or to videos plus players. This feature is enabled in the dashboard. When enabled, content can only be requested by constructing so-called signed links. These links will expire after a short time, preventing unauthorized sharing or leeching of your content.

## Enabling Signing Enforcement

You can require URL token signing for assets related to your account through the Management API [/accounts/update](https://developer.jwplayer.com/jw-platform/reference/v1/methods/accounts/update.html) call using the `allow_downloads` and `allow_embeds` parameters or via the dashboard as documented in the [support article](https://support.jwplayer.com/articles/how-to-enable-url-token-signing).

!!!warning
Please make sure you start to use signing on your site before changing this security setting! Unsigned videos and/or players will **drop dead** the instant you change this setting.
!!!

## JWT Tokenized Links

!!!note
Delivery API v1 endpoints use a legacy url signing mechanism described [here](https://developer.jwplayer.com/jw-platform/reference/v1/content_signing.html)
!!!

Delivery API /v2/ endpoints take advantage of standardized token signing using JSON Web Tokens (JWTs). You can learn more about the specific construction, formatting and security of these tokens via [RFC 7519](https://tools.ietf.org/html/rfc7519). Discussion, tools and links to open source libraries are available at [jwt.io](https://jwt.io)

JWTs consist of three sections:

* A *header* specifying the cryptographic algorithm and token type.
* A *payload* containing *claims* in JSON format
* A *signature* that can be used to verify the token

### JWT Header for JW Platform Requests

At this time, JW Platform only supports a single algorithm and token type thus all headers should be based on:

    {
      "alg": "HS256",
      "typ": "JWT"
    }

### JWT Payload for Delivery API Requests

The payload consists of claims that specify a `resource` being requested, an expiration time (`exp`), and any parameters the endpoint accepts (in this example we also include `related_media_id`).

    {
      "resource": "/v2/playlists/Xw0oaD4q",
      "exp": 1893456000,
      "related_media_id": "RltV8MtT"
    }

**Required Claims:** All JW Platform JWTs MUST include the following claims.

```resource```

* The resource that is being requested. (e.g. /v2/playlists/Xw0oaD4q) this ensures that generated tokens cannot be applied to unintended resources.

```exp```

* The expiration date of the token, as a UNIX timestamp (e.g. *1893456000*). Typically, generated URLs should be valid between a minute and a few hours.
  * The shorter you make the expiration dates, the more you lock down your content. If a link has expired, even download tools will not be able to grab the content. However, overly quick expirations can result in bad user experience dues to small discrepancies in server time or delays in clients requesting resources at the expiring links.
  * If you have a high-volume website, the extra signature generation step might be a performance issue. In that case, you could cache signed URLs with an interval of e.g. 5 minutes. Signed requests do not have to be unique.

**Additional Claims:** JWTs can optionally contain additional claims to specify additional query parameters that are applicable to that resource, the example above includes `related_media_id` because the resource is a Similar Playlist. Specific query parameters available for each resource can be found in the [Delivery API reference](https://developer.jwplayer.com/jw-platform/docs/delivery-api-reference/).

### JWT Signature for JW Platform Requests

The signature portion is generated using an HMAC 256 hash of the preceding sections and the API Secret of the property for the content you are requesting. The specific details can be found in [RFC 7519](https://tools.ietf.org/html/rfc7519) but we recommend using a well supported [open source library](https://jwt.io/#libraries) in the language of your choice.

!!!warning
Because URL tokens use the property's API secret, it is inappropriate to generate them client-side as you would be exposing your secret to end users.
!!!

## Constructing URLs with tokens

To construct a URL with the JWT you created, simply include it as a single query parameter named `token` for the resource you are requesting.
For example, https://cdn.jwplayer.com/v2/playlists/Xw0oaD4q?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6Ii92Mi9wbGF5bGlzdHMvWHcwb2FENHEiLCJleHAiOjE4OTM0NTYwMDAsInJlbGF0ZWRfbWVkaWFfaWQiOiJSbHRWOE10VCJ9.Y5N7qUUXUUCmh-M8HHkc4Akveu294S69wSe2l1QMBl4 corresponds to the parameters described above.

If you would like to get started playing with JWTs manually, jwt.io offers nice debugging tool. [This link](https://jwt.io/#debugger?&id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6Ii92Mi9wbGF5bGlzdHMvWHcwb2FENHEiLCJleHAiOjE4OTM0NTYwMDAsInJlbGF0ZWRfbWVkaWFfaWQiOiJSbHRWOE10VCJ9.Y5N7qUUXUUCmh-M8HHkc4Akveu294S69wSe2l1QMBl4) will get you started with the token above; you will need to change the payload and secret to reflect content and the secret of your property.

### Examples

####PHP
This script uses [firebase/php-jwt](https://github.com/firebase/php-jwt/blob/master/src/JWT.php) (other libraries are available at [jwt.io](https://jwt.io/))

```php
<?php
require_once('JWT.php'); // Available from https://github.com/firebase/php-jwt/blob/master/src/JWT.php	
use \Firebase\JWT\JWT;

$playlist_id = "myListID"; // Replace with your playlist ID
$token_secret = "myAPIsecret"; // Replace this value with the API secret for the property

$resource = "/v2/playlists/".$playlist_id;
$exp = ceil((time() + 3600)/180) * 180; // Link is valid for 1hr but normalized to 3 minutes to promote better caching
$token_body = array(
    "resource" => $resource,
    // Other request parameters can be added here if desired.
    "exp" => $exp
);

$jwt = JWT::encode($token_body, $token_secret);

print "<a href=\"https://cdn.jwplayer.com/$resource?token=$jwt\">This is a signed link.</a>";

```

#### Python

This example uses PyJWT `pip install pyjwt` (other libraries are available at [jwt.io](https://jwt.io/))

```python
import jwt
import math
import time

playlist_id = "myListID" # Replace with your playlist ID
token_secret = "myAPIsecret" # Replace this value with the API secret for the property

resource = "/v2/playlists/" + playlist_id
exp = math.ceil((time.time() + 3600)/180) * 180 # Link is valid for 1hr but normalized to 3 minutes to promote better caching
token_body = {
    "resource": resource,
    # Other request parameters can be added here if desired.
    "exp": exp
}

encoded = jwt.encode(token_body, token_secret, algorithm='HS256')

print(encoded)

```
## Error handling

When unsigned content is requested while signing is enabled, the Delivery API will return a **403 Forbidden** HTTP Status.

When incorrectly or expired signed content is requested, the content service will also return a **403 Forbidden** HTTP Status. Signed URLs can be incorrect due to a wrong signature or due to an already expired timestamp.

Note that incorrectly signed URLs will always return a 403. Correctly signed, unexpired URLs will always work. Use this to test your signing mechanism and start using it across your site before enabling the security enforcement in the dashboard.

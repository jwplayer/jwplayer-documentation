# File Uploads

The uploading of files (videos, images and skins) is an integral part of the JW Platform Management API. There’s various API calls that have an upload option. The upload process is exactly the same for each of these calls. While a file is uploading, progress information can be given to the user.

Please note, examples given below are for uploading a video file using `/videos/create` API call. If you uploading using other API calls, please change:

`videos` part of the upload URL to:

* `accounts/skins` for method_accounts_skins_create API call
* `accounts/skins` for method_accounts_skins_update API call
* `accounts/images` for method_accounts_images_create API call
* `accounts/images` for method_accounts_images_update API call
* `videos/thumbnails` for `/videos/thumbnails/update` API call
* `videos/tracks` for `/videos/tracks/create` API call

<br/>

parameter names `video` and `video_key` to:

* `skin` and `skin_key` for method_accounts_skins_create API call
* `skin` and `skin_key` for method_accounts_skins_update API call
* `image` and `image_key` for method_accounts_images_create API call
* `image` and `image_key` for method_accounts_images_update API call
* `video` and `video_key` for `/videos/thumbnails/update` API call
* `track` and `track_key` for `/videos/tracks/create` API call

!!!tip
For video file uploads of up to 5GB, we **strongly** recommend using the s3 upload method over standard file uploads. In practice, the CDN accelerated s3 uploads are the fastest and most reliable means to get a file from a local system to JW Platform. For more information on upload options, please see our Developer Guide.
!!!

## Two-step process

Every time an API call has the option to upload a file, it can be done using a two-step process:

* First, the API create or update call is done. The call will return an upload URL.
* Second, the file is submitted to this upload URL using `multipart/form-data` HTTP `POST` method.

This two-step process allows us to directly deliver files at our transcoding server. It allows API users to directly upload from the client’s computer instead of going through the web server that executes the calls.

<br/>

## Upload URL

After executing an API call that has an upload option, its response will include a link block with parameters that can be used to construct the upload URL. For example, here is the response of a `/videos/create` API call:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  <video key="tL17msiU">
    <link>
      <protocol>http</protocol>
      <address>upload.jwplatform.com</address>
      <path>/v1/videos/upload</path>
      <query>
        <key>vtQmcboj</key>
        <token>e2bbad0fd889d5d2e30047596cfe3789778257d2</token>
      </query>
    </link>
  </video>
</response>
```

The upload URL should be concatenated from the parts of the link block using the following scheme:

```
upload_url = <link/protocol> + "://" + <link/address> + <link/path> +
    "?api_format=<one of: py, json, xml, php>" +
    "&key=" + <link/query/key> +
    "&redirect_address=" + <redirect_address> +
    "&redirect_query.<param_name1>=" + <param_value1> +
    "&redirect_query.<param_name2>=" + <param_value2> +
    "&key_in_path=" + <key_in_path> +
    "&token=" + <link/query/token>
```

That should produce the following upload URL using response example from above:

```http
http://upload.jwplatform.com/v1/videos/upload
    ?api_format=xml
    &key=vtQmcboj
    &token=e2bbad0fd889d5d2e30047596cfe3789778257d2
```

Please note, upload `token` will expire after 7 days. After that new asset should be created using corresponding API `create` call, or for the existing assets with `ready` state, an API `update` call should be used.

## Redirect parameters
In addition to the parameters in the `link` block, the following redirect query parameters can be added to the upload URL:

| Parameters | String | Description |
| --- | --- | --- |
| `redirect_address` | String | Redirect address string using the following format: `<protocol>://<host>/<path>` |
| `redirect_query.param` | String | Redirect query parameter. `param` part of the redirect parameters (after the ‘.’ separator) specifies name of the parameter. Redirect query parameter can be specified multiple times, as far as parameter name is unique. |
| `key_in_path` | String | Specifies if `//video/@key` should be added as a query parameter to the redirect URL, or at the end of the URL path.<br/><br/>* `True`: Add value of the `//video/@key` at the end of the URL path: `http://<host>/<path>/<key>`<br/><br/>* `False`: Add value of the `//video/@key` as `video_key` query parameter: `http://<host>/<path>?video_key=<key>`<br/><br/>Default is `False`. |


When using these redirect parameters, the upload URL should look like this:

```http
http://upload.jwplatform.com/v1/videos/upload
    ?api_format=xml
    &key=vtQmcboj
    &redirect_address=http://example.com/path
    &redirect_query.parameter1=value1
    &redirect_query.parameter2=value2
    &key_in_path=True
    &token=e2bbad0fd889d5d2e30047596cfe3789778257d2
```

<br/>

## Using the upload URL

After upload URL has been constructed, it can be used as an action parameter in an HTML form:

```html
<form method="POST"
     action="http://upload.jwplatform.com/v1/videos/upload
     ?api_format=xml&key=vtQmcboj
     &token=e2bbad0fd889d5d2e30047596cfe3789778257d2"
     enctype="multipart/form-data">
  <fieldset>
  <input type="file" name="file" />
  <button type="submit">Upload</button>
  </fieldset>
</form>
```

It can also be used as a URL parameter, e.g. when using cURL:

```
curl --form file=@./video.mpeg
    "http://upload.jwplatform.com/v1/videos/upload
     ?api_format=xml
     &key=vtQmcboj
     &token=e2bbad0fd889d5d2e30047596cfe3789778257d2"
```

!!!warning
Form input field name for the file path **must** be set to `file`. Any other field name will not be picked up by the upload server.
!!!

## Example response

This is an example response of a successful video file upload.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  <video key="tL17msiU">
    <md5>6d4063f37eed1e847ed17b7be6364546</md5>
    <size>21545452</size>
  </video>
  <redirect_link>
    <address>http://example.com/path/tL17msiU</address>
    <query>
      <parameter1>value1</parameter1>
      <parameter2>value2</parameter2>
    </query>
  </redirect_link>
</response>
```

| Parameters | Type | Description |
| --- | --- | --- |
| `/response/status` | String | Upload status. Set to `ok` if upload was successfully. |
| `//video/@key` | String | Video key. |
| `//video/md5` | String | Video file MD5 message digest calculated by the upload server after the file was successfully received. |
| `//video/size` | Unsigned integer | Size of the received video file in bytes. |
| `//video/redirect_link/address` | String | Redirect address. |
| `//video/redirect_link/query/parameter` | String | Redirect URL query parameter. |

<br/>

## Tracking file upload progress

File upload progress can be tracked by polling upload progress URL. This URL should be constructed by concatenating parts of the `link` block returned by `create` or `update` API call and specifying JSON-P callback function name using the following scheme:

```
upload_progress_url = <link/protocol> + "://" + <link/address> +
    "/progress?token=" + <link/query/token> + "&callback=callback"
```

That should produce the following progress request URL using response example from above:

```http
http://upload.jwplatform.com/progress
    ?token=e2bbad0fd889d5d2e30047596cfe3789778257d2
    &callback=callback
```
<br/>

## Upload progress tracking responses

Upload progress URL returns upload status in JSON-P format. The following responses are possible:

**Upload for specified token not yet started or token is invalid**

```
callback(
  {
    'state' : 'starting'
  }
);
```

**Upload is in progress**

```
callback(
  {
    'state' : 'uploading',
    'received' : <received bytes>,
    'size' : <file size in bytes>
  }
);
```

**Upload is finished**

```
callback(
  {
    'state' : 'done'
  }
);
```

**An error has occurred during file upload**

```
callback(
  {
    'state' : 'error',
    'status' : <HTTP status number>
  }
);
```
# Upload videos with a resumable file upload protocol

!!!warning
We **strongly** recommend using the s3 upload method over resumable uploads. In practice, the CDN accelerated s3 uploads are the fastest and most reliable means to get a file from a local system to JW Platform (even for unreliable or low bandwidth connections). For more information on upload options, please see our Developer Guide.
!!!

Large video files can be uploaded using a resumable file upload protocol. This method allows to continue file upload only for the remaining part of the file after a network interruption.

## Two-step process

Resumable file upload performed using a two-step process:

1. Make a `POST` call to `/videos/create` or `/videos/update` API call is done. The call will return an upload URL and an upload session ID.
2. Use the `POST` method to upload the file to the upload URL in small chunks. If upload is interrupted, it can be resumed from the last position acknowledged by the upload server.

## Upload URL

After executing an API call that has a resumable upload option, its response will include a link block with parameters that can be used to construct the upload URL. For example, here is the response of a `/videos/create` API call:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  <video key="tL17msiU">
    <link>
      <protocol>http</protocol>
      <address>upload.jwplatform.com</address>
      <path>/v1/videos/upload/resumable</path>
      <query>
        <key>vtQmcboj</key>
      </query>
    </link>
    <session_id>kwJei9j2vtQmcbojrlGJY3mbJFMHfzZwPXBwoSQr</session_id>
  </video>
</response>
```

The upload URL should be concatenated from the parts of the `link` block using the following scheme:

```
upload_url = <link/protocol> + "://" + <link/address> + <link/path> +
    "?api_format=<one of: py, json, xml, php>" +
    "&key=" + <link/query/key> +
    "&redirect_address=" + <redirect_address> +
    "&redirect_query.<param_name1>=" + <param_value1> +
    "&redirect_query.<param_name2>=" + <param_value2> +
    "&key_in_path=" + <key_in_path>
```

That should produce the following upload URL using response example from above:

```
http://upload.jwplatform.com/v1/videos/upload/resumable
    ?api_format=xml
    &key=vtQmcboj
```

## Redirect parameters

In addition to the parameters in the link block, the following redirect query parameters can be added to the upload URL:

| Parameter | Type | Description |
| --- | --- | --- |
| `redirect_address` | String | Redirect address string using the following format: `<protocol>://<host>/<path>`|
| `redirect_query.param` | String | Redirect query parameter. `param` part of the redirect parameters (after the ‘.’ separator) specifies name of the parameter. Redirect query parameter can be specified multiple times, as far as parameter name is unique.|
| `key_in_path` | String | Specifies if `//video/@key` should be added as a query parameter to the redirect URL, or at the end of the URL path. <br/><br/>* `True`: Add value of the `//video/@key` at the end of the URL path: `http://<host>/<path>/<key>`<br/><br/>* `False`: Add value of the `//video/@key` as `video_key` query parameter: `http://<host>/<path>?video_key=<key>`<br/><br/> Default is `False`. |

When using these redirect parameters, the upload URL should look like this:

```html
http://upload.jwplatform.com/v1/videos/upload/resumable
    ?api_format=xml
    &key=vtQmcboj
    &redirect_address=http://example.com/path
    &redirect_query.parameter1=value1
    &redirect_query.parameter2=value2
    &key_in_path=True
```

## Uploading File

After upload URL has been constructed, it can be used to upload file chunks.

**Example request to upload the first file chunk**

```http
POST /v1/videos/upload/resumable
    ?api_format=xml
    &key=vtQmcboj
    &redirect_address=http://example.com/path
    &redirect_query.parameter1=value1
    &redirect_query.parameter2=value2
    &key_in_path=True HTTP/1.1
Host: upload.jwplatform.com
Content-Length: 1234567
Content-Disposition: attachment; filename="video.mpeg"
Content-Type: application/octet-stream
X-Content-Range: bytes 0-1234566/96768273
X-Session-ID: kwJei9j2vtQmcbojrlGJY3mbJFMHfzZwPXBwoSQr

<bytes 0-1234566>
```

## Request structure

### Response headers

The following headers must be provided in addition to the default ones:

| Header | Type | Description |
| --- | --- | --- |
| `Content-Disposition` | String | `attachment, filename=<file_name>` |
| `Content-Type` | String | MIME type of a file being uploaded. MIME type must not be set to `multipart/form-data`. If MIME type of the file cannot be determined, `application/octet-stream` type may be used. |
| `X-Content-Range` | String | Byte range of the chunk being uploaded and total size of the file in bytes:<br/>`bytes <chunk_start_byte>-<chunk_end_byte>/<file_size>`<br/><br/>**WARNING**: The first byte of a file has number `0`, the last byte has number `n-1`, where `n` is the size of the file in bytes.|
| `X-Session-ID` | String | Resumable upload session ID. Provided in response from a `/videos/create` or from a `/videos/update` API call in the `session_id` parameter.|

### Response body

The body of the request must contain a chunk of the file corresponding to the range that was specified in `X-Content-Range` header.

**Example response after uploading a file chunk**

```http
HTTP/1.1 201 Created
Date: Wed, 08 Aug 2012 09:24:34 GMT
Content-Length: 18
Range: 0-1234566/96768273

0-1234566/96768273
```

## Response structure

Upload server acknowledges successful reception of the file chunk with `201 Created` HTTP status in the response. Client then may proceed with uploading of the next file chunk.

### Response headers

| Header | Type | Description |
| --- | --- | --- |
| Range | String | Received byte range - a combination of byte ranges from all uploaded file chunks.|

### Response body

Received byte range. Same as in the `Range` header.

**Example request to upload the last file chunk**

```http
POST /v1/videos/upload/resumable
    ?api_format=xml
    &key=vtQmcboj
    &redirect_address=http://example.com/path
    &redirect_query.parameter1=value1
    &redirect_query.parameter2=value2
    &key_in_path=True HTTP/1.1
Host: upload.jwplatform.com
Content-Length: 472047
Content-Disposition: attachment; filename="video.mpeg"
Content-Type: application/octet-stream
X-Content-Range: bytes 96296226-96768272/96768273
X-Session-ID: kwJei9j2vtQmcbojrlGJY3mbJFMHfzZwPXBwoSQr

<bytes 96296226-96768272>
```

**Example response after uploading the last file chunk** 

This is an example response of a successful video file upload.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  <video key="tL17msiU">
    <size>96768273</size>
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

| Parameter | Type | Description |
| --- | --- | --- |
| `/response/status` | String | Upload status. Set to `ok` if upload was successfully. |
| `//video/@key` | String | Video key. |
| `//video/size` | Unsigned integer | Size of the received video file in bytes. |
| `//video/redirect_link/address` | String |Redirect address. |
| `//video/redirect_link/query/parameter` | String | Redirect URL query parameter. |

## Resuming File Upload

If the file upload was interrupted due to the network connection issue or paused by the user, client should proceed with resuming the upload by uploading file chunk from the 0 byte position. Upload server will response with the combined byte range received in the previous upload session(s) and it will discard uploaded chunk if it has been received before. Client must use received byte range to determine start byte for the next file chunk. For example, if upload server responds with the received byte range `0-52370332/96768273`, the next file chunk start byte must be `52370333`.
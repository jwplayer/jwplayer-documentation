# Upload videos with AWS S3

Video files can be uploaded to AWS S3. This method will improve upload speed by using geographically closest S3 server and Amazon’s *S3 Transfer Acceleration* technology.

!!!warning
S3 file uploads are limited to files less than 5GB in size. For larger files, a different upload method will need to be used.
!!!

## Two-step process

S3 file upload is done using a two-step process:

1. Make a `POST` call to `/videos/create` or `/videos/update` API call is done. The call will return an upload URL.
2. Use the `PUT` method to submit the file to the upload URL.

## Upload URL

Response of the create or update API call includes a link block with parameters that should be used to construct the upload URL. For example, response of the /videos/create API call:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  <video key="tL17msiU">
    <link>
      <protocol>https</protocol>
      <address>upload-s3.jwplatform.com</address>
      <path>/tL17msiU</path>
      <query>
        <AWSAccessKeyId>AKIAIRXCJ3TPZA4HVNYZ</AWSAccessKeyId>
        <Expires>1482770374</Expires>
        <Signature>1/l+L6/yOE05dNEbXHW8sw7TGF4=</Signature>
      </query>
    </link>
  </video>
</response>
```

The upload URL should be concatenated from the parts of the `link` block using the following scheme:

```
upload_url = <link/protocol> + "://" + <link/address> + <link/path> +
    "?AWSAccessKeyId=" + <link/query/AWSAccessKeyId> +
    "&Expires=" + <link/query/Expires> +
    "&Signature=" + urlencode(<link/query/Signature>)
```

That should produce the following upload URL using response example from above:

```html
https://upload-s3.jwplatform.com/tL17msiU
    ?AWSAccessKeyId=AKIAIRXCJ3TPZA4HVNYZ
    &Expires=1482770374
    &Signature=1%2Fl%2BL6%2FyOE05dNEbXHW8sw7TGF4%3D
```

<br/>

## Uploading File

After upload URL has been constructed, it can be used to upload file using, for example, cURL tool:

```
curl --request PUT --upload-file /file_path/file_name.mp4 \
"https://upload-s3.jwplatform.com/tL17msiU?AWSAccessKeyId=AKIAIRXCJ3TPZA4HVNYZ&Expires=1482770374&Signature=1%2Fl%2BL6%2FyOE05dNEbXHW8sw7TGF4%3D"
```
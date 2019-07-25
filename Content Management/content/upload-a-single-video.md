# Upload a single video

Uploading videos to the platform via the API can be achieved in a number of ways. **We recommend the following preference order for achieving uploads:**

1. [**Fetch Uploads:**](#fetch-uploads) If your video is accessible via http(s) on the web. Give us a link and we'll go fetch it.
2. [**CDN Accelerated Uploads:**](#cdn-accelerated-uploads) For files up to 5GB in size
3. [**Regular Style Uploads:** ](#regular-style-uploads) For files greater than 5GB (up to the system limit of 25GB)
4. [**FTP:**](#ftp) We recommend against the use of FTP

## Fetch Uploads 
If your video is accessible via http(s) on the web. Give us a link and we'll go fetch it. By having our servers talk to your servers, both ends live in well provisioned data centers with good networks so ingest is very fast and reliable. **Steps:**
1. Create a video specifying a ``download_url`` from which we will fetch the source video. [Clack](https://github.com/rmnl/clack) example:

```
clack call /videos/create "{'title':'My New Fetch Upload', 'download_url':'https://mysite.net/videos/myVideo.mp4'}"
```

## CDN Accelerated Uploads

For files up to 5GB in size, we have set up cloud infrastructure to allow you to upload directly to the nearest Amazon edge connection. In practice, we have seen these edge accelerated uploads go up to five times faster than non-accelerated uploads. These uploads use a simple HTTPS PUT to a signed link. 

**Steps:** A demonstration script for uploading with the Python SDK is available [here](https://github.com/jwplayer/jwplatform-py/blob/master/examples/video_s3_create.py).

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import logging
import sys

import jwplatform
import requests

logging.basicConfig(level=logging.INFO)


def create_video(api_key, api_secret, local_video_path, **kwargs):
    """
    Function which creates new video object via s3 upload method.
    :param api_key: <string> JWPlatform api-key
    :param api_secret: <string> JWPlatform shared-secret
    :param local_video_path: <string> Path to media on local machine.
    :param kwargs: Arguments conforming to standards found @ https://developer.jwplayer.com/    jw-platform /refer  methvideos/create.html
    :return:
    """
    filename = os.path.basename(local_video_path)

    # Setup API client
    jwplatform_client = jwplatform.Client(api_key, api_secret)

    # Make /videos/create API call
    logging.info("creating video")
    try:
        response = jwplatform_client.videos.create(upload_method='s3', **kwargs)
    except jwplatform.errors.JWPlatformError as e:
        logging.error("Encountered an error creating a video\n{}".format(e))
        sys.exit(e.message)
    logging.info(response)

    # Construct base url for upload
    upload_url = '{}://{}{}'.format(
        response['link']['protocol'],
        response['link']['address'],
        response['link']['path']
    )

    # Query parameters for the upload
    query_parameters = response['link']['query']

    # HTTP PUT upload using requests
    headers = {'Content-Disposition': 'attachment; filename="{}"'.format(filename)}
    with open(local_video_path, 'rb') as f:
        r = requests.put(upload_url, params=query_parameters, headers=headers, data=f)
        logging.info('uploading file {} to url {}'.format(local_video_path, r.url))
        logging.info('upload response: {}'.format(r.text))
        logging.info(r)
```

Alternatively, via clack and curl:

1. Create a video with the `upload_method: s3` to get an upload link. [Clack](https://github.com/rmnl/clack) example:

    ```
    clack call /videos/create "{'title':'My s3 Accelerated Upload','upload_method':'s3'}"
    ```

2. Use curl or another tool to make an HTTP PUT to the link returned:

    ```
    curl --request PUT --upload-file /file_path/file_name.mp4 "https://jwplatform-upload.s3-accelerate.amazonaws.com/tL17msiU?AWSAccessKeyId=AKIAIRXCJ3TPZA4HVNYZ&Expires=1482770374&Signature=1%2Fl%2BL6%2FyOE05dNEbXHW8sw7TGF4%3D"
    ```

## Regular Style Uploads
For files greater than 5GB (up to the system limit of 25GB) the regular and resumable style uploads can be used. **Steps:**

1. Create a video without specifying an upload_method or specifying resumable. [Clack](https://github.com/rmnl/clack) example:

    ```
    clack call /videos/create "{'title':'My 7GB Upload'}"
    ```

2. Use curl or another tool to submit the file as a form to the link returned:

    ```
    curl --form file=@./video.mpeg "http://upload.jwplatform.com/v1/videos/upload?api_format=xml&key=vtQmcboj&  token=e2bbad0fd889d5d2e30047596cfe3789778257d2"
    ```

## FTP

We recommend against the use of FTP but if you have an enterprise account and existing workflows require ftp, [contact us](https://www.jwplayer.com/contact-us/?utm_source=developer&utm_medium=CTA&utm_campaign=platform-docs) to get it enabled on your account.

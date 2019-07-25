# Upload multiple videos

Though it is possible to do individual video uploads to your platform account, it is also possible to perform batch video uploading programmatically using the JW Platform API. In order to perform this process, a record of relevant data will need to be created as a CSV(comma-separated value) file. Data in the file will then be processed, resulting in the upload of video files. In addition to a video file, it is also possible to associate title, description, organizational tags, and even custom data. This creates a new video object in JW Platform for each row of data in the csv file.

## Preparing a CSV Ingest Sheet

Your csv should have columns A-F in the header. For the sake of organization, **download\_url**, **title**, **description**, **tags**, **date**, and **link** are highly recommended to be present in your csv. We will still be able to ingest your files if your video records have an empty value for some of the fields, so it is worth utilizing these whenever possible.
An example of a properly formatted CSV can be downloaded [here](../batch-upload/jwplatform_manifest_template.csv).


### Required Value

-   **download\_url -** EVERY video record MUST have a download\_url. This refers to the remote URL of your video file.

Note that our platform will only ingest files served over http. Both RTMP and HLS (m3u8) sources will not work. We recommend that your videos adhere to the guidelines [here](http://support.jwplayer.com/customer/portal/articles/1433634-preparing-videos-for-upload) to ensure our platform can transcode them.

### Optional Values

The following values are optional, but can be imported into our platform. While these are not required, they can help greatly with content organization.

-   **title**
-   **description**
-   **tags**
-   **date** (UTC, unix timestamp)
-   **link**
-   **custom fields** (These fields don’t need to have a value set and can be empty)

### Custom Fields

Custom fields can be useful for saving additional metadata to your video object records. In this example, both the id and the thumbnail url from the legacy system are saved to the video object. A custom field is always formed as follows: custom.\[myfieldname\]

### Note on HTML Encoding

Special characters should not be HTML encoded. A number of publishers and services use HTML encoded characters within their video metadata. HTML encoded characters in the **title**, **description**, and **tags** fields should be decoded before pushing to the API.

## Processing Your CSV Sheet Programmatically

As mentioned earlier, the csv is simply a cohesive method for preparing your legacy videos to be ‘ingested’ by the JW Platform. The real work is done programmatically through our API. Learn more about the API [here](https://developer.jwplayer.com/jw-platform/reference/v1/index.html). The only endpoint you will be using for uploading is the ‘[/videos/create](http://developer.jwplayer.com/jw-platform/reference/v1/methods/videos/create.html)’ call.

### Basic Workflow

The process of batch importing work along the following timeline:

1.  Your code imports the appropriate SDK (optional)
2.  Your code opens the ingest CSV and parses it into an array or list
3.  Your code parses the header column and assumes the remaining rows are each video
4.  Your code loops over each video row and calls the ‘/videos/create’ endpoint, creating a video record for each
5.  Your code outputs the video\_key created by the JWPlatform (optional, but useful)

### Expected Output and Example Code

When successfully running a batch upload, the expected result would be as follows:

    $ php batch.php
    Sintel Trailer upload success. key = ad9vs7d
    Big Buck Bunny Trailer upload success. key = ad9vs7d
    Elephants Dtream Trailer upload success. key = ad9vs7d

To perform your own batch import, please see our code sample [here](../batch-upload/api-batchupload.zip). This zip includes both PHP and Python batch upload sample code.

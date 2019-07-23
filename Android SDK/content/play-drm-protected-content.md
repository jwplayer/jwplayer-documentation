# Digital Rights Management

<img src="https://img.shields.io/badge/SDK-Android%20v3-0AAC29.svg?logo=android">

On Android 4.3 and higher the JW Player SDK for Android supports Digital Rights
Management (DRM) protected playback.

The JW Player SDK for Android supports any DRM scheme for which a modular DRM
component exists on the device. All Android devices are required to support
Widevine modular DRM (with L3 security, although many devices also support L1).
Some devices may support additional schemes such as PlayReady.

## Playing DRM protected content
In order to play DRM protected content you are required to attach
a `MediaDrmCallback` to a `PlaylistItem`.

The `MediaDrmCallback` is responsible for making provisioning and
 key requests. You should implement this interface to make network requests
 to your DRM license server in order to obtain the required keys.

Example `MediaDrmCallback` implementation:

```java
@TargetApi(18)
public class WidevineMediaDrmCallback implements MediaDrmCallback {

  private static final String WIDEVINE_LICENSE_SERVER_BASE_URI =
      "https://URL-TO-YOUR-LICENSE-SERVER";

  private final String defaultUri;

  public WidevineMediaDrmCallback(String contentId, String provider) {
    String params = "?video_id=" + contentId + "&provider=" + provider;
    defaultUri = WIDEVINE_LICENSE_SERVER_BASE_URI + params;
  }

  @Override
  public byte[] executeProvisionRequest(UUID uuid, ProvisionRequest request) throws IOException {
    String url = request.getDefaultUrl() + "&signedRequest=" + new String(request.getData());
    return executePost(url, null, null);
  }

  @Override
  public byte[] executeKeyRequest(UUID uuid, KeyRequest request) throws IOException {
    String url = request.getDefaultUrl();
    if (TextUtils.isEmpty(url)) {
      url = defaultUri;
    }
    return executePost(url, request.getData(), null);
  }

  /**
   * Executes a post request using {@link HttpURLConnection}.
   *
   * @param url The request URL.
   * @param data The request body, or null.
   * @param requestProperties Request properties, or null.
   * @return The response body.
   * @throws IOException If an error occurred making the request.
   */
  public static byte[] executePost(String url, byte[] data, Map<String, String> requestProperties)
      throws IOException {
    HttpURLConnection urlConnection = null;
    try {
      urlConnection = (HttpURLConnection) new URL(url).openConnection();
      urlConnection.setRequestMethod("POST");
      urlConnection.setDoOutput(data != null);
      urlConnection.setDoInput(true);
      if (requestProperties != null) {
        for (Map.Entry<String, String> requestProperty : requestProperties.entrySet()) {
          urlConnection.setRequestProperty(requestProperty.getKey(), requestProperty.getValue());
        }
      }
      // Write the request body, if there is one.
      if (data != null) {
        OutputStream out = urlConnection.getOutputStream();
        try {
          out.write(data);
        } finally {
          out.close();
        }
      }
      // Read and return the response body.
      InputStream inputStream = urlConnection.getInputStream();
      try {
        return toByteArray(inputStream);
      } finally {
        inputStream.close();
      }
    } finally {
      if (urlConnection != null) {
        urlConnection.disconnect();
      }
    }
  }
```

## Considerations

Please note that not all Android devices may have secure decoders for
every video codec. You can use Android's [MediaCodecList](http://developer.android.com/reference/android/media/MediaCodecList.html)
class to find out if secure playback for a particular codec is supported on a device.

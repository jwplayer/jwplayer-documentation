# Output Formats

The JW Platform Management API can deliver the data returned with API calls in various formats. You can freely choose the format that best fits your needs. Because of its nature of nodes and attributes, the XML format slightly differs from the other output formats.

## Formats
The following formats are supported:

* `py`: Serialized Python (using the highest data stream protocol version (`HIGHEST_PROTOCOL`) of the <a href="http://docs.python.org/library/pickle.html" target="_blank">pickle</a> module)
* `json`: JSON (JavaScript Object Notation)
* `xml`: XML
* `php`: Serialized PHP

!!!warning
The output format is specified using the `api_format` parameter. It **must** be provided with each API call.
!!!

## Interoperability

The structure of the XML output format differs from the others formats, since XML allows for the use of attributes in its data structure (this is also recommended). Totals, keys and IDs are, for example, placed as attributes in XML. To illustrate, here’s a possible return from the `/videos/list` call in XML format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  <videos total="22">
    <video key="yYul4DRz">
      <author>JW Platform</author>
      <date>1225962900</date>
      <description>New video</description>
      <duration>12.0</duration>
      <link>http://www.jwplatform.com</link>
      <status>ready</status>
      <tags>new, video</tags>
      <title>New test video</title>
    </video>
    ...
  </videos>
</response>
```

Here is the same return in PHP format. As you can see, the `key` attribute is a parameter and the `total` attribute is not returned as PHP `count()` function can be used to get total number of videos.

```php
[status] => ok
[videos] => Array (
    [0] => Array (
        [status] => ready
        [description] => New video.
        [tags] => new, video
        [title] => New test video
        [duration] => 12.0
        [link] => http://www.jwplatform.com
        [author] => JW Platform
        [key] => yYul4DRz
        [date] => 1225962900
    ...
    )
)
```
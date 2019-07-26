# Error Handling

Whenever the API is unable to process a call, it will return an error. This happens e.g. when required parameters are missing, when authentication fails or when parameters are out of bounds.

## Error Messages
If an API call succeeds, it always returns data in the following structure (example with the [xml output format](../output-formats)):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>ok</status>
  ...
</response>
```

If an API call fails, an error message is returned. Errors are always structured as follows:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>error</status>
  <code>ParameterInvalid</code>
  <title>Invalid Parameter</title>
  <message>video_key: Video with the key aT2u4xRa does not exist</message>
</response>
```

The error message has the following parameters:

| Parameters | String | Description |
| --- | --- | --- |
| `status` | String | Call execution status. Set to `error` if call has failed. |
| `code` | String | An error code. |
| `title` | String | Error title (short error description). |
| `message` | String | Detailed error description. |

In addition to returning an error message, the API sets the HTTP Status Code of the call response to the error specific code, instead of the regular status `200 OK`.

## Error codes

Here is a full list of error codes that can be returned if an API call fails:

| Error |  Description |
| -- | -- |
| `UnknownError` | - `title`: An Unknown Error occurred<br/><br/>- `HTTP Status`: 400 Bad Request |
| `InternalError` | - `title`: Internal Error<br/><br/>- `HTTP Status`: 500 Internal Server Error |
| `NotFound` | - `title`: Not Found<br/><br/>- `HTTP Status`: 404 Not Found |
| `NoMethod` | - `title`: No Method Specified<br/><br/>- `HTTP Status`: 400 Bad Request |
| `NotImplemented` | - `title`: Method Not Implemented<br/><br/>- `HTTP Status`: 501 Not Implemented |
| `NotSupported` | - `title`: Method or parameter not supported<br/><br/>- `HTTP Status`: 405 Method Not Allowed |
| `CallInvalid` | - `title`: Call Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |
| `DatabaseError` | - `title`: Database Error<br/><br/>- `HTTP Status`: 500 Internal Server Error |
| `FileUploadFailed` | - `title`: File Upload Failed<br/><br/>- `HTTP Status`: 400 Bad Request |
| `ItemAlreadyExists` | - `title`: Item Already Exists<br/><br/>- `HTTP Status`: 409 Conflict |
| `PermissionDenied` | - `title`: Permission Denied<br/><br/>- `HTTP Status`: 403 Forbidden |
| `PreconditionFailed` | - `title`: Method Precondition Failed<br/><br/>- `HTTP Status`: 412 Precondition Failed |
| `ParameterMissing` | - `title`: Missing Parameter<br/><br/>- `HTTP Status`: 400 Bad Request |
| `ParameterInvalid` | - `title`: Invalid Parameter<br/><br/>- `HTTP Status`: 400 Bad Request |
| `ParameterEmpty` | - `title`: Empty Parameter<br/><br/>- `HTTP Status`: 400 Bad Request |
| `APIParameterEncodingError` | - `title`: Parameter Encoding Error<br/><br/>- `HTTP Status`: 400 Bad Request |
| `ParameterTypeEmpty` | - `title`: Parameter Type Error<br/><br/>- `HTTP Status`: 400 Bad Request |
| `ApiKeyMissing` | - `title`: User Key Missing<br/><br/>- `HTTP Status`: 400 Bad Request |
| `ApiKeyInvalid` | - `title`: User Key Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |
| `DigestInvalid` | - `title`: Digest Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |
| `FileSizeInvalid` | - `title`: File Size Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |
| `TimestampMissing` | - `title`: Timestamp Missing<br/><br/>- `HTTP Status`: 400 Bad Request |
| `TimestampInvalid` | - `title`: Timestamp Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |
| `TimestampExpired` | - `title`: Timestamp Expired<br/><br/>- `HTTP Status`: 403 Forbidden |
| `NonceMissing` | - `title`: Nonce Missing<br/><br/>- `HTTP Status`: 400 Bad Request |
| `NonceInvalid` | - `title`: Nonce Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |
| `SignatureMissing` | - `title`: Signature Missing<br/><br/>- `HTTP Status`: 400 Bad Request |
| `SignatureInvalid` | - `title`: Signature Invalid<br/><br/>- `HTTP Status`: 400 Bad Request |

!!!
Sending strings that contain colons (for example, in URLs) will cause `SignatureInvalid` errors. Please refer to [API signature generation](../authentication#api-signature-generation) documentation.
!!!
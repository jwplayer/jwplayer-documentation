# API call syntax

API calls to JW Platform are in essence just HTTP requests to a specific location. The parameters of each call can be sent using either POST or GET. A number of parameters are always required: those for signing the call and the one for defining the output format.

## Syntax

The API has a single entry point (api.jwplatform.com) that can work with multiple input/output formats. For the input, both `GET` and `POST` requests are accepted. 

The call syntax is: 

```
<http|s>://<APIserver>/<APIversion>/<callClass>/<callSubclass>/<method|attribute>[?<parameters>]
```

| | Description|
| --- | --- |
| **http|s** | Connection protocol: HTTP or HTTPS |
| APIserver | API server<br/><br>For example, `api.jwplatform.com`|
| **APIversion** | API version |
| **callClass** | Class of the API call |
| **callSubclass** | Subclass of the API call |
| **method|attribute** | API call method or attribute |
| **parameters** | API call parameters |

In cases where large binary data is submitted (videos and images), this data should be included in the body of the HTTP `POST` request. The binary data should be included as-is, without any encoding.

## Required parameters

In addition to the call-specific parameters, each API call **must** always include the following parameters:

- `api_format`
- `api_key`
- `api_timestamp`
- `api_nonce`
- `api_signature`

Each parameter is defined in [Authentication](../authentication.md).
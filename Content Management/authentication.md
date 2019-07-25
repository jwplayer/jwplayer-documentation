# Authentication

The JW Platform (Management API) uses signature-based authentication to verify the identity of an API user. In order to make API calls, a user needs his API Key and API Secret, which can both be found in the account tab of the Dashboard.

## Authentication parameters

In order to authenticate an API call the following parameters are required:

| Parameter | Description |
| --- | --- |
| API shared secret | A secret shared between the API and the user. It is used to create the API signature. Shared secret MUST be never included in the API call or shared with somebody else except JW Platform account owners. It can be found in the JW Platform Dashboard under the account tab. |
| `api_key` | API key identifies the user to the API. It can be found in the JW Platform dashboard under the account tab. |
| `api_nonce` | API nonce is an 8 digits random number. It is used to make sure that API signature is always unique, even if the same call has been made twice within one second. |
| `api_signature` | SHA-1 digest of the `api_key`, `api_timestamp`, `api_nonce` and other call parameters. |
| `api_timestamp` | API timestamp is the current UNIX timestamp (32 bits signed integer). It is used to protect against replay-attacks. |

!!!warning
All four API authentication parameters (`api_key`, `api_timestamp`, `api_nonce` and generated `api_signature`) **must** be always present in the API call.
!!!

## Generating an API signature

The API signature is a SHA-1 digest and it is generated similar to how it is specified in <a href="http://oauth.net/core/1.0" target="_blank">OAuth Core 1.0</a> protocol. First, Signature Base String (SBS) is constructed:

**1.** Convert all text parameters into UTF-8 encoding.

```
text            démo
api_format      xml
api_key         XOqEAfxj
api_nonce       80684843
api_timestamp   1237387851
```
<br/><br/>

**2.** URL encode all text parameters. See: <a href="http://oauth.net/core/1.0#encoding_parameters" target="_blank">OAuth Core 1.0 Section 5.1</a>.

```
text            d%C3%A9mo
api_format      xml
api_key         XOqEAfxj
api_nonce       80684843
api_timestamp   1237387851
```

<br/><br/>

**3.** Sort the parameters based on their encoded names. Sort order is lexicographical byte value ordering. See: <a href="http://oauth.net/core/1.0#rfc.section.9.1.1" target="_blank">OAuth Core 1.0 Section 9.1.1</a>.

```
api_format      xml
api_key         XOqEAfxj
api_nonce       80684843
api_timestamp   1237387851
text            d%C3%A9mo
```

<br/><br/>

**4.** Concatenate the parameters together into a single string. Each parameter’s name is separated from the corresponding value by an `=` character (even if the value is empty). Each name-value pair is separated by an `&` character. See: <a href="http://oauth.net/core/1.0#rfc.section.9.1.1" target="_blank"> OAuth Core 1.0 Section 9.1.1</a>.

```
api_format=xml&api_key=XOqEAfxj&api_nonce=80684843&api_timestamp=1237387851&text=d%C3%A9mo
```

<br/><br/>

**5.** Add the secret to the end of the SBS.

```
api_format=xml&api_key=XOqEAfxj&api_nonce=80684843&api_timestamp=1237387851&text=d%C3%A9mouA96CFtJa138E2T5GhKfngml
```

<br/><br/>

**6.** Calculate the SHA-1 HEX digest for the single string. For example, the calculated SHA-1 HEX digest for the sting the previous step will be: `fbdee51a45980f9876834dc5ee1ec5e93f67cb89`

<br/><br/>

An authenticated API call will look like this:

```
http://api.jwplatform.com/v1/videos/list?text=d%C3%A9mo&api_nonce=80684843&
   api_timestamp=1237387851&api_format=xml&
   api_signature=fbdee51a45980f9876834dc5ee1ec5e93f67cb89&api_key=XOqEAfxj
```

## Protection against replay attacks

When signature based method is used it is possible that the call can be captured by a malicious party and “replayed” later. To protect against this type of attacks, the JW Platform Management API implemented the following measures:

* `api_timestamp` and `api_nonce` make sure that the API call signature is always unique.
* API calls with timestamps that are over 27 hours old will be denied.
* The API keeps a history of all call signatures for the last 48 hours. If a certain signature already exists in the history, the API call will be not executed.
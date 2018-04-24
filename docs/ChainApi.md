# BitcoindRestClient.ChainApi

All URIs are relative to *http://localhost:3000/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restChaininfo**](ChainApi.md#restChaininfo) | **GET** /chaininfo.json | Returns various state info regarding block chain processing.


<a name="restChaininfo"></a>
# **restChaininfo**
> ChainInfo restChaininfo()

Returns various state info regarding block chain processing.

Returns various state info regarding block chain processing. Only supports JSON as output format.

### Example
```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var apiInstance = new BitcoindRestClient.ChainApi();
apiInstance.restChaininfo().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ChainInfo**](ChainInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


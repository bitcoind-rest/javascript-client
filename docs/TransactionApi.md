# BitcoindRestClient.TransactionApi

All URIs are relative to *http://localhost:3000/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restTx**](TransactionApi.md#restTx) | **GET** /tx/{txHash} | Get transaction by hash.


<a name="restTx"></a>
# **restTx**
> Transaction restTx(txHash)

Get transaction by hash.

Given a transaction hash: returns a transaction in binary, hex-encoded binary, or JSON formats. For full TX query capability, one must enable the transaction index via txindex&#x3D;1 command line / configuration option.

### Example
```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var apiInstance = new BitcoindRestClient.TransactionApi();

var txHash = "txHash_example"; // String | The transaction hash.

apiInstance.restTx(txHash).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txHash** | **String**| The transaction hash. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain, application/json


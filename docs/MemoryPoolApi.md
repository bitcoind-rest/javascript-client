# BitcoindRestClient.MemoryPoolApi

All URIs are relative to *http://localhost:3000/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restGetutxos**](MemoryPoolApi.md#restGetutxos) | **GET** /getutxos/checkmempool/{txHash}-{txOutput}.{format} | Returns Unspent Transaction (TX) Outputs
[**restHeaders**](MemoryPoolApi.md#restHeaders) | **GET** /headers/{headerCount}/{blockHash}.{format} | Returns headers.
[**restMempoolContents**](MemoryPoolApi.md#restMempoolContents) | **GET** /mempool/contents.json | Returns transactions in the TX mempool.
[**restMempoolInfo**](MemoryPoolApi.md#restMempoolInfo) | **GET** /mempool/info.json | Returns various information about the TX mempool.


<a name="restGetutxos"></a>
# **restGetutxos**
> InlineResponse200 restGetutxos(txHash, txOutput, format)

Returns Unspent Transaction (TX) Outputs

Only supports JSON as output format.

### Example
```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var apiInstance = new BitcoindRestClient.MemoryPoolApi();

var txHash = "txHash_example"; // String | The transaction hash

var txOutput = "txOutput_example"; // String | The transaction output

var format = "format_example"; // String | The expected format

apiInstance.restGetutxos(txHash, txOutput, format).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txHash** | **String**| The transaction hash | 
 **txOutput** | **String**| The transaction output | 
 **format** | **String**| The expected format | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain

<a name="restHeaders"></a>
# **restHeaders**
> &#39;String&#39; restHeaders(headerCount, blockHash, format)

Returns headers.

Only supports BIN and HEX as output format.

### Example
```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var apiInstance = new BitcoindRestClient.MemoryPoolApi();

var headerCount = 56; // Number | The header count

var blockHash = "blockHash_example"; // String | The block hash

var format = "format_example"; // String | The expected format

apiInstance.restHeaders(headerCount, blockHash, format).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **headerCount** | **Number**| The header count | 
 **blockHash** | **String**| The block hash | 
 **format** | **String**| The expected format | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, text/plain

<a name="restMempoolContents"></a>
# **restMempoolContents**
> InlineResponseDefault restMempoolContents()

Returns transactions in the TX mempool.

Only supports JSON as output format.

### Example
```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var apiInstance = new BitcoindRestClient.MemoryPoolApi();
apiInstance.restMempoolContents().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponseDefault**](InlineResponseDefault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="restMempoolInfo"></a>
# **restMempoolInfo**
> MemoryPool restMempoolInfo()

Returns various information about the TX mempool.

Only supports JSON as output format.

### Example
```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var apiInstance = new BitcoindRestClient.MemoryPoolApi();
apiInstance.restMempoolInfo().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MemoryPool**](MemoryPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


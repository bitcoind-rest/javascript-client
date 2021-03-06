# bitcoind-rest-client

BitcoindRestClient - JavaScript client for bitcoind-rest-client
The REST API can be enabled with the `-rest` option. The interface runs on the same port as the JSON-RPC interface, by default port `8332` for **mainnet**, port `18332` for **testnet**, and port `18443` for **regtest**.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.16
- Package version: 0.16
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install bitcoind-rest-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your bitcoind-rest-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('bitcoind-rest-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BitcoindRestClient = require('bitcoind-rest-client');

var api = new BitcoindRestClient.BlockApi()

var blockHash = "blockHash_example"; // {String} the block hash

api.restBlockExtended(blockHash).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BitcoindRestClient.BlockApi* | [**restBlockExtended**](docs/BlockApi.md#restBlockExtended) | **GET** /block/{blockHash} | Get block by hash.
*BitcoindRestClient.BlockApi* | [**restBlockNotxdetails**](docs/BlockApi.md#restBlockNotxdetails) | **GET** /block/notxdetails/{blockHash}.{format} | Get block by hash.
*BitcoindRestClient.ChainApi* | [**restChaininfo**](docs/ChainApi.md#restChaininfo) | **GET** /chaininfo.json | Returns various state info regarding block chain processing.
*BitcoindRestClient.MemoryPoolApi* | [**restGetutxos**](docs/MemoryPoolApi.md#restGetutxos) | **GET** /getutxos/checkmempool/{txHash}-{txOutput}.{format} | Returns Unspent Transaction (TX) Outputs
*BitcoindRestClient.MemoryPoolApi* | [**restHeaders**](docs/MemoryPoolApi.md#restHeaders) | **GET** /headers/{headerCount}/{blockHash}.{format} | Returns headers.
*BitcoindRestClient.MemoryPoolApi* | [**restMempoolContents**](docs/MemoryPoolApi.md#restMempoolContents) | **GET** /mempool/contents.json | Returns transactions in the TX mempool.
*BitcoindRestClient.MemoryPoolApi* | [**restMempoolInfo**](docs/MemoryPoolApi.md#restMempoolInfo) | **GET** /mempool/info.json | Returns various information about the TX mempool.
*BitcoindRestClient.TransactionApi* | [**restTx**](docs/TransactionApi.md#restTx) | **GET** /tx/{txHash} | Get transaction by hash.


## Documentation for Models

 - [BitcoindRestClient.BIP](docs/BIP.md)
 - [BitcoindRestClient.BIP9](docs/BIP9.md)
 - [BitcoindRestClient.BIPReject](docs/BIPReject.md)
 - [BitcoindRestClient.Block](docs/Block.md)
 - [BitcoindRestClient.ChainInfo](docs/ChainInfo.md)
 - [BitcoindRestClient.ChainInfoBip9Softforks](docs/ChainInfoBip9Softforks.md)
 - [BitcoindRestClient.InlineResponse200](docs/InlineResponse200.md)
 - [BitcoindRestClient.InlineResponseDefault](docs/InlineResponseDefault.md)
 - [BitcoindRestClient.MemoryPool](docs/MemoryPool.md)
 - [BitcoindRestClient.ScriptPubKey](docs/ScriptPubKey.md)
 - [BitcoindRestClient.Transaction](docs/Transaction.md)
 - [BitcoindRestClient.UTxO](docs/UTxO.md)


## Documentation for Authorization

 All endpoints do not require authorization.


# BitcoindRestClient.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The transaction amount in BTC | [optional] 
**fee** | **Number** | The amount of the fee in BTC. This is negative and only available for the send category of transactions. | [optional] 
**confirmations** | **Number** | The number of confirmations | [optional] 
**blockhash** | **String** | The block hash | [optional] 
**blockindex** | **Number** | The index of the transaction in the block that includes it | [optional] 
**blocktime** | **Number** | The time in seconds since epoch (1 Jan 1970 GMT) | [optional] 
**txid** | **String** | The transaction id | [optional] 
**txhash** | **String** | The transaction hash | [optional] 
**version** | **Number** |  | [optional] 
**size** | **Number** |  | [optional] 
**vsize** | **Number** |  | [optional] 
**locktime** | **Number** |  | [optional] 
**time** | **Number** | The transaction time in seconds since epoch (1 Jan 1970 GMT) | [optional] 
**timereceived** | **Number** | The time received in seconds since epoch (1 Jan 1970 GMT) | [optional] 
**bip125Replaceable** | **String** | Whether this transaction could be replaced due to BIP125 (replace-by-fee); may be unknown for unconfirmed transactions not in the mempool | [optional] 


<a name="Bip125ReplaceableEnum"></a>
## Enum: Bip125ReplaceableEnum


* `yes` (value: `"yes"`)

* `no` (value: `"no"`)

* `unknown` (value: `"unknown"`)





# BitcoindRestClient.BIP9

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** |  | [optional] 
**startTime** | **Number** | The starttime specifies a minimum median time past of a block at which the bit gains its meaning. | [optional] 
**timeout** | **Number** | The timeout specifies a time at which the deployment is considered failed. If the median time past of a block &gt;&#x3D; timeout and the soft fork has not yet locked in (including this block&#39;s bit state), the deployment is considered failed on all descendants of the block. | [optional] 
**since** | **Number** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `defined` (value: `"defined"`)

* `started` (value: `"started"`)

* `locked_in` (value: `"locked_in"`)

* `active` (value: `"active"`)

* `failed` (value: `"failed"`)





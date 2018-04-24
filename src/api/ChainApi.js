/**
 * Bitcoind
 * The REST API can be enabled with the `-rest` option. The interface runs on the same port as the JSON-RPC interface, by default port `8332` for **mainnet**, port `18332` for **testnet**, and port `18443` for **regtest**.
 *
 * OpenAPI spec version: 0.16
 * Contact: johan@lepetitbloc.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ChainInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChainInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.BitcoindRestClient) {
      root.BitcoindRestClient = {};
    }
    root.BitcoindRestClient.ChainApi = factory(root.BitcoindRestClient.ApiClient, root.BitcoindRestClient.ChainInfo);
  }
}(this, function(ApiClient, ChainInfo) {
  'use strict';

  /**
   * Chain service.
   * @module api/ChainApi
   * @version 0.16
   */

  /**
   * Constructs a new ChainApi. 
   * @alias module:api/ChainApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns various state info regarding block chain processing.
     * Returns various state info regarding block chain processing. Only supports JSON as output format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChainInfo} and HTTP response
     */
    this.restChaininfoWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ChainInfo;

      return this.apiClient.callApi(
        '/chaininfo.json', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns various state info regarding block chain processing.
     * Returns various state info regarding block chain processing. Only supports JSON as output format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChainInfo}
     */
    this.restChaininfo = function() {
      return this.restChaininfoWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
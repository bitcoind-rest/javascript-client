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
    define(['ApiClient', 'model/BIP9'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BIP9'));
  } else {
    // Browser globals (root is window)
    if (!root.BitcoindRestClient) {
      root.BitcoindRestClient = {};
    }
    root.BitcoindRestClient.ChainInfoBip9Softforks = factory(root.BitcoindRestClient.ApiClient, root.BitcoindRestClient.BIP9);
  }
}(this, function(ApiClient, BIP9) {
  'use strict';




  /**
   * The ChainInfoBip9Softforks model module.
   * @module model/ChainInfoBip9Softforks
   * @version 0.16
   */

  /**
   * Constructs a new <code>ChainInfoBip9Softforks</code>.
   * status of BIP9 softforks in progress
   * @alias module:model/ChainInfoBip9Softforks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ChainInfoBip9Softforks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChainInfoBip9Softforks} obj Optional instance to populate.
   * @return {module:model/ChainInfoBip9Softforks} The populated <code>ChainInfoBip9Softforks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = BIP9.constructFromObject(data['name']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BIP9} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));



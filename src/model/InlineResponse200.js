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
    define(['ApiClient', 'model/UTxO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UTxO'));
  } else {
    // Browser globals (root is window)
    if (!root.BitcoindRestClient) {
      root.BitcoindRestClient = {};
    }
    root.BitcoindRestClient.InlineResponse200 = factory(root.BitcoindRestClient.ApiClient, root.BitcoindRestClient.UTxO);
  }
}(this, function(ApiClient, UTxO) {
  'use strict';




  /**
   * The InlineResponse200 model module.
   * @module model/InlineResponse200
   * @version 0.16
   */

  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('chainHeight')) {
        obj['chainHeight'] = ApiClient.convertToType(data['chainHeight'], 'Number');
      }
      if (data.hasOwnProperty('chaintipHash')) {
        obj['chaintipHash'] = ApiClient.convertToType(data['chaintipHash'], 'String');
      }
      if (data.hasOwnProperty('bitmap')) {
        obj['bitmap'] = ApiClient.convertToType(data['bitmap'], 'String');
      }
      if (data.hasOwnProperty('utxos')) {
        obj['utxos'] = ApiClient.convertToType(data['utxos'], [UTxO]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} chainHeight
   */
  exports.prototype['chainHeight'] = undefined;
  /**
   * @member {String} chaintipHash
   */
  exports.prototype['chaintipHash'] = undefined;
  /**
   * @member {String} bitmap
   */
  exports.prototype['bitmap'] = undefined;
  /**
   * @member {Array.<module:model/UTxO>} utxos
   */
  exports.prototype['utxos'] = undefined;



  return exports;
}));



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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BitcoindRestClient);
  }
}(this, function(expect, BitcoindRestClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BitcoindRestClient.BIP();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BIP', function() {
    it('should create an instance of BIP', function() {
      // uncomment below and update the code to test BIP
      //var instance = new BitcoindRestClient.BIP();
      //expect(instance).to.be.a(BitcoindRestClient.BIP);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BitcoindRestClient.BIP();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new BitcoindRestClient.BIP();
      //expect(instance).to.be();
    });

    it('should have the property reject (base name: "reject")', function() {
      // uncomment below and update the code to test the property reject
      //var instance = new BitcoindRestClient.BIP();
      //expect(instance).to.be();
    });

  });

}));

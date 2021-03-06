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
    instance = new BitcoindRestClient.ChainInfo();
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

  describe('ChainInfo', function() {
    it('should create an instance of ChainInfo', function() {
      // uncomment below and update the code to test ChainInfo
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be.a(BitcoindRestClient.ChainInfo);
    });

    it('should have the property chain (base name: "chain")', function() {
      // uncomment below and update the code to test the property chain
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property blocks (base name: "blocks")', function() {
      // uncomment below and update the code to test the property blocks
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property bestblockhash (base name: "bestblockhash")', function() {
      // uncomment below and update the code to test the property bestblockhash
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property mediantime (base name: "mediantime")', function() {
      // uncomment below and update the code to test the property mediantime
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property verificationprogress (base name: "verificationprogress")', function() {
      // uncomment below and update the code to test the property verificationprogress
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property initialblockdownload (base name: "initialblockdownload")', function() {
      // uncomment below and update the code to test the property initialblockdownload
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property chainwork (base name: "chainwork")', function() {
      // uncomment below and update the code to test the property chainwork
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property sizeOnDisk (base name: "size_on_disk")', function() {
      // uncomment below and update the code to test the property sizeOnDisk
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property pruned (base name: "pruned")', function() {
      // uncomment below and update the code to test the property pruned
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property softforks (base name: "softforks")', function() {
      // uncomment below and update the code to test the property softforks
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property bip9Softforks (base name: "bip9_softforks")', function() {
      // uncomment below and update the code to test the property bip9Softforks
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

    it('should have the property warnings (base name: "warnings")', function() {
      // uncomment below and update the code to test the property warnings
      //var instance = new BitcoindRestClient.ChainInfo();
      //expect(instance).to.be();
    });

  });

}));

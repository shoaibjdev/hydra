/**
 * Hydra OAuth2 & OpenID Connect Server
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### ATTENTION - IMPORTANT NOTE   The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer) {
      root.HydraOAuth2OpenIdConnectServer = {};
    }
    root.HydraOAuth2OpenIdConnectServer.SwaggerOAuthTokenResponseBody = factory(root.HydraOAuth2OpenIdConnectServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SwaggerOAuthTokenResponseBody model module.
   * @module model/SwaggerOAuthTokenResponseBody
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerOAuthTokenResponseBody</code>.
   * in: body
   * @alias module:model/SwaggerOAuthTokenResponseBody
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SwaggerOAuthTokenResponseBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerOAuthTokenResponseBody} obj Optional instance to populate.
   * @return {module:model/SwaggerOAuthTokenResponseBody} The populated <code>SwaggerOAuthTokenResponseBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('id_token')) {
        obj['id_token'] = ApiClient.convertToType(data['id_token'], 'Number');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'Number');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The access token issued by the authorization server.
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * The lifetime in seconds of the access token.  For example, the value \"3600\" denotes that the access token will expire in one hour from the time the response was generated.
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * To retrieve a refresh token request the id_token scope.
   * @member {Number} id_token
   */
  exports.prototype['id_token'] = undefined;
  /**
   * The refresh token, which can be used to obtain new access tokens. To retrieve it add the scope \"offline\" to your access token request.
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;
  /**
   * The scope of the access token
   * @member {Number} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * The type of the token issued
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;



  return exports;
}));



/*
 * Hydra OAuth2 & OpenID Connect Server (1.0.0-aplha1)
 *
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### ATTENTION - IMPORTANT NOTE   The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type InlineResponse200 struct {

	// Boolean indicator of whether or not the presented token is currently active.  The specifics of a token's \"active\" state will vary depending on the implementation of the authorization server and the information it keeps about its tokens, but a \"true\" value return for the \"active\" property will generally indicate that a given token has been issued by this authorization server, has not been revoked by the resource owner, and is within its given time window of validity (e.g., after its issuance time and before its expiration time).
	Active bool `json:"active,omitempty"`

	// Client identifier for the OAuth 2.0 client that requested this token.
	ClientId string `json:"client_id,omitempty"`

	// Integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire
	Exp int64 `json:"exp,omitempty"`

	// Integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued
	Iat int64 `json:"iat,omitempty"`

	// A JSON string containing a space-separated list of scopes associated with this token
	Scope string `json:"scope,omitempty"`

	Sess Session `json:"sess,omitempty"`

	// Subject of the token, as defined in JWT [RFC7519]. Usually a machine-readable identifier of the resource owner who authorized this token.
	Sub string `json:"sub,omitempty"`

	// Human-readable identifier for the resource owner who authorized this token. Currently not supported by Hydra.
	Username string `json:"username,omitempty"`
}

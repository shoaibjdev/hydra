package cli

import (
	"fmt"
	"net/http"

	"github.com/ory/hydra/config"
	hydra "github.com/ory/hydra/sdk/go/hydra/swagger"
	"github.com/spf13/cobra"
)

type RevocationHandler struct {
	Config *config.Config
}

func newRevocationHandler(c *config.Config) *RevocationHandler {
	return &RevocationHandler{Config: c}
}

func (h *RevocationHandler) RevokeToken(cmd *cobra.Command, args []string) {
	if len(args) != 1 {
		fmt.Print(cmd.UsageString())
		return
	}

	handler := hydra.NewOAuth2ApiWithBasePath(h.Config.ClusterURL)
	handler.Configuration.Transport = h.Config.OAuth2Client(cmd).Transport

	if term, _ := cmd.Flags().GetBool("fake-tls-termination"); term {
		handler.Configuration.DefaultHeader["X-Forwarded-Proto"] = "https"
	}

	token := args[0]
	response, err := handler.RevokeOAuth2Token(args[0])
	checkResponse(response, err, http.StatusOK)
	fmt.Printf("Revoked token %s", token)
}

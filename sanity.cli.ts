import { createCliConfig } from "sanity/cli";

export default createCliConfig({
  api: {
    projectId: "y95plxu9",
    dataset: "production",
  },
  graphql: [{ workspace: "production", playground: true }],
});

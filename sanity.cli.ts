import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "y95plxu9",
    dataset: "production",
  },
  graphql: [{ workspace: "production", playground: true }],
});

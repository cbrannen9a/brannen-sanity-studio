import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./schemas";

export default createConfig({
  name: "default",
  title: "brannen sanity studio",

  projectId: "y95plxu9",
  dataset: "production",

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});

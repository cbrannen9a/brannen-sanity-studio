import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { colorInput } from "@sanity/color-input";
import { schemaTypes } from "./schemas";
import structure from "./structure";

const plugins = [deskTool({ structure }), codeInput(), colorInput()];

export default createConfig([
  {
    name: "production",
    title: "brannen sanity studio - prod",

    projectId: "y95plxu9",
    dataset: "production",
    basePath: "/production",
    plugins: plugins,

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: "development",
    title: "brannen sanity studio - dev",

    projectId: "y95plxu9",
    dataset: "development",
    basePath: "/development",
    plugins: plugins,

    schema: {
      types: schemaTypes,
    },
  },
]);

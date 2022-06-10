export default {
  name: "contentPreview",
  title: "Content Preview",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Parent",
      name: "parentRoute",
      type: "reference",
      to: [{ type: "route" }],
    },
    {
      title: "Query",
      name: "query",
      type: "reference",
      to: { type: "dataQuery" },
    },
    {
      name: "params",
      title: "Params",
      type: "array",
      of: [{ type: "keyValue" }],
    },
  ],
};

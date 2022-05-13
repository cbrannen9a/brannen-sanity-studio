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
  ],
};

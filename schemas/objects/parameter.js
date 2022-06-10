export default {
  name: "parameter",
  title: "Parameter",
  type: "object",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "string",
    },
    {
      name: "optional",
      type: "boolean",
      title: "Optional",
      initialValue: false,
    },
  ],

  preview: {
    select: {
      key: "key",
      optional: "optional",
    },
    prepare({ key, optional }) {
      return {
        title: `${key} ${optional ? "(Optional)" : ""}`,
      };
    },
  },
};

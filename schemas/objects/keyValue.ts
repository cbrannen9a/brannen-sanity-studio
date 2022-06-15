export default {
  name: "keyValue",
  title: "Key Value",
  type: "object",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "string",
    },
    {
      name: "value",
      type: "string",
      title: "Value",
    },
  ],

  preview: {
    select: {
      key: "key",
      value: "value",
    },
    prepare({ key, value }) {
      return {
        title: `${key} - ${value}`,
      };
    },
  },
};

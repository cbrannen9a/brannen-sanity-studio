import { Rule } from "sanity";

export default {
  name: "keyValue",
  title: "Key Value",
  type: "object",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "string",
      validation: (rule: Rule) => rule.isRequired(),
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
    prepare({ key, value }: { key: string; value?: string }) {
      return {
        title: `${key} - ${value}`,
      };
    },
  },
};

import { Rule } from "sanity";

export default {
  type: "object",
  name: "cards",
  title: "Cards",
  fields: [
    {
      name: "label",
      type: "string",
      validation: (rule: Rule) => rule.isRequired(),
    },
    {
      name: "cards",
      Title: "Cards",
      type: "array",
      of: [
        {
          name: "card",
          type: "card",
        },
      ],
    },
  ],
  preview: {
    select: {
      label: "label",
    },
    prepare({ label }: { label: string }) {
      return {
        title: `Card Section: ${label || "Label not set"}`,
      };
    },
  },
};

import { Rule } from "sanity";

export default {
  type: "object",
  name: "textSection",
  title: "Text",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      validation: (rule: Rule) => rule.isRequired(),
    },
    {
      name: "text",
      type: "portableText",
      title: "Text",
    },
  ],
  preview: {
    select: {
      label: "label",
    },
    prepare({ label }: { label: string }) {
      return {
        title: `${label}`,
        subtitle: "Text section",
      };
    },
  },
};

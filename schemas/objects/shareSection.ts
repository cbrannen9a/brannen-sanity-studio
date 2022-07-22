import { Rule } from "sanity";

export default {
  type: "object",
  name: "shareSection",
  title: "Share",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      validation: (rule: Rule) => rule.isRequired(),
    },
    {
      name: "shareData",
      type: "shareData",
      title: "shareData",
    },
  ],
  preview: {
    select: {
      label: "label",
    },
    prepare({ label }: { label: string }) {
      return {
        title: `${label}`,
        subtitle: "Share section",
      };
    },
  },
};

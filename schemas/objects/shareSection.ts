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
      type: "object",
      title: "shareData",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "text", type: "string", title: "Text" },
        { name: "url", type: "url", title: "Url" },
      ],
      options: {
        collapsed: false,
      },
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

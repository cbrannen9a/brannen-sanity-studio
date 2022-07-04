import { Rule } from "sanity";

export default {
  type: "object",
  name: "tags",
  title: "Tags",
  fields: [
    {
      name: "ariaLabel",
      type: "string",
      title: "Aria Label",
      validation: (rule: Rule) => rule.isRequired(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "as",
      type: "string",
      options: {
        list: ["tags", "chips"],
      },
      initialValue: "tags",
    },
    {
      name: "forPreview",
      type: "string",
      options: {
        list: ["previewOnly", "pageOnly", "both"],
      },
      initialValue: "both",
    },
    {
      name: "tags",
      Title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          type: "tag",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      ariaLabel: "ariaLabel",
    },
    prepare({ title, ariaLabel }: { title?: string; ariaLabel?: string }) {
      return {
        title: `Tag Section: ${title || ariaLabel || "ariaLabel not set"}`,
      };
    },
  },
};

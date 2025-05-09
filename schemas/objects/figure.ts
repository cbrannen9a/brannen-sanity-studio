import { Rule } from "sanity";

export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fieldsets: [
    {
      title: "Caption and Alt text",
      name: "caption-alt",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
      fieldset: "caption-alt",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessibility.",
      fieldset: "caption-alt",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};

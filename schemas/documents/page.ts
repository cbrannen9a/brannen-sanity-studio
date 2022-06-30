import { Rule } from "sanity";

export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "parentRoute",
      type: "reference",
      title: "Is Subpage of (optional)",
      to: [{ type: "route" }],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      hidden: ({ document }) => !document?.parentRoute,
      options: {
        source: (_, options) => options.parent.title,
        maxLength: 96,
      },
      validation: (Rule: Rule) =>
        Rule.custom((slug, context) => {
          if (context.document?.parentRoute) {
            return slug.current.trim().length > 0
              ? true
              : "Slug is needed for subpages";
          }
          return true;
        }),
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "hero" },
        { type: "banner" },
        { type: "cards" },
        { type: "imageSection" },
        { type: "mailchimp" },
        { type: "textSection" },
        { type: "contentPreview" },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};

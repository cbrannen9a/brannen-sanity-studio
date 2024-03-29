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
      title: "Route",
      to: [{ type: "route" }],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "(Optional)",
      options: {
        source: (_: unknown, options: { parent: { title: string } }) =>
          options.parent.title,
        maxLength: 96,
      },
    },
    {
      name: "path",
      title: "Path",
      type: "string",
      readonly: true,
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
        { type: "textSection" },
        { type: "contentPreview" },
        { type: "tags" },
        { type: "shareSection" },
      ],
    },
    {
      name: "description",
      type: "portableText",
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
    {
      name: "statusDate",
      type: "date",
      title: "Status Date",
      initialValue: new Date().toISOString().split("T")[0],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};

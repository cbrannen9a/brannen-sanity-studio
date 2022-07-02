export default {
  name: "tag",
  title: "Tag",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Description",
    },
    {
      name: "media",
      type: "image",
      title: "Media",
    },
    {
      title: "Internal link",
      description: "Use this to link between pages on the website",
      name: "route",
      type: "reference",
      to: [{ type: "route" }],
      fieldset: "link",
    },
    {
      title: "External link",
      name: "link",
      type: "url",
      fieldset: "link",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "media",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};

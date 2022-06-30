export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subHeading",
      type: "string",
      title: "SubHeading",
    },
    {
      name: "tagline",
      type: "simplePortableText",
      title: "Tagline",
    },
    {
      name: "image",
      type: "figure",
      title: "Image",
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero section",
        media,
      };
    },
  },
};

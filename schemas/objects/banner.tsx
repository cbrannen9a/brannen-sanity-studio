export default {
  type: "object",
  name: "banner",
  title: "Banner",
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
    },
    prepare({ title }: { title: string }) {
      return {
        title,
        subtitle: "Banner section",
      };
    },
  },
};

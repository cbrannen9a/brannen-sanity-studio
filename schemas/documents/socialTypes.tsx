export default {
  name: "socialTypes",
  type: "document",
  title: "Social Types",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "svg",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "name",
      svg: "svg",
    },
    prepare: ({ title, svg }: { title: string; svg: string }) => ({
      title,
      media: () => (
        <div
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ),
    }),
  },
};

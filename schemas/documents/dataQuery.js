export default {
  name: "dataQuery",
  type: "document",
  title: "Query",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Query Code",
      name: "queryCode",
      type: "code",
      options: {
        language: "groq",
      },
    },
    {
      name: "queryParams",
      type: "array",
      title: "Query Params",
      of: [
        {
          type: "parameter",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      params: "queryParams",
    },
    prepare({ title, params }) {
      console.log(params);
      return {
        title: title,
        subtitle: `${params
          .map((p) => `${p.key} ${p.optional ? "(Optional)" : ""}`)
          .join(", ")}`,
      };
    },
  },
};

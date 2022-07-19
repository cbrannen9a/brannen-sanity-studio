import { Rule } from "sanity";

export default {
  title: "Social",
  name: "social",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "reference",
      to: [{ type: "socialTypes" }],
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      validation: (r: Rule) =>
        r.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
  ],
  preview: {
    select: {
      title: "title.name",
      link: "link",
    },
    prepare({ title, link }: { title: string; link: string }) {
      return {
        title,
        subtitle: link,
      };
    },
  },
};

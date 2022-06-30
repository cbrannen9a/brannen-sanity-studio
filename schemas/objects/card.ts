const fromColors = [
  "from-blue-700",
  "from-yellow-700",
  "from-pink-700",
  "from-green-700",
  "from-purple-700",
  "from-red-700",
];
const toColors = [
  "to-blue-500",
  "to-yellow-500",
  "to-pink-500",
  "to-green-500",
  "to-purple-500",
  "to-red-500",
];

export default {
  type: "object",
  name: "card",
  title: "Card",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "simplePortableText",
    },
    {
      name: "fromColor",
      type: "string",
      options: {
        list: fromColors,
      },
    },
    {
      name: "toColor",
      type: "string",
      options: {
        list: toColors,
      },
    },
    {
      name: "cta",
      title: "CTA",
      type: "cta",
    },
    {
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "cta.title",
      link: "cta.link",
    },
    prepare({ title, subtitle, link }) {
      return {
        title: `Card: ${title || "Title not set"}`,
        subtitle,
        link,
      };
    },
  },
};

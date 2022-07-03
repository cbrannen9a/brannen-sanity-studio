import React, { FC, ReactNode } from "react";
import { Rule } from "sanity";

const LinkRender: FC<{ children: ReactNode }> = ({ children }) => (
  <span>{children} 🌍</span>
);

export default {
  title: "URL",
  name: "link",
  type: "object",
  fields: [
    {
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule: Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
  ],
  blockEditor: {
    icon: () => "🌍",
    render: LinkRender,
  },
};

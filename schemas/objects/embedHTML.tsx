import React, { FC } from "react";
import { component } from "sanity/desk";

const HTMLpreview: FC<{ value: { html: string } }> = ({ value }) => (
  // eslint-disable-next-line
  <div dangerouslySetInnerHTML={{ __html: value.html }} />
);

export default {
  name: "embedHTML",
  title: "Embed HTML",
  type: "object",
  fields: [
    {
      name: "html",
      title: "HTML",
      type: "text",
      description:
        "You usually want to avoid storing freeform HTML, but for embed codes it can be useful.",
      options: {
        language: "html",
      },
    },
  ],
  components: {
    select: {
      html: "html",
    },
    preview: HTMLpreview,
  },
};

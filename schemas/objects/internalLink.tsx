import React, { FC, ReactNode } from "react";

const InternalLinkRender: FC<{ children: ReactNode }> = ({ children }) => (
  <span>{children} 🔗</span>
);

export default {
  title: "Internal link to another document",
  name: "internalLink",
  type: "reference",
  description: "Locate a document you want to link to",
  to: [{ type: "page" }, { type: "route" }],
  blockEditor: {
    icon: () => "🔗",
    render: InternalLinkRender,
  },
};

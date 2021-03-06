import bcp47 from "bcp47";
import { Rule } from "sanity";

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fieldsets: [
    { name: "footer", title: "Footer" },
    { name: "dataQueries", title: "Data Queries" },
    { name: "colors", title: "Colors" },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    },
    {
      name: "frontpage",
      type: "reference",
      description: "Choose page to be the frontpage",
      to: { type: "page" },
    },
    {
      title: "Site language",
      description:
        "Should be a valid bcp47 language code like en, en-US, no or nb-NO",
      name: "lang",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.custom((lang) =>
          bcp47.parse(lang) ? true : "Please use a valid bcp47 code"
        ),
    },
    {
      title: "Brand logo",
      description:
        "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      type: "figure",
    },
    {
      title: "Main navigation",
      name: "mainNavigation",
      description: "Select pages for the top menu",
      validation: (Rule: Rule) => [
        Rule.max(5).warning("Are you sure you want more than 5 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "route" }],
        },
      ],
    },
    {
      title: "Footer navigation items",
      name: "footerNavigation",
      type: "array",
      validation: (Rule: Rule) => [
        Rule.max(10).warning("Are you sure you want more than 10 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      fieldset: "footer",
      of: [
        {
          type: "reference",
          to: [{ type: "route" }],
        },
      ],
    },
    {
      name: "footerText",
      type: "simplePortableText",
      fieldset: "footer",
    },
    {
      name: "pageQuery",
      type: "reference",
      to: [{ type: "dataQuery" }],
      fieldset: "dataQueries",
    },
    {
      name: "subPageQuery",
      type: "reference",
      to: [{ type: "dataQuery" }],
      fieldset: "dataQueries",
    },
    {
      name: "siteSettingsQuery",
      type: "reference",
      to: [{ type: "dataQuery" }],
      fieldset: "dataQueries",
    },
    {
      name: "themes",
      title: "Themes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "theme" }] }],
    },
    {
      name: "social",
      title: "Social",
      type: "array",
      of: [{ type: "social" }],
    },
  ],
};

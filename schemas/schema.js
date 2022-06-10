// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import { page, route, siteSettings } from "./documents";

// Object types
import {
  cta,
  embedHTML,
  figure,
  internalLink,
  link,
  portableText,
  simplePortableText,
  hero,
  imageSection,
  mailchimp,
  textSection,
  contentPreview,
} from "./objects";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    page,
    route,
    siteSettings,

    // objects
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    portableText,
    simplePortableText,
    textSection,
    contentPreview,
  ]),
});

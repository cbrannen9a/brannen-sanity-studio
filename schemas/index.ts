// Document types
import { page, dataQuery, route, siteSettings } from "./documents";

// Object types
import {
  cta,
  embedHTML,
  figure,
  internalLink,
  keyValue,
  link,
  portableText,
  simplePortableText,
  hero,
  imageSection,
  mailchimp,
  parameter,
  textSection,
  contentPreview,
} from "./objects";

export const schemaTypes = [
  // documents
  page,
  dataQuery,
  route,
  siteSettings,

  // objects
  cta,
  embedHTML,
  figure,
  hero,
  imageSection,
  internalLink,
  keyValue,
  link,
  mailchimp,
  parameter,
  portableText,
  simplePortableText,
  textSection,
  contentPreview,
];

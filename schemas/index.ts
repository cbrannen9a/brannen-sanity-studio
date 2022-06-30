// Document types
import { page, dataQuery, route, siteSettings } from "./documents";

// Object types
import {
  banner,
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
  card,
  cards,
} from "./objects";

export const schemaTypes = [
  // documents
  page,
  dataQuery,
  route,
  siteSettings,

  // objects
  banner,
  cta,
  card,
  cards,
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

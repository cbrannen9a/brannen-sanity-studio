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
  parameter,
  textSection,
  contentPreview,
  card,
  cards,
  tag,
  tags,
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
  parameter,
  portableText,
  simplePortableText,
  textSection,
  contentPreview,
  tag,
  tags,
];

import { articleSchema } from './article';
import { authorSchema } from './author';
import { consultantSchema } from './consultant';
import { topicSchema } from './topic';
import { siteSettingsSchema } from './siteSettings';

export const schemaTypes = [
  articleSchema,
  authorSchema,
  consultantSchema,
  topicSchema,
  siteSettingsSchema,
];
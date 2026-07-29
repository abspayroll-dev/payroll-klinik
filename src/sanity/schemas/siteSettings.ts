import { defineType, defineField } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Site Description',
      rows: 3,
    }),
    defineField({
      name: 'contactEmail',
      type: 'string',
      title: 'Contact Email',
    }),
    defineField({
      name: 'whatsappNumber',
      type: 'string',
      title: 'WhatsApp Number',
    }),
    defineField({
      name: 'address',
      type: 'text',
      title: 'Office Address',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Media Links',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform' },
            { name: 'url', type: 'string', title: 'URL' },
            { name: 'icon', type: 'string', title: 'Icon Name' },
          ],
        },
      ],
    }),
  ],
});
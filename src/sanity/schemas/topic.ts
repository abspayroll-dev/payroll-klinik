import { defineType, defineField } from 'sanity';

export const topicSchema = defineType({
  name: 'topic',
  type: 'document',
  title: 'Topik',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Judul Topik',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Deskripsi',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Nama ikon (misal: Calculator, Shield, Heart)',
    }),
  ],
});

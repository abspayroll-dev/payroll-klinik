import { defineType, defineField } from 'sanity';

export const authorSchema = defineType({
  name: 'author',
  type: 'document',
  title: 'Penulis',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nama Lengkap',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Foto',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio Singkat',
      description: '2-3 kalimat tentang penulis',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
});

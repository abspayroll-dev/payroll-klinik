import { defineType, defineField } from 'sanity';

export const consultantSchema = defineType({
  name: 'consultant',
  type: 'document',
  title: 'Konsultan',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nama Lengkap',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Jabatan',
      description: 'Contoh: Senior Payroll Consultant',
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
      description: '2-3 kalimat tentang pengalaman dan expertise',
      rows: 3,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Urutan Tampil',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
});

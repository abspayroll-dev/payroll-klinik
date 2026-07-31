import { defineType, defineField } from 'sanity';

export const articleSchema = defineType({
  name: 'article',
  type: 'document',
  title: 'Artikel',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Judul Artikel',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Ringkasan',
      description: 'Maksimal 160 karakter untuk meta description',
      rows: 3,
      validation: (Rule) => Rule.max(160).required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Gambar Cover',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      title: 'Penulis',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Tanggal Publikasi',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'topic',
      type: 'reference',
      to: [{ type: 'topic' }],
      title: 'Topik',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Konten Artikel',
      of: [
        { type: 'block' },
        { type: 'image' },
        {
          type: 'object',
          name: 'cta',
          title: 'CTA Block',
          fields: [
            { name: 'text', type: 'string', title: 'Text' },
            { name: 'link', type: 'string', title: 'Link' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3 },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, author, media } = selection;
      return {
        title,
        subtitle: author ? `oleh ${author}` : 'Tidak ada penulis',
        media,
      };
    },
  },
});

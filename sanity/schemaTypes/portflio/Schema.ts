import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portflio',
  title: 'Portflio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'livelink',
      title: 'Live Link',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date', 
      type: 'date'
    }),
    // defineField({
    //   name: 'skill',
    //   title: 'Skills',
    //   type: 'array',
    // }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    // defineField({
    //   name: 'RPortflio',
    //   title: 'Related Portflio',
    //   type: 'array',
    //   of: [{type: 'portflio'}],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {date} = selection
      return {...selection, subtitle: date && `by ${date}`}
    },
  },
})

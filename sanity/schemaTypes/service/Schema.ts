import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    // defineField({
    //   name: "types",
    //   title: "Skills Type",
    //   type: "array",
    //   of: [
       
    //         {
    //           type: "servicetag",
    //         },
    //       ],
        
      
    // }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});

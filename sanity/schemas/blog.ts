export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title of blog",
            type: "string",
            description: "Title of the blog post",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description: "Description of the blog post",
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        }
    ]
}
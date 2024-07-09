---
id: 12,
title: 'Graphql Mindmap.'
para: 'After follow these steps, you can get master on mongodb beginner to master level.'
date: '29-06-2024'
cat: 'MongoDB'
image: '/blog/GRAPHQL.png'
keyword:
  [
    'Mongodb',
    'Mongodb learning',
    'Mongodb learning path',
    'Mongodb master level',
  ]
---

# MongoDB

- MongoDB is a popular open-source NoSQL database management system that uses a document-oriented data model.
- Storing data in tables and rows as in traditional relational databases.
- MongoDB stores data in flexible, JSON-like documents, making it easier to model hierarchical relationships, store arrays, and other complex data structures.

## Installation

- [Locally](https://www.mongodb.com/try/download/community)
- [Cloud](https://www.mongodb.com/cloud/atlas/register)

## Aggregation Pipeline

The aggregation pipeline is a powerful framework for data aggregation in MongoDB. It processes data through a sequence of stages. Each stage transforms the documents as they pass through the pipeline.

| Command  | Why use                                                                                         |
| -------- | ----------------------------------------------------------------------------------------------- |
| $match   | filters documents by specified conditions.                                                      |
| $lookup  | performs a left outer join to another collection. It can be used to reference arrays.           |
| $unwind  | deconstruct an array field and used with objects that are joined through $lookup.               |
| $sort    | -1 (descending ) 1 (ascending ).                                                                |
| $limit   | limits the number of documents passed to the next stage.                                        |
| $skip    | skips the first N documents passed to the pipeline.                                             |
| $project | reshapes each document in the stream, such as by adding new fields or removing existing fields. |

```bash
{
  $match: {
  _id: new mongoose.Types.ObjectId(id),
  }
},
{
  $lookup: {
    from: "products", // Name of the collection to join
    localField: "productId", // Field from the input documents
    foreignField: "_id", // Field from the documents of the "from" collection
    as: "product_Detail" // Name of the new array field to add to the input documents
  }
},
{
  $unwind: "$product_Detail", // same like the lookup as
},
{
  $sort: , // -1 (descending ) 1 (ascending )
},
{
  $limit: 5 // Limit the output to 5 documents
},
{
  $skip: 10 // Skip the first 10 documents
},
{
  $project: {
    name: 1,
    "product_Detail.price": 1, // with array and object
}
```

### Resorces

- [MongoDB Official](https://www.mongodb.com/docs/drivers/)

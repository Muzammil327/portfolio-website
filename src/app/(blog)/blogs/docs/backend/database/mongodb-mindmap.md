---
id: 15,
title: 'MongoDB Mindmap.'
para: 'After follow these steps, you can get master on mongodb beginner to master level.'
date: '29-06-2024'
cat: 'MongoDB'
image: '/blog/mongodb.jpg'
keyword:
  [
    'Mongodb',
    'Mongodb learning',
    'Mongodb learning path',
    'Mongodb master level',
  ]
---

# MongoDB

- Popular open-source NoSQL database.
- document-oriented data model.
- non relational database.
- Database contains Collections.
- Collections contains group of documents, similar to a table in relational databases.
- Collections stores data in BSON format.
- BSON is a binary representation of JSON-like documents.

## Installation

- [Locally](https://www.mongodb.com/try/download/community)
- [Cloud](https://www.mongodb.com/cloud/atlas/register)

## Operators

| Operator          | Description                                                                                               | Example                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `$eq`             | field is equal to a specified value.                                                                      | `{ "field": { "$eq": value } }`                                                                                       |
| `$ne`             | field is not equal to a specified value.                                                                  | `{ "field": { "$ne": value } }`                                                                                       |
| `$gt`             | field is greater than a specified value.                                                                  | `{ "field": { "$gt": value } }`                                                                                       |
| `$gte`            | field is greater than or equal to a specified value.                                                      | `{ "field": { "$gte": value } }`                                                                                      |
| `$lt`             | field is less than a specified value.                                                                     | `{ "field": { "$lt": value } }`                                                                                       |
| `$lte`            | field is less than or equal to a specified value.                                                         | `{ "field": { "$lte": value } }`                                                                                      |
| `$in`             | field's value is in a specified array of values.                                                          | `{ "field": { "$in": [value1, value2] } }`                                                                            |
| `$nin`            | field's value is not in a specified array of values.                                                      | `{ "field": { "$nin": [value1, value2] } }`                                                                           |
| `$exists`         | Matches documents that have a specified field.                                                            | `{ "field": { "$exists": true } }`                                                                                    |
| `$regex`          | Matches values that match a specified regular expression.                                                 | `{ "field": { "$regex": /pattern/ } }`                                                                                |
| `$type`           | Checks the data type of a field in your documents.                                                        | `{ "field": { "$type": ["type1", "type2"] } }`                                                                        |
| `$and`            | Combines multiple conditions, all of which must be true.                                                  | `{ "$and": [ { "condition1" }, { "condition2" } ] }`                                                                  |
| `$or`             | Combines multiple conditions, at least one must be true.                                                  | `{ "$or": [ { "condition1" }, { "condition2" } ] }`                                                                   |
| `$not`            | Negates a condition.                                                                                      | `{ "field": { "$not": { "$gt": value } } }`                                                                           |
| `$nor`            | Combines multiple conditions, none of which must be true.                                                 | `{ "$nor": [ { "condition1" }, { "condition2" } ] }`                                                                  |
| `$match`          | Filters documents based on specified criteria.                                                            | `{ "$match": { "status": "active" } }`                                                                                |
| `$group`          | Groups documents by a specified key.                                                                      | `{ "$group": { "_id": "$category", "total": { "$sum": "$amount" } } }`                                                |
| `$project`        | Reshapes each document in the stream, allowing you to include, exclude, or add fields.                    | `{ "$project": { "field1": 1, "field2": 1, "newField": { "$add": ["$field1", "$field2"] } } }`                        |
| `$sort`           | Sorts documents by a specified field or fields. -1 (descending) 1 (ascending)                             | `{ "$sort": { "date": -1 } }`                                                                                         |
| `$limit`          | Limits the number of documents passed to the next stage of the pipeline.                                  | `{ "$limit": 10 }`                                                                                                    |
| `$skip`           | Skips a specified number of documents in the pipeline.                                                    | `{ "$skip": 5 }`                                                                                                      |
| `$unwind`         | Deconstructs an array field into separate documents for each element in the array.                        | `{ "$unwind": "$tags" }`                                                                                              |
| `$lookup`         | Performs a left outer join to another collection, allowing you to combine documents from two collections. | `{ "$lookup": { "from": "otherCollection", "localField": "foreignKey", "foreignField": "_id", "as": "joinedData" } }` |
| `$pull`           | Removes all instances of a value from an array.                                                           | `{ "$pull": { "arrayField": valueToRemove } }`                                                                        |
| `$push`           | Adds an element to an array.                                                                              | `{ "$push": { "arrayField": newValue } }`                                                                             |
| `$inc`            | Increments the value of a field by a specified amount.                                                    | `{ "$inc": { "field": 1 } }`                                                                                          |
| `$all`            | Matches documents where the array contains all specified elements.                                        | `{ "arrayField": { "$all": [value1, value2] } }`                                                                      |

| ----------------- | -----------------------------------------------------------                                               | -------------------------------------------                                                                           |
| `$set`            | Sets the value of a field.                                                                                | `{ "$set": { "field": value } }`                                                                                      |
| `$unset`          | Removes a specified field from a document.                                                                | `{ "$unset": { "field": "" } }`                                                                                       |
| `$addToSet`       | Adds an element to an array only if it doesn’t already exist.                                             | `{ "$addToSet": { "arrayField": newValue } }`                                                                         |
| `$pop`            | Removes the first or last element from an array.                                                          | `{ "$pop": { "arrayField": 1 } }` (1 removes the last element, -1 removes the first)                                  |
| `$currentDate`    | Sets the value of a field to the current date.                                                            | `{ "$currentDate": { "lastModified": true } }`                                                                        |
| `$elemMatch`      | Matches documents that contain an array field with at least one element matching specified criteria.      | `{ "arrayField": { "$elemMatch": { "field": value } } }`                                                              |
| `$size`           | Matches documents where the array is of a specified size.                                                 | `{ "arrayField": { "$size": 3 } }`                                                                                    |
| `$expr`           | Allows the use of aggregation expressions within the query language.                                      | `{ "$expr": { "$gt": [ "$field1", "$field2" ] } }`                                                                    |
| `$jsonSchema`     | Validates documents against a specified JSON schema.                                                      | `{ "$jsonSchema": { "bsonType": "object", "properties": { "field": { "bsonType": "string" } } } }`                    |
| `$where`          | Allows the use of JavaScript expressions in queries (less efficient).                                     | `{ "$where": "this.field > 5" }`                                                                                      |

### Resorces

- [MongoDB Official](https://www.mongodb.com/docs/drivers/)

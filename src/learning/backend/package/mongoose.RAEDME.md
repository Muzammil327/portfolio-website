# Mongoose

## Coonection:

`utils/dbConn.js`

```bash
import mongoose from 'mongoose';

const Connect_DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(Connect_DB_URL);
    console.log(`Conneted To Mongodb Databse ${conn.connection.host}`);
    } catch(errro) {
        console.log("MongoDB Connection Error:", error);
    }
}

export default connectDB;
```

## Model Scheme:

`Typescript`

```bash
import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", userSchema);
```

`Javascript`

```bash
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
```

## Model Scheme Field:

- Type (String, mongoose.Schema.Types.ObjectId)
- required (true or false) `field must be provided`
- Unique (true or fasle) `field value must be unique`
- lowercase (true or false) `converts field value to lowercase`
- trim (true or false) `Removes leading and trailing whitespace`
- minlength `minimum length`
- maxlength `maximum length`
- default (value) `use when none is specified`
- enum (array or string) `Restricts the field value`
- ref (reference to other table) `reference to another model`

## Mongoose query methods:

| Operator               | Description                                           | Example                                                                                                |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `.find()`              | Retrieves all documents that match a query.           | `Model.find({})`                                                                                       |
| `.findOne()`           | Retrieves the first document that matches a query.    | `Model.findOne({ name: 'John' })`                                                                      |
| `.findById()`          | Retrieves a document by its unique identifier (\_id). | `Model.findById('someObjectId')`                                                                       |
| `.findByIdAndUpdate()` | Finds a document by ID and updates it.                | `Model.findByIdAndUpdate(id, update, options)`                                                         |
| `.findByIdAndDelete()` | Finds a document by ID and deletes it.                | `Model.findByIdAndDelete(id)`                                                                          |
| `.countDocuments()`    | Counts the number of documents matching a query.      | `Model.countDocuments({ age: { $gte: 18 } })`                                                          |
| `.deleteMany()`        | Deletes multiple documents that match a query.        | `Model.deleteMany({ age: { $lt: 18 } })`                                                               |
| `.deleteOne()`         | Deletes the first document that matches a query.      | `Model.deleteOne({ name: 'John' })`                                                                    |
| `.updateMany()`        | Updates multiple documents that match a query.        | `Model.updateMany({ age: { $lt: 18 } }, { $set: { status: 'minor' } })`                                |
| `.updateOne()`         | Updates the first document that matches a query.      | `Model.updateOne({ name: 'John' }, { $set: { age: 30 } })`                                             |
| `.sort()`              | Sorts the results.                                    | `Model.find().sort({ age: 1 })`                                                                        |
| `.limit()`             | Limits the number of documents returned.              | `Model.find().limit(10)`                                                                               |
| `.skip()`              | Skips a specified number of documents.                | `Model.find().skip(5).limit(10)`                                                                       |
| `.select()`            | Specifies which fields to include or exclude.         | `Model.find().select('name age -_id')`                                                                 |
| `.aggregate()`         | Performs complex aggregation operations.              | `Model.aggregate([{ $match: { status: 'active' } }, { $group: { _id: '$age', count: { $sum: 1 } } }])` |

## Setup with Javascript

```bash
npm init -y
npm i express dotenv cors dotenv bcryptjs uuid body-parser jsonwebtoken
npm i -D nodemon
mkdir models 
mkdir controllers 
mkdir utils
mkdir middleware
mkdir routes
type nul > index.js
type nul > utils/dbConn.js
type nul > utils/constant.js
type nul > .env.local
type nul > .gitignore
```

---

```bash
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```

---

```bash
// index.js
const express = require('express');
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = PORT || 3000;

const corsURL = [""];
app.use(
  cors({
    origin: corsURL,
    credentials: true,
  })
);


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

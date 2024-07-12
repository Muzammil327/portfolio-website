## Setup with Javascript

```bash
mkdir ts-backend
cd ts-backend/
npm init -y
npm i express dotenv
npm i -D typescript @types/express @types/node nodemon ts-node
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

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

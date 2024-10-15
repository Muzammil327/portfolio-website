# Setup with Typescript

```bash
mkdir node-ts-graphql-dynamoose
cd node-ts-graphql-dynamoose
npm init -y
npm i express dotenv cors dotenv bcryptjs uuid body-parser jsonwebtoken
npm i -D typescript @types/express @types/node nodemon ts-node @types/express @types/dotenv @types/cors @types/bcryptjs @types/uuid @types/body-parser @types/jsonwebtoken
npx tsc --init
mkdir models 
mkdir controllers 
mkdir utils
mkdir routes
mkdir middleware
mkdir src
type nul > src/index.ts
type nul > utils/dbConn.ts
type nul > utils/constant.ts
type nul > .env.local
type nul > .gitignore
```

---

```bash
{
  "compilerOptions": {   
    "target": "es2016",
    "module": "commonjs", 
    "outDir": "./dist",
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true, 
    "strict": true,
    "skipLibCheck": true
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

---

```bash
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
}
```

---

```bash
// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
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

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

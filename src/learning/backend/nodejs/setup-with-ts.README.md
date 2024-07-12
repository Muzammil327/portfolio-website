# Setup with Typescript

```bash
mkdir ts-backend
cd ts-backend/
npm init -y
npm i express dotenv
npm i -D typescript @types/express @types/node nodemon ts-node
npx tsc --init
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

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

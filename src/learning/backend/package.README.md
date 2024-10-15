# Package

- [Mongoose]()

## Cors

```bash
npm i cors
```

import cors from "cors";

const corsURL = ["https://full-stack-ecommerce-website-five.vercel.app"];

app.use(
cors({
origin: corsURL,
credentials: true,
})
);

---

# Dotenv

```bash
npm i dotenv
```

import dotenv from "dotenv";
dotenv.config();

---

# Nodemon

```bash
npm i nodemon
```

---

# Bcryptjs

```bash
npm i bcryptjs
```

---

# UUID

```bash
npm i uuid
```

import { v4 as uuidv4 } from 'uuid';

---

# Body Parser

```bash
npm i body-parser
```

---

# JSON Web Token

```bash
npm i jsonwebtoken
```

`jwt.verify` = token, secret, options
`jwt.decode`
`jwt sgn` = payload, secret, options

---

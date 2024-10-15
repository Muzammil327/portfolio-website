---
id: 14,
title: 'Express JS Mindmap.'
para: 'After follow these steps, you can get master on Express JS beginner to master level.'
date: '29-06-2024'
cat: 'Express JS'
image: '/blog/expressjs.webp'
keyword:
  [
    'Express JS',
    'Express JS learning',
    'Express JS learning path',
    'Express JS master level',
  ]
---

# Express JS

### Routes

```bash
import { Router } from 'express';

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.delete('/users', getUsers);
router.put('/users', getUsers);

export default router;
```

### Controllers

```bash
export const createUser = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error from Create User:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message || "Internal server error",
    });
  }
};
```

### Resorces

- [Express JS Official](/)

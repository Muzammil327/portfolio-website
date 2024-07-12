# Git

Git is a distributed version control system that tracks changes to files and allows multiple developers to collaborate on a project.

## Configuration

```bash
Set your name
git config --global user.name "Your Name"
```

---

```bash
Set your email
git config --global user.email "youremail@example.com"
```

## Initialization

---

```bash
Initialize a new repository:
git init
```

---

## Cloning a Repository

```bash
Clone a repository:
git clone https://github.com/username/repository.git
```

---

## Basic Workflow

```bash
Check the status of the repository:
git status
```

---

```bash
Stage changes for commit:
git add <file>
git add .  // all stage
```

---

```bash
Commit changes:
git commit -m "Commit message"
```

---

```bash
Pull changes from a remote repository:
git pull
```

---

```bash
Push changes to a remote repository:
git push
git push origin <branch-name>
```

## Branching

```bash
List branches:
git branch
```

---

```bash
Create a new branch:
git branch <branch-name>
```

---

```bash
Switch to a branch:
git checkout <branch-name>
```

---

```bash
Create and switch to a new branch:
git checkout -b <branch-name>
```

---

```bash
Merge a branch into the current branch:
git merge <branch-name>
```

## Remote Repositories

```bash
List remote repositories:
git remote -v
```

---

```bash
Remove a remote repository:
git remote remove <name>
```

---

```bash
Add a remote repository:
git remote add origin https://github.com/username/repository.git
```

## Viewing History

```bash
View commit history:
git log
```

---

```bash
View a specific commit:
git show <commit-hash>
```

---

```bash
Reverse Commit Changing 
git revert <commit-hash>
```

---

```bash
View changes:
git diff
```

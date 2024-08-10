# Git

Git is a distributed version control system that tracks changes to files and allows multiple developers to collaborate on a project.

## Configuration

- `Set your name:` = git config --global user.name "Your Name"
- `Set your email:` = git config --global user.email "youremail@example.com"

## Initialization

- `Initialize a new repository:` = git init
- `Clone a repository:` = git clone https://github.com/username/repository.git

## Basic Workflow

- `Check the status of the repository:` = git status
- `Stage changes for commit:` = git add <file> || git add .
- `Commit changes:` = git commit -m "Commit message"
- `Pull changes from a remote repository:` = git pull
- `Push changes to a remote repository:` = git push || git push origin <branch-name>

## Branching

- `List branches:` = git branch
- `Create a new branch:` = git branch <branch-name>
- `Switch to a branch:` = git checkout <branch-name>
- `Create and switch to a new branch:` = git checkout -b <branch-name>
- `Merge a branch into the current branch:` = git merge <branch-name>

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

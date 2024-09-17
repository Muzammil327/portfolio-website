# Git

Git is a distributed version control system that tracks changes to files and allows multiple developers to collaborate on a project.

## Configuration

- `Set your global name:` = git config --global user.name "Your Name"
- `Set your global email:` = git config --global user.email "youremail@example.com"

## Initialization

- `Initialize a new repository:` = git init
- `Clone a existing repository:` = git clone https://github.com/username/repository.git

## Basic Workflow

- `Check the status of the working directory:` = git status
- `Stage changes for commit:` = git add <file> || git add .
- `Commit staged changes with a message:` = git commit -m "Commit message"
- `Pull changes from a remote repository:` = git pull
- `Push changes to a remote repository:` = git push
- `Push to a specific branch:` = git push origin <branch-name>

## Branching and Merging

- `List branches:` = git branch
- `Create a new branch:` = git branch <branch-name>
- `Switch to an existing branch:` = git checkout <branch-name>
- `Create and switch to a new branch:` = git checkout -b <branch-name>
- `Merge changes from another branch into the current branch:` = git merge <branch-name>
- `Delete a local branch` = git branch -d <branch-name>
- `Force delete a local branch` = git branch -D <branch-name>

## Remote Repositories

- `List all remote repositories` = git remote -v
- `Add a new remote repositories` = git remote add origin https://github.com/username/repository.git
- `Remove an existing remote repositories` = git remote remove <old-name> <new-name>
- `Fetch latest changes from the remote without merging` = git fetch
- `Push to the default remote` = git push origin <branch-name>
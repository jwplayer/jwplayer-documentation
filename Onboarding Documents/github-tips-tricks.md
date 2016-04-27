# Git Tips & Tricks

Commit strategies vary depending on the state of the project. The most common scenarios are outlined below.

## In sync with master

No PRs have been merged with master since you started working, so you can push your changes up and create a PR. There should be no conflicts.

## Behind master

Other PRs have been merged with the master branch since you started working. You'll need to rebase the latest changes from master into your feature/bug branch. Rebasing can be tricky. More on that below.

## Squashing commits
You may have commit messages that don't add value to the ticket you're working on. 

Eg. 

```
Working on X. Not yet done, but creating a 
checkpoint in case I need to revert some code.
```

You're encouraged to commit as frequently as makes sense for your work flow. Before creating a PR, however, review the commit messages in your branch and get rid of the commit messages you don't want. The git docs provides a step by step guide on [rewriting history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History).


## Rebasing against master

There are two (2) common scenarios when rebasing against master.

### You've already pushed commits
You've just attemmpted to create a PR - you already have commits pushed to the remote tracking branch - and you notice that your branch is behind master. In this case, it's sometimes easier to create a new branch off master, then merge in your changes from the branch containing your work. Otherwise, you could end up in conflict hell trying to do a rebase and having to resolve merge conflicts in each commit.

### Your work is untracked
You've yet to commit any work, but PRs have been merged to master. (*It's assumed that you've installed YADR at this point and can take advantage of git customizations*.)

1. Stash your changes (`git stash`)
2. Switch to master (`gco master`)
3. Update (`gpl`)
4. Switch back to your feature branch (`gco feature_branch`)
5. Start rebasing interactively (`git rebase -i master`)
5. Pick all commit msgs
6. Save and exit rebasing step
7. Amend (cleanup) commit messages
8. Save and exit commit message cleanup step
9. Pop your stashed changes (`git stash pop`)
	- You may have merge conflicts. If so, resolve them before moving on. (SourceTree makes this easy) 
10. Push changes to the remote tracking branch
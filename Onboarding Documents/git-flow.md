# Git Flow

We use gitflow (you can find more [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/). After develop branch has all the commits we create a release candidate branch that is used for all the fixes for bugs discovered during testing. After RC is ready for release we merge it into master, and later back into develop to apply all the bug fixes on current work in progress.

To Summarize:

* After a task is assigned to you create a new branch off develop (or master if you’re working on a hotfix; release candidate if it’s a bug fix for release). 
* Branch names should give information about the features/bugs being implemented/addressed.
* As you implement the feature commit often.
* After you’re done with your work create a pull request on github.
* Pull request is to be verified and merged by one of the senior engineers (MaxM for iOS, PaulM for Android).
* YOU ARE NOT SUPPOSED TO COMMIT STRAIGHT INTO MASTER/DEVELOP AS WELL AS MERGING ANYTHING INTO MASTER/DEVELOP YOURSELF.
* If, while working on a task, you realized that the code you’re modifying ‘stinks’, please don’t make changes not related to current task; at the same time you’re strongly encouraged to create a TODO in code and a chore in pivotal to clean-up the code in the future.
* It is recommended to add pivotal story id to git commit messages (e.g. ‘[#91124198]’ - in square brackets with # sign) so git commits are linked to appropriate stories.
* After creating a github account, [contact the DevOps team](mailto:devops@jwplayer.com) and ask them to give you access to the JWPlayer private repos. 
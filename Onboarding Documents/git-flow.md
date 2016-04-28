# Git Flow

We use gitflow (you can find more [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/)).

### Github Setup

* [Contact the DevOps team](mailto:devops@jwplayer.com) and ask them to give your github account access to the [JWPlayer private repos](https://github.com/jwplayer). You'll need to create a github account if you do not already have one.
* Clone the repos your team works on
	* [Player](https://github.com/jwplayer/jwplayer-docs-new/blob/player/updates/Onboarding%20Documents/player.md#project-setup) 

### Working on Tasks

* **Start a task in JIRA**. When a task is assigned to you (or you've assigned yourself a task) in JIRA, start the task so your teammates know what you're working on. 
* **Ensure your local repos are current before writing code**. Update your local copy of the repository that the ticket pertains to.
* **Create a feature/bug branch**. Branch names should give information about the features/bugs being implemented/addressed.
* **Commit often**. As you work on a feature, it's beneficial to have several checkpoints in the event that you need to retrace your steps, roll back, or hand off incomplete work to a teammate. 
* **Include the ticket number in your commit messages** - this triggers updates in JIRA's swim lanes.
* **Create a PR on github**. After you’re done with your work, create a pull request on github. Include the ticket number in your PR (eg. `JW7-2025`). JIRA will automatically update the ticket's status.
* **Notify the team**. Pull requests are reviewed by a senior engineer on your team. The reviewer will either leave comments if improvements are necessary or simply merge the PR. In cases where the comments require significant time/effort (~1hr+) to be accepted, the PR will be closed until the comments are addressed. You are encouraged to discuss the comments/feedback offline with the reviewer if they aren't clearly understood. (**UNDER NO CIRCUMSTANCES SHOULD YOU COMMIT DIRECTLY TO THE MASTER BRANCH**).

### Caveat

* **Adhere to the acceptance criteria.** Do not make changes outside of the scope of the ticket you're working on. If you see opportunities for code improvement, create a new ticket in JIRA that's specific to the improvements and mention them at the next backlog grooming session; they will be scored and prioritized then.
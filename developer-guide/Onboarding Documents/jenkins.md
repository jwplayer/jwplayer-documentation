# Jenkins

Jenkins continuous integration system is used for CI. As mentioned above after code gets committed/merged to develop or master branches jenkins performs a build and uploads it to crashlytics beta.

A couple of things to point out:
* after SDK job is done on jenkins an upstream Demo build starts.
* SDK build version and Demo build version are taken from jenkins build number.

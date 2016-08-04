# jwplayer-docs

This is the place where we will keep our support docs.

[Onboarding Docs](https://github.com/jwplayer/jwplayer-docs-new/tree/master/Onboarding%20Documents)


## Developing Locally

#### Install [MkDocs](http://www.mkdocs.org/)

```
$ pip install mkdocs
```

#### Install Node modules:

```
$ npm install
```

#### Define your build directory in *mkdocs.yml*:

For example:
```
site_dir: developer-guide
```

#### Run Grunt and serve via localhost:

```
$ grunt serve
```

Run `grunt` to for a full build without serving. This may be useful at times because `grunt serve` builds via Grunt's watch task, which may not always be perfect.

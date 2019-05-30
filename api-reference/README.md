# jwplayer-api-reference

[Onboarding Docs](https://github.com/jwplayer/jwplayer-docs-new/tree/master/Onboarding%20Documents)

## Developing Locally

#### Install [MkDocs](http://www.mkdocs.org/)

```
$ pip install mkdocs --upgrade
$ pip install markdown-fenced-code-tabs
```

#### Install Node modules:

```
$ yarn install
```

#### Install Grunt globally:

```
$ yarn add grunt -g cli
```

#### Run Grunt and serve via localhost:

```
$ mkdocs build
$ grunt serve
```

Run `grunt` to for a full build without serving. This may be useful at times because `grunt serve` builds via Grunt's watch task, which may not always be perfect.

# City of Portland Pattern Library

## Getting started

### Clone repository
```sh
git clone git@github.com:eGovPDX/portland-pattern-lab.git

cd portland-pattern-lab
```

### Install npm dependencies
```sh
npm install
```

### Start local server and watch for changes
Both commands must be running in order to watch for changes.
```sh
npm run pl:dev        # build patterns and start Pattern Lab server

npm run webpack:dev   # compile sass and run the browsersync dev server
```
### Prepare assets for publishing
We publish the CSS and JS files with our patterns, so if you want to make sure that you are correctly including just what you need for the CSS and JS assets, you'll need to run the following commands:
```sh
npm run pl:build        # make sure the patterns are updated
npm run webpack:build   # minify and purge asset files
```
## Working with patterns
# starter-angular-component
Starter project for doing component based development using AngularJS.
The project comes with a pre-configured build process with some nice features:

  - Automated gulp build process, with re-build on changes
  - Karma and Jasmine automated tests
  - Automatic browser reloads (thanks to BrowserSync)
  - Automatic LESS, JS and HTML minification, concatenation and angular templates generation
  - Dev server and automatic js compilation
  - Super easy to use and extend

## Install
- First install npm global packages needed
``npm install -g jshint gulp protractor karma karma-chrome-launcher karma-phantomjs-launcher``

- Update Webdriver (for E2E tests)
``webdriver-manager update``

- Run `npm install`
- Run `gulp`

## To run for development use
`gulp dev`

## To run e2e tests
Start webdriver standalone
`webdriver-manager start`

Run protractor
`protractor protractor.conf.js`

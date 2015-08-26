# starter-angular-component
Starter project for doing component based development using AngularJS.
The project comes with a pre-configured build process with some nice features:

  - Automated gulp build process, with re-build on changes
  - Unit tests with Karma and Jasmine run automatically on changes
  - Automatic browser reloads (thanks to BrowserSync)
  - Automatic LESS, JS and HTML minification, concatenation and angular templates generation
  - Dev server and automatic js compilation
  - Super easy to use and extend
  - E2E tests with protractor

## Install
- First install npm global packages needed
``npm install -g jshint gulp protractor karma karma-chrome-launcher karma-phantomjs-launcher``

- Update Webdriver (for E2E tests)
``webdriver-manager update``

- Run `npm install`
- Run `gulp`

## For development
A dev server with automatic files compilation on change, test runner and hot reloads is provided.
``gulp dev``

## To run e2e tests
Start the development server
``gulp dev``

On another command line tab, start webdriver standalone
``webdriver-manager start``

On another command line tab, run protractor
``protractor protractor.conf.js``

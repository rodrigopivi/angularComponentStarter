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

# About this
This example project was part of an starter kit I've built for a course about "Testing AngularJS Apps" where we talked about component design and modularizartion as an essential practice for good testing. The slides are available at http://www.slideshare.net/RodrigoPimentel10/probando-aplicaciones-angularjs

# Author
Rodrigo Pimentel

# License
Copyright (C) 2015 Rodrigo Pimentel

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.

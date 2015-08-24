(function() {
  "use strict";

  describe('Should to some e2e test', function() {
    it('getting our main page from the local dev server', function() {
      browser.get('http://0.0.0.0:5000');
      browser.waitForAngular();
      expect(browser.getTitle()).toBe("Starter Angular Component Demo");
      // http://angular.github.io/protractor/#/tutorial
      // https://github.com/angular/protractor/blob/master/docs/debugging.md
      // to debug use browser.pause(); and from the terminal use 'repl'
    });
  });

})();

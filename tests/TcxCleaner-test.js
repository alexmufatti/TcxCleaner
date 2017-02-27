var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var TcxCleaner = require('../TcxCleaner');

describe('TcxCleaner', function() {
  it('StripTag() should return string if no tag specified', function() {
    var tcx = new TcxCleaner([]);
    expect(tcx.StripTag("aaa", "")).to.equal("aaa");
  });

  it('StripTag() should string tag', function() {
    var tcx = new TcxCleaner([]);
    expect(tcx.StripTag("<aaa></aaa>", "aaa")).to.equal("");
  });

  it('StripTag() should string tag', function() {
    var tcx = new TcxCleaner([]);
    expect(tcx.StripTag("a<aaa>saaa</aaa>a", "aaa")).to.equal("aa");
  });
});

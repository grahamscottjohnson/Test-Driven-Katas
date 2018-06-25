const chai = require('chai');
const expect = chai.expect;
const specs = require('./wrap');

describe('wrap', ()=>{
    it('Returns empty string if empty string was provided', () => {
        expect(specs.wrap("", 10)).to.equal("");
      });
    it('gets column amount of chars', ()=>{        
        const testString = 'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.'
        expect( specs.splitByNChars( testString, 20 ).firstLine ).to.equal('Lorem ipsum dolor');
    })
});
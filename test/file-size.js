const chai = require('chai');
const assert = chai.assert;
const fileSize = require('../helper/file-size');

const passingTestfile = {
  files: [{
    originalname: 'Name of Testfile',
    size: 128
  }]
}
const failingTestfile = {
  files: [{
    name: 'Name of Testfile',
    height: 128
  }]
}
describe('file-size Helper function', () => {

  it('Should return the original name of a file', () => {
    assert.equal('Name of Testfile', fileSize(passingTestfile).name);
  });

  it('Should return the size of a file', () => {
    assert.equal(128, fileSize(passingTestfile).size);
  });

  it('Should return a string stating that no file was found if the argument passed doesnt meet the required format', () => {
    assert.equal('Error: No File found', fileSize({}));
  });

  it('Should return a string stating that no file name was found if the argument doesnt hold a originalname property', () => {
    assert.equal('No file name', fileSize(failingTestfile).name);
  });

  it('Should return a filesize of 0 if theres no size property', () => {
    assert.equal(0, fileSize(failingTestfile).size);
  });
});

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  suite('getNum', () => {
    test('convertHandler should correctly read a whole number input', () => {
      assert.strictEqual(convertHandler.getNum(3), 3);
      assert.strictEqual(convertHandler.getNum(3.14), 3.14);
    });

    test('convertHandler should correctly read a decimal number input', () => {
      assert.strictEqual(convertHandler.getNum('3'), 3);
      assert.strictEqual(convertHandler.getNum('3.14'), 3.14);
      assert.strictEqual(convertHandler.getNum('4gal'), 4);
    });

    test('convertHandler should correctly read a fractional input', () => {
      assert.strictEqual(convertHandler.getNum('1/2'), 0.5);
      assert.strictEqual(convertHandler.getNum('1/2km'), 0.5);
    });

    test('convertHandler should correctly read a fractional input with a decimal', () => {
      assert.strictEqual(convertHandler.getNum('3.14/2'), 1.57);
      assert.strictEqual(convertHandler.getNum('5.4/3'), 1.8);
    });

    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', () => {
      assert.throws(() => convertHandler.getNum('3/2/3'), Error, 'invalid number');
    });

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', () => {
      assert.strictEqual(convertHandler.getNum(), 1);
      assert.strictEqual(convertHandler.getNum('kg'), 1);
    });
  });

  suite('getUnit', () => {
    test('convertHandler should correctly read each valid input unit', () => {
      assert.strictEqual(convertHandler.getUnit('4gal'), 'gal');
      assert.strictEqual(convertHandler.getUnit('1/2km'), 'km');
      assert.strictEqual(convertHandler.getUnit('5.4/3lbs'), 'lbs');
      assert.strictEqual(convertHandler.getUnit('kg'), 'kg');
    });

    test('convertHandler should correctly return an error for an invalid input unit', () => {
      assert.throws(() => convertHandler.getUnit(), Error, 'invalid unit');
      assert.throws(() => convertHandler.getUnit('asdf'), Error, 'invalid unit');
      assert.throws(() => convertHandler.getUnit('7am'), Error, 'invalid unit');
    });
  });

  suite('getReturnUnit', () => {
    test('convertHandler should return the correct return unit for each valid input unit', () => {
      assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
      assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal');
      assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km');
      assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi');
      assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg');
      assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs');
    });
  });

  suite('spellOutUnit', () => {
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', () => {
      assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons');
      assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters');
      assert.strictEqual(convertHandler.spellOutUnit('mi'), 'miles');
      assert.strictEqual(convertHandler.spellOutUnit('km'), 'kilometers');
      assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds');
      assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms');
    });
  });

  suite('convert', () => {
    test('convertHandler should correctly convert gal to L', () => {
      assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.1);
      assert.approximately(convertHandler.convert(4, 'gal'), 15.14164, 0.1);
    });
    
    test('convertHandler should correctly convert L to gal', () => {
      assert.approximately(convertHandler.convert(1, 'L'), 0.26417, 0.1);
      assert.approximately(convertHandler.convert(15.14164, 'L'), 4, 0.1);
    });
    
    test('convertHandler should correctly convert mi to km', () => {
      assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.1);
      assert.approximately(convertHandler.convert(0.31069, 'mi'), 0.5, 0.1);
    });
    
    test('convertHandler should correctly convert km to mi', () => {
      assert.approximately(convertHandler.convert(1, 'km'), 0.62137, 0.1);
      assert.approximately(convertHandler.convert(0.5, 'km'), 0.31069, 0.1);
    });
    
    test('convertHandler should correctly convert lbs to kg', () => {
      assert.approximately(convertHandler.convert(1, 'lbs'), 0.453592, 0.1);
      assert.approximately(convertHandler.convert(1.8, 'lbs'), 0.81647, 0.1);
    });
    
    test('convertHandler should correctly convert kg to lbs', () => {
      assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.1);
      assert.approximately(convertHandler.convert(4, 'kg'), 8.81850, 0.1);
    });
  });
});
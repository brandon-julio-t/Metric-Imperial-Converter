const InputNumberUnitSplitter = require('../utilities/input-number-unit-splitter.js');
const GetNumberInteractor = require('../interactors/get-number-interactor.js');
const GetUnitInteractor = require('../interactors/get-unit-interactor.js');
const GetReturnUnitInteractor = require('../interactors/get-return-unit-interactor.js');
const SpellOutUnitInteractor = require('../interactors/spell-out-unit-interactor.js');
const ConvertInteractor = require('../interactors/convert-interactor.js');

function ConvertHandler() {

  this.getNum = function(input) {
    const { number } = new InputNumberUnitSplitter(input).execute();
    let result = new GetNumberInteractor(number).execute();

    return result;
  };
  
  this.getUnit = function(input) {
    const { unit } = new InputNumberUnitSplitter(input).execute();
    let result = new GetUnitInteractor(unit).execute();
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = new GetReturnUnitInteractor(initUnit).execute();
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = new SpellOutUnitInteractor(unit).execute();
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = new ConvertInteractor(
      initNum,
      initUnit,
      { galToL, lbsToKg, miToKm }
    ).execute();
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

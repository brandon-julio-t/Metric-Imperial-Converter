'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const { input } = req.query;
    
    let isNumError = false;
    let isUnitError = false;

    let initNum = null;
    let initUnit = null;
    
    try {
      initNum = convertHandler.getNum(input);
    } catch (_) {
      isNumError = true;
    }
    
    try {
      initUnit = convertHandler.getUnit(input);
    } catch (_) {
      isUnitError = true;
    }

    let error = '';
    if (isNumError && isUnitError) {
      error = 'invalid number and unit';
    } else if (isNumError || isUnitError) {
      error = `invalid ${isNumError ? 'number' : 'unit'}`;
    }

    if (error) {
      return res.send(error);
    }
    
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    res.json({ initNum, initUnit, returnNum, returnUnit, string });
  });

};
